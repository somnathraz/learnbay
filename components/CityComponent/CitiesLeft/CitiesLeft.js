import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import styles from './CitiesLeft.module.css'


function CitiesLeft({fullStackCity}) {
  return (
    <section className={styles.CitiesLeftHead}>
        <div className={styles.listOuter}>
        <a href='#Program'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />About the Program</p></a>
        <a href='#Domain'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Domain Specialization</p></a>
        {fullStackCity ? (
        <></>
      ) : (
        <>
          {" "}
        <a href='#Certification'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Certification Details</p></a>
        </>
      )}
        <a href='#Module'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Module Details</p></a>
        <a href='#Job'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Job Assist Program </p></a>
        <a href='#Projects'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Know Our Projects</p></a>
        <a href='#Alumni'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Hear From Our Alumni</p></a>
        <a href='#FAQ'><p className={styles.listInner}><FaChevronRight className={styles.RIcon} />Frequently Asked Questions</p></a>
        </div>
    </section>
  )
}

export default CitiesLeft
