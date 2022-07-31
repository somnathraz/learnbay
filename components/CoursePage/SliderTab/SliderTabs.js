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
  const [Retail, setRetail] = useState(false);
  const [Oil, setOil] = useState(false);
  const [Stack, setStack] = useState(false);
  const [Cloud, setCloud] = useState(false);
  const [Automotive, setAutomotive] = useState(false);
  const [Testing, setTesting] = useState(false);
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
            slidesPerView={mobile ? 2.2 : 2.9}
            spaceBetween={mobile ? 10 : 30}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setStack(false);
                  setGuarantee(false);
                  setRetail(false);
                  setTesting(false);
                  setAutomotive(false);
                  setCloud(false);
                  setOil(false);
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
                Banking, Finance, Services & Insurance
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
                  setOil(false);
                  setTesting(false);
                  setAutomotive(false);
                  setCloud(false);
                  setRetail(false);
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
                  setOil(false);
                  setTesting(false);
                  setAutomotive(false);
                  setCloud(false);
                  setRetail(false);
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
                  setGuarantee(false);
                  setOil(false);
                  setTesting(false);
                  setCloud(false);
                  setRetail(true);
                  setAutomotive(false);
                }}
                style={
                  Retail
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Retail, eCommerce and Supply Chain
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
                  setTesting(false);
                  setAutomotive(false);
                  setCloud(false);
                  setOil(false);
                  setRetail(false);
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
                Media, Hospitality, and Transportation
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setOneYear(false);
                  setNonTech(false);
                  setStack(false);
                  setRetail(false);
                  setGuarantee(false);
                  setOil(false);
                  setAutomotive(false);
                  setCloud(false);
                  setTesting(false);
                  setViewAll(true);
                }}
                style={
                  viewAll
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Manufacturing, Mechanical & Telecom
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setOneYear(false);
                  setNonTech(false);
                  setStack(false);
                  setRetail(false);
                  setGuarantee(false);
                  setViewAll(false);
                  setAutomotive(false);
                  setCloud(false);
                  setOil(true);
                  setTesting(false);
                }}
                style={
                  Oil
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Energy, Oil & Gas
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setOneYear(false);
                  setNonTech(false);
                  setStack(false);
                  setRetail(false);
                  setGuarantee(false);
                  setAutomotive(false);
                  setViewAll(false);
                  setCloud(false);
                  setOil(false);
                  setTesting(true);
                }}
                style={
                  Testing
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Development and testing
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setOneYear(false);
                  setNonTech(false);
                  setStack(false);
                  setRetail(false);
                  setGuarantee(false);
                  setViewAll(false);
                  setOil(false);
                  setCloud(false);
                  setTesting(false);
                  setAutomotive(true);
                }}
                style={
                  Automotive
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Automotive, IoT& Embedded Engineers
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setOneYear(false);
                  setNonTech(false);
                  setStack(false);
                  setRetail(false);
                  setGuarantee(false);
                  setViewAll(false);
                  setOil(false);
                  setTesting(false);
                  setAutomotive(false);
                  setCloud(true);
                }}
                style={
                  Cloud
                    ? {
                        background: "white",
                        color: "#edb552",
                        borderBottom: "3px solid #edb552",
                      }
                    : { background: "white" }
                }
              >
                Cloud & DevOps{" "}
              </span>
            </SwiperSlide>
          </Swiper>
        </div>

        {oneYear ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h6>
                Work on real-time projects using live data from companies like
                J.P Morgan, HDFC, etc.
              </h6>
              <p className={styles.para}>
                Know the finance domain-specific best practices for building
                recommendation systems, handling chatbots, and upcoming stock
                market prediction.
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
              <Image src="/Bnking domain.png" width="557" height="442" />
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
                Learn about competitive marketplaces, opportunities, costs, and
                other aspects of sales.
              </h6>
              <p className={styles.para}>
                You will be wholly involved with the essential functional
                aspects of a business, management, Operations, Finance, and
                Research & Development with hands-on capstone projects.
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
                Get in-depth knowledge of media, hospitality, and transportation
                sectors which have been among the most rewarding domain in the
                current economic situation.
              </h6>
              <p className={styles.para}>
                Earn a better insight into areas like personalized marketing,
                real-time analytics, revenue management, booking engines,
                enhanced customer service, and identification of most valuable
                customers.
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
                This domain elective aids in understanding the health care
                industry from the aspect of data and data-driven insights.
              </h6>
              <p className={styles.para}>
                Any working professional choosing this domain with prior
                experience will indeed be offered the maximum possible salary
                hike and job security.
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
        {viewAll ? (
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
                A deeper understanding of the manufacturing and
                telecommunications industries, where you learn in-depth about
                robotics, novel materials, nanotechnology, computer-aided
                design, and geomechanics.
              </h6>
              <p className={styles.para}>
                Additionally, maintains and operates the telecommunications
                network and enables global communication via the internet or
                phone.
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
        {Retail ? (
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
                With enhanced supply chain management and customer services,
                e-commerce-related domains aid in improving the accuracy and
                flexibility of the firm.
              </h6>
              <p className={styles.para}>
                Additionally, it aids in gaining a deeper understanding of
                business acumen and credentials with the functional aspects of
                Data warehousing.
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
        {Oil ? (
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
                Obtain a better understanding of how an industry expands
                exponentially with the advent of AI and DS in the oil and gas
                sector.
              </h6>
              <p className={styles.para}>
                Pursue projects on recording sensors in seismic, manufacturing,
                and exploration operations to logging While Drilling (LWD)
                technology, enabling real-time recording of drilling data.
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
        {Testing ? (
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
                In the development and testing domain, get enhanced with a
                better understanding of deriving data sets and missing data.
              </h6>
              <p className={styles.para}>
                Additionally, Learn about custom data science solutions and
                algorithm models from the actual source of implemented models.
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
        {Automotive ? (
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
                Get a brief understanding of big data, cloud management, and
                automation with real-time projects.
              </h6>
              <p className={styles.para}>
                More prominently, discover AI in the automation sector and
                embedded systems that transfer data to the cloud as a result of
                stunning IoT products.
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
        {Cloud ? (
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
                Cloud and DevOps domains thoroughly provide information on cloud
                management, storage, and distributed networks.
              </h6>
              <p className={styles.para}>
                Gain a better understanding of the collaboration between
                software development and operational environments from the
                perspective of data management.
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
