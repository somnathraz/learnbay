import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";
import styles from "./Slider.module.css";

export default function Slider() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
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
        slidesPerView={mobile ? 1 : 4}
        spaceBetween={mobile ? 10 : 30}
        slidesPerGroup={1}
      >
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/1.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/2.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/3.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/5.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/6.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} />
</a>        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/7.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} />
</a>        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Development+and+Testing+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/8.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} />
</a>        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Cloud+and+Devops+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/9.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} />
</a>        </SwiperSlide>{" "}
        <SwiperSlide className={styles.slide}>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Automotive%2C+IOT+and+Embedded+Domain.pdf" target="_blank"><img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/10.webp" alt="Content Image" style={{ width: "100%" ,padding: "10px" }} /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
