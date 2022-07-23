import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Image from "next/image";
import Popup from "/components/Popup/Popup";
import Form from "/components/Form/Form";

const HeroSection = ({
  deskTopPara,
  title,
  spanTitleText,
  desc,
  mTopPara,
  src,
  alt,
  srcD,
  deskTopPara1,
  mTopPara1,
}) => {
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
    <section className={styles.wrapper}>
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
      <div className={styles.left}>
        {mobile ? (
          <p className="pTop">
            <b className="pTopp">{mTopPara}</b> <br />
            <br /> {mTopPara1}
          </p>
        ) : (
          <p className={styles.pTop}>
            {deskTopPara} <br /> {deskTopPara1}
          </p>
        )}

        <h1>
          {title} <span> {spanTitleText}</span>
        </h1>
        <p className={styles.pBot}>{desc}</p>
        <div className={styles.ButtonDiv}>
          <div className={styles.btnWrapper}>
            <button onClick={popupShow}>
              Apply for Counselling
              <FaArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
          <div className={styles.btnWrapper}>
            <a href={srcD} target="_blank">
              <button className="buttonline">
                Download Brochure
                <FaDownload style={{ marginLeft: "10px" }} />
              </button>
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <Image
              src="/review-course-round.jpg"
              width="261"
              height="67"
              layout="intrinsic"
            />
          </div>
          <div className={styles.rightBottom}>
            <h5>1.6k Successful</h5>
            <p>Transition</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={src}
          alt={alt}
          layout="intrinsic"
          width="900"
          height="762"
        />
      </div>
    </section>
  );
};

export default HeroSection;
