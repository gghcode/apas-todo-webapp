import {
  TodoInteractor,
  TodoGateway,
  Todo,
  TodoCategory,
} from '@/domain/todo/interactor';
import { TokenStorage } from '@/domain/auth/interactor';
import { observable } from 'mobx';

export class TodoStore implements TodoInteractor {
  @observable
  todos: Todo[] = [];

  constructor(
    readonly todoGateway: TodoGateway,
    readonly tokenStorage: TokenStorage
  ) {}

  async fetchTodoCategories(): Promise<TodoCategory[]> {
    return ['abc', 'dbd', 'fda'];
  }

  async fetchTodos(): Promise<Todo[]> {
    const accessToken = this.tokenStorage.getToken();
    if (accessToken === null) {
      return [];
    }

    const res = await this.todoGateway.todos(accessToken);
    if (!res.error && res.data) {
      this.todos = res.data;
    }
    console.log(res);

    return [];
  }
}
