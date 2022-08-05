import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./BoxShape.module.css";
import Image from "next/image";
import { MdLiveTv } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
}) => {
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <div className={styles.boxWrapper}>
      <p className={styles.pTop}>Program Features</p>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <MdLiveTv className={styles.boxIcon} />

            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div className={hover ? styles.box : styles.boxActive}>
            {hover ? (
              <img src="/Live-classes-home-alt.svg" loading="lazy" />
            ) : (
              <img
                src="/capstone-live-home.svg"
                alt="data-science"
                className={styles.icon}
                loading="lazy"
              />
            )}

            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FiUser className={styles.boxIcon} />
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <BsGraphUp className={styles.boxIcon} />

            <h5>{Box4h5}</h5>
            <p>{box4desc}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <h5>How domain specialization helped our students succeed</h5>
            <div className={styles.reviewWrap}>
              <Swiper
                slidesPerView={mobile ? 1 : 1}
                spaceBetween={mobile ? 10 : 20}
                grabCursor={true}
                modules={[Pagination]}
                pagination={true}
                className="mySwiper"
              >
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Learnbay taught me data science. Thanks to Learnabay's
                    domain specialization course, I landed a job in my prior
                    sector and was regarded as an experienced applicant by my
                    firm. I consistently increased my data science knowledge and
                    experience, which led to a 250% hike.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="/featureReviewIcon.png"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Payal Mishra</h5>
                      <p>Data Analyst (IBM)</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Learnbay has tremendously assisted my study of data science
                    because of its outstanding mentorship. I had a good
                    experience online studying the courses. Additionally, thanks
                    to Learnbay's hybrid classes making it simple for me to
                    participate in projects from the offline training center,
                    which has helped me tremendously in cracking the interviews.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="/featureReviewIcon.png"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Shristi Singh</h5>
                      <p>Data Architect (Amazon)</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Thanks to the Learnbay data science course and outstanding
                    assistance, I could ace the TCS interview and secure a job
                    with a 400% pay hike. My understanding of the course was
                    greatly improved by the real-time projects and respective
                    IBM project experience certification, which has given me
                    global recognition and helped me stand out from the crowd.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="/asrar-home.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Mohammad Israr</h5>
                      <p>Data scientist (TCS)</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.leftContent}>
                  <h5>+250%</h5>
                  <p>Highest Salary Hike</p>
                </div>
                <div className={styles.rightContent}>
                  <h5>18 LPA</h5>
                  <p>Average Salary Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
