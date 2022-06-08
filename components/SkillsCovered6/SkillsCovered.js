import React from 'react'
import styles from "./SkillsCovered.module.css";
import { BiCheckCircle } from "react-icons/bi";


const SkillsCovered = ({ sc11, sc12, sc13, sc14,
    sc21, sc22, sc23, sc24,
    sc31, sc32, sc33, sc34,
}) => {
  return (
    <section className={styles.SkillsCovered}>
        <h4>Skills Covered</h4>
        <div className={styles.SkillsCoveredDiv}>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc11}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc12}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc13}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc14}</p>
            </div>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc21}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc22}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc23}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc24}</p>
            </div>
            <div className={styles.SkillsCoveredInner}>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc31}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc32}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc33}</p>
                <p className={styles.pBotC}><BiCheckCircle className={styles.icons} />{sc34}</p>
            </div>
        </div>
    </section>
  )
}

export default SkillsCovered
