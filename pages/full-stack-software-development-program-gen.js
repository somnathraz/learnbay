import Head from "next/head";
import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
import BottomBar from "../components/BottomBar/BottomBar";
import BoxShape from "../components/CoursePage/Boxshapedsas/BoxShape";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabSd";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import CourseReview from "../components/CoursePage/CourseReviewdsas/CourseReview";
import { DomainFaqCourseDatasoft } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import Project from "../components/CoursePage/Projectfswd/Project";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import FAQNew from "../components/FAQNew/FAQNewcer";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Popup from "../components/Popup/Popup";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";
import {
  CapstoneFaqData9,
  DomainFaqData9,
  FaqData9,
  MentorshipFaqData9,
  PaymentFaqData9,
  SupportFaqData9,
  jobFaqData9,
} from "../components/FAQ/FaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Software Development Course - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-software-development-program"
        />
        <meta
          name="description"
          content="Full Stack Software Development Course with IBM certification. Learnbay provide advanced full stack Software developer course with Placement Assistance. Enrol in our full stack Software developer course to enhance your career"
        />
        <meta
          name="keywords"
          content="Full Stack Software Development Course, Full Stack Software Development Course training , Full Stack Software Development Course institute in India, best Full Stack Software Development Course institute, Full Stack Software developer Course ,Full Stack Software developer Course certification, Full Stack Software developer Course training institute , advanced Full Stack Software developer Course , Full Stack Software developer Course with Placement Assistance, Full Stack Software developer Course with IBM certification"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} fullStack={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} fullStack={true} />
          </div>
        </Popup>
        <FirstSection
          fsdBrochure={true}
          fullStack={true}
          deskTopPara="Full Stack Software Development Course"
          mTopPara="Full Stack Software Development Course"
          mTitle="Ace Your Coding Interview at"
          spanMTitleText="PRODUCT Based Companies"
          title="Ace Your Coding Interview at"
          spanTitleText=" PRODUCT Based Companies"
          desc="Best Interview Prep Course for Top Product Based MNCs"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
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
            p44="₹ 11,308/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In Full Stack Software Development Course?"
            Box1h5="Crack Interviews at MNC's"
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
        <CourseReview fsdBrochure={true} fullStack={true} />
        <Certificate />
        <SyllabusNew
          fsdBrochure={true}
          fullStack={true}
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FullStackSoftwareCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          hours="300+ Hours"
          project="12+ Real Time"
        />
        <ProgramFee Fee="₹ 1,15,000 + 18% GST" Emi="₹11,308" fullStack={true} />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project="12+ Projects"
            domain="7+"
            fsdBrochure={true}
            fullStack={true}
          />
        </div>
        <CourseFee
          fullStack={true}
          timeFsd={true}
          syllabus={FullStackSoftwareCourseData[0].Batch}
          CourseFeeHead="Full Stack Software Development Course: Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearing Sessions"
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
        <OfferPopup offer={true} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
