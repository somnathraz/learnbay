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
        title="New batch starting from 26th August"
        p1="Avail Scholarship upto 15000/- valid till 20th August"
        p2="Available Batch Details :"
        batch1="Weekend Morning"
        batch11=" : 21st August, 08:30 a.m. to 12:00 p.m."
        batch2="Weekday Evening"
        batch22=" : 26th August, 08.00 p.m. to 10.00 p.m."
        batch3="Weekday Morning"
        batch33=" : 25th August, 08:00 a.m. to 10:00 a.m."
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
