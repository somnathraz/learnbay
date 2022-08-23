import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshapedsas/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabWeb";
import Project from "../components/CoursePage/Projectfswd/Project";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReviewdsas/CourseReview";
import { DomainFaqCourseDataDSA } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DsaCourseData } from "../Data/DsaData";

import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  FaqData8,
  PaymentFaqData8,
  CapstoneFaqData8,
  CertificationFaqData8,
  jobFaqData8,
  MentorshipFaqData8,
  SupportFaqData8,
} from "../components/FAQ/FaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>DSA & System Design</title>
        <meta name="description" content="DSA & System Design" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
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
          deskTopPara="DSA & System Design"
          mTopPara="DSA & System Design"
          mTitle="Data Structure & Algorithms"
          spanMTitleText="Top Experts"
          title="MAANG's Best Interview Preparation Course trained by"
          spanTitleText="Top Experts"
          desc="Perform real-world industrial projects and use-cases."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/dsa-header-image.png"
          width="776"
          height="682"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
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
            p44="₹ 6,883/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Crack MAANG Interview"
            box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
            Box2h5="1:1 Mentorship"
            box2desc="Guided by mentors working In MNCs to support you for the tech interviews"
            Box3h5="Practical Project Experience"
            box3desc="Gain technical expertise by working on challenging real-world projects"
            Box4h5="250+ Hiring Partners"
            box4desc="Get dedicated placement support with 100% Interview Guarantee"
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseDataDSA} />
        <CourseReview />
        <SyllabusNew
          syllabus={DsaCourseData[0].syllabus}
          syllabusDesc={DsaCourseData[0].syllabusDesc}
          popupHead={DsaCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
          hours="200+ Hours"
          project="12+ Real Time"
        />
        <ProgramFee Fee="₹ 70,000 + GST" Emi="₹ 6,883/month" />
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
        {/* chetna ne bola tha */}
        {/* <FAQNew
          FaqDatas={FaqData8}
          PaymentFaqDatas={PaymentFaqData8}
          CapstoneFaqDatas={CapstoneFaqData8}
          CertificationFaqDatas={CertificationFaqData8}
          jobFaqDatas={jobFaqData8}
          MentorshipFaqDatas={MentorshipFaqData8}
          SupportFaqDatas={SupportFaqData8}
        /> */}
        <LearnSupport />
      </main>
    </div>
  );
}
