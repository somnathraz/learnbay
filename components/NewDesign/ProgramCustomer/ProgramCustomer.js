import React from "react";
import styles from "./ProgramCustomer.module.css";
import Image from "next/image";

const ProgramCustomer = ({img1,img2,img3,img4,para1,para2,para3,para4,leftImage}) => {
  return (
    <div className={styles.programWrap}>
      <div className={styles.left}>
        <Image
          src={leftImage}
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
                    src={img1}
                    width="40"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>{para1}</p>
            </div>
            <div className={styles.rightSide}>
            <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src={img2}
                    width="40"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>{para2}</p>
            </div>
          </div>
          <div className={styles.bottom}>
          <div className={styles.leftSide}>
              <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src={img3}
                    width="40"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>{para3}</p>
            </div>
            <div className={styles.rightSide}>
            <div className={styles.boxIcon}>
                <div className={styles.imgWrap}>
                  <Image
                    src={img4}
                    width="40"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <hr className={styles.line} />
              <p>{para4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCustomer;
