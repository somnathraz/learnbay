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
import Domain from "../Components/Domain/Domain";
import SyllabusNew from "../Components/SyllabusNew/SyllabusNew";
import CareerImpact from "../Components/CareerImpact/CareerImpact";
import Fee from "../Components/Fee/Fee";
import SkillsCovered from "../Components/SkillsCovered6/SkillsCovered";
import FAQNew from "../Components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData5, DomainFaqData5, PaymentFaqData5, CapstoneFaqData5, CertificationFaqData5, jobFaqData5, MentorshipFaqData5, SupportFaqData5 } from "../components/FAQ/FaqData";

 
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
        deskTopPara="IBM Certification"
        mTopPara="IBM Certification"
        title="Data science and AI Program"
        spanTitleText="with 100% Job Guarantee"
        desc="
        The course has been designed specifically for working professionals with 2 to 8 years of experience who choose to advance their careers in Data Science and AI, and it comes with a 100% Job Guarantee Data Science & AI Certification Course or money back policy."
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="35LPA - 50LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 16k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Assured Job within 6 months or 100% fee refund."
        WeekendBatchDate="Domain-Oriented Full Stack Learning."
        Project="250+ Employer-Alliance & 100% Interview Guarantee."
        Classes="Advanced DS/AI-Industry curated Training."
        OneLine="Specially devised for intermediate to Advanced level pros."
        Interview="250+ employer-Alliance 100% Interview Guarantee"
        Fee="₹1,25,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed molecules as per your dream DS/AI role. Learn demanding DS/AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge DS/Al skills as per demanding IT-industry standards. Choose from 10+ domains."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Science/AI whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
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
            src="/hiring-5.png"
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
    HoursSyllabus="400"
    HoursSyllabusText="Hours Syllabus"
    Projects="15"
    ProjectsText="DS/AI Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="10"
    JobSessionsText="Job Oriented Sessions"
    Modules="18"
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
    syllabusb4="15+ Classes"
    SyllabusBotlist41="Hybrid Recommender System"
    SyllabusBotlist42="Build Streaming Data Pipeline"
    SyllabusBotlist43="Analytical Platform for Ecommerce"
    SyllabusBotlist44="Airline Dataset Analysis"
    SyllabusBotlist45="Image Classifier"
    SyllabusBotlist46="House Price Prediction"
    syllabush5="Data Science &
    AI Tools"
    syllabusb5="303+ Hours"
    SyllabusBotlist51="SQL + MongoDB"
    SyllabusBotlist52="Tableau + PowerBI"
    SyllabusBotlist53="DL + NLP + Time Series"
    SyllabusBotlist54="Big Data Analytics"
    SyllabusBotlist55="Business Analytics + GCP"
    SyllabusBotlist56="CV + RL + DSA"
    syllabush6="Job Orientation
    (Interview Prep)"
    syllabusb6="10+ Classes"
    SyllabusBotlist61="Resume Built-Up Session"
    SyllabusBotlist62="1-1 Mock Interviews"
    SyllabusBotlist63="Job Referrals"
    SyllabusBotlist64="LinkedIn Profile Building"
    SyllabusBotlist65="Alumni Portal Access"
    SyllabusBotlist66="Target Top MNCs & Startups"
    />
      <ToolsCovered 
      src="/tools-job.png"
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
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <h6>Know More About How A Job Guarantee Or 100% Money-Back Program Works.</h6>
        </div>
        <div className={styles.right}>
          <a href=''><button>Terms & Conditions</button></a>
        </div>
      </div>
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
      CCourse="Enroll in Data Science and AI Program with job guarantee."
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
      CourseFeeHead="Program Fee"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online interactive classes"
      CourseFeelist2="Weekend and weekdays batch"
      CourseFeelist3="Extra clearance sessions"
      CourseFeelist4="Multiple domain & Project Experties selection options"
      CourseFeelist5="Company-based mock interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData5} DomainFaqDatas={DomainFaqData5} PaymentFaqDatas={PaymentFaqData5} CapstoneFaqDatas={CapstoneFaqData5} CertificationFaqDatas={CertificationFaqData5} jobFaqDatas={jobFaqData5} MentorshipFaqDatas={MentorshipFaqData5} SupportFaqDatas={SupportFaqData5} />

      </main> 
    </div>
  )
}