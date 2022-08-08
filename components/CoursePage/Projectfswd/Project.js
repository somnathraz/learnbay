import styles from "./project.module.scss";
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  GiArtificialIntelligence,
  GiBank,
  GiHealthNormal,
} from "react-icons/gi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPaypal, BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineCar, AiFillMobile } from "react-icons/ai";
import Image from "next/image";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineBank } from "react-icons/ai";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";

const Project = ({ ChangeProject, project, domain }) => {
  const [popups, setPopups] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [device, setDevice] = useState();

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  let minus = 170;
  useEffect(() => {
    return () => {
      const width = window.innerWidth;

      if (width > 1280) {
        setDevice(1281);
      } else if (width < 1280) {
        setDevice(1279);
      }
      if (width < 1025) {
        setDevice(1025);
      }
      if (width < 481) {
        setDevice(481);
        setMobile(true);
      }
    };
  }, [title]);

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
          slidesPerView={mobile ? 1.2 : 3}
          spaceBetween={mobile ? 10 : 50}
          pagination={true}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/2.png"
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
              Create an online application that
displays the contents of a database in
list form, modify or delete each record
and add new ones.

              </p>
            </div>
            <div style={{ position: "absolute" }}>
              <img src="/shadow.png" width="380" height="60" />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/4.png"
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
              Learn advanced API integration to
connect two or more applications, via
their APIs, that lets those systems
exchange data.

              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/5.png"
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
              The connected website must offer
signup, login/logout, and profile
creation/editing. This must include a
"wishlist box," a "order tracker,"
personalized suggestions, personalized
and occasional discount features, a
chatbot, etc.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/1.png"
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
              Develop Authentication technology that
provides access control for systems by
checking to see if a user’s credentials
match the credentials in a database of
authorized users or in a data
authentication server.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/6.png"
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
              This is a full-stack web development
project at the advanced level that
includes seamless audio-video call
management services. 
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/7.png"
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
              Nothing more than creating a basic
content management system is being
done here. An increased content optimization
feature and graphics optimization
feature are required for such a website
or application.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/3.png"
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
              Learn to integrate the payment gateway
which is used to authorize and process
credit card and debit payments for
online businesses.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={styles.project}
            style={mobile ? { width: "280px" } : { width: "400px" }}
          >
            <div className={styles.header}>
              <div className={styles.right}>
                <Image
                  src="/project/8.png"
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
              These days workout trackers go far
beyond the common pedometer.
Workout trackers like Strava and FitBit
track and store user data like heart rates
and run times.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <a
          href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
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
