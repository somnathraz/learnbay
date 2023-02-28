import React, { useState } from "react";
import styles from "./MultiTabs.module.css";
import Image from "next/image";

const MultiTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);

  return (
    <div className={styles.Course} id="course">
      <h2>Our Core Features</h2>
      <p className={styles.pTop}>Learnbay Advantage - How are we Different?</p>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Dedicated Placement Cell
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            IBM Certified Capstone
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Flexibility & Support
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Support For Non Programmers
          </span>
        </div>

        {oneYear ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Job Assistance Program</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                 alt="data science course"
              />
              <h6>
                Get Assured Job Referrals in Product Based MNCs with Dedicated
                Placement Support
              </h6>
              <p className={styles.para}>
                Become job ready with our resume preparation and mock interview
                sessions from industry experts. Crack interview in top companies
                with confidence
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>97%</h4>
                  <p>Average Hike</p>
                </div>
                <div className={styles.middle}>
                  <h4>10K</h4>
                  <p>Trusted Learners</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/Job+assistance+Program.png"
                width="419"
                height="412"
                 alt="data science course"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Global Industry Certification</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                alt="data science course"
              />
              <h6>
                Work on Domain Specialised Capstone Projects With IBM to get
                handson experience
              </h6>
              <p className={styles.para}>
                Upon Successful completion of the course, you will receive the
                globally recognised certificate from IBM which helps you to get
                industry ready
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>Dual</h4>
                  <p>Certification</p>
                </div>
                <div className={styles.middle}>
                  <h4>Global</h4>
                  <p>Accreditation</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/IBM+Certified+Capstone+f-min.png"
                width="504"
                height="383"
                 alt="data science course"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Special Classes For Beginners</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                alt="data science course"
              />
              <h6>
                Attend Our Special Programming Sessions For Non-tech
                professionals
              </h6>
              <p className={styles.para}>
                We believe that professionals coming from non programming
                backgrounds need special assistance and support so that they can
                learn from scratch.
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>Special Classes</h4>
                  <p>For Non Programmers</p>
                </div>
                <div className={styles.middle}>
                  <h4>1:1 Daily</h4>
                  <p>Doubt Session</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/special-classes-beigneers.webp"
                width="400"
                 alt="data science course"
                height="412"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>1:1 Personal Mentorship</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                 alt="data science course"
              />
              <h6>
                3 years of Flexible access for live Interactive online classes
                and lifetime access of LMS
              </h6>
              <p className={styles.para}>
                Our experts are available 1:1 to help you for any doubts after
                your live classes. You can attend classes from multiple
                instructors, change batches, get backup classes
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>1:1 Personal</h4>
                  <p>Mentorship</p>
                </div>
                <div className={styles.middle}>
                  <h4>1:1 Daily</h4>
                  <p>Doubt Session</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/flexibility+support+f-min.png" width="391" height="377"  alt="data science course"/>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MultiTabs;
