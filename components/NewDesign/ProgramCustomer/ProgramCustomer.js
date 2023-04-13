import React from "react";
import styles from "./ProgramCustomer.module.css";
import Image from "next/image";
import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

const ProgramCustomer = ({
  img1,
  img2,
  img3,
  img4,
  para1,
  para2,
  para3,
  para4,
  leftImage,
  heading1,
  heading2,
  heading3,
  heading4,
}) => {
  return (
    <div>
      <h4>Who Is This Program For?</h4>
      <div className={styles.programWrap}>
        <div className={styles.left}>
          <Image src={leftImage} width={373} height={406} />
        </div>
        <div className={styles.right}>
          <div className={styles.boxWrap}>
            <div className={styles.top}>
              <div className={styles.leftSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    {/* <Image
                      src={img1}
                      width="40"
                      height="40"
                      layout="intrinsic"
                    /> */}
                    <MdOutlineCastForEducation className={styles.bIcon} />
                  </div>
                </div>
                <h4 className={styles.heading}>{heading1}</h4>
                <p>{para1}</p>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    {/* <Image
                      src={img2}
                      width="40"
                      height="40"
                      layout="intrinsic"
                    /> */}
                    <MdOutlineWorkOutline className={styles.oIcon} />
                  </div>
                </div>
                <h4 className={styles.heading1}>{heading2}</h4>
                <p>{para2}</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.leftSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    {/* <Image
                      src={img3}
                      width="40"
                      height="40"
                      layout="intrinsic"
                    /> */}
                    <FaUserGraduate className={styles.oIcon} />
                  </div>
                </div>
                <h4 className={styles.heading1}>{heading3}</h4>
                <p>{para3}</p>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    {/* <Image
                      src={img4}
                      width="40"
                      height="40"
                      layout="intrinsic"
                    /> */}
                    <GiStairsGoal className={styles.bIcon} />
                  </div>
                </div>
                <h4 className={styles.heading}>{heading4}</h4>
                <p>{para4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCustomer;