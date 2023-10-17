import styled from '@emotion/styled';

const DUMMY_DATA = [1, 2, 3, 4, 5];

const Footer = () => {
  return (
    <FooterContainer>
      {DUMMY_DATA.map((data) => (
        <SquareBox key={data}>{data}</SquareBox>
      ))}
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.cnps.realWhite};
  color: ${({ theme }) => theme.palette.cnps.black};
  border-top: solid 0.01rem #777777;
`;

const SquareBox = styled.div`
  width: 2rem;
  height: 2rem;
  font-size: larger;
  color: ${({ theme }) => theme.palette.cnps.black};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #777777;
  }
`;

export default Footer;
