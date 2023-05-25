// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Search from './views/Search.vue';
import Schedule from './views/Schedule.vue';
import Bots from './views/Bots.vue';
import Settings from './views/Settings.vue';

const routes = [
  { path: '/', component: Search },
  { path: '/search', component: Search },
  { path: '/schedule', component: Schedule },
  { path: '/bots', component: Bots },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
