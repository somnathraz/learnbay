import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Image from "next/image";
import Popup from "/components/Popup/Popup";
import PopupD from "/components/Popup/Popup";
import Form from "/components/Form/Form";

const HeroSection = ({
  deskTopPara,
  title,
  mTitle,
  spanTitleText,
  spanMTitleText,
  desc,
  mTopPara,
  width,
  height,
  src,
  alt,
  srcD,
  deskTopPara1,
  mTopPara1,
  dataScience,
  fullStack,
  fsdBrochure,
  cityText,
}) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const [popupsA, setPopupsA] = useState(false);

  const popupShowA = () => {
    setPopupsA(true);
  };

  const popupShowD = () => {
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
    <section className={styles.wrapper}>
      <Popup trigger={popupsA} setTrigger={setPopupsA} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
            <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form
            popup={true}
            setTrigger={setPopups}
            fullStack={fullStack}
            dataScience={dataScience}
          />
        </div>
      </Popup>
      
      <PopupD trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
            <h5>Download Brochure</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form
            popup={true}
            setTrigger={setPopups}
            fullStack={fullStack}
            dataScience={dataScience}
            downloadBrochure
          />
        </div>
      </PopupD>
      <div className={styles.left}>
        {cityText ? (
           <>
           {mobile ? (
             <p className="pTop">
               <b className="pTopp">{mTopPara}</b> <br />
               <br /> <b className="pTopp">{mTopPara1}</b>
             </p>
           ) : (
             <p className={styles.pTop}>
               {deskTopPara}
               {deskTopPara1}
             </p>
           )}
           {mobile ? (
             <h1>
               {mTitle}
             </h1>
           ) : (
             <h1>
               {title}
             </h1>
           )}
           </>
        ) : (
          <>
        {mobile ? (
          <p className="pTop">
            <b className="pTopp">{mTopPara}</b> <br />
            <br /> <b className="pTopp">{mTopPara1}</b>
          </p>
        ) : (
          <p className={styles.pTop}>
            {deskTopPara}
            {deskTopPara1}
          </p>
        )}
        {mobile ? (
          <h1>
            {mTitle} <span> {spanMTitleText}</span>
          </h1>
        ) : (
          <h1>
            {title} <span> {spanTitleText}</span>
          </h1>
        )}
        </>
        )}

        <p className={styles.pBot}>{desc}</p>
        <div className={styles.ButtonDiv}>
          <div className={styles.btnWrapper}>
            <button onClick={popupShowA}>
              Apply for Counselling
              <FaArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
          <div className={styles.btnWrapper}>
            {fsdBrochure ? (
              <button className="buttonline" onClick={popupShowD}>
                Download Brochure 
                <FaDownload style={{ marginLeft: "10px" }} />
              </button>
            ) : (
              <a href={srcD} target="_blank">
                <button className="buttonline">
                  Download Brochure
                  <FaDownload style={{ marginLeft: "10px" }} />
                </button>
              </a>
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/review-course-round.jpg"
              width={mobile ? 180 : 261}
              height={mobile ? 46.2 : 67}
              layout="intrinsic"
              alt={alt}
            />
          </div>
          <div className={styles.rightBottom}>
            <h5>10k Successful</h5>
            <p>Career Transition</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={src}
          alt={alt}
          layout="intrinsic"
          width={width}
          height={height}
        />
      </div>
    </section>
  );
};

export default HeroSection;
