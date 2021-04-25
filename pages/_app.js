import { ThemeProvider, GlobalStyle } from '@react95/core';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
