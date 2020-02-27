export interface AuthUsecase {
  login(req: LoginRequest): Promise<TokenResponse>;
}
