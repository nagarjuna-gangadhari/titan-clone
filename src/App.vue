<script setup>
  import Sidebar2 from "./components/SideBar.vue";
  import TopBar from "./components/TopBar.vue";
  import { useAuthStore } from "@/stores";
  const authstore = useAuthStore();
  document.title = import.meta.env.VITE_APP_TITLE;
</script>

<style>
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(167, 167, 167);
    border-radius: 6px;
  }
</style>


<template>
  <div class="app">
    <!-- Sidebar -->
    <div class="fixed top-0 right-0 left-0 z-[9999]"><TopBar /></div>
    <div>
      <div :class="[authstore.user ? 'mt-8' : '']">
        <div v-if="authstore.user" class="fixed left-0 top-8 z-[8888]"><Sidebar2 /></div>
        <!-- Content -->
        <div :class="[authstore.user ? 'md:ml-8' : '']"><router-view /></div>
      </div>
    </div>
  </div>
</template>