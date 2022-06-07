import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import Domain from "../Components/Domain/Domain";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/CertificateTab/CertificateTab";
import OtherCertificate from "../Components/OtherCertificate/OtherCertificate";
import Project from "../Components/Project/Project";
import ToolsCovered from "../Components/ToolsCoveredAdvance/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
import HowApply from "../Components/HowApply/HowApply";
import ReferSection from "../Components/ReferSection/ReferSection";
import CourseFee from "../Components/CourseFee/CourseFee";
import SyllabusNew from "../Components/SyllabusNew/SyllabusNew";
import CareerImpact from "../Components/CareerImpact/CareerImpact";
import Fee from "../Components/Fee/Fee";
import SkillsCovered from "../Components/SkillsCovered/SkillsCovered";
import FAQNew from "../Components/FAQNew/FAQNew";
import React, { useState } from "react";

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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Experience-based certification course for professionals"
        mTopPara="Experience-based certification course for professionals"
        title="Advanced AI & ML Certification Program"
        spanTitleText="For Top Product based MNC And Startup"
        desc="
        AI Certification Course is designed with Domain Electives and Project Expertise for working professionals having 4+ years of experience in core tech and programming domain."
        src="/AiMl.webp"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="4+ Years Work Experience"
          BatchDuration="Accredited with IBM"
          Placement="15+ Real Time Projects"
          EMI="₹ 12k/month*(9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Weekday Batches: 13 Months"
        WeekendBatchDate="Weekend Batches: 15 Months"
        WeekdayTime="Monday – Friday – 2 hours every day"
        WeekendTime="Saturday & Sunday – 3.5 hours every day"
        Project="15+ Real Time Project from AI and ML"
        Classes="Special Classes for non-programmers"
        OneLine="From Basics to Advance AI modules"
        Interview="100% Job Guaranteed Program"
        Fee="₹1,25,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy and learn from mock interviews and CV writing workshops with FAANG DS/AI industry experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <CareerImpact
      CareerHead="Career Impact"
      />
      <div className={styles.ExpertWrapper}>
        <div className={styles.expert}>
          <h5>Our experts are from:</h5>
        </div>
        <div className={styles.expertBody}>
          <OurExpert />
        </div>
      </div>
      <Certificate
        popupHead="Download Full stack Brochure"
        title="Earn a globally recognized Certified at the end of your learning journey."
        desc="Get access to IBM cloud lab to keep an eye on trending industrial case studies of data mining, time-series forecasting, AI-based database management, and authenticated data handling."
        desc2 ="Experts from IBM share their ideas and tactics to deal with tricky business problems within the regularly changing analytical environments."
        desc3 ="Data Science Leads from IBM as instructors."

      />
      <OtherCertificate />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-a.webp"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="320px"
          />
        </span>
        </div>
    </section>
    <SyllabusNew />
      <ToolsCovered />
      <SkillsCovered />
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project />
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
<p>Doubts Regarding Learning Assistance? Or You’re Unsure Of Your Initial Data Science Career Step? Whatever Is It…</p>
          <h6>We Are Here To Help You.</h6>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <HowApply />
      <Fee />
      <CourseFee />
      <ReferSection />
      <FAQNew />
      </main> 
    </div>
  )
}