import { createApp } from 'vue'
import App from './App.vue'
import DBooruService from './../services/DBooruService';
import store from './../main/store/index';

const app = createApp(App);
app.use(store);
app.provide('DBooruService', DBooruService);
app.mount('#app');
