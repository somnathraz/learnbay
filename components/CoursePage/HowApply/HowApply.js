import React from 'react'
import Image from 'next/image'
import styles from "./HowApply.module.css";

const HowApply = ({
  CCourse,
}) => {
  return (
    <section className={styles.HowApply}>
        <h4>How to <span>Apply</span></h4>
        <div className={styles.aboutContent}>
            <div className={styles.left}>
              <Image src="/call.svg" width="34" height="34" />
              <img
                src="/1_Project.svg"
                width="73"
                height="95"
                className={styles.Numbers}
              />
              <h6><span>Book </span>a Call</h6>
            
              <p >
              Get your profile reviewed by our Career Expert
              </p>
            </div>
            <div className={styles.Middle}>
              <Image src="/Enrolled.svg" width="34" height="34" />
              <img
                src="/icons 2_Count.png"
                width="73"
                height="95"
                className={styles.Numbers}
              />
              <h6>Get Enrolled</h6>
              <p>
              Enroll in Advanced Data Science & AI Program with Domain Specialization
              </p>
            </div>
            <div className={styles.Right}>
              <Image src="/placed.svg" width="34" height="34" />
              <img
                src="/icons 3_Count.png"
                width="73"
                height="95"
                className={styles.Numbers}
              />
              <h6>Get Placed</h6>
              <p>
              Get 100% interview Guarantee accompanied by IBM Certification
              </p>
            </div>
          </div>
    </section>
  )
}

export default HowApply
