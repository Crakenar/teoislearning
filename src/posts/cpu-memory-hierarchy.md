---
title: CPU Memory Hierarchy — Registers to RAM
date: 2026-08-22
tags: [cpu, architecture, cache, c++]
description: Block diagram of a multi-core CPU (registers, ALU, FPU, vector unit, control unit, L1/L2/L3) plus per-level latency and what actually happens on a cache miss.
---

## Classic single-core block diagram

Control unit drives every other block; register file is the hub everything else reads/writes through.

![Single-core CPU block diagram](/blog/cpu-block-diagram.svg)

Green dashed lines are control signals — the control unit doesn't compute anything itself, it decodes the opcode and tells the register file, ALU, FPU, vector unit and PC what to do this cycle. Solid lines are data actually moving (instruction bytes, operands, results, loads/stores).

## Multi-core memory hierarchy

Every core repeats the block above. Shared across cores: L3 and RAM.

![Multi-core memory hierarchy diagram](/blog/cpu-memory-hierarchy.svg)

Each core's L1/L2 are private. All cores fall through to the same L3, then the same RAM. The coherence bus (MESI/MSI) sits between the L1/L2 levels so two cores never silently disagree about the same address — a write on one core invalidates or downgrades any other core's cached copy before it's allowed to proceed.

## Latency by level

Typical desktop x86, ~3 GHz core (1 cycle ≈ 0.33 ns):

| Level | Latency (cycles) | ~time | Size (typical) |
|---|---|---|---|
| Register | 0 (same cycle) | — | ~1 KB total |
| L1 (i/d) | 4-5 | ~1.3 ns | 32-64 KB |
| L2 | 10-14 | ~4 ns | 256 KB - 1 MB |
| L3 | 30-50 | ~12 ns | several MB, shared |
| RAM (DRAM) | 150-300 | ~60-100 ns | GBs |
| SSD/disk (worst case) | 10,000-100,000+ | tens of µs+ | — |

RAM is ~50-100x slower than L1. That gap is the entire reason cache hierarchy exists.

## What happens on a cache miss

Core wants address `X` (a load instruction):

1. **L1 check** — tag compare in L1d. Miss (line not present or invalid). Costs the ~4 cyc lookup, falls through.
2. **L2 check** — same tag compare at L2. Hit: line copied up into L1 (evicting an LRU line there — if that evicted line was dirty, write it back down to L2 first). Cost ≈ L1 lookup + L2 latency (~14 cyc total).
3. **L3 check** — L2 also misses, check shared L3. Hit: line pulled into L2, then into L1. Cost stacks: ~4 + 12 + 40 cyc.
4. **Main memory** — L3 misses too, request goes to the memory controller → DRAM. Row activate + column read, line comes back (~200 cyc), fills L3 → L2 → L1 on the way up (inclusive fill).
5. **Core stalls** — dependent instructions block (or an out-of-order scheduler runs independent instructions to hide the latency) until data arrives. A simple in-order core just blocks.
6. **Multi-core + shared line**: before the miss is satisfied, the coherence bus snoops other cores' L1/L2. If another core holds that line **Modified**, it must write back and downgrade (M→S) before this core's fill completes — extra bus transaction on top of raw cache/memory latency. If this is a *write* miss, other copies get **Invalidated** instead of downgraded.

Rule of thumb: full miss down to RAM costs **~250-300 cycles**, vs **4 cycles** for an L1 hit — roughly a 70x penalty. That's why cache-friendly access patterns (sequential, blocked/tiled loops, avoiding pointer-chasing) matter so much in perf-sensitive C++.
