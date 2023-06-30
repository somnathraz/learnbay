import "../styles/globals.css";
import TagManager from "react-gtm-module";
import React, { useEffect } from "react";
import "../styles/form.css";
import Script from "next/script";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NN8XWH8" });
  }, [0]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-215989751-1`}
      />

      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-215989751-1');
            `,
        }}
      />
      <Script
        strategy="lazyOnload"
        src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
      ></Script>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-86WLBHQTY3`}
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-86WLBHQTY3');
  `,
        }}
      />

      <Component {...pageProps} />
      <WhatsappFloat />
    </>
  );
}

export default MyApp;
