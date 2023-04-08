import React from "react";
import styles from "./KeyFeatures.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaDownload } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";

import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

const KeyFeatures = () => {
  return (
    <>
    <section className={styles.Features}>
      <div>
        <h6 className={styles.topHead}>Why Learnbay?</h6>
        <div className={styles.FeatureWrap}>
          <div className={styles.LeftWrap}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whylearnbay-left-image.png"
              width={686}
              height={393}
            />
          </div>
          <div className={styles.rightSide}>
            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              // slidesPerColumn={1}
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.slideWrap}>
                  <div className={styles.leftSlider}>
                    <BsCircleFill className={styles.circle} />
                  </div>
                  <div className={styles.rightSlider}>
                    <p>
                      Hassle-free and tailored training for MAANG company
                      interviews.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.slideWrap}>
                  <div className={styles.leftSlider}>
                    <BsCircleFill className={styles.circle} />
                  </div>
                  <div className={styles.rightSlider}>
                    <p>
                      A successful career transition even with zero coding
                      experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.slideWrap}>
                  <div className={styles.leftSlider}>
                    <BsCircleFill className={styles.circle} />
                  </div>
                  <div className={styles.rightSlider}>
                    <p>
                      Even after a career break, securing a dream job is
                      achievable.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.slideWrap}>
                  <div className={styles.leftSlider}>
                    <BsCircleFill className={styles.circle} />
                  </div>
                  <div className={styles.rightSlider}>
                    <p>
                      A successful career transition even with zero coding
                      experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    <div className={styles.RightWrap}>
    <h2 className={styles.h1}>The Network Reach of Our Bay</h2>
          <div className={styles.imgWrap}>
            <div className={styles.imgShowD}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Network-reach-company-logos.png"
              width="1148"
              height="414"
              layout="intrinsic"
              alt="Learnbay"
            />
            </div>
            <div className={styles.imgShowM}>
              
            </div>
            <button className={styles.btn}>Download Placement Report <FaDownload style={{ marginLeft: "10px" }} /></button>
          </div>
        </div>
    </>
  );
};

export default KeyFeatures;
