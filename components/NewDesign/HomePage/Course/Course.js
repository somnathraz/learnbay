import React, { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popup from "../../../Popup/Popup";
import Form from "../../../Form/Form";

import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";
import { FaDownload } from "react-icons/fa";

const Course = ({ dataScience, radio, dataScienceCounselling, organicADS, dataScienceGeneric }) => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.2);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();

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
  const filtteredStackF = StackD.filter((post) => post.tag === "Full stack");

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setValue(1.03);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.6);
    } else if (width <= 800) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(2.8);
    } else if (width <= 1281) {
      setValue(2.9);
    }
  });

  // useEffect(() => {
  //   let width = window.innerWidth;
  //   if (width < 960) {
  //     setTab(true);
  //   }
  // });

  return (
    <div className={styles.Course} id="course">
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
            titleCourse={titleCourse}
            brochureLink={brochureLinks}
            dataScience={dataScience}
            dataScienceGeneric={dataScienceGeneric}
            dataScienceCounselling={dataScienceCounselling}
            radio={radio}
            downloadBrochure
          />
        </div>
      </Popup>
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
              <h5>Data Science & AI (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredForProgrammersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredStackF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      link2,
                      tagHead,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
              <h5>Data Science & AI (10) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredNonProgrammerD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      link2,
                      tagHead,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
            Software Development
          </span>
          {Stack ? (
            <div className={styles.mPanel}>
              <h5>Software Development (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredStackF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      link2,
                      tagHead,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
              setStack(false);
              setGuarantee(true);
            }}
            className={Guarantee ? styles.ActiveSpan : styles.span}
          >
            Master Program
          </span>
          {Guarantee ? (
            <div className={styles.mPanel}>
              <h5>Data Science & AI (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      link2,
                      tagHead,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      link2,
                      tagHead,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
            <div className={styles.mPanel}>
              <h5>Data Science & AI (10) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredViewAllF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredViewAllF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              className={styles.courseImg}
                              alt="data science course"
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <h6 className={styles.mainHead}>{title}</h6>
                            <h6>{title1}</h6>
                            <hr className={styles.hr} />
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
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <h5>Data Science & AI (10) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredViewAllD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredViewAllF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
          {oneYear ? (
            <>
              <h5>Data Science & AI (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredForProgrammersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredForProgrammersF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
          {nonTech ? (
            <>
              <h5>Data Science & AI (10) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredNonProgrammerD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
              <h5>Data Science & AI (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={value}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Software Development (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredJobGuaranteeF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
          {Stack ? (
            <>
              <h5>Software Development (4) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.03 : 3.1}
                  spaceBetween={mobile ? 10 : 20}
                  pagination={{
                    clickable: true,
                  }}
                  grabCursor={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {filtteredStackF.map((viewAllData) => {
                    const {
                      id,
                      title,
                      title1,
                      img,
                      para,
                      link1,
                      titleCourse,
                      brochureLinks,
                      courseTime,
                    } = viewAllData;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <div key={id} className={styles.SliderWrap}>
                          <a href={link1} className={styles.imgWrap}>
                            <Image
                              src={img}
                              layout="intrinsic"
                              width="423px"
                              height="252px"
                              alt="data science course"
                              className={styles.courseImg}
                            />
                          </a>
                          <div className={styles.contentBox}>
                            {/* <p className={styles.tagHead}>{tagHead}</p> */}
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.paraDiv}>
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]} | {courseTime}
                              </p>
                              <p>
                                <AiOutlineFundProjectionScreen
                                  className={styles.checkCircle}
                                  style={{ color: "#edb552" }}
                                />
                                {para[1]}
                              </p>
                              <p className={styles.singleP}>
                                <TbCurrencyRupee
                                  className={styles.checkCircle}
                                />
                                {para[2]}
                              </p>
                            </div>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
                            {/* <a href={link2} target="_blank">
                              <button
                                className="outLineBtn"
                              >
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a> */}
                            <a
                              onClick={() => {
                                setTitleCourse(titleCourse);
                                setBrochureLinks(brochureLinks);
                                popupShow();
                              }}
                            >
                              <button className="outLineBtn">
                                Brochure
                                <FaDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                            <hr className={styles.btnLine} />
                            {organicADS ? (
                              <a
                                onClick={() => {
                                  setTitleCourse(titleCourse);
                                  setBrochureLinks(brochureLinks);
                                  popupShow();
                                }}
                              >
                                <button className={styles.fillBtn}>
                                  View Details
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            ) : (
                              <a href={link1} className={styles.link1}>
                                <button className={styles.fillBtn}>
                                  View Details{" "}
                                  <TbListDetails className={styles.bellIcon} />
                                </button>
                              </a>
                            )}
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
        </div>
      </div>
    </div>
  );
};

export default Course;
