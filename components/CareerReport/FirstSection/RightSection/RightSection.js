import React from "react";
import styles from "./RightSection.module.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbCurrencyRupee } from "react-icons/tb";
import Image from "next/image";
import {IoRocketOutline} from "react-icons/io5"

function RightSection() {
  return (
    <section className={styles.section}>
      <div className={styles.firstSection}>
        <div className={styles.box}>
          <div className={styles.bg}>
            <p className={styles.pBlue}>Data Science & AI Master Program</p>
          </div>
          <div className={styles.boxInneer}>
            <p className={styles.pCont}>
              <BiTimeFive className={styles.checkCircle} />
              500 + hours content | 13-15 months
            </p>
            <p className={styles.pCont}>
              <AiOutlineFundProjectionScreen
                className={styles.checkCircle}
                style={{ color: "#edb552" }}
              />
              12 Advance + 4 Capstone
            </p>
            <p className={styles.pCont}>
              <TbCurrencyRupee className={styles.checkCircle} />
              Course Fee : ₹ 1,29,000 | No cost EMI
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.bg}>
            <p className={styles.pBlue}>Data Science & AI Master Program</p>
          </div>
          <div className={styles.boxInneer}>
            <p className={styles.pCont}>
          <BiTimeFive className={styles.checkCircle} />
              500 + hours content | 13-15 months
            </p>
            <p className={styles.pCont}>
              <AiOutlineFundProjectionScreen
                className={styles.checkCircle}
                style={{ color: "#edb552" }}
              />
              12 Advance + 4 Capstone
            </p>
            <p className={styles.pCont}>
              <TbCurrencyRupee className={styles.checkCircle} />
              Course Fee : ₹ 1,29,000 | No cost EMI
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.bg}>
            <p className={styles.pBlue}>Data Science & AI Master Program</p>
          </div>
          <div className={styles.boxInneer}>
            <p className={styles.pCont}>
              <BiTimeFive className={styles.checkCircle} />
              500 + hours content | 13-15 months
            </p>
            <p className={styles.pCont}>
              <AiOutlineFundProjectionScreen
                className={styles.checkCircle}
                style={{ color: "#edb552" }}
              />
              12 Advance + 4 Capstone
            </p>
            <p className={styles.pCont}>
              <TbCurrencyRupee className={styles.checkCircle} />
              Course Fee : ₹ 1,29,000 | No cost EMI
            </p>
          </div>
        </div>
      </div>
      <div className={styles.SecondSection}>
        <div className={styles.logos}>
          <p className={styles.pBlue}>Essentials Tools</p>
          <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Essential-Tools.png"
                width={500}
                height={100}
                className={styles.LeftWrapImg}
              />
        </div>
        <hr></hr>
        <div className={styles.logosD}>
          <p className={styles.pBlue}>Advanced Tools</p>
          <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Advanced-Tools.png"
                width={500}
                height={100}
                className={styles.LeftWrapImg}
              />
        </div>
      </div>
      <div>
        <p className={styles.pBlue}>Sales, Marketing & HR</p>
        <div className={styles.greyflex}>
        <div className={styles.boxesGrey}>
        <IoRocketOutline className={styles.greyIcon} />
          <p className={styles.GreyP}>12 - 20 Realtime Industrial Projects</p>
        </div>
        <div className={styles.boxesGrey}>
        <IoRocketOutline className={styles.greyIcon} />
          <p className={styles.GreyP}>2 - 4 Capstone Projetcs</p>
        </div>
        <div className={styles.boxesGrey}>
        <IoRocketOutline className={styles.greyIcon} />
          <p className={styles.GreyP}>A-Grade Resume</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
