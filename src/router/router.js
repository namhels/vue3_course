import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: About
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL)
});

export default router;
