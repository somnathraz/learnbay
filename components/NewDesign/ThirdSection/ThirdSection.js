import React, { useState, useEffect } from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

function ThirdSection({
  dataScience,
  dataScienceCounselling,
  secondLine,
  thirdHead,
  point1,
  point2,
  point3,
  point4,
  thirdHeadSpan,
  titleCourse,
  brochureLink,
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
      <Popup trigger={popupsB} setTrigger={setPopupsB} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            downloadBrochure
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <section className={styles.Features}>
        <div>
          <h6 className={styles.infop}>300+ placement and hiring partners</h6>
          {/* <p className={styles.ptop}>
            Experience the power of our industry connections
          </p> */}
          <div className={styles.FeatureWrap}>
            <div className={styles.LeftWrap}>
              <div className={styles.ParaWrap} style={{ marginTop: "0" }}>
                <div className={styles.number}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png"
                    width={30}
                    height={60}
                    layout="intrinsic"
                  />
                </div>
                <span>{point1}</span>
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
                <span>{point2}</span>
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
                <span>{point3}</span>
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
                <span>{point4}</span>
              </div>
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
        <div className={styles.btnWrap}>
          <button onClick={popupShowD} className={styles.fillBtn}>
            Download Placement Report
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
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
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
            />
          </div>
        </Popup>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopBox}>{secondLine}</p>
          <h1 className={styles.h1}>
            {thirdHead}
            <span className={styles.h1Span}>{thirdHeadSpan}</span>
          </h1>
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
    </>
  );
}

export default ThirdSection;
