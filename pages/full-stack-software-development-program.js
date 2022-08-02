import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/NewCourse/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Project from "../components/CoursePage/Projectfswd/Project";
import Domain from "../components/NewCourse/WhyLearnbay/WhyLearnbay";
import Pricing from "../components/NewCourse/Pricing/Pricing";
import HowApply from "../components/CoursePage/HowApply/HowApply";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabAdvance";
import ReferSection from "../components/CoursePage/ReferSection/ReferSection";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import { FullStackSoftwareCourseData } from "../Data/FullStackSoftware";
// import SyllabusNew from "../components/CoursePage/Syllabusfss/Syllabus";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import CareerImpact from "../components/CoursePage/CareerImpact/CareerImpact";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
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
        deskTopPara="Full Stack Software Development Program"
        mTopPara="Full Stack Software Development Program"
        title="Ace Your Coding Interview at FAANG and"
        spanTitleText=" Acheive Your Dream Job"
        desc="Best Interview Prep Course for Top Product Based MNCs"
        src="/course9.png"
        alt="Full Stack"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advanced+Software+Development+Program.pdf"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="100% guaranteed"
        p11="Job Referrals In MNCs"
        p2="300% Highest"
        p22="Salary Acheived"
        p3="1:1 Dedicated"
        p33="Personal Mentor"
        p4="No Cost EMI"
        p44="Starting at ₹7999"
        />
      </div>
      {/* <GetHired 
        WeekdayBatchDate="Guaranteed Interview In Top MNCs"
        WeekendBatchDate="End to End Projects With Mentorship"
        Project="Multiple Domains Specialisation"
        Classes="100% Live & Interactive Classes"
        OneLine="Coding Interview Prep & Support"
        Interview="Solve 300+ Coding Questions"
      /> */}
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Crack FAANG Interview"
          box1desc="Learn In-Depth Data Structures & Algorithm and Crack Interview In Product Based MNCs"
          Box2h5="Domain Specialisation"
          box2desc="Choose Domain Based On Your Work Experience and Work On Live Projects."
          Box3h5="1:1 Mentorship"
          box3desc="Choose Mentor & Working In Top Companies To Guide You For The Tech Interviews."
          Box4h5="Practical Project Experties"
          box4desc="Learn by Working Hard On Real-World Projects From Advance Level Of Complexity."
        />
      </div>
      <DomainFaq FaqData={DomainFaqCourseData1} />
      <CourseReview />
        <Certificate />
      {/* <CareerImpact
      CareerHead="Career Impact"
      /> */}
      {/* <section className={styles.HiringPartner}>
        <div>
        <h4 style={{ marginBottom: "20px", textAlign:"center" }}>Guaranteed Referrals In Top MNCs</h4>
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
    </section> */}
    {/* <SyllabusNew/> */}
    <SyllabusNew
          syllabus={FullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FullStackSoftwareCourseData[0].popupHead}
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
      {/* <SkillsCovered
      sc11="Data Structure and Algorithms"
      sc12="Algorithm Analysis"
      sc13="Space and Time Complexity Analysis"
      sc14="Database Management"
      sc15="Dynamic Programming"
      sc16="System Designing"
      sc21="Domain Expertise"
      sc22="Critical Thinking"
      sc23="DOM Manipulation"
      sc24="Source Controlling"
      sc25="Project Deployment"
      sc26="Debugging"
      sc31="Testing"
      sc32="Data Visualization"
      sc33="Machine Learning"
      sc34="Agile Development"
      sc35="Framework Handling"
      sc36="Distributed Computing"
      /> */}
      {/* <Domain /> */}
      <div className={styles.ProjectWrapper} id="project">
          <Project project="12+" domain="7+" />
        </div>
      {/* <div className={styles.cta}>
        <div className={styles.left}></div>
        <div className={styles.middle}>
          <h6>Talk to our team directly.</h6>
          <p>Reach out and a learning consultant will get in touch with you shortly.</p>
        </div>
        <div className={styles.right}>
          <button onClick={popupShow}>Enquire Now</button>
        </div>
      </div> */}
      {/* <div className={styles.cta}>
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
      /> */}
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