import React from "react";
import styles from "./WhyLearnbay.module.css";
import { FaCheck,FaUserFriends,FaCompress,FaUserCheck,FaFlag,FaAddressCard,FaClone } from "react-icons/fa";
import Image from "next/image";


const WhyLearnbay = () => {
  return (
    <section className={styles.WhyLearnbay}>
      <h4>Why Learnbay?</h4>
      <div className={styles.divList}>
        <p className={styles.list}><FaCheck className={styles.tickIcon} />Designed for Working Professionals</p>
        <p className={styles.list}><FaCheck className={styles.tickIcon} />Industry-targeted Syllabus</p>
      </div>
      <div className={styles.FirstDiv}>
        <div className={styles.FirstImg}></div>
        <div className={styles.FirstText}>
          <h3>Interactive Learning</h3>
          <p className={styles.list}>
          Learnbay offers live, instructor-led learning environment with a custom program created by experienced trainers.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <FaUserFriends className={styles.BoxIconuser} />
              <p>Live 1:1 - Resolve any doubts about projects and assignments</p>
            </div>
            <div className={styles.iconBox}>
              <FaCompress className={styles.BoxIconcompress} />
              <p>Extensive hands-on expertise across several domains</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.MiddleDiv}>
        <div className={styles.FirstText}>
          <h3>Domain Specialized Projects</h3>
          <p className={styles.list}>
          Work with real-time data sets gathered from renowned data sources provided by startups and MNCs in India.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <FaAddressCard className={styles.BoxIconcard} />
              <p>Get certificate from IBM for your capstone project</p>
            </div>
            <div className={styles.iconBox}>
              <FaClone className={styles.BoxIconclone} />
              <p>Create visually appealing and industry-demanding project portfolio</p>
            </div>
          </div>
        </div>
        <div className={styles.MiddleImg}></div>

      </div>
    </section>
  );
};

export default WhyLearnbay;
