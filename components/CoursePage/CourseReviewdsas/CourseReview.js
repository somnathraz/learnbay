import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import styles from "./CourseReview.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDownload, fsdBrochureText } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const CourseReview = ({
  fsdBrochure,
  fullStack,
  dataScience,
  dataScienceCounselling,
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <>
      {" "}
      <div className={styles.reviewWrap}>
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
            <h5>Download Brochure</h5>
            {/* <p>Please enter the following details to initiate your download</p> */}
            <Form
              setTrigger={setPopups}
              downloadBrochure
              upSkillingHide={true}
              fullStack={fullStack}
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
            />
          </div>
        </Popup>
        <div className={styles.swiperleft}>
          <Swiper
            slidesPerView={mobile ? 1.02 : 1}
            spaceBetween={mobile ? 10 : 10}
            navigation={true}
            pagination={{ clickable: true }}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/rahul.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Rahul Anand</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      Excellent training and awesome environment! I took data
                      structures and algorithm training in LearnBay . They teach
                      concepts clearly and solved as many programs as possible.
                      I was getting interview calls even before course
                      completion.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/kamlesh.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Kamlesh Sahu</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      This Course Helped me in getting 6 month SDE INTERNSHIP at
                      AMAZON,India. The advance DSA topics are taught and
                      explained in such a simplified manner that even a newbie
                      can catch up very easily.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Ashutosh.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Ashutosh Chamoli</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I have done the DS & Algo course from Learnbay. I learned
                      from the basics time complexity, arrays, linked list,
                      stack to advance data structures – trees, graphs etc.
                      Getting into product based MNC was always my dream and
                      this course helped me achieve it.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Vishrut.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Vishrut Vats</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      Before joining the DSA course I wasn’t confident on any of
                      the topics. I can see the change in my coding abilities
                      after the completion of the course! I even got interview
                      calls from several product based companies.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Manav.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Manav Jain</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I attended ds algo course under Learnbay. They discussed
                      multiple approaches to solve any problem starting from
                      brute force to one with less complexity. Assignments, mock
                      interviews and job referrals really helped me in my
                      career.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Manish.jpg"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="Learnbay data science course"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Manish Jha</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I took DS course under Learnbay. Irrespective of
                      implementation languages, one can join this. Their
                      excellent training methodology helps to learn quickly.
                      Their mock interviews with referrals to product based
                      companies gave a good boost to my career
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.bottomReview}>
        <h5>Get Assured Interview Call from Top Recruiters</h5>
        <p>Over 250+ Hiring Partners</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hiring-partner-review.png"
          width="1603"
          height="82"
          layout="intrinsic"
          alt="Learnbay"
        />
        <div>
          {fsdBrochure ? (
            <button className="buttonline" onClick={popupShow}>
              Download Placement Report
              <FaDownload style={{ marginLeft: "10px" }} />
            </button>
          ) : (
            <a
              href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report+(1).pdf"
              target="_blank"
            >
              <button>
                Download Placement Report <MdKeyboardArrowDown />
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseReview;
