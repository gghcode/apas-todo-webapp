import { Request, EffectWithAppContextFunc } from './request';
import { AppContext } from '@/domain/common/appContext';

export type EffectFunc = (req: Request) => void;
// export type EffectWithAppContextFunc = (req: Request, ctx: AppContext) => void;

export type AllowMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class RequestBuilder {
  pipelines: EffectFunc[] = [];
  requireCtxPipes: EffectWithAppContextFunc[] = [];

  with(func: EffectFunc): RequestBuilder {
    this.pipelines.push(func);
    return this;
  }

  withAppContext(func: EffectWithAppContextFunc): RequestBuilder {
    this.requireCtxPipes.push(func);
    return this;
  }

  build(path: string, method: AllowMethods): Request {
    const req: Request = {
      path: path,
      method: method,
      lazyPipes: this.requireCtxPipes,
      headers: {},
    };

    for (const effect of this.pipelines) {
      effect(req);
    }

    return req;
  }
}
