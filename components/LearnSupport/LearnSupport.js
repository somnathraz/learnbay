import React from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./LearnSupport.module.css";
import Image from "next/image";

function LearnSupport() {
  return (
    <>
      <h4>24/7 Learner’s Support</h4>
      <div className={styles.LearnSupport}>
        <div className={styles.learnInnerR}>
          <img src="/24-7-support-home.webp" className={styles.img} />
        </div>
        <div className={styles.learnInner}>
          <p className={styles.pTop}>Got more questions?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Reach us and a learning consultant will get in touch with you
            shortly
          </p>
          <div className={styles.btnWrap}>
            <button className={styles.btn1}>
              <AiOutlineWhatsApp /> Enquire Now
            </button>
            <button className={styles.btn2}>
              <MdCall /> +91 96069 50936
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnSupport;
