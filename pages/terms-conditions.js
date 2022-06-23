import React from 'react'
import Head from 'next/head'
import Terms from "../Components/terms/terms";


function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Terms />
      </main>
    </div>
  )
}

export default terms