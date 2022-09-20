import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import { FaChevronDown, FaBell } from "react-icons/fa";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import Image from "next/image";

const FirstSection = ({dataScience}) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
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
    <div className={styles.First}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups}   dataScience={dataScience} />
        </div>
      </Popup> 
      <div className={styles.leftSide}>
        <h1>
          #1 Domain Specialised Certification Program For{" "}
          <span>Working Professionals</span>
        </h1>
        <p className={styles.pTop}>
          Use your domain expertise to build a meaningful career. Crack interview
          in top product based MNCs and MAANG with confidence
        </p>

        <div className={styles.btnWrapper}>
          <a href="#course">
            <button className={styles.outLineBtn}>
              Courses <FaChevronDown className="bIconS" />
            </button>
          </a>
          <button onClick={popupShow} className={styles.btn}>
            Enquire Now <FaBell className="bIcons" />
          </button>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h5>1:1</h5>
            <p>Dedicated Mentorship</p>
          </div>
          <div className={styles.middle}>
            <h5>100%</h5>
            <p>Assured Interview</p>
          </div>
          <div className={styles.right}>
            <h5>7+</h5>
            <p>Domain Electives</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp"
          width="870"
          height="666"
          layout="intrinsic"
           alt="data science course in bangalore"
        />
      </div>
    </div>
  );
};

export default FirstSection;
