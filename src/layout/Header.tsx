import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaCircleUser } from 'react-icons/fa6';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { setHeaderTitle } from '@src/utils/setLayoutTitles';
import { useLocation } from 'react-router-dom';

const useOutSideRef = () => {
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsUserDropDownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return { ref, isUserDropDownOpen, setIsUserDropDownOpen };
};

interface HeaderProps {
  showSideBar: boolean;
  toggleSideBar: () => void;
}

const Header = ({ showSideBar, toggleSideBar }: HeaderProps) => {
  const { ref, isUserDropDownOpen, setIsUserDropDownOpen } = useOutSideRef();
  const toggleUserDropDown = () => setIsUserDropDownOpen((prev) => !prev);

  return (
    <HeaderContainer>
      <IconTitleWrapper>
        <MenuIconWrapper onClick={toggleSideBar}>
          {showSideBar ? <AiOutlineMenuFold size={23} /> : <AiOutlineMenuUnfold size={23} />}
        </MenuIconWrapper>
        {setHeaderTitle(useLocation().pathname)}
      </IconTitleWrapper>

      <UserInfoWrapper ref={ref}>
        <FaCircleUser size={32} />
        <UserDropwDownLink onClick={toggleUserDropDown}>
          이태관 님
          {isUserDropDownOpen ? (
            <GoTriangleUp color="black" size={20} />
          ) : (
            <GoTriangleDown color="black" size={20} />
          )}
        </UserDropwDownLink>
        {isUserDropDownOpen && (
          <DropDownMenu>
            <DropDownMenuItem>내 정보</DropDownMenuItem>
            <DropDownMenuItem>비밀번호 변경하기</DropDownMenuItem>
            <DropDownMenuItem>로그아웃</DropDownMenuItem>
          </DropDownMenu>
        )}
      </UserInfoWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.cnps.black};
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  padding: 1rem;
  border-bottom: 1px solid #777777;
`;

const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 0.375rem;
  border: 0.01rem solid #777777;
  svg {
    :hover {
      color: ${({ theme }) => theme.palette.cnps.red};
    }
  }
`;

const UserInfoWrapper = styled.div`
  width: 160px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserDropwDownLink = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  :hover {
    color: ${({ theme }) => theme.palette.cnps.red};
  }
`;

const DropDownMenu = styled.ul`
  width: 100%;
  position: absolute;
  top: calc(100% + 5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 8px 0px;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 6px;
`;

const DropDownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: #f8f9fa;
  }
`;

export default Header;
