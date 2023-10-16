import Header from '@src/layout/Header';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isIndex = useLocation().pathname === '/' ? true : false;
  return (
    <>
      {!isIndex && <Header />}
      {children}
    </>
  );
};

export default Layout;
