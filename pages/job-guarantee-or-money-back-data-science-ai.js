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
import Certificate from "../Components/Certificatejob/Certificate";
import Project from "../Components/Project/Project";
import Syllabus from "../Components/Syllabus/Syllabus";
import ToolsCovered from "../Components/ToolsCovered/ToolsCovered";
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
        title="Data Science and AI Program"
        spanTitleText="With 100% Job Guarantee or Money Back"
        desc="The course has been designed specifically for working professionals who choose to advance their careers in Data Science and AI."
        src="/job.webp"
        alt="Job Header"
      />
      <div className={styles.program}>
        <ProgramInfo
          BatchDate="2+ Years Work Experience"
          BatchDuration="Accredited with IBM"
          Placement="15+ Real Time Projects"
          EMI="₹ 16k/month*(9 Months)"
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
        Fee="₹1,2,00"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed molecules as per your dream DS/AI role. Learn demanding DS/AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge DS/Al skills as per demanding IT-industry standards. Choose from 10+ domains."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Science/AI whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
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
      <Certificate
        title="Course Completion Certificate from IBM"
        desc="Complete your training with the internationally recognized certificate."
        desc2 ="Validate your Data Science and AI skills with IBM Course Completion Certificate."
        desc3 ="Get acknowledged in IT sector by adding IBM Certificate to your profile."

      />
      <section className={styles.HiringPartner}>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/jobhiring.png"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="320px"
          />
        </span>
    </section>
      <Syllabus />
      <ToolsCovered />
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
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project />
      </div>
      </main> 
    </div>
  )
}
