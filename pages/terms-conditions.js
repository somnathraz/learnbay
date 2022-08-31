import React from 'react'
import Head from 'next/head'
import Terms from "../components/terms/terms";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay's Terms & Conditions</title>
        <meta name="description" content="Learnbay's Terms & Conditions" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <main>
      <Navbar popup={true} />
      <Terms />
      <Footer />
      </main>
    </div>
  )
}

export default terms