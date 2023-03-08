import React from "react";
import Form from "../components/CareerPortal/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Head from "next/head";

const applyNow = () => {
  return (
    <div>
      <Head>
        <title>Apply Now</title>
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} careerForm={true}/>
      <div className={styles.Wrapper}>
      <div className={styles.left}>
        <h6>Get a Better Future with Us</h6>
        <Form />
      </div>
      <div className={styles.right}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Submit-info.png"
          width="441"
          height="600"
          layout="intrinsic"
        />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default applyNow;
