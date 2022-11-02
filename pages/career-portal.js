import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CareerHome from "../components/CareerPortal/CareerHome/CareerHome";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay's Career Portal</title>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/career-portal" />
      </Head>
      <Navbar />
      <CareerHome />
      <Footer />
    </div>
  );
};

export default sumbit;
