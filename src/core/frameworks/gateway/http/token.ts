import { Request } from './request';
import { Agent } from '.';
import { EffectFunc } from './requestBuilder';
import { Context } from './context';

const accessTokenKey = 'ACCESS_TOKEN';

export const bindToken = (agent: Agent, token: string) => {
  agent.setAccessToken(token);
};

export const setToken = (): EffectFunc => {
  return (req: Request, ctx: Context) => {
    req.headers['Authorization'] = `Bearer ${ctx.get(accessTokenKey)}`;
  };
};
