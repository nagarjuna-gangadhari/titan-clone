<template>
  <div v-show="user.user.token"
    class="sticky top-0 min-h-10 h-10 backdrop-opacity-10 backdrop-invert bg-white/80 shadow-2xl flex justify-between py-1 px-3 md:px-6 space-x-3 md:space-x-6 border-b"
  >
    <div class="flex items-center justify- flex-1">
      <button
        @click="general_store.sidebarOpened = true"
        class="mr-3 md:hidden flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-red-600 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
        type="button"
        value="Open sidebar"
      >
        <Bars3BottomLeftIcon class="h-6 w-6" />
      </button>
    </div>
    <Menu  as="div" class="relative flex-shrink-0">
      <MenuButton 
        class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-red-500 focus:ring-black"
      >
        <img
          class="inline w-8 h-8 rounded-full"
          src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
          alt=""
        />
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out transform"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <MenuItems 
          class="overflow-hidden absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg origin-top-right focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >My Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active, disabled }" disabled>
            <a
              href="#"
              :class="{ 'bg-gray-100': active, 'opacity-40': disabled }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Settings</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Help</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="/logout"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Log out</a
            >
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid/index.js";
import { GeneralStore, AUTH } from "@/stores";

const general_store = GeneralStore();
const user = AUTH();

</script>
