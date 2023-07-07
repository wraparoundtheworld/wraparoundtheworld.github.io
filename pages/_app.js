import { ThemeProvider, GlobalStyle } from '@react95/core';
import './components/style.css'
import MonicaHenrique_pixelated from "../Monica_HenriquepxArt.png";

export default function App({ Component, pageProps }) {
  return (
    
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>   
   
  );
}
