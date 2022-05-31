import React from 'react'
import styles from "./CareerImpact.module.css";
import CountUp from 'react-countup';

const CareerImpact = ({ CareerHead }) => {
  
  return (
    <section className={styles.CareerImpact}>
        <div className={styles.left}>
          <h4>{CareerHead}</h4>
        </div>
        <div className={styles.Right}>
            <div className={styles.RightUp}>
                <div className={styles.RightDark}>
                    <CountUp
                                                    end={97}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="%"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Average Salary Hike</p>
                </div>
                <div className={styles.RightFade}>
                <CountUp
                                                    end={450}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="%"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Highest Salary Hike</p>
                </div>
            </div>
            <div className={styles.RightBottom}>
                <div className={styles.RightFade}>
                <CountUp
                                                    end={10000}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="+"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Careers Reshaped</p>
                </div>
                <div className={styles.RightDark}>
                <CountUp
                                                    end={250}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="+"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Hiring Partners</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareerImpact
