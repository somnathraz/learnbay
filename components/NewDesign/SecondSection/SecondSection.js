import React, { useEffect, useState } from "react";
import styles from "./SecondSection.module.css";
import Image from "next/image";
import { FaAward, FaNetworkWired, FaStickyNote, FaVideo } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function SecondSection() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <>
      <div className={styles.second}>
        <div className={styles.secondFirst}>
          <p className={styles.infop}>Course info</p>
          <h2 className={styles.h1}>
            Master the fundamental skills of a blockchain developer
          </h2>
          <p className={styles.ptop}>
            Designed for professionals seeking to accelerate their careers in
            the emerging field of blockchain technology.
          </p>
        </div>
        <div className={styles.secondBox}>
          <div className={styles.blue}>
            <div>
              <p>IBM & Microsoft Certified capstone project</p>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png"
                width="33"
                height="30"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.green}>
            <div>
              <p>On-demand 1-1 Video Call With Expert</p>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png"
                width="32"
                height="32"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.yellow}>
            <div>
              <p>Career Services & Alumni Network Access</p>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png"
                width="33"
                height="30"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.pink}>
            <div>
              <p>Elevate your career with project portfolio</p>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png"
                width="30"
                height="30"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
        </div>
        <div className={styles.secondBox}>
          <div className={styles.blue}>
            <div>
              <p>IBM & Microsoft Certified capstone project</p>
            </div>
            <div>
              <FaAward
                className={styles.blueIcon}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div className={styles.green}>
            <div>
              <p>On-demand 1-1 Video Call With Expert</p>
            </div>
            <div>
              <FaVideo
                className={styles.greenIcon}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div className={styles.yellow}>
            <div>
              <p>Career Services & Alumni Network Access</p>
            </div>
            <div>
              <FaNetworkWired
                className={styles.yellowIcon}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div className={styles.pink}>
            <div>
              <p>Elevate your career with project portfolio</p>
            </div>
            <div>
              <FaStickyNote
                className={styles.pinkIcon}
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <h2 className={styles.h1}>Our Alumni’s</h2>
        <section>
          <div className={styles.Section1}>
            <div className={styles.Testimonial}>
              <div className={styles.swiperleft}>
                <Swiper
                  slidesPerView={mobile ? 1.1 : 3}
                  spaceBetween={mobile ? 10 : 15}
                  scrollbar={{ draggable: true }}
                  autoplay={{
                    delay: 2500,
                  }}
                  grabCursor={true}
                  modules={[Scrollbar]}
                  className="mySwiper"
                >
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "I had a great learning experience at Learnbay. The
                          faculties here are top notch. Right from enrollment to
                          getting a good job, they keep putting enormous efforts
                          for each and every candidate. Thanks to all the
                          trainers, backend team, the HR team and to the
                          directors for making this journey smooth."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Preksha Mishra</h3>
                          <p> Working at HCL</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="91"
                            height="12"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>140% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 400% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Mohammad Israr</h3>
                          <p>Working at TCS</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tcs-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="54"
                            height="15"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>
                          <p>210% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Aravind Kumar</h3>
                          <p>SA - Data Scientist</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="118"
                            height="18"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>142% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. All Thanks to Learnbay!"
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Ritish Kumar</h3>
                          <p>Working at Capgemini</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="18"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>150% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "Flexible classes have helped me to manage my job schedule. Learning Data Science directly from MNC experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent platform that enhanced my professional growth. Thank you very much! Learnbay."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Sourabh Mourya</h3>
                          <p>Working at HCL</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="91"
                            height="12"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>150% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since we could clear all queries. The projects are excellent. Overall I had a great experience and I urge everyone to enroll in this institute."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Abhishek Singh</h3>
                          <p>Working at AGS</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="50"
                            height="24"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>132% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSlider}>
                      <div className={styles.paraDiv}>
                        <p className={styles.para}>
                          "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career."
                        </p>
                      </div>
                      <div className={styles.imgP}>
                        <div className={styles.name}>
                          <h3>Vishal</h3>
                          <p> Working at Bridge i2i</p>
                        </div>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="80"
                            height="80"
                            alt="preksha-home"
                          />
                        </div>
                      </div>
                      <div className={styles.imgHike}>
                        <div>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="45"
                            height="18"
                            alt="preksha-home"
                          />
                        </div>
                        <div className={styles.nameHike}>

                          <p>127% Hike</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SecondSection;
