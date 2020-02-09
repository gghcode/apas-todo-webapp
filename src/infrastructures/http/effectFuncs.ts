import { EffectFunc } from './requestBuilder';
import { Request } from './request';

export const setBody = (body: any): EffectFunc => {
  return (req: Request) => {
    req.body = body;
  };
};
