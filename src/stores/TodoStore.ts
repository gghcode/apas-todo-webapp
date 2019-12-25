import {
  TodoInteractor,
  TodoGateway,
  Todo,
  TodoCategory,
} from '@/domain/todo/interactor';
import { observable } from 'mobx';

export class TodoStore implements TodoInteractor {
  @observable
  todos: Todo[] = [];

  constructor(readonly todoGateway: TodoGateway) {}

  async fetchTodoCategories(): Promise<TodoCategory[]> {
    return [
      {
        name: 'ab',
      },
      {
        name: 'bcd',
      },
    ];
  }

  async fetchTodos(): Promise<Todo[]> {
    const res = await this.todoGateway.todos();
    if (!res.error && res.data) {
      this.todos = res.data;
    }

    return [];
  }
}
