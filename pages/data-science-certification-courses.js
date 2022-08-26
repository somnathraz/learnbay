import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara="Data Science"
          deskTopPara1=" Foundation Program"
          mTitle="Enhance your earning potential "
          spanMTitleText="with industry-specific training"
          mTopPara="Data Science"
          spanTitleText="with industry-specific training"
          mTopPara1=" Foundation Program"
          title="Enhance your earning potential "
          desc="This program ensures a smooth transition into Jr. Data Scientist, Business Analyst, Data Analyst, Database Manager, and other relevant positions."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course1.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf"
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
            title="Why Enroll In This Program?"
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
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate-1.jpg"
        />

        <SyllabusNew
          syllabus={FoundtionCourseData[0].syllabus}
          syllabusDesc={FoundtionCourseData[0].syllabusDesc}
          popupHead={FoundtionCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf"
          hours="200+ Hours"
          project="8+ Real Time"
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="8+ Projects" domain="7+" />
        </div>
        <OurExpert
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/2.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/3.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/4.png"
          img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/5.png"
          img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/6.png"
          img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
          img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
          img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
          img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/10.png"
          img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/11.png"
          img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/12.png"
          img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/13.png"
          img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/14.png"
          img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/15.png"
          img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/16.png"
          img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/17.png"
          img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/18.png"
          img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/19.png"
          img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
          img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
          img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
          img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/24.jpeg"
        />
        <ProgramFee Emi="₹ 6,391/month" Fee="₹ 65,000 +GST" />
        <Fee
          sub2="Data Science Foundation Certification Program"
          Price2="₹65,000 + GST"
          PFeatures21="200+ Hours"
          PFeatures22="Non-Tech Professional"
          PFeatures23="NA"
          PFeatures24="8+1"
          PFeatures25="10+"
          PFeatures26="Yes"
          PFeatures27="No"
          PFeatures28="Data Analyst, Jr. Data Scientist, Data Associate, Etc."
          sub1="Advanced Data Science and AI Program"
          Price1="₹79,000 + GST"
          PFeatures11=" 250+ Hours"
          PFeatures12=" Tech/Non-Tech Professionals"
          PFeatures13="All"
          PFeatures14="12+2"
          PFeatures15="15+"
          PFeatures16="Yes"
          PFeatures17="No"
          PFeatures18="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
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
