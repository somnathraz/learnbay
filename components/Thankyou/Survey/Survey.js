import React from "react";
import styles from "./Survey.module.css";
import Image from "next/image";
import { PopupButton } from "@typeform/embed-react";


const Survey = ({ topPara, para, header }) => {
  return (
    <div className={styles.boxWrap}>
      <div className={styles.leftSide}>
        <p>{topPara}</p>
        <h4>{header}</h4>
        <p>{para}</p>
        <PopupButton
          id="jpqC3A6g"
          style={{ fontSize: 18 }}
          className="my-button"
        >
          Know More
        </PopupButton>
      </div>
      <div className={styles.lineWrap}>
        <div className={styles.lineImg}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Line-with-dots.webp"
            width={1493}
            height={752}
            layout="intrinsic"
            alt="lines"
          />
        </div>

        <div className={styles.conteWrap}>
          <div className={styles.oneDiv}>
          <div className={styles.leftContent}>
              <h4>Fill out the Form:</h4>
              <p>
              Provide us with essential information about your experience, job, domain, and career goals.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/thank-you-no-1.png"
              width={56}
              height={86}
              layout="intrinsic"
              alt="lines"
            />
          </div>
          </div>
          <div className={styles.twoDiv}>
            <div className={styles.leftContent}>
              <h4>Receive Personalized Course Suggestions:</h4>
              <p>
              You'll receive a comprehensive report that highlights the courses best suited to enhance your skills and propel your career forward.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/thank-you-no-2.png"
                width={65}
                height={88}
                layout="intrinsic"
                alt="lines"
              />
            </div>
          </div>
          <div className={styles.threeDiv}>
            <div className={styles.leftContent}>
              <h4>Open Doors to the Best-suited Companies:</h4>
              <p>
              Increase your chances of being referred to the best-suited companies for your career ambitions.{" "}
              </p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/thank-you-no-3.png"
                width={61}
                height={88}
                layout="intrinsic"
                alt="lines"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
