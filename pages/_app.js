import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import React from "react";
import "../styles/form.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
