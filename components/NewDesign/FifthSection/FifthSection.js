import React, { useState, useEffect } from "react";
import styles from "./FifthSection.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import FeeSection from "./Fee";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import Certificate from "../FifthSection/CertificateTabAdvance";
import AIMLCertificateTab from "../CertificateTab/AIMLCertificateTab";
import ManagersCertificateTab from "../CertificateTab/ManagersCertificateTab";
import MasterCertificateTab from "../CertificateTab/MasterCertificateTab";
import AnalyticsCertificateTab from "../CertificateTab/AnalyticsCertificateTab";
import BACertificateTab from "../FifthSection/CertificateTabBusiness";
import FinanceCertificateTab from "../CertificateTab/FinanceCertificateTab";
import CertificateTabAdvance from "../FifthSection/CertificateTabAdvance"

function FifthSection({
  FeeHeading,
  BACertificate,
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
  dataAnalyticsCertificate,
  dataScience,
  Fee,
  FeeContent1,
  FeeContent2,
  FeeContent3,
  FeeContent4,
  FeeContent5,
  FeeContent6,
  FeeEmi,
  hidetools,
  advanceCertificate,
  AIMLCertificate,
  MasterCertificate,
  ManagersCertificate,
  AnalyticsCertificate,
  FinanceCertificate,
  NoCertficate,
}) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [popups, setPopups] = useState(false);
  const [spaceBetween, setSpaceBetween] = useState(70);
  const [changeHeading, setChangeHeading] = useState(false);
  const [changeText, setChangeText] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setChangeHeading(demoClass);
    setChangeText(changeText);
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
          <Form dataScience={dataScience} />
        </div>
      </Popup>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      {hidetools ? (
        ""
      ) : (
        <div className={styles.toolscoverd}>
          <p className={styles.infop}>Wide Range Of Tools & Modules</p>
          <div className={styles.sliderTopD}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
                  alt="github"
                  layout="intrinsic"
                  width="1458"
                  height="186"
                  objectFit="contain"
                />
          </div>
          <div className={styles.sliderTopM}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
                  alt="github"
                  layout="intrinsic"
                  width="481"
                  height="153"
                  objectFit="contain"
                />
          </div>
        </div>
      )}
      {NoCertficate ? (
        ""
      ) : (
        <div>
          <p className={styles.infop}>Globally Recognized Program</p>
          <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
          {advanceCertificate ? <Certificate /> : ""}
          {AIMLCertificate ? <AIMLCertificateTab /> : ""}
          {MasterCertificate ? <MasterCertificateTab /> : ""}
          {ManagersCertificate ? <ManagersCertificateTab /> : ""}
          {AnalyticsCertificate ? <AnalyticsCertificateTab /> : ""}
          {BACertificate ? <BACertificateTab /> : ""}
          {FinanceCertificate ? <FinanceCertificateTab /> : ""}
          {dataAnalyticsCertificate ? <CertificateTabAdvance Ibm={true} /> : ""}
        </div>
      )}
      {/* <div className={styles.fee}>
        <p className={styles.infop} style={{ color: "#fff" }}>
          Program fee & financing
        </p>
        <div className={styles.feeBox}>
          <p>Total fee</p>
          <h2 style={{ color: "#0072bc" }}>{Fee}</h2>
          <div className={styles.line}></div>
          <p>Easy No-Cost EMI</p>
          <h2 style={{ color: "#0072bc" }}>{FeeEmi}</h2>
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
      </div> */}
      <div className={styles.feeD}>
        <FeeSection
          Fee={Fee}
          FeeHeading={FeeHeading}
          FeeContent1={FeeContent1}
          FeeContent2={FeeContent2}
          FeeContent3={FeeContent3}
          FeeContent4={FeeContent4}
          FeeContent5={FeeContent5}
          FeeContent6={FeeContent6}
          FeeEmi={FeeEmi}
        />
      </div>
    </>
  );
}

export default FifthSection;
