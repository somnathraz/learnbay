import React from "react";
import styles from "./SeventhSection.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import Image from "next/image";

function SeventhSection({ fullStackCont }) {
  return (
    <>
    <div className={styles.Section2}>
    <p className={styles.infop}>24X7 learner’s support</p>
      <div>
        <div className={styles.LearnSupport}>
          <div className={styles.learnInner}>
            <p className={styles.pTop}>Got more questions?</p>
            <h5>Talk to our team directly</h5>
            <p className={styles.pBot}>
              Reach us and a learning consultant will get in touch with you
              shortly
            </p>
            {fullStackCont ? (
              <div className={styles.btnWrap}>
                <a
                  href="https://api.whatsapp.com/send?phone=919731135221&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.btn1}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a>
                <a href="tel: +919731135221">
                  <button className={styles.btn2}>
                    <MdCall /> +91 97311 35221
                  </button>
                </a>
              </div>
            ) : (
              <div className={styles.btnWrap}>
                <a
                  href="https://api.whatsapp.com/send?phone=919606950936&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.btn1}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a>

                <a href="tel: +919606950936">
                  <button className={styles.btn2}>
                    <MdCall /> +91 96069 50936
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SeventhSection;
