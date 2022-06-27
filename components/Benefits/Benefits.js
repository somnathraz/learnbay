import React, { useState } from "react";
import styles from "./Benefits.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Benefits = () => {
  const [Domain, setDomain] = useState(true);
  const [career, setCareer] = useState(false);
  const [industry, setIndustry] = useState(false);

  return (
    <div className={styles.Benefits}>
      <h6>Benefits for Working Professionals</h6>
      <div className={styles.BenefitsWrapper}>
        <div className={styles.BenLeftWrap}>
          <div className={styles.list}>
            <span
              onClick={() => {
                setDomain(true);
                setCareer(false);
                setIndustry(false);
              }}
              className={Domain ? styles.spanActive : styles.span}
            >
              DOMAIN ELECTIVES
            </span>
            <span
              onClick={() => {
                setDomain(false);
                setCareer(true);
                setIndustry(false);
              }}
              className={career ? styles.spanActive : styles.span}
            >
              CAREER ASSISTANCE
            </span>
            <span
              onClick={() => {
                setDomain(false);
                setCareer(false);
                setIndustry(true);
              }}
              className={industry ? styles.spanActive : styles.span}
            >
              INDUSTRY PROJECTS
            </span>
          </div>
          {Domain ? (
            <div className={styles.listDetail}>
              <li>Strong expertise in several domains.</li>
              <li>
                Real-time projects under the guidance of lead data scientists.
              </li>
              <li>Experiential learning for working professionals.</li>

              <li>
                Utilizing your current domain expertise to become a full stack
                data scientist.
              </li>
            </div>
          ) : (
            ""
          )}
          {career ? (
            <div className={styles.listDetail}>
              <li>
                Get a career coach to help you develop technical and soft
                skills.
              </li>
              <li>Access to Learnbay’s alumni job portal.</li>
              <li>100% Interview guarantee with 250+ hiring partners.</li>
              <li>Get prepared with profile building and mock interviews.</li>
            </div>
          ) : (
            ""
          )}
          {industry ? (
            <div className={styles.listDetail}>
              <li>
                Understand the art of industry-specific data science
                terms.
              </li>
              <li>Earn IBM certificate for industry capstone project.</li>
              <li>
                Involve yourself in real-world, domain-specific projects guided
                by data scientists.
              </li>

              <li>Acquire hands-on experience on building data pipelines.</li>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.BenRightWrap}>
          <AiFillPlayCircle className={styles.Play} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
