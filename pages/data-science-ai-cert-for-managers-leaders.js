import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import Domain from "../Components/Domain/Domain";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Certificate from "../Components/Certificate/Certificate";
import Project from "../Components/Project/Project";
import Syllabus from "../Components/SyllabusManagers/Syllabus";
import ToolsCovered from "../Components/ToolsCoveredAdvance/ToolsCovered";
import OurExpert from "../Components/OurExpert/OurExpert";
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
        title="Full Stack Data Science & AI Course"
        spanTitleText="For Tech Lead, Team Lead,Managers"
        desc="Our course is best suited for professionals looking to change their current domain and start a New Career in Data Science and Artificial Intelligence in senior and leadership roles."
        src="/Managers.webp"
        alt="Managers Header"
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="8+ Years Work Experience"
          BatchDuration="Accredited with IBM"
          Placement="15+ Real Time Projects"
          EMI="₹ 12k/month*(9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Weekday Batches: 11 Months"
        WeekendBatchDate="Weekend Batches: 15 Months"
        WeekdayTime="Monday – Friday – 2 hours every day"
        WeekendTime="Saturday & Sunday – 3.5 hours every day"
        Project="15+ Real Time Project from AI and ML"
        Classes="Special Classes for non-programmers"
        OneLine="From Basics to Advance AI modules"
        Interview="100% Job Guaranteed Program"
        Fee="₹1,2,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Learning modules"
          box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
          Box2h5="Domain Destined"
          box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 10+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Utilize the advantage of mock interviews and project handling training with FAANG Data Science Leads."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <div className={styles.ExpertWrapper}>
        <div className={styles.expert}>
          <h5>Our experts are from:</h5>
        </div>
        <div className={styles.expertBody}>
          <OurExpert />
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <h6>Talk to our team directly.</h6>
          <p>Reach out and a learning consultant will get in touch with you shortly.</p>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <Certificate
        popupHead="Download Full stack Brochure"
        title="Earn a globally recognized Certified at the end of your learning journey."
        desc="Get access to IBM cloud lab to keep an eye on trending industrial case studies of data mining, time-series forecasting, AI-based database management, and authenticated data handling."
        desc2 ="Experts from IBM share their ideas and tactics to deal with tricky business problems within the regularly changing analytical environments."
        desc3 ="Data Science Leads from IBM as instructors."

      />
      <Syllabus />
      <ToolsCovered />
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project />
      </div>
      </main> 
    </div>
  )
}