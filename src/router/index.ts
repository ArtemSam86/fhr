import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/task-1',
    name: 'task-1',
    component: () => import('@/pages/TaskPage1.vue'),
  },
  {
    path: '/task-2',
    name: 'task-2',
    component: () => import('@/pages/TaskPage2.vue'),
  },
  {
    path: '/task-3',
    name: 'task-3',
    component: () => import('@/pages/TaskPage3.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(), // createMemoryHistory(),
  routes,
});
