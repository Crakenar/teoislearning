<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationMenu from "@/components/NavigationMenu.vue";
</script>

<template>
  <NavigationMenu />
  <router-view v-slot="{ Component, route }">
    <!-- Use a custom transition or fallback to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
