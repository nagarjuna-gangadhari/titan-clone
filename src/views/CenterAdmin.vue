<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
<template>
    <div class="w-full h-full font-sans">
    <div class="w-full h-full overflow-hidden flex flex-col lg:flex-row items-cener justify-center space-y-4 md:space-y-0">
        <div class="w-full lg:w-9/12">
            <div class="text-center font-bold py-4 px-10">DEMO CENTER</div>
            <div class="w-full flex flex-col items-center justify-center">
                <div class="w-11/12 bg-lime-50 border border-gray-400 rounded">
                    <div class="flex justify-between text-xs font-bold bg-teal-600 text-white border-b border-teal-800 p-1">
                        <div class="text-left">WEEKLY TIMETABLE</div>

                        <div class="text-right"><date-picker v-model:value="dateRange" range></date-picker></div>
                    </div>
                    <div class="flex flex-row text-xs bg-lime-100 border-b border-teal-600 divide-x-2 divide-teal-600 text-center font-semibold pr-1">
                        <div class="py-2 w-[12.5%] bg-lime-200">TIME SLOT</div>
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
            </div>
            <!-- offering section -->
            <div class="w-full flex flex-col my-6">
                <!-- running -->
                <div class="w-full flex flex-col items-center justify-center">
                    <div class="w-11/12 rounded border-l">
                        <div class="text-left text-xs font-bold bg-fuchsia-800 text-white rounded-t p-1">RUNNING COURSES [9]</div>
                        <div class="flex flex-row py-1 shadow-lg shadow-cyan-50/50 bg-gradient-to-b from-fuchsia-800 to-fuchsia-50 text-gray-900">
                            <div class="w-4/12 flex justify-center border-r"><BookmarkIcon class="w-5 h-5" /></div>
                            <div class="w-3/12 flex justify-center border-r"><CalendarDaysIcon class="w-5 h-5" /></div>
                            <div class="w-3/12 flex justify-center border-r"><UserIcon class="w-5 h-5" /></div>
                            <div class="w-2/12 flex justify-center"><PencilSquareIcon class="w-5 h-5" /></div>
                        </div>
                        <div class="h-96 overflow-y-auto">
                            <div v-for="index in 8" :key="index" class="flex flex-row text-sm px-2 pt-2 border-b py-2">
                                <div class="w-4/12 text-start border-r flex items-center">7th Science, (16813)</div>
                                <div class="w-3/12 text-center border-r flex justify-center items-center">1st Jul, 2022 to 31st Mar, 2023</div>
                                <div class="w-3/12 flex justify-center items-center border-r text-truncate">100021 - adam smith</div>
                                <div class="w-2/12 flex justify-center items-center"><div class="bg-blue-400 px-3 py-1 rounded hover:scale-105 coursor-pointer">Edit</div></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div class="w-full lg:w-3/12 mx-h-screen">
            <div class="py-2 text-xs font-bold uppercase rounded-t text-center bg-lime-400 mt-14 border-l">Center Information</div>
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
</template>


<script setup>
import { ref } from 'vue'
import { UserIcon, BookmarkIcon, PencilSquareIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid/index.js';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
let dateRange = ref(null)
</script>
