import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FirstSection from "../components/CareerReport/FirstSection/FirstSection";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import SecondSection from "../components/CareerReport/SecondSection/SecondSection";
import ThirdSection from "../components/CareerReport/ThirdSection/ThirdSection";

function careerReport() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Learnbay</title>
        <meta name="robots" content="index, follow"/>
        <meta
          name="description"
          content="data science courses with IBM certification. Learnbay is advanced data science course training institute. Enrol in our data science course to enhance your career"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/learning-learnbay"
        />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar popup={true} dataScience={true} radio={true} />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <OfferPopup offer={false} />
      <Footer />
    </div>
  );
}

export default careerReport;
