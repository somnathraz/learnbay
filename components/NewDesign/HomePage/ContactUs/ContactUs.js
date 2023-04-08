import React from "react";
import styles from "./ContactUs.module.css";
import { AiOutlineRise } from "react-icons/ai";
import {BiBriefcaseAlt2} from "react-icons/bi"
import FormInline from "../../../FormSection/FormInline";

function ContactUs({dataScience}) {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.LeftSide}>
        <h2 className={styles.h1}>
          Start your <br />
          UPSKILLING JOURNEY
          <br />
          with
        </h2>
        <h2 className={styles.h1}>
          <span className={styles.h1Span}>India’s #1 tech courses</span>
        </h2>
        <div className={styles.boxSection}>
          <div className={styles.box}>
            <p className={styles.icon}>
              <AiOutlineRise />
            </p>
            <p className={styles.BoldP}>450%</p>
            <p className={styles.NormalP}>Highest salary hike</p>
          </div>
          <div className={styles.box}>
            <p className={styles.icon}>
              <BiBriefcaseAlt2 />
            </p>
            <p className={styles.BoldP}>9873</p>
            <p className={styles.NormalP}>Students placed</p>
          </div>
        </div>
      </div>
      <div className={styles.RightSide}>
      <p className={styles.NormalPForm}>Apply for Career Counselling</p>
      <FormInline   dataScience={dataScience} radio={true} />
      </div>
    </section>
  );
}

export default ContactUs;
