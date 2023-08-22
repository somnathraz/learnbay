import React from "react";
import styles from "./ContactUs.module.css";
import { AiOutlineRise } from "react-icons/ai";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import FormInline from "../../../FormSection/FormInline";

function ContactUs({ dataScience, dataScienceCounselling, dataScienceGeneric }) {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.LeftSide}>
        <h2 className={styles.h1}>
          Looking to upskill? <br />
        </h2>
        <h2 className={styles.h1}>
          <span className={styles.h1Span}>Start with India's #1</span>
          <br />
          <span className={styles.h1Span}>professional courses</span>
        </h2>
        <div className={styles.boxSection}>
          <div className={styles.box}>
            {/* <p className={styles.icon}>
              <AiOutlineRise />
            </p> */}
            <p className={styles.BoldP}>9k+</p>
            <p className={styles.NormalP}>Successful transition</p>
          </div>
          <div className={styles.box}>
            {/* <p className={styles.icon}>
              <BiBriefcaseAlt2 />
            </p> */}
            <p className={styles.BoldP}>30k+ </p>
            <p className={styles.NormalP}>Trusted learners</p>
          </div>
        </div>
      </div>
      <div className={styles.RightSide}>
        <p className={styles.NormalPForm}>
          Apply for Career <span className={styles.span}>Counselling</span>
        </p>
        <FormInline
          dataScience={dataScience}
          dataScienceGeneric={dataScienceGeneric}
          dataScienceCounselling={dataScienceCounselling}
          radio={true}
        />
      </div>
    </section>
  );
}

export default ContactUs;
