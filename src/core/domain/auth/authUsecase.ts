export interface AuthUsecase {
  setLocalAccessTokenIfExists(): boolean;
  clearAccessToken(): void;

  login(req: LoginRequest): Promise<TokenResponse>;
}
