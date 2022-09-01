import React from "react";
import styles from "../../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/Thank-You-event" />
      </Head>
      <Navbar event={true}  />
      <section className={styles.mains} style={{height:"100vh", background:"#F3FCFE"}}>
        <div className={styles.Back}>
          <h4>
            <b>Thank you</b>
            <br />
            We have shared the program details with you over an email. Have a
            great day !
          </h4>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/thank-header.png"
              width="522"
              height="380"
              layout="intrinsic"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;

