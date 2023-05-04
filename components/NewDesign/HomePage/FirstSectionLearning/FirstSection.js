import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import Form from "../../../Form/Form";
import Image from "next/image";

const FirstSection = () => {
  return (
    <>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
        </div>

        <div className={styles.secondLeft}>
        <h4>Fill this form to get free learning resources</h4>
          <Form downloadBrochure jobDescription={true} workExperience={true}/>
          <div className={styles.PlayImg}>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
