<template>
  <div class="app">
    <!-- Sidebar -->
    <div class="flex relative">
      <div :class="['flex-1 h-screen overflow-y-auto relative',
                      user.user.token ? 'ml-8' : '']">
        <div class="fixed top-0 right-0 left-0 z-19"><TopBar /></div>
        <!-- Content -->
        <div :class="[user.user.token ? 'ml-8' : 'ml-0', 'mt-10 bg-gray-50']"><router-view /></div>
      </div>
      <div class="fixed left-0 top-0 z-20"><Sidebar2 /></div>
    </div>
  </div>
</template>


<script setup>
import Sidebar2 from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue"
import { AUTH } from "@/stores";
const user = AUTH();
document.title = import.meta.env.VITE_APP_TITLE;
</script>



