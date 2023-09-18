import ApiClient from '@src/api/Base/ApiClient';

interface CreateNoticePayload {
  id: number;
  empId: number;
  writer: string;
  title: string;
  content: string;
}

/**
 * @description: 공지사항 작성
 * @method: POST
 */
export const createNotice = (payload: CreateNoticePayload) => {
  const url = '/notice/create';
  return ApiClient.post(url, payload);
};

/**
 * @description: 공지사항 목록
 * @method: GET
 */
export const getNoticeList = () => {
  const url = '/notice/list';
  return ApiClient.get(url);
};

/**
 * @description: 공지사항 삭제
 * @method: DELETE
 */
export const deleteNotice = (noticeId: number) => {
  const url = `/notice/delete/${noticeId}`;
  return ApiClient.delete(url);
};
