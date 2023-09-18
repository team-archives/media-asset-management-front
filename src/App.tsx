import { ThemeProvider, Global } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import reset from '@src/styles/reset';

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
