import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/image";
import styles from "./CareerImpact.module.css";
import CountUp from 'react-countup';

const CareerImpact = ({ CareerHead, changeReview }) => {
        const [mobile, setMobile] = useState(false);
        useEffect(() => {
          let width = window.innerWidth;
          if (width < 481) {
            setMobile(true);
          }
        });
  return (
    <section className={styles.CareerImpact}>
        <div className={styles.left}>
        <h4>{CareerHead}</h4>
            <div className={styles.swiperleft}>
                <Swiper
                slidesPerView={mobile ? 1 : 1}
                spaceBetween={mobile ? 10 : 30}
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
                        AI and ML full stack program is too good and helpful for
                        working professionals, I have done BCA so I was well versed in
                        Java, C, basic SQL and C++. At Skillslash I learnt Python,
                        core SQL, R, math - stats, ML and More.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/shezan.png"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="Tilak Rao review"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Tilak Rao</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        Thanks a ton Skillslash Family. As a part of the Full stack
                        course in Data Science i had a great learning experience. I
                        was able to successfully move into a data science role in 7
                        months , which was amazing.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/pragyan-prakash-skillslash-reviews.webp"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="Pragyan prakash review"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Pragyan Prakash</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        One of the best platform for working professionals. Although a
                        new startup but training quality is really good. For our
                        batch, instructor is Rahul (and co-founder) and he teaches
                        statistics and ML concepts in depth.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/Gautum-skillslash-review.webp"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="Gautum Skilslash review"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Gautum</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        {" "}
                        <p>
                        One of the best course providers is Skillslash, their data
                        science course has helped me become the data scientist I am
                        today. There are tons of differences between studying data
                        science and working as a data scientist.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/Mirnal-sahay-skillslash-review.webp"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="Mirnal-sahay-skillslash-review"
                            />
                        </div>

                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Mrinal Sahay</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        {" "}
                        <p>
                        Skillslash is truly one of the best institutes to study
                        machine learning, I thank my brother for suggesting me this
                        course. The course has amazing perks for working professionals
                        like live classes, faculty of industry professionals
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/sameer-ahemed-skillslash-review.webp"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="sameer-ahemed-skillslash-review"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Sammer Ahemed</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    </>
                ) : (
                    <>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        Learnbay is one of the most remarkable data science institutes I've come across. In comparison to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction.  I would strongly advise everyone to attend this institute.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/shezan.png"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="shezan"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Shezan Baig</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/viraj.png"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="viraj"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Viraj Ghodke</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        The best in Industry offerings from both cost and curriculum wise. One advantage of joining is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/shubhangi.png"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="shubhangi"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Shubhangi J.</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <p>
                        I have done Data Science certification. Got placed in Oracle within 9 months. The journey was arduous because I was from the core electronics domain and struggling a lot. Mentors are from FAANG companies and are truly dedicated. I liked the teaching style of Python Trainers.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/devraj.jpg"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="devraj"
                            />
                        </div>

                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Deevraj</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        {" "}
                        <p>
                        Extremely good and effective course with dedicated faculties for modules. You get the flexibility to attend classes from multiple instructors. Very Supportive learning environment. I was getting frustrated due to the lack of job satisfaction as a tech consultant. Thanks a lot, Learnbay, for changing my career.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/suman.jpg"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="suman"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Suman Karmakar</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        {" "}
                        <p>
                        Finally, landed on my dream of a technical role. A shift from core sales profile to satisfactory tech role could never be possible without you, guys. I really appreciate all the instructors for their amazingly personalized training approach. Hats of Learnbay, and keep it up.
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/neelesh.jpg"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="Neelesh"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5> Neelesh Dugar</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        {" "}
                        <p>
                        I have done Data Science certification. Got placed in Oracle within 9 months. The journey was arduous because I was from the core electronics domain and struggling a lot. Mentors are from FAANG companies and are truly dedicated. I liked the teaching style of Python Trainers. 
                        </p>
                        <div className={styles.profile}>
                        <div className={styles.imgP}>
                            <Image
                            src="/pawan.jpg"
                            layout="intrinsic"
                            width="120"
                            height="120"
                            alt="pawan"
                            />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.star}>
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            <AiFillStar className={styles.RIcon} />
                            </div>
                            <h5>Pawan Yadav</h5>
                        </div>
                        </div>
                    </SwiperSlide>
                    </>
                )}
                </Swiper>
            </div>
        </div>
        <div className={styles.Right}>
            <div className={styles.RightUp}>
                <div className={styles.RightDark}>
                    <CountUp
                                                    end={97}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="%"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Average Salary Hike</p>
                </div>
                <div className={styles.RightFade}>
                <CountUp
                                                    end={450}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="%"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Highest Salary Hike</p>
                </div>
            </div>
            <div className={styles.RightBottom}>
                <div className={styles.RightFade}>
                <CountUp
                                                    end={10000}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="+"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Careers Reshaped</p>
                </div>
                <div className={styles.RightDark}>
                <CountUp
                                                    end={250}
                                                    delay={2}
                                                    duration={2}
                                                    suffix="+"
                                                    className={
                                                        [styles.textStyle]
                                                    }
                                                />
                    <p>Hiring Partners</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareerImpact
