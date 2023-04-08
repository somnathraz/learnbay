import React, { useState } from "react";
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
  CertificationFaqDatas,
  jobFaqDatas,
  MentorshipFaqDatas,
  CapstoneFaqDatas,
  PaymentFaqDatas,
}) {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
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
              <span
                onClick={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
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

              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setManager(false);
                  setGuarantee(false);
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
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(true);
                  setGuarantee(false);
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
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(true);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  Guarantee
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                CERTIFICATION
              </span>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
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
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
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
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
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
            {Guarantee ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={CertificationFaqDatas} />
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
                    setGuarantee(false);
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
                    setOneYear(false);
                    setNonTech(true);
                    setManager(false);
                    setGuarantee(false);
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
                    setGuarantee(false);
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
                    setGuarantee(true);
                    setJobAssistance(false);
                    setMentorship(false);
                    setSupport(false);
                  }}
                  style={
                    Guarantee
                      ? {
                          background: "#E1F1F566",
                          color: "#0072BC",
                          textAlign: "center",
                        }
                      : { background: "none", textAlign: "center" }
                  }
                >
                  CERTIFICATION
                </span>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <span
                  onClick={() => {
                    setViewAll(false);
                    setOneYear(false);
                    setNonTech(false);
                    setManager(false);
                    setGuarantee(false);
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
                    setGuarantee(false);
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
                    setGuarantee(false);
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
            {Guarantee ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={CertificationFaqDatas} />
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
    </>
  );
}

export default FAQNew;
