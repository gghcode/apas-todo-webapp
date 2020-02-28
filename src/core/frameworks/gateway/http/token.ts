import { Request, EffectWithAppContextFunc } from './request';
import { Context } from '@/core/entities';
import { Agent } from '.';

const accessTokenKey = 'ACCESS_TOKEN';

export const bindToken = (agent: Agent, token: string) => {
  const ctx = agent.context().set(accessTokenKey, token);
  agent.useContext(ctx);
};

export const setToken = (): EffectWithAppContextFunc => {
  return (req: Request, ctx: Context) => {
    req.headers['Authorization'] = `Bearer ${ctx.get(accessTokenKey)}`;
  };
};
