import React, { useEffect, useState } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";

function DomainSection({
  dataScience,
  BAdomain,
  imgDomain,
  Blockchain,
  Cloud,
  Software,
}) {
  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLink, setBrochureLink] = useState();
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <div className={styles.sliderBox}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScience={dataScience}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      {Software ? (
        <>
          <div className={styles.bulb}>
            <div className={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SW+Dev+Master+Domain+Electives.png"
                layout="intrinsic"
                loading="lazy"
                width="671"
                height="704"
                alt="Bulb"
              />
            </div>
            <p className={styles.bgP}>Become a domain expert</p>
          </div>
          <div>
            <section>
              <div className={styles.Section1}>
                <h2 className={styles.h1}>
                  <span className={styles.h1Span}>Domain Electives</span>
                </h2>
                <div className={styles.Testimonial}>
                  <div className={styles.swiperleft}>
                    <Swiper
                      slidesPerView={mobile ? 1.1 : 2}
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
                        <div className={styles.mainSliderYellow}>
                          <div className={styles.number}>
                            <p>#1</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Cloud & Devops</p>
                          </div>
                          <div>
                            <ul
                              style={{ padding: "0px 0px 0px 20px" }}
                              className={styles.para}
                            >
                              <li>
                                Work on 14+ real-time projects & case studies
                              </li>
                              <li>
                                Designed for software developers, devops
                                engineers, project managers etc
                              </li>
                              <li>
                                Upgrade your software skills with cloud
                                infrastructure, automation, team collaboration,
                                and industry-relevant tools and techniques
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              onClick={popupShow}
                              className={styles.fillBtn}
                            >
                              Download Brochure
                              <FaDownload style={{ marginLeft: "10px" }} />
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSliderYellow}>
                          <div className={styles.number}>
                            <p>#2</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Product Management</p>
                          </div>
                          <div>
                            <ul
                              style={{ padding: "0px 0px 0px 20px" }}
                              className={styles.para}
                            >
                              <li>
                                Work on 14+ real-time projects & case studies
                              </li>
                              <li>
                                Designed for product manager, business analyst,
                                software engineers, etc
                              </li>
                              <li>
                                Learn software development skills and product
                                management strategies for creating and managing
                                successful tech products
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              onClick={popupShow}
                              className={styles.fillBtn}
                            >
                              Download Brochure
                              <FaDownload style={{ marginLeft: "10px" }} />
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSliderYellow}>
                          <div className={styles.number}>
                            <p>#3</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Blockchain</p>
                          </div>
                          <div>
                            <ul
                              style={{ padding: "0px 0px 0px 20px" }}
                              className={styles.para}
                            >
                              <li>
                                Work on 14+ real-time projects & case studies
                              </li>
                              <li>
                                Designed for software developers, blockchain
                                developers, IT professionals, etc
                              </li>
                              <li>
                                Master tech by learning advanced software
                                devlopment skills & specialized blockchain
                                knowledge & applications
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              onClick={popupShow}
                              className={styles.fillBtn}
                            >
                              Download Brochure
                              <FaDownload style={{ marginLeft: "10px" }} />
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={styles.slide}>
                        <div className={styles.mainSliderYellow}>
                          <div className={styles.number}>
                            <p>#4</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>MERN Stack</p>
                          </div>
                          <div>
                            <ul
                              style={{ padding: "0px 0px 0px 20px" }}
                              className={styles.para}
                            >
                              <li>
                                Work on 14+ real-time projects & case studies
                              </li>
                              <li>
                                Designed for full stack developer, web
                                developer, software engineer, etc
                              </li>
                              <li>
                                Acquire a diverse range of technical skills
                                required for full stack web development using
                                MERN stack
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              onClick={popupShow}
                              className={styles.fillBtn}
                            >
                              Download Brochure
                              <FaDownload style={{ marginLeft: "10px" }} />
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          {Cloud ? (
            <>
              <div className={styles.bulb}>
                <div className={styles.img}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Domain-Electives-Left-Guy.png"
                    layout="intrinsic"
                    loading="lazy"
                    width="671"
                    height="704"
                    alt="Bulb"
                  />
                </div>
                <p className={styles.bgP}>Become a domain expert</p>
              </div>
              <div>
                <section>
                  <div className={styles.Section1}>
                    <h2 className={styles.h1}>
                      <span className={styles.h1Span}>Domain Electives</span>
                    </h2>
                    <div className={styles.Testimonial}>
                      <div className={styles.swiperleft}>
                        <Swiper
                          slidesPerView={mobile ? 1.1 : 2}
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
                            <div className={styles.mainSliderYellow}>
                              <div className={styles.number}>
                                <p>#1</p>
                                <hr className={styles.hr} />
                              </div>
                              <div className={styles.imgP}>
                                <p>Cloud & Devops</p>
                              </div>
                              <div>
                                <ul
                                  style={{ padding: "0px 0px 0px 20px" }}
                                  className={styles.para}
                                >
                                  <li>
                                    Work on 14+ real-time projects & case
                                    studies
                                  </li>
                                  <li>
                                    Designed for software developers, devops
                                    engineers, project managers etc
                                  </li>
                                  <li>
                                    Upgrade your software skills with cloud
                                    infrastructure, automation, team
                                    collaboration, and industry-relevant tools
                                    and techniques
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <button
                                  onClick={popupShow}
                                  className={styles.fillBtn}
                                >
                                  Download Brochure
                                  <FaDownload style={{ marginLeft: "10px" }} />
                                </button>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <>
              {Blockchain ? (
                <>
                  <div className={styles.bulb}>
                    <div className={styles.img}>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Domain-Electives-Left-Guy.png"
                        layout="intrinsic"
                        loading="lazy"
                        width="671"
                        height="704"
                        alt="Bulb"
                      />
                    </div>
                    <p className={styles.bgP}>Become a domain expert</p>
                  </div>
                  <div>
                    <section>
                      <div className={styles.Section1}>
                        <h2 className={styles.h1}>
                          <span className={styles.h1Span}>
                            Domain Electives
                          </span>
                        </h2>
                        <div className={styles.Testimonial}>
                          <div className={styles.swiperleft}>
                            <Swiper
                              slidesPerView={mobile ? 1.1 : 2}
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
                                <div className={styles.mainSliderYellow}>
                                  <div className={styles.number}>
                                    <p>#1</p>
                                    <hr className={styles.hr} />
                                  </div>
                                  <div className={styles.imgP}>
                                    <p>Blockchain</p>
                                  </div>
                                  <div>
                                    <ul
                                      style={{ padding: "0px 0px 0px 20px" }}
                                      className={styles.para}
                                    >
                                      <li>
                                        Work on 14+ real-time projects & case
                                        studies
                                      </li>
                                      <li>
                                        Designed for software developers,
                                        blockchain developers, IT professionals,
                                        etc
                                      </li>
                                      <li>
                                        Master tech by learning advanced
                                        software devlopment skills & specialized
                                        blockchain knowledge & applications
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <button
                                      onClick={popupShow}
                                      className={styles.fillBtn}
                                    >
                                      Download Brochure
                                      <FaDownload
                                        style={{ marginLeft: "10px" }}
                                      />
                                    </button>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <>
                  {BAdomain ? (
                    <>
                      <div className={styles.bulb}>
                        <div className={styles.img}>
                          <Image
                            src={imgDomain}
                            layout="intrinsic"
                            loading="lazy"
                            width="671"
                            height="704"
                            alt="Bulb"
                          />
                        </div>
                        <p className={styles.bgP}>Become a domain expert</p>
                      </div>
                      <div>
                        <section>
                          <div className={styles.Section1}>
                            <h2 className={styles.h1}>
                              <span className={styles.h1Span}>
                                Domain Electives
                              </span>
                            </h2>
                            <div className={styles.Testimonial}>
                              <div className={styles.swiperleft}>
                                <Swiper
                                  slidesPerView={mobile ? 1.1 : 2}
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
                                    <div className={styles.mainSliderYellow}>
                                      <div className={styles.number}>
                                        <p>#1</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>BFSI</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            Designed for executive-level BFSI
                                            professionals, accountant, etc.
                                          </li>
                                          <li>
                                            Learn finance analysis tools,
                                            generate data insights, integrate
                                            data-driven methods to future-proof
                                            business operations
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "BFSI (Banking, Finance, Services and Insurance) Domain"
                                            );
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSliderOrange}>
                                      <div className={styles.number}>
                                        <p>#2</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Sales</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For business development associate,
                                            managers,customer success etc.{" "}
                                          </li>
                                          <li>
                                            Learn sales data analysis tools and
                                            apply your data-driven knowledge to
                                            drive strategic development
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                                            );
                                            setTitleCourse("Sales Domain");
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSlidergreen}>
                                      <div className={styles.number}>
                                        <p>#3</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Marketing</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For marketing professionals or
                                            aspiring ones
                                          </li>
                                          <li>
                                            Learn about the newest marketing
                                            technology & business analyst
                                            techniques that drive strategic
                                            development
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                                            );
                                            setTitleCourse("Marketing Domain");
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSliderRed}>
                                      <div className={styles.number}>
                                        <p>#4</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>HR</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For HR recruiter, manager, talent
                                            acquisition specialist, hr
                                            generalist etc.
                                          </li>
                                          <li>
                                            Learn HR analytics and apply to
                                            business management through hands-on
                                            projects and gain practical
                                            experience
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                                            );
                                            setTitleCourse("HR Domain");
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.bulb}>
                        <div className={styles.img}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Domain-Electives-Left-Guy.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="671"
                            height="704"
                            alt="Bulb"
                          />
                        </div>
                        <p className={styles.bgP}>Become a domain expert</p>
                      </div>
                      <div>
                        <section>
                          <div className={styles.Section1}>
                            <h2 className={styles.h1}>
                              <span className={styles.h1Span}>
                                Domain Electives
                              </span>
                            </h2>
                            <div className={styles.Testimonial}>
                              <div className={styles.swiperleft}>
                                <Swiper
                                  slidesPerView={mobile ? 1.1 : 2}
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
                                    <div className={styles.mainSliderYellow}>
                                      <div className={styles.number}>
                                        <p>#1</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>BFSI</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            Designed for executive-level BFSI
                                            professionals, accountant, etc.
                                          </li>
                                          <li>
                                            Learn finance analysis tools,
                                            generate data insights, integrate
                                            data-driven methods to future-proof
                                            business operations
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "BFSI (Banking, Finance, Services and Insurance) Domain"
                                            );
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSliderOrange}>
                                      <div className={styles.number}>
                                        <p>#2</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Manufacturing</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For production manager, quality
                                            control inspector, manufacturing
                                            engineer etc.
                                          </li>
                                          <li>
                                            Discover cutting-edge tech like AI
                                            and data science, and develop
                                            strategic skills as a business or
                                            data analyst
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "Manufacturing, Mechanical and Telecom Domain"
                                            );
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSlidergreen}>
                                      <div className={styles.number}>
                                        <p>#3</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Energy, Oil and Gas</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For petroleum engineers,
                                            environmental specialists, operation
                                            managers etc.
                                          </li>
                                          <li>
                                            Master your data analysis skills and
                                            create a dynamic dashboard to
                                            describe your insights
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "Energy, Oil and Gas Domain"
                                            );
                                            popupShow();
                                          }}
                                          className={styles.fillBtn}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSliderRed}>
                                      <div className={styles.number}>
                                        <p>#4</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Healthcare</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            For pharmacists, therapists, health
                                            administrators, etc.
                                          </li>
                                          <li>
                                            Achieve success in a competitive
                                            market by utilizing advanced tools
                                            and methodology to leverage
                                            technology and gain a competitive
                                            edge
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "Healthcare, Pharma and Clinical Research Domain"
                                            );
                                            popupShow();
                                          }}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                  <SwiperSlide className={styles.slide}>
                                    <div className={styles.mainSliderRed}>
                                      <div className={styles.number}>
                                        <p>#5</p>
                                        <hr className={styles.hr} />
                                      </div>
                                      <div className={styles.imgP}>
                                        <p>Supply Chain, E-Commerce & Retail</p>
                                      </div>
                                      <div>
                                        <ul
                                          style={{
                                            padding: "0px 0px 0px 20px",
                                          }}
                                          className={styles.para}
                                        >
                                          <li>
                                            Work on 20+ real time case studies
                                            and assignments
                                          </li>
                                          <li>
                                            Learn Supply Chain, E-Commerce &
                                            Retail analysis tools, generate data
                                            insights, integrate data-driven
                                            methods to future-proof business
                                            operations
                                          </li>
                                        </ul>
                                      </div>
                                      <div>
                                        <button
                                          onClick={() => {
                                            setBrochureLink(
                                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
                                            );
                                            setTitleCourse(
                                              "Retail, Ecommerce and Supply Chain Domain"
                                            );
                                            popupShow();
                                          }}
                                        >
                                          Download Brochure
                                          <FaDownload
                                            style={{ marginLeft: "10px" }}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default DomainSection;
