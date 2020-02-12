import { Token } from './entity';
import { AuthGateway } from '.';
import { LocalStorage } from '@/domain/components';

const accessTokenKey = 'access_token_key';
const refreshTokenKey = 'refresh_token_key';

export class AuthUsecase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly localStorage: LocalStorage
  ) {}

  existsTokenInLocalStorage(): boolean {
    const token = this.localStorage.get(refreshTokenKey);
    return token !== null;
  }

  useAccessToken() {
    const accessToken = this.localStorage.get(accessTokenKey);
    this.authGateway.setToken(accessToken!);
  }

  async login(req: { username: string; password: string }): Promise<Token> {
    const token = await this.authGateway.login(req);

    this.authGateway.setToken(token.accessToken);
    this.saveTokenToStorage(token);

    return token;
  }

  private saveTokenToStorage(token: Token) {
    this.localStorage.set(accessTokenKey, token.accessToken);
    this.localStorage.set(refreshTokenKey, token.refreshToken);
  }
}
