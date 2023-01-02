import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTabjob";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OfferPopup from "../components/OfferPopup/OfferPopup";
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
        <title>Data Science and AI Program with 100% job assistance</title>
        <meta
          name="description"
          content="Data Science and AI Program with 100% job assistance"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-ai-masters-program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} />
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
        <FirstSection
          dataScience={true}
          deskTopPara="Boost your career opportunities "
          deskTopPara1="by developing relevant skills"
          mTitle="Data Science and AI Master Program "
          spanMTitleText="With Unlimited Interview Calls"
          mTopPara="Boost your career opportunities "
          mTopPara1="by developing relevant skills"
          title="Data Science and AI Master Program "
          spanTitleText="With Unlimited Interview Calls"
          desc="A complete guide with real-life exercises & domain oriented approach."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course5.png"
          width="829"
          height="646"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
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
            Box1h5="Unlimited Interview Calls"
            box1desc="Get job assistance from industry specialist to crack top product-based companies ineterviews."
            Box2h5="Select Multiple Domains"
            box2desc="Obtain cutting-edge skills as per demanding IT-industry standards. Choose from 7+ domains."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG Data Science/AI experts."
            Box4h5="Hands-on Experience"
            box4desc="Perform 3 fresh capstone projects, spanning from advanced level complexity, to earn IBM cerrtification."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData1} />
        <CourseReview />
        <Certificate />
        <SyllabusNew
          dataScience={true}
          syllabus={JobGuaranteeCourseData[0].syllabus}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead={JobGuaranteeCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
          hours="500+ Hours"
          project="20+ Real Time"
        />
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
        <ProgramFee
          Emi="₹ 12,292/month"
          Fee="₹ 1,25,000 + 18% GST"
          dataScience={true}
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="20+ Projects" domain="7+" />
        </div>
        <Fee
          dataScience={true}
          sub1="Advanced Data Science and AI Program"
          Price1="₹95,000 + 18% GST"
          PFeatures11=" 250+ Hours"
          PFeatures12=" Tech/Non-Tech Professionals"
          PFeatures13="2"
          PFeatures14="12 + 1"
          PFeatures15="15+"
          PFeatures16="10"
          PFeatures18="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
          sub2="Data Science and AI Master Program"
          Price2="₹1,25,000 + 18% GST"
          PFeatures21=" 500+ Hours"
          PFeatures22="Tech/Non-Tech Professionals"
          PFeatures23="7"
          PFeatures24="20 + 3"
          PFeatures25="18+"
          PFeatures26="Unlimited"
          PFeatures28="Project Manager, Team Lead, Project Lead, Project Head, Etc."
          sub3="Data Science & AI For Managers Program"
          Price3="₹1,05,000 + 18% GST"
          PFeatures31="400+ Hours"
          PFeatures32="Tech Lead, Managers"
          PFeatures33="2"
          PFeatures34="15 + 1"
          PFeatures35="16+"
          PFeatures36="10"
          PFeatures38="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
        />
        <CourseFee
          dataScience={true}
          CourseFeeHead="Data Science and AI Master Program : Batch Details"
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
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
