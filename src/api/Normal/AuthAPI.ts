import ApiClient from '@src/api/Base/ApiClient';

export interface LoginPayload {
  account: string;
  password: string;
}

/**
 * @description: 로그인
 * @method: POST
 */
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  grantType: 'Bearer';
}
export const login = (payload: LoginPayload) => {
  const url = '/auth/token/login';
  return ApiClient.post<LoginResponse>(url, payload);
};

/**
 * @description: 로그아웃
 * @method: POST
 */
export const logout = () => {
  const url = '/auth/logout';
  return ApiClient.post(url);
};
