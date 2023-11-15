
<template>
  <div class="p-2 md:ml-4">
    <div class="md:p-10 ">
      <div class="grid md:grid-cols-5 grid-rows-1 md:space-x-10 text-center">
        <div @click="step = 1" class="md:mx-4 cursor-pointer" :class="{ 'border-b-2 border-[#FFA800]': step == 1 }">Personal
        </div>
        <div @click="step = 2" class="md:mx-4 cursor-pointer" :class="{ 'border-b-2 border-[#FFA800]': step == 2 }">
          Professional</div>
        <div @click="step = 3" class="md:mx-4 cursor-pointer" :class="{ 'border-b-2 border-[#FFA800]': step == 3 }">Prefrence
        </div>
        <div @click="step = 4" class="md:mx-4 cursor-pointer" :class="{ 'border-b-2 border-[#FFA800]': step == 4 }">Role</div>
        <div @click="step = 5" class="md:mx-4 cursor-pointer" :class="{ 'border-b-2 border-[#FFA800]': step == 5 }">Meet-Up
        </div>
      </div>
    </div>

    <div class="md:max-w-4xl mx-auto px-4 md:px-0 ">
      <div v-if="step == 1">
        <form @submit.prevent="profileSubmit()" class="flex flex-col space-y-8">
          <div class="grid md:grid-cols-2 md:gap-4">
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name" v-model="profile.firstName"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="" required />
              <label for="floating_first_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                name</label>
            </div>
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name" v-model="profile.lastName"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label for="floating_last_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                name</label>
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
                placeholder=" " required v-model="profile.eMail" />
              <label for="floating_email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                address</label>
              <CheckCircleIcon v-if="profile.eMail == original_email" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.eMail != original_email && !email_otp_sent" @click="sendOTP(mobile = false, email = true)"
                  type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.eMail != original_email && email_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.eMail != original_email && email_otp_sent"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile
                address</label>
              <CheckCircleIcon v-if="profile.mobile == original_mobile" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.mobile != original_mobile && !mobile_otp_sent"
                  @click="sendOTP(mobile = true, email = false)" type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.mobile != original_mobile && mobile_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.mobile != original_mobile && mobile_otp_sent"
                      @click="verifyOTP(mobile = true, email = false)"
                      class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
        </form>
      </div>
      <div v-if="step == 2">
        <form>
          <div class="grid md:grid-cols-2 md:gap-4">
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="" required />
              <label for="floating_first_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                name</label>
            </div>
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label for="floating_last_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-3 md:gap-4">
            <div class="relative my-4 w-full group flex">
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_country"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_state"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_city"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
                placeholder=" " required v-model="profile.eMail" />
              <label for="floating_email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                address</label>
              <CheckCircleIcon v-if="profile.eMail == original_email" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.eMail != original_email && !email_otp_sent" @click="sendOTP(mobile = false, email = true)"
                  type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.eMail != original_email && email_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.eMail != original_email && email_otp_sent"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile
                address</label>
              <CheckCircleIcon v-if="profile.mobile == original_mobile" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.mobile != original_mobile && !mobile_otp_sent"
                  @click="sendOTP(mobile = true, email = false)" type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.mobile != original_mobile && mobile_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.mobile != original_mobile && mobile_otp_sent"
                      @click="verifyOTP(mobile = true, email = false)"
                      class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      <div v-if="step == 3">
        <form>
          <div class="grid md:grid-cols-2 md:gap-4">
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="" required />
              <label for="floating_first_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                name</label>
            </div>
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label for="floating_last_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-3 md:gap-4">
            <div class="relative my-4 w-full group flex">
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_country"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_state"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_city"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
                placeholder=" " required v-model="profile.eMail" />
              <label for="floating_email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                address</label>
              <CheckCircleIcon v-if="profile.eMail == original_email" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.eMail != original_email && !email_otp_sent" @click="sendOTP(mobile = false, email = true)"
                  type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.eMail != original_email && email_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.eMail != original_email && email_otp_sent"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile
                address</label>
              <CheckCircleIcon v-if="profile.mobile == original_mobile" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.mobile != original_mobile && !mobile_otp_sent"
                  @click="sendOTP(mobile = true, email = false)" type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.mobile != original_mobile && mobile_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.mobile != original_mobile && mobile_otp_sent"
                      @click="verifyOTP(mobile = true, email = false)"
                      class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      <div v-if="step == 4">
        <form>
          <div class="grid md:grid-cols-2 md:gap-4">
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="" required />
              <label for="floating_first_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                name</label>
            </div>
            <div class="relative z-0 my-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
              <label for="floating_last_name"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-3 md:gap-4">
            <div class="relative my-4 w-full group flex">
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_country"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_state"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
              <Combobox v-model="selected">
                <div class="relative mt-1 w-full">
                  <div
                    class="relative w-full cursor-default overflow-hidden rounded-lg bg-transperant text-left sm:text-sm focus:ring-0">
                    <ComboboxInput id="select_city"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      :displayValue="(person) => person.name" @change="query = $event.target.value" />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400 z-10" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      <div v-if="filteredPeople.length === 0 && query !== ''"
                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>

                      <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }">
                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                          'bg-teal-600 text-white': active,
                          'text-gray-900': !active,
                        }">
                          <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                            {{ person.name }}
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
                placeholder=" " required v-model="profile.eMail" />
              <label for="floating_email"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                address</label>
              <CheckCircleIcon v-if="profile.eMail == original_email" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.eMail != original_email && !email_otp_sent" @click="sendOTP(mobile = false, email = true)"
                  type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.eMail != original_email && email_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.eMail != original_email && email_otp_sent"
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
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile
                address</label>
              <CheckCircleIcon v-if="profile.mobile == original_mobile" class="w-8 h-8 text-green-500" />

            </div>
            <div>
              <div>
                <button v-if="profile.mobile != original_mobile && !mobile_otp_sent"
                  @click="sendOTP(mobile = true, email = false)" type="submit"
                  class="mt-6 py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
              </div>
              <div v-if="profile.mobile != original_mobile && mobile_otp_sent" class="grid md:grid-cols-2 md:gap-3">
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
                    <button v-if="profile.mobile != original_mobile && mobile_otp_sent"
                      @click="verifyOTP(mobile = true, email = false)"
                      class="py-1 px-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
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
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'


