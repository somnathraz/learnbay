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
        title="New batch starting for job guarantee on 26th August, timing 08.00 Pm to 10.00 Pm (Available for First 40 student) T&C"
        p1="Avail the Scholarship up to 15000/- on All IBM Courses"
        p2="Available Batch Details :"
        batch1="Weekday Evening : 12th August,08:00 PM to 10:00 PM"
        batch2="Weekend Morning : 21st August,08.30 am to 12.00 PM"
      />
      <BottomBar />
    </>
  );
}

export default MyApp;
