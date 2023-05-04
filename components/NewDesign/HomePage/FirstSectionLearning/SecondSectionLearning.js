import React from 'react'
import styles from "./FirstSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

function SecondSectionLearning() {
  return (
    <section>
    <h4>Get Links Here for Datasets & Case Studies</h4>
    <div className={styles.boxesDiv}>
    <Link href="https://drive.google.com/drive/folders/1d6oycOFdIEXJIN4ZRk-1F9zdBJnr0KOY?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.orange} />
            <p className={styles.innerP}>Data Analytics / Business Analytics Case Studies</p>
        </div>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1fJwPsqDwPDWBw96pRqmeENzn0YUM2Csi?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.blue} />
            <p className={styles.innerP}>Data Science Case Studies</p>
        </div>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1QhokTPLKTM1Tla6CqDHACKptmLXkz0dq?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.orange} />
            <p className={styles.innerP}>Learning Resources</p>
        </div>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1YrHjSZ2vWI7nuybba-h0m4vj7w2Vwvxm?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.blue} />
            <p className={styles.innerP}>Power Bi Dashboards</p>
        </div>
        </Link>
        <Link href="https://drive.google.com/drive/folders/10aAWm7m6YRZdMqoyPrc7Vq2BQoJTdDY2?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.orange} />
            <p className={styles.innerP}>SQL Case Studies</p>
        </div>
        </Link>
        <Link href="https://drive.google.com/drive/folders/1v1zjtxz69fcdmkgKNYsy9kUAqdofdNIT?usp=share_link">
        <div className={styles.boxes}>
        <FaArrowRight className={styles.blue} />
            <p className={styles.innerP}>Tableau Dashboards</p>
        </div>
        </Link>
    </div>
    </section>
  )
}

export default SecondSectionLearning