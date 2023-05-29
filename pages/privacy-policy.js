import React from "react";
import Head from "next/head";
import Privacy from "../components/privacy/privacy";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OfferPopup from "../components/OfferPopup/OfferPopup";
function privacy() {
  return (
    <div>
      <Head>
        <title>Learnbay - Privacy Policies</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Learn about Learnbay's privacy policies, which ensure the security of your personal information." />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/privacy-policy" />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Privacy />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}

export default privacy;
