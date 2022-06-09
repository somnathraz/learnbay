import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/Certificatejob/Certificate";
import Project from "../Components/Project/Project";
import ToolsCovered from "../Components/ToolsCovered/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import HowApply from "../Components/HowApply/HowApply";
import ReferSection from "../Components/ReferSection/ReferSection";
import CourseFee from "../Components/CourseFee/CourseFee";
import SyllabusNew from "../Components/SyllabusNew/SyllabusNew";
import CareerImpact from "../Components/CareerImpact/CareerImpact";
import SkillsCovered from "../Components/SkillsCovered6/SkillsCovered";
import FAQNew from "../Components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import { FaqData6, PaymentFaqData6, CapstoneFaqData6, CertificationFaqData6, jobFaqData6, MentorshipFaqData6, SupportFaqData6 } from "../components/FAQ/FaqData";

 
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
        deskTopPara="In Collaboration with IBM"
        mTopPara="In Collaboration with IBM"
        title="Data Analytics"
        spanTitleText="Certification Course"
        desc="
        Our course is best suited for working professionals with less than one year of work experience in any area who want to start a career in Data Analytics."
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Professional Beginners"
        p2="14LPA - 22LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 7.5k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Best in class industrial analytical training with live projects."
        WeekendBatchDate="Basic coding class for Non-Technical beginners."
        Project="250+ Employer-Alliance & 100% Interview Guarantee."
        Classes="DA industry curated training from MNC experts."
        OneLine="Career guidance from industrial experts"
        Interview="Course Completion Certificate from IBM"
        Fee="₹60,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Analytical whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant establishments."
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
        desc2 ="Validate your Data Analytics skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."
        src="/BA-DA.jpeg"
      />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-6.png"
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
    HoursSyllabus="180"
    HoursSyllabusText="Hours Syllabus"
    Projects="6"
    ProjectsText="Industry Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="4"
    JobSessionsText="Job Oriented Sessions"
    Modules="8"
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
    syllabusb3="50 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive & Inferential Stats"
    SyllabusBotlist34="Hypothesis Testing"
    SyllabusBotlist35="Time Series Analysis"
    SyllabusBotlist36="Basic Machine Learning"
    syllabush4="Industrial Projects &
    Capstone Projects"
    syllabusb4="6+ Classes"
    SyllabusBotlist41="Visualize Daily Wikipedia Trends"
    SyllabusBotlist42="Color Detection Project"
    SyllabusBotlist43="Real-time Auto Tracking"
    SyllabusBotlist44="Web Scrapping"
    SyllabusBotlist45="Fake News Detection"
    SyllabusBotlist46="Movie Recommendation"
    syllabush5="Data Science &
    AI Tools"
    syllabusb5="88+ Hours"
    SyllabusBotlist51="Advance Excel"
    SyllabusBotlist52="SQL"
    SyllabusBotlist53="PowerBI"
    SyllabusBotlist54="Big Data"
    SyllabusBotlist55="Spark Analytics"
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
    />
      <ToolsCovered 
      src="/tools-da.png"
      />
      <SkillsCovered
      sc11="Data Collection & Cleaning"
      sc12="Data Understanding"
      sc13="PCA Analysis"
      sc14="Data Munging"
      sc21="Data Preprocessing"
      sc22="Data Analysis & Exploration"
      sc23="Statistical Analysis"
      sc24="Dashboard and Storytelling"
      sc31="Quantitative Skills"
      sc32="Critical Thinking"
      sc33="Decision Analytics"
      sc34="and more..."
      />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="6+"
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
      CCourse="Enroll in Business Analytics for Early Professionals."
      />
      <CourseFee 
      CourseFeeHead="Data Analytics Course Fees"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online interactive classes"
      CourseFeelist2="Weekend and weekdays batch"
      CourseFeelist3="Extra doubt clearance sessions"
      CourseFeelist4="Project-Based Learning"
      CourseFeelist5="Company-based mock interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData6} PaymentFaqDatas={PaymentFaqData6} CapstoneFaqDatas={CapstoneFaqData6} CertificationFaqDatas={CertificationFaqData6} jobFaqDatas={jobFaqData6} MentorshipFaqDatas={MentorshipFaqData6} SupportFaqDatas={SupportFaqData6} />
      </main> 
    </div>
  )
}