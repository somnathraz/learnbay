import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHiredFsw/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabWeb";
import Project from "../components/CoursePage/Projectfswd/Project";
import ToolsCovered from "../components/CoursePage/ToolsCovered/ToolsCovered";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/Syllabusfsw/Syllabus";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import SkillsCovered from "../components/CoursePage/SkillsCovered/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNew";
import React, { useState } from "react";
import { FaqData2, DomainFaqData2, PaymentFaqData2, CapstoneFaqData2, CertificationFaqData2, jobFaqData2, MentorshipFaqData2, SupportFaqData2 } from "../components/FAQ/FaqData";

 
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
        deskTopPara="Be a demanding Developer to stay ahead"
        mTopPara="Be a demanding Developer to stay ahead"
        title="Full Stack Web Development Program"
        desc="Archive a stunning appearance in the job market as a seasoned web developer. Learn the ninja techniques from MNC experts via real-time projects."
        src="/header-home.webp"
        alt="Full Stack"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Full+Stack+Web+Development+Program.pdf"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Custom-fit"
        p11="Assistance for product MNCs"
        p2="60 LPA to 95 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 9k to 15k*(9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Assured interview calls powered by 250+ hiring partners"
        WeekendBatchDate="Hybrid learning option across multiple cities"
        Project="12+ live projects and 2 capstone project"
        Classes="Project experience Certificate by IBM"
        OneLine="1000+ trending practical assignments"
        Interview="Exclusive MNC expert hosted hackathons"
        Fee="79,000"
        Fees="₹79,000"
        Subscription="3 Year Subscription"
      />
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
      <Certificate />
      <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>In Collaboration with 250+ Hiring Partners</h4>
        <span className={styles.HiringPartnerB}>
          <Image
            src="/hiring-2.jpg"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="350px"
          />
        </span>
        </div>
    </section>
    <SyllabusNew/>
      <ToolsCovered 
      src="/tools-fs.png"
      />
      <SkillsCovered
      sc11="Data Collection"
      sc12="Data Understanding"
      sc13="Data Cleaning"
      sc14="Data Munging"
      sc15="Data Warehousing"
      sc16="Domain Expertise"
      sc21="Data Exploration"
      sc22="Data Preprocessing"
      sc23="Data Analysis"
      sc24="Statistical Analysis"
      sc25="PCA Analysis"
      sc26="Dashboard and Storytelling"
      sc31="Feature Engineering"
      sc32="Hyper Parameter Tuning"
      sc33="Model Creation"
      sc34="Model Deployment"
      sc35="Critical Thinking"
      sc36="Function & Formulas"
      />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="12+"
        domain="7+"
        />
      </div>
      <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
<p>Doubts regarding learning assistance... Or you’re unsure of your Initial Career step... Whatever it is!</p>
          <h6>WE ARE HERE TO HELP YOU!</h6>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div>
      <HowApply
      CCourse="Enroll in Full Stack Web Development Program."
      />
      <CourseFee 
      CourseFeeHead="Upcoming Full Stack Web Development Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Multiple Domain Selection Options"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData2} DomainFaqDatas={DomainFaqData2} PaymentFaqDatas={PaymentFaqData2} CapstoneFaqDatas={CapstoneFaqData2} CertificationFaqDatas={CertificationFaqData2} jobFaqDatas={jobFaqData2} MentorshipFaqDatas={MentorshipFaqData2} SupportFaqDatas={SupportFaqData2} />
      </main> 
    </div>
  )
}