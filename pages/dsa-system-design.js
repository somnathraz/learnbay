import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabWeb";
import Project from "../components/CoursePage/Projectfswd/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import { DsaCourseData } from "../Data/DsaData";
import FAQNew from "../components/FAQNew/FAQNewDomain";

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
          deskTopPara="Be a demanding Developer to stay ahead"
          mTopPara="Be a demanding Developer to stay ahead"
          mTitle="Full Stack Web Development Program"
          spanMTitleText="Crack MAANG Interviews"
          title="Full Stack Web Development Program"
          spanTitleText="Crack MAANG Interviews"
          desc="As a seasoned web developer, you'll have an advantage in the job market. Learn ultimate methods from MNC specialists with real-world projects."
          src="/dsa-header-image.png"
          width="776"
          height="682"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DSA+%26+System+Design.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Custom-fit"
            p11="Aid for Product MNCs"
            p2="60 LPA to 95 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹ 6,883/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Learn with modules created just for your dream job. Become  an extraordinarily demanding web developer."
            Box2h5="Interactive Learning"
            box2desc="Enjoy an offline-like learning experience, even online. 100% interactive and live classes. Hybrid learning option also available."
            Box3h5="Premium Mentoring"
            box3desc="Take advantage of MAANG web developer simulated mock interviews. Hone your skills through webathons."
            Box4h5="Hands-on Experience"
            box4desc="Gain diligent experience in real-world projects ranging from advanced level complexity to amazing deployment scopes."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        <Certificate />
        <SyllabusNew
          syllabus={DsaCourseData[0].syllabus}
          syllabusDesc={DsaCourseData[0].syllabusDesc}
          popupHead={DsaCourseData[0].popupHead}
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
        <ProgramFee Fee="₹ 70,000 + GST" Emi="₹ 6,883/month" />
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
          FaqDatas={FaqData8}
          PaymentFaqDatas={PaymentFaqData8}
          CapstoneFaqDatas={CapstoneFaqData8}
          CertificationFaqDatas={CertificationFaqData8}
          jobFaqDatas={jobFaqData8}
          MentorshipFaqDatas={MentorshipFaqData8}
          SupportFaqDatas={SupportFaqData8}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
