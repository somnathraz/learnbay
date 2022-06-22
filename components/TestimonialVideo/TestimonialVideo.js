import React, { useState, useEffect } from "react";
import styles from "./TestimonialVideo.module.css";
import VideoPopup from "../VideoPopup/VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import Image from "next/image";
import { MdOutlinePlayCircle } from "react-icons/md";

function TestimonialVideo() {
  const [value, setValue] = useState("");
  const [video, setVideo] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  const videoSHow = () => {
    setVideo(true);
  };

  return (
    <section className={styles.TestimonialVideo}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={value} />
      <h4>Catch on what our alumni have to say</h4>
      <p>
        What people say about our courses and how it has helped them accelerate
        their careers to a whole new level.
      </p>
      <div className={styles.TVideoDiv}>
        <Swiper
          slidesPerView={mobile ? 1 : 3}
          spaceBetween={mobile ? 10 : 10}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.slide}>
            <Image
              src="/Testimonial_video_1.jpg"
              width="432"
              height="282"
              layout="intrinsic"
              onClick={() => {
                setValue("A7EEoXomoPs");
                videoSHow();
              }}
            />
            <MdOutlinePlayCircle className={styles.vIcon} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src="/Testimonial_video_2.jpg"
              width="432"
              height="282"
              layout="intrinsic"
              onClick={() => {
                setValue("zAN3oP_ZHc4");
                videoSHow();
              }}
            />
            <MdOutlinePlayCircle className={styles.vIcon} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src="/Testimonial_video_3.jpg"
              width="432"
              height="282"
              layout="intrinsic"
              onClick={() => {
                setValue("H-3jsBc1sZo");
                videoSHow();
              }}
            />
            <MdOutlinePlayCircle className={styles.vIcon} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src="/Testimonial_video_4.jpg"
              width="432"
              height="282"
              layout="intrinsic"
              onClick={() => {
                setValue("UrjGgskFe3I");
                videoSHow();
              }}
            />
            <MdOutlinePlayCircle className={styles.vIcon} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src="/Testimonial_video_5.jpg"
              width="432"
              height="282"
              layout="intrinsic"
              onClick={() => {
                setValue("IJUNj1Ygq7Q");
                videoSHow();

              }}
            />
            <MdOutlinePlayCircle className={styles.vIcon} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialVideo;
