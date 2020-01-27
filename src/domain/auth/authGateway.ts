import { Token } from './entity';

export interface AuthGateway {
  login(req: { username: string; password: string }): Promise<Token>;
}
