<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const props =  defineProps({
                options: Array,
                selectedValues: Array
              })

const options = props.options;
const selectedValues = props.selectedValues || [];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const isSelected = (option) => selectedValues.includes(option.value);

const selectOption = (option) => {
  if (isSelected(option)) {
    selectedValues.splice(selectedValues.indexOf(option.value), 1);
  } else {
    selectedValues.push(option.value);
  }
};

const selectedOptions = () => options.filter((option) => isSelected(option.value));

const selectedValuesText = selectedValues.join(', ');

window.addEventListener('click', (event) => {
  if (!event.target.closest('.multi-select-dropdown')) {
    isOpen.value = false;
  }
});

</script>

<template>
  <div class="relative multi-select-dropdown">
    <div
      class="w-full p-2 py-4 border border-gray-200 rounded-md cursor-pointer"
      @click="toggleDropdown"
    >
      <span class="text-sm font-medium">{{ selectedValuesText }}</span>
      <svg class="absolute right-2 top-2 w-4 h-4" fill="none" stroke="#ccc" stroke-width="2" viewBox="0 0 24 24">
        <path d="M19 19v-4h-4v4zM7 19v-4h-4v4z"></path>
      </svg>
    </div>

    <ul class="absolute top-full left-0 w-full rounded-b-md shadow-sm bg-white z-20 shadow-lg" v-show="isOpen">
      <li
        v-for="option in options"
        :key="option.value"
        class="flex items-center p-2 cursor-pointer hover:bg-gray-100"
        @click="selectOption(option)"
        :class="{ 'bg-gray-200': isSelected(option) }"
      >
        <input type="checkbox" class="mr-2" :checked="isSelected(option)" />
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>
