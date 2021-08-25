import { createRouter, createWebHistory } from 'vue-router';
import Pavilion from '/@/layout/pavilion/routes';
import Discover from '/@/layout/discover/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Pavilion,
    ...Discover,
  ],
});

export default router;
