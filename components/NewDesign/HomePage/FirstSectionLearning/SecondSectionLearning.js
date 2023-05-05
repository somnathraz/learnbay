import React from "react";
import styles from "./FirstSection.module.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Link from "next/link";

function SecondSectionLearning() {
  return (
    <section className={styles.secondSection}>
      <h4>Get Links Here for Learning Resourses, Projects & Datasets</h4>
        <div className={styles.boxes}>
          <Link href="https://drive.google.com/drive/folders/1QhokTPLKTM1Tla6CqDHACKptmLXkz0dq?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Python-logo.png"></img>
              <p className={styles.innerP}>Python <FaDownload className={styles.iconB} /></p>
            </div>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1YrHjSZ2vWI7nuybba-h0m4vj7w2Vwvxm?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/sql.png"></img>
              <p className={styles.innerP}>SQL <FaDownload className={styles.iconB} /></p>
            </div>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1YrHjSZ2vWI7nuybba-h0m4vj7w2Vwvxm?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/tableau_logo.png"></img>
              <p className={styles.innerP}>Tableau <FaDownload className={styles.iconB} /></p>
            </div>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1fJwPsqDwPDWBw96pRqmeENzn0YUM2Csi?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Power_BI_Logo.png"></img>
              <p className={styles.innerP}>PowerBI <FaDownload className={styles.iconB} /></p>
            </div>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1d6oycOFdIEXJIN4ZRk-1F9zdBJnr0KOY?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/project-icon.png" width="80px"></img>
              <p className={styles.innerP}>Projects <FaDownload className={styles.iconB} /> </p>
            </div>
          </Link>
          <Link href="https://drive.google.com/drive/folders/1v1zjtxz69fcdmkgKNYsy9kUAqdofdNIT?usp=share_link">
            <div className={styles.boxesInner}>
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/pie-chart.png"></img>
              <p className={styles.innerP}>Learning Resources <FaDownload className={styles.iconB} /></p>
            </div>
          </Link>
        </div>
    </section>
  );
}

export default SecondSectionLearning;
