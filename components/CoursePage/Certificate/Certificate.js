import React, { useState } from "react";
import styles from "./Certificate.module.css";
import { BiDownload } from "react-icons/bi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Certificate = ({ popupHead, title, desc, desc2, desc3 }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.Certifcate}>
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
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure upSkillingHide={true} />
        </div>
      </Popup>
      <div className={styles.left}>
        <p className="pTop">Global Recognition</p>
        <h4 style={{ marginBottom: "20px", textAlign: "left" }}>{title}</h4>

        <p className={styles.pBotC}>{desc}</p>
        <p className={styles.pBotC}>{desc2}</p>
        <p className={styles.pBotC}>{desc3}</p>

        <div className={styles.btnWrapper}>
          <button onClick={popupShow}>
            <BiDownload className="bIcons" />
            Download Brochure
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="shadow"
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate.webp"
              alt="learnbay"
              quality={100}
              layout="intrinsic"
              width="530"
              height="380"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="shadow"
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate-png.webp"
              alt="learnbay"
              quality={100}
              layout="intrinsic"
              width="530"
              height="380"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Certificate;
