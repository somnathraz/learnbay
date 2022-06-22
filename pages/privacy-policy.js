import React from 'react'
import Head from 'next/head'
import Privacy from "../Components/privacy/privacy";


function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Privacy />
      </main>
    </div>
  )
}

export default privacy
