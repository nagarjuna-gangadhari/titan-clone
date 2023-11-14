import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routers";
import Toast from "vue-toastification";

import "./style.css";
import 'vue-material-design-icons/styles.css';
import "vue-toastification/dist/index.css";
import './plugins'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const toast_options = {
  
};




const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Toast, toast_options);
app.provide('GROUP', {})
app.component('EasyDataTable', Vue3EasyDataTable);

app.mount("#app");


