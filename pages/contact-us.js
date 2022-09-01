import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";import ContactUs from "../components/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/contact-us" />
      </Head>
      <main>  <Navbar popup={true} dataScience={true} />

        <ContactUs />
        <Footer />
      </main>
    </div>
  )
}

export default contactus
