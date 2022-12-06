<template>
  <div v-show="user.user.token" class="flex min-h-screen" @mouseenter="general_store.sidebarHover=true" @mouseleave="general_store.sidebarHover=false">
    <TransitionRoot :show="general_store.sidebarOpened" >
        <Dialog as="div" @close="general_store.sidebarOpened = false" class="fixed inset-0 z-40 md:hidden">
            <TransitionChild
                enter="transition ease-in-out duration-200 transform"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transition ease-in-out duration-200 transform"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
                as="template">
                <div class="flex relative z-10 flex-col w-64 h-full bg-gray-50 border-r border-gray-200 md:hidden">
                    <button
                    @click="general_store.sidebarOpened = false"
                    class="hover:ring-2 hover:ring-gray-300 flex absolute top-2 right-2 justify-center items-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                    type="button" value="Close sidebar">
                    <BackspaceIcon class="w-5 h-5"/>
                    </button>
                    <div class="px-6 pt-8 pb-4">
                    <a href="/">
                        <Logo class="w-auto h-9"/>
                    </a>
                    </div>
        
                    <div class="overflow-y-auto flex-1">
                        <div class="mb-10">
                            <nav class="mt-2 px-2">
                                <NavItem :item="item" v-for="item in navItems" :key="item.label" />
                            </nav>
                        </div>

                    </div>
                </div>
            </TransitionChild>
            <TransitionChild
                enter="transition-opacity ease-linear duration-200"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity ease-linear duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
                as="template">
                <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-50"></DialogOverlay>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
 
    <div class="hidden w-16 hover:w-64 bg-gray-50 border-r border-gray-200 md:block">
        <div class="py-4 px-6">
            <a href="/">
            <Logo class="w-auto h-9"/>
            </a>
        </div> 
        <nav class="mt-2 px-2">
            <NavItem :item="item" v-for="item in navItems" :key="item.label" />
        </nav>

    </div>
  </div>
  <SearchCenterMOdel />
</template>
 
<script setup>
import {Dialog, DialogOverlay, TransitionChild, TransitionRoot} from '@headlessui/vue';
import {MagnifyingGlassIcon, HomeIcon, BackspaceIcon, IdentificationIcon, BuildingLibraryIcon, UserIcon, ArrowPathIcon } from '@heroicons/vue/24/solid/index.js';
import Logo from "./Logo.vue";
import NavItem from "./NavItem.vue";
import SearchCenterMOdel from "../components/center/SearchCenterModel.vue"
import { GeneralStore, AUTH } from '@/stores';
import { useToast } from 'vue-toastification';
import { useEvents } from '../services/events';

const event = useEvents()

const navItems = [
	{ href: "/", active: false, label: "Home", children: [], icon: HomeIcon },
	{
		href: "#", active: false,
		label: "Account",
		children: [
			{ href: "/accounts/me", active: false, label: "Me", children: [], icon: UserIcon },
			{ href: "/accounts/reset-password", active: false, label: "Reset Password", children: [], icon: ArrowPathIcon },
		],
		icon: IdentificationIcon,
	},
	{
		href: "#", active: false,
		label: "Center",
		children: [
			{ href: "/center", active: false, label: "Find", children: [], icon: MagnifyingGlassIcon },
			{
				href: "/center/22/232", active: false,
				label: "Admin",
				children: [],
				icon: null,
			},
		],
		icon: BuildingLibraryIcon,
	},
];


const general_store = GeneralStore()
const user = AUTH()



</script>