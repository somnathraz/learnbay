import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import styles from "./SpotMedia.module.css";

function SpotMedia() {
  return (
    <section className={styles.head}>
        <h4>Spot us on Media</h4>
        <div className={styles.SpotMedia}>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia1Inner}></div>
            <p>The 10 Most Prominent Analytics and Data Science Institutes 2021</p>
            <a href="https://www.analyticsinsight.net/The-10-Most-Prominent-Analytics-and-Data-Science-Institutes-2021/#page=1" target="_blank"><button className={styles.btn}>
              Know More
              <FaArrowRight className={styles.bIcon} />
            </button></a>
        </div>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia2Inner}></div>
            <p>Learnbay Data Science Institute: Aiding Professionals in Smooth Career Transition</p>
            <a href="https://www.highereducationdigest.com/learnbay-data-science-institute-aiding-professionals-in-smooth-career-transition/" target="_blank"><button className={styles.btn}>
              Know More
              <FaArrowRight className={styles.bIcon} />
            </button></a>
        </div>
        <div className={styles.SpotMediaInner}>
            <div className={styles.SpotMedia1Inner}></div>
            <p>Learnbay: Most Acknowledged Data Science Institute Offering Comprehensive Data Science Course</p>
            <a href="https://www.analyticsinsight.net/learnbay-most-acknowledged-data-science-institute-offering-comprehensive-data-science-courses/" target="_blank"><button className={styles.btn}>
              Know More
              <FaArrowRight className={styles.bIcon} />
            </button></a>
        </div>
        </div>
    </section>
  )
}

export default SpotMedia
