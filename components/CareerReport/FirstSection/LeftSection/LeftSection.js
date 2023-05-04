import React from 'react'
import styles from "./LeftSide.module.css"

function LeftSection() {
  return (
    <section className={styles.section}>
        <div className={styles.cont1}>
            <h4 className={styles.head}>Profile Analysis</h4>
            <p>We have analyzed your profile and as per industry trend we suggest you following programs</p>
        </div>
        <div className={styles.cont2}>
            <h4 className={styles.head}>Learning Phase</h4>
            <p>We have analyzed your profile and as per industry trend we suggest you following programs</p>
        </div>
        <div className={styles.cont}>
            <h4 className={styles.head}>Domain Training</h4>
            <p>We have analyzed your profile and as per industry trend we suggest you following programs</p>
        </div>
    </section>
  )
}

export default LeftSection