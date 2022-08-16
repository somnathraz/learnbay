import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
      </Head>
      <Navbar popup={true} />
      <section className={styles.mains}>
        <div className={styles.left}>
          <h4 className={styles.hptop}>
            <b>Thank you!</b>
            <br />
          </h4>
          <p className={styles.Ptop}>
          We Received your request and look forward to getting in touch soon.
          </p>
          <div>
            <div className={styles.mainb}>
              <div>
                <button className={styles.Button}>
                  <BsArrowLeftShort className="bIcons" />
                  <a href="/">Go To Home</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification | Domain Specialisation For Professionals
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advanceds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Advance AI & ML Certification | Become AI Expert In Product based MNCs
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" /> 
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification Program For Managers and Leaders
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/guarantee.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Job Guarantee or Money Back | Data Science & AI Certification Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
        </div>
      </section>
      <div className={styles.rights}>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/full-stack-web.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Full Stack Web  <br />Development Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/full-stack-Software.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Full-Stack Software <br />Development Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" /> 
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
        </div>
    </div>
  );
};

export default ThankYou;
