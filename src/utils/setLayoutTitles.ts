import {
  CLIPS,
  INGEST,
  ADMIN_MANAGEMENT_TEAM,
  ADMIN_MANAGEMENT_USER,
  ADMIN_MANAGEMENT_DEPT,
  ADMIN_MANAGEMENT_RANK,
} from '@src/constants/url';

export const setHeaderTitle = (pathname: string) => {
  switch (pathname) {
    case CLIPS:
      return '클립';
    case INGEST:
      return '인제스트';
    case ADMIN_MANAGEMENT_TEAM:
      return '팀 관리';
    case ADMIN_MANAGEMENT_USER:
      return '유저 관리';
    case ADMIN_MANAGEMENT_DEPT:
      return '부서 관리';
    case ADMIN_MANAGEMENT_RANK:
      return '직급 및 계급 관리';
    default:
      return '뭔가 에러가 남';
  }
};

export const setSidebarTitle = (pathname: string) => {
  switch (pathname) {
    case CLIPS:
      return '클립관리';
    case INGEST:
      return '인제스트';
    case ADMIN_MANAGEMENT_TEAM:
      return '팀 & 프로그램 관리';
    case ADMIN_MANAGEMENT_USER:
      return '유저 관리';
    case ADMIN_MANAGEMENT_DEPT:
      return '부서 관리';
    case ADMIN_MANAGEMENT_RANK:
      return '계급 관리';
    default:
      return '뭔가 에러가 남';
  }
};
