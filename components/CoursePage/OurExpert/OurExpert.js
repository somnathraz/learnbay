import React, { useState, useEffect } from "react";
import styles from "./OurExpert.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurExpert = ({ img1, img2, img3, img4, img5, img6, img7, img8 }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <section className={styles.GetHired}>
      <div className={styles.CInner}>
        <h5>Tools Covered</h5>
        <div>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={mobile ? 3 : 5}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <Image
                src={img1}
                alt="amazon"
                layout="intrinsic"
                width="100"
                height="60"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img2}
                alt="capgemini"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img3}
                alt="Flipkart"
                quality={100}
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img4}
                alt="Google"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img5}
                alt="Microsoft"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img6}
                alt="Myntra"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img7}
                alt="Tcs"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img8}
                alt="Wipro"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurExpert;
