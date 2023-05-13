import styles from "./project.module.scss";
import React, { useState } from "react";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { FaDownload, FaTools, FaLaptopCode } from "react-icons/fa";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";

const Project = ({
  tools,
  project,
  Hr,
  BFSI,
  DsProject,
  Marketing,
  dataScience,
  titleCourse,
  brochureLink,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsP, setPopupsP] = useState(false);
  const [device, setDevice] = useState();

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ProjectTitle, setProjectTitle] = useState("");
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const popupShowP = () => {
    setPopupsP(true);
  };

  return (
    <div className={styles.projectHeader}>
      <Popup trigger={popupsP} setTrigger={setPopupsP} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form dataScience={dataScience} downloadBrochure titleCourse={titleCourse} brochureLink={brochureLink}/>
        </div>
      </Popup>
      <ProjectPopup
        trigger={popups}
        setTrigger={setPopups}
        title={title}
        desc={desc}
        imgsrc={img}
        PTitle={ProjectTitle}
      />

      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <h3>Industry Projects</h3>
          <p className={styles.ptop}>
            Work on live capstone projects certified from IBM
          </p>

          <div className={styles.iconWrapper}>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Practice with latest tools</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Designed by industry experts</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Get real-world experience</p>
            </div>
          </div>
          <div className={styles.projectNumb}>
            <div className={styles.leftProjectNumb}>
              <FaLaptopCode className={styles.lIcon} />
              <div>
                <h5>{project}</h5>
                <p>Available</p>
              </div>
            </div>
            <div className={styles.rightProjectNumb}>
              <FaTools className={styles.rIcon} />
              <div>
                <h5>{tools} Tools</h5>
                <p>Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          grabCursor={true}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            961: {
              slidesPerView: 1.9,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {DsProject ? (
            <>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>HR Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/1-1.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    IBM intends to boost their HR department by identifying
                    employees' masked inconsistency...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle(
                        "Career progression planning of employees with workforce defections & efficiency"
                      );
                      setProjectTitle("HR Domain");
                      setDesc(
                        "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Marketing Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/swiggy.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Swiggy seeks a broad marketing campaign. But they need
                    automated keyword generation tools...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle(
                        "Descriptive study of trends and irregularities with prediction analysis for conversion."
                      );
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions"
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Manufacturing Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-3.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    This project helped BOSCH to predict their internal failures
                    by production line dataset analysis...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("Manufacturing Domain");
                      setTitle(
                        "Condition-based preventative maintenance and fault prediction in depth"
                      );
                      setDesc(
                        "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Sales Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Untitled-design-2.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    BMW allows existing customers to sell used cars but many
                    competitors are now offering better resale values...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle(
                        "Forecasting future sales with trends and price maximization"
                      );
                      setProjectTitle("Sales Domain");
                      setDesc(
                        "BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Healthcare Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/5(2).png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Samsung will launch a new healthcare app soon. The key goal
                    of this app is accurate human activity...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle(
                        "Understanding covid-19 cases and fatality rate by time series forecasting"
                      );
                      setProjectTitle("Healthcare Domain");
                      setDesc(
                        "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>E-Commerce Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/4(2).png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Amazon has made a goal to identify the most successful
                    consumer electronic products...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("E-Commerce Domain");
                      setTitle(
                        "Recommendation system with customer lifetime value analysis (CLV)"
                      );
                      setDesc(
                        "Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Entertainment Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/9-1.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Netflix is a global entertainment video streaming site. They
                    offer content in various regional languages...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle(
                        "Building a content recommendation model on the basis of regional viewer categorization"
                      );
                      setProjectTitle("Media Domain");
                      setDesc(
                        "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
            </>
          ) : (
            ""
          )}
          {Hr ? (
            <>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Workforce Planning at GE</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/ge.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    E uses predictive analytics to forecast future talent needs
                    and identify gaps in their workforce. By analyzing HR data
                    such as employee demographics...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Workforce Planning at GE");
                      setProjectTitle("HR Domain");
                      setDesc(
                        "E uses predictive analytics to forecast future talent needs and identify gaps in their workforce. By analyzing HR data such as employee demographics, attrition rates, and skills, GE can make informed decisions about hiring and workforce planning. Tools and Techniques used: Predictive analytics, Demographic analysis, Skills gap analysis.                        "
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Management at Deloitte</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/deloite.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Deloitte uses a data-driven approach to performance
                    management. The company utilizes analytics to measure
                    employee performance...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Performance Management at Deloitte");
                      setProjectTitle("HR Domain");
                      setDesc(
                        "Deloitte uses a data-driven approach to performance management. The company utilizes analytics to measure employee performance, provide feedback, and identify areas for improvement.                        Tools and Techniques used: Performance metrics, Feedback analysis, Continuous performance management.                        "
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Diversity and Inclusion at Google</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/google.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Google uses analytics to monitor and improve diversity and
                    inclusion within the company. By analyzing HR data...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("HR Domain");
                      setTitle("Diversity and Inclusion at Google");
                      setDesc(
                        "Google uses analytics to monitor and improve diversity and inclusion within the company. By analyzing HR data, such as employee demographics and hiring practices, Google can identify areas where it needs to improve diversity and create initiatives to promote inclusion. Tools and Techniques used: Diversity metrics, Demographic analysis, Inclusion programs."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Compensation Analytics at Netflix</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/netflix.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Netflix uses analytics to determine employee compensation
                    packages. By analyzing HR data such as market benchmarks...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Compensation Analytics at Netflix");
                      setProjectTitle("HR Domain");
                      setDesc(
                        "Netflix uses analytics to determine employee compensation packages. By analyzing HR data such as market benchmarks, employee performance, and tenure, Netflix can offer compensation packages that are competitive and fair. Tools and Techniques used: Compensation analysis, Market benchmarking, Performance analysis."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Succession Planning at AT&T</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/at%26t.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    AT&T uses analytics to identify high-potential employees and
                    develop them for future leadership roles...
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Succession Planning at AT&T");
                      setProjectTitle("HR Domain");
                      setDesc(
                        "AT&T uses analytics to identify high-potential employees and develop them for future leadership roles. By analyzing HR data such as performance metrics, skills, and career aspirations, AT&T can create targeted development plans for its employees.                        "
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
            </>
          ) : (
            ""
          )}
          {BFSI ? (
            <>
              {" "}
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Risk Management</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/JP.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a risk management system that uses predictive
                    analytics to identify and assess risks in the financial
                    sector.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Risk Management");
                      setProjectTitle("BFSI Domain");
                      setDesc(
                        "Develop a risk management system that uses predictive analytics to identify and assess risks in the financial sector. Tools used: SAS, Tableau. Company: JPMorgan Chase."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Fraud Detection</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/american.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a fraud detection system that uses machine learning
                    algorithms to identify potential fraud in financial
                    transactions.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Fraud Detection");
                      setProjectTitle("BFSI Domain");
                      setDesc(
                        "Develop a fraud detection system that uses machine learning algorithms to identify potential fraud in financial transactions."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Customer Segmentation</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/citibank.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a customer segmentation system that uses data
                    analytics to segment customers based on demographics and
                    financial behavior.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("Manufacturing Domain");
                      setTitle("BFSI Segmentation");
                      setDesc(
                        " Develop a customer segmentation system that uses data analytics to segment customers based on demographics and financial behavior.."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Anti-Money Laundering</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HSBC.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop an anti-money laundering system that uses predictive
                    analytics to detect and prevent money laundering.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("prevent money laundering.");
                      setProjectTitle("BFSI Domain");
                      setDesc(
                        "Develop an anti-money laundering system that uses predictive analytics to detect and "
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Loan Origination</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/at%26t.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a loan origination system that uses machine learning
                    to automate the loan application process and determine
                    creditworthiness.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Loan OriginationLoan Origination");
                      setProjectTitle("BFSI Domain");
                      setDesc(
                        "Develop a loan origination system that uses machine learning to automate the loan application process and determine creditworthiness."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Trading Analytics</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/goldman.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a trading analytics system that uses big data
                    analytics to analyze financial data and improve trading
                    strategies.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("Trading Analytics");
                      setTitle("BFSI Domain");
                      setDesc(
                        "Develop a trading analytics system that uses big data analytics to analyze financial data and improve trading strategies. "
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Portfolio Management</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/black+rock.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Develop a portfolio management system that uses data
                    analytics to optimize investment portfolios and maximize
                    returns.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Portfolio Management");
                      setProjectTitle("BFSI Domain");
                      setDesc(
                        " Develop a portfolio management system that uses data analytics to optimize investment portfolios and maximize returns."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
            </>
          ) : (
            ""
          )}
          {Marketing ? (
            <>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Coca-Cola</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/coca.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Coca-Cola used Tableau to optimize their social media
                    campaign performance by analyzing the data from their social
                    media channels and identifying key performance indicators
                    (KPIs).
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Coca-Cola");
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Coca-Cola used Tableau to optimize their social media campaign performance by analyzing the data from their social media channels and identifying key performance indicators (KPIs)."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Amazon</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/amazon.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Amazon used Google Analytics to track their website traffic
                    and analyze customer behavior, enabling them to optimize
                    their online shopping experience.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Amazon");
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Amazon used Google Analytics to track their website traffic and analyze customer behavior, enabling them to optimize their online shopping experience."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Procter & Gamble</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/P%26G.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Procter & Gamble used SAS to analyze customer data and
                    identify patterns in customer behavior, enabling them to
                    make data-driven decisions about their marketing strategy.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("Manufacturing Domain");
                      setTitle("Procter & Gamble");
                      setDesc(
                        "Procter & Gamble used SAS to analyze customer data and identify patterns in customer behavior, enabling them to make data-driven decisions about their marketing strategy."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Netflix</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/netflix+(1).png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Netflix used A/B testing and machine learning algorithms to
                    optimize their recommendations engine and improve the
                    personalized content recommendations for their users.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Netflix");
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Netflix used A/B testing and machine learning algorithms to optimize their recommendations engine and improve the personalized content recommendations for their users."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Uber</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/uber.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Uber used predictive analytics and machine learning
                    algorithms to optimize their pricing strategies and surge
                    pricing algorithm, enabling them to provide a better user
                    experience.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Uber");
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Uber used predictive analytics and machine learning algorithms to optimize their pricing strategies and surge pricing algorithm, enabling them to provide a better user experience."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Airbnb</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/airbnb.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Airbnb used data analytics tools such as R and Python to
                    analyze customer data and improve their marketing campaigns,
                    resulting in increased customer engagement and revenue.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setProjectTitle("Marketing Domain");
                      setTitle("Airbnb");
                      setDesc(
                        "Airbnb used data analytics tools such as R and Python to analyze customer data and improve their marketing campaigns, resulting in increased customer engagement and revenue."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Walmart</h5>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Walmart-logo.png"
                      alt="Learnbay"
                      quality={100}
                      objectFit="contain"
                      width="90"
                      height="45"
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                    Walmart used Hadoop and Hive to analyze customer data and
                    identify patterns in customer behavior, enabling them to
                    optimize their marketing campaigns and increase sales.
                  </p>
                  <span
                    onClick={() => {
                      popupShow();
                      setTitle("Walmart");
                      setProjectTitle("Marketing Domain");
                      setDesc(
                        "Walmart used Hadoop and Hive to analyze customer data and identify patterns in customer behavior, enabling them to optimize their marketing campaigns and increase sales."
                      );
                      setImg(
                        "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png"
                      );
                    }}
                  >
                    Learn More
                  </span>
                </div>
              </SwiperSlide>
            </>
          ) : (
            ""
          )}
        </Swiper>
      </div>

      <div>
        <button
          onClick={popupShowP}
          style={{ margin: "auto", fontSize: "16px" }}
        >
          <FaDownload
            className={styles.bicon}
            style={{ marginRight: "10px" }}
          />
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default React.memo(Project);
