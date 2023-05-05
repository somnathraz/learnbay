import React from 'react'
import styles from "./LeftSide.module.css"
import { IoRocketOutline } from "react-icons/io5";


function LeftSection() {
  return (
    <section className={styles.section}>
        <div className={styles.cont2}>
            <h4 className={styles.head}>Learning Phase</h4>
            <p>We have analyzed your profile and as per industry trend we suggest you following programs</p>
        </div>
        <div>
        <p className={styles.pBlue}>Sales, Marketing & HR</p>
        <div className={styles.greyflex}>
          <div className={styles.boxesGrey}>
            <IoRocketOutline className={styles.greyIcon} />
            <p className={styles.GreyP}>12 - 20 Realtime Industrial Projects</p>
          </div>
          <div className={styles.boxesGrey}>
            <IoRocketOutline className={styles.greyIcon} />
            <p className={styles.GreyP}>2 - 4 Capstone Projetcs</p>
          </div>
          <div className={styles.boxesGrey}>
            <IoRocketOutline className={styles.greyIcon} />
            <p className={styles.GreyP}>A-Grade Resume</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftSection