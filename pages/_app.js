import "./style.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageVies gaMeasurementId="G-HDLSD7T305" debugMode />
      <Component {...pageProps} />
    </>
  );
}
