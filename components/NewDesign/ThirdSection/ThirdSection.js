import React, { useState, useEffect } from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineCheck } from "react-icons/ai";
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
      <section className={styles.Features}>
      <div>
        <h6 className={styles.infop}>The Network Reach of Our Bay</h6>
        <div className={styles.FeatureWrap}>
          <div className={styles.LeftWrap}>
            <h6>
              Our Key <span>Features</span>
            </h6>
            <p>
              <AiOutlineCheck className={styles.tickIcon} /> We help you build a
              strong profile and prepare for MNC interviews.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />
              Hassle-free and tailored training for MAANG company interviews.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />
              Even after a career break, securing a dream job is achievable.
            </p>
            <p>
              <AiOutlineCheck className={styles.tickIcon} />A successful career
              transition even with 0 coding experience.
            </p>
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf" target="_blank">
              <button className={styles.btn}>
                Download Placement Report
                <FaArrowRight className={styles.bIcon} />
              </button>
            </a>
          </div>
          <div className={styles.RightWrap}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hiring-logo-home.webp"
              width="879"
              height="557"
              layout="intrinsic"
               alt="Learnbay"
            />
          </div>
        </div>
      </div>
    </section>
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
          <h1 className={styles.h1}>
            Empower yourself to secure top-level promotions
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
    </>
  );
}

export default ThirdSection;
