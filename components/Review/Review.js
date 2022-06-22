import React from 'react'
import styles from "./Review.module.css";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

import {
    ReviewD,
  } from "./ReviewDetails";


function Review() {
  return (
    <section className={styles.Review}>
        <div className={styles.Back}><h4>A Word From Our Alumni</h4></div>
        <div className={styles.gridPanel}>
            {ReviewD.map((Review) => {
              const {id, title, img, para } = Review;
              return (
                <div className={styles.leftSide} key={id}>
                    <div className={styles.imgDiv}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.ReviewImg} 
                  />
                  </div>
                  <p className={styles.title}>{title}</p>
                  <FaQuoteLeft className={styles.Quote} /><p className={styles.para}>
                    {para}
                  </p><FaQuoteRight className={styles.Quote} />
                </div>
              );
            })}
          </div>
    </section>
  )
}

export default Review
