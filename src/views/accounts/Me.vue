<template>
    <div class=" mx-auto mb-5 p-2 h-full text-xs" x-data="userDetails">
    <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
            <!-- Profile Card -->
            <div class="bg-white p-2 rounded">

                <div class="h-36 w-full bg-origin-conten bg-no-repeat bg-contain bg-center bg-[url('')] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border" alt=""></div>
                <div class="text-gray-900 font-bold text-xl leading-8 my-1 space-x-2 flex w-full"><div x-text="first_name"></div> <div x-text="last_name"></div></div>
                <div class="font-bold space-x-2 flex w-full"><div class="text-green-500">User Name</div> <div></div></div>
                <div class="font-bold space-x-2 flex w-full"><div class="text-green-500">User Id</div> <div></div></div>
                <div class="font-bold space-x-2 flex w-full"><div class="text-green-500">Email</div> <div x-text="email"></div></div>
                <p class="text-sm text-gray-500 hover:text-gray-600 my-1" x-text="short_notes"></p>
                <ul
                    class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li class="flex items-center py-3">
                        <span>Status</span>
                        <span class="ml-auto"><span
                                class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                    </li>
                    <li class="flex items-center py-3">
                        <p>Member since</p>
                        <p x-text="date_joined" class="ml-auto"></p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 space-y-4">
            <!-- Profile tab -->
            <div class="stats shadow">
  
                <div class="stat place-items-center">
                  <div class="stat-title">Total Classes</div>
                  <div class="stat-value">31</div>
                  <div class="stat-desc">From January 1st 2020 to now</div>
                </div>
                
                <div class="stat place-items-center">
                  <div class="stat-title">Effective Students</div>
                  <div class="stat-value text-secondary">4,200</div>
                  <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Teaching Hourse</div>
                  <div class="stat-value text-secondary">2350</div>
                  <div class="stat-desc text-secondary">↗︎ 80 (2%)</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Effective Students</div>
                  <div class="stat-value text-secondary">4,200</div>
                  <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                <div class="stat place-items-center">
                  <div class="stat-title">Teaching Hourse</div>
                  <div class="stat-value text-secondary">2350</div>
                  <div class="stat-desc text-secondary">↗︎ 80 (2%)</div>
                </div>
                
                <div class="stat place-items-center">
                  <div class="stat-title">Course Completed</div>
                  <div class="stat-value">43</div>
                  <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
              </div>
            <!-- About Section -->
            <div class="bg-white p-2 shadow-sm rounded font-xs">
                <div class="flex items-center space-x-2 border-b border-red-400 text-gray-900 leading-8 mb-2">My Roles</div>
                <div id="myroles" class="w-full h-auto space-y-1">
                    <div class="flex py-2 border-b border-dotted">
                        <div class="w-2/12 flex items-center justify-start font-bold text-green-400"><p>Teacher</p></div>
                        <div class="w-6/12 flex flex-col justify-start">
                            <ul class="steps">
                                <li class="step step-success">Share your Intrest</li>
                                <li class="step step-success">Discuss Online</li>
                                <li class="step step-error" data-content="?">Select Opportunities</li>
                            </ul>
                        </div>
                        <div class="px-4 w-auto flex flex-col space-y-2">
                            <button class="btn btn-outline btn-xs">Browse Apportunities</button>
                            <button class="btn btn-outline btn-xs">Take me to classroom</button>
                        </div>
                    </div>
                    <div class="flex py-2 border-b border-dotted">
                        <div class="w-2/12 flex items-center justify-start font-bold text-green-400"><p>Facilitor Teacher</p></div>
                        <div class="w-6/12 flex flex-col justify-start">
                            <ul class="steps">
                                <li class="step step-success">Share your Intrest</li>
                                <li class="step step-success">Discuss Online</li>
                                <li class="step step-error" data-content="?">Select Opportunities</li>
                            </ul>
                        </div>
                        <div class="px-4 w-auto flex flex-col space-y-2">
                            <button class="btn btn-outline btn-xs">Browse Apportunities</button>
                            <button class="btn btn-outline btn-xs">Take me to classroom</button>
                        </div>
                    </div>
                    <div class="flex py-2 border-b border-dotted">
                        <div class="w-2/12 flex items-center justify-start font-bold text-green-400"><p>Content Devloper</p></div>
                        <div class="w-6/12 flex flex-col justify-start">
                            <ul class="steps">
                                <li class="step step-success">Share your Intrest</li>
                                <li class="step step-success">Discuss Online</li>
                                <li class="step step-error" data-content="?">Select Opportunities</li>
                            </ul>
                        </div>
                        <div class="px-4 w-auto flex flex-col space-y-2">
                            <button class="btn btn-outline btn-xs">Browse Apportunities</button>
                            <button class="btn btn-outline btn-xs">Take me to classroom</button>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm space-y-2">
                        <div class="flex flex-col px-3 mt-2">
                            <div>First Name</div>
                            <input type="text" id="first_name" x-model="first_name" placeholder="First Name" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Last Name</div>
                            <input type="text" id="last_name" x-model="last_name" placeholder="Last Name" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Email</div>
                            <input type="text" x-model="email" id="email" placeholder="Email" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Phone</div>
                            <input type="phone" x-model="phone" id="phone" placeholder="Phone" class="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div  class="flex flex-col px-3">
                            <div>Gender</div>
                            <select id="gender" x-model="gender" class="select select-bordered select-sm w-full max-w-xs">
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Year Of Birth</div>
                            <select id="yearOfBirth" class="select select-bordered select-sm w-full max-w-xs"></select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Country</div>
                            <select id="country" class="select select-bordered select-sm w-full max-w-xs">
                                <option value="Hindi">Hindi</option>
                                        <option value="Kannada">Kannada</option>
                                        <option value="Marathi">Marathi</option>
                                        <option value="Oriya">Oriya</option>
                                        <option value="Tamil">Tamil</option>
                                        <option value="Telugu">Telugu</option>
                            </select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>State</div>
                            <select id="state" class="select select-bordered select-sm w-full max-w-xs"></select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>City</div>
                            <select id="city" class="select select-bordered select-sm w-full max-w-xs"></select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Profession</div>
                            <select id="profession" class="select select-bordered select-sm w-full max-w-xs"></select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div>Reference</div>
                            <select x-model="reference" id="reference_channel" class="select select-bordered select-sm w-full max-w-xs">
                                
                            </select>
                        </div>
                        <div class="flex flex-col px-3">
                            <div class="required">Short Notes About Me</div>
                            <textarea x-model="short_notes" name="short_notes" id="" cols="4" rows="2" class="border p-1 text-base max-w-96">I am a homemaker who is eager to use my extra time and energy for a special cause.</textarea>
                        </div>
                    </div>
                    <div class="flex flex-col p-3">
                        <div class="space-y-4 ">
                            <div class="w-full flex space-x-4 items-center justify-start font-bold">
                                <div class="w-4/12">Language</div>
                                <div class="w-2/12">Speak</div>
                                <div class="w-2/12">Read</div>
                                <div class="w-2/12">Write</div>
                                <div class="w-2/12 cursor-pointer text-xl" onclick="addLang()"><i class="fa-solid fa-plus border rounded-full text-white bg-green-500 hover:bg-green-800"></i></div>
                            </div>
                            <div id="known_languages" class="space-y-4"></div>
                        </div>
                    </div>
                </div>
                <button
                    class="block w-full text-white text-sm font-semibold rounded-lg bg-green-500 focus:outline-none focus:shadow-outline hover:bg-green-600 hover:shadow-xs p-3 my-4">Save Details</button>
            </div>

            <!-- End of about section -->

            <!-- Experience and education -->
            <div class="bg-white p-3 shadow-sm rounded-sm">

                <div class="grid grid-cols-2">
                    <div>
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Experience</span>
                        </div>
                        <ul class="list-inside space-y-2">
                            <li>
                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div class="text-teal-600">Owner at Her Company Inc.</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path fill="#fff"
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Education</span>
                        </div>
                        <ul class="list-inside space-y-2">
                            <li>
                                <div class="text-teal-600">Masters Degree in Oxford</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                            <li>
                                <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                <div class="text-gray-500 text-xs">March 2020 - Now</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- End of Experience and education grid -->
            </div>
            <!-- End of profile tab -->
        </div>
    </div>
</div>
</template>