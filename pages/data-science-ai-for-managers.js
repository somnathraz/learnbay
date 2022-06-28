import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTab4";
import Project from "../components/CoursePage/Project/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate6/OtherCertificate";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import Domain from "../components/CoursePage/Domain/Domain";
import Fee from "../components/CoursePage/Fee/Fee";
import SkillsCovered from "../components/CoursePage/SkillsCovered/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData4, DomainFaqData4, PaymentFaqData4, CapstoneFaqData4, CertificationFaqData4, jobFaqData4, MentorshipFaqData4, SupportFaqData4 } from "../components/FAQ/FaqData";


 
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
        deskTopPara="Project Management Capstones Certified by IBM"
        mTopPara="Project Management Capstones Certified by IBM"
        title="Data Science and Artificial Intelligence"
        spanTitleText="For Managers and Leaders"
        desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        src="/course4.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/4th+Managers.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Eligibility"
        p11="Executive-level experience"
        p2="35 LPA - 65 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="8 micro-skill certificates by IBM"
        WeekendBatchDate="Special data science modules of Project Management"
        Project="12+ domain electives to choose from "
        Classes="Specially devised for leadership-level pros"
        OneLine="15 live industry projects & 2 fresh capstones projects"
        Interview="Assured interview calls from 250+ recruiter network"
        Fee="95,000"
        Subscription="3 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
          Box2h5="Domain Destined"
          box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 10+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Utilize the advantage of mock interviews and project handling training with MAANG Data Science Leads."
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
      <Certificate />
      <OtherCertificate
          OCHead1="Machine Learning with Python"
          OCP1="Validate your python expertise for ML algo designing."
          OCHead2="Python for Data Science"
          OCP2="Get certified on your advanced python skills."
          OCHead3="Deep Learning Fundamentals"
          OCP3="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead4="Sectoral Analytics Fundamentals – HR"
          OCP4="Obtain certification in the use of analytical best practices in HR decision-making."
          OCHead5="Sectoral Analytics Fundamentals – Marketing"
          OCP5="Obtain certification in the use of analytical best practices in marketing decision-making."
          OCHead6="Sectoral Analytics Fundamentals – Finance"
          OCP6="Obtain certification in the use of analytical best practices in financial decision-making."
      />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-4.png"
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
    HoursSyllabus="350"
    HoursSyllabusText="Hours Syllabus"
    Projects="15"
    ProjectsText="DS/AI Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="10"
    JobSessionsText="Job Oriented Sessions"
    Modules="16"
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
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etc"
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
    syllabusb4="
    12+ Classes"
    SyllabusBotlist41="Text Classification"
    SyllabusBotlist42="Human Activity Recognition"
    SyllabusBotlist43="Forecasting Business KPI's"
    SyllabusBotlist44="Credit Risk Analysis"
    SyllabusBotlist45="Customer Churn Prediction"
    SyllabusBotlist46="Sentiment Analysis"
    syllabush5="AI &
    ML Tools"
    syllabusb5="244+ Hours"
    SyllabusBotlist51="SQL + MongoDB"
    SyllabusBotlist52="Tableau + PowerBI"
    SyllabusBotlist53="Deep Learning + NLP"
    SyllabusBotlist54="Big Data + Business Analytics"
    SyllabusBotlist55="Deployment (AWS + GCP)"
    SyllabusBotlist56="Domain + Project Expertise"
    syllabush6="Job Orientation
    (Interview Prep)"
    syllabusb6="10+ Classes"
    SyllabusBotlist61="Resume Built-Up Session"
    SyllabusBotlist62="1-1 Mock Interviews"
    SyllabusBotlist63="Job Referrals"
    SyllabusBotlist64="LinkedIn Profile Building"
    SyllabusBotlist65="Alumni Portal Access"
    SyllabusBotlist66="Target Top MNCs & Startups"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/4th+Managers.pdf"

    />
      <ToolsCovered 
      src="/tools-2.png"
      />
      <SkillsCovered
      sc11="Data Collection"
      sc12="Data Understanding"
      sc13="Data Cleaning"
      sc14="Data Munging"
      sc15="Data Warehousing"
      sc16="Domain Expertise"
      sc21="Data Exploration"
      sc22="Data Preprocessing"
      sc23="Data Analysis"
      sc24="Statistical Analysis"
      sc25="PCA Analysis"
      sc26="Dashboard and Storytelling"
      sc31="Feature Engineering"
      sc32="Hyper Parameter Tuning"
      sc33="Model Creation"
      sc34="Model Deployment"
      sc35="Critical Thinking"
      sc36="Function & Formulas"
      />
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="15+"
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
      CCourse="Enroll in Data Science and AI for Managers and Leaders course."
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
        For Managers Program"
        Price2="₹95,000 + GST"
        PFeatures21="350+ Hours"
        PFeatures22="Tech Lead, Managers"
        PFeatures23="8+"
        PFeatures24="15+2"
        PFeatures25="16+"
        PFeatures26="Yes"
        PFeatures27="No"
        PFeatures28="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
        sub3="Data Science and AI with Job Guarantee Program"
        Price3="₹1,25,000 + GST"
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
      CourseFeeHead="Data Science & AI For Managers Program Fee"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online interactive classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra doubt clearance sessions"
      CourseFeelist4="Multiple domains + Project Expertise"
      CourseFeelist5="Company-based mock interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData4} DomainFaqDatas={DomainFaqData4} PaymentFaqDatas={PaymentFaqData4} CapstoneFaqDatas={CapstoneFaqData4} CertificationFaqDatas={CertificationFaqData4} jobFaqDatas={jobFaqData4} MentorshipFaqDatas={MentorshipFaqData4} SupportFaqDatas={SupportFaqData4} />
      </main> 
    </div>
  )
}