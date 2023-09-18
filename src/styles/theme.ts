import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    palette: {
      cnps: {
        backgroundColor: string;
        black: string;
        realWhite: string;
        white: string;
        heavyWhite: string;
        red: string;
        sidebar: string;
        blackShadow: string;
        hover: string;
      };
    };
  }
}

const theme: Theme = {
  palette: {
    cnps: {
      backgroundColor: '#E5E9F0',
      black: '#2E3440',
      realWhite: '#FFFFFF',
      white: '#E5E9F0',
      heavyWhite: '#ECEFF4',
      red: '#BF616A',
      sidebar: '#4C566A',
      blackShadow: '#E5E9F0',
      hover: '#4C566A',
    },
  },
};

export default theme;
