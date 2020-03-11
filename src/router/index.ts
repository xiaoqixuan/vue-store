import Vue from 'vue';
import Router from 'vue-router';
import home from './home';
import about from './about';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) { // 每次页面返回顶部
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  },
  // base: '',
  routes: [
    ...home,
    ...about,
    {
      path: '/',
      redirect: '/home',
    },
  ],
});

export default router;
