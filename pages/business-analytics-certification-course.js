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
import {DataScienceCourseData} from "../Data/DataScienceCourse"
 
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
       deskTopPara="Develop Work-Ready Skills"
        deskTopPara1="You Can Use Right Away"
        mTopPara="Develop Work-Ready Skills"
        mTopPara1="You Can Use Right Away"
        title="Business Analytics Certification Program"
        // spanTitleText="Certification Program"
        desc="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
        src="/course7.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Business+Analytics+Program.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early professionals"
        p2="12 LPA - 20 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Industry-curated training via real-time analytics projects"
        WeekendBatchDate="Industrial Business Analytics certification from IBM"
        Project="Special programming classes for non-technical professionals"
        Classes="Specially designed for early professionals or aspirants with a career gap"
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
          box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
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
          
           syllabus={DataScienceCourseData[0].syllabus}
           syllabusDesc={DataScienceCourseData[0].syllabusDesc}
           popupHead={DataScienceCourseData[0].popupHead}
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
          <h6>Talk to our team directly.</h6>
          <p>Reach out and a learning consultant will get in touch with you shortly.</p>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <HowApply
      CCourse="Enroll in the Industrial Business Analytics Program."
      />
      <CourseFee 
      CourseFeeHead="Business Analytics Program : Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Project-Based Learning"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData7} PaymentFaqDatas={PaymentFaqData7} CapstoneFaqDatas={CapstoneFaqData7} CertificationFaqDatas={CertificationFaqData7} jobFaqDatas={jobFaqData7} MentorshipFaqDatas={MentorshipFaqData7} SupportFaqDatas={SupportFaqData7} />

      </main> 
    </div>
  )
}