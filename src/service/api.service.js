import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import JwtService from './jwt.service';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = 'https://apas-todo-api.azurewebsites.net/api';
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${JwtService.getToken()}`;
  },

  async query(resource, params) {
    try {
      return Vue.axios.get(resource, params);
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async get(resource, slug = '') {
    try {
      return Vue.axios.get(`${resource}/${slug}`);
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
};

export default ApiService;
