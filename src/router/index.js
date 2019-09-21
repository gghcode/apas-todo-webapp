import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../views/Home';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
    },
  ],
});
