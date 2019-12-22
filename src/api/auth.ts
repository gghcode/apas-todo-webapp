import { AuthGateway } from '@/domain/auth/interactor';
import { Token } from '@/domain/auth/dto';
import { BACKEND_URL } from './constants';
import { TaskResult } from '@/domain/dto';

export class AuthApi implements AuthGateway {
  async login(req: {
    username: string;
    password: string;
  }): Promise<TaskResult<Token>> {
    const res = await fetch(BACKEND_URL + '/api/auth/token', {
      method: 'POST',
      body: JSON.stringify(req),
    });

    const json = await res.json();
    if (res.status === 200) {
      return {
        data: {
          type: json.type,
          accessToken: json.access_token,
          refreshToken: json.refresh_token,
          expiresIn: json.expires_in,
        },
      };
    }

    return {
      error: json.error,
    };
  }
}

export default new AuthApi();
