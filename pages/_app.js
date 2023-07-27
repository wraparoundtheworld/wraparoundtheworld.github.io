import './style.css'
import { ThemeProvider, GlobalStyle } from '@react95/core';
import { createGlobalStyle } from '@xstyled/styled-components';

const Wallpaper = createGlobalStyle`
  body {
    background: url(/image/wallpaper.jpg) no-repeat center center fixed;
    background-size: cover;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wallpaper />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
