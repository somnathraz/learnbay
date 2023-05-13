import React from "react";
import styles from "./FirstHeader.module.css";
import Head from "next/head";
import Navbar from "../../Navbar/Navbar";
import { PopupButton } from "@typeform/embed-react";
import { AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";

const FirstHeader = ({ donwnload, brochureLink }) => {
  console.log(brochureLink);
  return (
    <>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/Thank-you" />
      </Head>
      <Navbar popup={true} dataScience={true} radio={true} />
      <div className={styles.headerWrap}>
        <p>
          <b>Maximize</b> Your Career Opportunities with
          <br />
          Premium Guidance from Industry Expert's
        </p>
        <h1>
          at <span className={styles.cutText}>Rs. 2999/-</span>{" "}
          <span className={styles.greenText}>FREE</span>
        </h1>
        <div className={styles.btnFlex}>
          <PopupButton
            id="nRGJaEAF"
            style={{ fontSize: 20 }}
            className="my-button"
          >
            Know More
          </PopupButton>
          {donwnload ? (
            <a href={brochureLink}>
              <button className={styles.btnDownload}>Download Brochure</button>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
