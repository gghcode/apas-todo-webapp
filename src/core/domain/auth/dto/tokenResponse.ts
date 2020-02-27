type TokenResponse = {
  readonly type: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expiresIn: number;
};
