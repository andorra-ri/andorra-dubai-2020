import { createRouter, createWebHistory } from 'vue-router';
import Expo from '/@/layout/expo/routes';
import Pavilion from '/@/layout/pavilion/routes';
import Discover from '/@/layout/discover/routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Expo,
    ...Pavilion,
    ...Discover,
  ],
});

export default router;
