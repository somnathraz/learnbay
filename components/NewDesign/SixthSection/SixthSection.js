import React, { useEffect, useState } from "react";
import styles from "./SixthSection.module.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { FaQuoteLeft, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import {Scrollbar } from "swiper";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import ProjectPopup from "../ProjectPopup/ProjectPopup";

function SixthSection() {
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

  const [popupsD, setPopupsD] = useState(false);

  const popupShowD = () => {
    setPopupsD(true);
  };

  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <ProjectPopup
        trigger={popupsD}
        setTrigger={setPopupsD}
        desc={desc}
        imgsrc={img}
      />
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form popup={true} downloadBrochure setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.project}>
        <p className={styles.infop}>CURRICULUM</p>
        <h2 className={styles.h1}>Projects</h2>
        <section>
          <div className={styles.Section1}>
            <div className={styles.Testimonial}>
              <div className={styles.swiperleft}>
                <Swiper
                  slidesPerView={mobile ? 1.2 : 4}
                  spaceBetween={mobile ? 10 : 15}
                  scrollbar={{ draggable: true }}
                  grabCursor={true}
                  modules={[Scrollbar]}
                  className="mySwiper"
                >
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.QuoteBlue}>
                        <FaQuoteLeft />
                      </div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="225"
                          height="87"
                          alt="preksha-home"
                        />
                      </div>
                      <div>
                        <p className={styles.para}>
                          BMW allows existing customers to sell used cars but
                          many competitors are now offering better resale
                          values...
                        </p>
                      </div>

                      <div className={styles.name}>
                        <p
                          onClick={() => {
                            popupShowD();
                            setDesc(
                              "BMW allows existing customers to sell used cars but many competitors are now offering better resale values..."
                            );
                            setImg(
                              "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                            );
                          }}
                        >
                          {" "}
                          Learn More
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <button onClick={popupShow} className={styles.button}>
            Download Brochure
            <FaDownload className={styles.icon} />
          </button>
        </section>
      </div>
      <div className={styles.batch}>
        <p className={styles.infop}>Batch details</p>
        <div className={styles.batchBox}>
          <div className={styles.blue}>
            <p className={styles.ptopBlue}>Weekday</p>
            <p className={styles.pBotBA}>7 months | 2 hrs/day</p>
            <p className={styles.pBotBA}>
              <b>Batch 1</b>
            </p>
            <div className={styles.dateTime}>
              <MdDateRange className={styles.blueIcon} />
              <p className={styles.pBotB}>24th March 2023</p>
            </div>
            <div className={styles.dateTime}>
              <BiTimeFive className={styles.blueIcon} />
              <p className={styles.pBotB}>8PM to 10 PM</p>
            </div>
          </div>
          <div className={styles.orange}>
            <p className={styles.ptopOrange}>Weekend</p>
            <p className={styles.pBotBA}>9 months | 3 hrs/day</p>
            <p className={styles.pBotBA}>
              <b>Batch 1</b>
            </p>
            <div className={styles.dateTime}>
              <MdDateRange className={styles.orangeIcon} />
              <p className={styles.pBotB}>24th March 2023</p>
            </div>
            <div className={styles.dateTime}>
              <BiTimeFive className={styles.orangeIcon} />
              <p className={styles.pBotB}>8:30AM to 12 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <p className={styles.infop}>Request more information</p>
        <Form />
      </div>
    </>
  );
}

export default SixthSection;
