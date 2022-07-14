import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTab3";
import Project from "../components/CoursePage/Project/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate/OtherCertificate";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import Domain from "../components/CoursePage/Domain/Domain";
import Fee from "../components/CoursePage/Fee/Fee";
import SkillsCovered from "../components/CoursePage/SkillsCovered/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData3, DomainFaqData3, PaymentFaqData3, CapstoneFaqData3, CertificationFaqData3, jobFaqData3, MentorshipFaqData3, SupportFaqData3 } from "../components/FAQ/FaqData";


 
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
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Boost Your Professional Growth"
        deskTopPara1="To a Whole New Level"
        mTopPara="Boost Your Professional Growth"
        mTopPara1="To a Whole New Level"
        title="Artificial Intelligence and Machine Learning Program"
        desc="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
        src="/course3.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Artificial+Intelligence+and+Machine+Learning+Program.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Eligibility"
        p11="Tech Professionals"
        p2="50 LPA - 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="4 IBM Certified AI/ML micro-skill certificates"
        WeekendBatchDate="Specially curated syllabus for technical professionals"
        Project="IT-specific domain-oriented full-stack learning with 8+ domains to choose from"
        Classes="Learn the latest tools and technologies in AI and ML"
        OneLine="12 live industry projects & 2 fresh capstone projects"
        Interview="Assured interview calls from 250+ recruiter network"
        Fee="95,000"
        Subscription="3 Year Subscription"

      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy and learn from mock interviews and CV writing workshops with MAANG AI/ML industry experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
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
          OCHead1="Deep Learning Fundamentals"
          OCP1="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead2="Deep Learning with TensorFlow"
          OCP2="Get certified for your Industrial-level TensorFlow application expertise."
          OCHead3="Machine Learning with Python"
          OCP3="Validate your python expertise for ML algo designing."
          OCHead4="Accelerating Deep Learning with GPUs"
          OCP4="Industrial badge on GPU handling mastery for Cloud, AI & ML."
      />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-3.png"
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
    HoursSyllabus="300"
    HoursSyllabusText="Hours Syllabus"
    Projects="12"
    ProjectsText="AI & ML Projects"
    Sessions="100"
    SessionsText="Live Learning Sessions"
    JobSessions="10"
    JobSessionsText="Job Oriented Sessions"
    Modules="18"
    ModulesText="Tools & Modules"
    syllabush1="Preparatory Classes (Programming + Maths)"
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
    15+ Classes"
    SyllabusBotlist41="Text Classification"
    SyllabusBotlist42="Human Activity Recognition"
    SyllabusBotlist43="Forecasting Business KPI's"
    SyllabusBotlist44="Credit Risk Analysis"
    SyllabusBotlist45="Customer Churn Prediction"
    SyllabusBotlist46="Sentiment Analysis"
    syllabush5="AI &
    ML Tools"
    syllabusb5="204+ Hours"
    SyllabusBotlist51="SQL + MongoDB"
    SyllabusBotlist52="Tableau + PowerBI"
    SyllabusBotlist53="DL + NLP + CV + RL"
    SyllabusBotlist54="Big Data Analytics"
    SyllabusBotlist55="Deployment (AWS + GCP)"
    SyllabusBotlist56="Data Structure & Algorithm"
    syllabush6="Job Orientation
    (Interview Prep)"
    syllabusb6="10+ Classes"
    SyllabusBotlist61="Resume Built-Up Session"
    SyllabusBotlist62="1-1 Mock Interviews"
    SyllabusBotlist63="Job Referrals"
    SyllabusBotlist64="LinkedIn Profile Building"
    SyllabusBotlist65="Alumni Portal Access"
    SyllabusBotlist66="Target Top MNCs & Startups"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Artificial+Intelligence+and+Machine+Learning+Program.pdf"

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
        project="12+"
        domain="7+"
        />
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <h6>Talk to our team directly.</h6>
          <p>Reach out and a learning consultant will get in touch with you shortly.</p>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <HowApply
      CCourse="Enroll in AI and ML Program with Domain Specialization."
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
        sub2="Artificial Intelligence
        & ML Program"
        Price2="₹95,000 + GST"
        PFeatures21="300+ Hours"
        PFeatures22="Tech Professionals"
        PFeatures23="8+"
        PFeatures24="15+2"
        PFeatures25="18+"
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
      CourseFeeHead="Artificial Intelligence & Machine Learning Program : Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Multiple Domain Selection Options"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData3} PaymentFaqDatas={PaymentFaqData3} DomainFaqDatas={DomainFaqData3} CapstoneFaqDatas={CapstoneFaqData3} CertificationFaqDatas={CertificationFaqData3} jobFaqDatas={jobFaqData3} MentorshipFaqDatas={MentorshipFaqData3} SupportFaqDatas={SupportFaqData3} />
      </main> 
    </div>
  )
}