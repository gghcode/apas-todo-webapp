import {
  TodoInteractor,
  TodoGateway,
  TodoResult,
} from '@/domain/todo/interactor';
import { TokenStorage } from '@/domain/auth/interactor';

export class TodoStore implements TodoInteractor {
  constructor(
    readonly todoGateway: TodoGateway,
    readonly tokenStorage: TokenStorage
  ) {}

  async todos(): Promise<TodoResult> {
    const accessToken = this.tokenStorage.getToken();
    if (accessToken === null) {
      return {};
    }

    const res = await this.todoGateway.todos(accessToken);
    console.log(res);

    return {};
  }
}
