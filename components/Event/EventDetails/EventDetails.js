import React, { useEffect, useState } from "react";
import styles from "./EventDetails.module.css";
import Image from "next/image";

const EventDetails = ({
  img1,
  img2,
  img3,
  firstH,
  firstP,
  secondH,
  secondP,
  thirdH,
  thirdP,
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  return (
    <div className={styles.Main}>
      <div className={styles.left}>
        <div className={styles.leftI}>
          {mobile ? (
            <Image src={img1} width="25" height="25" layout="intrinsic" />
          ) : (
            <Image src={img1} width="45" height="45" layout="intrinsic" />
          )}
        </div>
        <div className={styles.rightI}>
          <h6>{firstH}</h6>
          <p>{firstP}</p>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.leftI}>
          {mobile ? (
            <Image src={img2} width="25" height="25" layout="intrinsic" />
          ) : (
            <Image src={img2} width="45" height="45" layout="intrinsic" />
          )}
        </div>
        <div className={styles.rightI}>
          <h6>{secondH}</h6>
          <p>{secondP}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.leftI}>
          {mobile ? (
            <Image src={img3} width="25" height="25" layout="intrinsic" />
          ) : (
            <Image src={img3} width="45" height="45" layout="intrinsic" />
          )}
        </div>
        <div className={styles.rightI}>
          <h6>{thirdH}</h6>
          <p>{thirdP}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
