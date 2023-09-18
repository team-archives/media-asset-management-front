import ApiClient from '@src/api/Base/ApiClient';

interface UpdateUserInfoPayload {
  account: string;
  name: string;
  phone: string;
  rankId: number;
  deptId: number;
  teamId: number;
  gender: string;
  email: string;
}

/**
 * @description: 직원 사용자 삭제
 * @method: PUT
 */
export const deleteUser = (account: string) => {
  const url = `/admin/user/delete/${account}`;
  return ApiClient.put(url);
};

/**
 * @description: 개인 정보 업데이트
 * @method: PUT
 */
export const updateUserInfo = (payload: UpdateUserInfoPayload) => {
  const url = '/admin/user/update';
  return ApiClient.put(url, payload);
};

/**
 * @description: 직원 사용자 요청 승인
 * @method: PUT
 */
export const applyUserEmploy = (account: string) => {
  const url = `/admin/user/access/apply/${account}`;
  return ApiClient.put(url);
};

/**
 * @description: 개인정보값
 * @method: GET
 */
export const getUserInfo = (account: string) => {
  const url = `/admin/user/account-info/${account}`;
  return ApiClient.get(url);
};
