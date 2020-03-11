const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');

export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];
