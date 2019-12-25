import { TodoGateway, Todo } from '@/domain/todo/interactor';
import { BACKEND_URL } from './constants';
import { TaskResult } from '@/domain/dto';

export class TodoApi implements TodoGateway {
  async todos(): Promise<TaskResult<Todo[]>> {
    const res = await fetch(BACKEND_URL + '/api/todos', {
      method: 'GET',
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    const json = await res.json();
    if (res.status === 200) {
      return {
        data: json,
      };
    }

    return {
      error: json.error,
    };
  }
}
