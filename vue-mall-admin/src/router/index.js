import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/layout/Home.vue';
import Login from '@/views/layout/Login.vue';
import store from '@/store/index.js';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 登录状态校验
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.username && store.state.appkey && store.state.role) {
      return next();
    } else {
      return next('/login');
    }
  }
  return next();
})

export default router;
