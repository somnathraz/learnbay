import React from "react";
import styles from "./DomainFaq.module.css";
import Image from "next/image";
import DomainCourseFaq from "./DomainCourseFaq";

const DomainFaq = ({ FaqData }) => {
  return (
    <div className={styles.DomainWrapper}>
      <div className={styles.leftSide}>
        <h5>
          <span>What Ma</span>kes Us Different?
        </h5>
        <p>
          You have several options when choosing any course from Learnbay as we
          have never failed our promises.
        </p>
        <DomainCourseFaq FaqData={FaqData} />
      </div>
      <div className={styles.rightSide}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/What+makes+us+different+flip-min.png"
          width="519"
          height="312"
          layout="intrinsic"
          alt="learnbay data science"
        />
      </div>
    </div>
  );
};

export default DomainFaq;
