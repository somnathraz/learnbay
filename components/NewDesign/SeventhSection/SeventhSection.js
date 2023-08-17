import React from "react";
import styles from "./SeventhSection.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import Image from "next/image";

function SeventhSection({ fullStackCont }) {
  return (
    <>
      <div className={styles.Section2}>
        <p className={styles.infop}>24X7 Learner’s Support</p>
        <div>
          <div className={styles.LearnSupport}>
            <div className={styles.learnInner}>
              <p className={styles.pTop}>Have any questions in mind?</p>
              <h5>Talk to our team directly</h5>
              <p className={styles.pBot}>
                Reach out to us and your career guide will get in touch with you
                shortly
              </p>
              {fullStackCont ? (
                <div className={styles.btnWrap}>
                  {/* <a
                    href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
                    target="_blank"
                  >
                    <button className={styles.btn1}>
                      <AiOutlineWhatsApp /> Enquire Now
                    </button>
                  </a> */}

                  <a href="tel: +917795687988">
                    <button className={styles.btn2}>
                      <MdCall /> +91 77956 87988
                    </button>
                  </a>
                </div>
              ) : (
                <div className={styles.btnWrap}>
                  {/* <a
                    href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
                    target="_blank"
                  >
                    <button className={styles.btn1}>
                      <AiOutlineWhatsApp /> Enquire Now
                    </button>
                  </a> */}

                  <a href="tel: +917795687988">
                    <button className={styles.btn2}>
                      <MdCall /> +91 77956 87988
                    </button>
                  </a>
                </div>
              )}
            </div>
            <div className={styles.rightPart}>
              <div>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/learners-support-guy.png"
                  width="681"
                  height="515"
                  layout="intrinsic"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeventhSection;
