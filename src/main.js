import Vue from 'vue';
import App from './App.vue';
import ApiService from './service/api.service';
import { CHECK_AUTH } from './store/actions.type';

import router from './router';
import store from './store';

ApiService.init();

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
