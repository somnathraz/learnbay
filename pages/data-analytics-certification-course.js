import Head from "next/head";
import styles from "../styles/Home.module.css";
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
import { DataAnalyticsCourseData } from "../Data/DataAnalyticsData";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  FaqData6,
  PaymentFaqData6,
  CapstoneFaqData6,
  CertificationFaqData6,
  jobFaqData6,
  MentorshipFaqData6,
  SupportFaqData6,
} from "../components/FAQ/FaqData";
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
        <title>Data Analytics Certification Program</title>
        <meta
          name="description"
          content="Data Analytics Certification Program"
        />
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
          deskTopPara="Get ahead of the competition"
          deskTopPara1="with popular skill sets."
          mTopPara="Get ahead of the competition "
          mTopPara1="with popular skill sets."
          mTitle="Data Analytics Certification Program"
          spanMTitleText="For Professionals"
          title="Data Analytics Certification Program"
          spanTitleText="For Professionals"
          desc="Training based on real-time projects specially designed for working professionals who aspire of having a lucrative career."
          src="/course6.png"
          width="760"
          height="611"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Professional Beginners"
            p2="14 LPA - 22 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹ 6,392/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant companies."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />

        <CourseReview />
        <Certificate
          title="Course Completion Certificate from IBM"
          desc="Complete your training with the internationally recognized certificate."
          desc2="Validate your Data Analytics skills with IBM Course Completion Certificate."
          desc3="Get acknowledged in IT sector by adding IBM Certificate to your profile."
          src="/BA-DA.jpeg"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"
        />

        <SyllabusNew
          syllabus={DataAnalyticsCourseData[0].syllabus}
          syllabusDesc={DataAnalyticsCourseData[0].syllabusDesc}
          popupHead={DataAnalyticsCourseData[0].popupHead}
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
        <ProgramFee Emi="₹ 6,392/month" Fee="₹ 60,000 +GST" />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="6+" domain="7+" />
        </div>
        <CourseFee
          CourseFeeHead="Data Analytics Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Project-Based Learning"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <ReferSection />
        <FAQNew
          FaqDatas={FaqData6}
          PaymentFaqDatas={PaymentFaqData6}
          CapstoneFaqDatas={CapstoneFaqData6}
          CertificationFaqDatas={CertificationFaqData6}
          jobFaqDatas={jobFaqData6}
          MentorshipFaqDatas={MentorshipFaqData6}
          SupportFaqDatas={SupportFaqData6}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
