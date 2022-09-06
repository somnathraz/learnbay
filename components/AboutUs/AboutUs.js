import React from "react";
import CountUp from "react-countup";
import styles from "./AboutUs.module.css";
import {
  FaUserFriends,
  FaCompress,
  FaAddressCard,
  FaClone,
  FaHandsHelping,
  FaUserGraduate,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <h4 style={{ textAlign: "left" }}>
          "They say <span>'knowledge is power',</span> and we want to empower
          all our aspirants to success."
        </h4>
        <div className={styles.right}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/about-us.png"
            width="522"
            height="380"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
      </div>
      <div className={styles.MVDiv}>
        <div className={styles.FirstDiv}>
          <div className={styles.FirstImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/mission.png"
              width="517"
              height="380"
              layout="intrinsic"
             alt="data science course in bangalore"
            />
          </div>
          <div className={styles.FirstText}>
            <h3>Mission</h3>
            <p className={styles.list}>
              Safeguarding your career, even under the most unstable job market
              scenario, via the acquisition of emerging technology-based unique
              skills.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <FaUserFriends className={styles.BoxIconuser}  alt="data science course in bangalore" />
                <p> Literate everyone with data science knowledge.</p>
              </div>
              <div className={styles.iconBox}>
                <FaCompress className={styles.BoxIconcompress}  alt="data science course in bangalore" />
                <p>
                  Bust the myth that only IT pros can have lucrative careers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MiddleDiv}>
          <div className={styles.FirstText}>
            <h3>Vision</h3>
            <p className={styles.list}>
              To lead the industrial training sector by generating demanding
              professionals with future proof technical skills and knowledge.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <FaAddressCard className={styles.BoxIconcard} alt="Learnbay data science course" />
                <p>Provide scopes to techies & non-techies all alike.</p>
              </div>
              <div className={styles.iconBox}>
                <FaClone className={styles.BoxIconclone} />
                <p>Ensure an extremely personalized learning experience.</p>
              </div>
            </div>
          </div>
          <div className={styles.MiddleImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vision.png"
              width="517"
              height="330"
              layout="intrinsic"
            alt="data science course"
            />
          </div>
        </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
          <h3>Placement Highlights</h3>
          <div className={styles.iconBoxP}>
            <div className={styles.iconBoxInner}>
              <BsGraphUp className={styles.BoxIcon} />
              <div>
                <CountUp
                  end={250}
                  delay={2}
                  duration={2}
                  suffix="%"
                  className={[styles.textStyle]}
                />
                <p className={styles.list}>Highest Salary Hike</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaAngleDoubleUp className={styles.BoxIcon} />
              <div>
                <CountUp
                  end={97}
                  delay={2}
                  duration={2}
                  suffix="%"
                  className={[styles.textStyle]}
                />
                <p className={styles.list}>Average Salary Hike</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaHandsHelping className={styles.BoxIcon}  alt="data science course in bangalore" />
              <div>
                <CountUp
                  end={250}
                  delay={2}
                  duration={2}
                  suffix="+"
                  className={[styles.textStyle]}
                />
                <p className={styles.list}>Hiring Partners</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaUserGraduate className={styles.BoxIcon}  alt="data science course in bangalore" />
              <div className={styles.CountBox}>
                <CountUp
                  end={10000}
                  delay={2}
                  duration={2}
                  suffix="+"
                  className={[styles.textStyle]}
                />
                <p className={styles.list}>Careers Reshaped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
