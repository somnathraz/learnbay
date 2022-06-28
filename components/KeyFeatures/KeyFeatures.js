import React from "react";
import styles from "./KeyFeatures.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <section className={styles.Features}>
      <div>
        <h6 className={styles.topHead}>The Network Reach of Our Bay</h6>
        <div className={styles.FeatureWrap}>
          <div className={styles.LeftWrap}>
            <h6>Our Key Features</h6>
            <p>
              <AiOutlineCheck className={styles.tickIcon} /> We help you build a
              strong profile and prepare for MNC interviews.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />
              Hassle-free and tailored training for MAANG company interviews.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />
              Even after a career break, securing a dream job is achievable.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />A successful career
              transition even with 0 coding experience.
            </p>
            <a href="/about-us"><button className={styles.btn}>
              Know More
              <FaArrowRight className={styles.bIcon} />
            </button></a>
          </div>
          <div className={styles.RightWrap}></div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
