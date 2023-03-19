import { createRouter, createWebHistory } from 'vue-router';
import uploadComponent from '@/components/uploadComponent.vue';
import displayData from '@/components/displayData.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'upload',
      component: uploadComponent,
    },
    {
      path: '/display-data',
      name: 'display',
      component: displayData,
    },
  ],
});

export default router;
