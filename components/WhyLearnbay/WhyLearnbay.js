import React from "react";
import styles from "./WhyLearnbay.module.css";
import { GoCheck } from "react-icons/go";

const WhyLearnbay = () => {
  return (
    <div className={styles.why}>
      <h6>Why Learnbay</h6>
      <div className={styles.feature}>
        <p>
          <GoCheck className={styles.tick} />
          Designed for working professionals
        </p>
        <p>
          <GoCheck className={styles.tick} />
          Industry-targeted syllabus
        </p>
      </div>
    </div>
  );
};

export default WhyLearnbay;
