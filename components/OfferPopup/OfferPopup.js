import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

const OfferPopup = ({ link, title, p1, p2, batch1, batch2 }) => {
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
        <p>{p1}</p>
        <p>{p2}</p>
        <li>{batch1}</li>
        <li>{batch2}</li>

        <p className={styles.faded}>** Terms & Conditions applied.</p>
        <button onClick={handelOpen}>
          <a href={link} target="_blank">
            Apply For Scholarship Now!
          </a>
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;
