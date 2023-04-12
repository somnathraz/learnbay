import React from "react";
import styles from "./ProgramCustomer.module.css";
import Image from "next/image";

const ProgramCustomer = () => {
  return (
    <div className={styles.programWrap}>
      <div className={styles.left}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whoIsProgram.webp"
          width={460}
          height={500}
        />
      </div>
      <div className={styles.right}>
        <h4>Who’s this program for?</h4>
        <div className={styles.boxWrap}>
          <div className={styles.top}>
            <div className={styles.leftSide}>
              <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Guaranteed+Interview+Calls.png"
                    width={40}
                    height={40}
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>Non-tech professionals with 6 months experience</p>
            </div>
            <div className={styles.rightSide}>
            <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Guaranteed+Interview+Calls.png"
                    width={40}
                    height={40}
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>Non-tech professionals with 6 months experience</p>
            </div>
          </div>
          <div className={styles.bottom}>
          <div className={styles.leftSide}>
              <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Guaranteed+Interview+Calls.png"
                    width={40}
                    height={40}
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>Non-tech professionals with 6 months experience</p>
            </div>
            <div className={styles.rightSide}>
            <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Guaranteed+Interview+Calls.png"
                    width={40}
                    height={40}
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>Non-tech professionals with 6 months experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCustomer;
