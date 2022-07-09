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
            <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Full+Stack+software+development+.pdf" target="_blank"><button className={styles.Button}>
              {" "}
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button></a>
          </div> 
        </div>
        <p>
          The Full Stack Software Development Program 
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
                  <h2>Level 00: Analysis of Algorithms, Space and Time complexity</h2>

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
                  <h2>Level 00: Analysis of Algorithms, Space and Time complexity</h2>
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
                  <li>Big-O, Big-Omega, and Big-Theta notations</li>
                  <li>Best, average, and worst-case</li>
                  <li>Complexities hierarchy</li>
                  <li>Complexity classes (P vs. NP problem)</li>
                  <li>Asymptotic Analysis</li>
                  <li>Analysis of Loops</li>
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
                    Level 01: Data Structure
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
                    Level 01: Data Structure
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
                  <li>Introduction & Application to Recursion, Writing base cases in Recursion</li>
                  <li>Introduction to Arrays, Types of Arrays, Operations on Arrays</li>
                  <li>Linked List Introduction,Singly Linked List,Doubly Linked LIst, Circular Linked List, Practice problems</li>
                  <li>Understanding Stack data structure, Applications & Implementation in Array, Linked List and Queue, Prefix to Infix, Prefix to Postfix, Postfix to prefix and Infix to prefix Operations. Practice problems</li>
                  <li>Understanding Queue data structure, Priority Queue, Deque, Circular Queue, Operations on Queue, Practice Problems</li>
                  <li>Understanding Tree Data Structure, Practical use case of tree in data storage and process scheduling. Learning about BST, AVL, Red-Black tree etc. Tree traversal - Vertical, Inorder and Preorder traversal, Segment Tree, Practice problems</li>
                  <li>Introduction & Application of Hashing, Open Addressing Basics, Linear Probing and Quadratic Probing, Practice problems</li>
                  <li>Introduction to Graph and practical use cases of Graphs, Network Terminologies, Spanning Tree, Shortest path, Introduction to BFs and DFS and its application, Detecting cycle in a directed graph and in an undirected graph, Practice problems</li>
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
                  <h2>Level 02: Algorithms</h2>

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
                  <h2>Level 02: Algorithms</h2>
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
                  <li>Learn the concepts of Searching and sorting, Linear, Binary and Interpolation search, Selection, Bubble, Insertion, Merge, Heap, Quick and Radix sort, Merging and merge intervals. Practice problems</li>
                  <li>Introduction and real time use cases of Greedy Algorithm, Huffman Coding, Kruskal's Prim's and Dijkstra's algorithm and use cases. Practice Problems</li>
                  <li>Dynamic programming, KMP Algorithm, Rabin Karp Algorithm, Practice Problems</li>
                  <li>Pattern Searching, Naive Pattern Searching, Finite Automata, Boyer Moore Algorithm, Suffix Array</li>
                  <li>Backtracking and Divide & Conquer Strategy, Number Theory, Bit Algorithm, Graph Algorithm, Practice Problems</li>
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
                  <h2>Level 03: System Design
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
                  <h2>Level 03: System Design
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
                  <li>Introduction to System Design – Why System Design Interview? Approaching And narrowing down a problem,Identifying an Abstract Design , Optimising And addressing the bottlenecks, Designing for resiliency and handling failures, Learn System Design (HLD + LLD) with hands on project</li>
                  <li>Component Modelling Messaging Queue Multithreading and Synchronisation, </li>
                  <li>High Level Design With Projects, Introduction to common MicroService design patterns, Microservices & System components in real world Event Driven, Domain Driven, Rest API driven Architectures 3 Real time projects</li>
                  <li>Low Level Design With Projects OOD and Design Patterns, API Design DB Schema Design for NoSQL and SQL Common LLD and API design questions</li>
                  <li>Load Balancing – Software And Hardware Load Balancers, Caching – Distributed And Global Cache,Content Distribution network(CDN),Sharding And Partitioning Methods,Common Problems of Sharding</li>
                  <li>Database Indexing,Proxies – Proxy Server ,Queues,SQL vs No SQL ,CAP Theorem in distributed Computer Systems,Distributed Hash Table And Consistent Hashing,Web sockets,Ajax Polling</li>
                  <li>Designing an Instant  messaging Services- Design Facebook Messenger – Case study to be covered in live session Design Twitter  and Twitter Search – Consider the case for million + UserAssignment. Design Whatsapp Messaging Services</li>
                  <li>Design Book My Show, Design Uber Backend, Design Stockbroker System, Design Youtube</li>
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
                  <h2>Level 04: Industrial Projects</h2>

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
                  <h2>Level 04: Industrial Projects</h2>
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
                  <li>Authentication - Develop Authentication technology that provides access control for systems by checking to see if a user’s credentials match the credentials in a database of authorized users or in a data authentication server.</li>
                  <li>Companies: Microsoft Authenticator, Google Authenticator, Authy, Duo, LastPass Authenticator</li>
                  <li>CRUD - Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones.</li>
                  <li>Companies: Appsmith, Budibase, Knack, Bubble</li>
                  <li>Payment Gateway Integration - Learn to integrate Payment gateway which is used to authorize and process credit card and debit payments for online businesses</li>
                  <li>Companies: Razorpay, Stripe, Paypal, Paytm, Square</li>
                  <li>API Integration - Learn advanced API integration to  connect two or more applications, via their APIs, that lets those systems exchange data.</li>
                  <li>Companies:  Dell Boomi, Apigee API Management, IBM API Connect, Akana</li>
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
                  <h2>Level 05: Interview Preparation</h2>

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
                  <h2>Level 05: Interview Preparation</h2>
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
                  <li>Linkedin - Build a powerful personal brand on Linkedin to attract top recruiters</li>
                  <li>Learn Resume building techniques</li>
                  <li>Practice  1:1 Mock Interviews </li>
                  <li>Create Portfolio based on Capstone project</li>
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
                  <h2>Level 06: Elite Domains</h2>

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
                  <h2>Level 06: Elite Domains</h2>
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
                  <h2><b>Full Stack</b></h2>
                  <p><b>Programming Essentials</b></p>
                  <li>Programming and Web Fundamentals</li>
                  <li>Basic SQL Queries</li>
                  <li>Git and GitHub</li>
                  <li>Syntax, Data Types, Variables, Loops, Conditionals and If Statement</li>
                  <li>OOP’s, Built in Modules in Python and Java</li>
                  <li>File Handling, Regular Expression, Exceptional Handling</li>
                  <li>Collection, Framework, Modules & Packages</li>
                  <p><b>Frontend</b></p>
                  <li>Create webpage using HTML5 and CSS3</li>
                  <li>JavaScript - Basic to Advance</li>
                  <li>Learn about react js, angular, express, backbone and node js</li>
                  <li>Understand basics of UI/UX (Figma)</li>
                  <li>Learn DOM Manipulation</li>
                  <p><b>Backend</b></p>
                  <li>SQL and NoSql Concept</li>
                  <li>Learn MongoDB - Operators, Collections, Indexes, Cloud</li>
                  <li>Learn JSON & AJAX  to connect to APIs and endpoints</li>
                  <li>All about Spring Boot, Django</li>
                  <li>Handling data warehouses to web services with several concurrent users using PostgreSQL</li>
                  <li>Understanding AWS Smart Architecture</li>
                  <li>Google Cloud Platform - learn infrastructure deployment service</li>
                  <p><b>Product Engineer/Manager</b></p>
                  <li>Fundamentals of team management</li>
                  <li>Recognize functional specifications</li>
                  <li>Product Lifecycle Administration</li>
                  <li>Competitive Intelligence</li>
                  <li>Domain-Driven Design</li>
                  <li>Application Requirements Specification</li>
                  <li>Creating a product roadmap</li>
                  <li>Illustrate product ideas and concepts</li>
                  <li>Integration of products</li>
                  <li>To convert consumer demands and technological trends into product definitions, a cross-functional team will be assembled.</li>
                  <p><b>Data Science and AI</b></p>
                  <li>An overview of Machine Learning</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Data Visualization using Tableau</li>
                  <li>Introduction to Time Series Forecasting</li>
                  <li>Understanding Implementation of Deep Learning</li>
                  <li>Basics of NLP</li>
                  <li>Introduction to Computer Vision</li>
                  <li>Cognitive Computing and Predictive Analysis</li>
                  <li>Built Chatbot Application using AI</li>
                  <li>Project - Predictive analytics-based forecasting model</li>
                  <p><b>Web 3.0 Developer</b></p>
                  <li>Overview of Bitcoin</li>
                  <li>Blockchain - Genesis Block, Hashing Algorithm</li>
                  <li>Blockchain Functioning and Working</li>
                  <li>All about - Ethereum </li>
                  <li>Building Smart Contract</li>
                  <li>ERC 721 Token</li>
                  <li>Creating Simple Storage System</li>
                  <li>Project - DEX for Ethereum EcoSystem</li>
                  <li>Virtual Real Estate Project - Minecraft </li>
                  <li>Hands-On Project - EVM, Voting, Multi-Send</li>
                  <p><b>Devops & Clouds</b></p>
                  <li>In Depth knowledge of Agile Principles</li>
                  <li>Understanding Project Development Process</li>
                  <li>Setting up tools and required infrastructure</li>
                  <li>Gain expertise in CI/CD pipeline development using multiple automation technologies.</li>
                  <li>Managing Database using MySQL and MongoDB</li>
                  <li>Analytics in Cloud Computing</li>
                  <li>Understanding Deployment Models, Managed Services & Virtualization</li>
                  <li>Overview of Distributed Computing</li>
                  <li>Infra Automation, Abstraction, Provisioning.</li>
                  <li>Producing insights from cloud-based data accessible on demand.</li>
                  <li>Developing Secure Data Storage and Processing Applications</li>
                  <li>Working on AWS and GCP for Project Deployment</li>
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
              400+ Live sessions
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
