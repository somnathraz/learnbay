import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";

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
  return (
    <>
      <h2 className={styles.h1}>FAQs</h2>
      <div className={styles.Course}>
        <div className={styles.courseM}>
          <div className={styles.courses}>
            <div className={styles.listPanel}>
              <Swiper
                slidesPerView={mobile ? 1 : 3}
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
                </SwiperSlide>
              </Swiper>
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
              {viewAll ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={FaqDatas} />
                </div>
              ) : (
                ""
              )}
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
              {oneYear ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={DomainFaqDatas} />
                </div>
              ) : (
                ""
              )}
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
              {nonTech ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={PaymentFaqDatas} />
                </div>
              ) : (
                ""
              )}
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
              {manager ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={CapstoneFaqDatas} />
                </div>
              ) : (
                ""
              )}
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
              {Assistance ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={jobFaqDatas} />
                </div>
              ) : (
                ""
              )}
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
              {Mentorship ? (
                <div className={styles.gridPanel}>
                  <FAQ FaqData={MentorshipFaqDatas} />
                </div>
              ) : (
                ""
              )}
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
      </div>
    </>
  );
}

export default FAQNew;
