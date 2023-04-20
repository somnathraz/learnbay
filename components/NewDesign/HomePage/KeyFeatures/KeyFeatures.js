import React, { useState } from "react";
import styles from "./KeyFeatures.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaDownload } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";
import Popup from "../../../Popup/Popup";
import Form from "../../../Form/Form";
import Image from "next/image";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { FiVideo } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";

const KeyFeatures = ({dataScience, radio}) => {
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <section className={styles.Features}>
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
            <Form dataScience={dataScience} downloadBrochure radio={radio}/>
          </div>
        </Popup>
        <div>
          <h6 className={styles.topHead}>Why Learnbay?</h6>
          <div className={styles.FeatureWrap}>
            <div className={styles.LeftWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whylearnbay-left-image.png"
                width={686}
                height={393}
              />
            </div>
            <div className={styles.rightSide}>
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                // slidesPerColumn={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                        width={30}
                        height={49}
                        layout="intrinsic"
                      /> */}
                      <AiOutlinePieChart className={styles.numberIcon} />
                    </div>
                    <p>
                      India’s top rated domain specialized program for
                      professional
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png"
                        width={37}
                        height={50}
                        layout="intrinsic"
                      /> */}
                      <BsBriefcase className={styles.numberIcon} />
                    </div>

                    <p>
                      Secure your dream job even after taking a break in your
                      career
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png"
                        width={37}
                        height={50}
                        layout="intrinsic"
                      /> */}
                      <BsCodeSquare className={styles.numberIcon} />
                    </div>
                    <p>
                      Transition to a successful career with zero coding
                      experience
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                        width={41}
                        height={50}
                        layout="intrinsic"
                      /> */}
                      <FiVideo className={styles.numberIcon} />
                    </div>
                    <p>
                      Live and interactive classes designed specially for
                      professionals
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                        width={41}
                        height={50}
                        layout="intrinsic"
                      /> */}
                      <TbCertificate className={styles.numberIcon} />
                    </div>
                    <p>
                      Get dual certificate from IBM & Microsoft upon course
                      completion
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <div className={styles.slideWrap}>
                    <div className={styles.number}>
                      {/* <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                        width={41}
                        height={50}
                        layout="intrinsic"
                      /> */}
                      <GiTeacher className={styles.numberIcon} />
                    </div>
                    <p>
                      Get on-demand doubt-solving with experienced industry
                      mentors
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.RightWrap}>
        <h2 className={styles.h1}>
        300+ placement and hiring partners
        </h2>
        <div className={styles.imgWrap}>
          <div className={styles.imgShowD}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Network-reach-company-logos.png"
              width="1148"
              height="414"
              layout="intrinsic"
              alt="Learnbay"
            />
          </div>
          <div className={styles.imgShowM}></div>
          <button onClick={popupShow} className={styles.btn}>
            Download Placement Report{" "}
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
