import React, { useEffect, useState } from "react";
import styles from "./SecondSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { AiOutlineRise } from "react-icons/ai";
import ReviewPopup from "../ReviewPopup/ReviewPopup";

function SecondSection({
  SecondHead,
  SecondPara,
  SecondPara1,
  SecondPara2,
  SecondPara3,
  SecondPara4,
  fullStackReview,
  heading1,
  heading2,
  heading3,
  heading4,
}) {
  const [mobile, setMobile] = useState(false);
  const [img, setImg] = useState({
    cLogo: "",
    pLogo: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    hike: "",
    position: "",
  });
  const [desc, setDesc] = useState("");
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <>
      <div className={styles.second}>
        <ReviewPopup
          trigger={popups}
          setTrigger={setPopups}
          title={profile}
          desc={desc}
          imgSrc={img}
        />
        <div className={styles.secondFirst}>
          <h2 className={styles.h1}>{SecondHead}</h2>
          <p className={styles.ptop}>{SecondPara}</p>
        </div>
        <div className={styles.secondBox}>
          <div className={styles.blue}>
            <div>
              <h4 className={styles.heading}>{heading1}</h4>
              <p className={styles.textBox}>{SecondPara1}</p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon1.png"
                width="43"
                height="40"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.green}>
            <div>
              <h4 className={styles.heading}>{heading2}</h4>
              <p className={styles.textBox}>{SecondPara2}</p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon3.png"
                width="42"
                height="42"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.yellow}>
            <div>
              <h4 className={styles.heading}>{heading3}</h4>
              <p className={styles.textBox}>{SecondPara3}</p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon2.png"
                width="53"
                height="50"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.pink}>
            <div>
              <h4 className={styles.heading}>{heading4}</h4>
              <p className={styles.textBox}>{SecondPara4}</p>
            </div>
            <div className={styles.imgWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/icon4.png"
                width="40"
                height="40"
                layout="intrinsic"
                alt="data science course"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <h2 className={styles.h1}>Alumni Speak</h2>
        <p className={styles.ptop}>
          Discover the impact of our programs on career growth
        </p>
        <div className={styles.line}>
          <img
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/alumni-arrow.png"
            width="80px"
          />
        </div>
        <section>
          <div className={styles.Section1}>
            <div className={styles.Testimonial}>
              {fullStackReview ? (
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.1 : 3.1}
                    spaceBetween={mobile ? 10 : 85}
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I had a great learning experience at Learnbay. The
                            faculties here are top notch. Right from enrollment
                            to getting a good job ..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "140%",
                                  name: "Preksha Mishra",
                                  position: "Working at HCL",
                                });
                                setDesc(
                                  "I had a great learning experience at Learnbay. The                 faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 130 : 140}
                              height={mobile ? 21 : 23}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              140% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "Thanks to the Learnbay data science course and
                            outstanding assistance, I could ace the TCS
                            interview and secure a job..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "210% Hike",
                                  name: "Mohammad Israr",
                                  position: "Working at TCS",
                                });
                                setDesc(
                                  "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 400% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TCS.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TCS.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 40 : 63}
                              height={mobile ? 25 : 40}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              210% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "Choosing Learnbay was my best decision ever. The
                            instructors were encouraging and glad to answer
                            questions. The best feature is that ..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "142% Hike",
                                  name: "Aravind Kumar",
                                  position: "SA - Data Scientist",
                                });
                                setDesc(
                                  "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 150 : 200}
                              height={mobile ? 18 : 24}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              142% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I always had a dilemma about how to switch to the
                            IT field until I stumbled upon the foundation data
                            science course offered by Learnbay..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "150% Hike",
                                  name: "Ritish Kumar",
                                  position: "Working at Capgemini",
                                });
                                setDesc(
                                  "I always had a dilemma about how to switch to  IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. All Thanks to Learnbay!"
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 130 : 150}
                              height={mobile ? 29 : 34}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              150% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "Flexible classes have helped me to manage my job
                            schedule. Learning Data Science directly from MNC
                            experts provided the chance ..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "150% Hike",
                                  name: "Sourabh Mourya",
                                  position: "Sourabh Mourya",
                                });
                                setDesc(
                                  "Flexible classes have helped me to manage my job schedule. Learning Data Science directly from  experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent  platform that enhanced my professional growth. Thank you very much! Learnbay."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 130 : 140}
                              height={mobile ? 21 : 23}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              150% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Abhishek Singh </h3>
                            <p>Working at AGS</p>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I got placed at AGS within 9 months of joining
                            Learnbay institute. Live interaction sessions are
                            the best part here since ..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "132% Hike",
                                  name: "Sourabh Mourya",
                                  position: "Sourabh Mourya",
                                });
                                setDesc(
                                  "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 63 : 71}
                              height={mobile ? 30 : 34}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              132% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
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
                              width="100"
                              height="100"
                              alt="preksha-home"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "One on One counseling from experts has guided me to
                            make the right decision. The Learnbay team was
                            amazing in assisting me with ..."
                            <span
                              onClick={() => {
                                popupShow();
                                setProfile({
                                  hike: "127% Hike",
                                  name: "Vishal",
                                  position: "Working at Bridge i2i",
                                });
                                setDesc(
                                  "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career."
                                );
                                setImg({
                                  cLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png",
                                  pLogo:
                                    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png",
                                });
                              }}
                            >
                              Learn More
                            </span>
                          </p>
                        </div>

                        <div className={styles.imgHike}>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png"
                              layout="intrinsic"
                              loading="lazy"
                              width={mobile ? 75 : 85}
                              height={mobile ? 30 : 34}
                              alt="preksha-home"
                            />
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              <AiOutlineRise />
                              127% Hike
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) : (
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.1 : 3.1}
                    spaceBetween={mobile ? 10 : 85}
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
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Qudsia Tahniyath</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Qudsia.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Qudsia"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "Learnbay has helped me a lot to learn data science applications in the e-commerce industry. The live class concept was really helpful in receiving proper DS training. Thanks to all my mentors and the placement team."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Binit Kumar Swalsingh</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/binit.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Binit"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I've been with this org since Jan 4, 2023, studying Full Stack Software Development. If you have ambition and need a mentor to show you the right path to success with the right knowledge, I highly recommend this org."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Swarup Halder</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/swarup.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Swarup"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I have enrolled in Software Development course. I had basic knowledge of DSA and since then it has been a wonderful learning experience. The teacher does an excellent job of explaining the concepts in a way that is easy to understand."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Karanveer Bansal</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/karanveer.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Karanveer"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I enrolled in Learnbay's full stack program. I already completed basic DSA and the live sessions were clear, with good teaching pace. They offer an easy and simple EMI option for course fees."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Gowthaman Jeganathan</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Gowthaman.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Gowthaman"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I'm currently enrolled in the Full Stack course and have completed the DSA and System Design modules. The trainers' teaching method has been enlightening for me as a beginner. Highly recommend Learnbay for upskilling."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>Abhishek Pakhide</h3>
                          </div>
                          <div>
                            <Image
                              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Abhishek+Pakhide.png"
                              layout="intrinsic"
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="Abhishek"
                            />
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            "I recently finished Learnbay's Basic DSA Course online. The course is well-structured, taught by knowledgeable trainers with a focus on interview preparation and data structure concepts. It benefits both novices and experts."
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SecondSection;
