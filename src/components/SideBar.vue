<template>
  <div v-show="authstore.user" class="flex min-h-screen" @mouseenter="general_store.sidebarHover=true" @mouseleave="general_store.sidebarHover=false">
    <TransitionRoot :show="general_store.sidebarOpened" >
        <Dialog as="div" @close="general_store.sidebarOpened = false" class="fixed inset-0 z-[9999] md:hidden">
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
                    <div class="px-6 py-2">
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
 
    <div class="hidden w-12 hover:w-64 bg-gray-50 border-r border-gray-200 md:block drop-shadow-2xl h-screen">
        <nav class="mt-2">
            <NavItem :item="item" v-for="item in navItems" :key="item.label" />
        </nav>

    </div>
    
  </div>
  <SearchCenterMOdel />
</template>
 
<script setup>
import {Dialog, DialogOverlay, TransitionChild, TransitionRoot} from '@headlessui/vue';
import {MagnifyingGlassIcon, HomeIcon, BackspaceIcon, IdentificationIcon, BuildingLibraryIcon, UserIcon, ArrowPathIcon, RectangleGroupIcon, EnvelopeIcon,
        BookOpenIcon, TicketIcon, ClipboardDocumentIcon, StopIcon, CalendarIcon, HandRaisedIcon, PlusCircleIcon } from '@heroicons/vue/24/outline/index.js';
import Logo from "./Logo.vue";
import NavItem from "./NavItem.vue";
import SearchCenterMOdel from "../components/center/SearchCenterModel.vue"
import { GeneralStore, useAuthStore } from '@/stores';
import { useToast } from 'vue-toastification';
import { useEvents } from '../services/events';
import { EnvelopeOpenIcon } from '@heroicons/vue/24/solid';

const event = useEvents()
const general_store = GeneralStore()
const authstore = useAuthStore();

const navItems = [
	{ href: "/", active: false, label: "Home", children: [], icon: HomeIcon },
	{
		href: "#", active: false,
		label: "Account",
        icon: IdentificationIcon,
		children: [
			{ href: "/account/me", active: false, label: "Me", children: [], icon: UserIcon },
            { href: "/account/mail", active: false, label: "Mail", children: [], icon: EnvelopeOpenIcon },
            { href: "/account/callender", active: false, label: "Callender", children: [], icon: CalendarIcon },
			{ href: "/account/reset-password", active: false, label: "Reset Password", children: [], icon: ArrowPathIcon },
            
		],
		
	},
	{
		href: "#", active: false,
		label: "Center",
        icon: BuildingLibraryIcon,
		children: [
			{ href: "/center/all", active: false, label: "My Centers", children: [], icon: MagnifyingGlassIcon },
            { href: "/center/admin", active: false, label: "Admin", children: [], icon: RectangleGroupIcon },
            { href: "/center/course", active: false, label: "Course", children: [], icon: BookOpenIcon },
            { href: "/center/offering", active: false, label: "Offerings", children: [], icon: TicketIcon },
            { href: "/center/student", active: false, label: "Students", children: [], icon: UserIcon },
			
		],
		
	},
    {
		href: "#", active: false,
		label: "Assessment",
        icon: ClipboardDocumentIcon,
		children: [
			{ href: "/assessment/results", active: false, label: "Results", children: [], icon: StopIcon },
            { href: "/assessment/quiz", active: false, label: "Quiz", children: [], icon: StopIcon },
            { href: "/assessment/question", active: false, label: "Questions", children: [], icon: StopIcon },
            { href: "/assessment/bundel", active: false, label: "Bundel", children: [], icon: StopIcon },
		],
		
	},
    {
		href: "#", active: false,
		label: "Query",
        icon: HandRaisedIcon,
		children: [
			{ href: "/query", active: false, label: "add_query", children: [], icon: PlusCircleIcon },
            
		],
		
	},
    
];



</script>

<style scoped>

.h-screen{
  height:calc(100vh - 2rem)!important;
  overflow-y: scroll;
}
</style>