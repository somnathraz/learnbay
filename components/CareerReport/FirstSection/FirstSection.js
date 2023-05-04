import React from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import styles from "./FirstSection.module.css";
import Image from "next/image";

function FirstSection() {
  return (
    <>
      <h4 className={styles.FirstH4}>Personalized Career Report</h4>
      <div className={styles.firstSection}>
        <LeftSection />
        <div className={styles.upLine}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Straight-Line.png"
            width={4}
            height={1450}
          />
        </div>
        <RightSection />
      </div>
    </>
  );
}

export default FirstSection;
