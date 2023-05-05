import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import Form from "../../../Form/Form";
import Popup from "../../../Popup/Popup";
import { FaCheckCircle, FaBell, FaPhone } from "react-icons/fa";

const FirstSection = ({dataScience}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
    <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <Form dataScience={dataScience}  />
        </div>
      </Popup>
      <div className={styles.First}>
        <div className={styles.FirstLeft}>
        </div>
        <div className={styles.secondLeft}>
        <h4>Fill this form to get free learning resources</h4>
          <Form learning jobDescription={true} workExperience={true}/>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.LeftSectionIcon}>
          <h4>24X7 Learner’s Support</h4>
          <p><b>Talk to our team directly</b></p>
          <div className={styles.IconBox}>
            <div className={styles.flexIcon}>
              <FaCheckCircle className={styles.circleCheck}/>
              <p className={styles.pIcons}>Unlimited mentor support & career guidance</p>
            </div>
            <div className={styles.flexIcon}>
              <FaCheckCircle className={styles.circleCheck}/>
              <p className={styles.pIcons}>Quick resolution to all customer queries</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSectionIcon}>
        <button onClick={popupShow} className={styles.Btn}>
        Talk to a Learning Expert <FaPhone className="bIconS" />
            </button>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
