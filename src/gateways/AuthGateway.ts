import { AuthGateway, TaskResult } from '@/domain/auth/interactor';
import { Token } from '@/domain/auth/dto';

const BACKEND_URL = 'https://apas-todo-api.azurewebsites.net/api/auth/token';

class AuthService implements AuthGateway {
  async login(req: {
    username: string;
    password: string;
  }): Promise<TaskResult<Token>> {
    const res = await fetch(BACKEND_URL, {
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
      error: json,
    };
  }
}

export default new AuthService();
