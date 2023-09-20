import { css } from '@emotion/react';

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 100;
    src: url('/fonts/Roboto-Thin.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: url('/fonts/Roboto-Light.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url('/fonts/Roboto-Regular.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url('/fonts/Roboto-Medium.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url('/fonts/Roboto-Bold.ttf');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src: url('/fonts/Roboto-Black.ttf');
  }
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  a {
    color: inherit;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    font-family: 'Roboto';
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default reset;
