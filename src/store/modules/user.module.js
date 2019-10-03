import { FETCH_PROFILE } from '../actions.type';
import ApiService from '@/service/api.service';
import { SET_PROFILE } from '../mutations.type';

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
  async [FETCH_PROFILE](context, payload) {
    const { username } = payload;

    const { data } = await ApiService.get('users', username);
    context.commit(SET_PROFILE, data);

    return data;
  },
};

const mutations = {
  [SET_PROFILE](state, profile) {
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
