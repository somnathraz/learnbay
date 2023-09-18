import React from "react";
import styles from "../styles/quiz.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Quiz</title>
        <meta
          name="description"
          content="Learnbay - Quiz"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/quiz" />
      </Head>
      <Navbar popup={true} radio={true} />
      <div className={styles.Wrapper}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4EG9bIqv7Rf8kpoVOwzI2BC0M1wMTXIvfX-ePtd-iuO3ceQ/viewform?embedded=true" width="100%" height="752" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <Footer />
    </div>
  );
};

export default sumbit;
