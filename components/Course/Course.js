import React, { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { FiDownload } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);

  const filtteredViewAllD = viewAllD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredViewAllF = viewAllD.filter(
    (post) => post.tag === "Full stack"
  );
  const filtteredForProgrammersD = ForProgrammersD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredForProgrammersF = ForProgrammersD.filter(
    (post) => post.tag === "Full stack"
  );
  const filtteredNonProgrammerD = ForNonProgrammerD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredJobGuaranteeD = JobGuaranteeD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredJobGuaranteeF = JobGuaranteeD.filter(
    (post) => post.tag === "Full stack"
  );
  const filtteredStackD = StackD.filter((post) => post.tag === "Data science");
  const filtteredStackF = StackD.filter((post) => post.tag === "Full stack");

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  return (
    <div className={styles.Course} id="course">
      <h2>Industry Accredited Certification For Professionals</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            Popular Courses
          </span>
          {oneYear ? (
            <div className={styles.mPanel}>
              <h5>Data Science (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredForProgrammersD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (2) </h5>
              <div className={styles.gridPanelN}>
                {filtteredForProgrammersF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div className={styles.gridImg}>
                        <img
                          src={img}
                          layout="intrinsic"
                          className={styles.courseImg}
                        />
                      </div>
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            className={nonTech ? styles.ActiveSpan : styles.span}
          >
            Data Science & AI
          </span>
          {nonTech ? (
            <div className={styles.mPanel}>
              <h5>Data Science (6) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredNonProgrammerD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            Full Stack Development
          </span>
          {Stack ? (
            <div className={styles.mPanel}>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanelN}>
                {filtteredStackF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            className={Guarantee ? styles.ActiveSpan : styles.span}
          >
            100% Job Guaranteed
          </span>
          {Guarantee ? (
            <div className={styles.mPanel}>
              <h5>Data Science (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (1) </h5>
              <div className={styles.gridPanelN}>
                {filtteredJobGuaranteeF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            View All
          </span>
          {viewAll ? (
            <>
              <h5>Data Science (7) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredViewAllD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanelN}>
                {filtteredViewAllF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <h5>Data Science (7) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredViewAllD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                {filtteredViewAllF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {oneYear ? (
            <>
              <h5>Data Science (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredForProgrammersD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (2) </h5>
              <div className={styles.gridPanel}>
                {filtteredForProgrammersF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {nonTech ? (
            <>
              <h5>Data Science (6) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredNonProgrammerD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </>
          ) : (
            ""
          )}
          {Guarantee ? (
            <>
              <h5>Data Science (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1 : 3}
                  spaceBetween={mobile ? 10 : 20}
                  navigation={true}
                  grabCursor={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id}>
                          <img
                            src={img}
                            layout="intrinsic"
                            className={styles.courseImg}
                          />
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                            <p>
                              <BiTimeFive className={styles.checkCircle} />
                              {para[0]}
                            </p>
                            <p>
                              <AiOutlineFundProjectionScreen
                                className={styles.checkCircle}
                                style={{ color: "#edb552" }}
                              />
                              {para[1]}
                            </p>
                            <p>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <div className={styles.btnWrapper}>
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                              <a href={link2} target="_blank">
                                <button
                                  className="outLineBtn"
                                  style={{ padding: "8px 15px" }}
                                >
                                  Brochure
                                  <FiDownload
                                    className="bIcon"
                                    style={{ color: "#2979AD" }}
                                  />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (1) </h5>
              <div className={styles.gridPanel}>
                {filtteredJobGuaranteeF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {Stack ? (
            <>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                {filtteredStackF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <img
                        src={img}
                        layout="intrinsic"
                        className={styles.courseImg}
                      />
                      <div className={styles.contentBox}>
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#edb552" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <TbCurrencyRupee className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          <a href={link1}>
                            <button>View Details</button>
                          </a>
                          <a href={link2} target="_blank">
                            <button
                              className="outLineBtn"
                              style={{ padding: "8px 15px" }}
                            >
                              Brochure
                              <FiDownload
                                className="bIcon"
                                style={{ color: "#2979AD" }}
                              />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
