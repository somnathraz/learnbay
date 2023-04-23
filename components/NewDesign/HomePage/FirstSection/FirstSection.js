import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import { FaChevronDown, FaBell, FaDownload } from "react-icons/fa";
import Popup from "../../../Popup/Popup";
import Form from "../../../Form/Form";
import Image from "next/image";
import Typed from "typed.js";

const FirstSection = ({ dataScience, radio, first, second, third, idss }) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const el = useRef(null);

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
      strings: [
        "Are you looking to upskill ?",
        "Gain a competitive edge",
        "Land your dream job",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.First}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
          radio={radio}
          dataScience={dataScience}
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form dataScience={dataScience} radio={radio}/>
          </div>
        </Popup>
        <div className={styles.FirstLeft}>
          <div className={styles.animationTextWrap}>
            <span ref={el} className={styles.animationText}></span>
          </div>
          {/* <p className={styles.ptop}>
            Take the first step in your blockchain development journey with our
          </p> */}
          <h1 className={styles.h1}>
            Domain Specialized Certification Program{" "}
            <span className={styles.h1Span}>For Working Professionals</span>
          </h1>
          <div className={styles.IBMlogoPlay}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
              width="580"
              height="450"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <p className={styles.ptop}>In collaboration with</p>
          <div className={styles.IBMlogo}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
              width="283"
              height="51"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <p className={styles.blink}>
          Advance your career by gaining expertise in your field and ace interviews
with India’s leading companies

          </p>
          {/* <div className={styles.line}>
            <img
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Vector-1-line.png"
              width="80px"
            />
          </div> */}
          <div className={styles.btnWrapper}>
            <a href="#course">
              <button className={styles.outLineBtn}>
                Courses <FaChevronDown className="bIconS" />
              </button>
            </a>
            <button onClick={popupShow} className={styles.Btn}>
              Enquire Now <FaBell className="bIconS" />
            </button>
          </div>
        </div>

        <div className={styles.secondLeft}>
          <div className={styles.PlayImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
              width="580"
              height="450"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
