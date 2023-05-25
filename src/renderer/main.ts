import { createApp } from 'vue';
import App from './App.vue';
import DBooruService from './../services/DBooruService';
import store from './../main/store/index';
import router from './../renderer/router.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faSearch, faCalendar, faRobot, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faSearch, faCalendar, faRobot, faCog);

const app = createApp(App);
app.use(router);
app.use(store);
app.provide('DBooruService', DBooruService);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
