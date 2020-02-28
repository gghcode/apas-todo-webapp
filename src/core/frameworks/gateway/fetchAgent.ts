// import { RestAgent, Request } from './restAgent';
import { Context } from '@/core/entities';
import { Agent, Request } from '@/core/frameworks/gateway/http';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';

export class FetchAgent implements Agent {
  private ctx = new Context();

  context(): Context {
    return this.ctx;
  }

  useContext(ctx: Context) {
    this.ctx = ctx;
  }

  run(req: Request): Promise<any> {
    for (const pipe of req.lazyPipes) {
      pipe(req, this.ctx);
    }

    return fetch(baseUrl + req.path, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });
  }
}
