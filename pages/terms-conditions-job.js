import React from 'react'
import Head from 'next/head'
import Terms from "../components/termsJob/termsJob";


function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay's Terms & Conditions</title>
        <meta name="description" content="Learnbay's Terms & Conditions" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Terms />
      </main>
    </div>
  )
}

export default terms