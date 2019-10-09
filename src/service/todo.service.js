import ApiService from './api.service';

class TodoService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async fetchTodos() {}
}

export default TodoService;
