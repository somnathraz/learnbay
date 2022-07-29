import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";


const SliderTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);


  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  return (
    <div className={styles.Course} id="course">
      <h2>Our Core Features</h2>
      <p className={styles.pTop}>Learnbay Advantage - How are we Different?</p>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        slidesPerView={mobile ? 2.2 : 3.5}
        spaceBetween={mobile ? 10 : 30}
        className="mySwiper"
      >
        <SwiperSlide className={styles.slide} >
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
           Banking, Finance & Insurance
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Sales, Marketing & HR
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Healthcare, Pharma, and Clinical Research
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Retail, eCommerce and Supply Chain Domain:-
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setViewAll(true);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Manufacturing, Mechanical & Telecom Domain:-
          </span>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setViewAll(true);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Manufacturing, Mechanical & Telecom Domain:-
          </span>
        </SwiperSlide>
      </Swiper>
         
          
        </div>

        {oneYear ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
            
              <h6>
              Work on real-time projects using live data from companies like J.P Morgan, HDFC, etc.
              </h6>
              <p className={styles.para}>
              Know the finance domain-specific best practices for building recommendation systems, handling chatbots, and upcoming stock market prediction.
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>240%</h4>
                  <p>Average Hike</p>
                </div>
                <div className={styles.middle}>
                  <h4>10K</h4>
                  <p>Trusted Learners</p>
                </div>
              </div>
              <button>Download Brochure</button>
            </div>
            <div className={styles.right}>
              <Image
                src="/Bnking domain.png"
                width="557"
                height="442"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Global Industry Certification</h5>
              <img
                src="/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
              />
              <h6>
                Work on Domain Specialised Capstone Certified With IBM to get
                handson experience
              </h6>
              <p className={styles.para}>
                Upon Successful completion of the course , you will receive the
                globally recognised certificate from IBM which helps you to get
                industry ready
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>Dual</h4>
                  <p>Certification</p>
                </div>
                <div className={styles.middle}>
                  <h4>Global</h4>
                  <p>Accreditation</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image src="/gobal-industry.webp" width="504" height="383" />
            </div>
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Special Classes For Beginners</h5>
              <img
                src="/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
              />
              <h6>
                Attend Our Special Programming Sessions For Non-tech
                professionals
              </h6>
              <p className={styles.para}>
                We believe that professionals coming from non programming
                backgrounds need special assistance and support so that you can
                learn from scratch.
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>Special Classes</h4>
                  <p>For Non Programmers</p>
                </div>
                <div className={styles.middle}>
                  <h4>1:1 Daily</h4>
                  <p>Doubt Session</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="/special-classes-beigneers.webp"
                width="400"
                height="412"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>1:1 Personal Mentorship</h5>
              <img
                src="/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
              />
              <h6>
                3 years of Flexible access for live Interactive online classes
                and lifetime access of LMS
              </h6>
              <p className={styles.para}>
                Our experts are available 1:1 to help you for any doubts after
                your live classes.You can attend classes from multiple
                instructors, change batches, get backup classes
              </p>
              <div className={styles.info}>
                <div className={styles.left}>
                  <h4>1:1 Personal</h4>
                  <p>Mentorship</p>
                </div>
                <div className={styles.middle}>
                  <h4>1:1 Daily</h4>
                  <p>Doubt Session</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image src="/flexibility-support.webp" width="479" height="412" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SliderTabs;
