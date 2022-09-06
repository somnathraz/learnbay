import React, { useEffect } from "react";
import styles from "./ProjectPopup.module.scss";

import {IoClose} from "react-icons/io5"

const ProjectPopup = (props) => {
  let color = "transparent";
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

       <div className={styles.InnerGrid}>
        <div className={styles.imgWrap}>
          <img src={props.imgsrc}  alt="data science course in bangalore"/>
        </div>
        <div className={styles.contentWrap}>
         <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp" width="205px" height="auto"  alt="data science course in bangalore"/>
         <h5  >{props.title}</h5>
         <p>{props.desc}</p>
        </div>
         
       </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProjectPopup;
