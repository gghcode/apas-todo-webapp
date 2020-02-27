import { Agent } from '@/core/interfaces/http';
import { TodoGateway } from '@/core/domain/todo';

export class RestTodoGateway implements TodoGateway {
  constructor(private readonly agent: Agent) {}

  async todos(): Promise<TodoResponse[]> {
    // const req = new RequestBuilder()
    //   .withAppContext(setToken())
    //   .build('/api/todos', 'GET');

    // const res = await this.agent.run(req);
    // const json = await res.json();
    // if (!res.ok) {
    //   throw new Error(json);
    // }
    const json: any = {};

    return json;
  }
}
