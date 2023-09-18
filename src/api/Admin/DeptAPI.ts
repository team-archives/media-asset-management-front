import ApiClient from '@src/api/Base/ApiClient';

interface AddDeptPayload {
  deptName: string;
  deptParentId: number;
}

/**
 * @description: 부서 유형 추가
 * @method: POST
 */
export const addMidDept = (payload: AddDeptPayload) => {
  const url = '/admin/dept/mid/add';
  return ApiClient.post(url, payload);
};

/**
 * @description: 부서 추가
 * @method: POST
 */
export const addLowDept = (payload: AddDeptPayload) => {
  const url = '/admin/dept/low/add';
  return ApiClient.post(url, payload);
};

/**
 * @description: 본부 추가
 * @method: POST
 */
export const addHighDept = (payload: AddDeptPayload) => {
  const url = '/admin/dept/high/add';
  return ApiClient.post(url, payload);
};

/**
 * @description: 전체 부서 리스트
 * @method: GET
 */
export const getAllDeptList = () => {
  const url = '/admin/dept/list/all';
  return ApiClient.get(url);
};

/**
 * @description: 상위 본부 리스트
 * @method: GET
 */
export const getHighDeptList = () => {
  const url = '/admin/dept/high/list';
  return ApiClient.get(url);
};

/**
 * @description: 부서 유형 찾기
 * @method: GET
 */
export const getFindTypeDept = (deptParentId: number) => {
  const url = `/admin/dept/find/type/${deptParentId}`;
  return ApiClient.get(url);
};

/**
 * @description: 부서 조직도 리스트
 * @method: GET
 */
export const getDeptTree = (deptId: number) => {
  const url = `/admin/dept/find/tree/${deptId}`;
  return ApiClient.get(url);
};

/**
 * @description: 유형 삭제
 * @method: DELETE
 */
export const deleteMidDept = (deptId: number) => {
  const url = `/admin/dept/mid/delete/${deptId}`;
  return ApiClient.delete(url);
};

/**
 * @description: 부서 삭제
 * @method: DELETE
 */
export const deleteLowDept = (deptId: number) => {
  const url = `/admin/dept/low/delete/${deptId}`;
  return ApiClient.delete(url);
};

/**
 * @description: 본부 삭제
 * @method: DELETE
 */
export const deleteHighDept = (deptId: number) => {
  const url = `/admin/dept/high/delete/${deptId}`;
  return ApiClient.delete(url);
};
