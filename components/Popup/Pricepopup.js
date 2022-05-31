import React, { useState, useEffect } from "react";
import styles from "./Popup.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const PricePopup = (props) => {
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.popupInnersW}>
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
            props.priceChange(false);
          }}
        />

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PricePopup;
