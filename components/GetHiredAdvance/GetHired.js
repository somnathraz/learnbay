import React, { useState, useEffect } from "react";
import styles from "./GetHired.module.css";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";


const GetHired = () => {
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.CInner}>
        <h4>Program Highlights</h4>
        {/* <p className="pBot">Work on live projects to get hired at:</p> */}
      </div>
      <div className={styles.imageBox}>
        <div className={styles.left}>
          <div className={styles.top}>
         <p>Weekday Batches: 7.5 Months</p>
<p>Monday – Friday – 2 hours every day</p>
          </div>
          <div className={styles.middle}>
<p>100% Interview Guarantee</p>
          </div>
          <div className={styles.bottom}>
          <p>12+ Real Time Project from AI and ML</p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
          <p>Weekend Batches: 9 Months<br /></p>
          <p>Saturday & Sunday – 3.5 hours every day</p>
          </div>
          <div className={styles.middle}>
            <p>Special Classes for non-programmers</p>
          </div>
          <div className={styles.bottom}>
<p>From Basics to Advance AI modules</p>
          </div>
        </div>
        <div className={styles.right}>
        <div>
        <p>Course Fee</p>
        <h4 className={styles.righth}>₹79,000</h4>
        <p>3 Year Subscription</p>
        <button onClick={popupShow} style={{margin:"auto", marginBottom:"20px"}}>Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHired;
