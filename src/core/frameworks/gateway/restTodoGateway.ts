import { TodoGateway } from '@/core/interfaces';
import { Agent } from '@/core/interfaces/http';
import { Todo } from '@/core/entities';

export class RestTodoGateway implements TodoGateway {
  constructor(private readonly agent: Agent) {}

  async todos(): Promise<Todo[]> {
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
