import { createApp } from 'vue';
import { createPinia } from 'pinia';
import "./style.css";
import App from './App.vue';
import { router } from './router';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(createPinia());
app.use(router);
app.mount('#app');
