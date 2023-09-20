import styled from '@emotion/styled';
import theme from '@src/styles/theme';

const LeftBox = () => {
  return (
    <LeftBoxContainer>
      <Image src="/Index/index-image.svg" />
      <h4>파일을 클라우드 저장소에 업로드하고 웹에서 변환하세요.</h4>
      <h3>그 다음 Editor Premier Pro로 즐겨보세요!</h3>
      <br />
      <Span color={theme.palette.cnps.red}>프리미어 플러그인 설치</Span>
      <Span style={{ fontSize: 'smaller' }} color="#939393">
        프리미어 버전은 22.5.0(Build 62)입니다.
      </Span>
      <LinkWrapper>
        <DownloadButton
          type="button"
          href="https://github.com/dogineer/adobe-nps-panel/archive/refs/heads/main.zip"
        >
          WINDOWS 설치
        </DownloadButton>
        <span style={{ padding: '12px', color: '#939393' }}>|</span>
        <DownloadButton
          type="button"
          href="https://github.com/dogineer/adobe-nps-panel/archive/refs/heads/main.zip"
        >
          MAC 설치
        </DownloadButton>
      </LinkWrapper>
    </LeftBoxContainer>
  );
};

const LeftBoxContainer = styled.div`
  width: 50%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.palette.cnps.realWhite};
  background-color: ${({ theme }) => theme.palette.cnps.sidebar};
  align-items: center;
  line-height: 24px;

  h4 {
    font-size: calc(1.275rem + 0.3vw);
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-size: calc(1.3rem + 0.6vw);
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

const Image = styled.img`
  width: 60%;
  margin: 32px;
`;

const Span = styled.span`
  color: ${({ color }) => color};
  font-weight: 500;
`;

const LinkWrapper = styled.div`
  text-align: left;
`;

const DownloadButton = styled.a`
  transition: color 0.35s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.palette.cnps.red};
  }
`;

export default LeftBox;
