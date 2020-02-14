import { Todo } from '@/core/entities';

export interface TodoInteractor {
  getTodos(): Promise<Todo[]>;
}
