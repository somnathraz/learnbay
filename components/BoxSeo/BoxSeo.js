import React from 'react'
import styles from "./BoxSeo.module.css";
import { BsArrowRightShort } from "react-icons/bs";

function BoxSeo() {
  return (
    <section className={styles.BoxSeo}>
        <div className={styles.BoxSeo1}>
            <h2>We Expert in Data Science courses and Training</h2>
            <p className={styles.TBot}>Learnbay is an expert in delivering a wide gamut of management and technical data science training in India. Learnbay helps individuals and organisations provide data science courses based on practical knowledge and theoretical concepts. Our industry reputation speaks for itself. We offer the best value in training services combined with the support of our creative minds to establish a solution that suits your learning needs. We help in building careers and shaping up future leaders.</p>
            <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
        </div>
        <div className={styles.BoxSeo1}>
        <h2>We Build Data Scientists</h2>
            <p className={styles.TBot}>Learnbay is aware of the changing nature and needs of businesses around the world. We offer many data science courses in management and technical courses, as well as courses in emerging technologies. Each data science course’s curriculum has been carefully designed to meet the needs of the industry. There are many levels of data science courses available, including advanced and beginner, to meet the needs of students as well as working professionals. Data science courses are designed to prepare students for the future in technology, strategic thinking, and planning. This will ensure that they are ready for whatever comes their way and can build a successful career.</p>
        </div>
    </section>
  )
}

export default BoxSeo
