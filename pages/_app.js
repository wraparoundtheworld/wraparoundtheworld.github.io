import { ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
