import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Project from "../components/CoursePage/Projectfswd/Project";
import Domain from "../components/CoursePage/DomainFss/Domain";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/Syllabusfss/Syllabus";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import SkillsCovered from "../components/CoursePage/SkillsCovered/SkillsCovered";
import FAQNew from "../components/FAQNew/FAQNewcer";
import React, { useState } from "react";
import { FaqData9, DomainFaqData9, PaymentFaqData9, CapstoneFaqData9, jobFaqData9, MentorshipFaqData9, SupportFaqData9 } from "../components/FAQ/FaqData";

 
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
        deskTopPara="The Six-Figure Salary is at your fingertips"
        mTopPara="The Six-Figure Salary is at your fingertips"
        title="Advanced Software Development Training "
        desc="Transform your career as a demanding software development expert. Sharpen your skills with real-time project experience."
        src="/course9.png"
        alt="Full Stack"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advanced+Software+Development+Program.pdf"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="100%"
        p11="Assurance for placement"
        p2="75 LPA to 110 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 14k*(9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="250+ hiring partners & guarantee interviews"
        WeekendBatchDate="Hybrid learning option across multiple cities"
        Project="12+ live projects and 2 fresh capstone projects"
        Classes="100% live and interactive classes"
        OneLine="1000+ trending practical assignments"
        Interview="Choose from 5 elite domain electives"
        Fee="1,10,000"
        Subscription="3 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding software developer."
          Box2h5="Exclusive Hackathon"
          box2desc="Sharpen your skills through multiple exclusive hackathons. Upskill your designing skills and coding speed."
          Box3h5="Premium Mentoring"
          box3desc="Exclusive mock interview sessions by experienced industry experts. Capstone projects under MNC software developer’s guidance."
          Box4h5="Hands-on Experience"
          box4desc="Learn by working hard on real-world projects that range from advanced levels of complexity to large-scale deployments."
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
      <Domain />
      <div className={styles.ProjectWrapper} id="project">
        <Project
        project="12+"
        domain="7+"
        />
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
      <HowApply
      CCourse="Enroll in Full Stack Software Development Program."
      />
      <CourseFee 
      CourseFeeHead="Full Stack Web Development: Batch Details"
      CourseFeePara="Online Classroom"
      CourseFeelist1="Online Interactive Classes"
      CourseFeelist2="Weekend and Weekday Batches"
      CourseFeelist3="Extra Doubt Clearance Sessions"
      CourseFeelist4="Multiple Domain Selection Options"
      CourseFeelist5="Company-based Mock Interviews"

      />
      <ReferSection />
      <FAQNew FaqDatas={FaqData9} DomainFaqDatas={DomainFaqData9} PaymentFaqDatas={PaymentFaqData9} CapstoneFaqDatas={CapstoneFaqData9} jobFaqDatas={jobFaqData9} MentorshipFaqDatas={MentorshipFaqData9} SupportFaqDatas={SupportFaqData9} />
      </main> 
    </div>
  )
}