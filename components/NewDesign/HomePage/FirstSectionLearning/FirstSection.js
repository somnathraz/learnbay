import React, { useState } from "react";
import styles from "./FirstSection.module.css";
import Form from "../../../Form/Form";
import Popup from "../../../Popup/Popup";
import { FaCheckCircle, FaBell } from "react-icons/fa";

const FirstSection = ({ dataScience, dataScienceCounselling }) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply for counselling</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            radio={true}
          />
        </div>
      </Popup>
      <div className={styles.First}>
        <div className={styles.FirstLeft}></div>
        <div className={styles.secondLeft}>
          <h4>Fill this form to get free learning resources</h4>
          <Form learning upSkillingHide={true} />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.LeftSectionIcon}>
          <h4>
            You are eligible for 15 min free Profile review & counselling with
            our career expert.
          </h4>
          <div className={styles.IconBox}>
            <div className={styles.flexIcon}>
              <FaCheckCircle className={styles.circleCheck} />
              <p className={styles.pIcons}>
                Empower your career with our programs, gain industry skills &
                knowledge.
              </p>
            </div>
            <div className={styles.flexIcon}>
              <FaCheckCircle className={styles.circleCheck} />
              <p className={styles.pIcons}>
                equipping you with the skills and knowledge that drive you
                towards success.
              </p>
            </div>
          </div>
          <button onClick={popupShow} className={styles.Btn}>
            Enquire Now <FaBell className="bIconS" />
          </button>
        </div>
        <div className={styles.rightSectionIcon}></div>
      </div>
    </>
  );
};

export default FirstSection;
