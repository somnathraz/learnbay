import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "./ThirdSection.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

function ThirdSection() {
  return (
    <>
    <section className={styles.section}>
      <div className={styles.headCont}>
        <h4>Expected Placements</h4>
        <p>
          We have analyzed your profile and as per industry trend we suggest you
          following programs
        </p>
      </div>
      <div className={styles.upLine}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Straight-Line.png"
          width={4}
          height={440}
        />
      </div>
      <div className={styles.RightSide}>
        <div className={styles.RightBoxs}>
          <div className={styles.BoxesDiv}>
            <IoRocketOutline className={styles.OrangeIcon} />
            <div>
              <p>
                <b>35% - 160%</b>
              </p>
              <p>Expected Salary Hike</p>
            </div>
          </div>
          <div className={styles.BoxesDiv}>
            <IoRocketOutline className={styles.BlueIcon} />
            <div>
              <p>
                <b>Expected Timeline</b>
              </p>
              <p>9 -12 Months</p>
            </div>
          </div>
        </div>
        <div className={styles.BoxOrange}>
          <p>
            <b>Targeted Job Roles:</b>
          </p>
          <div className={styles.OrangeboxDiv}>
            <div className={styles.iconFlex}>
              <IoRocketOutline className={styles.greyIcon} />
              <p>Data Scientist</p>
            </div>
            <div className={styles.iconFlex}>
              <IoRocketOutline className={styles.greyIcon} />
              <p>ML Engineer</p>
            </div>
            <div className={styles.iconFlex}>
              <IoRocketOutline className={styles.greyIcon} />
              <p>BI Developer</p>
            </div>
            <div className={styles.iconFlex}>
              <IoRocketOutline className={styles.greyIcon} />
              <p>Data Science Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.botSection}>
      <div>
      <button className={styles.Btn}>
              Know More
            </button>
      </div>
      <div className={styles.botCont}>
        <FaArrowCircleRight className={styles.arroow}/>
        <p>Hereby, as a career counsellor I assure you guaranteed transition with the above guided roadmap.</p>
      </div>
    </section>
    </>
  );
}

export default ThirdSection;
