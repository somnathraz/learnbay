import React, { useRef, useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Typed from "typed.js";
import {  FaArrowRight,
  FaDownload, } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const FirstSection = ({
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
  const el = useRef(null);
  const fancyText = [
    "10,000+ Careers Reshaped",
    "300% Highest Salary Hike",
    "100% Guaranteed Interview Referrals",
    "250+ Hiring Partners",
  ];
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [spaceBetween, setSpaceBetween] = useState(50);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(3);
      setSpaceBetween(20);
    }
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
        {mobile ? (
          <p className={styles.FirstP}>{mTopPara} <br /> {mTopPara1}</p>
          
        ) : (
          <p className={styles.FirstP}>{deskTopPara} <br /> {deskTopPara1}</p>
          
        )}
        <h1>
          {title}<span style={{color:"#2d97de"}}> {spanTitleText}</span>
        </h1> 
        <p className="pTopF">
          {desc}
        </p>
        <b><span ref={el}></span></b>
        <div className={styles.ButtonDiv}>
          <div className={styles.btnWrapper}>
            <button onClick={popupShow}>Apply for Counselling <FaArrowRight style={{ marginLeft: "10px" }} /></button>
          </div>
          <div className={styles.btnWrapper}>
            <a href={srcD} target="_blank"><button className="buttonline">Download Brochure <FaDownload style={{ marginLeft: "10px" }} /></button></a>
          </div>
        </div>
        <p className={styles.hPara}>Our Alumni Worked At</p>
        <div className={styles.bottom}>
          <Swiper
            spaceBetween={mobile ? 30 : spaceBetween}
            centeredSlides={true}
            slidesPerView={mobile ? 3 : slidesPerView}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {mobile ? (
              <>
                {" "}
                <SwiperSlide>
                  <Image
                    src="/4(2).png"
                    alt="Google"
                    width={mobile ? "90" : "150"}
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Flipkart.png"
                    alt="Google"
                    width="120"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Myntra.png"
                    alt="Google"
                    width="120"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Microsoft.png"
                    alt="Flipkart"
                    width="120"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/9-1.png"
                    alt="Facebook Logo"
                    objectFit="contain"
                    width="120"
                    height="80"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/mmt.png"
                    alt="Facebook Logo"
                    objectFit="contain"
                    width="120"
                    height="80"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Adobe-logo.png"
                    alt="Facebook Logo"
                    objectFit="contain"
                    width="120"
                    height="80"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/cred.png"
                    alt="Facebook Logo"
                    objectFit="contain"
                    width="120"
                    height="80"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/broker.png"
                    alt="Facebook Logo"
                    objectFit="cover"
                    width="140"
                    height="80"
                  />
                </SwiperSlide>
              </>
            ) : (
              <>
                {" "}
                <SwiperSlide>
                  <Image
                    src="/4(2).png"
                    alt="Google"
                    width="80"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Flipkart.png"
                    alt="Google"
                    width="120"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Google.png"
                    alt="Google"
                    width="150"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/Microsoft.png"
                    alt="facebook"
                    width="150"
                    height="40"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/Myntra.png" alt="Paytm" width="140" height="44" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/9-1.png" alt="Zoho" width="140" height="48" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/mmt.png" alt="Zoho" width="140" height="48" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/Adobe-logo.png" alt="Zoho" width="140" height="48" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/cred.png" alt="Zoho" width="140" height="48" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/broker.png" alt="Zoho" width="140" height="48" />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          src={src}
          alt={alt}
          quality={100}
          layout="intrinsic"
          width="600"
          height="550"
        />
      </div>
    </div>
  );
};

export default FirstSection;
