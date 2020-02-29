import { Request } from './request';

export type RequestDecorateFunc = (req: Request) => void;
export const setBody = (body: any): RequestDecorateFunc => {
  return (req: Request) => {
    req.body = body;
  };
};
