import React from "react";
import Form from "../components/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Head from "next/head";

const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Counselling Form - Apply</title>
        <meta name="description" content="Submit your information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."/>
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} />
      <div className={styles.Wrapper}>
        <div className={styles.left}>
          <h6>Apply For Counselling</h6>
          <Form dataScienceCounselling={true} radio={true} />
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

      {/* <OfferPopup offer={false} />                       */}
      <Footer />
    </div>
  );
};

export default sumbit;
