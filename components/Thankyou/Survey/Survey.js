import React from "react";
import styles from "./Survey.module.css";
import Image from "next/image";

const Survey = ({ topPara, para, header }) => {
  return (
    <div className={styles.boxWrap}>
      <div className={styles.leftSide}>
        <p>{topPara}</p>
        <h4>{header}</h4>
        <p>{para}</p>
        <button>Know More</button>
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
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/thank-you-no-1.png"
              width={56}
              height={86}
              layout="intrinsic"
              alt="lines"
            />
          </div>
          <div className={styles.twoDiv}>
            <div className={styles.leftContent}>
              <h4>Take 2 Mins Survey</h4>
              <p>
                Stat point 1 here lorem ipsum doret trinket Stat point 1 here
                lorem ipsum doret trinket Stat point 1{" "}
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
              <h4>Take 2 Mins Survey</h4>
              <p>
                Stat point 1 here lorem ipsum doret trinket Stat point 1 here
                lorem ipsum doret trinket Stat point 1 hello{" "}
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
