import React from 'react'
import CountUp from 'react-countup';
import styles from "./SyllabusNew.module.css";


function SyllabusNew() {
  return (
    <section className={styles.SyllabusNew}>
        <h4 style={{ marginBottom: "30px" }}>Course Syllabus</h4>
        <div className={styles.SyllabusTop}>
            <div className={styles.TopInner}>
                <CountUp
                    end={300}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Hours Syllabus</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={15}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>AI & ML Projects</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={10}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Live Learning Sessions</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={97}
                    delay={2}
                    duration={2}
                    suffix="%"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Job Oriented Sessions</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={18}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Tools & Modules</p>
            </div>
        </div>
        <div className={styles.SyllabusBot}></div>
    </section>
  )
}

export default SyllabusNew
