import { Agent, Request, RequestBuilder, RequestDecorateFunc } from './http';
import { Context } from './http/context';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';
const accessTokenKey = 'ACCESS_TOKEN';

export class FetchAgent implements Agent {
  private ctx = new Context();

  setAccessToken(token: string): void {
    this.ctx = this.ctx.set(accessTokenKey, token);
  }

  decorateAccessToken(): RequestDecorateFunc {
    return (req: Request, ctx: Context) => {
      req.headers['Authorization'] = `Bearer ${ctx.get(accessTokenKey)}`;
    };
  }

  run(builder: RequestBuilder): Promise<any> {
    const req = builder.build(this.ctx);
    return fetch(baseUrl + req.path, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });
  }
}
