import { Request } from './request';
import { Context } from '@/core/entities';

export type EffectFunc = (req: Request, ctx: Context) => void;
export type AllowMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class RequestBuilder {
  pipelines: EffectFunc[] = [];

  constructor(
    private readonly path: string,
    private readonly method: AllowMethods
  ) {}

  with(func: EffectFunc): RequestBuilder {
    this.pipelines.push(func);
    return this;
  }
  
  build(ctx: Context): Request {
    const req: Request = {
      path: this.path,
      method: this.method,
      headers: {},
    };

    for (const effect of this.pipelines) {
      effect(req, ctx);
    }

    return req;
  }
}
