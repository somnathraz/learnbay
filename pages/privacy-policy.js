import React from 'react'
import Head from 'next/head'
import Privacy from "../components/privacy/privacy";
import Navbar from "../components/Navbar/Navbar";

function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay's Privacy Policy</title>
        <meta name="description" content="Learnbay's Privacy Policy" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

      <Privacy />
      </main>
    </div>
  )
}

export default privacy
