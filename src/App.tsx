import IndexPage from '@src/Page/Index';
import { Route, Routes } from 'react-router-dom';
import Layout from '@src/layout/Layout';
import ClipManagement from '@src/Page/Clips/ClipManagement';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/user/clip" element={<ClipManagement />} />
        <Route path="/user/clip" element={<ClipManagement />} />
        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
