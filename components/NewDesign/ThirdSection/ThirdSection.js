import React, { useState } from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaArrowRight } from "react-icons/fa";

function ThirdSection() {
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
      <p className={styles.infop}>PLACEMENTS AT</p>
      <div className={styles.boxGrey}>
        <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Placements-Logo.png"
            width="543"
            height="25"
            layout="intrinsic"
            alt="data science course"
            className={styles.imgPlacement}
          />
        </div>
        <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Placements-Logo-2.png"
            width="543"
            height="25"
            layout="intrinsic"
            alt="data science course"
            className={styles.imgPlacement}
          />
        </div>
      </div>
      <div className={styles.boxText}>
        <div className={styles.blueD}>
          <p className={styles.Htop}>10K+</p>
          <p className={styles.ptop}>Trusted<br/>learners</p>
        </div>
        <div className={styles.green}>
          <p className={styles.Htop}>250%</p>
          <p className={styles.ptop}>Salary<br/>hike</p>
        </div>
        <div className={styles.yellow}>
          <p className={styles.Htop}>9,873</p>
          <p className={styles.ptop}>Students<br/>placed</p>
        </div>
        <div className={styles.blue}>
          <p className={styles.Htop}>7+</p>
          <p className={styles.ptop}>Domain<br/>Electives</p>
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
          <h5>Download Brochure</h5>
          <Form />
        </div>
      </Popup>
      <div className={styles.FirstLeft}>
        <p className={styles.ptopB}>
          Take the first step in your blockchain development journey with our
        </p>
        <h1 className={styles.h1}>
          Software Development Program with{" "}
          <span className={styles.h1Span}>Specialization in Blockchain</span>
        </h1>
        <p className={styles.ptop}>
          Designed for professionals seeking to accelerate their careers in the
          emerging field of blockchain technology.
        </p>
        <p className={styles.ptop}>In collaboration with</p>
        <div className={styles.IBMlogo}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
            width="283"
            height="51"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
        <p className={styles.ptop}>
          Designed for professionals seeking to accelerate their careers in the
          emerging field of blockchain technology.
        </p>
      </div>
      <div className={styles.secondLeft}>
        <div className={styles.PlayImg}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Map(learners).png"
          width="517"
          height="679"
          layout="intrinsic"
          alt="data science course"
        />
        </div>
      </div>
    </div>
      <div className={styles.boxBlue}>
        <h2 className={styles.boxH2}>
          Still unsure if this is the right program for you?
        </h2>
        <p className={styles.boxP}>
          Talk to our expert counsellor to help you make the right career choice
        </p>
        <button onClick={popupShow}>
          Book free consultation now
          <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
      <div className={styles.batch}>
        <p className={styles.infop}>Batch profile</p>
        <p className={styles.batchP}>
          The Software Development with Specialization in Blockchain Program is
          designed for working individuals from various sectors. The variety of
          students enriches class discussions and interactions.
        </p>
        <div className={styles.batchImage}>
          <div>
            <p className={styles.infop} style={{ textAlign: "left" }}>
              industry
            </p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Industry-Pie-Chart.png"
              width="656"
              height="449"
              layout="intrinsic"
              alt="data science course"
            />
          </div>
          <div>
            <p className={styles.infop} style={{ textAlign: "left" }}>
              DESIGNATION BREAKUP
            </p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Designation-breakup.png"
              width="686"
              height="466"
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
