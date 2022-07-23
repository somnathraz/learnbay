import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./switch.module.css";
import Image from "next/image";

function Switch() {
  return (
    <section className={styles.head}>
      <h4>Top Sites That Ranked Us</h4>
      <div className={styles.switch}>
        <div className={styles.switchInner}>
          <img
            src="/course-report.webp"
            width="180"
            height="94"
            className={styles.img}
          />
        </div>
        <Image
          src="/vertical-line.svg"
          width="4"
          height="90"
          layout="intrinsic"
        />
        <div className={styles.switchInner}>
          <img
            src="/switch-UP.webp"
            width="256"
            height="125"
            className={styles.img}
          />
        </div>
        <Image
          src="/vertical-line.svg"
          width="4"
          height="90"
          layout="intrinsic"
        />
        <div className={styles.switchInner}>
          <img
            src="/Google-review.webp"
            width="206"
            height="121"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}

export default Switch;
