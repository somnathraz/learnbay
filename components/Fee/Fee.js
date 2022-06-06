import React, { useState } from "react";
import styles from "./Fee.module.css";
import { MdCheckCircle } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const Fee = ({ changeFee }) => {
  const [hover, setHover] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.FeeS}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      {changeFee ? (
        <div className={styles.priceTableData}>
          <div className={styles.first}>
            <span
              className={styles.Price}
              style={{ marginBottom: "65px", marginTop: "0px" }}
            >
              Program Features
            </span>
            <span className={styles.PFeatures}>Duration</span>
            <span className={styles.PFeatures}>Eligibility</span>
            <span className={styles.PFeatures}>Domain-Elective</span>
            <span className={styles.PFeatures}>Projects + Capstone</span>
            <span className={styles.PFeatures}>Modules</span>
            <span className={styles.PFeatures}>Job Referrals</span>
            <span className={styles.PFeatures}>Job Guarantee / Money Back</span>
            <span className={styles.PFeatures}>Targeted Job Roles</span>
          </div>
          <div
            className={styles.fourth}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>Data Science and AI Foundation Program</span>
            <span className={styles.Price}>₹65,000 + GST</span>
            <span className={styles.PFeatures}> 225+ Hours</span>
            <span className={styles.PFeatures}> Early Professionals</span>
            <span className={styles.PFeatures}>NA</span>
            <span className={styles.PFeatures}>8+1</span>
            <span className={styles.PFeatures}>10+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <RiCloseCircleFill className={styles.cross} />
            </span>
            <span className={styles.PFeatures}>Data Analyst, Jr. Data Scientist, Data Associate, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div className={hover ? styles.fourth : styles.third}>
          <span className={styles.sub}>Data Science and AI Foundation Program</span>
            <span className={styles.Price}>₹65,000 + GST</span>
            <span className={styles.PFeatures}> 225+ Hours</span>
            <span className={styles.PFeatures}> Early Professionals</span>
            <span className={styles.PFeatures}>NA</span>
            <span className={styles.PFeatures}>8+1</span>
            <span className={styles.PFeatures}>10+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <RiCloseCircleFill className={styles.cross} />
            </span>
            <span className={styles.PFeatures}>Data Analyst, Jr. Data Scientist, Data Associate, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={styles.fourth}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>Artificial Intelligence & ML Program</span>
            <span className={styles.Price}>₹95,000 + GST</span>
            <span className={styles.PFeatures}>300+ Hours</span>
            <span className={styles.PFeatures}>Tech Professionals</span>
            <span className={styles.PFeatures}>8+</span>
            <span className={styles.PFeatures}>15+2</span>
            <span className={styles.PFeatures}>18+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <RiCloseCircleFill className={styles.cross} />
            </span>
            <span className={styles.PFeatures}>Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.outButton} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={styles.fourth}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>Data Science & AI 100% Job Guarantee</span>
            <span className={styles.Price}>₹1,25,000 + GST</span>
            <span className={styles.PFeatures}>400+ Hours</span>
            <span className={styles.PFeatures}>Tech/Non-Tech Professionals</span>
            <span className={styles.PFeatures}>All</span>
            <span className={styles.PFeatures}>15+3</span>
            <span className={styles.PFeatures}>18+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>Project Manager, Team Lead, Project Lead, Project Head, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.outButton} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.priceTable}>
          <div className={styles.first}>
            <span
              className={styles.Price}
              style={{ marginBottom: "25px", marginTop: "0px" }}
            >
              Program Features
            </span>
            <span className={styles.PFeatures}> Duration</span>
            <span className={styles.PFeatures}>Eligibility</span>
            <span className={styles.PFeatures}>Domain-Elective</span>
            <span className={styles.PFeatures}> Projects + Capstone</span>
            <span className={styles.PFeatures}> Modules</span>
            <span className={styles.PFeatures}> Job Referrals</span>
            <span className={styles.PFeatures}>Job Guarantee / Money Back</span>
            <span className={styles.PFeatures}>Targeted Job Roles</span>
          </div>

          <div className={hover ? styles.fourth : styles.third}>
          <span className={styles.sub}>Data Science and AI Foundation Program</span>
            <span className={styles.Price}>₹65,000 + GST</span>
            <span className={styles.PFeatures}> 225+ Hours</span>
            <span className={styles.PFeatures}> Early Professionals</span>
            <span className={styles.PFeatures}>NA</span>
            <span className={styles.PFeatures}>8+1</span>
            <span className={styles.PFeatures}>10+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <RiCloseCircleFill className={styles.cross} />
            </span>
            <span className={styles.PFeatures}>Data Analyst, Jr. Data Scientist, Data Associate, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={styles.fourth}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>Artificial Intelligence & ML Program</span>
            <span className={styles.Price}>₹95,000 + GST</span>
            <span className={styles.PFeatures}>300+ Hours</span>
            <span className={styles.PFeatures}>Tech Professionals</span>
            <span className={styles.PFeatures}>8+</span>
            <span className={styles.PFeatures}>15+2</span>
            <span className={styles.PFeatures}>18+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <RiCloseCircleFill className={styles.cross} />
            </span>
            <span className={styles.PFeatures}>Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.outButton} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={styles.fourth}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>Data Science & AI 100% Job Guarantee</span>
            <span className={styles.Price}>₹1,25,000 + GST</span>
            <span className={styles.PFeatures}>400+ Hours</span>
            <span className={styles.PFeatures}>Tech/Non-Tech Professionals</span>
            <span className={styles.PFeatures}>All</span>
            <span className={styles.PFeatures}>15+3</span>
            <span className={styles.PFeatures}>18+</span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>
              <MdCheckCircle className={styles.check} />
            </span>
            <span className={styles.PFeatures}>Project Manager, Team Lead, Project Lead, Project Head, Etc.</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.outButton} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fee;
