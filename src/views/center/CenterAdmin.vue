<template>
    <div class="w-full h-full font-sans bg-gray-100">
        <div class="w-full h-full overflow-hidden flex flex-col lg:flex-row items-cener justify-center space-y-4 md:space-y-0">
            <div class="w-full flex flex-col items-center justify-center lg:w-9/12">
                <div class="text-center font-bold py-4 px-10">232 - DEMO CENTER</div>
                <div class="w-[40rem] overflow-x-scroll md:w-full flex flex-col items-center justify-center scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar:!w-1.5 scrollbar:!h-1.5">
                    <div class="w-full md:w-11/12 bg-white border border-gray-400 rounded">
                        <div class="flex justify-between text-xs font-bold bg-teal-800 text-white border-b border-teal-800 p-1">
                            <div class="text-left">WEEKLY TIMETABLE</div>
                            <button
                                type="button"
                                @click="openModal"
                                class="rounded-md bg-black bg-opacity-20 px-4 py-1 text-xs hover:scale-105 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                FULL CALENDER
                            </button>

                            <div class="text-right hidden"><date-picker v-model:value="dateRange" :showWeekNumbers="showWeekNumbers" range></date-picker></div>
                        </div>
                        <div class="flex flex-row text-xs text-amber-400 bg-teal-800 border-b border-teal-600 divide-x-2 divide-teal-600 text-center font-semibold pr-1 shadow-2xl">
                            <div class="py-2 w-[12.5%]">TIME SLOT</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">MONDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">TUESDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">WEDNESDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">THURSDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">FRIDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">SATURDAY</div>
                            <div class="py-2 w-[12.5%]" title="22-03-2022">SUNDAY</div>
                        </div>
                        <div class="flex flex-col text-xs text-center overflow-y-auto h-52 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar:!w-1.5 scrollbar:!h-1.5">
                            <div v-for="index in 10" :key="index" class="flex flex-row border-b capitalize hover:bg-orange-50">
                                <div class="py-2 w-[12.5%] border-b  border-black truncate font-bold" >10:00 - 11:00</div>
                                <div class="py-2 w-[12.5%] border-x border-teal-600 hover:bg-orange-400 truncate" title="6M-Arjun">6M-Nikitha</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="6M-Arjun">6M-Nikitha</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="">--</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="6M-Arjun; 9M-Arjun">6M-Nikitha, 9S-Arjun</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="6M-Arjun">6M-Nikitha</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="6M-Arjun">6M-Nikitha</div>
                                <div class="py-2 w-[12.5%] border-r border-teal-600 hover:bg-orange-400 truncate" title="">--</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-11/12 flex flex-row items-around justify-start my-2 text-xs">
                        <button v-for="c in colors" :key="c.color" class="bg-transparent hover:bg-{{c.color}}-600 text-{{c.color}}-800 font-semibold hover:text-white py-1 px-4 border border-{{c.color}}-600 hover:border-transparent rounded-full mx-2">Button</button>
                    </div>
                </div>
                
                <div class="w-full flex flex-col my-6">
                    <!-- pending -->
                    <div class="w-full flex flex-col items-center justify-center space-y-6">
                        <div class="w-[40rem] overflow-x-scroll md:w-11/12 min-h-[10rem] bg-white rounded md:border-l-4 border-green-400">
                            <div class="text-left text-xs font-bold p-1 text-green-800 border-t bg-green-50">RUNNING COURSES [9]</div>
                            <div class="flex flex-row py-1 shadow-lg shadow-cyan-50/50 border-b bg-green-50">
                                <div class="w-2/12 flex justify-center border-r"><BookmarkIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center border-r"><CalendarDaysIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><ClockIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><UserIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center"><PuzzlePieceIcon class="w-5 h-5" /></div>
                            </div>
                            <div class="">
                                <div v-for="index in 4" :key="index" class="flex flex-row text-xs p-2 border-b">
                                    <div class="w-2/12 text-start border-r flex items-center">7th Science, (16813)</div>
                                    <div class="w-3/12 text-center border-r flex justify-center items-center">1st Jul, 2022 to 31st Mar, 2023</div>
                                    <div class="w-2/12 text-center border-r flex flex-col justify-center items-center">
                                        <div>09:00 - 10:00</div>
                                        <div>10:00 - 11:00</div>
                                    </div>
                                    <div class="w-2/12 flex justify-center items-center border-r text-truncate">100021 - adam smith</div>
                                    <div class="w-3/12 flex justify-center items-center space-x-2">
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Edit</div>
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Reference</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-[40rem] overflow-x-scroll md:w-11/12 min-h-[10rem] bg-white rounded md:border-l-4 border-amber-300">
                            <div class="text-left text-xs font-bold p-1 text-amber-800 border-t bg-amber-50">PENDING COURSES [4]</div>
                            <div class="flex flex-row py-1 shadow-lg shadow-cyan-50/50 border-b bg-amber-50">
                                <div class="w-2/12 flex justify-center border-r"><BookmarkIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center border-r"><CalendarDaysIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><ClockIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><UserIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center"><PuzzlePieceIcon class="w-5 h-5" /></div>
                            </div>
                            <div class="">
                                <div v-for="index in 4" :key="index" class="flex flex-row text-xs p-2 border-b">
                                    <div class="w-2/12 text-start border-r flex items-center">7th Science, (16813)</div>
                                    <div class="w-3/12 text-center border-r flex justify-center items-center">1st Jul, 2022 to 31st Mar, 2023</div>
                                    <div class="w-2/12 text-center border-r flex flex-col justify-center items-center">
                                        <div>09:00 - 10:00</div>
                                        <div>10:00 - 11:00</div>                                  
                                    </div>
                                    <div class="w-2/12 flex justify-center items-center border-r text-truncate">----</div>
                                    <div class="w-3/12 flex justify-center items-center space-x-2">
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Edit</div>
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Reference</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="w-[40rem] overflow-x-scroll md:w-11/12 min-h-[10rem] bg-white rounded md:border-l-4 border-red-300">
                            <div class="text-left text-xs font-bold p-1 text-red-800 border-t bg-red-50">BACKFILL COURSES [4]</div>
                            <div class="flex flex-row py-1 shadow-lg shadow-cyan-50/50  border-b bg-red-50">
                                <div class="w-2/12 flex justify-center border-r"><BookmarkIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center border-r"><CalendarDaysIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><ClockIcon class="w-5 h-5" /></div>
                                <div class="w-2/12 flex justify-center border-r"><UserIcon class="w-5 h-5" /></div>
                                <div class="w-3/12 flex justify-center"><PuzzlePieceIcon class="w-5 h-5" /></div>
                            </div>
                            <div class="">
                                <div v-for="index in 4" :key="index" class="flex flex-row text-xs p-2 border-b">
                                    <div class="w-2/12 text-start border-r flex items-center">7th Science, (16813)</div>
                                    <div class="w-3/12 text-center border-r flex justify-center items-center">1st Jul, 2022 to 31st Mar, 2023</div>
                                    <div class="w-2/12 text-center border-r flex flex-col justify-center items-center">
                                        <div>09:00 - 10:00</div>
                                        <div>10:00 - 11:00</div>                                  
                                    </div>
                                    <div class="w-2/12 flex justify-center items-center border-r text-truncate">----</div>
                                    <div class="w-3/12 flex justify-center items-center space-x-2">
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Edit</div>
                                        <div class="bg-gray-500 text-white px-3 py-1 rounded hover:scale-105 cursor-pointer">Reference</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-3/12 mx-h-screen">
                <div class="py-2 text-xs font-bold uppercase rounded-t text-white text-center bg-blue-900 mt-14 border-l">Center Information</div>
                <table class="table-fixed text-xs">
                    <tbody class="divide-y">
                        <tr class="border border-slate-300"><td> Center</td><td> DemoCenter</td></tr>
                        <tr class="border border-slate-300"><td>Map Location</td><td>  map</td></tr>
                        <tr class="border border-slate-300"><td>Skype Id</td><td> Hensla.eclassroom.1@evidyaloka.org</td></tr>
                        <tr class="border border-slate-300"><td>Class Assistant (POC)</td><td> Pooja coordinator- 8861078214</td></tr>
                        <tr class="border border-slate-300"><td>HM</td><td> DHANANJAY MAJHI</td></tr>
                        <tr class="border border-slate-300"><td>Field co-ordinator</td><td> Not available    </td></tr>
                        <tr class="border border-slate-300"><td>Delivery co-ordinator</td><td> Nikitha M     7411113090 </td></tr>
                        <tr class="border border-slate-300"><td>Center Admin</td><td> Not available </td></tr>
                        <tr class="border border-slate-300"><td>Donor</td><td> NA </td></tr>
                        <tr class="border border-slate-300"><td>Partner</td><td> eveans foundation demo     9876543210 </td></tr>
                        <tr class="border border-slate-300"><td>Program</td><td> Digital Classroom </td></tr>
                    </tbody>
                </table>
            </div>
        
        </div>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 top-5 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-5xl transform overflow-hidden rounded-lg bg-white p-2 text-left align-middle shadow-xl transition-all"
              >
                <div class="w-full flex justify-end -mt-1 ml-1 mb-1">
                  <div type="button" class=" rounded-full bg-red-400 ring-1 hover:scale-110 hover:bg-red-500 px-2 text-sm font-bold text-white cursor-pointer" @click="closeModal">X</div>
                </div>
                
                <div>
                    <Gant2Vue />
                </div>
  
                
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    
    
  </template>
  

  



<script setup>
import { ref } from 'vue'
import { UserIcon, BookmarkIcon, PuzzlePieceIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/vue/24/solid/index.js';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import Gant2Vue from '../../components/center/Gant2.vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const isOpen = ref(true)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }

let dateRange = ref(null)
const colors = ref([{color:'red'},{color:'yellow'},{color:'blue'},{color:'green'}])
</script>
