import React from "react";
import styles from "./WhyLearnbay.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";

const WhyLearnbay = () => {
  return (
    <section className={styles.WhyLearnbay}>
      <h4>Why Learnbay?</h4>
      <div className={styles.divList}>
        <p className={styles.list}>
          <AiOutlineCheck className={styles.tickIcon} />
          Designed for Working Professionals
        </p>
        <p className={styles.list}>
          <AiOutlineCheck className={styles.tickIcon} />
          Industry-targeted Syllabus
        </p>
      </div>
      <div className={styles.FirstDiv}>
        <div className={styles.FirstImg}></div>
        <div className={styles.FirstText}>
          <h3>Project Innovation Lab</h3>
          <p className={styles.list}>
            Learnbay offers live, instructor-led learning environment with a
            custom program created by experienced trainers.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <Image
                src="/Live-classes-home-section.svg"
                width="50"
                height="50"
                layout="intrinsic"
              />
              <p>
                Live 1:1 - Resolve any doubts about projects and assignments
              </p>
            </div>
            <div className={styles.iconBox}>
              <Image
                src="/why-learnbay-project.svg"
                width="50"
                height="50"
                layout="intrinsic"
              />
              <p>Extensive hands-on expertise across several domains</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.MiddleDiv}>
        <div className={styles.FirstText}>
          <h3>Domain Specialized Projects</h3>
          <p className={styles.list}>
            Work with real-time data sets gathered from renowned data sources
            provided by startups and MNCs in India.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <img
                src="/Live-classes-home-alt.svg"
                width="40"
                height="40"
                loading="lazy"
              />
              <p>Get certificate from IBM for your capstone project</p>
            </div>
            <div className={styles.iconBox}>
              <img
                src="/domain-in-why-learnbay.svg"
                width="40"
                height="40"
                loading="lazy"
              />
              <p>
                Create visually appealing and industry-demanding project
                portfolio
              </p>
            </div>
            <button>
              <IoCallOutline className={styles.BIcon} />
              Talk To Our Domain Expert
            </button>
          </div>
        </div>
        <div className={styles.MiddleImg}>
          <Image
            src="/domain-specialized.png"
            width="656"
            height="457"
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLearnbay;
