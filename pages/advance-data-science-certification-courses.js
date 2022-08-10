import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabAdvance";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import Fee from "../components/CoursePage/Fee/Fee";
import FAQNew from "../components/FAQNew/FAQNew";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import LearnSupport from "../components/LearnSupport/LearnSupport";

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
        <title>
          Advanced Data Science and AI Program with Domain Specialization
        </title>
        <meta
          name="description"
          content="Advanced Data Science and AI Program with Domain Specialization"
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
          deskTopPara="Choose Specialization over Generalization"
          mTopPara="Choose Specialization over Generalization"
          mTitle="Advanced Data Science and AI Program with"
          spanMTitleText="Domain Specialization"
          title="Advanced Data Science and AI Program"
          spanTitleText="with Domain Specialization"
          desc="With new capstone projects, learn how to apply your previous domain expertise to make a successful transition."
          src="/course2.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Global Recognition"
            p11="From IBM"
            p2="Industry Standard"
            p22="Training"
            p3="Career Assistance"
            p33="For Professionals"
            p4="Financing as low as"
            p44="₹ 7,768/month"
          />
        </div>

        <div className={styles.Feature} id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="1-on-1 Dedication"
            box1desc="Live interactive session with expert for every individual"
            Box2h5="Assured Interview Call"
            box2desc="Get job referrals powered by 250+ hiring partners"
            Box3h5="Premium Mentoring"
            box3desc="Get professionally trained from MAANG and MNC experts"
            Box4h5="Crafted for professional"
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
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <OurExpert
          img1="/logos/1.png"
          img2="/logos/2.png"
          img3="/logos/3.png"
          img4="/logos/4.png"
          img5="/logos/5.png"
          img6="/logos/6.png"
          img7="/logos/7.png"
          img8="/logos/8.png"
          img9="/logos/9.png"
          img10="/logos/10.png"
          img11="/logos/11.png"
          img12="/logos/12.png"
          img13="/logos/13.png"
          img14="/logos/14.png"
          img15="/logos/15.png"
          img16="/logos/16.png"
          img17="/logos/17.png"
          img18="/logos/18.png"
          img19="/logos/19.png"
          img21="/logos/7.png"
          img22="/logos/8.png"
          img23="/logos/9.png"
          img20="/logos/24.jpeg"

        />
        <ProgramFee Fee="₹79,000 + GST" Emi="₹ 7,768/month" />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="12+ Projects" domain="7+" />
        </div>

        <Fee
          sub1="Data Science Foundation Program"
          Price1="₹65,000 + GST"
          PFeatures11="200+ Hours"
          PFeatures12="Early Professionals"
          PFeatures13="NA"
          PFeatures14="8+1"
          PFeatures15="10+"
          PFeatures16="Yes"
          PFeatures17="No"
          PFeatures18="Data Analyst, Jr. Data Scientist, Data Associate, Etc."
          sub2="Advanced Data Science and AI Program"
          Price2="₹ 79,000 + GST"
          PFeatures21=" 250+ Hours"
          PFeatures22=" Tech/Non-Tech Professionals"
          PFeatures23="8+"
          PFeatures24="12+2"
          PFeatures25="15+"
          PFeatures26="Yes"
          PFeatures27="No"
          PFeatures28="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
          sub3="Data Science and AI with Job Guarantee Program"
          Price3="₹1,25,000 + GST"
          PFeatures31=" 500+ Hours"
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
        <LearnSupport />
      </main>
    </div>
  );
}
