import React from "react";

import styles from "./BoxShape.module.css";

import Form from "../Form/Form";

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
  return (
    <div className={styles.boxWrapper}>
      <p className="pTop">Program Features</p>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div className={styles.box}>
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
          <div className={styles.box}>
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
          <div className={styles.box}>
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
          <div className={styles.box}>
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
            <div className={styles.formWrapper}>
              <h5>
                Land In Your Dream Job With <br />
                <span>Real Work Experience</span>
              </h5>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
