import React, { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { FiDownload } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import Image from "next/image";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
  const [value, setValue] = useState(3.2);

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
      setValue(1.1);
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
      <h2>Our Course</h2>

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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (7) </h5>
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (1) </h5>
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (7) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (7) </h5>
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (4) </h5>
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                      link2,
                      tagHead,
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Data Science (7) </h5>
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h5>Full Stack (1) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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
              <h5>Full Stack (3) </h5>
              <div className={styles.gridPanel}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
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
                            <p className={styles.tagHead}>{tagHead}</p>
                            <div className={styles.headWrapper}>
                              <h6 className={styles.mainHead}>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                            <hr className={styles.hr} />
                            <div className={styles.PointWrap}>
                              {" "}
                              <p>
                                <BiTimeFive className={styles.checkCircle} />
                                {para[0]}
                              </p>
                              <hr className={styles.vrLine} />
                              <p>7- 9 month</p>
                            </div>

                            <p className={styles.singleP}>
                              <TbCurrencyRupee className={styles.checkCircle} />
                              {para[2]}
                            </p>
                            <hr className={styles.hr1} />
                          </div>
                          <div className={styles.btnWrapper}>
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
                            <hr className={styles.btnLine} />
                            <a href={link1} className={styles.link1}>
                              <button className={styles.fillBtn}>
                                Enquire Now{" "}
                                <BsFillBellFill className={styles.bellIcon} />
                              </button>
                            </a>
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