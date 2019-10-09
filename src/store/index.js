import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth.module';
import user from './modules/user.module';
import todo from './modules/todo.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    todo,
  },
});
