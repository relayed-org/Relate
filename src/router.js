// router.js
import { createRouter, createWebHistory } from 'vue-router';
import ServerComponent from './ServerPage.vue';
import home from './HomePage.vue';

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/server/:ServerId',
    name: 'server', // Make sure you have a name for the route
    component: ServerComponent,
    props: true,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
