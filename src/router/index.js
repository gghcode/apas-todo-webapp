import Vue from 'vue';
import VueRouter from 'vue-router';
import JwtService from '@/service/jwt.service';

import home from '../views/Home';
import login from '../views/Login';
import register from '@/views/Register';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: home,
      beforeEnter: (to, from, next) => {
        if (JwtService.getToken()) next();
        else next({ name: 'login' });
      },
    },
    {
      name: 'login',
      path: '/login',
      component: login,
      beforeEnter: (to, from, next) => {
        if (JwtService.getToken()) next({ name: 'home' });
        else next();
      },
    },
    {
      name: 'register',
      path: '/register',
      component: register,
    },
  ],
});
