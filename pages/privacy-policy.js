import React from 'react'
import Head from 'next/head'
import Privacy from "../components/privacy/privacy";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay's Privacy Policy</title>
        <meta name="description" content="Learnbay's Privacy Policy" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/privacy-policy" />
      </Head>
      <main>  <Navbar popup={true} />

      <Privacy />
      <Footer />
      </main>
    </div>
  )
}

export default privacy
