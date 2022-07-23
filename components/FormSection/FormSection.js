import React from "react";
import styles from "./FormSection.module.css";
import { MdCall } from "react-icons/md";
import FormInline from "./FormInline";

const FormSection = () => {
  return (
    <div className={styles.fromWrap}>
      <div className={styles.leftForm}>
        <h5>Apply For Free Career Counselling</h5>
        <button>
          <MdCall />
          +91 96069 50936
        </button>
      </div>
      <div className={styles.rightForm}>
        <div className={styles.rightFormWrap}>
          <FormInline />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
