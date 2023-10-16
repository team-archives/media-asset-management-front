import React, { useState } from 'react';
import theme from '@src/styles/theme';
import styled from '@emotion/styled';
import { HiOutlineVideoCamera, HiOutlineBookOpen } from 'react-icons/hi';
import { PiPackageLight } from 'react-icons/pi';
import { BsClipboard2Check, BsGrid } from 'react-icons/bs';
import { VscGithubAlt as GitHub } from 'react-icons/vsc';
import {
  CLIPS_URL,
  INGEST_URL,
  ADMIN_MANAGEMENT_TEAM_URL,
  ADMIN_MANAGEMENT_USER_URL,
  ADMIN_MANAGEMENT_DEPT_URL,
  ADMIN_MANAGEMENT_RANK_URL,
} from '@src/constants/url';
import { setSidebarTitle } from '@src/utils/setLayoutTitles';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoQuestion } from 'react-icons/go';
import DarkModeToggle from '@src/components/DarkModeToggle';

const SIDE_BAR_PAGES_MENU = [
  {
    title: 'Clips',
    icon: <HiOutlineVideoCamera size={24} />,
    children: [
      { title: '클립관리', link: CLIPS_URL },
      { title: '인제스트', link: INGEST_URL },
    ],
  },
  {
    title: 'Admin Menu',
    icon: <PiPackageLight size={24} />,
    children: [
      { title: '팀 & 프로그램 관리', link: ADMIN_MANAGEMENT_TEAM_URL },
      { title: '유저 관리', link: ADMIN_MANAGEMENT_USER_URL },
      { title: '부서 관리', link: ADMIN_MANAGEMENT_DEPT_URL },
      { title: '계급 관리', link: ADMIN_MANAGEMENT_RANK_URL },
    ],
  },
  {
    title: 'Board',
    icon: <BsClipboard2Check size={24} />,
    children: [{ title: '공지사항', link: null }],
  },
  {
    title: 'How to use',
    icon: <HiOutlineBookOpen size={24} />,
    children: [
      { title: '인제스트', link: '/' },
      { title: '클립관리', link: '/' },
    ],
  },
  {
    title: 'gitHub',
    icon: <GitHub size={24} />,
    children: [
      {
        title: 'MAM server',
        link: 'https://github.com/dogineer/cnps-server-01',
      },
      {
        title: 'Archive server',
        link: 'https://github.com/dogineer/cnps-server-02',
      },
    ],
  },
];

const TOOLS_AND_COMPONENTS_MENU = [
  {
    title: 'Develop',
    icon: <BsGrid size={24} />,
    children: [{ title: 'swagger-ui', link: null }],
  },
];

interface SideBarProps {
  showSideBar: boolean;
}

const SideBar = ({ showSideBar }: SideBarProps) => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState('');
  const toggleSideBar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (currentMenu === e.currentTarget.innerText) {
      setCurrentMenu('');
    } else {
      setCurrentMenu(e.currentTarget.innerText);
    }
  };

  return (
    <SideBarContainer showSideBar={showSideBar}>
      <SideBarBrand>
        <span style={{ color: theme.palette.cnps.realWhite }}>Media</span>{' '}
        <span style={{ color: theme.palette.cnps.red }}>Buddies</span>
      </SideBarBrand>

      <MenuHeader>Pages</MenuHeader>
      {SIDE_BAR_PAGES_MENU.map((menu) => (
        <div key={menu.title}>
          <MenuItem onClick={toggleSideBar}>
            {menu.icon}
            {menu.title}
          </MenuItem>
          <SubMenuWrapper currentMenu={currentMenu} menu={menu.title} lenght={menu.children.length}>
            {menu.title === 'gitHub' ? (
              <>
                {menu.children.map((subMenu) => (
                  <a key={subMenu.title} href={subMenu.link ?? ''} target="_blank" rel="noreferrer">
                    <MenuSubItem
                      currentMenu={subMenu.title}
                      menu={setSidebarTitle(useLocation().pathname)}
                    >
                      {subMenu.title}
                    </MenuSubItem>
                  </a>
                ))}
              </>
            ) : (
              <>
                {menu.children.map((subMenu) => (
                  <MenuSubItem
                    key={subMenu.title}
                    currentMenu={subMenu.title}
                    menu={setSidebarTitle(useLocation().pathname)}
                    onClick={() => {
                      if (!subMenu.link) return;
                      navigate(subMenu.link);
                    }}
                  >
                    {subMenu.title}
                  </MenuSubItem>
                ))}
              </>
            )}
          </SubMenuWrapper>
        </div>
      ))}
      <br />
      <MenuHeader>Tools & Components</MenuHeader>
      {TOOLS_AND_COMPONENTS_MENU.map((menu) => (
        <div key={menu.title}>
          <MenuItem onClick={toggleSideBar}>
            {menu.icon}
            {menu.title}
          </MenuItem>
          <SubMenuWrapper currentMenu={currentMenu} menu={menu.title} lenght={menu.children.length}>
            {menu.children.map((subMenu) => (
              <MenuSubItem
                key={subMenu.title}
                currentMenu={subMenu.title}
                menu={setSidebarTitle(useLocation().pathname)}
              >
                {subMenu.title}
              </MenuSubItem>
            ))}
          </SubMenuWrapper>
        </div>
      ))}

      <SideBarFooter>
        <HelpWrapper>
          <GoQuestion size={24} />
          Help & Info
        </HelpWrapper>
        <DarkModeToggle />
      </SideBarFooter>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.nav<{ showSideBar: boolean }>`
  position: relative;
  width: 260px;
  background-color: ${({ theme }) => theme.palette.cnps.sidebar};
  transition: all 0.3s ease-in-out;
  margin-left: ${({ showSideBar }) => (showSideBar ? '0' : '-260px')};
`;

const SideBarBrand = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  padding: 2rem;
`;

const MenuHeader = styled.div`
  color: #ced4da;
  font-size: 0.8rem;
  padding: 1rem;
`;

const MenuItem = styled.div`
  font-size: 18px;
  color: #ced4da;
  cursor: pointer;
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
  :hover {
    background-color: #636b7d;
  }
`;

const SubMenuWrapper = styled.div<{ currentMenu: string; menu: string; lenght?: number }>`
  height: ${({ currentMenu, menu, lenght = 0 }) =>
    currentMenu === menu ? `${lenght * 40}px` : '0px'};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const MenuSubItem = styled.div<{ currentMenu: string; menu: string }>`
  height: 40px;
  display: flex;
  align-items: center;
  color: #ced4da;
  cursor: pointer;
  font-weight: 100;
  padding: 0.5rem 2rem;
  background-color: ${({ currentMenu, menu }) =>
    currentMenu === menu ? '#636b7d' : 'transparent'};
  :hover {
    background-color: #636b7d;
  }
`;

const SideBarFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 2rem 1rem;
`;

const HelpWrapper = styled(MenuHeader)`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
`;

export default SideBar;
