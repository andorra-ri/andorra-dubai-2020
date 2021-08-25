import { createRouter, createWebHistory } from 'vue-router';
import Pavilion from '/@/layout/pavilion/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Pavilion,
  ],
});

export default router;
