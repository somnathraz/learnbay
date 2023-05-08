import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CourseThankYou from "../components/Course/ThankYouNew";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Thank you!" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/Thank-you" />
      </Head>
      <Navbar popup={true} dataScience={true} radio={true}/>
      <section className={styles.mains}>
        <div className={styles.backThank}>
          <h4>
            <span>Thank you!</span>
            <br />
            Your request has been received.
We will get in touch with you soon.
          </h4>
          <div className={styles.FormThank}>
            <h4>You're one step closer to speaking with a Career Counsellor</h4>
            <Form formThank={true} workExperience={true} jobDescription={true} dataScience={true}/>
          </div>
        </div>
      </section>
        <CourseThankYou />
               
        <OfferPopup offer={false} />                      
      <Footer />
    </div>
  );
};

export default ThankYou;
