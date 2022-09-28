import "../styles/globals.css";
import BottomBar from "../components/BottomBar/BottomBar";
import React from "react";
import "../styles/form.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
       
      <BottomBar />
    </>
  );
}

export default MyApp;
