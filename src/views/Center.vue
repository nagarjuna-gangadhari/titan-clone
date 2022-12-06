<template>
    <div class="w-full h-full font-sans">
    <div class="w-full h-full flex flex-col lg:flex-row items-cener justify-center space-y-4 md:space-y-0">
        <div class="w-full lg:w-9/12 h-screen">
            <div class="text-center font-bold py-4 px-10">DEMO CENTER</div>
            <div class="w-full flex flex-col items-center justify-center">
                <div class="w-11/12 bg-lime-50 border border-gray-400 rounded">
                    <div class="flex justify-between text-xs font-bold bg-teal-600 text-white border-b border-teal-800 p-1">
                        <div class="text-left">WEEKLY TIMETABLE</div>
                        <div class="text-right">22-09-2022</div>
                    </div>
                    <div class="flex flex-row text-xs bg-lime-100 border-b border-green-300 divide-x-2 text-center font-semibold">
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
                        <div v-for="index in 10" :key="index" class="flex flex-row border-b capitalize">
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" >10:00 - 11:00</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="6M-Arjun">6M-Nikitha</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="6M-Arjun">6M-Nikitha</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="">--</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="6M-Arjun; 9M-Arjun">6M-Nikitha, 9S-Arjun</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="6M-Arjun">6M-Nikitha</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="6M-Arjun">6M-Nikitha</div>
                            <div class="py-2 w-[12.5%] border-r border-lime-300 hover:bg-gray-100 truncate" title="">--</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- offering section -->
            <div class="w-full flex flex-col my-6">
                <!-- running -->
                <div class="w-full flex flex-col items-center justify-center">
                    <div class="w-11/12 bg-lime-50 border border-gray-400 rounded">
                        <div class="text-left text-xs font-bold bg-lime-500 text-white border-b border-lime-800 p-1">COURSES</div>
                        <div class="">
                            <CourseTable />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div class="w-full lg:w-3/12 h-screen bg-red-200">
        </div>
    
    </div>
    
    </div>
</template>


<script setup>
import CourseTable from "../components/center/CourseTable.vue";






</script>