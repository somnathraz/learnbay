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

function DomainSection({ dataScience }) {
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
          <h5>Apply For Counselling</h5>
          <Form dataScience={dataScience} downloadBrochure />
        </div>
      </Popup>
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
                        <p className={styles.para}>
                          Work on real-time projects using live data from
                          companies like J.P Morgan, HDFC, etc for building
                          recommendation systems, handling chatbots, and
                          upcoming stock market prediction.
                        </p>
                      </div>
                      <div>
                        <button onClick={popupShow} className={styles.fillBtn}>
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderOrange}>
                      <div className={styles.number}>
                        <p>#3</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Manufacturing</p>
                      </div>
                      <div>
                        <p className={styles.para}>
                          A deeper understanding of the manufacturing and
                          telecommunication industries, where you learn in-depth
                          about robotics, novel materials, nanotechnology,
                          computer-aided design, and geomechanics.
                        </p>
                      </div>
                      <div>
                      <button onClick={popupShow} className={styles.fillBtn}>
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlidergreen}>
                      <div className={styles.number}>
                        <p>#4</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Energy, Oil and Gas</p>
                      </div>
                      <div>
                        <p className={styles.para}>
                          Pursue projects on recording sensors in seismic,
                          manufacturing, and exploration operations to Logging
                          While Drilling (LWD) technology, enabling real-time
                          recording of drilling data.
                        </p>
                      </div>
                      <div>
                      <button onClick={popupShow} className={styles.fillBtn}>
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderRed}>
                      <div className={styles.number}>
                        <p>#2</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Healthcare</p>
                      </div>
                      <div>
                        <p className={styles.para}>
                          Any working professional choosing this domain with
                          prior experience will indeed be offered the maximum
                          possible salary hike and job security.
                        </p>
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
    </div>
  );
}

export default DomainSection;
