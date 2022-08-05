import React from 'react'
import Head from 'next/head'
import ContactUs from "../components/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <ContactUs />
      </main>
    </div>
  )
}

export default contactus
