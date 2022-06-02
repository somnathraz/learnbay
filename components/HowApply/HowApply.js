import React from 'react'
import Image from 'next/image'
import styles from "./HowApply.module.css";
import { BiCheckCircle } from "react-icons/bi";


function HowApply() {
  return (
    <section className={styles.HowApply}>
        <h4>How to Apply Steps</h4>
        <div className={styles.HowApplyDiv}>
            <div className={styles.HowApplyInner}>
            <Image
            src="/bookacall.png"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="50px"
            height="50px"
          />
                <p className={styles.pBotC}>Step 1 : <b>Book a Call</b></p>
                <p className={styles.pBotC}>Get your profile reviewed by our Career Expert.</p>
            </div>
            <div className={styles.HowApplyInner}>
            <Image
            src="/getenrolled.png"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="50px"
            height="50px"
          />
                <p className={styles.pBotC}>Step 2 : <b>Get Enrolled</b></p>
                <p className={styles.pBotC}>Enroll in AI and ML Program with domain specialization.</p>
            </div>
            <div className={styles.HowApplyInner}>
            <Image
            src="/getplaced.png"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="50px"
            height="50px"
          />
                <p className={styles.pBotC}>Step 3 : <b>Get Placed</b></p>
                <p className={styles.pBotC}>Get 100% Job Assurance accompanied by IBM Certification.</p>
            </div>
        </div>
    </section>
  )
}

export default HowApply
