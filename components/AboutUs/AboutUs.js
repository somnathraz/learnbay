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
  FaLinkedin,
  FaEye,
  FaQuoteLeft,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <div>
          <FaQuoteLeft className={styles.orangeQuote} />
          <h4 style={{ textAlign: "left" }}>
            <span className={styles.spanOrange}>Knowledge is power</span>
            <br />
            <span className={styles.spanAuth}>- (Francis Bacon)</span>
            <br /> And we want to empower all our aspirants to succeed.
          </h4>
        </div>
        <div className={styles.right}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/About-Us-right.webp"
            width="722"
            height="600"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
      </div>
      <div className={styles.MVDiv}>
        <div className={styles.MiddleDiv}>
          <div className={styles.FirstText}>
            <div className={styles.flexIcon}>
              <FaEye className={styles.iconOrange} />
              <h3>Our Vision</h3>
            </div>
            <p className={styles.list}>
              To lead the industrial training sector by generating demanding
              professionals with future proof technical skills and knowledge.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <VscCode
                  className={styles.BoxIconcard}
                  alt="data science course"
                />
                <p>Provide scopes to techies & non-techies all alike.</p>
              </div>
              <hr></hr>
              <div className={styles.iconBox}>
                <MdOutlineVideoLibrary className={styles.BoxIconcard} />
                <p>Ensure an extremely personalized learning experience.</p>
              </div>
            </div>
          </div>
          <div className={styles.MiddleImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Our-Vision-new.webp"
              width="564"
              height="420"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
        </div>
        <div className={styles.FirstDiv}>
          <div className={styles.FirstImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Group-313.webp"
              width="488"
              height="445"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <div className={styles.FirstText}>
            <div className={styles.flexIcon}>
              <GiArcheryTarget className={styles.iconOrange} />
              <h3>Our Mission</h3>
            </div>
            <p className={styles.list}>
              Safeguarding your career, even under the most unstable job market
              scenario, via the acquisition of emerging technology-based unique
              skills.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <FiUsers
                  className={styles.BoxIconcard}
                  alt="data science course"
                />
                <p> Literate everyone with data science knowledge.</p>
              </div>
              <hr></hr>
              <div className={styles.iconBox}>
                <FaCompress
                  className={styles.BoxIconcard}
                  alt="data science course"
                />
                <p>
                  Bust the myth that only IT pros can have lucrative careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FirstTextHead}>
        <h3>Our Core Team</h3>
      </div>
      <div className={styles.MainDiv}>
        <div className={styles.FirstDivMain}>
          <div className={styles.FirstImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/krishna-sir-about-new.png"
              width="141"
              height="209"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <div className={styles.FirstTextTop}>
            <div className={styles.iconHead}>
              <h3>
                Krishna Kumar <span className={styles.DesSpan}>(Founder)</span>
              </h3>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-learnbay/"
                target="_blank"
              >
                <FaLinkedin className={styles.iconLink} />
              </a>
            </div>
            <p className={styles.list}>
              Skills are what distinguish a novice from a professional. But
              there is no such skill level that we can call "evergreen."
              Continuous skill development is the only way to survive in today's
              highly competitive job market. I want to lead all of the
              passionate professionals to the peak of their professionals. I
              want to establish Learnbay as the 'one-stop destination to learn,
              grow & lead.'
            </p>
          </div>
        </div>
        <div className={styles.FirstDivMain}>
          <div className={styles.FirstImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Abhishek-sir-about-new.png"
              width="141"
              height="209"
              layout="intrinsic"
              alt="data science course"
              className={styles.img12} 
            />
          </div>
          <div className={styles.FirstTextTop}>
            <div className={styles.iconHead}>
              <h3>
                Abhishek Gupta{" "}
                <span className={styles.DesSpan}>(Director)</span>
              </h3>
              <a
                href="https://www.linkedin.com/in/abhishek-gupta-716552115/"
                target="_blank"
              >
                <FaLinkedin className={styles.iconLink} />
              </a>
            </div>
            <p className={styles.list}>
              We work hard to ensure students achieve the ultimate success after
              course completion. They lose track of careers as "What now?" we
              save candidates from getting lost in the huge crowd. Our goal is
              to make sure everyone starts a successful career as DS, AI, and
              full-stack experts from Learnbay. More than certificates, we
              enhance our students' skills and knowledge, so they learn to earn
              through an ever-secure career.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Placement}>
        <h3>Placement Highlights</h3>
        <div className={styles.iconBoxP}>
          <div className={styles.iconBoxInner}>
            <div>
              <CountUp
                end={250}
                delay={2}
                duration={2}
                suffix="%"
                className={[styles.textStyle]}
              />
              <p className={styles.listt}>Highest Salary Hike</p>
            </div>
          </div>
          <div className={styles.iconBoxInner}>
            <div>
              <CountUp
                end={175}
                delay={2}
                duration={2}
                suffix="%"
                className={[styles.textStyle]}
              />
              <p className={styles.listt}>Average Salary Hike</p>
            </div>
          </div>
          <div className={styles.iconBoxInner}>
            <div>
              <CountUp
                end={300}
                delay={2}
                duration={2}
                suffix="+"
                className={[styles.textStyle]}
              />
              <p className={styles.listt}>Hiring Partners</p>
            </div>
          </div>
          <div className={styles.iconBoxInner}>
            <div className={styles.CountBox}>
              <CountUp
                end={30000}
                delay={2}
                duration={2}
                suffix="+"
                className={[styles.textStyle]}
              />
              <p className={styles.listt}>Careers Reshaped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
