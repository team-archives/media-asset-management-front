import ApiClient from '@src/api/Base/ApiClient';

export interface SignupPayload {
  account: string;
  name: string;
  gender: number;
  phone: string;
  email: string;
  deptId: number;
  rankId: number;
  des: string;
  password: string;
}

/**
 * @description: 처음 사용자 팀 변경 (put인데 payload를 사용하는거같음 추후 이야기)
 * @method: PUT
 */
export const updateTeamMember = () => {
  const url = '/auth/member/team/update';
  return ApiClient.put(url);
};

/**
 * @description: 비밀번호 변경 (put인데 payload를 사용하는거같음 추후 이야기)
 * @method: PUT
 */
export const changePassword = () => {
  const url = '/auth/changePassword';
  return ApiClient.put(url);
};

/**
 * @description: 회원가입
 * @method: POST
 */
export const signup = (payload: SignupPayload) => {
  const url = '/auth/signup';
  return ApiClient.post(url, payload);
};
