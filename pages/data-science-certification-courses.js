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
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import {DataScienceCourseData} from "../Data/DataScienceCourse";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import Fee from "../components/CoursePage/Fee/Fee";
import SkillsCovered from "../components/SkillsCovered6/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import { FaqData1, PaymentFaqData1, CapstoneFaqData1, CertificationFaqData1, jobFaqData1, MentorshipFaqData1, SupportFaqData1 } from "../components/FAQ/FaqData";
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
        deskTopPara="Enhance your earning potential"
        deskTopPara1="with industry-specific training"
        mTopPara="Enhance your earning potential"
        mTopPara1="with industry-specific training"
        title="Data Science Foundation Program"
        desc="This program ensures a smooth transition into Jr. Data Scientist, Business Analyst, Data Analyst, Database Manager, and other relevant positions."
        src="/course1.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Data+Science+Foundation+Program.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early-stage Professionals"
        p2="18 LPA to 28 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 8.5k/month (9 Months)"
        />
      </div>
      {/* <GetHired 
        WeekdayBatchDate="Specially devised for early professionals"
        WeekendBatchDate="Special coding classes for non-programmers"
        Project="Learn directly from MNC experts"
        Classes="8 live industry projects + 1 fresh Capstone"
        OneLine="Completely live and interactive learning"
        Interview="100% interview call guarantee "
        Fee="65,000"
        Subscription="1.5 Year Subscription"
      /> */}
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream role. Learn trending Data Science applications."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from starters, directly from relevant establishments."
        />
      </div>
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
      </div> */}
          <DomainFaq FaqData={DomainFaqCourseData1} />

<CourseReview />
<Certificate
        title="Course Completion Certificate from IBM"
        desc="Complete your training with the internationally recognized certificate."
        desc2 ="Validate your Data Science skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."
        src="/certificate-1.jpg"
      />

<SyllabusNew
  syllabus={DataScienceCourseData[0].syllabus}
  syllabusDesc={DataScienceCourseData[0].syllabusDesc}
  popupHead={DataScienceCourseData[0].popupHead}
/>

      {/* <section className={styles.HiringPartner}>
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
    </section> */}

      {/* <ToolsCovered 
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
      /> */}
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="8+"
        domain="7+"
        />
      </div>
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
      CCourse="Enroll in Data Science Foundation Program."
      /> */}
      <Fee
        sub1="Data Science Foundation Program"
        Price1="₹65,000 + GST"
        PFeatures11="225+ Hours"
        PFeatures12="Early Professionals"
        PFeatures13="NA"
        PFeatures14="8+1"
        PFeatures15="10+"
        PFeatures16="Yes"
        PFeatures17="No"
        PFeatures18="Data Analyst, Jr. Data Scientist, Data Associate, Etc."
        sub2="Advanced Data Science and AI Program"
        Price2="₹79,000 + GST"
        PFeatures21=" 275+ Hours"
        PFeatures22=" Tech/Non-Tech Professionals"
        PFeatures23="8+"
        PFeatures24="12+2"
        PFeatures25="15+"
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
      CourseFeeHead="Data Science Foundation Program : Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Clearance Sessions"
      CourseFeelist4="Project-Based Learning"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData1} PaymentFaqDatas={PaymentFaqData1} CapstoneFaqDatas={CapstoneFaqData1} CertificationFaqDatas={CertificationFaqData1} jobFaqDatas={jobFaqData1} MentorshipFaqDatas={MentorshipFaqData1} SupportFaqDatas={SupportFaqData1} />
      </main> 
    </div>
  )
}