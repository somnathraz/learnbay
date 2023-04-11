import React, { useState, useEffect } from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineCheck } from "react-icons/ai";
import {
  RiNumber1,
  RiNumber0,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";

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
  const [popupsB, setPopupsB] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const popupShowD = () => {
    setPopupsB(true);
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
        trigger={popupsB}
        setTrigger={setPopupsB}
        className="popupModal"
        
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form dataScience={dataScience} downloadBrochure/>
        </div>
      </Popup>
      <section className={styles.Features}>
        <div>
          <h6 className={styles.infop}>Partnered With 300+ Companies</h6>
          <p className={styles.ptop}>
            Experience the power of our industry connections
          </p>
          <div className={styles.FeatureWrap}>
            <div className={styles.LeftWrap}>
              <div className={styles.ParaWrap}>
                <div className={styles.number}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                    width={30}
                    height={60}
                    layout="intrinsic"
                  />
                </div>
                <span>Enjoy 3 Years Of Career Service Access</span>
              </div>
              <div className={styles.ParaWrap1}>
                <div className={styles.number}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png"
                    width={40}
                    height={60}
                    layout="intrinsic"
                  />
                </div>
                <span>Get 3 Mock Session With Industry Leaders</span>
              </div>
              <div className={styles.ParaWrap2}>
                <div className={styles.number}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png"
                    width={40}
                    height={60}
                    layout="intrinsic"
                  />
                </div>
                <span>Resume Build Up Session</span>
              </div>
              <div className={styles.ParaWrap3}>
                <div className={styles.number}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png"
                    width={40}
                    height={60}
                    layout="intrinsic"
                  />
                </div>
                <span>Get 5-8 Interview Calls</span>
              </div>
                <button onClick={popupShowD} className={styles.fillBtn}>
                Download Placement Report
                  <FaDownload style={{ marginLeft: "10px" }} />
                </button>
            </div>
            <div className={styles.RightWrap}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Placement+Logos+No+Map.png"
                width="850"
                height="600"
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
            {thirdHead}
            <span className={styles.h1Span}>{thirdHeadSpan}</span>
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
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-Mobile-View.png"
              width="910"
              height="920"
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
