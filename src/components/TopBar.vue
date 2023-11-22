<template>
  <div id="topbar" 
    class="sticky top-0 min-h-8 h-8 backdrop-opacity-10 backdrop-invert bg-white/80 shadow-2xl flex items-center justify-between px-3 md:px-2 space-x-3 md:space-x-6 border-b"
  >
    <div class="flex items-center flex-1 space-x-1">
      <button
        @click="general_store.sidebarOpened = true"
        class="mr-3 md:hidden flex-none flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-red-600 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
        type="button"
        value="Open sidebar"
      >
        <Bars3BottomLeftIcon class="h-5 w-5" />
      </button>
      <AcademicCapIcon class="w-6 h-6 bg-green-500 rounded-full" />
      <div class="text-xs font-bold font-sans">{{title}}</div>
      <p class="">|</p>
      <p class="text-xs text-gray-500" v-text="path"></p>
    </div>
    <Listbox v-model="general_store.selectedfontFamily">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default pr-10 text-left sm:text-sm"
        >
          <span class="block truncate">{{ general_store.selectedfontFamily }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-0.5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="font in fontFamily"
              :key="font"
              :value="font"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-1 pl-6',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ font }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <div class="flex items-center text-sm space-x-2 cursor-pointer"><p>Help</p> <PhoneIcon class="w-4 h-4" /></div>
    <Menu  as="div" class="relative flex-shrink-0">
      <MenuButton v-if="user"
        class="rounded-ful focus:scale-105"
      >
        <img
          class="inline w-7 h-7 rounded-full"
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
              href="/account/edit"
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
              href="/help"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Help</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="/account/logout"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Log out</a
            >
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
    
  </div>
  <div id="myBar" class="w-full h-[2px] bg-cover bg-center bg-[url('@/assets/topBar.jpg')]"></div>
</template>

<script setup>
import {ref} from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems, Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption, } from "@headlessui/vue";
import {
  Bars3BottomLeftIcon,
  AcademicCapIcon, PhoneIcon
} from "@heroicons/vue/24/solid/index.js";
import { useAuthStore } from "@/stores";
import { GeneralStore } from "@/stores";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { router } from "@/routers/index"
const fontFamily = [
  'font-mono',
  'font-serif',
  'font-sans' 
]

const { user } = useAuthStore();
const general_store = GeneralStore();
const title = import.meta.env.VITE_APP_TITLE;
var path = ref('');

router.afterEach((to, from) =>{
  path.value=to.path.slice(1)
});
</script>
<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
</script>