import React, { useEffect, useState } from "react";
import styles from "./SixthSection.module.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { BsCheckCircleFill } from "react-icons/bs";

function SixthSection({
  CourseFeeHead,
  WebDev,
  FullStack,
  blockchainProject,
  SpecDSAIProject,
  point1,
  point2,
  point3,
  point4,
  SpecDevOpsProject,
  FoundationDSProject,
  dataScience,
  dataScienceCounselling,
  srcD,
}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            popup={true}
            downloadBrochure
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            setTrigger={setPopups}
          />
        </div>
      </Popup>
      <div className={styles.project}>
        <p className={styles.infop}>CURRICULUM</p>
        <h2 className={styles.h1}>Projects</h2>
        <div className={styles.points}>
          <p className={styles.checkP}>
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
          </p>
        </div>
        {blockchainProject ? (
          <section>
            <div className={styles.Section1}>
              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.2 : 3}
                    spaceBetween={mobile ? 10 : 15}
                    scrollbar={{ draggable: true }}
                    grabCursor={true}
                    modules={[Scrollbar]}
                    className="mySwiper"
                  >
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/facebook.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a social media
                            platform where users can connect with friends and
                            family, share content, and join groups.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Social Media Platform
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>PHP, React, and MySQL
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/netflix.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="55"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a video streaming
                            service that allows users to watch movies and TV
                            shows.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Video Streaming Service
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Java, Spring Boot, React, and MySQL
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/linkedin.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="54"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a professional
                            networking platform where users can create profiles,
                            connect with other professionals, and apply for
                            jobs.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Professional Networking Platform
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>React, and PostgreSQL.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/spotify.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="61"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a music streaming
                            service that allows users to discover and listen to
                            music.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Music Streaming Service
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Java, Spring Boot, React, and MySQL
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/airbnb.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="70"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a hospitality
                            platform where users can search for and book
                            accommodations.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Hospitality Platform
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Django, React, and PostgreSQL
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/uber.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="71"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing a ride-hailing app
                            that allows users to request rides, track their
                            location, and pay for their trips.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Ride-hailing App
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Node.js, React Native, MongoDB, and
                            Google Maps API
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/amazon.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="58"
                            height="35"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            The project involves developing an e-commerce
                            platform with features such as product listings,
                            payment processing, and order tracking.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>E-commerce Platform
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Java, Spring Boot, React, and MySQL.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/theta.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="51"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Decentralized video streaming platform that rewards
                            users for sharing their bandwidth and computing
                            resources.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Entertainment.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Theta blockchain protocol, WebRTC,
                            and CDN.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/hedera.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="53"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Decentralized public network that enables fast and
                            secure applications. Uses a patented consensus
                            algorithm for high throughput.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Various.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Hashgraph consensus algorithm.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/visa.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="65"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Cross-border payments platform that uses blockchain
                            technology for secure and efficient settlement of
                            international payments.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Finance.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Hyperledger Fabric.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/walmart.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="72"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Blockchain-based system for tracking food products
                            in the supply chain, providing transparency and
                            visibility to customers.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Food and Agriculture.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Hyperledger Fabric.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/microsoft.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="43"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Cloud-based platform that allows for easy deployment
                            and management of blockchain networks. Supports
                            multiple protocols and integrates with existing
                            enterprise systems.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Cloud-based.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Ethereum, Corda, and Hyperledger
                            Fabric.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/jpmorgan.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="45"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Permissioned blockchain platform for financial
                            institutions that provides privacy features and
                            efficient settlement of financial transactions.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Finance.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Ethereum, Solidity, and Go.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/IBM.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="81"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>
                            Supply chain management platform that enables secure
                            and transparent sharing of trade data.
                          </p>
                          <p className={styles.para}>
                            <b>Domain : </b>Logistics and Shipping.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Hyperledger Fabric, Kubernetes, and
                            Docker.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {dataScience ? (
              <a href={srcD} target="_blank">
                <button className={styles.button}>
                  Download Brochure
                  <FaDownload
                    className={styles.icon}
                    style={{ marginLeft: "10px" }}
                  />
                </button>
              </a>
            ) : (
              <button onClick={popupShow} className={styles.button}>
                Download Brochure
                <FaDownload
                  className={styles.icon}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            )}
          </section>
        ) : (
          ""
        )}
        {SpecDSAIProject ? (
          <section>
            <div className={styles.Section1}>
              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.2 : 3}
                    spaceBetween={mobile ? 10 : 15}
                    scrollbar={{ draggable: true }}
                    grabCursor={true}
                    modules={[Scrollbar]}
                    className="mySwiper"
                  >
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/visa.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="65"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Fraud Detection in Financial Transactions using
                              Machine Learning
                            </b>
                          </p>
                          <p className={styles.para}>
                            Detecting fraudulent financial transactions using
                            machine learning models.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Scikit-learn, Pandas, Numpy
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/microsoft.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Natural Language Processing for Chatbot
                              Development
                            </b>
                          </p>
                          <p className={styles.para}>
                            Developing chatbots with natural language processing
                            capabilities.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, NLTK, RASA, Dialogflow
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/amazon.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="58"
                            height="35"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Product Recommendation using Collaborative
                              Filtering
                            </b>
                          </p>
                          <p className={styles.para}>
                            Developing personalized product recommendations
                            using collaborative filtering.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Pandas, Numpy, Scikit-learn
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/jpmorgan.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="45"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Image Segmentation using Convolutional Neural
                              Networks
                            </b>
                          </p>
                          <p className={styles.para}>
                            Segmenting images using convolutional neural
                            networks for applications like medical image
                            analysis.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Tensorflow, Keras, OpenCV
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/spotify.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="61"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Recommender System for Music Streaming Services
                            </b>
                          </p>
                          <p className={styles.para}>
                            Developing personalized music recommendations using
                            collaborative filtering.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Pandas, Numpy, Scikit-learn
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/airbnb.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="70"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Anomaly Detection using Unsupervised Learning</b>
                          </p>
                          <p className={styles.para}>
                            Detecting anomalies in data using unsupervised
                            learning models.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Scikit-learn, Pandas, Numpy
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/facebook.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Text Classification using Deep Learning</b>
                          </p>
                          <p className={styles.para}>
                            Classifying text using deep learning models for
                            applications like spam detection.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Tensorflow, Keras, NLTK
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/IBM.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="81"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Medical Diagnosis using Machine Learning</b>
                          </p>
                          <p className={styles.para}>
                            Developing machine learning models for medical
                            diagnosis.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Scikit-learn, Pandas, Numpy
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/netflix.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="55"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Personalized Marketing using Collaborative
                              Filtering
                            </b>
                          </p>
                          <p className={styles.para}>
                            Developing personalized marketing strategies using
                            collaborative filtering.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Pandas, Numpy, Scikit-learn
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/walmart.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Demand Forecasting using Time Series Analysis</b>
                          </p>
                          <p className={styles.para}>
                            Forecasting demand using time series analysis.
                          </p>
                          <p className={styles.para}>
                            <b>Tools : </b>Python, Pandas, Numpy, Prophet
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {dataScience ? (
              <a href={srcD} target="_blank">
                <button className={styles.button}>
                  Download Brochure
                  <FaDownload
                    className={styles.icon}
                    style={{ marginLeft: "10px" }}
                  />
                </button>
              </a>
            ) : (
              <button onClick={popupShow} className={styles.button}>
                Download Brochure
                <FaDownload
                  className={styles.icon}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            )}
          </section>
        ) : (
          ""
        )}
        {SpecDevOpsProject ? (
          <section>
            <div className={styles.Section1}>
              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.2 : 3}
                    spaceBetween={mobile ? 10 : 15}
                    scrollbar={{ draggable: true }}
                    grabCursor={true}
                    modules={[Scrollbar]}
                    className="mySwiper"
                  >
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/amazon.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="58"
                            height="35"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>
                              Automated CI/CD Pipeline using Jenkins and
                              Kubernetes
                            </b>
                          </p>
                          <p className={styles.para}>
                            This project involves building a continuous
                            integration and delivery pipeline using Jenkins and
                            Kubernetes for automated application deployment.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/airbnb.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="70"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Infrastructure Automation using Terraform</b>
                          </p>
                          <p className={styles.para}>
                            In this project, infrastructure is automated using
                            Terraform to create, manage and update
                            infrastructure resources.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/netflix.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="55"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Configuration Management with Ansible</b>
                          </p>
                          <p className={styles.para}>
                            The aim of this project is to manage infrastructure
                            configurations using Ansible, enabling efficient and
                            effective configuration management.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/capitalone.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="45"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Serverless Computing with AWS Lambda</b>
                          </p>
                          <p className={styles.para}>
                            This project involves building an event-driven,
                            serverless architecture using AWS Lambda and API
                            Gateway.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/spotify.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="61"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Containerization with Docker</b>
                          </p>
                          <p className={styles.para}>
                            This project involves containerizing applications
                            using Docker, enabling efficient and consistent
                            application deployment.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/uber.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="70"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Monitoring and Logging with ELK Stack</b>
                          </p>
                          <p className={styles.para}>
                            The objective of this project is to build an ELK
                            stack for efficient and effective monitoring and
                            logging of applications.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/paypal.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Infrastructure Monitoring with Nagios</b>
                          </p>
                          <p className={styles.para}>
                            In this project, infrastructure monitoring is set up
                            using Nagios to provide visibility and alerts on
                            critical system resources.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/ge.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="81"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Cloud Migration using AWS</b>
                          </p>
                          <p className={styles.para}>
                            The aim of this project is to migrate on-premise
                            applications to the cloud using AWS, enabling
                            scalability, reliability, and cost optimization.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/target.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="55"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Security Automation with Chef</b>
                          </p>
                          <p className={styles.para}>
                            This project involves using Chef to automate
                            security configurations, including vulnerability
                            scanning and patch management.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/walmart.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="41"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Performance Testing with JMeter</b>
                          </p>
                          <p className={styles.para}>
                            The objective of this project is to use JMeter to
                            conduct performance testing on applications and
                            infrastructure, ensuring optimal performance and
                            scalability.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {dataScience ? (
              <a href={srcD} target="_blank">
                <button className={styles.button}>
                  Download Brochure
                  <FaDownload
                    className={styles.icon}
                    style={{ marginLeft: "10px" }}
                  />
                </button>
              </a>
            ) : (
              <button onClick={popupShow} className={styles.button}>
                Download Brochure
                <FaDownload
                  className={styles.icon}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            )}
          </section>
        ) : (
          ""
        )}
        {FoundationDSProject ? (
          <section>
            <div className={styles.Section1}>
              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.2 : 3}
                    spaceBetween={mobile ? 10 : 15}
                    scrollbar={{ draggable: true }}
                    grabCursor={true}
                    modules={[Scrollbar]}
                    className="mySwiper"
                  >
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/IBM.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="120"
                            height="50"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>IBM HR DomainIBM HR Domain</b>
                          </p>
                          <p className={styles.para}>
                            IBM aims to enhance HR by detecting hidden
                            inconsistencies in employee performance. Build
                            regression and ML models to identify graphical
                            variations among 14,000+ employees.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/swiggy.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="164"
                            height="50"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Swiggy Marketing Domain</b>
                          </p>
                          <p className={styles.para}>
                            Swiggy needs an extensive marketing campaign and
                            automated keyword generation tools. You can help
                            them with NLP-based keyword research and text
                            analytics for effective message delivery.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/bosch.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="45"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Bosch Manufacturing Domain</b>
                          </p>
                          <p className={styles.para}>
                            Automated inventory system tracks stock levels &
                            orders. You can use ML algorithms & R programming
                            skills to help DataCo's intelligent supply chain
                            software generation project.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/bmw.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="50"
                            height="50"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>BMW Sales Domain</b>
                          </p>
                          <p className={styles.para}>
                            BMW lets customers sell used cars, but rivals offer
                            better resale value. BMW's data science app finds
                            best market value based on parameters like mileage,
                            pricing and manufacturing date. You can improve
                            analytical skills with such projects.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/walmart.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="139"
                            height="50"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Walmart Retail Domain</b>
                          </p>
                          <p className={styles.para}>
                            Participate in Walmart's sales forecasting project
                            by forecasting sales for 45 stores using a large
                            data set, including holiday markdown sales. Be an
                            active contributor.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/samsung.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="200"
                            height="35"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Samsung Healthcare Domain</b>
                          </p>
                          <p className={styles.para}>
                            Samsung to launch new healthcare app for accurate
                            activity tracking & health recommendations. App
                            requires continuous analysis of large mobile data to
                            function effectively.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Project+company+logos/amazon.png"
                            layout="intrinsic"
                            loading="lazy"
                            width="164"
                            height="50"
                            alt="preksha-home"
                          />
                        </div>
                        <div>
                          <p
                            className={styles.para}
                            style={{ marginTop: "20px" }}
                          >
                            <b>Amazon E-commerce Domain</b>
                          </p>
                          <p className={styles.para}>
                            Amazon seeks to identify top consumer electronics
                            through live customer review analysis. Join the
                            project to regenerate customer insights from
                            existing reviews using data visualisation.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            {dataScience ? (
              <a href={srcD} target="_blank">
                <button className={styles.button}>
                  Download Brochure
                  <FaDownload
                    className={styles.icon}
                    style={{ marginLeft: "10px" }}
                  />
                </button>
              </a>
            ) : (
              <button onClick={popupShow} className={styles.button}>
                Download Brochure
                <FaDownload
                  className={styles.icon}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            )}
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SixthSection;
