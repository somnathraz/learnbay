import React, { useState, useEffect } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

function FAQNew({
  FaqDatas,
  DomainFaqDatas,
  SupportFaqDatas,
  jobFaqDatas,
  MentorshipFaqDatas,
  CapstoneFaqDatas,
  PaymentFaqDatas,
}) {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Assistance, setJobAssistance] = useState(false);
  const [Mentorship, setMentorship] = useState(false);
  const [Support, setSupport] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  return (
    <>
      <h2 className={styles.h1}>FAQs</h2>
      <div className={styles.Course}>
        <div className={styles.courseM}>
          <div className={styles.courses}>
            <div className={styles.listPanel}>
              <span
                onClick={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  viewAll
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                COURSE RELATED
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setManager(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  oneYear
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                DOMAIN ELECTIVES
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setManager(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  nonTech
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                PAYMENTS AND SCHOLARSHIPS
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(true);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  manager
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                CAPSTONE AND REAL-TIME PROJECTS
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setJobAssistance(true);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  Assistance
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                JOB ASSISTANCE
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setJobAssistance(false);
                  setMentorship(true);
                  setSupport(false);
                }}
                style={
                  Mentorship
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                MENTORSHIPS
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(true);
                }}
                style={
                  Support
                    ? {
                        background: "white",
                        borderLeft: "5px solid #0072BC",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                      }
                    : { background: "none" }
                }
              >
                SUPPORT
              </span>
            </div>
            {viewAll ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={FaqDatas} />
              </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={DomainFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {nonTech ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={PaymentFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Assistance ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={jobFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {manager ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={CapstoneFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Mentorship ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={MentorshipFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Support ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={SupportFaqDatas} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.courseD}>
          <div className={styles.listPanel}>
            <Swiper
              slidesPerView={mobile ? 2 : 2}
              spaceBetween={mobile ? 0 : 15}
              grabCursor={true}
              navigation={true}
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                overflow: "hidden",
                "--swiper-navigation-color": "#0072BC",
                "--swiper-navigation-size": "20px",
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(true);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(false);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    viewAll
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  COURSE RELATED
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(true);
                    setNonTech(false);
                    setManager(false);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    oneYear
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  DOMAIN ELECTIVES
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(true);
                    setManager(false);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    nonTech
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  PAYMENTS AND SCHOLARSHIPS
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(true);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    manager
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  CAPSTONE AND REAL-TIME PROJECTS
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(false);
                    setJobAssistance(true);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    Assistance
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  JOB ASSISTANCE
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(false);
                    setJobAssistance(false);
                    setMentorship(true);
                    setSupport(false);
                  }}
                  style={
                    Mentorship
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  MENTORSHIPS
                </span>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(false);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(true);
                  }}
                  style={
                    Support
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  SUPPORT
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.courses}>
            {viewAll ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={FaqDatas} />
              </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={DomainFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {nonTech ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={PaymentFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {manager ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={CapstoneFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Assistance ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={jobFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Mentorship ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={MentorshipFaqDatas} />
              </div>
            ) : (
              ""
            )}
            {Support ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={SupportFaqDatas} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQNew;
