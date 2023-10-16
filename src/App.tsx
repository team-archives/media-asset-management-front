import { Route, Routes } from 'react-router-dom';
import Layout from '@src/layout/Layout';
import {
  INDEX_URL,
  CLIPS_URL,
  INGEST_URL,
  ADMIN_MANAGEMENT_TEAM_URL,
  ADMIN_MANAGEMENT_USER_URL,
  ADMIN_MANAGEMENT_DEPT_URL,
  ADMIN_MANAGEMENT_RANK_URL,
} from '@src/constants/url';
import IndexPage from '@src/Page/Index';
import ClipManagement from '@src/Page/Clips/ClipManagement';
import Ingest from '@src/Page/Clips/Ingest';
import TeamManagement from '@src/Page/AdminMenu/TeamManagement';
import UserManagement from '@src/Page/AdminMenu/UserManagement';
import DeptManagement from '@src/Page/AdminMenu/DeptManagement';
import RankManagement from '@src/Page/AdminMenu/RankManagement';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={INDEX_URL} element={<IndexPage />} />
        <Route path={CLIPS_URL} element={<ClipManagement />} />
        <Route path={INGEST_URL} element={<Ingest />} />
        <Route path={ADMIN_MANAGEMENT_TEAM_URL} element={<TeamManagement />} />
        <Route path={ADMIN_MANAGEMENT_USER_URL} element={<UserManagement />} />
        <Route path={ADMIN_MANAGEMENT_DEPT_URL} element={<DeptManagement />} />
        <Route path={ADMIN_MANAGEMENT_RANK_URL} element={<RankManagement />} />
      </Routes>
    </Layout>
  );
}

export default App;
