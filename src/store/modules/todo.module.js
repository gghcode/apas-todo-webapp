import ApiService from '@/service/api.service';
import { getIdentity } from '@/service/jwt.service';
import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from '../actions.type';
import { SET_ERROR, SET_TODOS } from '../mutations.type';

const state = {
  errors: {},
  todos: [],
};

const getters = {};

const actions = {
  [ADD_TODO](context, { title, contents }) {
    return new Promise((resolve, reject) => {
      console.log(title, contents);
      ApiService.post('todos', { title, contents }).then(({ data }) => {
        resolve();
      });
    });
  },
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
  [REMOVE_TODO](context, { id }) {
    return new Promise((resolve, reject) => {
      ApiService.delete(`todos/${id}`).then(({ data }) => {
        resolve();
      });
    });
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
