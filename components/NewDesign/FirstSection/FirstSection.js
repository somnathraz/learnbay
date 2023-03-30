import React, { useState } from "react";
import styles from "./FirstSection.module.css";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import Image from "next/image";

function FirstSection() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
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
          <Form />
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
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSectionPlay.png"
            width="486"
            height="230"
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
        <p className={styles.ptop}>
          Designed for professionals seeking to accelerate their careers in the
          emerging field of blockchain technology.
        </p>
        <div className={styles.logos}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Career-report-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.66/5</b>
            </p>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Google-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.8/5</b>
            </p>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Switchup-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.79/5</b>
            </p>
          </div>
        </div>
        <button onClick={popupShow}>
          Download Brochure
          <FaDownload style={{ marginLeft: "10px" }} />
        </button>
      </div>
      <div className={styles.secondLeft}>
        <div className={styles.PlayImg}>
        <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSectionPlay.png"
            width="486"
            height="230"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
      <div className={styles.logosD}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Career-report-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.66/5</b>
            </p>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Google-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.8/5</b>
            </p>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Switchup-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopC}>
              <b>4.79/5</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
