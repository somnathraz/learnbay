import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import Certificate from "../components/CoursePage/CertificateTab/CertificateTab3";
import Project from "../components/CoursePage/Project/Project";
import OurExpert from "../components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../components/CoursePage/SyllabusNew/SyllabusNew";
import OtherCertificate from "../components/CoursePage/OtherCertificate/OtherCertificate";
import Fee from "../components/CoursePage/Fee/Fee";
import { AiMlCourseData } from "../Data/AiMlData";
import FAQNew from "../components/FAQNew/FAQNew";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  FaqData3,
  DomainFaqData3,
  PaymentFaqData3,
  CapstoneFaqData3,
  CertificationFaqData3,
  jobFaqData3,
  MentorshipFaqData3,
  SupportFaqData3,
} from "../components/FAQ/FaqData";
import SliderTab from "../components/CoursePage/SliderTab/SliderTabs";
import DomainFaq from "../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../components/CoursePage/CourseReview/CourseReview";
import { DomainFaqCourseData3 } from "../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Artificial Intelligence and Machine Learning Program</title>
        <meta
          name="description"
          content="Artificial Intelligence and Machine Learning Program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-certification-course"
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
          deskTopPara="Boost Your Professional Growth "
          deskTopPara1="To a Whole New Level"
          spanTitleText="Advance Program"
          mTitle="Artificial Intelligence and Machine Learning"
          mTopPara="Boost Your Professional Growth "
          spanMTitleText="Advance Program"
          mTopPara1="To a Whole New Level"
          title="Artificial Intelligence and Machine Learning"
          desc="With demanding industry projects, you can acquire the most advanced technical expertise possible. Be a master even without a master's degree."
          width="721"
          height="632"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course3.png"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
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
            p44="₹ 10,325/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy and learn from mock interviews and CV writing workshops with MAANG AI/ML industry experts."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
          />
        </div>
        <DomainFaq FaqData={DomainFaqCourseData3} />
        <CourseReview />
        <Certificate />
        <OtherCertificate
          OCHead1="Deep Learning Fundamentals"
          OCP1="Earn industrial badge on neural networks, and convolutional networks like DL skills."
          OCHead2="Deep Learning with TensorFlow"
          OCP2="Get certified for your Industrial-level TensorFlow application expertise."
          OCHead3="Machine Learning with Python"
          OCP3="Validate your python expertise for ML algo designing."
          OCHead4="Accelerating Deep Learning with GPUs"
          OCP4="Industrial badge on GPU handling mastery for Cloud, AI & ML."
        />
        <SyllabusNew
          dataScience={true}
          syllabus={AiMlCourseData[0].syllabus}
          syllabusDesc={AiMlCourseData[0].syllabusDesc}
          popupHead={AiMlCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          hours="350+ Hours"
          project="15+ Real Time"
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
          Emi="₹ 10,325/month"
          Fee="₹ 1,05,000 + 18% GST"
          dataScience={true}
        />
        <SliderTab />
        <div className={styles.ProjectWrapper} id="project">
          <Project project="15+ Projects" domain="7+" />
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
          sub2="Artificial Intelligence
        & ML Program"
          Price2="₹1,05,000 + 18% GST"
          PFeatures21="350+ Hours"
          PFeatures22="Tech Professionals"
          PFeatures23="2"
          PFeatures24="15 + 1"
          PFeatures25="18+"
          PFeatures26="10"
          PFeatures28="Sr. Data Scientist, AI Engineer, ML Engineer, Sr. Associate, Etc."
          sub3="Data Science and AI Master Program"
          Price3="₹1,25,000 + 18% GST"
          PFeatures31=" 500+ Hours"
          PFeatures32="Tech/Non-Tech Professionals"
          PFeatures33="7"
          PFeatures34="20 + 3"
          PFeatures35="18+"
          PFeatures36="Unlimited"
          PFeatures38="Project Manager, Team Lead, Project Lead, Project Head, Etc."
        />
        <CourseFee
          dataScience={true}
          CourseFeeHead="Artificial Intelligence & Machine Learning Program : Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearance Sessions"
          CourseFeelist4="Multiple Domain Selection Options"
          CourseFeelist5="Company-based Mock Interviews"
        />
        <FAQNew
          FaqDatas={FaqData3}
          PaymentFaqDatas={PaymentFaqData3}
          DomainFaqDatas={DomainFaqData3}
          CapstoneFaqDatas={CapstoneFaqData3}
          CertificationFaqDatas={CertificationFaqData3}
          jobFaqDatas={jobFaqData3}
          MentorshipFaqDatas={MentorshipFaqData3}
          SupportFaqDatas={SupportFaqData3}
        />
        <LearnSupport />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
