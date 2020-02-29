export interface AuthUsecase {
  setLocalAccessTokenIfExists(): boolean;
  login(req: LoginRequest): Promise<TokenResponse>;
}
