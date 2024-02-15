<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);

const menuList = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/education",
    label: "Education",
  },
  {
    path: "/work",
    label: "Work",
  },
  {
    path: "/skills",
    label: "Skills",
  },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
<template>
  <div>
    <div class="bg-transparent">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-xl font-bold md:text-2xl"
            >TeoIsLearning
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleMenu" class="flex md:hidden">
            <button
              type="button"
              class="hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="menuOpen ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <router-link
            v-for="item in menuList"
            :to="{ path: item.path }"
            class="menu-item"
            :class="{ 'menu-item-active': $route.path === item.path }"
            >{{ item.label }}
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  @apply inline-block px-4 py-2 rounded-full transition-colors duration-300;
  color: white;
}

.menu-item:hover {
  @apply bg-gray-100 text-gray-800;
}

.menu-item-active {
  @apply bg-gray-200 text-gray-800;
}
</style>
