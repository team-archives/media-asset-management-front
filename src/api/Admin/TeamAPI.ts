import ApiClient from '@src/api/Base/ApiClient';

interface DeleteTeamPayload {
  teamId: number;
}

interface AddTeamPayload {
  teamName: string;
  teamType: number;
}

/**
 * @description: 팀 삭제하기
 * @method: POST
 */
export const deleteTeam = (payload: DeleteTeamPayload) => {
  const url = '/admin/team/delete';
  return ApiClient.post(url, payload);
};

/**
 * @description: 팀 추가하기
 * @method: POST
 */
export const addTeam = (payload: AddTeamPayload) => {
  const url = 'admin/team/add';
  return ApiClient.post(url, payload);
};
