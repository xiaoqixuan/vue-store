const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');

export default [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];
