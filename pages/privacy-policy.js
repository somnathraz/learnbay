import React from 'react'
import Head from 'next/head'
import Privacy from "../components/privacy/privacy";


function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay's Privacy Policy</title>
        <meta name="description" content="Learnbay's Privacy Policy" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Privacy />
      </main>
    </div>
  )
}

export default privacy
