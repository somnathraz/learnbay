import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ContactUs from "../components/ContactUs/ContactUs";

function contactus() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <ContactUs />
      </main>
    </div>
  )
}

export default contactus
