import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CareerHome from "../components/CareerPortal/CareerHome/CareerHome";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Career Portal</title>
        <meta
          name="description"
          content="Learnbay offers a comprehensive job portal with a variety of career opportunities. With us, you can find your ideal job and advance your career."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/career-portal" />
      </Head>
      <Navbar event={true} eventO={true} />
      <CareerHome />
      <BottomBar />
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default sumbit;
