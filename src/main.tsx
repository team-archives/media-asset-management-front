import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@src/styles/theme';
import reset from '@src/styles/reset';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
