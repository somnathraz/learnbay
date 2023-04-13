import React from "react";
import Image from "next/image";
import styles from "./GrowthStats.module.css";
import { BsCheck } from "react-icons/bs";

const GrowthStats = ({img1, heading, para1, para2, para3}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={img1}
          height="241"
          width="500"
          layout="intrinsic"
        />
      </div>
      <div className={styles.rightContent}>
        <h4>{heading}</h4>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/line-break.webp"
          height={"3"}
          width={"190"}
          layout="intrinsic"
        />
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>{para1}</p>
        </div>
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>{para2}</p>
        </div>
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>{para3}</p>
        </div>
      </div>
    </div>
  );
};

export default GrowthStats;
