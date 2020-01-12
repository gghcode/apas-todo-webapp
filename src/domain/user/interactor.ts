import { User } from './dto';
import { Result } from '@/domain';

export interface UserInteractor {
  me(): Promise<Result<UserResult, Error>>;
}

export interface UserGateway {
  me(): Promise<User>;
}

export interface UserResult {
  readonly id: number;
  readonly username: string;
}
