import AuthService from '@/gateways/AuthGateway';
import {
  AuthInteractor,
  LoginResult,
  TokenStorage,
} from '@/domain/auth/interactor';

export class AuthStore implements AuthInteractor {
  constructor(readonly tokenStorage: TokenStorage) {}

  async login(req: {
    username: string;
    password: string;
  }): Promise<LoginResult> {
    const res = await AuthService.login(req);
    if (res.error) {
      return { error: res.error };
    }

    this.tokenStorage.saveToken(res.data!.accessToken);

    return {
      token: res.data,
    };
  }
}
