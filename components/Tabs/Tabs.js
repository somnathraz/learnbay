import React, { useState, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import TabData from "./TabData";
import styles from "./Tabs.module.css";
import { BsDot } from "react-icons/bs";

const Tabs = ({ handleIcon }) => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
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
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <>
            {mobile ? (
              <span
                key={TabData[0].id}
                id="0"
                onMouseOver={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
                onClick={() => setViewAll(!viewAll)}
                className={viewAll ? styles.spanActive : styles.span}
              >
                {TabData[0].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[0].id}
                id="0"
                onMouseOver={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
                className={viewAll ? styles.spanActive : styles.span}
              >
                {TabData[0].title}
                <IoIosArrowForward />
              </span>
            )}

            {viewAll ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science and AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-software-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/artificial-intelligence-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/dsa-system-design">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>DSA & System Design</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[1].id}
                id="1"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
                className={oneYear ? styles.spanActive : styles.span}
                onClick={() => setOneYear(!oneYear)}
              >
                {TabData[1].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[1].id}
                id="1"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(false);
                }}
                className={oneYear ? styles.spanActive : styles.span}
              >
                {TabData[1].title}
                <IoIosArrowForward />
              </span>
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science Foundation Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science & AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/business-analytics-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Business Analytics Master Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Analytics Program</h5>
                        <span>
                          180+ Hours <BsDot /> 5 & 6.5 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-for-bfsi-professional">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Science and AI Program for BFSI Professionals
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/hr-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>HR Analytics Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/marketing-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Marketing Analytics Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[2].id}
                id="2"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setGuarantee(false);
                  setStack(false);
                }}
                onClick={() => setNonTech(!nonTech)}
                className={nonTech ? styles.spanActive : styles.span}
              >
                {TabData[2].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[2].id}
                id="2"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setGuarantee(false);
                  setStack(false);
                }}
                className={nonTech ? styles.spanActive : styles.span}
              >
                {TabData[2].title}
                <IoIosArrowForward />
              </span>
            )}

            {nonTech ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-software-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development Program</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/dsa-system-design">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>DSA & System Design</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[3].id}
                id="3"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(true);
                  setStack(false);
                }}
                onClick={() => setGuarantee(!Guarantee)}
                className={Guarantee ? styles.spanActive : styles.span}
              >
                {TabData[3].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[3].id}
                id="3"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(true);
                  setStack(false);
                }}
                className={Guarantee ? styles.spanActive : styles.span}
              >
                {TabData[3].title}
                <IoIosArrowForward />
              </span>
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[4].id}
                id="4"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(true);
                }}
                onClick={() => setStack(!Stack)}
                className={Stack ? styles.spanActive : styles.span}
              >
                {TabData[4].title}
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[4].id}
                id="4"
                onMouseOver={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setGuarantee(false);
                  setStack(true);
                }}
                className={Stack ? styles.spanActive : styles.span}
              >
                {TabData[4].title}
                <IoIosArrowForward />
              </span>
            )}
            {Stack ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science Foundation Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science & AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>

                  <a href="/full-stack-software-development-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/business-analytics-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Business Analytics Master Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Analytics Program</h5>
                        <span>
                          180+ Hours <BsDot /> 5 & 6.5 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-for-bfsi-professional">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Science and AI Program for BFSI Professionals
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/hr-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>HR Analytics Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/marketing-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Marketing Analytics Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/dsa-system-design">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>DSA & System Design</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        </div>
        {mobile ? (
          ""
        ) : (
          <div className={styles.middlePanel}>
            {viewAll ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science and AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-software-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/artificial-intelligence-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/dsa-system-design">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          DSA & <br />
                          System Design
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science Foundation Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science & AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/business-analytics-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>
                          Business Analytics
                          <br /> Master Program
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Analytics
                          <br /> Program
                        </h5>
                        <span>
                          180+ Hours <BsDot /> 5 & 6.5 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-for-bfsi-professional">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Science and AI Program
                          <br /> for BFSI Professionals
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/hr-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          HR Analytics
                          <br /> Program
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/marketing-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Marketing Analytics
                          <br /> Program
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {nonTech ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-software-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development Program</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/dsa-system-design">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          DSA & <br />
                          System Design
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
            {Stack ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Data Science Foundation Program</h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/artificial-intelligence-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance AI & ML Program For Tech Professionals</h5>
                        <span>
                          350+ Hours <BsDot /> 9 & 11 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/full-stack-web-development-program">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Web Development Program</h5>
                        <span>
                          200+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/dsa-system-design">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>
                          DSA & <br />
                          System Design
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 6 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Advance Data Science & AI Program</h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-ai-for-managers">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Data Science and AI for Managers & Leaders</h5>
                        <span>
                          400+ Hours <BsDot /> 11 & 13 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-science-ai-masters-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5> Data Science and AI Master Program</h5>
                        <span>
                          500+ Hours <BsDot /> 13 & 15 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/full-stack-software-development-program">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>Full Stack Software Development</h5>
                        <span>
                          300+ Hours <BsDot /> 8 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Analytics <br /> Program
                        </h5>
                        <span>
                          180+ Hours <BsDot /> 5 & 6.5 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/business-analytics-certification-course">
                    <div className={styles.Program}>
                      <div className={styles.ProLeft}>
                        <h5>
                          Business Analytics
                          <br /> Master Program
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Analytics
                          <br /> Program
                        </h5>
                        <span>
                          180+ Hours <BsDot /> 5 & 6.5 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="/data-science-for-bfsi-professional">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Data Science and AI Program
                          <br /> for BFSI Professionals
                        </h5>
                        <span>
                          250+ Hours <BsDot /> 7 & 9 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/hr-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          HR Analytics
                          <br /> Program
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={styles.Row}>
                  <a href="/marketing-analytics">
                    <div
                      className={styles.Program}
                      onClick={() => handleIcon(false)}
                    >
                      <div className={styles.ProLeft}>
                        <h5>
                          Marketing Analytics
                          <br /> Program
                        </h5>
                        <span>
                          200+ Hours <BsDot /> 5 & 7 Months{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
