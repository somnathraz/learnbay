import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Fee.module.css";
import Image from "next/image";

import { BsCheckCircleFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineBank } from "react-icons/ai";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const FeeSection = ({
  FeeHeading,
  Fee,
  dataScience,
  FeeContent2,
  FeeContent3,
  FeeContent4,
  FeeContent5,
  FeeContent6,
  dataScienceCounselling,
  FeeEmi,
}) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [popups, setPopups] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(70);
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setSlidesPerView(9);
      setSpaceBetween(20);
    }
    if (width < 641) {
      setSlidesPerView(5);
      setSpaceBetween(20);
    }
    if (width < 481) {
      setSlidesPerView(3);
      setSpaceBetween(10);
      setMobile(true);
    }
  });
  return (
    <div className={styles.feeWrapper}>
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
          <h5>Apply For Counselling</h5>

          <Form dataScience={dataScience} dataScienceCounselling={dataScienceCounselling}/>
        </div>
      </Popup>
      <h4>{FeeHeading}</h4>
      <p className={styles.ptop}>
        Invest in your future with quality education
      </p>
      <div className={styles.priceWrap}>
        <div className={styles.leftSide}>
          <div className={styles.price}>
            <p>Program Fee:</p>
            <h5>{Fee}</h5>
          </div>

          <div className={styles.list}>
            <div className={styles.left}>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent2}
              </p>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent5}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent4}
              </p>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent3}
              </p>
            </div>
          </div>

          <button onClick={() => popupShow(true, false)}>Enroll Now</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.top}>
            <div className={styles.right}>
              <p>Financing as low as</p>
              <h3>{FeeEmi}</h3>
            </div>
            <div className={styles.left}>
              <button onClick={() => popupShow(false, true)}>
                Start Learning
              </button>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.right}>
              <p>Multiple Payment Modes</p>
              <div>
                <span>
                  <MdPayment className={styles.icon} /> <p>Card</p>
                </span>
                <span>
                  <AiOutlineBank className={styles.icon} /> <p>Banking</p>
                </span>
                <span>
                  <FaMobileAlt className={styles.icon} /> <p>UPI</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <div className={styles.slider}>
              <p className={styles.sliderHeading}>Payment Partner</p>
              <Swiper
                spaceBetween={mobile ? 30 : spaceBetween}
                centeredSlides={true}
                slidesPerView={mobile ? 3 : slidesPerView}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {mobile ? (
                  <>
                    {" "}
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/liquiloans.webp"
                        alt="liqiloans"
                        width={mobile ? "90" : "150"}
                        height="40"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/propelld.webp"
                        alt="Propelled"
                        width="120"
                        height="40"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/zest-logo.webp"
                        alt="zest"
                        width="80"
                        height="20"
                      />
                    </SwiperSlide>
                  </>
                ) : (
                  <>
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/liquiloans.webp"
                        alt="liqiLoans"
                        width="300"
                        height="120"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/propelld.webp"
                        alt="propelld"
                        width="500"
                        height="200"
                        layout="intrinsic"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/zest-logo.webp"
                        alt="Zest"
                        width="200"
                        height="58"
                      />
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSection;