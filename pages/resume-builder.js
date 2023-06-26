import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/FooterLinkRemoved";
import FirstSection from "../components/ResumeBuilder/FirstSection/FirstSection";
import ThirdSection from "../components/ResumeBuilder/ThirdSection/ThirdSection";

const ResumeBuilder = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
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
      <Navbar popup={true} dataScienceCounselling={true} radio={true} eventLink={true}/>
      <FirstSection />
      <ThirdSection idss="O7xTI5Motbk" />
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
