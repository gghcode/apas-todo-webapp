import { TaskResult } from '@/domain/dto';
import { User } from './dto';

export interface UserInteractor {
  me(): Promise<UserResult>;
}

export interface UserGateway {
  me(accessToken: string): Promise<TaskResult<User>>;
}

export interface UserResult {
  readonly id: number;
  readonly username: string;
}
