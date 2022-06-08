import styles from "./ProgramInfo.module.css";
import React from "react";

const ProgramInfo = ({ p1, p2, p3, p4, p11, p22, p33, p44 }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>{p1}</p>
          <h5>{p11}</h5>
        </div>
        <div className={styles.middle}>
          <p>{p2}</p>
          <h5>{p22}</h5>
        </div>
        <div className={styles.right}>
          <p>{p3}</p>
          <h5>{p33}</h5>
        </div>
        <div className={styles.rightr}>
          <p>{p4}</p>
          <h5>{p44}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
