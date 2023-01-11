import styles from "./project.module.scss";
import React, { useState } from "react";

import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";

import { FaDownload } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineBank } from "react-icons/ai";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";

const Project = ({ ChangeProject, project, domain }) => {
  const [popups, setPopups] = useState(false);

  const [device, setDevice] = useState();

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.projectHeader}>
      <ProjectPopup
        trigger={popups}
        setTrigger={setPopups}
        title={title}
        desc={desc}
        imgsrc={img}
      />

      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <h3>Hands-on Projects</h3>

          <div className={styles.iconWrapper}>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Practice with Latest Tools</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Designed by Industry Experts</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Get Real-world Experience</p>
            </div>
          </div>
          <div className={styles.projectNumb}>
            <div className={styles.leftProjectNumb}>
              <GoDeviceDesktop className={styles.lIcon} />
              <div>
                <h5>{project}</h5>
                <p>Available</p>
              </div>
            </div>
            <div className={styles.rightProjectNumb}>
              <AiOutlineBank className={styles.rIcon} />
              <div>
                <h5>7+ Cities</h5>
                <p>with Hybrid Model</p>
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
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
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
                  setTitle("HR Domain");
                  setDesc(
                    "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png");
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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/2-3.png"
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
                Swiggy seeks a broad marketing campaign. But they need automated
                keyword generation tools...
              </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Marketing Domain");
                  setDesc(
                    "Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions"
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png");
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
                This project helped BOSCH to predict their internal failures by
                production line dataset analysis...
              </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Supply chain Domain");
                  setDesc(
                    "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
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
                  setTitle("Sales Domain");
                  setDesc(
                    "BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>Retail Domain</h5>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/12-1.png"
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
                Take an active part in the Walmart sales forecasting project.
                From the huge data set available,...
              </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Retail Domain");
                  setDesc(
                    "Take an active part in the Walmart sales forecasting project. From the huge data set available, you have to perform a sales forecast for 45 Walmart stores. You have to include holiday markdown sales too."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
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
                Samsung will launch a new healthcare app soon. The key goal of
                this app is accurate human activity...
              </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Healthcare Domain");
                  setDesc(
                    "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
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
                Amazon has made a goal to identify the most successful consumer
                electronic products...
              </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("E-Commerce Domain");
                  setDesc(
                    "Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
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
                  setTitle("Entertainment Domain");
                  setDesc(
                    "Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <a
          href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
          target={"_blank"}
        >
          <button
            style={{ margin: "auto", marginTop: "20px", fontSize: "16px" }}
          >
            <FaDownload
              className={styles.bicon}
              style={{ marginRight: "10px" }}
            />
            Project Brochure
          </button>
        </a>
      </div>
    </div>
  );
};

export default React.memo(Project);
