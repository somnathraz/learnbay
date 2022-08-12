import React, { useState, useEffect } from "react";
import styles from "./GetHired.module.css";
import Popup from "/components/Popup/Popup";
import Form from "/components/Form/Form";

const GetHired = ({
  WeekdayBatchDate,
  WeekendBatchDate,
  Project,
  Classes,
  OneLine,
  Interview,
  Fee,
  Subscription,
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });



  return (
    <section className={styles.GetHired}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.CInner}>
        <h4>Program Highlights</h4>
      </div>
      <div className={styles.imageBox}>
        <div className={styles.left}>
          <div className={styles.top}>
          <p>{WeekdayBatchDate}</p>
          </div>
          <div className={styles.middle}>
            <p>{Project}</p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.middle}>
          <p>{WeekendBatchDate}</p>
          </div>
          <div className={styles.top}>
            <p>{Classes}</p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
          <p>{OneLine}</p>
          </div>
          <div className={styles.middle}>
          <p>{Interview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHired;
