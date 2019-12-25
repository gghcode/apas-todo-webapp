import { UserGateway } from '@/domain/user/interactor';
import { TaskResult } from '@/domain/dto';
import { User } from '@/domain/user/dto';
import { BACKEND_URL } from './constants';

export class UserApi implements UserGateway {
  async me(): Promise<TaskResult<User>> {
    const res = await fetch(BACKEND_URL + '/api/user', {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    const json = await res.json();
    if (res.status === 200) {
      return {
        data: json,
      };
    }

    return {
      error: json.error,
    };
  }
}
