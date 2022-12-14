<script>
  import DatePicker from 'vue-datepicker-next';
  import 'vue-datepicker-next/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        time3: null,
      };
    },
  };
</script>

<template>
  <div>
    <date-picker v-model:value="time3" range></date-picker>
  </div>
</template>