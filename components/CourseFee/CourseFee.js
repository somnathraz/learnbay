import React, { useState } from "react";
import styles from "./CourseFee.module.css";
import { BiCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BiTimeFive, BiBookOpen } from "react-icons/bi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

function CourseFee() {
    const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.CourseFeeh}>
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
        <h4 style={{ marginBottom: "30px" }}>Artificial Intelligence & ML Course Fee</h4>
        <div className={styles.CourseFee}>
            <div className={styles.heading}>
                <p className={styles.phead}>Online Classroom</p>
            </div>
            <div className={styles.listcheck}>
                <p className={styles.list}><BiCheck className={styles.icon} />Online interactive classes</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Weekend and weekdays batches</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Extra doubt clearance sessions</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Multiple domain selection options</p>
                <p className={styles.list}><BiCheck className={styles.icon} />Company-based mock interviews</p>
            </div>
            <div className={styles.batch}>
                <div className={styles.BatchDetailsTop}>
                <div>
                    <div className={styles.BatchDetails}>
                      <p className={styles.list}><AiOutlineBars className={styles.icon} />Batch Type</p>
                      <p className={styles.list}>Weekday Batch (Mon-Fri)</p>
                      <p className={styles.list}>Weekend Batch (Sat-Sun)</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.BatchDetails}>
                      <p className={styles.list}><MdDateRange className={styles.icon} />Date</p>
                      <p className={styles.list}>5 june 2022</p>
                      <p className={styles.list}>5 june 2022</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.BatchDetails}>
                      <p className={styles.list}><BiTimeFive className={styles.icon} />Time</p>
                      <p className={styles.list}>09:00 – 12:00 AM</p>
                      <p className={styles.list}>09:00 – 12:00 AM</p>
                    </div>
                  </div>
                  <div className={styles.btnWrapper}>
          <button onClick={popupShow}>Enroll Now</button>
        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CourseFee
