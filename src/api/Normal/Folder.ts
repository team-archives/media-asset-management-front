import ApiClient from '@src/api/Base/ApiClient';

export interface FolderType {
  id: number;
  name: string;
  p_id: number;
  team_id: number;
}

/**
 * @description: 폴더 생성
 * @method: POST
 */
export const createFolder = (payload: FolderType) => {
  const url = '/folder/create';
  return ApiClient.post(url, payload);
};

/**
 * @description: 하위 폴더 조회
 * @method: GET
 * @param {number} num - 상위 폴더의 p_id
 */
export const getChildFolder = (num: number) => {
  const url = `/folder/show/${num}`;
  return ApiClient.get<FolderType[]>(url);
};

/**
 * @description: 폴더 전체 조회
 * @method: GET
 */
export const getAllFolder = () => {
  const url = '/folder/show/all';
  return ApiClient.get<FolderType[]>(url);
};

/**
 * @description: 폴더 데이터 조회
 * @method: GET
 */
export const getFolderData = (folderId: number) => {
  const url = `/folder/select/${folderId}`;
  return ApiClient.get(url);
};

/**
 * @description: 폴더 삭제
 * @method: DELETE
 */
export const deleteFolder = (num: number) => {
  const url = `/folder/delete/${num}`;
  return ApiClient.delete(url);
};
