import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import TabData from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);

  const onClickHandler = (id) => {
    let spanId = id;
  };
  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <>
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
          </>
        </div>
        <div className={styles.middlePanel}></div>
        {viewAll ? (
          <div className={styles.RowWrap}>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.RowWrap}>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.RowWrap}>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {manager ? (
          <div className={styles.RowWrap}>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.RowWrap}>
            <div className={styles.Row}>
              <div className={styles.Program}>
                <div className={styles.ProLeft}>
                  <Image
                    src="/DATA-SCIENCE-AND-AI.webp"
                    width="300"
                    height="80"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
