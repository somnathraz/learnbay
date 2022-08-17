import React, { useState, useEffect } from "react";
import styles from "./OurExpert.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const OurExpert = ({ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23  }) => {
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
            slidesPerView={mobile ? 3 : 7}
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
                alt="github"
                layout="intrinsic"
                width="100"
                height="60"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img2}
                alt="python"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img3}
                alt="jupytor"
                quality={100}
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img4}
                alt="excel"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img5}
                alt="sql"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img6}
                alt="numpy"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img7}
                alt="pandas"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img8}
                alt="matplotlib"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img9}
                alt="pytorch"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img10}
                alt="tensorflow"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img11}
                alt="keras"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img12}
                alt="seaborn"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img13}
                alt="learn"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img14}
                alt="tableau"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img15}
                alt="powerbi"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img16}
                alt="spark"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img17}
                alt="hadoop"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img18}
                alt="mongodb"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img19}
                alt="aws"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img20}
                alt="statistics"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img21}
                alt="cv"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img22}
                alt="rl"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img23}
                alt="pm"
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
