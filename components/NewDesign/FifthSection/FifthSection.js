import React, { useState, useEffect } from "react";
import styles from "./FifthSection.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheck } from "react-icons/fa";
import { CertificateAdvance1, CertificateAdvance2 } from "./CertificateDetail";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";

function FifthSection({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
}) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
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
          <Form />
        </div>
      </Popup>
      <div className={styles.toolscoverd}>
        <p className={styles.infop}>tools covered</p>
        <div className={styles.sliderTop}>
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={mobile ? 3 : 7}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <Image
                src={img1}
                alt="github"
                layout="intrinsic"
                width="100"
                height="60"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img2}
                alt="python"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img3}
                alt="jupytor"
                quality={100}
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img4}
                alt="excel"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img5}
                alt="sql"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img6}
                alt="numpy"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img7}
                alt="pandas"
                layout="intrinsic"
                width="150"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img8}
                alt="matplotlib"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img9}
                alt="pytorch"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img10}
                alt="tensorflow"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img11}
                alt="keras"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img12}
                alt="seaborn"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img13}
                alt="learn"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img14}
                alt="tableau"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img15}
                alt="powerbi"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img16}
                alt="spark"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img17}
                alt="hadoop"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img18}
                alt="mongodb"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img19}
                alt="aws"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img20}
                alt="statistics"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img21}
                alt="cv"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img22}
                alt="rl"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img23}
                alt="pm"
                layout="intrinsic"
                objectFit="contain"
                width="120"
                height="60"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className={styles.infop}>WORLD’S LEADING CERTIFICATIONS</p>
        <div className={styles.certificate}>
          <div className={styles.gridPanel}>
            {CertificateAdvance1.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
              return (
                <div className={styles.leftSide} key={id}>
                  <div className={styles.leftSideP} key={id}>
                    <Image
                      src={img}
                      alt="Certificate"
                      quality={100}
                      layout="intrinsic"
                      width="1150px"
                      height="800px"
                    />
                    <div className={styles.contentDiv}>
                      <h6>{title}</h6>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[0]}
                      </p>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[1]}
                      </p>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[2]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.gridPanel}>
            {CertificateAdvance2.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
              return (
                <div className={styles.leftSide} key={id}>
                  <div className={styles.leftSideP} key={id}>
                    <Image
                      src={img}
                      alt="Certificate"
                      quality={100}
                      layout="intrinsic"
                      width="1150px"
                      height="800px"
                    />
                    <div className={styles.contentDiv}>
                      <h6>{title}</h6>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[0]}
                      </p>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[1]}
                      </p>
                      <p>
                        <FaCheck className={styles.checkCircle} />
                        {para[2]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.fee}>
          <p className={styles.infop} style={{color: "#fff"}}>Program fee & financing</p>
          <div className={styles.feeBox}>
            <p>Total fee</p>
            <h2 style={{color:"#28557A"}}>₹ 1,25,000 + GST</h2>
            <div className={styles.line}></div>
            <p>Easy No-Cost EMI</p>
            <h2 style={{color:"#28557A"}}>₹ 12,292/month</h2>
            <p>Financing partners</p>
            <div>
            <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Financing-Parnters-Logos.png"
                alt="pm"
                layout="intrinsic"
                objectFit="contain"
                width="427"
                height="38"
              />
              </div>
              <button onClick={popupShow} className={styles.btn}>
              Enroll now
        </button>
          </div>
        </div>
    </>
  );
}

export default FifthSection;
