import React, { useState } from "react";
import styles from "./Fee.module.css";
import Popup from "/components/Popup/Popup";
import Form from "/components/Form/Form";
import Image from "next/image";
import {BsArrowRight}from "react-icons/bs";

const Fee = ({
  sub1,
  Price1,
  PFeatures11,
  PFeatures12,
  PFeatures13,
  PFeatures14,
  PFeatures15,
  PFeatures16,
  PFeatures17,
  PFeatures18,
  sub2,
  Price2,
  PFeatures21,
  PFeatures22,
  PFeatures23,
  PFeatures24,
  PFeatures25,
  PFeatures26,
  PFeatures27,
  PFeatures28,
  sub3,
  Price3,
  PFeatures31,
  PFeatures32,
  PFeatures33,
  PFeatures34,
  PFeatures35,
  PFeatures36,
  PFeatures37,
  PFeatures38,
  changeFee,
}) => {
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
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      {changeFee ? (
        <div className={styles.priceTableData}>
          <div className={styles.first}>
            <span
              className={styles.Price}
              style={{ marginBottom: "95px", marginTop: "0px" }}
            >
              Program Features
            </span>
            <span className={styles.PFeatures}>Duration</span>
            <span className={styles.PFeatures}>Eligibility</span>
            <span className={styles.PFeatures}>Domain-Electives</span>
            <span className={styles.PFeatures}>Projects + Capstones</span>
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
            <span className={styles.sub}>{sub1}</span>
            <span className={styles.Price}>{Price1}</span>
            <span className={styles.PFeatures}>{PFeatures11}</span>
            <span className={styles.PFeatures}>{PFeatures12}</span>
            <span className={styles.PFeatures}>{PFeatures13}</span>
            <span className={styles.PFeatures}>{PFeatures14}</span>
            <span className={styles.PFeatures}>{PFeatures15}</span>
            <span className={styles.PFeatures}>{PFeatures16}
              
            </span>
            <span className={styles.PFeatures}>{PFeatures17}
              
            </span>
            <span className={styles.PFeatures}>{PFeatures18}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enroll Now
              </button>
            </span>
          </div>
          <div className={hover ? styles.fourth : styles.third}>
          <span className={styles.sub}>{sub1}</span>
            <span className={styles.Price}>{Price1}</span>
            <span className={styles.PFeatures}>{PFeatures11}</span>
            <span className={styles.PFeatures}>{PFeatures12}</span>
            <span className={styles.PFeatures}>{PFeatures13}</span>
            <span className={styles.PFeatures}>{PFeatures14}</span>
            <span className={styles.PFeatures}>{PFeatures15}</span>
            <span className={styles.PFeatures}>
            {PFeatures16}
            </span>
            <span className={styles.PFeatures}>
            {PFeatures17}
            </span>
            <span className={styles.PFeatures}>{PFeatures18}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enroll Now
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
            <span className={styles.sub}>{sub2}</span>
            <span className={styles.Price}>{Price2}</span>
            <span className={styles.PFeatures}>{PFeatures21}</span>
            <span className={styles.PFeatures}>{PFeatures22}</span>
            <span className={styles.PFeatures}>{PFeatures23}</span>
            <span className={styles.PFeatures}>{PFeatures24}</span>
            <span className={styles.PFeatures}>{PFeatures25}</span>
            <span className={styles.PFeatures}>
              {PFeatures26}
            </span>
            <span className={styles.PFeatures}>
              {PFeatures27}
            </span>
            <span className={styles.PFeatures}>{PFeatures28}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.outButton} onClick={popupShow}>
                Enroll Now
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
            <span className={styles.sub}>{sub3}</span>
            <span className={styles.Price}>{Price3}</span>
            <span className={styles.PFeatures}>{PFeatures31}</span>
            <span className={styles.PFeatures}>{PFeatures32}</span>
            <span className={styles.PFeatures}>{PFeatures33}</span>
            <span className={styles.PFeatures}>{PFeatures34}</span>
            <span className={styles.PFeatures}>{PFeatures35}</span>
            <span className={styles.PFeatures}>
              {PFeatures36}
            </span>
            <span className={styles.PFeatures}>
              {PFeatures37}
            </span>
            <span className={styles.PFeatures}>{PFeatures38}</span>
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
            <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/code.svg" width="40" height="40"/>
            <span
              className={styles.Price}
              style={{ marginBottom: "30px", marginTop: "0px" }}
            >
              Program Features
            </span>
            <span className={styles.PFeatures}> Duration</span>
            <span className={styles.PFeatures}>Eligibility</span>
            <span className={styles.PFeatures}>Domain-Electives</span>
            <span className={styles.PFeatures}> Projects + Capstones</span>
            <span className={styles.PFeatures}> Modules</span>
            <span className={styles.PFeatures}> Job Referrals</span>
            <span className={styles.PFeatures}>Job Guarantee / Money Back</span>
            <span className={styles.PFeatures}>Targeted Job Roles</span>
            <BsArrowRight/>
          </div>

          <div className={ styles.third}
           onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}>
          <span className={styles.sub}>{sub1}</span>
            <span className={styles.Price}>{Price1}</span>
            <span className={styles.PFeatures}>{PFeatures11}</span>
            <span className={styles.PFeatures}>{PFeatures12}</span>
            <span className={styles.PFeatures}>{PFeatures13}</span>
            <span className={styles.PFeatures}>{PFeatures14}</span>
            <span className={styles.PFeatures}>{PFeatures15}</span>
            <span className={styles.PFeatures}>{PFeatures16}
              
            </span>
            <span className={styles.PFeatures}>{PFeatures17}
              
            </span>
            <span className={styles.PFeatures}>{PFeatures18}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={hover ? styles.third : styles.fourth}
           
          >
            <span className={styles.sub}>{sub2}</span>
            <span className={styles.Price}>{Price2}</span>
            <span className={styles.PFeatures}>{PFeatures21}</span>
            <span className={styles.PFeatures}>{PFeatures22}</span>
            <span className={styles.PFeatures}>{PFeatures23}</span>
            <span className={styles.PFeatures}>{PFeatures24}</span>
            <span className={styles.PFeatures}>{PFeatures25}</span>
            <span className={styles.PFeatures}>
              {PFeatures26}
            </span>
            <span className={styles.PFeatures}>
              {PFeatures27}
            </span>
            <span className={styles.PFeatures}>{PFeatures28}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
                Enrol Now
              </button>
            </span>
          </div>
          <div
            className={styles.third}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={styles.sub}>{sub3}</span>
            <span className={styles.Price}>{Price3}</span>
            <span className={styles.PFeatures}>{PFeatures31}</span>
            <span className={styles.PFeatures}>{PFeatures32}</span>
            <span className={styles.PFeatures}>{PFeatures33}</span>
            <span className={styles.PFeatures}>{PFeatures34}</span>
            <span className={styles.PFeatures}>{PFeatures35}</span>
            <span className={styles.PFeatures}>
              {PFeatures36}
            </span>
            <span className={styles.PFeatures}>
              {PFeatures37}
            </span>
            <span className={styles.PFeatures}>{PFeatures38}</span>
            <span className={styles.PFeatures} style={{paddingTop:"20px"}}>
              <button className={styles.button} onClick={popupShow}>
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
