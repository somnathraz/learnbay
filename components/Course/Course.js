import React, { useState } from "react";
import styles from "./Course.module.css";
import { FiDownload } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);


  const filtteredViewAllD = viewAllD.filter((post)=> post.tag === "Data science")
  const filtteredViewAllF = viewAllD.filter((post)=> post.tag === "Full stack")
  return (
    <div className={styles.Course} id="course">
      <h2>Industry Accredited Certification For Professionals</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? {
                    background: "white",
                    color: "#2D9CD7",
                    borderTop: "4px solid #2d9cd7",
                    borderRight: "2px solid #28557a2e",
                  }
                : { background: "white", borderBottom: "2px solid #28557a2e" }
            }
          >
            Popular Courses
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? {
                    background: "white",
                    color: "#2D9CD7",
                    borderTop: "4px solid #2d9cd7",
                    borderRight: "2px solid #28557a2e",
                  }
                : {
                    background: "white",
                    borderBottom: "2px solid #28557a2e",
                    marginTop: "-10px",
                    paddingTop: "30px",
                    marginRight: "-3px",
                  }
            }
          >
            Data Science & AI
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? {
                    background: "white",
                    color: "#2D9CD7",
                    borderTop: "4px solid #2d9cd7",
                    borderRight: "2px solid #28557a2e",
                  }
                : {
                    background: "white",
                    borderBottom: "2px solid #28557a2e",
                    marginTop: "-10px",
                    paddingTop: "30px",
                    marginRight: "-3px",
                  }
            }
          >
            Full Stack Development
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#2D9CD7",
                    borderTop: "4px solid #2d9cd7",
                    borderRight: "2px solid #28557a2e",
                  }
                : {
                    background: "white",
                    borderBottom: "2px solid #28557a2e",
                    marginTop: "-10px",
                    paddingTop: "30px",
                    marginRight: "-3px",
                  }
            }
          >
            100% Job Guaranteed
          </span>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? {
                    background: "white",
                    color: "#2D9CD7",
                    borderTop: "3px solid #2d9cd7",
                    borderRight: "2px solid #28557a2e",
                  }
                : {
                    background: "white",
                    borderBottom: "2px solid #28557a2e",
                    marginTop: "-10px",
                    paddingTop: "30px",
                    marginRight: "-3px",
                  }
            }
          >
            View All
          </span>
        </div>
        {viewAll ? (
          <>          
           <h5>Data Science</h5>
          <div className={styles.gridPanel}>
           
          <Swiper
             slidesPerView={mobile ? 1 : 3}
             spaceBetween={mobile ? 10 : 20}
             navigation={true}
             grabCursor={true}
            
             modules={[ Navigation]}
             className="mySwiper"
           >
            {
           
          filtteredViewAllD.map((viewAllData) => {
              const { id, title, title1, img, para, link1, link2,tag } =
                viewAllData;
              return (
               <SwiperSlide  className={styles.leftSide}>
                <div key={id}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                  />
                  <div className={styles.contentBox}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>
                      <BiTimeFive className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <AiOutlineFundProjectionScreen
                        className={styles.checkCircle}
                        style={{ color: "#edb552" }}
                      />
                      {para[1]}
                    </p>
                    <p>
                      <TbCurrencyRupee className={styles.checkCircle} />
                      {para[2]}
                    </p>
                    <div className={styles.btnWrapper}>
                      <a href={link1}>
                        <button>View Details</button>
                      </a>
                      <a href={link2} target="_blank">
                        <button
                          className="outLineBtn"
                          style={{ padding: "8px 15px" }}
                        >
                          Brochure
                          <FiDownload
                            className="bIcon"
                            style={{ color: "#2979AD" }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              );
            })}
            </Swiper>
          </div>
          <h5>Full Stack</h5>
          <div className={styles.gridPanel}>
           

           {
           
         filtteredViewAllF.map((viewAllData) => {
             const { id, title, title1, img, para, link1, link2,tag } =
               viewAllData;
             return (
               <div className={styles.leftSide} key={id}>
                 <img
                   src={img}
                   layout="intrinsic"
                   className={styles.courseImg}
                 />
                 <div className={styles.contentBox}>
                   <h6>{title}</h6>
                   <h6>{title1}</h6>
                   <p>
                     <BiTimeFive className={styles.checkCircle} />
                     {para[0]}
                   </p>
                   <p>
                     <AiOutlineFundProjectionScreen
                       className={styles.checkCircle}
                       style={{ color: "#edb552" }}
                     />
                     {para[1]}
                   </p>
                   <p>
                     <TbCurrencyRupee className={styles.checkCircle} />
                     {para[2]}
                   </p>
                   <div className={styles.btnWrapper}>
                     <a href={link1}>
                       <button>View Details</button>
                     </a>
                     <a href={link2} target="_blank">
                       <button
                         className="outLineBtn"
                         style={{ padding: "8px 15px" }}
                       >
                         Brochure
                         <FiDownload
                           className="bIcon"
                           style={{ color: "#2979AD" }}
                         />
                       </button>
                     </a>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
          </>

        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            {ForProgrammersD.map((viewAllData) => {
              const { id, title, title1, img, para, link1, link2 } =
                viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                  />
                  <div className={styles.contentBox}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>
                      <BiTimeFive className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <AiOutlineFundProjectionScreen
                        className={styles.checkCircle}
                        style={{ color: "#edb552" }}
                      />
                      {para[1]}
                    </p>
                    <p>
                      <TbCurrencyRupee className={styles.checkCircle} />
                      {para[2]}
                    </p>
                    <div className={styles.btnWrapper}>
                      <a href={link1}>
                        <button>View Details</button>
                      </a>
                      <a href={link2} target="_blank">
                        <button
                          className="outLineBtn"
                          style={{ padding: "8px 15px" }}
                        >
                          Brochure
                          <FiDownload
                            className="bIcon"
                            style={{ color: "#2979AD" }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            {ForNonProgrammerD.map((viewAllData) => {
              const { id, title, title1, img, para, link1, link2 } =
                viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                  />
                  <div className={styles.contentBox}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>
                      <BiTimeFive className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <AiOutlineFundProjectionScreen
                        className={styles.checkCircle}
                        style={{ color: "#edb552" }}
                      />
                      {para[1]}
                    </p>
                    <p>
                      <TbCurrencyRupee className={styles.checkCircle} />
                      {para[2]}
                    </p>
                    <div className={styles.btnWrapper}>
                      <a href={link1}>
                        <button>View Details</button>
                      </a>
                      <a href={link2} target="_blank">
                        <button
                          className="outLineBtn"
                          style={{ padding: "8px 15px" }}
                        >
                          Brochure
                          <FiDownload
                            className="bIcon"
                            style={{ color: "#2979AD" }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            {JobGuaranteeD.map((viewAllData) => {
              const { id, title, title1, img, para, link1, link2 } =
                viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                  />
                  <div className={styles.contentBox}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>
                      <BiTimeFive className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <AiOutlineFundProjectionScreen
                        className={styles.checkCircle}
                        style={{ color: "#edb552" }}
                      />
                      {para[1]}
                    </p>
                    <p>
                      <TbCurrencyRupee className={styles.checkCircle} />
                      {para[2]}
                    </p>
                    <div className={styles.btnWrapper}>
                      <a href={link1}>
                        <button>View Details</button>
                      </a>
                      <a href={link2} target="_blank">
                        <button
                          className="outLineBtn"
                          style={{ padding: "8px 15px" }}
                        >
                          Brochure
                          <FiDownload
                            className="bIcon"
                            style={{ color: "#2979AD" }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            {StackD.map((viewAllData) => {
              const { id, title, title1, img, para, link1, link2 } =
                viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.courseImg}
                  />
                  <div className={styles.contentBox}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>
                      <BiTimeFive className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <AiOutlineFundProjectionScreen
                        className={styles.checkCircle}
                        style={{ color: "#edb552" }}
                      />
                      {para[1]}
                    </p>
                    <p>
                      <TbCurrencyRupee className={styles.checkCircle} />
                      {para[2]}
                    </p>
                    <div className={styles.btnWrapper}>
                      <a href={link1}>
                        <button>View Details</button>
                      </a>
                      <a href={link2} target="_blank">
                        <button
                          className="outLineBtn"
                          style={{ padding: "8px 15px" }}
                        >
                          Brochure
                          <FiDownload
                            className="bIcon"
                            style={{ color: "#2979AD" }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Course;
