import React, { useState, useEffect } from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCheckCircleFill } from "react-icons/bs";

function ThirdSection({
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
  img21,
  img22,
  dataScience,
  BatchPara,
  BatchParaImg1,
  BatchParaImg2,
  firstLine,
  secondLine,
  thirdHead,
  point1,
  point2,
  point3,
  point4,
  thirdHeadSpan,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
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
          <Form dataScience={dataScience} />
        </div>
      </Popup>
      <p className={styles.infop}>Recent Placements</p>
      <div className={styles.boxGrey}>
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
            reverseDirection: true,
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
              width="120"
              height="60"
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img2}
              alt="python"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img3}
              alt="jupytor"
              quality={100}
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img4}
              alt="excel"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img5}
              alt="sql"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img6}
              alt="numpy"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img7}
              alt="pandas"
              layout="intrinsic"
              width="120"
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
              src={img22}
              alt="tensorflow"
              layout="intrinsic"
              objectFit="contain"
              width="120"
              height="60"
            />
          </SwiperSlide>
        </Swiper>
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
          reverseDirection={true}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.slide}>
            <Image
              src={img11}
              alt="github"
              layout="intrinsic"
              width="120"
              height="60"
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img12}
              alt="python"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img13}
              alt="jupytor"
              quality={100}
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img14}
              alt="excel"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img15}
              alt="sql"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img16}
              alt="numpy"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img17}
              alt="pandas"
              layout="intrinsic"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img18}
              alt="matplotlib"
              layout="intrinsic"
              objectFit="contain"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img19}
              alt="pytorch"
              layout="intrinsic"
              objectFit="contain"
              width="120"
              height="60"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src={img21}
              alt="tensorflow"
              layout="intrinsic"
              objectFit="contain"
              width="120"
              height="60"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.boxText}>
        <div className={styles.blueD}>
          <p className={styles.Htop}>20K+</p>
          <p className={styles.ptop}>
            Trusted
            <br />
            learners
          </p>
        </div>
        <div className={styles.green}>
          <p className={styles.Htop}>250%</p>
          <p className={styles.ptop}>
            Salary
            <br />
            hike
          </p>
        </div>
        <div className={styles.yellow}>
          <p className={styles.Htop}>9K+</p>
          <p className={styles.ptop}>
            Students
            <br />
            placed
          </p>
        </div>
        <div className={styles.blue}>
          <p className={styles.Htop}>310+</p>
          <p className={styles.ptop}>
            Hiring
            <br />
            Partner
          </p>
        </div>
      </div>
      <div className={styles.map}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Map(learners).png"
          width="617"
          height="779"
          layout="intrinsic"
          alt="data science course"
        />
      </div>
      <div className={styles.First}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form />
          </div>
        </Popup>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopBox}>{secondLine}</p>
          <h1 className={styles.h1}>Empower yourself to secure top-level promotions
            <span className={styles.h1Span}> with our advanced program</span>
          </h1>
          {/* <p className={styles.checkP}>
            <BsCheckCircleFill className={styles.check} />
            {point1}
          </p>
          <p className={styles.checkP}>
            <BsCheckCircleFill className={styles.check} />
            {point2}
          </p>
          <p className={styles.checkP}>
            <BsCheckCircleFill className={styles.check} />
            {point3}
          </p>
          <p className={styles.checkP}>
            <BsCheckCircleFill className={styles.check} />
            {point4}
          </p> */}
        </div>
        <div className={styles.secondLeft}>
          <div className={styles.PlayImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-view-map.png"
              width="644"
              height="323"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
        </div>
      </div>
      <div className={styles.CTA}>
        <div className={styles.boxBlue}>
          <h2 className={styles.boxH2}>
            Can’t decide which course to opt for?
          </h2>
          <p className={styles.boxP}>
            Don’t worry, our expert counsellor is there to guide you make the
            right career choice
          </p>
          <button onClick={popupShow}>
          Apply For Counselling
            <FaArrowRight style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
      <div className={styles.batch}>
        <p className={styles.infop}>Who is it for?</p>
        <p className={styles.batchP}>{BatchPara}</p>
        <div className={styles.batchImage}>
          <div>
            <p className={styles.infopP}>industry</p>
            <Image
              src={BatchParaImg1}
              width="744"
              height="436"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <hr className={styles.hrDesing} />
          <div>
            <p className={styles.infopP}>DESIGNATION BREAKUP</p>
            <Image
              src={BatchParaImg2}
              width="667"
              height="446"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
