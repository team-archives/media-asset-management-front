import { ThemeProvider, Global } from '@emotion/react';
import theme from './styles/theme';
import reset from './styles/reset';
import styled from '@emotion/styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Test>asdf</Test>
    </ThemeProvider>
  );
}

const Test = styled.div`
  color: ${({ theme }) => theme.palette.cnps.red};
`;

export default App;
