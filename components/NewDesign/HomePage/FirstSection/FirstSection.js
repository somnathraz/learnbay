import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import { FaChevronDown, FaBell, FaDownload } from "react-icons/fa";
import Popup from "../../../Popup/Popup";
import Form from "../../../Form/Form";
import Image from "next/image";
import TextAnimation from "../../Animation/TextAnimation";

const FirstSection = ({ dataScience, radio,  first,
  second,
  third, }) => {
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
    <>

      <div className={styles.First}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Download Brochure</h5>
            <Form dataScience={dataScience} downloadBrochure />
          </div>
        </Popup>

        <div className={styles.FirstLeft}>
          <p className={styles.ptop}>
            Take the first step in your blockchain development journey with our
          </p>
          <h1 className={styles.h1}>
            Software Development Program with{" "}
            <span className={styles.h1Span}>Specialization in Blockchain</span>
          </h1>
          <div className={styles.IBMlogoPlay}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
              width="627"
              height="425"
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
          Supercharge Your Career Trajectory  <br />
          Learn <TextAnimation
            first={first}
            second={second}
            third={third}
          />{" "}
          for Success.
        </p>
          <div className={styles.line}>
            <img
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Vector-1-line.png"
              width="80px"
            />
          </div>
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
              width="627"
              height="425"
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
