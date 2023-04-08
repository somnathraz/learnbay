import React from "react";
import styles from "./CoreFeature.module.css";
import { FaDownload, FaCheck } from "react-icons/fa";
import Image from "next/image";
import {FiClock} from "react-icons/fi"

function CoreFeature() {
  return (
    <section className={styles.coreSection}>
      <div className={styles.LeftSide}>
        <div className={styles.tablet}>
            <div className={styles.tabletDiv}>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Core-features-tablet.png"
              width="250"
              height="180"
              layout="intrinsic"
              alt="Learnbay"
            />
        </div>
        <div className={styles.content}>
            <p className={styles.pSmall}>1:1 Personal Mentorship & Daily Doubt Sessions</p>
            <p className={styles.boldIcon} style={{marginTop:"10px"}}>3 Years<FiClock /></p>
            <p className={styles.pSmall}>Flexible support</p>
        </div>
        </div>

        <div className={styles.girl}>
            <div><Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Core-feature-girl-image.png"
              width="280"
              height="395"
              layout="intrinsic"
              alt="Learnbay"
            />
            </div>
            <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/core-features-Arrow.png"
              width="180"
              height="170"
              layout="intrinsic"
              alt="Learnbay"
            /></div></div>
        <div>
            <p className={styles.BottomP}>Learn with India’s #1 tech courses</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.h1}>Our Core Features</h2>
        <div className={styles.box}><FaCheck style={{ marginLeft: "10px" }}/>
          We help you build a strong profile and prepare for MNC interviews.{" "}
        </div>
        <div className={styles.box}><FaCheck style={{ marginLeft: "10px" }}/>
          We help you build a strong profile and prepare for MNC interviews.{" "}
        </div>
        <div className={styles.box}><FaCheck style={{ marginLeft: "10px" }}/>
          We help you build a strong profile and prepare for MNC interviews.{" "}
        </div>
        <button className={styles.btn}>
          Download Placement Report{" "}
          <FaDownload style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </section>
  );
}

export default CoreFeature;
