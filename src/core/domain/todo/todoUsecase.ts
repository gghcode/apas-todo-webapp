export interface TodoUsecase {
  getTodos(): Promise<TodoResponse[]>;
}
