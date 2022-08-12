import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./CourseReview.module.css";

const CourseReview = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <>
      {" "}
      <div className={styles.bottomReview}>
        <h5>Get Assured Interview Call from Top Recruiters</h5>
        <p>Over 250+ Hiring Partners</p>
        <Image
          src="/Hiring-partner-review.png"
          width="1603"
          height="82"
          layout="intrinsic"
        />
      </div>
    </>
  );
};

export default CourseReview;
