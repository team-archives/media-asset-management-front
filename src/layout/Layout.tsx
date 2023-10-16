import { useState } from 'react';
import Header from '@src/layout/Header';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import SideBar from '@src/layout/SideBar';
import theme from '@src/styles/theme';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isIndex = useLocation().pathname === '/' ? true : false;
  const [showSideBar, setShowSideBar] = useState(true);

  const toggleSideBar = () => setShowSideBar((prev) => !prev);
  return (
    <Container>
      {!isIndex && <SideBar showSideBar={showSideBar} />}
      <MainContainer>
        {!isIndex && <Header showSideBar={showSideBar} toggleSideBar={toggleSideBar} />}
        {children}
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh; // Todo: 100vh가 맞을까?
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Layout;