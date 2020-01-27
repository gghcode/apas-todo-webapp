import { Token } from './entity';
import { AuthGateway } from '.';

export class TokenContainer {
  accessToken: string = '';

  set(accessToken: string): void {
    this.accessToken = accessToken;
  }

  get(): string {
    return this.accessToken;
  }
}

export class AuthUsecase {
  // authenticated: boolean;
  constructor(private readonly authGateway: AuthGateway) {}

  async login(req: { username: string; password: string }): Promise<Token> {
    const token = await this.authGateway.login(req);
    return token;
  }
}
