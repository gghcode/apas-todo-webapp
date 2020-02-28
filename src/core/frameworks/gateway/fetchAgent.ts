import { Agent, RequestBuilder } from '@/core/frameworks/gateway/http';
import { Context } from './http/context';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';
const accessTokenKey = 'ACCESS_TOKEN';

export class FetchAgent implements Agent {
  private ctx = new Context();

  setAccessToken(token: string): void {
    this.ctx = this.ctx.set(accessTokenKey, token);
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
