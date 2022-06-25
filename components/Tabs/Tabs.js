import React, { useState, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import TabData from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
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
                onClick={() => setViewAll(!viewAll)}
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
                  setManager(false);
                  setGuarantee(false);
                }}
              >
                {TabData[0].title}
                <IoIosArrowForward />
              </span>
            )}

            {viewAll ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DATA-SCIENCE-AND-AI.png"
                        width="180"
                        height="55"
                        />
                    </div>
                  </div></a>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                  <a href="/data-science-ai-for-managers" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Data-Science-and-AI-for.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/job-guarantee-or-money-back-data-science-ai-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                  <a href="/business-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/BA.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DA.png"
                        width="180"
                        height="55"
                        layout="intrinsic"
                      />
                    </div>
                  </div></a>
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
                  setManager(false);
                  setGuarantee(false);
                }}
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
                  setManager(false);
                  setGuarantee(false);
                }}
              >
                {TabData[1].title}
                <IoIosArrowForward />
              </span>
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => setNonTech(!nonTech)}
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
                  setManager(false);
                  setGuarantee(false);
                }}
              >
                {TabData[2].title}
                <IoIosArrowForward />
              </span>
            )}

            {nonTech ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DATA-SCIENCE-AND-AI.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                  <a href="/business-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/BA.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DA.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
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

                  setGuarantee(false);
                }}
                onClick={() => setManager(!manager)}
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
                  setManager(true);
                  setGuarantee(false);
                }}
              >
                {TabData[3].title}
                <IoIosArrowForward />
              </span>
            )}
            {manager ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                  <a href="/data-science-ai-for-managers" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Data-Science-and-AI-for.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
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
                  setManager(false);
                  setGuarantee(true);
                }}
                onClick={() => setGuarantee(!Guarantee)}
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
                  setManager(false);
                  setGuarantee(true);
                }}
              >
                {TabData[4].title}
                <IoIosArrowForward />
              </span>
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/job-guarantee-or-money-back-data-science-ai-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.png"
                        width="180"
                        height="55"
                      />
                    </div>
                  </div></a>
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
                  <a href="/data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DATA-SCIENCE-AND-AI.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                  <a href="/data-science-ai-for-managers" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Data-Science-and-AI-for.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/job-guarantee-or-money-back-data-science-ai-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                  <a href="/business-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/BA.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DA.png"
                        width="300"
                        height="80"
                        layout="intrinsic"
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {nonTech ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DATA-SCIENCE-AND-AI.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                  <a href="/business-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/BA.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/data-analytics-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/DA.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {manager ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/advance-data-science-certification-courses" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Advance-Data-Science.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                  <a href="/data-science-ai-for-managers" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Data-Science-and-AI-for.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
                <div className={styles.Row}>
                  <a href="/artificial-intelligence-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/Artificial-Intelligence.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
                </div>
              </div>
            ) : (
              ""
            )}
            {Guarantee ? (
              <div className={styles.RowWrap}>
                <div className={styles.Row}>
                  <a href="/job-guarantee-or-money-back-data-science-ai-certification-course" target="_blank"><div className={styles.Program}>
                    <div className={styles.ProLeft}>
                      <Image
                        src="/JOB.png"
                        width="300"
                        height="80"
                      />
                    </div>
                  </div></a>
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
