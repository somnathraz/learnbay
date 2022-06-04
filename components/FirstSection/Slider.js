import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.SliderWrap}>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ padding: "4px", height: "80px" }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/1.webp" alt="Content Image" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/2.webp" alt="Content Image" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/3.webp" alt="Content Image" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/3.webp" alt="Content Image" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/5.webp" alt="Content Image" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/6.webp" alt="Content Image" style={{ width: "95%" }} />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <img src="/7.webp" alt="Content Image" style={{ width: "95%" }} />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <img src="/8.webp" alt="Content Image" style={{ width: "95%" }} />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <img src="/9.webp" alt="Content Image" style={{ width: "95%" }} />
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <img src="/10.webp" alt="Content Image" style={{ width: "95%" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
