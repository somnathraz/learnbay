import React, { useRef, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Typed from "typed.js";
import { IoIosArrowDown } from "react-icons/io";

const FirstSection = () => {
  const el = useRef(null);
  const fancyText = [
    "250+ Hiring Partners",
    "30+ Domain Electives",
    "86% Alumni Success Rate",
    "100% Interview Guarantee",
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: fancyText, // Strings to display: ;
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={styles.First}>
      <div className={styles.leftSide}>
        <p className={styles.FirstP}> GET INTO</p>
        <h1>India’s best Domain Specialized Data Science and AI program</h1>
        <p className="pTop">
          Use your domain expertise to build a meaningful career.
        </p>
        <span ref={el}></span>
        <div className={styles.btnWrapper}>
          <button className={styles.outLineBtn}>
            Courses <IoIosArrowDown className="bIcon" />
          </button>
          <button className={styles.btn}>
            Enquire Now <IoIosArrowDown className="bIcons" />
          </button>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default FirstSection;
