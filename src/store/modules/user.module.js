import { FETCH_PROFILE } from '../actions.type';
import ApiService from '@/service/api.service';
import { SET_USER } from '../mutations.type';

const state = {
  errors: {},
  profile: {},
};

const getters = {
  profile(state) {
    return state.profile;
  },
};

const actions = {
  // [FETCH_PROFILE](context, payload) {
  //   return new Promise(({ resolve, reject }) => {
  //     ApiService.get('user')
  //       .then(data => {
  //         console.log(data);
  //         resolve(data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  //   // const { username } = payload;
  //   // const { data } = await ApiService.get('users', username);
  //   // context.commit(SET_USER, data);
  //   // return data;
  // },
};

const mutations = {
  [SET_USER](state, profile) {
    state.profile = profile;
    state.errors = {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
