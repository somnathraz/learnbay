import React from 'react'
import Head from 'next/head'
import Refund from "../Components/refund/refund";


function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Refund />
      </main>
    </div>
  )
}

export default refund