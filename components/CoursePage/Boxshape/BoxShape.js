import React, { useState } from "react";

import styles from "./BoxShape.module.css";
import Image from "next/image";
import Form from "/components/Form/Form";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.boxWrapper}>
      <p className={styles.pTop}>Program Features</p>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.ImgB}>
              <img
                src="/custome-fit-learning-module.webp"
                alt="custome-fit-learning-module"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>

            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div
            className={hover ? styles.box : styles.boxActive}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.ImgC}>
              <img
                src="/data-science.webp"
                alt="data-science"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.ImgC}>
              <img
                src="/job-gauranttee.webp"
                alt="Job Guarantee"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={styles.ImgC}>
              <img
                src="/expertise.webp"
                alt="Eligibility Criteria"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box4h5}</h5>
            <p>{box4desc}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <h5>
              How Domain Specialization has helped our learners to expand their
              career
            </h5>
            <div className={styles.reviewWrap}>
              <div className={styles.profile}>
                <Image
                  src="/featureReviewIcon.png"
                  width="80"
                  height="80"
                  layout="intrinsic"
                />
                <div className={styles.name}>
                  <h5>Shravanti A</h5>
                  <p>Data Scientist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
