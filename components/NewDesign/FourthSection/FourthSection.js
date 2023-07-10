import React, { useEffect, useState } from "react";
import styles from "./FourthSection.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Popup from "../../Popup/Popup";

function SyllabusNew({
  syllabus,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  software,
  advSyllabus,
  dataScienceCounselling,
  pop,
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
  const [Beginner, setBeginner] = useState(true);
  const [Advanced, setAdvanced] = useState(false);
  const [Pop, setPop] = useState(false);

  useEffect(() => {
    if (Advanced) {
      setState(advSyllabus);
    } else {
      setState(syllabus);
    }
  });

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
          <Form
            dataScience={dataScience}
            downloadBrochure
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <div className={styles.project}>
        <h2 className={styles.h1}>A Roadmap For Success</h2>
        <p className={styles.ptop}>
          Our comprehensive curriculum, designed for professionals
        </p>
      </div>{" "}
      <section className={styles.Syllabus}>
        <div className={styles.syllabusLeft}>
          {software ? (
            <>
              <div className={styles.boxBlueB}>
                <p className={styles.BoxP}>
                  How much do you rate yourself in programming?
                </p>
                {/* {Pop ? (
                  <p className={styles.BoxP}>
                    First Rate yourself in Programming
                  </p>
                ) : (
                  ""
                )} */}
                <div className={styles.FlexInput}>
                  <input
                    id="Data Science Program"
                    value="Data Science & Artificial Intelligence Courses "
                    name="platform"
                    required
                    type="radio"
                    onClick={() => {
                      setBeginner(true);
                      setAdvanced(false);
                      setPop(false);
                    }}
                    className={styles.btnRadio}
                  />
                  &nbsp;1 &nbsp; &nbsp;
                  <br />
                  <input
                    id="Software (DSA & System Design)"
                    value="Software (DSA & System Design)"
                    name="platform"
                    required
                    type="radio"
                    onClick={() => {
                      setBeginner(true);
                      setAdvanced(false);
                      setPop(false);
                    }}
                    className={styles.btnRadio}
                  />
                  &nbsp;2 &nbsp; &nbsp;
                  <br />
                  <input
                    id="Data Science Program"
                    value="Data Science & Artificial Intelligence Courses "
                    name="platform"
                    required
                    type="radio"
                    onClick={() => {
                      setBeginner(true);
                      setAdvanced(false);
                      setPop(false);
                    }}
                    className={styles.btnRadio}
                  />
                  &nbsp;3 &nbsp; &nbsp;
                  <br />
                  <input
                    id="Data Science Program"
                    value="Data Science & Artificial Intelligence Courses "
                    name="platform"
                    required
                    type="radio"
                    onClick={() => {
                      setBeginner(false);
                      setAdvanced(true);
                      setPop(false);
                    }}
                    className={styles.btnRadio}
                  />
                  &nbsp;4 &nbsp; &nbsp;
                  <br />
                  <input
                    id="Data Science Program"
                    value="Data Science & Artificial Intelligence Courses "
                    name="platform"
                    required
                    type="radio"
                    onClick={() => {
                      setBeginner(false);
                      setAdvanced(true);
                      setPop(false);
                    }}
                    className={styles.btnRadio}
                  />
                  &nbsp;5 &nbsp;
                  <br />
                </div>
              </div>{" "}
              <div className={styles.syllabusWrapper}>
                <div className={styles.Tab}>
                  <div>
                    <span
                    onClick={() => {
                      setPop(true);
                      setBeginner(true);
                      setAdvanced(false);
                    }}
                      className={Beginner ? styles.ActiveSpan : styles.span}
                    >

                      Beginner
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        setPop(true);
                        setBeginner(false);
                      setAdvanced(true);
                      }}
                      className={Advanced ? styles.ActiveSpan : styles.span}
                    >
                      Advanced
                    </span>
                  </div>
                </div>
                <div className={styles.syllabusContent}>
                  {" "}
                  {state.map((syllabusData, i) => {
                    const { Module0 } = syllabusData;

                    return (
                      <div key={Module0.title}>
                        <div className={styles.QOuter}>
                          <div className={styles.QInner}>
                            <div className={styles.line}></div>
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
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
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
            </>
          )}
          <button onClick={popupShow}>
            Download Detailed Syllabus
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
            <h4>Request More Information</h4>
            <Form
              dataScienceCounselling={dataScienceCounselling}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
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
