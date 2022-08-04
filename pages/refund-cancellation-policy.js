import React from 'react'
import Head from 'next/head'
import Refund from "../components/refund/refund";


function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay's Refund & Cancellation Policy</title>
        <meta name="description" content="Learnbay's Refund & Cancellation Policy" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Refund />
      </main>
    </div>
  )
}

export default refund