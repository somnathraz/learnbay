import React, { useState } from "react";
import styles from "./CourseFee.module.css";
import { BiCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Popup from "/components/Popup/Popup";
import Form from "/components/Form/Form";

const CourseFee = ({
  CourseFeeHead,
  CourseFeePara,
  CourseFeelist1,
  CourseFeelist2,
  CourseFeelist3,
  CourseFeelist4,
  CourseFeelist5,

}) => {
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
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
        <h4 style={{ marginBottom: "30px" }}>{CourseFeeHead}</h4>
        <div className={styles.CourseFee}>
            <div className={styles.heading}>
                <p className={styles.phead}>{CourseFeePara}</p>
            </div>
            <div className={styles.listcheck}>
                <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist1}</p>
                <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist2}</p>
                <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist3}</p>
                <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist4}</p>
            </div>
            <div className={styles.batch}>
                <div className={styles.BatchDetailsTop}>
                <div>
                    <div className={styles.BatchDetails}>
                      <p className={styles.list}><AiOutlineBars className={styles.icon} /><b>Batch Type</b></p>
                      <p className={styles.list}>Weekend Batch (Sat-Sun)</p>
                      <p className={styles.list}>Weekday Batch (Mon-Fri)</p>
                      <p className={styles.list}>Weekday Batch (Mon-Fri)</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.BatchDetails}>
                      <p className={styles.list}><MdDateRange className={styles.icon} /><b>Date</b></p>
                      <p className={styles.list}>21st August 2022</p>
                      <p className={styles.list}>25th August 2022</p>
                      <p className={styles.list}>26th August 2022</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.BatchDetails}>
                    <p className={styles.list}><BiTimeFive className={styles.icon} /><b>Time</b></p>
                    <p className={styles.list}>08.30 a.m. to 12.00 p.m.</p>
                      <p className={styles.list}>08:00 a.m. to 10:00 a.m.</p>
                      <p className={styles.list}>08:00 p.m. to 10:00 p.m.</p>
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
