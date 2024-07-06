import './style.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackingId={process.env.GOOGLE_ANALYTICS_ID} />
      <Component {...pageProps} />
    </>
  );
}
