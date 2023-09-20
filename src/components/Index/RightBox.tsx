import { useState } from 'react';
import styled from '@emotion/styled';
import RightBoxForm from '@src/components/Index/\bRightBoxForm';
import SignupModal from '@src/components/Index/SignupModal';

const RightBox = () => {
  const [open, setOpen] = useState(false);

  const handleSignupModal = () => {
    setOpen(true);
  };

  return (
    <RightBoxContainer>
      <WidthWrapper>
        <LogoWrapper>
          <img src="/Index/logo.png" alt="logo" width={30} height={30} />
          Media Buddies
        </LogoWrapper>
        <WelcomeTextWrapper>
          <h2>귀하의 계정에 로그인하십시오.</h2>
          <h5>방문을 환영합니다!</h5>
        </WelcomeTextWrapper>
        <ContactUsWrapper>
          <strong>Contacts</strong>
          <span>Email: dogineer.dev@gmail.com</span>
          <span>Tel : 010-6606-1698</span>
        </ContactUsWrapper>
        <RightBoxForm />

        <SignupLinkWrapper>
          <LinkButton type="button" onClick={handleSignupModal}>
            비밀번호 찾기
          </LinkButton>
          |
          <LinkButton type="button" onClick={handleSignupModal}>
            사용자 신청
          </LinkButton>
        </SignupLinkWrapper>
      </WidthWrapper>
      <SignupModal open={open} setOpen={setOpen} />
    </RightBoxContainer>
  );
};

const RightBoxContainer = styled.div`
  width: 50%;
  display: flex;
  color: ${({ theme }) => theme.palette.cnps.black};
`;

const WidthWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  max-width: 480px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bolder;
`;

const WelcomeTextWrapper = styled.div`
  h2 {
    font-weight: bolder;
    font-size: calc(1.325rem + 0.9vw);
    margin-bottom: 8px;
    line-height: 1.2;
  }

  h5 {
    color: #5e6265;
    font-size: 1.25rem;
    margin-bottom: 8px;
    line-height: 1.2;
  }
`;

const ContactUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto;
  line-height: 24px;
  strong {
    font-weight: 700;
    font-size: 1rem;
  }
`;

const SignupLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const LinkButton = styled.button`
  border: none;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.palette.cnps.red};
  }
`;

export default RightBox;
