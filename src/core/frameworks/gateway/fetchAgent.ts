import { Agent, Request, RequestBuilder, RequestDecorateFunc } from './http';
import { Context } from './http/context';
import { Response } from './http/response';

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

  async run(builder: RequestBuilder): Promise<Response> {
    const req = builder.build(this.ctx);
    const res = await fetch(baseUrl + req.path, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });

    const json = await res.json();
    return {
      status: res.status,
      json,
    };
  }
}
