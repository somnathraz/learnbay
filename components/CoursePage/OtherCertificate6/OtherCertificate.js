import React from 'react'
import styles from "./OtherCertificate.module.css";


const OtherCertificate = ({
    OCHead1,
    OCP1,
    OCHead2,
    OCP2,
    OCHead3,
    OCP3,
    OCHead4,
    OCP4,
    OCHead5,
    OCP5,
    OCHead6,
    OCP6,
  }) => {
  return (
    <section className={styles.OtherCertificate}>
          <h4>Other Certificate</h4>
        <div className={styles.OtherCertificatediv}>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead1}</p>
                <p className={styles.para}>{OCP1}</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead2}</p>
                <p className={styles.para}>{OCP2}</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead5}</p>
                <p className={styles.para}>{OCP5}</p>
            </div>
        </div>
        <div className={styles.OtherCertificatediv}>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead3}</p>
                <p className={styles.para}>{OCP3}</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead4}</p>
                <p className={styles.para}>{OCP4}</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>{OCHead6}</p>
                <p className={styles.para}>{OCP6}</p>
            </div>
        </div>
    </section>
  )
}

export default OtherCertificate
