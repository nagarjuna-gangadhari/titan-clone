<script setup>
import { ref } from 'vue';

const languages = ref({
  speak: false,
  read: false,
  write: false,
});

const newLanguages = ref([]);

const hideErrorMsg = (el) => {
  el.nextElementSibling.hidden = true;
};

const verifyCheck = () => {
  // Perform any validation checks
};

const addNewLanguage = () => {
  newLanguages.value.push({
    speak: false,
    read: false,
    write: false,
  });
};
</script>

<template>
  <div class="grid md:grid-cols-2 h-5 text-sm text-center items-center border-b-2 py-12">
    <div class="border-r-2">
      <select class="w-full " tabindex="5" @change="hideErrorMsg($event.target)" @input="verifyCheck">
        <option value="">Primary Language*</option>
        <option value="Bengali">Bengali</option>
        <option value="Gujarathi">Gujarathi</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
        <option value="Marathi">Marathi</option>
        <option value="Oriya">Oriya</option>
        <option value="Tamil">Tamil</option>
        <option value="Telugu">Telugu</option>
        <option value="Tangkhul">Tangkhul</option>
        <option value="Manipuri">Manipuri</option>
      </select>
      <span class="error_msg hidden text-red-500">Please select a language</span>
    </div>

      <div class="flex" >

      <div class="col-span-6 md:visible p-4 text-start text-sm">
        <label for="speak" class="font-semibold">Speak</label>
        <input type="checkbox" id="speak" class="ml-2" v-model="languages.speak">
      </div>

      <div class="col-span-6 md:visible p-4 text-start text-sm">
        <label for="read" class="font-semibold">Read</label>
        <input type="checkbox" id="read" class="ml-2" v-model="languages.read">
      </div>

      <div class="col-span-6 md:visible p-4 text-start text-sm">
        <label for="write" class="font-semibold">Write</label>
        <input type="checkbox" id="write" class="ml-2" v-model="languages.write">
      </div>

      <button class="font-30" @click="addNewLanguage">
        <i class="fa fa-plus-circle text-emerald-500"></i>
      </button>

      <p class="p-2 text-sm text-black">Add another language</p>
    </div>
  </div>
</template>

<style scoped>
/* No additional custom CSS needed */
</style>
