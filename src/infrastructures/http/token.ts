import { Request, EffectWithAppContextFunc } from './request';
import { AppContext } from '@/domain/common/appContext';
import { Agent } from '.';

const accessTokenKey = 'ACCESS_TOKEN';

export const bindToken = (agent: Agent, token: string) => {
  const ctx = agent.appContext().set(accessTokenKey, token);
  agent.useAppContext(ctx);
};

export const setToken = (): EffectWithAppContextFunc => {
  return (req: Request, ctx: AppContext) => {
    req.headers['Authorization'] = `Bearer ${ctx.get(accessTokenKey)}`;
  };
};
