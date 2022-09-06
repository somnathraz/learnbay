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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/Thank-you-brochure" />
        <meta name="description" content="Thank you!" />
      </Head>
      <Navbar popup={true} dataScience={true}/>
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
        <div className={styles.right}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-science-ai-program.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Data Science
              <br />
              Foundation Program
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf"
              target="_blank"
            >
              <button className={styles.Button}>
                <FaDownload className="bIcons" />
                Download Brochure
              </button>
            </a>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Advanced Data Science
              <br />& AI Program
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
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
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance -ai-ml-for-tech-professionals.webp"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="434"
                height="273"
              />
              <p className={styles.Ptopp}>
                Advance AI & ML Program
                <br />
                for Tech Professionals
              </p>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
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
      <section className={styles.mains}>
        <div className={styles.right}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-science-ai-for-managers.webp"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Data Science & AI <br />
              For Managers
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
              target="_blank"
            >
              <button className={styles.Button}>
                <FaDownload className="bIcons" />
                Download Brochure
              </button>
            </a>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-science-ai-with-job-guarantee.webp"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="434"
              height="273"
            />
            <p className={styles.Ptopp}>
              Data Science & AI <br />
              with Job Guarantee Program
            </p>
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf"
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
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/dsa&system.webp"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="434"
                height="273"
              />
              <p className={styles.Ptopp}>
                Data Analytics <br />
                Program
              </p>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
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
      <section className={styles.mains} style={{ marginBottom: "50px" }}>
        <div className={styles.right}>
          <div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/business-analytics.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="434"
                height="273"
              />
              <p className={styles.Ptopp}>
                Business Analytics <br />
                Program
              </p>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
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
       
        <OfferPopup offer={false} />                      
      <Footer />
    </div>
  );
};

export default ThankYou;
