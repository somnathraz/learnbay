import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import React from "react";
import "../styles/form.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-NN8XWH8`}
      />

<Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-215989751-1`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NN8XWH8', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-215989751-1');
                `}
      </Script>
      <Component {...pageProps} />
      <Footer />
      <OfferPopup
        title="Batch closing on 26th August"
        p1="Note:- Only 10 seats left!"
        p2="Available Batch Details :"
        batch1="Weekday Evening"
        batch11=" : 26th August, 08.00 p.m. to 10.00 p.m."
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
