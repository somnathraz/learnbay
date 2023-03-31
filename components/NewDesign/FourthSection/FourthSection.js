import React, { useEffect, useState } from "react";
import styles from "./FourthSection.module.css";
import { MdOutlineLiveTv, MdOutlineLaptopMac } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";
import Form from "../../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import Popup from "../../Popup/Popup";

function SyllabusNew({
  syllabus,
  syllabusDesc,
  popupHead,
  dataScience,
  project,
  hours,
  srcD,
  fullStack,
  fsdBrochure,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  const [state, setState] = useState(syllabus);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
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
          <Form dataScience={dataScience} downloadBrochure/>
        </div>
      </Popup>
      <div className={styles.careerPro}>
        <h1 className={styles.h11}>
          Career Service
          <span className={styles.h1Span}> PRO</span>
        </h1>
        <div className={styles.sliderBox}>
          <div className={styles.bulb}>
            {/* <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bulb.png"
              layout="intrinsic"
              loading="lazy"
              width="244"
              height="264"
              alt="Bulb"
            /> */}
          </div>
          <div>
            <section>
              <div className={styles.Section1}>
                <div className={styles.Testimonial}>
                  <div className={styles.swiperleft}>
                    <Swiper
                      slidesPerView={mobile ? 1 : 2}
                      spaceBetween={mobile ? 10 : 15}
                      scrollbar={{ draggable: true }}
                      autoplay={{
                        delay: 2500,
                      }}
                      grabCursor={true}
                      modules={[Autoplay, Scrollbar]}
                      autoPlay={true}
                      className="mySwiper"
                    >
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSlider}>
                          <div className={styles.imgP}>
                            {/* <TbNumber1 className={styles.blueIcon}/> */}
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                              width="40"
                              height="80"
                              layout="intrinsic"
                              alt="data science course"
                            />
                            <p>Getting started with solidity</p>
                          </div>
                          <div>
                            <p className={styles.para}>
                              Solidity is an object-oriented programming
                              language for implementing smart contracts on
                              various blockchain platforms, most notably,
                              Ethereum. It was developed.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSlider}>
                          <div className={styles.imgP}>
                            {/* <TbNumber2 className={styles.orangeIcon}/> */}
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png"
                              width="60"
                              height="80"
                              layout="intrinsic"
                              alt="data science course"
                            />
                            <p>Getting started with solidity</p>
                          </div>
                          <div>
                            <p className={styles.para}>
                              Solidity is an object-oriented programming
                              language for implementing smart contracts on
                              various blockchain platforms, most notably,
                              Ethereum. It was developed.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSlider}>
                          <div className={styles.imgP}>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png"
                              width="60"
                              height="80"
                              layout="intrinsic"
                              alt="data science course"
                            />
                            <p>Getting started with solidity</p>
                          </div>
                          <div>
                            <p className={styles.para}>
                              Solidity is an object-oriented programming
                              language for implementing smart contracts on
                              various blockchain platforms, most notably,
                              Ethereum. It was developed.
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <p className={styles.infop}>CURRICULUM</p>
        <h2 className={styles.h1}>Explore our syllabus</h2>
      </div>{" "}
      <section className={styles.Syllabus}>
        <div className={styles.syllabusLeft}>
          {state.map((syllabusData, i) => {
            const { Module0 } = syllabusData;

            return (
              <div key={Module0.title}>
                <div className={styles.QOuter}>
                  <div className={styles.QInner}>
                    <div className={styles.line}>
                      {/* <BsFillCircleFill className={styles.bIcons} /> */}
                    </div>
                    <div
                      className={styles.FaqWrapper}
                      onClick={() => {
                        let id = i;
                        handleChange(id);
                      }}
                      key={Module0.title}
                    >
                      {Module0.open ? (
                        <div className={styles.quesO}>
                          <h2>{Module0.title}</h2>

                          <span>
                            {Module0.open ? (
                              <FaChevronUp className="icon" />
                            ) : (
                              <FaChevronDown className="icon" />
                            )}
                          </span>
                        </div>
                      ) : (
                        <div className={styles.ques}>
                          <h2>{Module0.title}</h2>
                          <span>
                            {Module0.open ? (
                              <FaChevronUp className="icon" />
                            ) : (
                              <FaChevronDown className="icon" />
                            )}
                          </span>
                        </div>
                      )}

                      {Module0.open ? (
                        <div className={styles.ans}>
                          <p>{Module0.desc}</p>
                          {Module0.content.map((content, i) => {
                            return (
                              <div key={content.chap.title}>
                                <h5>{content.chap.title}</h5>
                                {content.chap.desc.map((desc, i) => {
                                  return (
                                    <div key={i}>
                                      {desc === "" ? (
                                        ""
                                      ) : (
                                        <li key={desc}>{desc}</li>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button onClick={popupShow}>
            Download detailed syllabus
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <div className={styles.button}>
          <div className={styles.formWrapper}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Form-Girl.png"
              width={535}
              height={239}
              layout="intrinsic"
              alt="girl"
            />
            <h4>Request more information</h4>
            <Form
              dataScience={dataScience}
              fullStack={fullStack}
              syllabus={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SyllabusNew;
