
<template>
  <div class="p-2 md:ml-4 h-full grid grid-cols-1 gap-4 content-between">
    <div>
      <div class="md:p-10 ">
        <div class="grid md:grid-cols-5 grid-rows-1 md:space-x-2 text-center md:max-w-2xl mx-auto">
          <div  v-for="(key,val) in {1:'Personal', 2:'Professional', 3:'Prefrence', 4:'Role', 5:'Meet-Up'}"  @click="step = val" class="md:mx-4 cursor-pointer" :class="{ 'text-[#FFA800] font-bold md:font-lg md:text-current md:border-b-2 md:border-[#FFA800]': step == val }">
            {{ key }}
          </div>
        </div>
      </div>

      <div class="md:max-w-5xl mx-auto px-4 md:px-0 ">
        <div v-if="step == 1">
          <form @submit.prevent="" class="flex flex-col">
            <div class="grid md:grid-cols-2 md:gap-4">
              <div class="relative z-0 my-6 w-full group">
                <input type="text" name="floating_first_name" id="floating_first_name" v-model="profile.first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="" required />
                <label for="floating_first_name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                  name</label>
              </div>
              <div class="relative z-0 my-6 w-full group">
                <input type="text" name="floating_last_name" id="floating_last_name" v-model="profile.last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="floating_last_name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                  name</label>
              </div>
            </div>
            <div class="grid md:grid-cols-3 md:gap-4">
              <div class="relative  my-6 w-full group">
                <Listbox v-model="profile.gender">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full z-10 cursor-pointer border-b-2 py-2 overflow-hidden text-left sm:text-sm focus:outline-none focus:ring-0 focus:border-blue-600">
                      <span class="block truncate">{{ profile.gender.name }}</span>
                      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                      leave-to-class="opacity-0">
                      <ListboxOptions
                        class="absolute mt-0.5 z-20 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="gender in profile.genders" :key="gender.id"
                          :value="gender" as="template">
                          <li :class="[
                            active ? 'bg-amber-200 text-amber-900' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4',
                          ]">
                            <span :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]">{{ gender.name }}</span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
                <label for="floating_dob"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Gender</label>
              </div>
              <div class="relative z-0 my-6 w-full group">
                <input type="date" name="floating_dob" id="floating_dob" v-model="profile.dob"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="floating_dob"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  DOB</label>
              </div>
              <div class="relative my-4 w-full group flex">
                <Combobox v-model="profile.language">
                  <div class="relative mt-1 w-full">
                    <div
                      class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                      <ComboboxInput id="select_language"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        :displayValue="(language) => language.name" @change="languageQuery = $event.target.value" />
                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                      </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                      @after-leave="languageQuery = ''">
                      <ComboboxOptions
                        class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <div v-if="filteredlanguages.length === 0 && languageQuery !== ''"
                          class="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>

                        <ComboboxOption v-for="language in filteredlanguages" as="template" :key="language.id"
                          :value="language" v-slot="{ selected, active }">
                          <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }">
                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                              {{ language.name }}
                            </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                              :class="{ 'text-white': active, 'text-teal-600': !active }">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </TransitionRoot>
                  </div>
                </Combobox>
                <label for="select_language"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primery Language</label>
              </div>
            </div>
            <div class="grid md:grid-cols-3 md:gap-4">
              <div class="relative my-4 w-full group flex">
                <Combobox v-model="profile.country">
                  <div class="relative mt-1 w-full">
                    <div
                      class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                      <ComboboxInput id="select_country"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        :displayValue="(country) => country.name" @change="countryQuery = $event.target.value" />
                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                      </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                      @after-leave="countryQuery = ''">
                      <ComboboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <div v-if="filteredcountries.length === 0 && countryQuery !== ''"
                          class="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>

                        <ComboboxOption v-for="country in filteredcountries" as="template" :key="country.id"
                          :value="country" v-slot="{ selected, active }">
                          <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }">
                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                              {{ country.name }}
                            </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                              :class="{ 'text-white': active, 'text-teal-600': !active }">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </TransitionRoot>
                  </div>
                </Combobox>
                <label for="select_country"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
              </div>
              <div class="relative my-4 w-full group flex">
                <Combobox v-model="profile.state">
                  <div class="relative mt-1 w-full">
                    <div
                      class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                      <ComboboxInput id="select_state"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        :displayValue="(state) => state.name" @change="stateQuery = $event.target.value" />
                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                      </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                      @after-leave="stateQuery = ''">
                      <ComboboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <div v-if="filteredStates.length === 0 && stateQuery !== ''"
                          class="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>

                        <ComboboxOption v-for="state in filteredStates" as="template" :key="state.id" :value="state"
                          v-slot="{ selected, active }">
                          <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }">
                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                              {{ state.name }}
                            </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                              :class="{ 'text-white': active, 'text-teal-600': !active }">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </TransitionRoot>
                  </div>
                </Combobox>
                <label for="select_state"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
              </div>
              <div class="relative my-4 w-full group flex">
                <Combobox v-model="profile.city">
                  <div class="relative mt-1 w-full">
                    <div
                      class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                      <ComboboxInput id="select_city"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        :displayValue="(city) => city.name" @change="cityQuery = $event.target.value" />
                      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                      </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                      @after-leave="cityQuery = ''">
                      <ComboboxOptions
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <div v-if="filteredCities.length === 0 && cityQuery !== ''"
                          class="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>

                        <ComboboxOption v-for="city in filteredCities" as="template" :key="city.id" :value="city"
                          v-slot="{ selected, active }">
                          <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active,
                          }">
                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                              {{ city.name }}
                            </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                              :class="{ 'text-white': active, 'text-teal-600': !active }">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ComboboxOption>
                      </ComboboxOptions>
                    </TransitionRoot>
                  </div>
                </Combobox>
                <label for="select_city"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-3">
              <div class="relative z-0 my-6 w-full group flex">
                <input type="email" name="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required v-model="profile.email" />
                <label for="floating_email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                  address</label>
                <CheckCircleIcon v-if="profile.email == authStore.email" class="w-8 h-8 text-green-500" />

              </div>
              <div>
                <div>
                  <button v-if="profile.email != authStore.email && !email_otp_sent"
                    @click="sendOTP(mobile = false, email = true)" type="submit"
                    class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Send OTP
                  </button>
                </div>
                <div v-if="profile.email != authStore.email && email_otp_sent" class="grid md:grid-cols-2 md:gap-3">
                  <div class="relative z-0 my-6 w-full group">
                    <input type="email" name="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required v-model="email_otp" />
                    <label for="floating_email"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                      OTP</label>
                  </div>
                  <div class="flex items-center space-x-4 justify-around">
                    <div>
                      <button v-if="profile.email != authStore.email && email_otp_sent"
                        @click="verifyOTP(mobile = false, email = true)"
                        class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-3">
              <div class="relative z-0 my-6 w-full group flex">
                <input type="mobile" name="floating_mobile"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required v-model="profile.mobile" />
                <label for="floating_mobile"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile
                  number</label>
                <CheckCircleIcon v-if="profile.mobile == authStore.mobile" class="w-8 h-8 text-green-500" />

              </div>
              <div>
                <div>
                  <button v-if="profile.mobile != authStore.mobile && !mobile_otp_sent"
                    @click="sendOTP(mobile = true, email = false)" type="submit"
                    class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Send OTP
                  </button>
                </div>
                <div v-if="profile.mobile != authStore.mobile && mobile_otp_sent" class="grid md:grid-cols-2 md:gap-3">
                  <div class="relative z-0 my-6 w-full group">
                    <input type="mobile" name="floating_mobile"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required v-model="mobile_otp" />
                    <label for="floating_mobile"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile
                      OTP</label>
                  </div>
                  <div class="flex items-center space-x-4 justify-around">
                    <div>
                      <button v-if="profile.mobile != authStore.mobile && mobile_otp_sent"
                        @click="verifyOTP(mobile = true, email = false)"
                        class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </form>
        </div>
        <div v-if="step == 2">
          <form>
            <!-- <div class="grid md:grid-cols-1 md:gap-4">
              <div class="relative my-6 w-full group">
                <multi-select :options="options" :selected-values="selectedValues"/>
                <label for="floating_dob"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Known Languages</label>
              </div>
            </div>        -->

            <div class="grid md:grid-cols-3 md:gap-4">
              <div class="relative my-6 w-full group">
                <Listbox v-model="profile.education">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full z-10 cursor-pointer border-b-2 py-2 overflow-hidden text-left sm:text-sm focus:outline-none focus:ring-0 focus:border-blue-600">
                      <span class="block truncate">{{ profile.education.name }}</span>
                      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                      leave-to-class="opacity-0">
                      <ListboxOptions
                        class="absolute mt-0.5 z-20 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="education in profile.educations" :key="education.name"
                          :value="education" as="template">
                          <li :class="[
                            active ? 'bg-amber-200 text-amber-900' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4',
                          ]">
                            <span :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]">{{ education.name }}</span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
                <label for="floating_dob"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Education</label>
              </div>
              <div class="relative md:mt-6  my-6 w-full group">
                <Listbox v-model="profile.profession">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full z-10 cursor-pointer border-b-2 py-2 overflow-hidden text-left sm:text-sm focus:outline-none focus:ring-0 focus:border-blue-600">
                      <span class="block truncate">{{ profile.profession.name }}</span>
                      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </ListboxButton>

                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                      leave-to-class="opacity-0">
                      <ListboxOptions
                        class="absolute mt-0.5 z-20 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="profession in profile.professions"
                          :key="profession.name" :value="profession" as="template">
                          <li :class="[
                            active ? 'bg-amber-200 text-amber-900' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4',
                          ]">
                            <span :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]">{{ profession.name }}</span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
                <label for="floating_dob"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Profession</label>
              </div>
              <div class="relative z-0 my-6 w-full group">
                <input type="text" name="floating_linkedIn" id="floating_linkedIn" v-model="profile.linkedIn"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="" />
                <label for="floating_linkedIn"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  LinkedIn</label>
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-4">
              <div class="relative z-0 my-6 w-full group">
                <textarea v-model="profile.about" type="textarea" name="floating_description" id="floating_last_name"
                  class="block p-2 w-full text-sm text-gray-900 bg-transparent border rounded-lg border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " rows="3" cols="50">ABCDEFGHIJKLMNOPQRSTUVXYZ</textarea>
                <label for="floating_description"
                  class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Let us know about you!</label>
              </div>
            </div>
          </form>
        </div>
        <div v-if="step == 3">
          <form>
            <div class="grid md:grid-cols-7 h-[5rem] text-sm text-center items-center border-t-2 py-6">
              <div class="border-r-2">
                <Switch v-model="profile.preferences.email" :class="profile.preferences.email ? 'bg-green-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full">
                  <span class="sr-only">Enable notifications</span>
                  <span :class="profile.preferences.email ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </Switch>
              </div>
              <div class="col-span-6 md:visible truncate p-4 text-start text-sm">Email</div>
            </div>
            <div class="grid md:grid-cols-7 h-[5rem] text-sm text-center items-center border-t-2 py-6">
              <div class="border-r-2">
                <Switch v-model="profile.preferences.sms" :class="profile.preferences.sms ? 'bg-green-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full">
                  <span class="sr-only">Enable notifications</span>
                  <span :class="profile.preferences.sms ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </Switch>
              </div>
              <div class="col-span-6 md:visible truncate p-4 text-start text-sm">Sms</div>
            </div>
            <div class="grid md:grid-cols-7 h-[5rem] text-sm text-center items-center border-t-2 py-6">
              <div class="border-r-2">
                <Switch v-model="profile.preferences.watsapp" :class="profile.preferences.watsapp ? 'bg-green-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full">
                  <span class="sr-only">Enable notifications</span>
                  <span :class="profile.preferences.watsapp ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </Switch>
              </div>
              <div class="col-span-6 md:visible truncate p-4 text-start text-sm">Watsapp</div>
            </div>
          </form>
        </div>
        <div v-if="step == 4">
          <form>
            <div class="grid md:grid-cols-8 py-2 text-center text-gray-900 font-bold text-sm">
              <div class="">Role</div>
              <div>Opted</div>
              <div class="">Status</div>
              <div class="col-span-4">Description</div>
              <div>History</div>
            </div>
            <div v-for="role in profile.roles" class="grid md:grid-cols-8 h-[5rem] text-sm text-center items-center border-t-2">
              <div class="border-r-2">{{ role.name }}</div>
              <div class="border-r-2">
              <!-- <Model /> -->
                <Switch v-model="role.opted" :class="role.opted ? 'bg-green-600' : 'bg-gray-200'"
                  class="relative inline-flex h-6 w-11 items-center rounded-full">
                  <span class="sr-only">Enable notifications</span>
                  <span :class="role.opted ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </Switch>
              </div>
              <div class="border-r-2">{{ role.status }}</div>
              <div class="col-span-4 md:visible truncate p-2 border-r-2">{{ role.description }}</div>
              <div>
                <Popover class="relative">
                  <PopoverButton class="bg-blue-600 text-white px-2 py-1 focus-0 rounded-lg">View</PopoverButton>

                  <PopoverPanel class="absolute z-20 bg-gray-100 text-gray-900 rounded-lg border-2 w-96 right-0 h-72 overflow-scroll  shadow-xl">
                    <div class="">
                      <div v-for="(histor, index) in role.history" :key="histor.id" class="grid md:grid-cols-8 items-center justify-center text-left px-1 w-full border border-b space-y-2">
                        <div class="col-span-3">{{ histor.id }} - {{ histor.date }}</div>
                        <div class="col-span-5">{{ histor.name }}</div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="w-full md:max-w-2xl mx-auto">
      <div v-if="step != 5" @click="profileSubmit()" class="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</div>
    </div>
    
  </div>
