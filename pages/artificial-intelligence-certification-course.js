import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTab3";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate/OtherCertificate";
import Fee from "../components/CoursePage/Fee/Fee";
import {DataScienceCourseData} from "../Data/DataScienceCourse";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData3, DomainFaqData3, PaymentFaqData3, CapstoneFaqData3, CertificationFaqData3, jobFaqData3, MentorshipFaqData3, SupportFaqData3 } from "../components/FAQ/FaqData";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";


 
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
        deskTopPara="Boost Your Professional Growth"
        deskTopPara1="To a Whole New Level"
        mTopPara="Boost Your Professional Growth"
        mTopPara1="To a Whole New Level"
        title="Artificial Intelligence and Machine Learning Program"
        desc="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
        src="/course3.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/AIML.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Eligibility"
        p11="Tech Professionals"
        p2="50 LPA - 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12k/month (9 Months)"
        />
      </div>
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy and learn from mock interviews and CV writing workshops with MAANG AI/ML industry experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
        />
      </div>
            <DomainFaq FaqData={DomainFaqCourseData1} />

<CourseReview />
<Certificate />
      <OtherCertificate
          OCHead1="Deep Learning Fundamentals"
          OCP1="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead2="Deep Learning with TensorFlow"
          OCP2="Get certified for your Industrial-level TensorFlow application expertise."
          OCHead3="Machine Learning with Python"
          OCP3="Validate your python expertise for ML algo designing."
          OCHead4="Accelerating Deep Learning with GPUs"
          OCP4="Industrial badge on GPU handling mastery for Cloud, AI & ML."
      />
      <SyllabusNew
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
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
        <Project
        project="12+"
        domain="7+"
        />
      </div>
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
        sub2="Artificial Intelligence
        & ML Program"
        Price2="₹95,000 + GST"
        PFeatures21="300+ Hours"
        PFeatures22="Tech Professionals"
        PFeatures23="8+"
        PFeatures24="15+2"
        PFeatures25="18+"
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
      CourseFeeHead="Artificial Intelligence & Machine Learning Program : Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Multiple Domain Selection Options"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData3} PaymentFaqDatas={PaymentFaqData3} DomainFaqDatas={DomainFaqData3} CapstoneFaqDatas={CapstoneFaqData3} CertificationFaqDatas={CertificationFaqData3} jobFaqDatas={jobFaqData3} MentorshipFaqDatas={MentorshipFaqData3} SupportFaqDatas={SupportFaqData3} />
      </main> 
    </div>
  )
}