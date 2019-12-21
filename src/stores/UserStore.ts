import {
  UserInteractor,
  UserGateway,
  UserResult,
} from '@/domain/user/interactor';
import { TokenStorage } from '@/domain/auth/interactor';

export class UserStore implements UserInteractor {
  constructor(
    readonly userGateway: UserGateway,
    readonly tokenStorage: TokenStorage
  ) {}

  async me(): Promise<UserResult> {
    const accessToken = this.tokenStorage.getToken();
    if (accessToken === null) {
      return { id: 0, username: '' };
    }

    const res = await this.userGateway.me(accessToken);
    if (res.error) {
      return { id: 0, username: '' };
    }

    return res.data!;
  }
}
