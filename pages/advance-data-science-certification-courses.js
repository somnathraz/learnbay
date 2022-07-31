import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../components/CoursePage/Project/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import Fee from "../components/CoursePage/Fee/Fee";
import FAQNew from "../components/FAQNew/FAQNew";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";

import React, { useState } from "react";
import {
  FaqData2,
  DomainFaqData2,
  PaymentFaqData2,
  CapstoneFaqData2,
  CertificationFaqData2,
  jobFaqData2,
  MentorshipFaqData2,
  SupportFaqData2,
} from "../components/FAQ/FaqData";
import { DataScienceCourseData } from "../Data/DataScienceCourse";
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
          deskTopPara="Choose Specialization over Generalization"
          mTopPara="Choose Specialization over Generalization"
          title="Advanced Data Science and AI Program"
          spanTitleText="with Domain Specialization"
          desc="Make an impression as a seasoned applicant. With new capstone projects, learn how to apply your previous domain expertise to make a successful transition."
          src="/course2.png"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advance+Data+Science+and+AI+Program.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Working Professionals"
            p2="50 LPA to 60 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="No Cost EMI"
            p44="₹ 10k/month (9 Months)"
          />
        </div>

        <div className={styles.Feature} id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="1-on-1 Dedication"
            box1desc="Live interactive session with expert for every individual"
            Box2h5="Assured Interview Call"
            box2desc="Get job referrals powered by 250+ hiring partners"
            Box3h5="Premium Mentoring"
            box3desc="Get professionally trained from MAANG and MNC experts"
            Box4h5="Crafted for professinals"
            box4desc="Prioritize growth and salary hike with in-demand skillset"
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />

        <CourseReview />
        <Certificate />

        <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
        />
        <ToolsCovered src="/tools-2.png" />
        <ProgramFee />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="12+" domain="7+" />
        </div>

        <HowApply CCourse="Enroll in Advanced Data Science & AI Program with Domain Specialization." />
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
          CourseFeeHead="Advanced Data Science & AI Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domain Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <ReferSection />
        <FAQNew
          FaqDatas={FaqData2}
          DomainFaqDatas={DomainFaqData2}
          PaymentFaqDatas={PaymentFaqData2}
          CapstoneFaqDatas={CapstoneFaqData2}
          CertificationFaqDatas={CertificationFaqData2}
          jobFaqDatas={jobFaqData2}
          MentorshipFaqDatas={MentorshipFaqData2}
          SupportFaqDatas={SupportFaqData2}
        />
      </main>
    </div>
  );
}
