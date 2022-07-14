import React, { useRef, useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Typed from "typed.js";
import { FaChevronDown,FaBell } from "react-icons/fa";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const FirstSection = () => {
  const el = useRef(null);
  const fancyText = [
    "10,000+ Careers Reshaped",
    "300% Highest Salary Hike",
    "97% Average Salary Hike",
    "250+ Hiring Partners",
  ];
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

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: fancyText, // Strings to display: ;
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={styles.First}>
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
      <div className={styles.leftSide}>
        <p className={styles.FirstP}>Get Guaranteed Career Transition From</p>
        <h1>India’s Best Domain Specialized Program <span style={{color:"#2d97de"}}>For Experienced Professionals</span></h1>
        <p className="pTopF">
          Use your domain expertise to build a meaningful career.
        </p>
        <b><span ref={el}></span></b>
        <div className={styles.btnWrapper}>
          <a href="#course"><button className={styles.outLineBtn}>
            Courses <FaChevronDown className="bIcon" />
          </button></a>
          <button  onClick={popupShow} className={styles.btn}>
            Enquire Now <FaBell className="bIcons" />
          </button>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};

export default FirstSection;
