import { Context } from '@/core/entities';

export type EffectWithAppContextFunc = (req: Request, ctx: Context) => void;

export interface Request {
  path: string;
  method: string;
  body?: any;
  headers: any;

  lazyPipes: EffectWithAppContextFunc[];
}
