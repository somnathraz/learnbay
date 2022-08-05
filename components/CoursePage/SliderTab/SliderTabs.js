import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const SliderTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Retail, setRetail] = useState(false);
  const [Oil, setOil] = useState(false);
  const [Stack, setStack] = useState(false);
  // const [Cloud, setCloud] = useState(false);
  // const [Automotive, setAutomotive] = useState(false);
  // const [Testing, setTesting] = useState(false);
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
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setRetail(false);

              setOil(false);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            BFSI
            {mobile ? oneYear ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Understand the best practices for the finance sector.
                </h6>
                <p className={styles.para}>
                  Work on real-time projects using live data from companies like J.P Morgan, HDFC, etc for building recommendation systems, handling chatbots, and upcoming stock market prediction.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>

              <div className={styles.right}>
                <Image src="/Bnking domain.png" width="350" height="350" />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
              setOil(false);

              setRetail(false);
            }}
            className={nonTech ? styles.ActiveSpan : styles.span}
          >
            Sales, Marketing & HR
            {mobile ? nonTech ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Know data-driven consumer and market insights.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image src="/gobal-industry.webp" width="296" height="345" />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setOil(false);

              setRetail(false);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            Healthcare
            {mobile ? Stack ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Incorporate future proof practices with Data Science and AI.
                </h6>
                <p className={styles.para}>
                  Any working professional choosing this domain with prior
                  experience will indeed be offered the maximum possible salary
                  hike and job security.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Assignments </p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Globally</h4>
                    <p>Recognized Certificate</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right} style={{ paddingBottom: "40px" }}>
                <Image src="/Healthcare-domain.webp" width="351" height="332" />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setOil(false);

              setRetail(true);

              console.log(Retail);
            }}
            className={Retail ? styles.ActiveSpan : styles.span}
          >
            Retail & eCommerce
            {mobile ? Retail ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Gain a deeper understanding of business requirements and it's functionalities.
                </h6>
                <p className={styles.para}>
                  With enhanced supply chain management and customer services,
                  e-commerce-related domains aid in improving the accuracy and
                  flexibility of the firm.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Domain-Specific</h4>
                    <p>Training</p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Project Certificate</h4>
                    <p> From IBM</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Retail-domain.webp"
                  width="314"
                  height="360"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);

              setOil(false);
              setRetail(false);
            }}
            className={Guarantee ? styles.ActiveSpan : styles.span}
          >
            Media and Hospitality
            {mobile ? Guarantee ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Guarantee ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Study about applications of DS & AI is applicable in Manufacturing & Automotive.
                </h6>
                <p className={styles.para}>
                  A deeper understanding of the manufacturing and
                  telecommunications industries, where you learn in-depth about
                  robotics, novel materials, nanotechnology, computer-aided
                  design, and geomechanics.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Mediacal-domain.webp"
                  width="296"
                  height="361"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setRetail(false);
              setGuarantee(false);
              setOil(false);

              setViewAll(true);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            Manufacturing
            {mobile ? viewAll ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {viewAll ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Work on projects implemented for business growth.
                </h6>
                <p className={styles.para}>
                  Earn a better insight into areas like personalized marketing,
                  real-time analytics, revenue management, booking engines,
                  enhanced customer service, and identification of most valuable
                  customers.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Case Studies </p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Dual</h4>
                    <p> Certification</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Manufacturing-domain-slider.webp"
                  width="271"
                  height="353"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setRetail(false);
              setGuarantee(false);
              setViewAll(false);

              setOil(true);
            }}
            className={Oil ? styles.ActiveSpan : styles.span}
          >
            Energy, Oil & Gas
            {mobile ? Oil ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Oil ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Understand how an industry expands exponentially with AI.
                </h6>
                <p className={styles.para}>
                  Pursue projects on recording sensors in seismic,
                  manufacturing, and exploration operations to logging While
                  Drilling (LWD) technology, enabling real-time recording of
                  drilling data.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <img
                  src="/oil-gas.webp"
                  width="568"
                  height="412"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Understand the best practices for the finance sector.
                </h6>
                <p className={styles.para}>
                  Work on real-time projects using live data from companies like J.P Morgan, HDFC, etc for building recommendation systems, handling chatbots, and upcoming stock market prediction.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>

              <div className={styles.right}>
                <Image src="/Bnking domain.png" width="350" height="350" />
              </div>
            </div>
          ) : (
            ""
          )}
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Know data-driven consumer and market insights.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image src="/gobal-industry.webp" width="296" height="345" />
              </div>
            </div>
          ) : (
            ""
          )}
          {Guarantee ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Study about applications of DS & AI is applicable in Manufacturing & Automotive.
                </h6>
                <p className={styles.para}>
                  A deeper understanding of the manufacturing and
                  telecommunications industries, where you learn in-depth about
                  robotics, novel materials, nanotechnology, computer-aided
                  design, and geomechanics.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Mediacal-domain.webp"
                  width="296"
                  height="361"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Incorporate future proof practices with Data Science and AI.
                </h6>
                <p className={styles.para}>
                  Any working professional choosing this domain with prior
                  experience will indeed be offered the maximum possible salary
                  hike and job security.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Assignments </p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Globally</h4>
                    <p>Recognized Certificate</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right} style={{ paddingBottom: "40px" }}>
                <Image src="/Healthcare-domain.webp" width="351" height="332" />
              </div>
            </div>
          ) : (
            ""
          )}
          {viewAll ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Work on projects implemented for business growth.
                </h6>
                <p className={styles.para}>
                  Earn a better insight into areas like personalized marketing,
                  real-time analytics, revenue management, booking engines,
                  enhanced customer service, and identification of most valuable
                  customers.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Case Studies </p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Dual</h4>
                    <p> Certification</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Manufacturing-domain-slider.webp"
                  width="271"
                  height="353"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Gain a deeper understanding of business requirements and it's functionalities.
                </h6>
                <p className={styles.para}>
                  With enhanced supply chain management and customer services,
                  e-commerce-related domains aid in improving the accuracy and
                  flexibility of the firm.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Domain-Specific</h4>
                    <p>Training</p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Project Certificate</h4>
                    <p> From IBM</p>
                  </div>
                </div>
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <Image
                  src="/Retail-domain.webp"
                  width="314"
                  height="360"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Oil ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
Understand how an industry expands exponentially with AI.
                </h6>
                <p className={styles.para}>
                  Pursue projects on recording sensors in seismic,
                  manufacturing, and exploration operations to logging While
                  Drilling (LWD) technology, enabling real-time recording of
                  drilling data.
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
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf"
                  target="_blank"
                >
                  <button>Download Brochure</button>
                </a>
              </div>
              <div className={styles.right}>
                <img
                  src="/oil-gas.webp"
                  width="568"
                  height="412"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
