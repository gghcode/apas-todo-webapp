import { TaskResult } from '@/domain/dto';
import { User } from './dto';

export interface UserInteractor {
  me(): Promise<UserResult>;
}

export interface UserGateway {
  me(): Promise<TaskResult<User>>;
}

export interface UserResult {
  readonly id: number;
  readonly username: string;
}
