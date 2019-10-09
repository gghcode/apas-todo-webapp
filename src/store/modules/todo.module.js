import ApiService from '@/service/api.service';
import JwtService, { getIdentity } from '@/service/jwt.service';
import { CHECK_AUTH, FETCH_TODOS, REMOVE_TODO } from '../actions.type';
import { SET_ERROR, SET_AUTH, PURGE_AUTH, SET_TODOS } from '../mutations.type';

const state = {
  errors: {},
  todos: [],
  isAuthenticated: !!JwtService.getToken(),
};

const getters = {
  // currentUser(state) {
  //   return state.user;
  // },
  // isAuthenticated(state) {
  //   return state.isAuthenticated;
  // },
};

const actions = {
  [FETCH_TODOS](context) {
    return new Promise((resolve, reject) => {
      ApiService.get(`todos?user_id=${getIdentity().sub}`)
        .then(({ data }) => {
          context.commit(SET_TODOS, data);
          resolve();
        })
        .catch(ex => {
          reject();
        });
    });
  },
  [REMOVE_TODO](context) {
    return new Promise((resolve, reject) => {
      ApiService.delete(`todos`);
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      // ApiService.get('users', 'gyuhwan').then(({ data }) => {
      //   console.log(data);
      //   context.commit(SET_AUTH, data);
      // });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
};

const mutations = {
  [SET_ERROR](state, err) {
    state.errors = err;
  },
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
