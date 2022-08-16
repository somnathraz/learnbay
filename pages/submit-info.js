import React from "react";
import Form from "../components/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Head from "next/head";

const sumbit = () => {
  return (
    <div className={styles.Wrapper}>
      <Head>
        <title>Apply For Counselling</title>
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <Navbar popup={true} />
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
  );
};

export default sumbit;
