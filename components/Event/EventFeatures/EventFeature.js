import React from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";

const EventFeature = ({ title, h1, h2, h3, p1, p2, p3, img1, img2, img3 }) => {
  return (
    <div className={styles.eFeature}>
      <h2>{title}</h2>
      <div className={styles.bodyContent}>
        <div className={styles.eLeft}>
          <div className={styles.imgBack}>
            <Image
              src={img1}
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
              alt="backImg"
            />
          </div>
          <h6>{h1}</h6>
          <p>{p1}</p>
        </div>
        <div className={styles.eMiddle}>
          <div className={styles.imgBack}>
            <Image
              src={img2}
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
              alt="backImg"
            />
          </div>
          <h6>{h2}</h6>
          <p>{p2}</p>
        </div>
        <div className={styles.eRight}>
          <div className={styles.imgBack}>
            <Image
              src={img3}
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
              alt="backImg"
            />
          </div>
          <h6>{h3}</h6>
          <p>{p3}</p>
        </div>
      </div>
    </div>
  );
};

export default EventFeature;
