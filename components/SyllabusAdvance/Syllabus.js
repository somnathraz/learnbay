import React, { useState } from "react";
import styles from "./Syllabus.module.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLiveTv,
  MdOutlineLaptopMac,
} from "react-icons/md";
import { SiCodeproject, SiTimescale } from "react-icons/si";
import Form from "../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";

import { AiOutlineDownload } from "react-icons/ai";
import Popup from "../Popup/Popup";

function Syllabus() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState([
    {
      id: 0,
      open: true,
    },
    {
      id: 1,
      open: false,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
    {
      id: 5,
      open: false,
    },
  ]);
  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          console.log(faq);
          faq.open = !faq.open;
          console.log(faq.open);
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.Syllabus}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Full stack Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>Syllabus</h4>
          </div>
          <div>
            <button className={styles.Button} onClick={popupShow}>
              {" "}
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
        </div>
        <p>
          The Advance Data Science and AI Certification Course
          is curated by leading faculties and industry leaders. Especially, with
          the aim to provide practical learning experience with live interactive
          classes and projects.
        </p>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 0;
                handleChange(id);
              }}
            >
              {state[0].open ? (
                <div className={styles.quesO}>
                  <h2>Module 0 Pre-Preparatory Classes (Programming + Maths)</h2>

                  <span>
                    {state[0].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Module 0 Pre-Preparatory Classes (Programming + Maths)</h2>
                  <span>
                    {state[0].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[0].open ? (
                <div className={styles.ans}>
                  <li>Anaconda Installation</li>
                  <li>Basics of programming</li>
                  <li>Memory Management</li>
                  <li>Compiler and Interpreter</li>
                  <li>Syntax of Python</li>
                  <li>Basics of Statistics</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 1;
                handleChange(id);
              }}
            >
              {state[1].open ? (
                <div className={styles.quesO}>
                  <h2>
                    Module 1 : Python Programming (Basic + Advance)
                  </h2>

                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    Module 1 : Python Programming (Basic + Advance)
                  </h2>
                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[1].open ? (
                <div className={styles.ans}>
                  <li>Git and GitHub</li>
                  <li>Operators + Data Types + Loops</li>
                  <li>Functions + Regular Expression</li>
                  <li>Conditional Statement</li>
                  <li>File & Exceptional Handling</li>
                  <li>Numpy, Pandas, Matplotlib, etc</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 2;
                handleChange(id);
              }}
            >
              {state[2].open ? (
                <div className={styles.quesO}>
                  <h2>Module 2 : Statistics and Machine Learning</h2>

                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Module 2 : Statistics and Machine Learning</h2>
                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[2].open ? (
                <div className={styles.ans}>
                  <li>Linear Algebra, Probability</li>
                  <li>Permutation & Combination</li>
                  <li>Descriptive & Inferential Stats</li>
                  <li>Hypothesis Testing</li>
                  <li>Time Series Analysis</li>
                  <li>ML Algorithms</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 3;
                handleChange(id);
              }}
            >
              {state[3].open ? (
                <div className={styles.quesO}>
                  <h2>
                    Module 3: Industrial Projects &
Capstone Projects
                  </h2>

                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    Module 3: Industrial Projects & Capstone Projects
                  </h2>
                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[3].open ? (
                <div className={styles.ans}>
                  <li>Text Classification</li>
                  <li>Human Activity Recognition</li>
                  <li>Forecasting Business KPI's</li>
                  <li>Credit Risk Analysis</li>
                  <li>Customer Churn Prediction</li>
                  <li>Sentiment Analysis</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 4;
                handleChange(id);
              }}
            >
              {state[4].open ? (
                <div className={styles.quesO}>
                  <h2>Module 4 : Data Science & AI Tools</h2>

                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Module 4 : Data Science & AI Tools</h2>
                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[4].open ? (
                <div className={styles.ans}>
                  <li>Advance excel</li>
                  <li>SQL + MongoDB</li>
                  <li>Tableau + PowerBI</li>
                  <li>Deep Learning + NLP</li>
                  <li>Big Data + Business Analytics</li>
                  <li>Deployment (AWS + GCP)</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 5;
                handleChange(id);
              }}
            >
              {state[5].open ? (
                <div className={styles.quesO}>
                  <h2>Module 5 : Job Orientation (Interview Prep)</h2>

                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Module 5 : Job Orientation (Interview Prep)</h2>
                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[5].open ? (
                <div className={styles.ans}>
                  <li>Resume Built-Up Session</li>
                  <li>1 -1 Mock Interviews</li>
                  <li>Job Referrals</li>
                  <li>LinkedIn Profile Building</li>
                  <li>Alumni Portal Access</li>
                  <li>Target Top MNCs & Startups</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 5;
                handleChange(id);
              }}
            >
              {state[5].open ? (
                <div className={styles.quesO}>
                  <h2>
                    Module 6 : Work on End to End Projects in Partnership With
                    Startups{" "}
                  </h2>

                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    Module 6 : Work on End to End Projects in Partnership With
                    Startups{" "}
                  </h2>
                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[5].open ? (
                <div className={styles.ans}>
                  We help you to work on projects directly with startups so that
                  you get real work experience. You will be building scalable
                  tech products from scratch using full stack technologies and
                  advanced system design concepts. You are recommended to work
                  on minimum 3-4 projects end to end and build a project
                  portfolio to crack coding interviews in top MNCs with
                  confidence.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div> */}

        <div className={styles.white} />
      </div>
      <div className={styles.syllabusRight}>
        <div className={styles.PProgrammain}>
          <div className={styles.PProgram}>
            <p>Program Highlights</p>
          </div>
          <div className={styles.PProgramInner}>
            <p style={{display:"flex"}}>
              <MdOutlineLiveTv className={styles.PIcons} />
              250+ Live sessions
            </p>
            <p style={{display:"flex"}}>
              <SiCodeproject className={styles.PIcons} />
              12+ Industry Projects
            </p>
            <p style={{display:"flex"}}>
              <SiTimescale className={styles.PIcons} />
              3 Year Subscriptions
            </p>
            <p style={{display:"flex"}}>
              <MdOutlineLaptopMac className={styles.PIcons} />
              Live project experience
            </p>
          </div>
        </div>
        <div className={styles.PProgrammain} style={{ marginTop: "20px" }}>
          <div className={styles.PProgram}>
            <p>Request More Information</p>
          </div>
          <div className={styles.PProgramInner}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
