import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
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
                    Learnbay is one of the most remarkable data science
                    institutes I've come across. In comparison to other
                    institutes in India, it offers a data science course at a
                    low cost. Excellent value for money. Finally, I achieved job
                    satisfaction. I would strongly advise everyone to attend
                    this institute.<br />
                    <Image
                        src="/shezanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    For me, learning using the Learnbay platform has been a
                    great experience. The teaching and management team are very
                    helpful. They are constantly willing to clarify each
                    individual's doubts and meet the needs of working
                    professionals. The practice interview sessions were simply
                    like a clone of MNC interviews.<br />
                    <Image
                        src="/veerajc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    The best in Industry offerings from both cost and curriculum
                    wise. One advantage of joining is you can access their
                    resources for a lifetime, unlike others where you have
                    accessibility only for a year or so. Most importantly, there
                    is continuous assistance for recruitment.<br />
                    <Image
                        src="/shubangic.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                  {" "}
                  <p>
                    I have done Data Science certification. Got placed in Oracle
                    within 9 months. The journey was arduous because I was from
                    the core electronics domain and struggling a lot. Mentors
                    are from MAANG companies and are truly dedicated. I liked
                    the teaching style of Python Trainers.<br />
                    <Image
                        src="/pawanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                <SwiperSlide className={styles.slide}>
                  <p>
                  The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around.<br />
                    <Image
                        src="/deverajc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    Extremely good and effective course with dedicated faculties
                    for modules. You get the flexibility to attend classes from
                    multiple instructors. Very Supportive learning environment.
                    I was getting frustrated due to the lack of job satisfaction
                    as a tech consultant. Thanks a lot, Learnbay, for changing
                    my career.<br />
                    <Image
                        src="/sumanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
              </>
            ) : (
              <>
                <SwiperSlide className={styles.slide}>
                  <p>
                    Learnbay is one of the most remarkable data science
                    institutes I've come across. In comparison to other
                    institutes in India, it offers a data science course at a
                    low cost. Excellent value for money. Finally, I achieved job
                    satisfaction. I would strongly advise everyone to attend
                    this institute.<br />
                    <Image
                        src="/shezanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    For me, learning using the Learnbay platform has been a
                    great experience. The teaching and management team are very
                    helpful. They are constantly willing to clarify each
                    individual's doubts and meet the needs of working
                    professionals. The practice interview sessions were simply
                    like a clone of MNC interviews.<br />
                    <Image
                        src="/veerajc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    The best in Industry offerings from both cost and curriculum
                    wise. One advantage of joining is you can access their
                    resources for a lifetime, unlike others where you have
                    accessibility only for a year or so. Most importantly, there
                    is continuous assistance for recruitment.<br />
                    <Image
                        src="/shubangic.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                  The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around.<br />
                    <Image
                        src="/deverajc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    Extremely good and effective course with dedicated faculties
                    for modules. You get the flexibility to attend classes from
                    multiple instructors. Very Supportive learning environment.
                    I was getting frustrated due to the lack of job satisfaction
                    as a tech consultant. Thanks a lot, Learnbay, for changing
                    my career.<br />
                    <Image
                        src="/sumanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    Finally, landed on my dream of a technical role. A shift
                    from core sales profile to satisfactory tech role could
                    never be possible without you, guys. I really appreciate all
                    the instructors for their amazingly personalized training
                    approach. Hats of Learnbay, and keep it up.<br />
                    <Image
                        src="/neeleshc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
                    I have done Data Science certification. Got placed in Oracle
                    within 9 months. The journey was arduous because I was from
                    the core electronics domain and struggling a lot. Mentors
                    are from MAANG companies and are truly dedicated. I liked
                    the teaching style of Python Trainers.<br />
                    <Image
                        src="/pawanc.png"
                        layout="intrinsic"
                        width="400"
                        height="40"
                        alt="shezan"
                        textAlign="center"
                      />
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
              className={[styles.textStyle]}
            />
            <p>Average Salary Hike</p>
          </div>
          <div className={styles.RightFade}>
            <CountUp
              end={450}
              delay={2}
              duration={2}
              suffix="%"
              className={[styles.textStyle]}
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
              className={[styles.textStyle]}
            />
            <p>Careers Reshaped</p>
          </div>
          <div className={styles.RightDark}>
            <CountUp
              end={250}
              delay={2}
              duration={2}
              suffix="+"
              className={[styles.textStyle]}
            />
            <p>Hiring Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerImpact;
