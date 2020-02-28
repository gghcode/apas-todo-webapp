import { Request } from './request';
import { Context } from './context';

export type RequestDecorateFunc = (req: Request, ctx: Context) => void;
export const setBody = (body: any): RequestDecorateFunc => {
  return (req: Request) => {
    req.body = body;
  };
};
