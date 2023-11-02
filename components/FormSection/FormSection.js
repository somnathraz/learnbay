import React from "react";
import styles from "./FormSection.module.css";
import { MdCall } from "react-icons/md";
import FormInline from "./FormInline";

const FormSection = (dataScience, dataScienceCounselling) => {
  return (
    <div className={styles.fromWrap}>
      <div className={styles.leftForm}>
        <h5>Apply For Free Career Counselling</h5>
        <a href="tel:+917795687988">
          <button>
            <MdCall />
            +91 77956 87988
          </button>
        </a>
      </div>
      <div className={styles.rightForm}>
        <div className={styles.rightFormWrap}>
          <FormInline
            dataScience={dataScience}
            upSkillingHide={true}
            dataScienceCounselling={dataScienceCounselling}
            radio={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
