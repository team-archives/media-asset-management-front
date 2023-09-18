import ApiClient from '@src/api/Base/ApiClient';

// 어드민 > 직급 및 직책 관리

interface AddNewRankPayload {
  rankName: string;
  rankParentId: number;
}

/**
 * @description: 직급 및 직책 생성
 * @method: POST
 */
export const addNewRank = (payload: AddNewRankPayload) => {
  const url = '/admin/rank/new/';
  return ApiClient.post(url, payload);
};

/**
 * @description: 직급 및 직책 목록
 * @method: GET
 */
export const getRankList = () => {
  const url = '/admin/rank/list';
  return ApiClient.get(url);
};
