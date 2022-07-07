import React, { useState, useEffect } from "react";
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
        <div className={styles.top}>
         <p>Full Stack Domain</p>
          </div>
          <div className={styles.middle}>
            <p>Product Engineer/Manager Domain</p>
          </div>
          <div className={styles.middle1}>
            <p>Data Science and AI Domain</p>
          </div>
        </div>
        <div className={styles.left}>
        <div className={styles.top}>
         <p> Web 3.0 Developer Domain</p>
          </div>
          <div className={styles.middle}>
            <p>Devops & Clouds Domain</p>
          </div>
        </div>
        <div className={styles.right}>
        <Image
          src="/domain-new.png"
          alt="data-science-course"
          quality={100}
          layout="intrinsic"
          width="500"
          height="250"
        />
        </div>
      </div>
    </section>
  );
};

export default Domain;
