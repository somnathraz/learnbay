import React from 'react'
import styles from "./SkillsCovered.module.css";
import { BiCheckCircle } from "react-icons/bi";


function SkillsCovered() {
  return (
    <section className={styles.SkillsCovered}>
        <h4>Skills Covered</h4>
        <div className={styles.SkillsCoveredDiv}>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Collection</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Understanding</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Cleaning</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Munging</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Warehousing</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Domain Expertise</p>
            </div>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Exploration</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Preprocessing</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Data Analysis</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Statistical Analysis</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />PCA Analysis</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Dashboard and Storytelling</p>
            </div>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Feature Engineering</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Hyper Parameter Tuning</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Model Creation</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Model Deployment</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Critical Thinking</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />Function & Formulas</p>
            </div>
        </div>
    </section>
  )
}

export default SkillsCovered
