import React from "react";
import Head from "next/head";
import FirstSectionLearning from "../components/NewDesign/HomePage/FirstSectionLearning/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import KeyFeatures from "../components/NewDesign/HomePage/KeyFeatures/KeyFeatures";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import HomeLine from "../components/NewDesign/HomePage/HomeLine/HomeLine";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";

function learning() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Learnbay</title>
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
      <FirstSectionLearning
        first="Tools"
        second="Tips"
        third="Technology"
        popup={true}
        dataScience={true}
        radio={true}
      />{" "}
      <OfferPopup offer={false} />
      <Footer />
    </div>
  );
}

export default learning;
