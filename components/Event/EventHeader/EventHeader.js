import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./EventHeader.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export const EventHeader = ({
  title,
  titleSpan,
  desc,
  instructor,
  alt,
  width,
  height,
  eventDate,
  eventTime,
  imgSrc,
}) => {
  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  return (
    <section className={styles.wrapper}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Register Now for Webinar</h5>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <div className={styles.left}>
        <h1>
          {title}
          <span> {titleSpan}</span>
        </h1>
        <p className={styles.pBot}>{desc}</p>
        <div className={styles.ButtonDiv}>
        </div>
        <div className={styles.info}>
          <div className={styles.left1}>
            <h5>Instructor</h5>
            <p>{instructor}</p>
          </div>
          <div className={styles.middle}>
            <h5>Date</h5>
          <p>{eventDate}</p>
          </div>
          <div className={styles.right1}>
            <h5>Time</h5>
            <p>{eventTime}</p>
          </div>
        </div>
        <div className={styles.btnWrapper}>
            <button className={styles.Button} onClick={popupShow}>
              {" "}
              <FaDownload className="bIcons" />
              Register Now
            </button>
          </div>
      </div>
      <div className={styles.right}>
        <Image
          src={imgSrc}
          alt={alt}
          layout="intrinsic"
          width={width}
          height={height}
        />
      </div>
    </section>
  );
};