</template>


<script setup>
import Language from '@/components/accounts/Language.vue';
import MultiSelect from '@/components/accounts/MultiSelect.vue'
import Model from '@/components/Model.vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline/index.js';
import { ref, computed } from 'vue'
import { useToast } from "vue-toastification";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Switch, Popover, PopoverButton, PopoverPanel
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { useAuthStore } from "@/stores";
import {router} from '@/routers';


let authStore = useAuthStore()
let profile = authStore.profile


const toast = useToast();
var email_otp_sent = ref(false);
var mobile_otp_sent = ref(false);
var email_otp = ref('');
var mobile_otp = ref('');

var step = ref(1);


// const options= ref([{ value: 1, text: 'Option 1' }, { value: 2, text: 'Option 2' }, { value: 3, text: 'Option 3' }, { value: 4, text: 'Option 4' }, { value: 5, text: 'Option 5' }, { value: 6, text: 'Option 6' }]);
// var selectedValues= ref([]);


async function profileSubmit() {
    if (profile.email == authStore.email && email_otp_sent){
      let cp = await authStore.updateProfile()
    }else{
      toast.warning('Verify OTP')
    }
  }


function sendOTP(mobile = false, email = false) {
  if (mobile) {
    this.mobile_otp_sent = true

  } else if (email) {
    this.email_otp_sent = true
  }
}

