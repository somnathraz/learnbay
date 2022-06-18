import { BsArrowRightShort } from "react-icons/bs";
import styles from "./DomainSliderHome.module.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const DomainSliderHome = ({ CareerHead, changeReview }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.DomainSliderHome}>
        <h4>Domain Specialisation</h4>
        <p>Select Multiple Domain & Work On Capstone Projects</p>
        <Swiper
            slidesPerView={mobile ? 1 : 4}
            spaceBetween={mobile ? 10 : 10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {changeReview ? (
              <>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Healthcare, Pharma<br />
                  & Clinical Research Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Banking, Finance and<br /> Insurance Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Media, Hospitality and<br /> Transportation Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Sales, Marketing and<br /> HR Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Energy, Oil and<br /> Gas Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Healthcare, Pharma and Clinical<br /> Research Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Development & Testing<br /> Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Retail, Ecommerce and<br /> Supply chain Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Automotive, IOT and<br /> Embedded Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Manufacturing, Mechanical and<br /> Telecom Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Cloud & Devops<br /> Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                </>
            ) : (
              <>
              <SwiperSlide className={styles.slide}>
                  <p>
                  Healthcare, Pharma<br />
                  & Clinical Research Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Banking, Finance and<br /> Insurance Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Media, Hospitality and<br /> Transportation Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Sales, Marketing and<br /> HR Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Energy, Oil and<br /> Gas Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Healthcare, Pharma and Clinical<br /> Research Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Development & Testing<br /> Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Retail, Ecommerce and<br /> Supply chain Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Automotive, IOT and<br /> Embedded Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Manufacturing, Mechanical and<br /> Telecom Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Cloud & Devops<br /> Domain
                  </p>
                  <button className={styles.btn}>
              Know More
              <BsArrowRightShort className={styles.bIcon} />
            </button>
                </SwiperSlide>
                </>
            )}
          </Swiper>
          <div className={styles.buttonF}>
        <button className={styles.btn}>
        Talk To Industry Experts Now
              <BsArrowRightShort className={styles.bIcon} />
            </button>
            </div>
    </section>
  )
}

export default DomainSliderHome
