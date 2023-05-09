import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "./ThirdSection.module.css";
import { FaArrowCircleRight, FaArrowRight, FaDownload } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbCurrencyRupee } from "react-icons/tb";

function ThirdSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.RightSide}>
          <div className={styles.RightBoxs}>
            <div className={styles.BoxesDiv}>
              <IoRocketOutline className={styles.OrangeIcon} />
              <div>
                <p>
                  <b>350%</b>
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
        <div className={styles.upLine}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Straight-Line.png"
            width={4}
            height={440}
          />
        </div>
        <div className={styles.headCont}>
          <h4>Expected Placements</h4>
          <p>
          Our program paves the way for exceptional placements at cutting-edge technology companies
          </p>
        </div>
      </section>
      <div className={styles.cont1}>
        <h4 className={styles.head}>Profile Analysis</h4>
        <p>
        Select the perfect industry-program that aligns with your career goals and aspirations
        </p>
      </div>
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
          <div className={styles.btnWrapper}>
            <a href=""  target="_blank">
              <button>View Details <FaArrowRight className="bIcon" style={{ color: "#fff" }} /></button>
            </a>
            <a href=""  target="_blank">
              <button className="outLineBtn">
                Brochure
                <FaDownload className="bIcon" style={{ color: "#2979AD" }} />
              </button>
            </a>
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
          <div className={styles.btnWrapper}>
            <a href=""  target="_blank">
              <button>View Details <FaArrowRight className="bIcon" style={{ color: "#fff" }} /></button>
            </a>
            <a href=""  target="_blank">
              <button className="outLineBtn">
                Brochure
                <FaDownload className="bIcon" style={{ color: "#2979AD" }} />
              </button>
            </a>
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
          <div className={styles.btnWrapper}>
            <a href=""  target="_blank">
              <button>View Details <FaArrowRight className="bIcon" style={{ color: "#fff" }} /></button>
            </a>
            <a href=""  target="_blank">
              <button className="outLineBtn">
                Brochure
                <FaDownload className="bIcon" style={{ color: "#2979AD" }} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <section className={styles.botSection}>
        <div>
          <button className={styles.Btn}>Know More</button>
        </div>
        {/* <div className={styles.botCont}>
          <FaArrowCircleRight className={styles.arroow} />
          <p>
            Hereby, as a career counsellor I assure you guaranteed transition
            with the above guided roadmap.
          </p>
        </div> */}
      </section>
    </>
  );
}

export default ThirdSection;
