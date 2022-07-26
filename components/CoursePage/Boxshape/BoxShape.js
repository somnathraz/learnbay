import React, { useState } from "react";

import styles from "./BoxShape.module.css";
import Image from "next/image";
import Form from "/components/Form/Form";
import {MdLiveTv} from "react-icons/md"
import {FiUser} from "react-icons/fi"
import { BsGraphUp } from "react-icons/bs";

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
         
              <MdLiveTv className={styles.boxIcon}/>
            

            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div
            className={hover ? styles.box : styles.boxActive}
           
          >
           
              {hover ? 
              <img
              src="/Live-classes-home-alt.svg"
              width="60"
              height="60"
              loading="lazy"
            />: <img
            src="/capstone-live-home.svg"
            alt="data-science"
            className={styles.icon}
            width="60"
            height="60"
            loading="lazy"
          /> }
              
           
            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FiUser className={styles.boxIcon}/>
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            
            <BsGraphUp className={styles.boxIcon}/>
            
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
              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.leftContent}>
                  <h5>+300%</h5>
                  <p>Highest Salary Hike</p>
                </div>
                <div className={styles.rightContent}>
                <h5>18 LPA</h5>
                  <p>Average Salary
Package</p>
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
