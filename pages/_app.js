import "../styles/globals.css";
import BottomBar from "../components/BottomBar/BottomBar";
import React from "react";
import "../styles/form.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-NN8XWH8`}
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NN8XWH8', {
              page_path: window.location.pathname,
            },);
                `,
        }}
      />
      <Component {...pageProps} />

      <BottomBar />
    </>
  );
}

export default MyApp;