function verifyOTP(mobile = false, email = false) {
  if (mobile) {
    if (this.mobile_otp.length == 6) {
      this.authStore.mobile = this.profile.mobile
      this.mobile_otp = ''
      this.mobile_otp_sent = false

      toast.success('Email Verified')
    } else {
      toast.warning('Invalid OTP')
    }

  } else if (email) {
    if (this.email_otp.length == 6) {
      this.authStore.email = this.profile.email
      this.email_otp = ''
      this.email_otp_sent = false

      toast.success('Email Verified')
    } else {
      toast.warning('Invalid OTP')
    }

  }
}

// ------------------------------------------------------
let languageQuery = ref('')
let filteredlanguages = computed(() =>
  languageQuery.value === ''
    ? authStore.languages
    : authStore.languages.filter((language) =>
      language.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(languageQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)


// ------------------------------------------------------
let countryQuery = ref('')
let filteredcountries = computed(() =>
  countryQuery.value === ''
    ? authStore.countries
    : authStore.countries.filter((country) =>
      country.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(countryQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)
// ------------------------------------------------------
let stateQuery = ref('')
let filteredStates = computed(() =>
  stateQuery.value === ''
    ? authStore.states
    : authStore.states.filter((state) =>
      state.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(stateQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)
// ------------------------------------------------------
let cityQuery = ref('')
let filteredCities = computed(() =>
  cityQuery.value === ''
    ? authStore.cities
    : authStore.cities.filter((city) =>
      city.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(cityQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)

</script>
