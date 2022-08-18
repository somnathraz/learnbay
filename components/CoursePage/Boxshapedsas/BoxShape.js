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
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";

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
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-alt.svg" loading="lazy" />
            ) : (
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/capstone-live-home.svg"
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
            <h5>Our proud alumni with successfull career transition</h5>
            <div className={styles.reviewWrap}>
              <Swiper
                slidesPerView={mobile ? 1 : 1}
                spaceBetween={mobile ? 10 : 20}
                grabCursor={true}
                autoplay={{ 
                  delay: 2500,
                }}
                modules={[Pagination, Autoplay]}
                pagination={true}
                autoPlay={true}
                className="mySwiper"
              >
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                  Learnbay gives you a major platform to enhance your skills and learn the concepts in depth. The best thing about them is that the classes are flexible and they provide recorded videos of the lectures being taught that help you to brush up the concepts.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/harsh.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Harsh Jaiswal</h5>
                      <p>SDE I at Livspace</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                  Have taken S/W Development course at this institute. Irrespective of implementation languages, one can join this. Cleared many tough concepts in an easy way. I was trying to switch to product based MNC and this course just made it possible.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/neha.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Neha Gour</h5>
                      <p>Silicon Design Engineer 2</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                  I enrolled for Data Structures and Algorithms course at Learnbay.  teaching methodology has been really engaging. Trainers entertains all the approaches in the class which helped us to see the problems from multiple angles.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/nikhil-g.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Nikhil Goyal</h5>
                      <p>SDE-2 at Amazon</p>
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
