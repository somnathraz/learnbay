import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Thank you!" />
      </Head>
      <section className={styles.mains}>
      <div className={styles.Back}>
        <h4>
        Thank you!<br/>We Received your request and look forward to getting in touch soon.</h4>
        <div>
          <Image
            src="/thank-header.png"
            width="522"
            height="380"
            layout="intrinsic"
          />
        </div>
      </div>
        <div className={styles.right}>
          <div>
          <Image
            src="/data-science-ai-program.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science<br />Foundation Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="/advance-data-science-ai-program.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Advanced Data Science<br />& AI Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="/advance -ai-ml-for-tech-professionals.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Advance AI & ML Program<br />for Tech Professionals
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
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
            src="/full-stack-web-development.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Full-Stack Web <br />Development Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="/full-stack-developer-course.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Full-Stack Software <br />Development Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="/dsa&system.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Structures Algorithms <br />And System Design
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
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
            src="/data-science-ai-for-managers.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science & AI <br />For Managers
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <Image
            src="/data-science-ai-with-job-guarantee.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Science & AI <br />with Job Guarantee Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" /> 
                    Download Brochure
                </button>
                </a>
          </div>
          <div>
          <div>
          <Image
            src="/dsa-system.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Data Analytics <br />Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf" target="_blank" >
          <button className={styles.Button}>
                  <FiDownload className="bIcons" />
                    Download Brochure
                </button>
                </a>

          </div>
          </div>
          </div>
        </section>
        <section className={styles.mains} style={{marginBottom:"50px"}}>
        <div className={styles.right}>
          <div>
          <div>
          <Image
            src="/business-analytics.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="434"
            height="273"
          />
          <p className={styles.Ptopp}>
          Business Analytics <br />Program
          </p>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf" target="_blank" ><button className={styles.Button}>
                  <FiDownload className="bIcons" />
                  
                    Download Brochure
                </button>
                </a>

          </div>
          </div>
          </div>
        </section>
    </div>
  );
};

export default ThankYou;
