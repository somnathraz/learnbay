import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../Components/CoursePage/GetHired/GetHired";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CoursePage/Certificatejob/Certificate";
import Project from "../Components/CoursePage/Project/Project";
import ToolsCovered from "../Components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../Components/CoursePage/OurExpert/OurExpert";
import HowApply from "../Components/CoursePage/HowApply/HowApply";
import ReferSection from "../Components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../Components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../Components/CoursePage/SyllabusNew/SyllabusNew";
import CareerImpact from "../Components/CoursePage/CareerImpact/CareerImpact";
import Fee from "../Components/CoursePage/Fee/Fee";
import SkillsCovered from "../Components/SkillsCovered6/SkillsCovered";
import FAQNew from "../Components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import { FaqData1, PaymentFaqData1, CapstoneFaqData1, CertificationFaqData1, jobFaqData1, MentorshipFaqData1, SupportFaqData1 } from "../components/FAQ/FaqData";

 
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
        deskTopPara="Exclusive Industrial Project-based Training"
        mTopPara="Exclusive Industrial Project-based Training"
        title="Data Science and AI"
        spanTitleText="Foundation Course"
        desc="This IBM Collaborated Data Science Course is for tech and non-tech professionals. This program guarantees a smooth transition into Junior Data Scientist, Business Analyst, Data Analyst, Database Manager, and other relevant positions"
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early-stage professionals"
        p2="18LPA to 28LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 8.5k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Specially devised for early professionals"
        WeekendBatchDate="Special coding classes for non-programmers"
        Project="Learn Directly from MNC experts"
        Classes="8 live industry projects + 1 fresh Capstone"
        OneLine="Completely live and interactive learning"
        Interview="100% interview call guarantee "
        Fee="65,000"
        Subscription="1.5 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream DS role. Learn trending AI applications."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG DS/AI whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from starters, directly from relevant establishments."
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
        desc2 ="Validate your Data Science and AI skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."
        src="/basiccertificate.png"
      />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-1.png"
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
    HoursSyllabus="225"
    HoursSyllabusText="Hours Syllabus"
    Projects="8"
    ProjectsText="DS & AI Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="4"
    JobSessionsText="Job Oriented Sessions"
    Modules="10"
    ModulesText="Tools & Modules"
    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
    syllabusb1="6 Hours"
    SyllabusBotlist11="Anaconda Installation"
    SyllabusBotlist12="Basics of programming"
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
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etcs"
    syllabush3="Statistics and Machine Learning"
    syllabusb3="70 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive & Inferential Stats"
    SyllabusBotlist34="Hypothesis Testing"
    SyllabusBotlist35="Time Series Analysis"
    SyllabusBotlist36="ML Algorithms"
    syllabush4="Industrial Projects &
    Capstone Projects"
    syllabusb4="6+ Classes"
    SyllabusBotlist41="Review Classification Mode"
    SyllabusBotlist42="Build a Logistic Regression Model"
    SyllabusBotlist43="Forecasting Business KPI’s"
    SyllabusBotlist44="Credit Risk Analysis"
    SyllabusBotlist45="Sentiment Analysis"
    SyllabusBotlist46="Loan Eligibility Prediction"
    syllabush5="Data Science &
    AI Tools"
    syllabusb5="116+ Hours"
    SyllabusBotlist51="Advance Excel"
    SyllabusBotlist52="SQL + MongoDB"
    SyllabusBotlist53="Tableau"
    SyllabusBotlist54="PowerBI"
    SyllabusBotlist55="Big Data & Spark Analytics"
    SyllabusBotlist56="Time Series"
    syllabush6="Job Orientation
    (Interview Prep)"
    syllabusb6="4+ Classes"
    SyllabusBotlist61="Resume Built-Up Session"
    SyllabusBotlist62="1-1 Mock Interviews"
    SyllabusBotlist63="Job Referrals"
    SyllabusBotlist64="LinkedIn Profile Building"
    SyllabusBotlist65="Alumni Portal Access"
    SyllabusBotlist66="Target Top MNCs & Startups"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/1st+DSAI+Foundation.pdf"

    />
      <ToolsCovered 
      src="/tools-1.png"
      />
      <SkillsCovered
      sc11="Data Collection"
      sc12="Data Understanding"
      sc13="Data Cleaning"
      sc14="Data Munging"
      sc21="Data Preprocessing"
      sc22="Data Analysis"
      sc23="Statistical Analysis"
      sc24="Dashboard and Storytelling"
      sc31="Feature Engineering"
      sc32="Model Creation"
      sc33="Model Deployment"
      sc34="and more..."
      />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="8+"
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
      CCourse="Enroll in Data Science & AI Foundation Program."
      />
      <Fee
        sub1="Data Science and AI Foundation Program"
        Price1="₹65,000 + GST"
        PFeatures11="225+ Hours"
        PFeatures12="Early Professionals"
        PFeatures13="NA"
        PFeatures14="8+1"
        PFeatures15="10+"
        PFeatures16="Yes"
        PFeatures17="No"
        PFeatures18="Data Analyst, Jr. Data Scientist, Data Associate, Etc."
        sub2="Data Science & AI
        Advance Program"
        Price2="₹79,000 + GST"
        PFeatures21=" 275+ Hours"
        PFeatures22=" Tech/Non-Tech Professionals"
        PFeatures23="8+"
        PFeatures24="12+2"
        PFeatures25="15+"
        PFeatures26="Yes"
        PFeatures27="No"
        PFeatures28="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
        sub3="Data Science & AI
        100% Job Guarantee"
        Price3="1,25,000 + GST"
        PFeatures31=" 400+ Hours"
        PFeatures32="Tech/Non-Tech Professionals"
        PFeatures33="All"
        PFeatures34="15+3"
        PFeatures35="18+"
        PFeatures36="Yes"
        PFeatures37="Yes"
        PFeatures38="Project Manager, Team Lead, Project Lead, Project Head, Etc."
      />
      <CourseFee 
      CourseFeeHead="Data Science Course Fees"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online interactive classes"
      CourseFeelist2="Weekend and weekdays batch"
      CourseFeelist3="Extra clearance sessions"
      CourseFeelist4="Project-Based Learning"
      CourseFeelist5="Company-based mock interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData1} PaymentFaqDatas={PaymentFaqData1} CapstoneFaqDatas={CapstoneFaqData1} CertificationFaqDatas={CertificationFaqData1} jobFaqDatas={jobFaqData1} MentorshipFaqDatas={MentorshipFaqData1} SupportFaqDatas={SupportFaqData1} />
      </main> 
    </div>
  )
}