import './style.css';
import { GoogleAnalytics } from "nextjs-google-analytics";


export default function App({ Component, pageProps }) {
  return (
    <>
     <GoogleAnalytics strategy="lazyOnload" />
      {/* <GoogleAnalytics trackingId={process.env.GOOGLE_ANALYTICS_ID} /> */}
      <Component {...pageProps} />
    </>
  );
}
