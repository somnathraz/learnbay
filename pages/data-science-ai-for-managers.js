import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTab4";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate6/OtherCertificate";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { DsaiManagersCourseData } from "../Data/DataScienceManagers";
import Fee from "../components/CoursePage/Fee/Fee";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  FaqData4,
  DomainFaqData4,
  PaymentFaqData4,
  CapstoneFaqData4,
  CertificationFaqData4,
  jobFaqData4,
  MentorshipFaqData4,
  SupportFaqData4,
} from "../components/FAQ/FaqData";
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
          Data Science and Artificial Intelligence Program For Managers and
          Leaders
        </title>
        <meta
          name="description"
          content="Data Science and Artificial Intelligence Program For Managers and Leaders"
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
          deskTopPara="Be a leader with Domain Specialization"
          mTopPara="Be a leader with Domain Specialization"
          title="Data Science and Artificial Intelligence Program"
          spanTitleText=" For Managers and Leaders"
          desc="Learn under the guidance of seasoned professionals to ace product-based MNC interviews, and earn capstone project certification."
          src="/course4.png"
          width="758"
          height="602"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DSAI+MANAGERS.pdf"
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
            p44="₹ 9,342/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
            Box1h5="Custom-fit Training"
            box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
            Box2h5="Domain Destined"
            box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 12+ electives."
            Box3h5="Premium Mentoring"
            box3desc="Utilize the advantage of mock interviews and project handling training with MAANG Data Science Leads."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />

        <CourseReview />
        <Certificate />
        <OtherCertificate
          OCHead1="Machine Learning with Python"
          OCP1="Validate your python expertise for ML algo designing."
          OCHead2="Python for Data Science"
          OCP2="Get certified on your advanced python skills."
          OCHead3="Deep Learning Fundamentals"
          OCP3="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead4="Sectoral Analytics Fundamentals – HR"
          OCP4="Obtain certification in the use of analytical best practices in HR decision-making."
          OCHead5="Sectoral Analytics Fundamentals – Marketing"
          OCP5="Obtain certification in the use of analytical best practices in marketing decision-making."
          OCHead6="Sectoral Analytics Fundamentals – Finance"
          OCP6="Obtain certification in the use of analytical best practices in financial decision-making."
        />

        <SyllabusNew
          syllabus={DsaiManagersCourseData[0].syllabus}
          syllabusDesc={DsaiManagersCourseData[0].syllabusDesc}
          popupHead={DsaiManagersCourseData[0].popupHead}
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
          <Project project="15+" domain="7+" />
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
          sub2="Data Science & AI
        For Managers Program"
          Price2="₹95,000 + GST"
          PFeatures21="350+ Hours"
          PFeatures22="Tech Lead, Managers"
          PFeatures23="8+"
          PFeatures24="15+2"
          PFeatures25="16+"
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
          CourseFeeHead="Data Science & AI For Managers Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domains + Project Expertise"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <ReferSection />
        <FAQNew
          FaqDatas={FaqData4}
          DomainFaqDatas={DomainFaqData4}
          PaymentFaqDatas={PaymentFaqData4}
          CapstoneFaqDatas={CapstoneFaqData4}
          CertificationFaqDatas={CertificationFaqData4}
          jobFaqDatas={jobFaqData4}
          MentorshipFaqDatas={MentorshipFaqData4}
          SupportFaqDatas={SupportFaqData4}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
