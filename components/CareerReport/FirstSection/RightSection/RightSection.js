import React from "react";
import styles from "./RightSection.module.css";

import Image from "next/image";

function RightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.cont2}>
            <h4 className={styles.head}>Learning Phase</h4>
            <p>We have analyzed your profile and as per industry trend we suggest you following programs</p>
        </div>
      <div className={styles.SecondSection}>
        <div className={styles.logos}>
          <p className={styles.pBlue}>Essentials Tools</p>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Essential-Tools.png"
            width={500}
            height={90}
            className={styles.LeftWrapImg}
          />
        </div>
        <hr></hr>
        <div className={styles.logosD}>
          <p className={styles.pBlue}>Advanced Tools</p>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Advanced-Tools.png"
            width={500}
            height={90}
            className={styles.LeftWrapImg}
          />
        </div>
      </div>
      <div className={styles.cont}>
        <h4 className={styles.head}>Domain Training</h4>
        <p>
          We have analyzed your profile and as per industry trend we suggest you
          following programs
        </p>
      </div>
    </section>
  );
}

export default RightSection;
