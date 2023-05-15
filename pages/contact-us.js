import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import ContactUs from "../components/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Contact us - Learnbay</title>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Learnbay is an online bootcamp and one of the leading certification training providers. We are providing training and coaching that helps working professionals to achieve their career goals." />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/contact-us" />
      </Head>
      <main>  <Navbar popup={true} dataScienceCounselling={true} />

        <ContactUs />
        <OfferPopup offer={false} />                      
         
        <Footer />
      </main>
    </div>
  )
}

export default contactus
