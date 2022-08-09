import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import React from "react";
import "../styles/form.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <OfferPopup
        title="New batch starting from 26th August"
        p1="Avail scholarship of upto 15000/-"
        p2="Available Batch Details :"
        batch1="Weekday Evening"
        batch11=" : 12th August, 08:00 p.m. to 10:00 p.m."
        batch2="Weekend Morning"
        batch22=" : 21st August, 08.30 a.m. to 12.00 p.m."
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
