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

function DomainSection({ dataScience, BAdomain,imgDomain }) {
  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

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
          <Form dataScience={dataScience} downloadBrochure />
        </div>
      </Popup>
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
                            <p>BFSI</p>
                          </div>
                          <div>
                          <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>Designed for executive-level BFSI professionals, accountant, etc.</li>
                            <li>Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations</li>
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
                        <div className={styles.mainSliderOrange}>
                          <div className={styles.number}>
                            <p>#2</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Sales</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For business development associate, managers,customer success etc. </li>
                            <li>Learn sales data analysis tools and apply your data-driven knowledge to drive strategic development</li>
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
                        <div className={styles.mainSlidergreen}>
                          <div className={styles.number}>
                            <p>#3</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Marketing</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For marketing professionals or aspiring ones</li>
                            <li>Learn about the newest marketing technology & business analyst techniques that drive strategic development</li>
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
                        <div className={styles.mainSliderRed}>
                          <div className={styles.number}>
                            <p>#4</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>HR</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For HR recruiter, manager, talent acquisition specialist, hr generalist etc.</li>
                            <li>Learn HR analytics and apply to business management through hands-on projects and gain practical experience</li>
                            </ul>
                          </div>
                          <div>
                            <button onClick={popupShow}>
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
                            <p>BFSI</p>
                          </div>
                          <div>
                          <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>Designed for executive-level BFSI professionals, accountant, etc.</li>
                            <li>Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations</li>
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
                        <div className={styles.mainSliderOrange}>
                          <div className={styles.number}>
                            <p>#2</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Manufacturing</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For production manager, quality control inspector, manufacturing engineer etc.</li>
                            <li>Discover cutting-edge tech like AI and data science, and develop strategic skills as a business or data analyst</li>
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
                        <div className={styles.mainSlidergreen}>
                          <div className={styles.number}>
                            <p>#3</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Energy, Oil and Gas</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For petroleum engineers, environmental specialists, operation managers etc.</li>
                            <li>Master your data analysis skills and create a dynamic dashboard to describe your insights</li>
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
                        <div className={styles.mainSliderRed}>
                          <div className={styles.number}>
                            <p>#4</p>
                            <hr className={styles.hr} />
                          </div>
                          <div className={styles.imgP}>
                            <p>Healthcare</p>
                          </div>
                          <div>
                            <ul style={{padding:"0px 0px 0px 20px"}} className={styles.para}>
                            <li>Work on 20+ real time case studies and assignments</li>
                            <li>For pharmacists, therapists, health administrators, etc.</li>
                            <li>Achieve success in a competitive market by utilizing advanced tools and methodology to leverage technology and gain a competitive edge</li>
                            </ul>
                          </div>
                          <div>
                            <button onClick={popupShow}>
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
      )}
    </div>
  );
}

export default DomainSection;
