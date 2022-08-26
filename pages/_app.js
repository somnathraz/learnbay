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
        title="Special Batch for Non Programmers Starts from 31st August"
        p1="Avail 20% discount on all"
        p2="Available Batch Details :"
        batch1="Weekend Afternoon"
        batch11=" : 4th September, 12:30 p.m. to 4 p.m."
        batch2="Weekday Evening"
        batch22=" : 9th September, 8 p.m. to 10 p.m."
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
