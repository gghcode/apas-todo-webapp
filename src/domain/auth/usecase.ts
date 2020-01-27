import { Token } from './entity';

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

  async login(req: { username: string; password: string }): Promise<Token> {
    let token: any = {};

    return token;
  }
}
