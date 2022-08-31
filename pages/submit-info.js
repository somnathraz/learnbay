import React from "react";
import Form from "../components/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";import Image from "next/image";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Apply For Counselling</title>
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} />
      <div className={styles.Wrapper}>
      <div className={styles.left}>
        <h6>Apply For Counselling</h6>
        <Form radio={true} />
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

export default sumbit;
