import styled from '@emotion/styled';
import LeftBox from '@src/components/Index/LeftBox';
import RightBox from '@src/components/Index/RightBox';

const Index = () => {
  return (
    <Container>
      <LeftBox />
      <RightBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default Index;
