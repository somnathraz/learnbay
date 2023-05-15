import React from "react";
import Image from "next/image";
import styles from "./ThankStats.module.css";
import { BsCheck } from "react-icons/bs";
import { PopupButton } from "@typeform/embed-react";
const ThankStats = ({
  img1,
  heading,
  para1,
  para2,
  para5,
  para6,
  desc,
  head1,
  head2,
  head5,
  head6,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightContent}>
        <h4>{heading}</h4>
        {/* <p>{desc}</p> */}
        <div className={styles.checkPointWrap}>
          <div className={styles.leftWrap}>
            <div className={styles.checkpoint}>
              <BsCheck className={styles.check} />
              <div className={styles.contentWrap}>
                <h6>{head1}</h6>
                <p>{para1}</p>
              </div>
            </div>
            <div className={styles.checkpoint}>
              <BsCheck className={styles.check} />
              <div className={styles.contentWrap}>
                <h6>{head2}</h6>
                <p>{para2}</p>
              </div>
            </div>
          </div>
          <div className={styles.rightWrap}>
            <div className={styles.checkpoint}>
              <BsCheck className={styles.check} />
              <div className={styles.contentWrap}>
                <h6>{head5}</h6>
                <p>{para5}</p>
              </div>
            </div>
            <div className={styles.checkpoint}>
              <BsCheck className={styles.check} />
              <div className={styles.contentWrap}>
                <h6>{head6}</h6>
                <p>{para6}</p>
              </div>
            </div>
          </div>
        </div>

        <PopupButton
          id="jpqC3A6g"
          style={{ fontSize: 18 }}
          className="my-button"
        >
          Start your Survey
        </PopupButton>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={img1}
          layout="intrinsic"
          width={600}
          height={563}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ThankStats;
