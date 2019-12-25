import {
  TodoInteractor,
  TodoGateway,
  Todo,
  TodoCategory,
} from '@/domain/todo/interactor';
import { observable } from 'mobx';
import { Result } from '@/domain';

export class TodoStore implements TodoInteractor {
  @observable
  todos: Todo[] = [];

  constructor(readonly todoGateway: TodoGateway) {}

  async fetchTodoCategories(): Promise<Result<TodoCategory[], Error>> {
    return [
      [
        {
          name: 'ab',
        },
        {
          name: 'bcd',
        },
      ],
      undefined,
    ];
  }

  async fetchTodos(): Promise<Result<Todo[], Error>> {
    let todos: Todo[];

    try {
      todos = await this.todoGateway.todos();
    } catch (err) {
      return [undefined, err];
    }

    return [todos, undefined];
  }
}