const toast = useToast();
const original_mobile = ref('9876543210');
const original_email = ref('xyz@gmail.com');
var email_otp_sent = ref(false);
var mobile_otp_sent = ref(false);
var email_otp = ref('');
var mobile_otp = ref('');

var step = ref(1);
var profile = ref({
  gender: "1",
  firstName: "XXXXXXXX",
  lastName: "YYYYYYYYY",
  mobile: "9876543210",
  country:{ id: 1, name: 'India' },
  state:{ id: 1, name: 'AP' },
  city: { id: 1, name: 'Goa' },
  birthDay: "",
  termOfService: false,
  pinCode: "123456",
  eMail: 'xyz@gmail.com'
});



function profileSubmit() {
  console.log(this.profile)
  toast.success('personal details updated')
}


function sendOTP(mobile = false, email = false) {
  if (mobile) {
    this.mobile_otp_sent = true
    console.log(this.profile.mobile)

  } else if (email) {
    this.email_otp_sent = true
    console.log(this.profile.eMail)
  }
}

function verifyOTP(mobile = false, email = false) {
  if (mobile) {
    if (this.mobile_otp.length == 6) {
      this.original_mobile = this.profile.mobile
      this.mobile_otp = ''
      this.mobile_otp_sent = false

      toast.success('Email Verified')
    } else {
      toast.warning('Invalid OTP')
    }

  } else if (email) {
    if (this.email_otp.length == 6) {
      this.original_email = this.profile.eMail
      this.email_otp = ''
      this.email_otp_sent = false

      toast.success('Email Verified')
    } else {
      toast.warning('Invalid OTP')
    }

  }
}

const countries = [
  { id: 1, name: 'India' },
  { id: 2, name: 'Nepal', },
  { id: 3, name: 'Pakistan', },
  { id: 4, name: 'Bangladesh' },
  { id: 5, name: 'Sri Lanka' },
  { id: 6, name: 'Papuva New Gunia' },
]

let countryQuery = ref('')
let filteredcountries = computed(() =>
  countryQuery.value === ''
    ? countries
    : countries.filter((country) =>
      country.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(countryQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)

// ------------------------------------------------
const states = [
  { id: 1, name: 'Arunachal Pradesh' },
  { id: 2, name: 'Andhra Pradesh', },
  { id: 3, name: 'Karnataka', },
  { id: 4, name: 'Tamil Nadu' },
  { id: 5, name: 'Kerala' },
  { id: 6, name: 'Assam' },
]

let stateQuery = ref('')
let filteredStates = computed(() =>
  stateQuery.value === ''
    ? states
    : states.filter((state) =>
      state.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(stateQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)

// ------------------------------------------------
const cities = [
  { id: 1, name: 'Ganjal' },
  { id: 2, name: 'Vizag', },
  { id: 3, name: 'Bengaluru', },
  { id: 4, name: 'Chenai' },
  { id: 5, name: 'Kochi' },
  { id: 6, name: 'Goa' },
]

let cityQuery = ref('')
let filteredCities = computed(() =>
  cityQuery.value === ''
    ? cities
    : cities.filter((city) =>
      city.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(cityQuery.value.toLowerCase().replace(/\s+/g, ''))
    )
)

</script>
