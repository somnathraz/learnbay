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
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData2 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { FoundtionCourseData } from "../Data/FoundtionCourse";
import Fee from "../components/CoursePage/Fee/Fee";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import FAQNew from "../components/FAQNew/FAQNewDomain";
import React, { useState } from "react";
import {
  FaqData1,
  PaymentFaqData1,
  CapstoneFaqData1,
  CertificationFaqData1,
  jobFaqData1,
  MentorshipFaqData1,
  SupportFaqData1,
} from "../components/FAQ/FaqData";
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
        <title>Data Science Foundation Program</title>
        <meta name="description" content="Data Science Foundation Program" />
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
          deskTopPara="Enhance your earning potential"
          deskTopPara1="with industry-specific training"
          spanMTitleText=" Foundation Program"
          mTopPara="Enhance your earning potential"
          spanTitleText=" Foundation Program"
          mTopPara1="with industry-specific training"
          title="Data Science"
          desc="This program ensures a smooth transition into Jr. Data Scientist, Business Analyst, Data Analyst, Database Manager, and other relevant positions."
          src="/course1.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/FOUNDATION+DS.pdf"
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
            p44="₹ 6,391/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream role. Learn trending Data Science applications."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from starters, directly from relevant establishments."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData2} />

        <CourseReview />
        <Certificate
          title="Course Completion Certificate from IBM"
          desc="Complete your training with the internationally recognized certificate."
          desc2="Validate your Data Science skills with IBM Course Completion Certificate."
          desc3="Get acknowledged in IT sector by adding IBM Certificate to your profile."
          src="/certificate-1.jpg"
        />

        <SyllabusNew
          syllabus={FoundtionCourseData[0].syllabus}
          syllabusDesc={FoundtionCourseData[0].syllabusDesc}
          popupHead={FoundtionCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/FOUNDATION+DS.pdf"
          hours="200+ Hours"
          project="8+ Real Time"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="8+ Projects" domain="7+" />
        </div>
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
          img20="/logos/10.png"
        />
        <ProgramFee Emi="₹ 6,391/month" Fee="₹ 65,000 +GST" />
        <Fee
          sub1="Data Science Foundation Program"
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
          CourseFeeHead="Data Science Foundation Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Clearance Sessions"
          CourseFeelist4="Project-Based Learning"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <FAQNew
          FaqDatas={FaqData1}
          PaymentFaqDatas={PaymentFaqData1}
          CapstoneFaqDatas={CapstoneFaqData1}
          CertificationFaqDatas={CertificationFaqData1}
          jobFaqDatas={jobFaqData1}
          MentorshipFaqDatas={MentorshipFaqData1}
          SupportFaqDatas={SupportFaqData1}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
