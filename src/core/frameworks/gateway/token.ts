import { Context } from './context';
import { Request, RequestDecorateFunc } from './http';

const tokenKey = 'TOKEN_KEY';

export const setTokenToContext = (ctx: Context, token: string) => {
  ctx.set(tokenKey, token);
};

export const decorateAccessToken = (ctx: Context): RequestDecorateFunc => {
  return (req: Request) => {
    req.headers['Authorization'] = `Bearer ${ctx.get(tokenKey)}`;
  };
};
