import Index from '@src/Page/Index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
