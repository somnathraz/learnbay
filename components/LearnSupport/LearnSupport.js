import React from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./LearnSupport.module.css";

function LearnSupport({FsdNumber}) {
  return (
    <>
      <h4>24/7 Learner’s Support</h4>
      <div className={styles.LearnSupport}>
        <div className={styles.learnInnerR}>
          <img
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/24-7-support-home.webp"
            width="100%"
            className={styles.img}
             alt="data science course in bangalore"
          />
        </div>
        <div className={styles.learnInner}>
          <p className={styles.pTop}>Got more questions?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Reach us and a learning consultant will get in touch with you
            shortly
          </p>
          <div className={styles.btnWrap}>
          {FsdNumber ? (
            <>
            <a
              
              href="https://api.whatsapp.com/send?phone=919731135221&text=Hello,"
              target="_blank"
            >
              <button className={styles.btn1}>
                <AiOutlineWhatsApp /> Enquire Now
              </button>
            </a> 
            <a href="tel:+919731135221">
              <button className={styles.btn2}>
                <MdCall /> +91 973 113 5221
              </button>
            </a>
            </>
            ) : ( 
              <>
                {" "} 
                <a
              href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
              target="_blank"
            >
              <button className={styles.btn1}>
                <AiOutlineWhatsApp /> Enquire Now
              </button>
            </a> 
            <a href="tel:+917795687988">
              <button className={styles.btn2}>
                <MdCall /> +91 77956 87988
              </button>
            </a>
                </>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnSupport;
