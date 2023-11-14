<template>
  <div class="flex flex-col items-center bg-gradient-to-r via-purple-500 from-orange-500 to-pink-500 w-full h-screen">
    <div class="register h-full">
      <div class=" flex items-center justify-center px-5 py-5">
        <div class="text-gray-500 w-full">
          <div class="md:flex w-full">
            <div class="w-full px-5 md:px-10">
              <div class="text-center mb-4 md:mb-10">
                <div class="text-cener text-2xl md:text-6xl font-extrabold text-white md:pt-14">Welcome back to {{title}}</div>
              </div>
              <form @submit.prevent="SubmitForm" class="bg-white p-4 rounded-lg">
                <div class="md:flex">
                  <div class="md:w-1/2 md:px-3 mb-5">
                    <label for="" class="text-xs font-semibold">First name</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 md:pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        name="first_name"
                        v-model="first_name"
                      />
                    </div>
                  </div>
                  <div class="md:w-1/2 md:px-3 md:mb-5">
                    <label for="" class="text-xs font-semibold">Last name</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        name="last_name"
                        v-model="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">Email</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        name="email"
                        v-model="email"
                      />
                    </div>
                  </div>
                </div>
                <input type="number" name="username" id="username" v-model="username" style="display:none">
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">Password</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        name="password"
                        v-model="password"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex mx-3">
                  <div class="w-full px-3 mb-5">
                    <button type="submit"
                      class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
                <div class="flex mx-3">
                  <div class="w-full px-3 mb-5 text-center">
                    <router-link to="/account/login"
                      ><button
                        class="text-center"
                      >
                      Already have an account? Login!
                      </button>
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  const title = import.meta.env.VITE_APP_TITLE;
  var first_name=""
  var last_name=""
  var email=""
  var password=""

  function SubmitForm(e) {
    const formData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      username: parseInt('1000000'),
      password: this.password,
      password2: this.password,
        }

      console.log(formData)
  };
</script>
