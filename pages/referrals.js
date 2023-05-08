import Head from "next/head";
import styles from '../styles/Counseling.module.css';
import { React } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Form from "../components/Form/Form";

function Counselling() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <Navbar event={true} eventO={true}/>
        <div className={styles.formq}>
          <div className={styles.forml}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/popup-back+3.png"
            width="400px"
            height="500px"
            alt="LearnsupportImg"
          />
          </div>

          <div className={styles.formr}>
            <Form referrals={true} workExperience={true} />
          </div>
        </div>
    </div>
  );
}

export default Counselling;
