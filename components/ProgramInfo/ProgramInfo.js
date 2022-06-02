import styles from "./ProgramInfo.module.css";
import React from "react";

const ProgramInfo = ({ BatchDate, BatchDuration, Placement, EMI }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Eligibility</p>
          <h5>{BatchDate}</h5>
        </div>
        <div className={styles.middle}>
          <p>Certification</p>
          <h5>{BatchDuration}</h5>
        </div>
        <div className={styles.right}>
          <p>Projects</p>
          <h5>{Placement}</h5>
        </div>
        <div className={styles.rightr}>
          <p>No Cost EMI</p>
          <h5>{EMI}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
