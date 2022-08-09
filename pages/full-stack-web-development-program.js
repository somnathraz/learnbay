import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshapeweb/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabWeb";
import Project from "../components/CoursePage/Projectfswd/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReviewfull/CourseReview";
import { DomainFaqCourseDataweb } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import FAQNew from "../components/FAQNew/FAQNewDomain";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import { FullStackWebCourseData } from "../Data/FullStackWebData";
import React, { useState } from "react";
import {
  FaqData8,
  PaymentFaqData8,
  CapstoneFaqData8,
  CertificationFaqData8,
  jobFaqData8,
  MentorshipFaqData8,
  SupportFaqData8,
} from "../components/FAQ/FaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Web Development Program</title>
        <meta name="description" content="Full Stack Web Development Program" />
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
          deskTopPara="Be a demanding Developer to stay ahead"
          mTopPara="Be a demanding Developer to stay ahead"
          mTitle="Full Stack Web Development Program"
          spanMTitleText="Crack MAANG Interviews"
          title="Full Stack Web Development Program"
          spanTitleText="Crack MAANG Interviews"
          desc="Learn ultimate methods from MNC specialists with real-world projects"
          src="/header-home.webp"
          width="780"
          height="603"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay+(1).pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Premium Job"
            p11="Placement Support"
            p2="Job Advancement"
            p22="Skills"
            p3="Practice With"
            p33="Real-Time Projects"
            p4="Financing as low as"
            p44="₹ 11,800/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Learn latest tools & modules. Become an demanding developer."
            Box2h5="Interactive Learning"
            box2desc="100% interactive and live classes. Hybrid learning option also available."
            Box3h5="Premium Mentoring"
            box3desc="Take advantage of MAANG web developer simulated mock interviews."
            Box4h5="Hands-on Experience"
            box4desc="Gain real-time experience with industrial projects."
            Box5h5="1-on-1 Dedication"
            box5desc="Live interactive session with expert for every individual"
            Box6h5="Assured Interview Call"
            box6desc="Get job referrals powered by 250+ hiring partners"
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseDataweb} />
        <CourseReview />
        <Certificate />
        <SyllabusNew
          syllabus={FullStackWebCourseData[0].syllabus}
          syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
          popupHead={FullStackWebCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay+(1).pdf"
          hours="300+ Hours"
          project="12+ Real Time"
        />
        <OurExpert
          img1="/logosf/1.png"
          img2="/logosf/2.png"
          img3="/logosf/3.png"
          img4="/logosf/4.png"
          img5="/logosf/5.png"
          img6="/logosf/6.png"
          img7="/logosf/7.png"
          img8="/logosf/8.png"
          img9="/logosf/9.png"
          img10="/logosf/10.png"
          img11="/logosf/11.png"
          img12="/logosf/12.png"
          img13="/logosf/13.png"
          img14="/logosf/14.png"
          img15="/logosf/1.png"
          img16="/logosf/2.png"
          img17="/logosf/3.png"
          img18="/logosf/4.png"
          img19="/logosf/5.png"
          img21="/logosf/6.png"
          img22="/logosf/7.png"
          img23="/logosf/8.png"
          img20="/logosf/9.png"
        />
        <ProgramFee Fee="₹ 1,20,000 + GST" Emi="₹ 11,800/month" />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="12+ Projects" domain="7+" />
        </div>
        <CourseFee
          CourseFeeHead="Full Stack Web Development: Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domain Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <FAQNew
          FaqDatas={FaqData8}
          PaymentFaqDatas={PaymentFaqData8}
          CapstoneFaqDatas={CapstoneFaqData8}
          CertificationFaqDatas={CertificationFaqData8}
          jobFaqDatas={jobFaqData8}
          MentorshipFaqDatas={MentorshipFaqData8}
          SupportFaqDatas={SupportFaqData8}
        />
        <LearnSupport />
      </main>
    </div>
  );
}
