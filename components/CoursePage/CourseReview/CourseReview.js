import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import styles from "./CourseReview.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const CourseReview = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <>
      {" "}
      <div className={styles.reviewWrap}>
        <div className={styles.swiperleft}>
          <Swiper
            slidesPerView={mobile ? 1.02 : 1}
            spaceBetween={mobile ? 10 : 10}
            navigation={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>240%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
                <div className={styles.rightBottom}>
                  <div className={styles.leftBottomC}>
                    <p>Watch More On</p>
                  </div>
                  <a href="https://www.youtube.com/watch?v=vSjfKdIzUjY">
                    <Image
                      src="/reviewYtIcon.png"
                      width="107"
                      height="60"
                      layout="intrinsic"
                    />
                  </a>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/preksha-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="preksha-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p> Working at HCL</p>
                    <h5>Preksha Mishra</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I had a great learning experience at Learnbay. The
                      faculties here are top notch. Right from enrollment to
                      getting a good job, they keep putting enormous efforts for
                      each and every candidate. Thanks to all the trainers,
                      backend team, the HR team and to the directors for making
                      this journey smooth.
                      <br />
                    </p>
                  </div>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/HCL.png"
                    width="230"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>200%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
                <div className={styles.rightBottom}>
                  <div className={styles.leftBottomC}>
                    <p>Watch More On</p>
                  </div>
                  <a href="https://www.youtube.com/watch?v=x_EmBJ-h7DE">
                    <Image
                      src="/reviewYtIcon.png"
                      width="107"
                      height="60"
                      layout="intrinsic"
                    />
                  </a>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/asrar-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="preksha-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p> Working at TCS</p>
                    <h5>Mohammad Israr</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      Thanks to the Learnbay data science course and outstanding
                      assistance, I could ace the TCS interview and secure a job
                      with a 400% pay hike. My understanding of the course was
                      greatly improved by the real-time projects and respective
                      IBM project experience certification.
                      <br />
                    </p>
                  </div>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/TCS.png"
                    width="99"
                    height="30"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>120%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/ritesh-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="ritesh-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p>Working at Capgemini</p>
                    <h5>Ritish</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I always had a dilemma about how to switch to the IT field
                      until I stumbled upon the foundation data science course
                      offered by Learnbay. The perfect combination of
                      flexibility, affordability, and supportiveness. They
                      helped me get placed at Capgemini, and I’m delighted with
                      my current career. All Thanks to Learnbay!
                      <br />
                    </p>
                  </div>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/Capgemini.png"
                    width="99"
                    height="30"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>100%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/saurabh-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="saurabh-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p>Working at HCL</p>
                    <h5>Sourabh Mourya</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      Flexible classes have helped me to manage my job schedule.
                      Learning Data Science directly from MNC experts provided
                      the chance to learn industry-specific tricks and tips. I
                      am grateful to the Learnbay team for providing an
                      excellent platform that enhanced my professional growth.
                      Thank you very much! Learnbay.
                      <br />
                    </p>
                  </div>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/HCL.png"
                    width="230"
                    height="40"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>125%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/abhishek-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="aravind-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p>Working at AGS</p>
                    <h5>Abhishek Singh </h5>
                  </div>
                  <p className={styles.para}>
                    I got placed at AGS within 9 months of joining Learnbay
                    institute. Live interaction sessions are the best part here
                    since we could clear all queries. The projects are
                    excellent. Overall I had a great experience and I urge
                    everyone to enroll in this institute.
                    <br />
                  </p>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/amazon-review.png"
                    width="99"
                    height="30"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>147%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/vishal-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="vishal-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p> Working at Bridge i2i</p>
                    <h5>Vishal </h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      One on One counseling from experts has guided me to make
                      the right decision. The Learnbay team was amazing in
                      assisting me with live projects and preparing for the
                      placements. Thank you! Learnbay for your tremendous
                      support in excelling in my Data Science Career.
                      <br />
                    </p>
                  </div>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/i2i.webp"
                    width="99"
                    height="30"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <div className={styles.bottom}>
                <div className={styles.leftBottom}>
                  <Image
                    src="/hike.svg"
                    width="41"
                    height="41"
                    layout="intrinsic"
                  />
                  <div className={styles.leftBottomC}>
                    <h5>147%</h5>
                    <p>Salary Hike</p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="/aravind-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="aravind-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <p>Domain: IT</p>
                    <h5>Aravind Kumar</h5>
                  </div>
                  <p className={styles.para}>
                    Choosing Learnbay was my best decision ever. The instructors
                    were encouraging and glad to answer questions. The best
                    feature is that their flexible modules & small size batches.
                    I was able to manage my time and learn while working. Thanks
                    to Learnbay for my lucrative placement.
                    <br />
                  </p>
                </div>
                <div className={styles.cIcon}>
                  <Image
                    src="/amazon-review.png"
                    width="99"
                    height="30"
                    layout="intrinsic"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.bottomReview}>
        <h5>Get Assured Interview Call from Top Recruiters</h5>
        <p>Over 250+ Hiring Partners</p>
        <Image
          src="/Hiring-partner-review.png"
          width="1603"
          height="82"
          layout="intrinsic"
        />
        <button>
          Download Placement Report <MdKeyboardArrowDown />
        </button>
      </div>
    </>
  );
};

export default CourseReview;
