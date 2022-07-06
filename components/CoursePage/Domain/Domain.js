import React from "react";
import styles from "./Domain.module.css";
import Image from "next/image";


const Domain = () => {
  return (
    <section className={styles.Domain}>
      <div className={styles.CInner}>
        <h4>Domain Specialization</h4>
      </div>
      <div className={styles.imageBox}>
        <div className={styles.left}>
        <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf" target="_blank"><div className={styles.top}>
         <p> Banking, Finance and Insurance Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf" target="_blank"><div className={styles.middle}>
            <p>Sales, Marketing and HR Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf" target="_blank"><div className={styles.middle1}>
            <p>Healthcare, Pharma and Clinical Research Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf" target="_blank"><div className={styles.middle2}>
            <p>Retail, Ecommerce and Supply Chain Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf" target="_blank"><div className={styles.bottom}>
            <p>Manufacturing, Mechanical and Telecom Domain</p>
          </div></a>
        </div>
        <div className={styles.left}>
        <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf" target="_blank"><div className={styles.top}>
         <p> Media, Hospitality and Transportation Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf" target="_blank"><div className={styles.middle}>
            <p>Energy, Oil and Gas Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Development+and+Testing+Domain.pdf" target="_blank"><div className={styles.middle1}>
            <p>Development & Testing Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Automotive%2C+IOT+and+Embedded+Domain.pdf" target="_blank"><div className={styles.middle2}>
            <p>Automotive, IOT and Embedded Domain</p>
          </div></a>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Cloud+and+Devops+Domain.pdf" target="_blank"><div className={styles.bottom}>
            <p>Cloud & Devops Domain</p>
          </div></a>
        </div>
        <div className={styles.right}>
        <Image
          src="/domain.png"
          alt="data-science-course"
          quality={100}
          layout="intrinsic"
          width="500"
          height="510"
        />
        </div>
      </div>
    </section>
  );
};

export default Domain;
