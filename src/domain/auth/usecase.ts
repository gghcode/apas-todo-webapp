import { Token } from './entity';
import { AuthGateway, AuthStorage } from '.';

export class AuthUsecase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly authStorage: AuthStorage
  ) {}

  hasToken(): boolean {
    const token = this.authStorage.get(refreshTokenKey);
    return token !== null;
  }

  async login(req: { username: string; password: string }): Promise<Token> {
    const token = await this.authGateway.login(req);

    saveTokenToStorage(token, this.authStorage);

    return token;
  }
}

const accessTokenKey = 'access_token_key';
const refreshTokenKey = 'refresh_token_key';

const saveTokenToStorage = (token: Token, authStorage: AuthStorage) => {
  authStorage.set(accessTokenKey, token.accessToken);
  authStorage.set(refreshTokenKey, token.refreshToken);
};
