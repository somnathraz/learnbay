import styles from "./project.module.scss";
import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";




const Project = ({ ChangeProject }) => {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [device, setDevice] = useState();
  const listRef = useRef();

  let slideWidth = 365;
  let slidesNumber = ChangeProject ? 20 : 8;

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
        slidesNumber = ChangeProject ? 12 : 20;
      }
      if (device === 481) {
        minus = ChangeProject ? 42 : 10;
        slideWidth = ChangeProject ? 250 : 230;
        slidesNumber = ChangeProject ? 13 : 12;
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
          <p className={styles.sub}>Industry–Partnered Capstone Projects</p>
          <h3>Hands-on Projects</h3>
          <p className={styles.para}>Data sets from the industry</p>
        </div>
        <div className={styles.right}>
          <div className={styles.red}>
            <h3>12+</h3>
            <p>
              Projects <br />
              Available
            </p>
          </div>
          <div className={styles.blue}>
            <h3>2+</h3>
            <p>
              Capstone <br />
              Project
            </p>
          </div>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.left}>
          <FiCheckSquare className={styles.icon} />
          <p>Practice with 20+ Tools</p>
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
                    <h5>Create a To-do List Application (Beginner)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project will improve your front-end techniques with user login and authentication. And will also help you understand different types of operations in the database. This will help you to master CRUD operation management. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Chatting/Messaging Application (Advance)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  You will master the tricks and tips of building a decent-looking and perfectly useful front-end. This project focus on the best practices of making a chat app extremely user-friendly. Other aspects of this project include database merging, socket.io, etc.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Food Delivery Application (Advance)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project teaches you how to build a huge, full-stack food-delivering website. You'll construct a restaurant registration backend framework. You need a tasty app front end. Complex database management efficacy is another outcome of this project.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>VR-Based Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  Create your own VR program with increased audio-visual capabilities. Discover how to use VR applications to reduce stress and anxiety. Uncover the tips for creating calming sound effects and eye-soothing 3-D graphics.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Travel Booking Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This software lets users book trains, buses, flights, hotels, and ferries. A single app saves time and effort when booking and managing travel. You must automate and customize pricing models, promotional, and discount management systems. This improves the number of returning customers.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Video Conferencing Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This is a full-stack web development project at the advanced level that includes seamless audio-video call management services. This will include capabilities such as the construction of virtual whiteboards, video-call recorders, audio-call recorders, chat message saving, and so on. Even you can design an integrated code editor for uninterrupted work experience, even during work-from-home. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Blog Site</h5>
                  </div>
                      </div>
                <div className={styles.body}>
                  <p>
                  Nothing more than creating a basic content management system is being done here.
