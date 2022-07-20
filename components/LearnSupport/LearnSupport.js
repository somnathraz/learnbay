import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import styles from "./LearnSupport.module.css";

function LearnSupport() {
  return (
    <>
      <h4>24/7 Learner’s Support</h4>
      <div className={styles.LearnSupport}>
        <div className={styles.learnInner}></div>
        <div className={styles.learnInnerR}></div>
      </div>
    </>
  );
}

export default LearnSupport;
