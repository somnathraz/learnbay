import React, { useEffect, useState } from "react";
import styles from "./SixthSection.module.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { FaQuoteLeft, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import ProjectPopup from "../ProjectPopup/ProjectPopup";

function SixthSection({ dataScience, CourseFeeHead, WebDev, DataScience }) {
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
          <Form
            popup={true}
            downloadBrochure
            dataScience={dataScience}
            setTrigger={setPopups}
          />
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
      <section className={styles.Syllabus}>
        <h2 className={styles.h1}>{CourseFeeHead}</h2>
        <div className={styles.mobileView}>
          {DataScience ? (
            <div className={styles.NewBatch}>
              <div className={styles.NewOrange}>
                <div>
                  <p className={styles.listDay}>Weekday Evening (Mon-Fri)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    24th March 2023
                  </p>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                  </p>
                </div>
              </div>
              <div className={styles.NewBlue}>
                <div>
                  <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    26th March 2023
                  </p>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />
                    08:30 AM to 12 PM
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {WebDev ? (
                <div className={styles.NewBatch}>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        31st March 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.NewBatch}>
                  <div className={styles.NewOrange}>
                    <div>
                      <p className={styles.listDay}>
                        Weekend Morning (Sat-Sun)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        25th March 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                      </p>
                    </div>
                  </div>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Wed-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        27th March 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.desktopView}>
          <div className={styles.heading}></div>
          {DataScience ? (
            <div className={styles.NewBatch}>
              <div className={styles.NewOrange}>
                <div>
                  <p className={styles.listDay}>Weekday Evening (Mon-Fri)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    24th March 2023
                  </p>
                </div>
                <div>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                  </p>
                </div>
              </div>
              <div className={styles.NewBlue}>
                <div>
                  <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    26th March 2023
                  </p>
                </div>
                <div>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />
                    08:30 AM to 12 PM
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {WebDev ? (
                <div className={styles.NewBatch}>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Morning (Mon-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        31st March 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />7 AM to 9 AM
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.NewBatch}>
                  <div className={styles.NewOrange}>
                    <div>
                      <p className={styles.listDay}>
                        Weekend Morning (Sat-Sun)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        25th March 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                      </p>
                    </div>
                  </div>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Wed-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        27th March 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <div className={styles.form}>
        <p className={styles.infop}>Request more information</p>
        <Form />
      </div>
    </>
  );
}

export default SixthSection;
