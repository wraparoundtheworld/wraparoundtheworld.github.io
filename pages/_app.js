import './style.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';


export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  );
}
