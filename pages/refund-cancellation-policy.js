import React from 'react'
import Head from 'next/head'
import Refund from "../components/refund/refund";
import Navbar from "../components/Navbar/Navbar";


function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay's Refund & Cancellation Policy</title>
        <meta name="description" content="Learnbay's Refund & Cancellation Policy" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

      <Refund />
      </main>
    </div>
  )
}

export default refund