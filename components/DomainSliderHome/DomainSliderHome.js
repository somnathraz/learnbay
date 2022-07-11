import { FaDownload } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import styles from "./DomainSliderHome.module.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const DomainSliderHome = ({ CareerHead, changeReview }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.DomainSliderHome}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <h4>Domain Specialization</h4>
      <p>Select Multiple Domains & Work On Capstone Projects</p>
      <Swiper
        slidesPerView={mobile ? 1 : 4}
        spaceBetween={mobile ? 5 : 5}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <>
          <SwiperSlide className={styles.slide}>
            <p>
              Healthcare, Pharma
              <br />& Clinical Research
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Banking, Finance and
              <br /> Insurance Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Media, Hospitality and
              <br /> Transportation Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Sales, Marketing and
              <br /> HR Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Energy, Oil and
              <br /> Gas Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Development & Testing
              <br /> Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Development+and+Testing+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Retail, Ecommerce and
              <br /> Supply chain Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Automotive, IOT and
              <br /> Embedded Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Automotive%2C+IOT+and+Embedded+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>Manufacturing, Mechanical and Telecom</p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
              Cloud & Devops
              <br /> Domain
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Cloud+and+Devops+Domain.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <p>
            Data Structures <br /> and Algorithms
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/For+MS+Aspirants++AIML.pdf" target="_blank"><button className={styles.btn}>
              Download Brochure
              <FaDownload className={styles.bIcon} />
            </button></a>
          </SwiperSlide>
        </>
      </Swiper>
      <div className={styles.buttonF}>
        <a onClick={popupShow}><button className={styles.btn}>
          Talk To Industry Experts Now
          <FaPhone className={styles.bIcon} />
        </button></a>
      </div>
    </section>
  );
};

export default DomainSliderHome;
