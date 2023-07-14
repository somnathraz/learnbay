import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import ContactUs from "../components/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Learnbay - Contact Us</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Contact Learnbay for questions, support, and information about our master's programs and courses. To start your career, get in touch with our experts now."
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/contact-us" />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true}/>
        <ContactUs />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}

export default contactus;
