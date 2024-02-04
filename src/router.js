// router.js
import { createRouter, createWebHistory } from 'vue-router';
import homePage from './HomePage.vue';
import serverComponent from './ServerPage.vue';
import settingsPage from './SettingsPage.vue';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/server/:ServerId',
    name: 'server', // Make sure you have a name for the route
    component: serverComponent,
    props: true,
  },
  {
    path: '/settings',
    component: settingsPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
