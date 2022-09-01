import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/Certificatejob/Certificate";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import Fee from "../components/CoursePage/Fee/Fee";
import FAQNew from "../components/FAQNew/FAQNew";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import React, { useState } from "react";
import {
  FaqData5,
  DomainFaqData5,
  PaymentFaqData5,
  CapstoneFaqData5,
  CertificationFaqData5,
  jobFaqData5,
  MentorshipFaqData5,
  SupportFaqData5,
} from "../components/FAQ/FaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import { DomainFaqCourseData1 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
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
        <title>Data Science and AI Program with 100% Job Guarantee</title>
        <meta
          name="description"
          content="Data Science and AI Program with 100% Job Guarantee"
        />
                  <link rel="canonical" href="https://www.learnbay.co/job-guarantee-or-money-back-data-science-ai-certification-course" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} dataScience={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection dataScience={true}
          deskTopPara="Boost your career opportunities "
          deskTopPara1="by developing relevant skills."
          mTitle="Data Science and AI Program "
          spanMTitleText="With Job Guarantee"
          mTopPara="Boost your career opportunities "
          mTopPara1="by developing relevant skills."
          title="Data Science and AI Program "
          spanTitleText="with 100% Job Guarantee"
          desc="✓ Domain Orientated approach ✓ Assured placement within 18 months."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course5.png"
          width="829"
          height="646"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Working Professionals"
            p2="35 LPA - 50 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹ 12,292/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream job profile. Learn demanding DS/AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 10+ domains."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG Data Science/AI experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        <Certificate
          title="Course Completion Certificate from IBM"
          desc="Complete your training with the internationally recognized certificate."
          desc2="Validate your Data Science and AI skills with IBM Course Completion Certificate."
          desc3="Get acknowledged in IT sector by adding IBM Certificate to your profile."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/DS-AI-1.jpeg"
        />
        <SyllabusNew dataScience={true}
          syllabus={JobGuaranteeCourseData[0].syllabus}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead={JobGuaranteeCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Job+Guarantee+or+100%25+Money+Back+Data+Science+%26+AI+Certification+Program+Learnbay.pdf"
          hours="500+ Hours"
          project="15+ Real Time"
        />
        <div className={styles.ctj}>
          <div className={styles.left}></div>
          <div className={styles.middle}>
            <h6>
              Know More About How A Job Guarantee Or 100% Money-Back Program
              Works.
            </h6>
          </div>
          <div className={styles.right}>
            <a href="/terms-conditions-job" target="_blank">
              <button>Terms & Conditions</button>
            </a>
          </div>
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
        <ProgramFee Emi="₹ 12,292/month" Fee="₹ 1,25,000 +GST" dataScience={true} />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="15+ Projects" domain="7+" />
        </div>
        <Fee dataScience={true}
          sub1="Data Science Foundation Certification Program"
          Price1="₹65,000 + GST"
          PFeatures11="200+ Hours"
          PFeatures12="Non-Tech Professional"
          PFeatures13="NA"
          PFeatures14="8+1"
          PFeatures15="10+"
          PFeatures16="Yes"
          PFeatures17="No"
          PFeatures18="Data Analyst, Jr. Data Scientist, Data Associate, Etc."
          sub3="Advanced Data Science and AI Program"
          Price3="₹79,000 + GST"
          PFeatures31=" 250+ Hours"
          PFeatures32=" Tech/Non-Tech Professionals"
          PFeatures33="All"
          PFeatures34="12+2"
          PFeatures35="15+"
          PFeatures36="Yes"
          PFeatures37="No"
          PFeatures38="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
          sub2="Data Science and AI with Job Guarantee Program"
          Price2="₹1,25,000 + GST"
          PFeatures21=" 500+ Hours"
          PFeatures22="Tech/Non-Tech Professionals"
          PFeatures23="All"
          PFeatures24="15+3"
          PFeatures25="18+"
          PFeatures26="Yes"
          PFeatures27="Yes"
          PFeatures28="Project Manager, Team Lead, Project Lead, Project Head, Etc."
        />
        <CourseFee dataScience={true}
          CourseFeeHead="Data Science and AI with
      Job Guarantee Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Clearance Sessions"
          CourseFeelist4="Multiple Domain & Project Experties Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <FAQNew
          FaqDatas={FaqData5}
          DomainFaqDatas={DomainFaqData5}
          PaymentFaqDatas={PaymentFaqData5}
          CapstoneFaqDatas={CapstoneFaqData5}
          CertificationFaqDatas={CertificationFaqData5}
          jobFaqDatas={jobFaqData5}
          MentorshipFaqDatas={MentorshipFaqData5}
          SupportFaqDatas={SupportFaqData5}
        />
                <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
