import React from "react";
import Image from "next/image";
import styles from "./GrowthStats.module.css";
import { BsCheck } from "react-icons/bs";

const GrowthStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          height="241"
          width="500"
          layout="intrinsic"
        />
      </div>
      <div className={styles.rightContent}>
        <h4>Lorem Ipsum some text missing Lorem Ipsum some text missing..</h4>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/line-break.webp"
          height={"3"}
          width={"190"}
          layout="intrinsic"
        />
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>Stat point 1 here lorem ipsum doret text </p>
        </div>
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>Stat point 1 here lorem ipsum doret text </p>
        </div>
        <div className={styles.checkpoint}>
          <BsCheck className={styles.check} />
          <p>Stat point 1 here lorem ipsum doret text </p>
        </div>
      </div>
    </div>
  );
};

export default GrowthStats;
