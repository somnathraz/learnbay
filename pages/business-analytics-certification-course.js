import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/Certificatejob/Certificate";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import FAQNew from "../components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import { FaqData7, PaymentFaqData7, CapstoneFaqData7, CertificationFaqData7, jobFaqData7, MentorshipFaqData7, SupportFaqData7 } from "../components/FAQ/FaqData";
import { DataScienceCourseData } from "../Data/DataScienceCourse";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Analytics Certification Program</title>
        <meta name="description" content="Business Analytics Certification Program" />
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
        desc="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
        src="/course7.png"
        width="900"
        height="762"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/BUSINESS+ANALYTICS.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early professionals"
        p2="12 LPA - 20 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="Financing as low as"
        p44="₹  6,392/month"
        />
      </div>
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
      <DomainFaq FaqData={DomainFaqCourseData1} />
<CourseReview />
<Certificate
        title="Course Completion Certificate from IBM"
        desc="Complete your training with the internationally recognized certificate."
        desc2 ="Validate your Business Analytics skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."
        src="/BA-DA.jpeg"
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
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="5+"
        domain="7+"
        />
      </div>
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