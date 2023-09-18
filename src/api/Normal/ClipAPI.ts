import ApiClient from '@src/api/Base/ApiClient';

/**
 * @description: 클립 xml 데이터 확인 (미완성, get인데 payload를 사용하는거같음 추후 이야기)
 * @method: GET
 */
export const getClipXML = () => {
  const url = '/clip/xml';
  return ApiClient.get(url);
};

/**
 * @description: 썸네일 (get인데 payload를 사용하는거같음 추후 이야기)
 * @method: GET
 */
export const getClipThumbnail = () => {
  const url = '/clip/thumbnail';
  return ApiClient.get(url);
};

/**
 * @description: 스트리밍 (get인데 payload를 사용하는거같음 추후 이야기)
 * @method: GET
 */
export const getStreaming = () => {
  const url = '/clip/streaming';
  return ApiClient.get(url);
};

/**
 * @description: 클립 리스트 확인
 * @method: GET
 */
export const getClipList = () => {
  const url = '/clip/list';
  return ApiClient.get(url);
};

/**
 * @description: 미디어 타입 찾기 (get인데 payload를 사용하는거같음 추후 이야기)
 * @method: GET
 */
export const getClipMediaType = () => {
  const url = '/clip/list';
  return ApiClient.get(url);
};

/**
 * @description: 서버2
 * @method: GET
 */
export const getServerURL = () => {
  const url = '/clip/get-server02-url';
  return ApiClient.get(url);
};

/**
 * @description: 클립 존재 확인 (get인데 payload를 사용하는거같음 추후 이야기)
 * @method: GET
 */
export const checkClipFile = () => {
  const url = '/clip/checkFileExistence';
  return ApiClient.get(url);
};
