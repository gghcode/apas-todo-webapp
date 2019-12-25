import {
  UserInteractor,
  UserGateway,
  UserResult,
} from '@/domain/user/interactor';

export class UserStore implements UserInteractor {
  constructor(
    readonly userGateway: UserGateway,
  ) {}

  async me(): Promise<UserResult> {
    const res = await this.userGateway.me();
    if (res.error) {
      return { id: 0, username: '' };
    }

    return res.data!;
  }
}
