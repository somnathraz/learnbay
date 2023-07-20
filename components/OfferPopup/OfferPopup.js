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
  BAFamily,
  WebDev,
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
      <div className={open ? styles.OfferPopup : styles.hide}>
        <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
        {BAFamily ? (
          <>
            {" "}
            <div className={styles.Offer}>
              <h6>
              Elevate your skills and career- become an expert of technological advancements
              </h6>
              <p>Available Batch Details :</p>
              {/* <li>
                <b>Weekend Afternoon</b>: 7th May, 12:30 PM to 4 PM
              </li> */}
              {/* <li>
                <b>Weekday Morning</b>: 27th June, 8 AM to 10 AM
              </li> */}
              <li>
                <b>Weekday Evening</b>: 18th August, 8 PM to 10 PM
              </li>
              {/* <li><b>{batch3}</b>{batch33}</li> */}
              <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
              <a href="/submit-info" target="_blank">
                <button onClick={handelOpen} style={{ width: "100%" }}>
                  Apply For Scholarship Now!
                </button>
              </a>
            </div>{" "}
          </>
        ) : (
          <>
            {WebDev ? (
              <>
                <div className={styles.Offer}>
                  <h6>
                    Kickstart your Tech Career with Full Stack Web Development
                    Program
                  </h6>
                  {/* <p><b>{p1}</b></p> */}
                  <p>Available Batch Details :</p>
                  {/* <p>{p3}</p> */}
                  <li>
                    <b>Weekday Evening</b>: 29th May, 8 PM to 10 PM
                  </li>

                  {/* <li><b>{batch3}</b>{batch33}</li> */}
                  <p style={{ fontSize: "12px" }}>
                    *Terms & Conditions applied.
                  </p>
                  <a href="/submit-info" target="_blank">
                    <button onClick={handelOpen} style={{ width: "100%" }}>
                      Apply For Scholarship Now!
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <>
                {offer ? (
                  <>
                    <div className={styles.Offer}>
                      <h6>
                        Upskill with DSA and System Design - Software
                        Development Course
                      </h6>
                      {/* <p><b>{p1}</b></p> */}
                      <p>Available Batch Details :</p>
                      {/* <p>{p3}</p> */}
                      <li>
                        <b>Weekday Evening</b>: 28th July, 8 PM to 10 PM
                      </li>
                      <li>
                        <b>Weekend Morning</b>: 30th July, 8:30 AM to 12 PM
                      </li>
                      {/* <li><b>{batch3}</b>{batch33}</li> */}
                      <p style={{ fontSize: "12px" }}>
                        *Terms & Conditions applied.
                      </p>
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
                      <h6>
                        Special programming session starts from 19th to 21th of
                        June from 8 AM to 10 AM
                      </h6>

                      <p>Available Batch Details :</p>
                      <li>
                        <b>Weekday Morning</b>: 28th July, 8 AM to 10 AM
                      </li>
                      <li>
                        <b>Weekend Morning</b>: 30th July, 8:30 AM to 12 PM
                      </li>
                      {/* <li><b>{batch3}</b>{batch33}</li> */}
                      <p style={{ fontSize: "12px" }}>
                        *Terms & Conditions applied.
                      </p>
                      <a href="/submit-info" target="_blank">
                        <button onClick={handelOpen} style={{ width: "100%" }}>
                          Apply For Scholarship Now!
                        </button>
                      </a>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default OfferPopup;
