import React from 'react'
import Head from 'next/head'
import Terms from "../components/termsJob/termsJob";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Footer from "../components/Footer/Footer";

function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay's Terms & Conditions</title>
        <meta name="description" content="Learnbay's Terms & Conditions" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions-job" />
      </Head>
      <main>
      <Navbar popup={true} dataScience={true} radio={true}/>
      <Terms />
       
        <OfferPopup offer={false} />                      
      <Footer />
      </main>
    </div>
  )
}

export default terms