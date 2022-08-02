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
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import Project from "../components/CoursePage/Project/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate6/OtherCertificate";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import {DataScienceCourseData} from "../Data/DataScienceCourse";
import Domain from "../components/CoursePage/Domain/Domain";
import Fee from "../components/CoursePage/Fee/Fee";
import SkillsCovered from "../components/CoursePage/SkillsCovered/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData4, DomainFaqData4, PaymentFaqData4, CapstoneFaqData4, CertificationFaqData4, jobFaqData4, MentorshipFaqData4, SupportFaqData4 } from "../components/FAQ/FaqData";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";

 
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
        deskTopPara="Be a leader with Domain Specialization"
        mTopPara="Be a leader with Domain Specialization"
        title="Data Science and Artificial Intelligence Program"
        spanTitleText=" For Managers and Leaders"
        desc="Learn under the guidance of seasoned professionals to ace product-based MNC interviews, and earn capstone project certification."
        src="/course4.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Data+Science+and+AI+For+Managers+and+Leaders+Program.pdf"

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
      {/* <GetHired 
        WeekdayBatchDate="Global Recognition : Earn 6 micro-skill certificates by IBM"
        WeekendBatchDate="Special Project Management module as per industrial requirement"
        Project="12+ domain electives to choose from "
        Classes="Specially devised for leadership-level professionals"
        OneLine="15 live industry projects & 2 fresh capstone projects"
        Interview="Assured interview calls from 250+ recruiter network"
        Fee="95,000"
        Subscription="3 Year Subscription"
      /> */}
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
          Box2h5="Domain Destined"
          box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 12+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Utilize the advantage of mock interviews and project handling training with MAANG Data Science Leads."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
        />
      </div>
      <DomainFaq FaqData={DomainFaqCourseData1} />

        <CourseReview />
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

        <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
        />
        <OurExpert
        img1="/Wipro.png"
        img2="/4(2).png"
        img3="/Capgemini.png"
        img4="/Flipkart.png"
        img5="/TCS.png"
        img6="/Myntra.png"
        img7="/Microsoft.png"
        img8="/Google.png"
        />
        <ProgramFee />
        <SliderTab />
      {/* <CareerImpact
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
      <Certificate /> */}
      
      {/* <section className={styles.HiringPartner}>
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
          
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
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
      /> */}
      {/* <Domain /> */}
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="15+"
        domain="7+"
        />
      </div>
      {/* <div className={styles.cta}>
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
      CCourse="Enroll in Data Science and AI for Managers and Leaders course."
      /> */}
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
      CourseFeeHead="Data Science & AI For Managers Program : Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Multiple Domains + Project Expertise"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData4} DomainFaqDatas={DomainFaqData4} PaymentFaqDatas={PaymentFaqData4} CapstoneFaqDatas={CapstoneFaqData4} CertificationFaqDatas={CertificationFaqData4} jobFaqDatas={jobFaqData4} MentorshipFaqDatas={MentorshipFaqData4} SupportFaqDatas={SupportFaqData4} />
      </main> 
    </div>
  )
}