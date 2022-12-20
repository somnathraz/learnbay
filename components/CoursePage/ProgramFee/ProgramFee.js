import React, { useState } from "react";
import { BsFillCreditCard2FrontFill, BsLaptopFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import styles from "./ProgramFee.module.css";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Script from "next/script";
import Form from "../../Form/Form";

export const ProgramFee = ({ Fee, Emi, fullStack, dataScience }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} fullStack={fullStack} dataScience={dataScience} />
        </div>
      </Popup>
      <div className={styles.header}>
        <h5>Program Fee & Financing</h5>
        <p>
          We are dedicated to making our programs accessible. We are committed
          to helping you find a way to budget for this program and offer a
          variety of financing options to make it more economical.
        </p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.feeWrapper}>
          <div className={styles.left}>
            <h6>The EMI option</h6>
            <p>
              We have partnered with the following financing companies to
              provide competitive finance options at 0% interest rate with no
              hidden costs.
            </p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/programFeeIcon.png"
              width="225"
              height="111"
              layout="intrinsic"
               alt="data science course in bangalore"
            />
            <div className={styles.bottom}>
              <p>Get professional training affordably</p>
              <h5>{Fee}</h5>
              <button onClick={popupShow}>Enroll Now</button>
            </div>
          </div>
          <div className={styles.right}>
            <h6>Financing as low as</h6>
            <p>
              If one-time payment is your thing other than EMI, you can rely on
              services such as Internet banking or credit/debit cards.
            </p>
            <div className={styles.bottom}>
              <div className={styles.lefts}>
                <BsFillCreditCard2FrontFill className={styles.icon} />
                <p>Credit Card</p>
              </div>
              <div className={styles.center}>
                <BsLaptopFill className={styles.icon} />
                <p>Internet Banking</p>
              </div>
              <div className={styles.rights}>
                <GiWallet className={styles.icon} />
                <p>No Cost EMI</p>
              </div>
            </div>
            <div className={styles.bottomS}>
              <p>Get professional training affordably</p>
              <h5>{Emi}</h5>
              <button style={{ margin: "auto" }} onClick={popupShow}>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
