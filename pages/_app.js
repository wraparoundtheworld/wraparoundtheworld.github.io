import './style.css';
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-HDLSD7T305`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HDLSD7T305', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
      <Component {...pageProps} />
    </>
  );
}
