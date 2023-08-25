import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import { FaDownload, FaPlayCircle } from "react-icons/fa";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import Image from "next/image";
import Typed from "typed.js";
import VideoPopup from "../../VideoPopup/VideoPopup";

function FirstSection({
  dataScience,
  softwareBtnHide,
  second,
  idss,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  srcD,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  FirstTyped,
  SecondTyped,
  ThirdTyped,
  ibmOnly,
  ParaBot,
  isFSD,
}) {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  const el = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [FirstTyped, SecondTyped, ThirdTyped], // Strings to display
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
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

      {/* For Mobile View */}

      <div className={styles.FirstLeft}>
        <p className={styles.ptopC}>{firstTopPara}</p>
        <h1 className={styles.h1}>
          {firstHeading} <span className={styles.h1Span}>{firstToparaImg}</span>
        </h1>
        <p
          className={styles.ptop}
          style={{ color: "#000", marginBottom: "10px" }}
        >
          {ParaBot}
        </p>
        <div className={styles.IBMlogoPlay}>
          <Image
            src={FirstRightImg}
            width="508"
            height="327"
            layout="intrinsic"
            alt="data science course"
          />
        </div>

        {isFSD ? (
          ""
        ) : (
          <>
            <p className={styles.ptop} style={{ color: "#000" }}>
              In Collaboration With
            </p>
            <div className={styles.IBMlogo}>
              {ibmOnly ? (
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/ibm-single-home.png"
                  width="127"
                  height="51"
                  layout="intrinsic"
                  alt="data science course"
                />
              ) : (
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
                  width="283"
                  height="51"
                  layout="intrinsic"
                  alt="data science course"
                />
              )}
            </div>
          </>
        )}

        <div className={styles.animationTextWrap}>
          <span ref={el} className={styles.animationText}></span>
        </div>

        <div className={styles.logos}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Career-report-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.66/5</b>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Google-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.8/5</b>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Switchup-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.79/5</b>
            </p>
          </div>
        </div>
        <div className={styles.btnImage}>
          <button onClick={popupShow} className={styles.fillBtn}>
            Brochure
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
          {softwareBtnHide ? (
            <></>
          ) : (
            <button onClick={videoSHow}>
              Intro Video{" "}
              <FaPlayCircle style={{ marginLeft: "10px", fontSize: "22px" }} />{" "}
            </button>
          )}
        </div>
      </div>

      {/* For desktop View */}

      <div className={styles.secondLeft}>
        <div className={styles.PlayImg}>
          <Image
            src={FirstRightImg}
            width="580"
            height="450"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
        {/* <div className={styles.logosD}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Career-report-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.66/5</b>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Google-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.8/5</b>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Switchup-logo.png"
              width="40"
              height="40"
              layout="intrinsic"
              alt="data science course"
              className={styles.courseimg}
            />
            <p className={styles.ptopR}>
              <b>4.79/5</b>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FirstSection;
