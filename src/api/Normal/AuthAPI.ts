import ApiClient from '@src/api/Base/ApiClient';

export interface LoginPayload {
  account: string;
  password: string;
}

/**
 * @description: 로그인
 * @method: POST
 */
export const login = (payload: LoginPayload) => {
  const url = '/auth/token/login';
  return ApiClient.post(url, payload);
};

/**
 * @description: 로그아웃
 * @method: POST
 */
export const logout = () => {
  const url = '/auth/logout';
  return ApiClient.post(url);
};
