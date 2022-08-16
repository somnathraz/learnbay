import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshapedsas/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Project from "../components/CoursePage/Projectfswd/Project";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReviewdsas/CourseReview";
import { DomainFaqCourseDatasoft } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import FAQNew from "../components/FAQNew/FAQNewcer";
import LearnSupport from "../components/LearnSupport/LearnSupport";

import React, { useState } from "react";
import {
  FaqData9,
  DomainFaqData9,
  PaymentFaqData9,
  CapstoneFaqData9,
  jobFaqData9,
  MentorshipFaqData9,
  SupportFaqData9,
} from "../components/FAQ/FaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Software Development Program</title>
        <meta
          name="description"
          content="Full Stack Software Development Program"
        />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

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
          deskTopPara="Full Stack Software Development Program"
          mTopPara="Full Stack Software Development Program"
          mTitle="Ace Your Coding Interview at MAANG and"
          spanMTitleText="Achieve Your Dream Job"
          title="Ace Your Coding Interview at MAANG and"
          spanTitleText=" Achieve Your Dream Job"
          desc="Best Interview Prep Course for Top Product Based MNCs"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course9.png"
          width="791"
          height="659"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Premium Job"
            p11="Placement Support"
            p2="Job Advancement"
            p22="Skills"
            p3="Practice with"
            p33="Real-Time Projects"
            p4="Financing as low as"
            p44="₹ 10,816/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Crack MAANG Interview"
            box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
            Box2h5="1:1 Mentorship"
            box2desc="Guided by mentors working in MNCs to support you for the tech interviews"
            Box3h5="Practical Project Experience"
            box3desc="Gain technical expertise by working on challenging real-world projects"
            Box4h5="Domain Specialization"
            box4desc="Choose Domain electives on your work experience and work on Live Projects"
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseDatasoft} />
        <CourseReview />
        <SyllabusNew
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FullStackSoftwareCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          hours="300+ Hours"
          project="12+ Real Time"
        />
        <ProgramFee Fee="₹ 1,10,000 + GST" Emi="₹10,816" />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="12+ Projects" domain="7+" />
        </div>
        <CourseFee
          CourseFeeHead="Full Stack Web Development: Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domain Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
         
        <FAQNew
          FaqDatas={FaqData9}
          DomainFaqDatas={DomainFaqData9}
          PaymentFaqDatas={PaymentFaqData9}
          CapstoneFaqDatas={CapstoneFaqData9}
          jobFaqDatas={jobFaqData9}
          MentorshipFaqDatas={MentorshipFaqData9}
          SupportFaqDatas={SupportFaqData9}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
