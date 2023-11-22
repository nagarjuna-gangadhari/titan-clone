<script setup>
  import Sidebar2 from "./components/SideBar.vue";
  import TopBar from "./components/TopBar.vue";
  import { useAuthStore } from "@/stores";
  import { useToast } from "vue-toastification";
  import { GeneralStore } from "@/stores";
  const general_store = GeneralStore();


  const toast = useToast();
  const authstore = useAuthStore();
  document.title = import.meta.env.VITE_APP_TITLE;

  const notificationSocket = new WebSocket('ws://' + import.meta.env.VITE_API_URL + '/ws/chat/notification/');
  notificationSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      const message = data['message'];
      if(message){
        console.log(message)
        toast(message)
        return message
      }
      
      // Handle incoming message
  };
  notificationSocket.onclose = function (e) {
      console.error('Chat socket closed unexpectedly');
  };




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
  <div class="app antialiased" :class="general_store.selectedfontFamily">
    <!-- Sidebar -->
    <div v-if="authstore.user" class="fixed top-0 right-0 left-0 z-[9999]"><TopBar /></div>
    <div>
      <div :class="[authstore.user ? 'mt-8' : '']">
        <div v-if="authstore.user" class="fixed left-0 top-8 z-[8888]"><Sidebar2 /></div>
        <!-- Content -->
        <div :class="[authstore.user ? 'md:ml-8' : '']"><router-view /></div>
      </div>
    </div>
  </div>
</template>