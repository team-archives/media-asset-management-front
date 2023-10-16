import {
  CLIPS_URL,
  INGEST_URL,
  ADMIN_MANAGEMENT_TEAM_URL,
  ADMIN_MANAGEMENT_USER_URL,
  ADMIN_MANAGEMENT_DEPT_URL,
  ADMIN_MANAGEMENT_RANK_URL,
} from '@src/constants/url';

export const setHeaderTitle = (pathname: string) => {
  switch (pathname) {
    case CLIPS_URL:
      return '클립';
    case INGEST_URL:
      return '인제스트';
    case ADMIN_MANAGEMENT_TEAM_URL:
      return '팀 관리';
    case ADMIN_MANAGEMENT_USER_URL:
      return '유저 관리';
    case ADMIN_MANAGEMENT_DEPT_URL:
      return '부서 관리';
    case ADMIN_MANAGEMENT_RANK_URL:
      return '직급 및 계급 관리';
    default:
      return '뭔가 에러가 남';
  }
};

export const setSidebarTitle = (pathname: string) => {
  switch (pathname) {
    case CLIPS_URL:
      return '클립관리';
    case INGEST_URL:
      return '인제스트';
    case ADMIN_MANAGEMENT_TEAM_URL:
      return '팀 & 프로그램 관리';
    case ADMIN_MANAGEMENT_USER_URL:
      return '유저 관리';
    case ADMIN_MANAGEMENT_DEPT_URL:
      return '부서 관리';
    case ADMIN_MANAGEMENT_RANK_URL:
      return '계급 관리';
    default:
      return '뭔가 에러가 남';
  }
};
