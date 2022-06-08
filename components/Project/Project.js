import styles from "./project.module.scss";
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  GiArtificialIntelligence,
  GiBank,
  GiHealthNormal,
} from "react-icons/gi";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsPaypal, BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineCar, AiFillMobile } from "react-icons/ai";
import Image from "next/image";
import { BsCheck2All } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";




const Project = ({
  ChangeProject,
  project,
  domain,
}) => {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [device, setDevice] = useState();
  const listRef = useRef();

  let slideWidth = 365;
  let slidesNumber = ChangeProject ? 11 : 4;

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
      }
    };
  });

  const handleClick = useCallback(
    (direction) => {
      if (device === 1281) {
        minus = 180;
      } else if (device === 1279) {
        minus = 48;
      }
      if (device === 1025) {
        minus = 48;
        slideWidth = 385;
        slidesNumber = ChangeProject ? 12 : 5;
      }
      if (device === 481) {
        minus = ChangeProject ? 42 : 10;
        slideWidth = ChangeProject ? 250 : 230;
        slidesNumber = ChangeProject ? 13 : 5;
      }

      // setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - minus;

      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        console.log(slideNumber);

        listRef.current.style.transform = `translateX(${
          slideWidth + distance
        }px)`;
      }
      if (direction === "right" && slideNumber < slidesNumber) {
        setSlideNumber(slideNumber + 1);
        console.log(slideNumber);
        listRef.current.style.transform = `translateX(${
          -slideWidth + distance
        }px)`;
      }
    },
    [minus, slideNumber, slideWidth, slidesNumber]
  );

  return ChangeProject ? (
    <div className={styles.projectHeader}>
      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <p className={styles.sub}>Industry – partnered capstone projects</p>
          <h3>Hands-on Projects</h3>
          <p className={styles.para}>Data sets from the industry</p>
        </div>
        <div className={styles.right}>
          <div className={styles.red}>
            <h3>{project}</h3>
            <p>
              Projects <br />
              Available
            </p>
          </div>
          <div className={styles.blue}>
            <h3>{domain}</h3>
            <p>
              Domain <br />
              Covered
            </p>
          </div>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.left}>
          <FiCheckSquare className={styles.icon} />
          <p>Practice with 20+ tools</p>
        </div>
        <div className={styles.middle}>
          <FiCheckSquare className={styles.icon} />
          <p>Designed by Industry Experts</p>
        </div>
        <div className={styles.right}>
          <FiCheckSquare className={styles.icon} />
          <p>Get Real-world Experience</p>
        </div>
      </div>
      <div className={styles.projectSlider}>
        <div className={styles.list}>
          <div className={styles.wrapper}>
            <MdKeyboardArrowLeft
              className={styles.sliderArrowLeft}
              onClick={() => handleClick("left")}
            />
            <div className={styles.container} ref={listRef}>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 1</p>
                    <h5>HR Domain</h5>
                  </div>
                  <div className={styles.right}>
                    <BsFillCreditCard2BackFill className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Work like credit risk analyst at Moodys</h6>
                  <p>
                    Develop a prediction model for existing customers to
                    identify probable credit default
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img
                    src="/Moodys-Project.webp"
                    alt="Moody's"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 2</p>
                    <h5>BANKING</h5>
                  </div>
                  <div className={styles.right}>
                    <GiBank className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Analyze exchange rates like Bloomberg</h6>
                  <p>
                    Model a program to forecast value of a currency in global
                    market
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img src="/Bloombreg.webp" alt="Bloomberg" loading="lazy" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 3</p>
                    <h5>BANKING</h5>
                  </div>
                  <div className={styles.right}>
                    <BsPaypal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Understand mobile banking usage like at Razorpay</h6>
                  <p>
                    Analyze clusters of customers on the usage of mobile banking
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img src="/Razorpay.webp" alt="Razorpay" loading="lazy" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 4</p>
                    <h5>AUTOMOBILE</h5>
                  </div>
                  <div className={styles.right}>
                    <AiOutlineCar className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Predict cab fare like Uber </h6>
                  <p>Build a model to predict real-time cab fare price.</p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img src="/Uber.webp" alt="Uber" loading="lazy" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 5</p>
                    <h5>AUTOMOBILE</h5>
                  </div>
                  <div className={styles.right}>
                    <AiOutlineCar className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Optimize vehicle time to market like Mercedes</h6>
                  <p>Optimize the time for a car to reach the market</p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img src="/Mercedez.webp" alt="Mercedes" loading="lazy" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 6</p>
                    <h5>AUTOMOBILE</h5>
                  </div>
                  <div className={styles.right}>
                    <AiOutlineCar className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Predict Vehicle Motion like Tesla</h6>
                  <p>
                    Build motion prediction models for self-driving vehicles
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img src="/Tesela.webp" alt="Tesela" loading="lazy" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 7</p>
                    <h5>AUTOMOBILE</h5>
                  </div>
                  <div className={styles.right}>
                    <AiOutlineCar className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Model like ABB to predict maintenance</h6>
                  <p>
                    Develop a model to save on unwanted breakdown of machine
                    failure
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/lyft.webp" alt="lyft" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 8</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Predict human mobility like Google</h6>
                  <p>Study human mobility to predict the Covid-19 surge</p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/Google.webp" alt="Google" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 9</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Create a model to predict heart failure</h6>
                  <p>
                    Create a model to predict heart failure before its
                    occurrence
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <GiArtificialIntelligence className="belowIcon" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 10</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Build AI model like proscia to detect cancer</h6>
                  <p>
                    Study the human cell to identify whether it is infected or
                    not infected
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/proscia.webp" alt="Proscia" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 11</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Analyze trending videos like YouTube analyst</h6>
                  <p>Study daily records of YouTube trending video</p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="Youtube.webp" alt="Youtube" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 12</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>
                    Predict success factor of apps like Google Playstore analyst
                  </h6>
                  <p>
                    Predict the factors that contribute to the success of an
                    application
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img
                    loading="lazy"
                    src="/Google-play.webp"
                    alt="GooglePlay"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 13</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Create a recommendation engine like Spotify</h6>
                  <p>
                    Work on the dataset to find a geographical connection with
                    popular songs
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/soptify-logo.webp" alt="Spotify" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 14</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>
                    Find candidates using HR Analytics like McKinsey Analyst
                  </h6>
                  <p>
                    Predict the probability of a candidate looking for a new job
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>python</span>
                    <span className={styles.lightOrange}>AWS</span>
                    <span className={styles.lightRed}>Heroku</span>
                    <span className={styles.lightBlue}>Scala</span>
                    <span className={styles.lightOrange}>dJango</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/Mckinsey.webp" alt="Mckinsey" />
                </div>
              </div>
            </div>

            <MdKeyboardArrowRight
              className={styles.sliderArrowRight}
              style={{ fontSize: "30px" }}
              onClick={() => handleClick("right")}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.projectHeader}>
      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <p className={styles.sub}>Industry – partnered capstone projects</p>
          <h3>Hands-on Projects</h3><div className={styles.iconWrapper}>
        <div className={styles.middle}>
          <BsCheck2All className={styles.icon} />
          <p>Practice with 20+ tools</p>
        </div>
        <div className={styles.middle}>
          <BsCheck2All className={styles.icon} />
          <p>Designed by Industry Experts</p>
        </div>
        <div className={styles.middle}>
          <BsCheck2All className={styles.icon} />
          <p>Get Real-world Experience</p>
        </div>
      </div>
        </div>
        <div className={styles.right}>
          <div className={styles.red}>
            <h3>{project}</h3>
            <p>
              Projects <br />
              Available
            </p>
          </div>
          <div className={styles.blue}>
            <h3>{domain}</h3>
            <p>
              Domain <br />
              Covered
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.iconWrapper}>
        <div className={styles.left}>
          <BsCheck2All className={styles.icon} />
          <p>Practice with 20+ tools</p>
        </div>
        <div className={styles.middle}>
          <BsCheck2All className={styles.icon} />
          <p>Designed by Industry Experts</p>
        </div>
        <div className={styles.right}>
          <BsCheck2All className={styles.icon} />
          <p>Get Real-world Experience</p>
        </div>
      </div> */}
      <div className={styles.projectSlider}>
        <div className={styles.list}>
          <div className={styles.wrapper}>
            <MdKeyboardArrowLeft
              className={styles.sliderArrowLeft}
              onClick={() => handleClick("left")}
            />
            <div className={styles.container} ref={listRef}>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>HR Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/1-1.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Work with startups to build scalable e-commerce websites
                    like Amazon.
                  </h6> */}
                  <p>
                  IBM intends to boost their HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>Mongo</span>
                    <span className={styles.lightOrange}>Express</span>
                    <span className={styles.lightRed}>React</span>
                    <span className={styles.lightBlue}>Node</span>
                    <span className={styles.lightOrange}>NextJs</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Marketing Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/2-3.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Experience Building hotel booking apps like Oyo, Airbnb from
                    scratch.
                  </h6> */}
                  <p>
                  Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Node </span>
                    <span className={styles.lightRed}>Mongo</span>
                    <span className={styles.lightBlue}>Express</span>
                    <span className={styles.lightOrange}>NextJs</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Manufacturing Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/Untitled-design-3.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Work like a Full stack developer at Swiggy/Ubereat and
                    design a food delivery app.
                  </h6> */}
                  <p>
                  This project helped BOSCH to predict their internal failures by production line dataset analysis. But still, they are struggling to predict automated faults in their assembly stage. You can help them by building more advanced predictive models for assembly stage monitoring.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>redux</span>
                    <span className={styles.lightRed}>Node </span>
                    <span className={styles.lightBlue}>Mongo</span>
                    <span className={styles.lightOrange}>Deploy</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Sales Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/Untitled-design-2.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Design and build an OTT platform like netflix with frontend
                    and backend.{" "}
                  </h6> */}
                  <p>
                  BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Node </span>
                    <span className={styles.lightRed}>Mongo</span>
                    <span className={styles.lightBlue}>Deploy</span>
                    <span className={styles.lightOrange}>NextJs</span>
                    <span className={styles.lightRed}>SQL</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Retail Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/12-1.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Build a scalable social media app like Facebook from scratch
                    with all major features and deploy it.
                  </h6> */}
                  <p>
                  Take an active part in the Walmart sales forecasting project. From the huge data set available, you have to perform a sales forecast for 45 Walmart stores. You have to include holiday markdown sales too.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Firebase</span>
                    <span className={styles.lightRed}>redux</span>
                    <span className={styles.lightBlue}>Node </span>
                    <span className={styles.lightOrange}>Mongo</span>
                    <span className={styles.lightRed}>Deploy</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Healthcare Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/4(2).png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>
                    Build a scalable chatbot application like freshdesk with a
                    recommendation engine.
                  </h6> */}
                  <p>
                  Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Firebase</span>
                    <span className={styles.lightRed}>redux</span>
                    <span className={styles.lightBlue}>Node </span>
                    <span className={styles.lightOrange}>Mongo</span>
                    <span className={styles.lightRed}>AWS</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    {/* <p>project 7</p> */}
                    <h5>E-Commerce Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/5(2).png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>Build project management dashboard like Trello, Jira.</h6> */}
                  <p>
                  Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Firebase</span>
                    <span className={styles.lightRed}>redux</span>
                    <span className={styles.lightBlue}>Node </span>
                    <span className={styles.lightOrange}>Mongo</span>
                    <span className={styles.lightRed}>Deploy</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    {/* <p>project 7</p> */}
                    <h5>Entertainment Domain</h5>
                  </div>
                  <div className={styles.right}>
                  <Image
            src="/9-1.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="120px"
          />
                  </div>
                </div>
                <div className={styles.body}>
                  {/* <h6>Build project management dashboard like Trello, Jira.</h6> */}
                  <p>
                  Netflix is a global entertainment video streaming site. They offer content in various regional languages. Build a local recommendation engine for Netflix customers residing in south Bangalore on their weekend and weekdays activities, utilizing NLP.
                  </p>
                  {/* <div className={styles.tool}>
                    <span className={styles.lightBlue}>React</span>
                    <span className={styles.lightOrange}>Firebase</span>
                    <span className={styles.lightRed}>redux</span>
                    <span className={styles.lightBlue}>Node </span>
                    <span className={styles.lightOrange}>Mongo</span>
                    <span className={styles.lightRed}>Deploy</span>
                  </div> */}
                </div>
              </div>
              {/* <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 8</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Predict human mobility like Google</h6>
                  <p>Study human mobility to predict the Covid-19 surge</p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/Google.webp" alt="Google" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 9</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Create a model to predict heart failure</h6>
                  <p>
                    Create a model to predict heart failure before its
                    occurrence
                  </p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <GiArtificialIntelligence className="belowIcon" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 10</p>
                    <h5>HEALTHCARE</h5>
                  </div>
                  <div className={styles.right}>
                    <GiHealthNormal className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Build AI model like proscia to detect cancer</h6>
                  <p>
                    Study the human cell to identify whether it is infected or
                    not infected
                  </p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/proscia.webp" alt="Proscia" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 11</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Analyze trending videos like YouTube analyst</h6>
                  <p>Study daily records of YouTube trending video</p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="Youtube.webp" alt="Youtube" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 12</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>
                    Predict success factor of apps like Google Playstore analyst
                  </h6>
                  <p>
                    Predict the factors that contribute to the success of an
                    application
                  </p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img
                    loading="lazy"
                    src="/Google-play.webp"
                    alt="GooglePlay"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 13</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>Create a recommendation engine like Spotify</h6>
                  <p>
                    Work on the dataset to find a geographical connection with
                    popular songs
                  </p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/soptify-logo.webp" alt="Spotify" />
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <p>project 14</p>
                    <h5>TECHNICAL</h5>
                  </div>
                  <div className={styles.right}>
                    <AiFillMobile className={styles.icon} />
                  </div>
                </div>
                <div className={styles.body}>
                  <h6>
                    Find candidates using HR Analytics like McKinsey Analyst
                  </h6>
                  <p>
                    Predict the probability of a candidate looking for a new job
                  </p>
                  // <div className={styles.tool}>
                  //   <span className={styles.lightBlue}>python</span>
                  //   <span className={styles.lightOrange}>AWS</span>
                  //   <span className={styles.lightRed}>Heroku</span>
                  //   <span className={styles.lightBlue}>Scala</span>
                  //   <span className={styles.lightOrange}>dJango</span>
                  //   <span className={styles.lightRed}>SQL</span>
                  // </div>
                </div>
                <div className={styles.projectFooter}>
                  <img loading="lazy" src="/Mckinsey.webp" alt="Mckinsey" />
                </div>
              </div> */}
            </div>

            <MdKeyboardArrowRight
              className={styles.sliderArrowRight}
              style={{ fontSize: "30px" }}
              onClick={() => handleClick("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Project);
