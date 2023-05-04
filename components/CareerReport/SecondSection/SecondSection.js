import React from "react";
import styles from "./SecondSection.module.css";
import Image from "next/image";
import { IoRocketOutline } from "react-icons/io5";

function SecondSection() {
  return (
    <section className={styles.Section}>
      <div className={styles.ProjectFlex}>
        <div className={styles.box}>
          <div className={styles.GreyBg}>
            <p className={styles.pGrey}>Domain : Sales</p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/bmw.png"
              width={50}
              height={50}
              className={styles.LeftWrapImg}
            />
          </div>
          <p className={styles.cont}>
            Forecasting future sales with trends and price maximization
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.GreyBg}>
            <p className={styles.pGrey}>Domain : Sales</p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/Hubble.png"
              width={50}
              height={50}
              className={styles.LeftWrapImg}
            />
          </div>
          <p className={styles.cont}>
            Forecasting future sales with trends and price maximization
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.GreyBg}>
            <p className={styles.pGrey}>Domain : Sales</p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/swiggy.png"
              width={120}
              height={50}
              className={styles.LeftWrapImg}
            />
          </div>
          <p className={styles.cont}>
            Forecasting future sales with trends and price maximization
          </p>
        </div>
      </div>
      <div className={styles.projecth4}>
        <h4>Real-time Industrial Projects</h4>
      </div>
      <div className={styles.upLine}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/up-line.png"
          width={540}
          height={439}
        />
      </div>
      <div className={styles.contFlex}>
        <div className={styles.headCont}>
          <div className={styles.contMain}>
          <h4>Job-Assistance Program</h4>
          <p>
            We have analyzed your profile and as per industry trend we suggest
            you following programs
          </p>
          </div>
          <div className={styles.botLine}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bot-line.png"
              width={539}
              height={550}
              className={styles.LeftWrapImg}
            />
          </div>
        </div>
        <div className={styles.boxSmall}>
          <div className={styles.boxGrey}>
            <IoRocketOutline className={styles.greyIcon} />
            <p>Resume Building</p>
          </div>
          <div className={styles.boxGrey}>
            <IoRocketOutline className={styles.greyIcon} />

            <p>1:1 Mock Interview</p>
          </div>
          <div className={styles.boxGrey}>
            <IoRocketOutline className={styles.greyIcon} />
            <p>Unlimited Interview Calls</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
