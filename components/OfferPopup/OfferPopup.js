import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

const OfferPopup = ({ link, title, p1, p2, batch1, batch11, batch2, batch22 }) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
    return;
  }, []);

  return (
    <div className={open ? styles.OfferPopup : styles.hide}>
      <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
      <div className={styles.Offer}>
        <h6>{title}</h6>
        <p><b>{p1}</b></p>
        <p>{p2}</p>
        <li><b>{batch1}</b>{batch11}</li>
        <li><b>{batch2}</b>{batch22}</li>

        <p className={styles.faded}>** Terms & Conditions applied.</p>
        <button onClick={handelOpen}>
          <a href="/submit-info" target="_blank">
            Apply For Scholarship Now!
          </a>
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;
