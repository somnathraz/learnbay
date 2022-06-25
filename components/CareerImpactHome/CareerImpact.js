import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/image";
import styles from "./CareerImpact.module.css";
import CountUp from "react-countup";

const CareerImpact = ({ CareerHead, changeReview }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.CareerImpact}>
      <div className={styles.left}>
        <h4>{CareerHead}</h4>
        <div className={styles.swiperleft}>
          <Swiper
            slidesPerView={mobile ? 1 : 2}
            spaceBetween={mobile ? 10 : 10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {changeReview ? (
              <>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/aravind-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="aravind-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at The math</p>
                      <h5>Aravind Kumar</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since we could clear all queries. The projects are excellent. Overall I had a great experience and I urge everyone to enroll in this institute.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/abhishek-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="abhishek-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at AGS</p>
                      <h5>Abhishek Singh </h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. 
All Thanks to Learnbay!<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/ritesh-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="ritesh-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at Capgemini </p>
                      <h5>Ritish</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/vishal-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="vishal-home"
                      />
                    </div>

                    <div className={styles.name}>
                      <p> Working at Bridge i2i</p>
                      <h5>Vishal </h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {" "}
                  <p>
                  Flexible classes have helped me to manage my job schedule. Learning Data Science directly from MNC experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent platform that enhanced my professional growth. Thank you very much! Learnbay.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/saurabh-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="saurabh-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at Amanthya</p>
                      <h5>Saurab Maurya</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {" "}
                  <p>
                  I had a great learning experience at Learnbay.The faculties here are top notch.Right from enrollment to getting a good job,they keep putting enormous efforts for each and every candidate. Thanks to all the trainers,backend team,the HR team and to the directors for making this journey smooth.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/preksha-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="preksha-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p> Working at HCL</p>
                      <h5>Preksha Mishra</h5>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ) : (
              <>
                <SwiperSlide className={styles.slide}>
                  <p>
                  Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/aravind-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="aravind-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at The math</p>
                      <h5>Aravind Kumar</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since we could clear all queries. The projects are excellent. Overall I had a great experience and I urge everyone to enroll in this institute.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/abhishek-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="abhishek-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at AGS</p>
                      <h5>Abhishek Singh </h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. 
All Thanks to Learnbay!<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/ritesh-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="ritesh-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at Capgemini </p>
                      <h5>Ritish</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <p>
                  One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/vishal-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="vishal-home"
                      />
                    </div>

                    <div className={styles.name}>
                      <p> Working at Bridge i2i</p>
                      <h5>Vishal </h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {" "}
                  <p>
                  Flexible classes have helped me to manage my job schedule. Learning Data Science directly from MNC experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent platform that enhanced my professional growth. Thank you very much! Learnbay.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/saurabh-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="saurabh-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p>Working at Amanthya</p>
                      <h5>Saurab Maurya</h5>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  {" "}
                  <p>
                  I had a great learning experience at Learnbay.The faculties here are top notch.Right from enrollment to getting a good job,they keep putting enormous efforts for each and every candidate. Thanks to all the trainers,backend team,the HR team and to the directors for making this journey smooth.<br />
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.imgP}>
                      <Image
                        src="/preksha-home.jpeg"
                        layout="intrinsic"
                        width="120"
                        height="120"
                        alt="preksha-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <p> Working at HCL</p>
                      <h5>Preksha Mishra</h5>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
      <div className={styles.Button}>
            <a href="/reviews" target="_blank"><button style={{margin:"auto", marginTop:"20px"}}>View All Reviews</button></a>
            </div>
    </section>
  );
};

export default CareerImpact;
