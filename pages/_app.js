import { ThemeProvider, GlobalStyle } from '@react95/core';
import './components/style.css'

export default function App({ Component, pageProps }) {
  return (    
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>    
  );
}