An increased content optimization feature and graphics optimization feature are required for such a website or application. Additionally, you must develop tools like comment and feedback management, and social media site connections for improved search engine ranking.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Workout Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project will assist you in mastering sophisticated data structures and algorithms. 70% of tasks will be related to back-end development. It will, however, sharpen your front-end development skills in order to reach data presentation clarity. You must develop seamless real-time interaction between mobile devices/software and human activities.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Buy/Sell Second-hand Products</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  The connected website must offer signup, login/logout, and profile creation/editing. This must include a "wishlist box," a "order tracker," personalized suggestions, personalized and occasional discount features, a chatbot, etc. Payment channels and security aspects require more attention. Integration of the 360-degree furniture images feature will make such a project outstanding. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>On-Demand Home Service Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This webpage will list local services. Local vendors and service providers can advertise their services, budgets, and locations. It's the best way for a small business to contact app users and locals online. This website must offer an amazing filter and rapid query resolution. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Stock Investment Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  In this project, you will learn about building and optimizing multi-use panels and components. Here, you need to work mainly on the front end. The skill that is mostly required for this project is lookup function generation and portfolio panel designing. There must be a dedicated panel for live stock updates. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Online Code Editor Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  It’s an advanced-level web application development project. Here, your focus will be on seamless collaboration, instant hosting of newly released apps, and prototyping. The user-friendliness of such an app will be identified by the ease of setup, multi-language support efficacy, NPM assistance excellence, repository managers integration scopes, etc. 
                  </p>
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
          <p className={styles.sub}>Industry–Partnered Capstone Projects</p>
          <h3>Hands-on Projects</h3><div className={styles.iconWrapper}>
        <div className={styles.middle}>
          <BsCheck2All className={styles.icon} />
          <p>Practice with 20+ Tools</p>
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
            <h3>12+</h3>
            <p>
              Projects <br />
              Available
            </p>
          </div>
          <div className={styles.blue}>
            <h3>2+</h3>
            <p>
            Capstone <br />
              Project
            </p>
          </div>
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
                    <h5>Create a To-do List Application (Beginner)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project will improve your front-end techniques with user login and authentication. And will also help you understand different types of operations in the database. This will help you to master CRUD operation management. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Chatting/Messaging Application (Advance)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  You will master the tricks and tips of building a decent-looking and perfectly useful front-end. This project focus on the best practices of making a chat app extremely user-friendly. Other aspects of this project include database merging, socket.io, etc.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Food Delivery Application (Advance)</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project teaches you how to build a huge, full-stack food-delivering website. You'll construct a restaurant registration backend framework. You need a tasty app front end. Complex database management efficacy is another outcome of this project.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>VR-Based Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  Create your own VR program with increased audio-visual capabilities. Discover how to use VR applications to reduce stress and anxiety. Uncover the tips for creating calming sound effects and eye-soothing 3-D graphics.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Travel Booking Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This software lets users book trains, buses, flights, hotels, and ferries. A single app saves time and effort when booking and managing travel. You must automate and customize pricing models, promotional, and discount management systems. This improves the number of returning customers.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Video Conferencing Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This is a full-stack web development project at the advanced level that includes seamless audio-video call management services. This will include capabilities such as the construction of virtual whiteboards, video-call recorders, audio-call recorders, chat message saving, and so on. Even you can design an integrated code editor for uninterrupted work experience, even during work-from-home. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Blog Site</h5>
                  </div>
                      </div>
                <div className={styles.body}>
                  <p>
                  Nothing more than creating a basic content management system is being done here.
An increased content optimization feature and graphics optimization feature are required for such a website or application. Additionally, you must develop tools like comment and feedback management, and social media site connections for improved search engine ranking.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Workout Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This project will assist you in mastering sophisticated data structures and algorithms. 70% of tasks will be related to back-end development. It will, however, sharpen your front-end development skills in order to reach data presentation clarity. You must develop seamless real-time interaction between mobile devices/software and human activities.
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Buy/Sell Second-hand Products</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  The connected website must offer signup, login/logout, and profile creation/editing. This must include a "wishlist box," a "order tracker," personalized suggestions, personalized and occasional discount features, a chatbot, etc. Payment channels and security aspects require more attention. Integration of the 360-degree furniture images feature will make such a project outstanding. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>On-Demand Home Service Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  This webpage will list local services. Local vendors and service providers can advertise their services, budgets, and locations. It's the best way for a small business to contact app users and locals online. This website must offer an amazing filter and rapid query resolution. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Stock Investment Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  In this project, you will learn about building and optimizing multi-use panels and components. Here, you need to work mainly on the front end. The skill that is mostly required for this project is lookup function generation and portfolio panel designing. There must be a dedicated panel for live stock updates. 
                  </p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>Online Code Editor Application</h5>
                  </div>
                </div>
                <div className={styles.body}>
                  <p>
                  It’s an advanced-level web application development project. Here, your focus will be on seamless collaboration, instant hosting of newly released apps, and prototyping. The user-friendliness of such an app will be identified by the ease of setup, multi-language support efficacy, NPM assistance excellence, repository managers integration scopes, etc. 
                  </p>
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
  );
};

export default React.memo(Project);
