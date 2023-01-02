import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const OfferPopup = ({
  title,
  p1,
  p2,
  p3,
  batch1,
  batch11,
  batch2,
  batch22,
  offer,
  batch3,
  batch33,
}) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10000);
    return;
  }, []);
  return (
    <>
    <div className={open ? styles.OfferPopup : styles.hide} >
      <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
      {offer ? (
            <>
      <div className={styles.Offer}>
        <h6>Ace Your Interview at MAANG with DSA & Software Development Program</h6>
        {/* <p><b>{p1}</b></p> */}
        <p>Available Batch Details :</p>
        {/* <p>{p3}</p> */}
        <li>
          <b>Weekday Morning</b>
          : 4th January (SD), 7 AM to 9 AM
        </li>

        
        {/* <li><b>{batch3}</b>{batch33}</li> */}
        <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
        <a href="/submit-info" target="_blank">
          <button onClick={handelOpen} style={{ width: "100%" }}>
            Apply For Scholarship Now!
          </button>
        </a>
      </div>
      </>
          ) : ( 
            <>
              {" "} 
      <div className={styles.Offer}>
        <h6>Special programming session starts from 3rd to 5th January from 8PM to 10PM</h6>
        {/* <h6>[ Month End Offer- 15% OFF ] Book Your Seat Now</h6> */}
        {/* <p><b>{p1}</b></p> */}
        <p>Available Batch Details :</p>
        {/* <p>{p3}</p> */}
        {/* <li>
          <b>Weekend Morning</b>
          : 9th October, 08:30 AM to 12 PM
        </li> */}
        <li>
          <b>Weekday Evening</b>
          : 6th January, 8 PM to 10 PM
        </li>
        <li>
          <b>Weekend Morning</b>
          : 8th January, 8:30 AM to 12 PM
        </li>
        {/* <li><b>{batch3}</b>{batch33}</li> */}
        <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
        <a href="/submit-info" target="_blank">
          <button onClick={handelOpen} style={{ width: "100%" }}>
            Apply For Scholarship Now!
          </button>
        </a>
      </div>
      </>
          )}
    </div>
    </>
  );
};

export default OfferPopup;
