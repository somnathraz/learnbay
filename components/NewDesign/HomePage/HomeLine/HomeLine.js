import styles from "./HomeLine.module.css";
import React from "react";
import Image from "next/image";
import { AiOutlineRise } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

const HomeLine = ({ Emi }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          <AiOutlineRise style={{ color: "#2DB621", fontSize: "40px" }} />
          <p>68% alumni success rate</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.middle}>
          <BiBriefcase style={{ color: "#0072bc", fontSize: "40px" }} />
          <p>300+ partner companies</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.right}>
          <FaAward style={{ color: "#edb552", fontSize: "40px" }} />
          <p>100% interview guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default HomeLine;
