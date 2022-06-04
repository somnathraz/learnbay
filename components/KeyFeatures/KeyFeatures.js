import React from "react";
import styles from "./KeyFeatures.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const KeyFeatures = () => {
  return (
    <div className={styles.Features}>
      <h6 className={styles.topHead}>The network reach of our bay</h6>
      <div className={styles.FeatureWrap}>
        <div className={styles.LeftWrap}>
          <h6>Our Key Features</h6>
          <p>
            <AiOutlineCheck className={styles.tickIcon} /> We help you build a
            strong profile and prepare for MNC interviews.
          </p>
          <p>
            <AiOutlineCheck className={styles.tickIcon} />
            Hassle-free and tailored training for FAANG company interviews.
          </p>
          <p>
            <AiOutlineCheck className={styles.tickIcon} />
            Even after a career break, securing a dream job is achievable.
          </p>
          <p>
            <AiOutlineCheck className={styles.tickIcon} />A successful career
            transition even with 0 coding experience.
          </p>
          <button className={styles.btn}>
            Know More
            <BsArrowRightShort className={styles.bIcon} />
          </button>
        </div>
        <div className={styles.RightWrap}></div>
      </div>
    </div>
  );
};

export default KeyFeatures;
