import ApiService from '@/service/api.service';
import JwtService from '@/service/jwt.service';
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from '../actions.type';
import { SET_ERROR, SET_AUTH, PURGE_AUTH } from '../mutations.type';

const state = {
  errors: {},
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post('auth/token', credentials)
        .then(({ data: token }) => {
          context.commit(SET_AUTH, token);
          resolve(token);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
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
  [SET_AUTH](state, token) {
    state.isAuthenticated = true;
    state.errors = {};

    JwtService.saveToken(token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.errors = {};
    JwtService.destroyToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
