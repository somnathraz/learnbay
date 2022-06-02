import React from 'react'
import styles from "./OtherCertificate.module.css";


function OtherCertificate() {
  return (
    <section className={styles.OtherCertificate}>
          <h4>Other Certificate</h4>
        <div className={styles.OtherCertificatediv}>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>Deep Learning Fundamentals</p>
                <p className={styles.para}>Earn industrial badge on neural networks, and convolutional networks like DL skills.</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>Deep Learning with TensorFlow</p>
                <p className={styles.para}>Get certified for your Industrial-level TensorFlow application expertise.</p>
            </div>
        </div>
        <div className={styles.OtherCertificatediv}>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>Machine Learning with Python</p>
                <p className={styles.para}>Validate your python expertise for ML algo designing.</p>
            </div>
            <div className={styles.OtherCertificateInner}>
                <p className={styles.heading}>Accelerating Deep Learning with GPUs</p>
                <p className={styles.para}>Industrial badge on GPU handling mastery for Cloud, AI & ML.</p>
            </div>
        </div>
    </section>
  )
}

export default OtherCertificate
