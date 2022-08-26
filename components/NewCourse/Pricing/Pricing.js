import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { TiTick } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import PricePopup from "../../Popup/Pricepopup";
import Form from "../../Form/Form";
import { FiArrowRight } from "react-icons/fi";
import Popup from "../../Popup/Popup";

function Pricing() {
  const [popups, setPopups] = useState(false);

  const [pro, setPro] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const changePrice = (priceChange) => {
    setPro(priceChange);
  };

  return (
    <section className={styles.Pricing}>
      <PricePopup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        priceChange={changePrice}
      >
        <div className="leftPopup">
          <div className="PricePopup">
            <div className="leftP">
              <span className="PriceH">Program Features</span>
              <span>Job Assistance</span>
              <span>Live Class Subscription</span>
              <span>LMS Subscription</span>
              <span>Job Referrals</span>
              <span>Industry Projects</span>
              <span>Capstone Projects</span>
              <span>Domain training</span>
              <span>Project Certification</span>
              <span>Job Guarantee</span>
            </div>
            <div className="rightP">
              <span>Basic</span>
              <span className="PriceH">
                {pro ? "₹ 1,35,000 + GST" : "₹ 95,000 + GST"}
              </span>
              <span>
                <BsCheckCircleFill style={{ color: "Green" }} />
              </span>
              <span>3 Year</span>
              <span>Lifetime</span>
              <span> {pro ? "Unlimited" : " 5+"}</span>
              <span>15+</span>
              <span>3</span>
              <span>
                <BsCheckCircleFill style={{ color: "Green" }} />
              </span>
              <span>
                <BsCheckCircleFill style={{ color: "Green" }} />
              </span>
              <span>
                {pro ? (
                  <BsCheckCircleFill style={{ color: "Green" }} />
                ) : (
                  <RiCloseCircleFill style={{ color: "Red" }} />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </PricePopup>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <p className="pTop" style={{textAlign:"center"}} >Get to know in detail about</p>
      <h4 style={{ marginBottom: "20px" }}>
        Full Stack Software Development Program
      </h4>
      <div className={styles.PricingInner}>
        <div className={styles.PricingBoxM}>
          <p className={styles.pTops}>Apply Now</p>
          <p className={styles.Prices}>and Get Scholarship Worth 25,000 INR</p>
          <p className={styles.Courses}>
            Check the eligibility criteria and apply for the for the scholarship
            and grab the chance before it's late.
          </p>
          <div>
            <button className={styles.button} onClick={popupShow}>
              Check Eligibility <FiArrowRight style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
        <div className={styles.PricingBox}>
          <p className={styles.pTop}>Pro</p>
          <p className={styles.Price}>₹ 95,000 + GST</p>
          <p className={styles.Course}>Real Work Experience</p>
          <div>
            <p>Feature:</p>
            <p className={styles.pricingList}>
              <TiTick className="bIcon" />
              Earn real-work experience
            </p>
            <p className={styles.pricingList}>
              <TiTick className="bIcon" />
              Advanced level Full Stack Software Development Program
            </p>
          </div>
          <button className={styles.btnI} onClick={popupShow}>
            <IoCallOutline className="bIcons" />
            Talk to expert
          </button>
        </div>
        <div className={styles.PricingBox}>
          <p className={styles.pTop}>Pro Max</p>
          <p className={styles.Price}>₹ 1,35,000 + GST</p>
          <p className={styles.Course}>100% Job Guarantee</p>
          <div>
            <p>Feature:</p>
            <p className={styles.pricingList}>
              <TiTick className="bIcon" />
              Pro-level Full Stack Software Development Program
            </p>
            <p className={styles.pricingList}>
              <TiTick className="bIcon" />
              Avail unlimited job referrals
            </p>
          </div>
          <button
            className={styles.btnI}
            onClick={() => {
              setPro(true);
              popupShow();
            }}
          >
            <IoCallOutline className="bIcons" />
            Talk to expert
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
