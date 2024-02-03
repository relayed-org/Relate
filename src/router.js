// router.js
import { createRouter, createWebHistory } from 'vue-router';
import serverComponent from './ServerPage.vue';
import homePage from './HomePage.vue';

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
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
