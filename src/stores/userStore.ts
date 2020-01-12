import {
  UserInteractor,
  UserGateway,
  UserResult,
} from '@/domain/user/interactor';
import { Result } from '@/domain';
import { User } from '@/domain/user/dto';

export class UserStore implements UserInteractor {
  constructor(readonly userGateway: UserGateway) {}

  async me(): Promise<Result<UserResult, Error>> {
    let user: User;

    try {
      user = await this.userGateway.me();
    } catch (err) {
      return [undefined, err];
    }

    return [user, undefined];
  }
}
