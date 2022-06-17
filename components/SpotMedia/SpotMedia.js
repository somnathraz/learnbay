import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./SpotMedia.module.css";

function SpotMedia() {
  return (
    <section className={styles.head}>
        <h4>Spot us on Media</h4>
        <div className={styles.SpotMedia}>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia1Inner}></div>
            <p>The 10 Most Prominent Analytics and Data Science Institutes 2021</p>
            <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
        </div>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia2Inner}></div>
            <p>Learnbay Data Science Institute: Aiding Professionals in Smooth Career Transition</p>
            <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
        </div>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia1Inner}></div>
            <p>Learnbay: Most Acknowledged Data Science Institute Offering Comprehensive Data Science Course</p>
            <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
        </div>
        </div>
    </section>
  )
}

export default SpotMedia
