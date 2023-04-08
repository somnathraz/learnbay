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
  serviceBasic,
  popupHead,
  dataScience,
  project,
  hours,
  srcD,
  fullStack,
  fsdBrochure,
  careerH1,
  careerSpan,
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
          <Form dataScience={dataScience} downloadBrochure />
        </div>
      </Popup>
      <div className={styles.careerPro}>
        <h1 className={styles.h11}>
          {careerH1}
          <span className={styles.h1Span}>{careerSpan}</span>
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
                  {serviceBasic ? (
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
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                                width="40"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>Enjoy 3 years of Career Service Access</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Unleash your career potential with three years
                                of unlimited job access, interview support, and
                                profile review.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png"
                                width="120"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>Get 3 mock interviews with industry leaders</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Master the art of data science interviews and
                                stay ahead of the curve with mockups and
                                industry insights
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
                              <p>Resume build up session</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Craft a powerful resume showcasing your
                                expertise in data science and AI to stand out
                                from the competition.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                                width="70"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>Get 5-8 interview calls</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Receive 5-8 interview calls from a diverse pool
                                of interested employers/recruiters.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  ) : (
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
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                                width="40"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>3+ years of Career Service Access</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Unleash your career potential with unlimited job
                                access, interview support, and profile review.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png"
                                width="120"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>6 Mock Interviews with Industry Leaders</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Master the art of blockchain interviews and stay
                                ahead of the curve with mockups and industry
                                insights
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
                              <p>Resume Build Up Session</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Craft a powerful resume showcasing your
                                expertise in blockchain development to stand out
                                from the competition.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                                width="70"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>1:1 Review Session</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Elevate your LinkedIn profile and resume with
                                personalized guidance from industry experts.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/5.png"
                                width="60"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>Unlimited Interview Calls</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Receive unlimited interview calls from a diverse
                                pool of interested employers/recruiters.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                          <div className={styles.mainSlider}>
                            <div className={styles.imgP}>
                              <Image
                                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/6.png"
                                width="60"
                                height="80"
                                layout="intrinsic"
                                alt="data science course"
                              />
                              <p>Unlimited Career Assistance</p>
                            </div>
                            <div>
                              <p className={styles.para}>
                                Receive continuous support and guidance in your
                                job search until you successfully secure a job.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  )}
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
          {dataScience ? (
            <a href={srcD} target="_blank">
              <button>
                Download detailed syllabus
                <FaDownload style={{ marginLeft: "10px" }} />
              </button>
            </a>
          ) : (
            <button onClick={popupShow}>
              Download detailed syllabus
              <FaDownload style={{ marginLeft: "10px" }} />
            </button>
          )}
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
