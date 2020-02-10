import { Token } from './entity';

export interface AuthGateway {
  setToken(accessToken: string): void;
  login(req: { username: string; password: string }): Promise<Token>;
}
