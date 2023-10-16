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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={INDEX_URL} element={<IndexPage />} />
        <Route path={CLIPS_URL} element={<ClipManagement />} />
        <Route path={INGEST_URL} element={<Ingest />} />
        <Route path={ADMIN_MANAGEMENT_TEAM_URL} element={<IndexPage />} />
        <Route path={ADMIN_MANAGEMENT_USER_URL} element={<IndexPage />} />
        <Route path={ADMIN_MANAGEMENT_DEPT_URL} element={<IndexPage />} />
        <Route path={ADMIN_MANAGEMENT_RANK_URL} element={<IndexPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
