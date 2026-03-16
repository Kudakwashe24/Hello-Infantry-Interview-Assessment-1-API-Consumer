import { createRouter, createWebHistory } from 'vue-router';

// TODO: Convert these to lazy imports using () => import('...')
// Example: const HomePage = () => import('../pages/HomePage.vue');
import HomePage from '../pages/HomePage.vue';
import DetailPage from '../pages/DetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
