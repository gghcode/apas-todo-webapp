import { AuthUsecase } from './authUsecase';
import { AuthGateway } from './authGateway';
import { Storage } from '../component/storage';

const accessTokenKey = 'ACCESS_TOKEN_KEY';

export class AuthService implements AuthUsecase {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly localStorage: Storage
  ) {}

  setLocalAccessTokenIfExists(): boolean {
    const token = this.localStorage.get(accessTokenKey);
    if (token === null) {
      return false;
    }

    const json: TokenResponse = JSON.parse(token);

    this.authGateway.setAccessToken(json.accessToken);
    return true;
  }

  async login(req: LoginRequest): Promise<TokenResponse> {
    const token = await this.authGateway.login(req);

    this.localStorage.set(accessTokenKey, JSON.stringify(token));

    return token;
  }
}
