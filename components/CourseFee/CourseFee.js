import React from 'react'
import styles from "./CourseFee.module.css";
import { BiCheck } from "react-icons/bi";

function CourseFee() {
  return (
    <section>
        <h4 style={{ marginBottom: "30px" }}>Artificial Intelligence & ML Course Fee</h4>
        <div className={styles.CourseFee}>
            <div className={styles.heading}>
                <p className={styles.phead}>Online Classroom</p>
            </div>
            <div className={styles.listcheck}>
                <p className={styles.list}><BiCheck className={styles.icon} />Online interactive classes</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Weekend and weekdays batches</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Extra doubt clearance sessions</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Multiple domain selection options</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Company-based mock interviews</p>
            </div>
        </div>
    </section>
  )
}

export default CourseFee
