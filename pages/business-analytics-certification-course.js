import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/Certificatejob/Certificate";
import Project from "../components/CoursePage/Project/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import SkillsCovered from "../components/SkillsCovered6/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import { FaqData7, PaymentFaqData7, CapstoneFaqData7, CertificationFaqData7, jobFaqData7, MentorshipFaqData7, SupportFaqData7 } from "../components/FAQ/FaqData";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Industry-paced Project-based Training"
        mTopPara="Industry-paced Project-based Training"
        title="Business Analytics"
        spanTitleText="Certification Course"
        desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
        src="/course7.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/7th+BA.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early professionals"
        p2="12LPA - 20LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Industry-curated Training via real-world analytics"
        WeekendBatchDate="Industrial Business analytics certifications for IBM"
        Project="Elementary programming classes for non-technical pros"
        Classes="Especially devices for early pros or aspirants with career gap"
        OneLine="Learn the most trending analytical trick from MNC experts"
        Interview="5 live industry projects and 100% interview call assurance"
        Fee="65,000"
        Subscription="1.5 Year Subscription"

      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with MAANG Business Analytics Experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <CareerImpact
      CareerHead="Career Impact"
      />
      <div className={styles.ExpertWrapper}>
        <div className={styles.expert}>
          <h5>Our experts are from:</h5>
        </div>
        <div className={styles.expertBody}>
          <OurExpert />
        </div>
      </div>
      <Certificate
        title="Course Completion Certificate from IBM"
        desc="Complete your training with the internationally recognized certificate."
        desc2 ="Validate your Business Analytics skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."
        src="/BA-DA.jpeg"
      />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-7.gif"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="350px"
          />
        </span>
        </div>
    </section>
    <SyllabusNew
    HoursSyllabus="200"
    HoursSyllabusText="Hours Syllabus"
    Projects="5"
    ProjectsText="BA Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="4"
    JobSessionsText="Job Oriented Sessions"
    Modules="8"
    ModulesText="Tools & Modules"
    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
    syllabusb1="6 Hours"
    SyllabusBotlist11="Anaconda Installation"
    SyllabusBotlist12="Basics of Programming"
    SyllabusBotlist13="Memory Management"
    SyllabusBotlist14="Compiler and Interpreter"
    SyllabusBotlist15="Syntax of Python"
    SyllabusBotlist16="Basics of Statistics"
    syllabush2="Python Programming (Basic + Advance)"
    syllabusb2="40 Hours"
    SyllabusBotlist21="Git and GitHub"
    SyllabusBotlist22="Operators + Data Types + Loops"
    SyllabusBotlist23="Functions + Regular Expression"
    SyllabusBotlist24="Conditional Statement"
    SyllabusBotlist25="File & Exceptional Handling"
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etc."
    syllabush3="Statistics and Machine Learning"
    syllabusb3="30 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive"
    SyllabusBotlist34="Hypothesis Testing"
    SyllabusBotlist35="Time Series Analysis"
    SyllabusBotlist36=" Inferential Stats"
    syllabush4="Industrial Projects &
    Capstone Projects"
    syllabusb4="6+ Classes"
    SyllabusBotlist41="Market Basket Analysis"
    SyllabusBotlist42="Analyzing Customer Feedback"
    SyllabusBotlist43="Loan Eligibility Prediction"
    SyllabusBotlist44="Customer Churn Prediction"
    SyllabusBotlist45="Inventory Demand Forecasting"
    SyllabusBotlist46="Retain Analytics"
    syllabush5="Data Science &
    AI Tools"
    syllabusb5="118+ Hours"
    SyllabusBotlist51="Advance Excel"
    SyllabusBotlist52="SQL"
    SyllabusBotlist53="PowerBI"
    SyllabusBotlist54="Big Data & Spark Analytics"
    SyllabusBotlist55="Time Series"
    SyllabusBotlist56="Business Analytics Modules"
    syllabush6="Job Orientation
    (Interview Prep)"
    syllabusb6="4+ Classes"
    SyllabusBotlist61="Resume Built-Up Session"
    SyllabusBotlist62="1-1 Mock Interviews"
    SyllabusBotlist63="Job Referrals"
    SyllabusBotlist64="LinkedIn Profile Building"
    SyllabusBotlist65="Alumni Portal Access"
    SyllabusBotlist66="Target Top MNCs & Startups"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/7th+BA.pdf"

    />
      <ToolsCovered 
      src="/tools-ba.png"
      />
      <SkillsCovered
      sc11="Data Collection & Cleaning"
      sc12="Data Understanding"
      sc13="PCA Analysis & Literacy"
      sc14="Data Munging"
      sc21="Data Preprocessing"
      sc22="Data Analysis & Exploration"
      sc23="Statistical Analysis"
      sc24="Dashboard and Storytelling"
      sc31="Diagnostic Analytics"
      sc32="Predictive Analytics"
      sc33="Prescriptive analytics"
      sc34="and more..."
      />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="5+"
        domain="7+"
        />
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
<p>Doubts Regarding Learning Assistance? Or You’re Unsure Of Your Initial Data Science Career Step? Whatever Is It…</p>
          <h6>We Are Here To Help You.</h6>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <HowApply
      CCourse="Enroll in the Industrial Data analytics program."
      />
      <CourseFee 
      CourseFeeHead="Data Analytics Course Fees"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online interactive classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra doubt clearance sessions"
      CourseFeelist4="Project-Based Learning"
      CourseFeelist5="Company-based mock interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData7} PaymentFaqDatas={PaymentFaqData7} CapstoneFaqDatas={CapstoneFaqData7} CertificationFaqDatas={CertificationFaqData7} jobFaqDatas={jobFaqData7} MentorshipFaqDatas={MentorshipFaqData7} SupportFaqDatas={SupportFaqData7} />

      </main> 
    </div>
  )
}