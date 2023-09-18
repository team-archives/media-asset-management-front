import ApiClient from '@src/api/Base/ApiClient';

interface AddIngestPayload {
  id: number;
  createAt: Date;
  memberId: number;
  title: string;
  teamId: number;
  program: string;
  folder: number;
  name: string;
  phone: string;
  codec: string;
  successAt: Date;
  files: string;
}

/**
 * @description: 인제스트 등록
 * @method: POST
 */
export const addIngest = (payload: AddIngestPayload) => {
  const url = '/ingest/add';
  return ApiClient.post(url, payload);
};

/**
 * @description: 인제스트 목록
 * @method: GET
 */
export const getIngestList = () => {
  const url = '/ingest/list';
  return ApiClient.get(url);
};
