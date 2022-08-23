import React from 'react'
import Head from 'next/head'
import Terms from "../components/termsJob/termsJob";
import Navbar from "../components/Navbar/Navbar";


function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay's Terms & Conditions</title>
        <meta name="description" content="Learnbay's Terms & Conditions" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Navbar popup={true} />
      <Terms />
      </main>
    </div>
  )
}

export default terms