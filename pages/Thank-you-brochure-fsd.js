import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="robots" content="index, follow"/>
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/Thank-you-brochure-fsd"
        />
        <meta name="description" content="Thank you!" />
      </Head>
      <Navbar popup={true} fullStack={true} radio={true} />
      <section className={styles.mains}>
        <div className={styles.Back}>
          <h4>
            Thank you!
            <br />
            We Received your request and look forward to getting in touch soon.
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
      <section className={styles.mains} style={{ marginBottom: "50px" }}>
        <div className={styles.right}>
          {/* <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-web-development.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Full-Stack Web <br />
              Development Program
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
              target="_blank"
            >
              <button className={styles.Button}>
                <FaDownload className="bIcons" />
                Download Brochure
              </button>
            </a>
          </div> */}
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-developer-course.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Full-Stack Software <br />
              Development Program
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              target="_blank"
            >
              <button className={styles.Button}>
                <FaDownload className="bIcons" />
                Download Brochure
              </button>
            </a>
          </div>
          <div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/dsa%26system.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="434"
                height="273"
              />
              <p className={styles.Ptopp}>
                Data Structures Algorithms <br />
                And System Design
              </p>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
                target="_blank"
              >
                <button className={styles.Button}>
                  <FaDownload className="bIcons" />
                  Download Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <OfferPopup offer={true} />
      <Footer />
    </div>
  );
};

export default ThankYou;
