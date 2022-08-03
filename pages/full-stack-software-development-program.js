import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Project from "../components/CoursePage/Projectfswd/Project";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabAdvance";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import FAQNew from "../components/FAQNew/FAQNewcer";
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
          deskTopPara="Full Stack Software Development Program"
          mTopPara="Full Stack Software Development Program"
          title="Ace Your Coding Interview at FAANG and"
          spanTitleText=" Acheive Your Dream Job"
          desc="Best Interview Prep Course for Top Product Based MNCs"
          src="/course9.png"
          width="791"
          height="659"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advanced+Software+Development+Program.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="100% guaranteed"
            p11="Job Referrals In MNCs"
            p2="300% Highest"
            p22="Salary Acheived"
            p3="1:1 Dedicated"
            p33="Personal Mentor"
            p4="No Cost EMI"
            p44="Starting at ₹7999"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Crack FAANG Interview"
            box1desc="Learn In-Depth Data Structures & Algorithm and Crack Interview In Product Based MNCs"
            Box2h5="Domain Specialisation"
            box2desc="Choose Domain Based On Your Work Experience and Work On Live Projects."
            Box3h5="1:1 Mentorship"
            box3desc="Choose Mentor & Working In Top Companies To Guide You For The Tech Interviews."
            Box4h5="Practical Project Experties"
            box4desc="Learn by Working Hard On Real-World Projects From Advance Level Of Complexity."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        <Certificate />
        <SyllabusNew
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FullStackSoftwareCourseData[0].popupHead}
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
          <Project project="12+" domain="7+" />
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
        <ReferSection />
        <FAQNew
          FaqDatas={FaqData9}
          DomainFaqDatas={DomainFaqData9}
          PaymentFaqDatas={PaymentFaqData9}
          CapstoneFaqDatas={CapstoneFaqData9}
          jobFaqDatas={jobFaqData9}
          MentorshipFaqDatas={MentorshipFaqData9}
          SupportFaqDatas={SupportFaqData9}
        />
      </main>
    </div>
  );
}
