import React, { useEffect } from "react";
import styles from "./Popup.module.scss";
import { IoClose } from "react-icons/io5";

const Popup = (props) => {
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

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
