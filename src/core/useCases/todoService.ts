import { TodoInteractor, TodoGateway } from '@/core/interfaces';
import { Todo } from '@/core/entities';

export class TodoService implements TodoInteractor {
  constructor(private readonly todoGateway: TodoGateway) {}

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoGateway.todos();
    return todos;
  }
}
