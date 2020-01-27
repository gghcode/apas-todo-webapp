import { UserUsecase, UserGateway, UserResult } from '@/domain/user/usecase';
import { Result } from '@/domain';
import { User } from '@/domain/user/entity';

export class UserStore {
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
