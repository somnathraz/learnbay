import React, { useState } from "react";
import styles from "./Syllabus.module.css";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLiveTv,
  MdOutlineLaptopMac,
} from "react-icons/md";
import { SiCodeproject, SiTimescale } from "react-icons/si";
import Form from "../../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";

import { AiOutlineDownload } from "react-icons/ai";
import Popup from "../../Popup/Popup";

function Syllabus() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState([
    {
      id: 0,
      open: true,
    },
    {
      id: 1,
      open: false,
    },
    {
      id: 2,
      open: false,
    },
    {
      id: 3,
      open: false,
    },
    {
      id: 4,
      open: false,
    },
    {
      id: 5,
      open: false,
    },
    {
      id: 6,
      open: false,
    },
    {
      id: 7,
      open: false,
    },
    {
      id: 8,
      open: false,
    },
    {
      id: 9,
      open: false,
    },
  ]);
  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          console.log(faq);
          faq.open = !faq.open;
          console.log(faq.open);
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.Syllabus}>
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
          <h5>Download Full stack Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>Syllabus</h4>
          </div>
          <div>
          <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Full+Stack+Web+Development+Program.pdf" target="_blank"><button className={styles.Button}>
              {" "}
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button></a>
          </div> 
        </div>
        <p>
          The Full Stack Web development Program With/Without 100% Job Guarantee or Money Back
          is curated by leading faculties and industry leaders. Especially, with
          the aim to provide practical learning experience with live interactive
          classes and projects.
        </p>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 0;
                handleChange(id);
              }}
            >
              {state[0].open ? (
                <div className={styles.quesO}>
                  <h2>Cohort Orientation:</h2>

                  <span>
                    {state[0].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Cohort Orientation:</h2>
                  <span>
                    {state[0].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[0].open ? (
                <div className={styles.ans}>
                  <li>A quick guide to Full Stack Web Development</li>
                  <li>What, Why - Full Stack Development</li>
                  <li>What is meant by the terms "Frontend," "Backend," "Database," "Testing," "Version Control," "Project Management," and "Cloud Techniques"</li>
                  <li>Significance of projects</li>
                  <li>Job Opportunities in IT industry</li>
                  <li>Basics of StatisticsHow to make it big in the IT Industry and crack FAANG Interviews</li>
                  <li>Interview process of top product based MNCs and Unicorns.</li>
                  <li>Scopes/Jobs of a Full Stack Developer</li>
                  <li>Details about this Full Stack course</li>
                  <li>All about - MEAN stack and MERN stack</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 1;
                handleChange(id);
              }}
            >
              {state[1].open ? (
                <div className={styles.quesO}>
                  <h2>
                    Level 00: Preparatory Session:
                  </h2>

                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>
                    Level 00: Preparatory Session:
                  </h2>
                  <span>
                    {state[1].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[1].open ? (
                <div className={styles.ans}>
                  <li>Web fundamentals</li>
                  <li>Git and github Basics</li>
                  <li>Basic SQL queries to handle data</li>
                  <li>Programming Fundamentals</li>
                  <li>Mathematics for programming</li>
                  <li>Understanding elite domains</li>
                  <li>a. Full Stack Developmen</li>
                  <li>b. Product Engineering / Management</li>
                  <li>c. Data Science and AI</li>
                  <li>d. Web 3.0 Developer</li>
                  <li>e. DevOps and Cloud</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 2;
                handleChange(id);
              }}
            >
              {state[2].open ? (
                <div className={styles.quesO}>
                  <h2>Level 01: Programming Language Refresher (Java & Python) 40 hours</h2>

                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 01: Programming Language Refresher (Java & Python) 40 hours</h2>
                  <span>
                    {state[2].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[2].open ? (
                <div className={styles.ans}>
                  <li>Syntax, Data Types, Variables, Loops, Conditionals and If Statement</li>
                  <li>OOP’s, Built in Modules in Python and Java</li>
                  <li>Data Structures fundamentals</li>
                  <li>How data is stored in Python and Java</li>
                  <li>Master the command line interface</li>
                  <li>File Handling, Regular Expression, Exceptional Handling</li>
                  <li>Collection, Framework, Modules & Packages</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 3;
                handleChange(id);
              }}
            >
              {state[3].open ? (
                <div className={styles.quesO}>
                  <h2>Level 02: Frontend Development
                  </h2>

                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 02: Frontend Development
                  </h2>
                  <span>
                    {state[3].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[3].open ? (
                <div className={styles.ans}>
                  <li>Enhance Bootstrap's look and feel using the newest HTML5 and CSS3 features.</li>
                  <li>Getting started with JavaScript</li>
                  <li>JavaScript - Basic to Advance</li>
                  <li>Understanding basics of jQuery</li>
                  <li>Study the most frequent tags used in react js, angular, and nodejs</li>
                  <li>Develop layouts that are appealing, accessible, and responsive.</li>
                  <li>Learn how to use React JS to create single-page apps.</li>
                  <li>Understand basics of UI/UX (Figma)</li>
                  <li>Implement user authentication</li>
                  <li>Overview of Backbone & Express JS</li>
                  <li>Learn DOM Manipulation</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 4;
                handleChange(id);
              }}
            >
              {state[4].open ? (
                <div className={styles.quesO}>
                  <h2>Level 03: Backend Development</h2>

                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 03: Backend Development</h2>
                  <span>
                    {state[4].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[4].open ? (
                <div className={styles.ans}>
                  <li>Learn Express Framework, and make scalable web applications</li>
                  <li>SQL and NoSql Concept</li>
                  <li>Understand the logic behind the MongoDB data storage</li>
                  <li>Introduction to CSS for Backend</li>
                  <li>OOPS to design the program using classes and objects.</li>
                  <li>Learn Design Patterns & Object Modelling</li>
                  <li>Learn JSON & AJAX  to connect to APIs and endpoints </li>
                  <li>Web Programming with Javascript or Python</li>
                  <li>Use Node JS to build better user interfaces</li>
                  <li>Learn handling HTTP requests using ExpressJS</li>
                  <li>Learn basic principles of REST APIs</li>
                  <li>All about Spring Boot, Django</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 5;
                handleChange(id);
              }}
            >
              {state[5].open ? (
                <div className={styles.quesO}>
                  <h2>Creating web applications from scratch</h2>

                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Creating web applications from scratch</h2>
                  <span>
                    {state[5].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[5].open ? (
                <div className={styles.ans}>
                  <li>Build static HTML and CSS websites for your portfolio and landing pages.</li>
                  <li>Build a To-Do List Application : This project will improve your front-end techniques with user login and authentication. And will also help you understand different types of operations in the database.</li>
                  <li>Build a fully functional blog application from the ground up using Node, Express, and MongoDB : The server-side is crucial for archiving blog articles as they are build and for
            rendering text on the client-side.</li>
                  <li>On-Demand Home Service Application : Visitors may use this to search for services based on location, budget, and local vendors.</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 6;
                handleChange(id);
              }}
            >
              {state[6].open ? (
                <div className={styles.quesO}>
                  <h2>Level 04: Data Base</h2>

                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 04: Data Base</h2>
                  <span>
                    {state[6].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[6].open ? (
                <div className={styles.ans}>
                  <li>Use MySQL to create and manipulate your own databases</li>
                  <li>Learn MongoDB - Operators, Collections, Indexes, Cloud</li>
                  <li>Built-in interface to manage the database objects</li>
                  <li>Utilize SQL to produce insights and reports from real-world data</li>
                  <li>Handling data warehouses to web services with several concurrent users using PostgreSQL</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 7;
                handleChange(id);
              }}
            >
              {state[7].open ? (
                <div className={styles.quesO}>
                  <h2>Level 05: Essential tools/techniques for a Full Stack Web Developer</h2>

                  <span>
                    {state[7].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 05: Essential tools/techniques for a Full Stack Web Developer</h2>
                  <span>
                    {state[7].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[7].open ? (
                <div className={styles.ans}>
                  <li>Using Git, GitHub for Version Control</li>
                  <li>Selenium - For quick, systematic web-application testing</li>
                  <li>Sending Collections of API Requests using PostMan</li>
                  <li>Discover the fundamentals of a Trello Board, including the lists, cards, and menu</li>
                  <li>Using the JIRA library for python</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 8;
                handleChange(id);
              }}
            >
              {state[8].open ? (
                <div className={styles.quesO}>
                  <h2>Level 06: Deploying Web Applications on Cloud</h2>

                  <span>
                    {state[8].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 06: Deploying Web Applications on Cloud</h2>
                  <span>
                    {state[8].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[8].open ? (
                <div className={styles.ans}>
                  <li>Understanding AWS Smart Architecture</li>
                  <li>Writing Node.JS Web Server - ready to deploy on App Engine</li>
                  <li>Use Firebase authentication to implement federated identity management</li>
                  <li>Google Cloud Platform - learn infrastructure deployment service</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={styles.QOuter}>
          <div className={styles.QInner}>
            <div className={styles.line}>
              <BsFillCircleFill className={styles.bIcons} />
            </div>
            <div
              className={styles.FaqWrapper}
              onClick={() => {
                let id = 9;
                handleChange(id);
              }}
            >
              {state[9].open ? (
                <div className={styles.quesO}>
                  <h2>Level 07: Real-Time Use Cases</h2>

                  <span>
                    {state[9].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              ) : (
                <div className={styles.ques}>
                  <h2>Level 07: Real-Time Use Cases</h2>
                  <span>
                    {state[9].open ? (
                      <MdKeyboardArrowUp className="icon" />
                    ) : (
                      <MdKeyboardArrowDown className="icon" />
                    )}
                  </span>
                </div>
              )}

              {state[9].open ? (
                <div className={styles.ans}>
                  <li>Chatting/Messaging Application</li>
                  <li>Food Delivery Application</li>
                  <li>VR-Based Application</li>
                  <li>Travel Booking Application</li>
                  <li>Video Conferencing Application</li>
                  <li>Workout Application </li>
                  <li>Buy/Sell Second-hand Products</li>
                  <li>Stock Investment Application</li>
                  <li>Online Code Editor Application</li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.white} />
      </div>
      <div className={styles.syllabusRight}>
        <div className={styles.PProgrammain}>
          <div className={styles.PProgram}>
            <p>Program Highlights</p>
          </div>
          <div className={styles.PProgramInner}>
            <p style={{display:"flex"}}>
              <MdOutlineLiveTv className={styles.PIcons} />
              350+ Live sessions
            </p>
            <p style={{display:"flex"}}>
              <SiCodeproject className={styles.PIcons} />
              12+ Industry Projects
            </p>
            <p style={{display:"flex"}}>
              <SiTimescale className={styles.PIcons} />
              3 Year Subscriptions
            </p>
            <p style={{display:"flex"}}>
              <MdOutlineLaptopMac className={styles.PIcons} />
              Live project experience
            </p>
          </div>
        </div>
        <div className={styles.PProgrammain} style={{ marginTop: "20px" }}>
          <div className={styles.PProgram}>
            <p>Request More Information</p>
          </div>
          <div className={styles.PProgramInner}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
