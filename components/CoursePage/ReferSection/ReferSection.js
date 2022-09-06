import React, { useState } from "react";
import styles from "./ReferSection.module.css";
import Image from 'next/image'
import Popup from "/components/Popup/Popup";
import Form from "/components/FormRefer/Form";
import { FaBullhorn } from "react-icons/fa";


function ReferSection() {
    const [popups, setPopups] = useState(false);
  
    const popupShow = () => {
      setPopups(true);
    };
  return (
      <section className={styles.ReferSection}>
          <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Refer Your Friend</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
          <div className={styles.first}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/refer.png"
            alt="refer"
            quality={100}
            layout="intrinsic"
            width="320px"
            height="320px"
          />
          </div>
          <div className={styles.Middle}>
              <p className={styles.ptop}>Refer someone you know and receive Gift Vouchers worth INR 3,000!*</p>
              <p className={styles.pbot}>All IBM Certified Programs are Eligible for this Referral Discount.</p>
          </div>
          <div className={styles.Last}>
            <div className={styles.btnWrapper}>
                <button onClick={popupShow}>Start Referring<FaBullhorn className={styles.icon} /></button>
            </div>
         </div>
      </section>
  )
}

export default ReferSection
