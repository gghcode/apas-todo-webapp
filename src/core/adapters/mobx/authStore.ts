import { observable, action } from 'mobx';
import { AuthUsecase } from '@/core/domain/auth';

export class AuthStore {
  @observable
  authenticated: boolean = false;

  constructor(private readonly authService: AuthUsecase) {}

  @action
  async login(req: LoginRequest): Promise<void> {
    try {
      await this.authService.login(req);
    } catch (err) {
      return err;
    }

    this.authenticated = true;
    return undefined;
  }

  @action
  loginIfHasTokenInLocal(): void {
    this.authenticated = this.authService.setLocalAccessTokenIfExists();
  }

  @action
  logout() {
    this.authService.clearAccessToken();
    this.authenticated = false;
  }
}
