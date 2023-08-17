import Head from "next/head";
import styles from "../../styles/Home.module.css";
import FirstSection from "../../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../../components/CoursePage/ProgramInfo/ProgramInfo";
import BoxShape from "../../components/CoursePage/Boxshapeweb/BoxShape";
import Popup from "../../components/Popup/Popup";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomBar from "../../components/BottomBar/BottomBar";
import WhatsappFloat from "../../components/WhatsappFloat/WhatsappFloat";
import Form from "../../components/Form/Form";
import Certificate from "../../components/CoursePage/CertificateTab/CertificateTabWeb";
import Project from "../../components/CoursePage/Projectfswd/Project";
import OurExpert from "../../components/CoursePage/OurExpert/OurExpert";
import CourseFee from "../../components/CoursePage/CourseFee/CourseFee";
import SyllabusNew from "../../components/CoursePage/SyllabusNew/SyllabusNew";
import DomainFaq from "../../components/CoursePage/DomainFaq/DomainFaq";
import CourseReview from "../../components/CoursePage/CourseReviewfull/CourseReview";
import { DomainFaqCourseDataweb } from "../../components/CoursePage/DomainFaq/DOmainFaqData";
import { ProgramFee } from "../../components/CoursePage/ProgramFee/ProgramFee";
import OfferPopup from "../../components/OfferPopup/OfferPopup";
import FAQNew from "../../components/FAQNew/FAQNewDomain";
import LearnSupport from "../../components/LearnSupport/LearnSupport";
import { FullStackWebCourseData } from "../../Data/FullStackWebData";
import React, { useState } from "react";
import {
  FaqData8,
  PaymentFaqData8,
  CapstoneFaqData8,
  CertificationFaqData8,
  jobFaqData8,
  MentorshipFaqData8,
  SupportFaqData8,
} from "../../components/FAQ/FaqData";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Full Stack Web Developer Course with Job Assistance - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Upgrade your career with our comprehensive Full Stack Developer Course and become a highly skilled, successful Fullstack Developer."
        />
        <meta
          name="keywords"
          content="Full Stack Web Development Course, Full Stack Web Development Course training , Full Stack Web Development Course institute in India, best Full Stack Web Development Course institute, Full Stack Web developer Course ,Full Stack Web developer Course certification, Full Stack Web developer Course training institute , advanced Full Stack Web developer Course , Full Stack Web developer Course with Placement Assistance, Full Stack Web developer Course with IBM certification"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-web-development-program"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} fullStack={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} fullStack={true} />
          </div>
        </Popup>
        <FirstSection
          fsdBrochure={true}
          fullStack={true}
          deskTopPara="Be a demanding Developer to stay ahead"
          mTopPara="Be a demanding Developer to stay ahead"
          mTitle="Full Stack Web Development Course"
          spanMTitleText="Kickstart your Tech Career"
          title="Full Stack Web Development Course"
          spanTitleText="Kickstart your Tech Career"
          desc="Learn ultimate methods from MNC specialists with real-world projects"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/header-home.webp"
          width="780"
          height="603"
          alt="Full Stack"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
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
            p44="₹ 6,884/month"
          />
        </div>
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In Full Stack Web Development Course?"
            Box1h5="Custom-fit Training"
            box1desc="Learn latest tools & modules. Become an demanding developer."
            Box2h5="Interactive Learning"
            box2desc="100% interactive and live classes. Hybrid learning option also available."
            Box3h5="Premium Mentoring"
            box3desc="Take advantage of MNCs web developer simulated mock interviews."
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
          fsdBrochure={true}
          fullStack={true}
          syllabus={FullStackWebCourseData[0].syllabus}
          syllabusDesc={FullStackWebCourseData[0].syllabusDesc}
          popupHead={FullStackWebCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
          hours="200+ Hours"
          project="12+ Real Time"
        />
        <OurExpert
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/2.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/10.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/4.png"
          img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/5.png"
          img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/6.png"
          img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/7.png"
          img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/8.png"
          img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
          img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/10.png"
          img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/11.png"
          img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/12.png"
          img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/13.png"
          img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/14.png"
          img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
          img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/2.png"
          img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/10.png"
          img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/4.png"
          img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/5.png"
          img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/6.png"
          img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/7.png"
          img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/8.png"
          img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logosf/9.png"
        />
        <ProgramFee
          Fee="₹70,000 + 18% GST"
          Emi="₹ 6,884/month"
          fsdBrochure={true}
          fullStack={true}
        />
        <div className={styles.ProjectWrapper} id="project">
          <Project
            project="12+ Projects"
            domain="7+"
            fsdBrochure={true}
            fullStack={true}
          />
        </div>
        <CourseFee
          WebDev={true}
          fsdBrochure={true}
          fullStack={true}
          timeFsd={true}
          syllabus={FullStackWebCourseData[0].Batch}
          CourseFeeHead="Full Stack Web Development Course: Batch Details"
          CourseFeePara="Online Classroom"
          CourseFeelist1="Online Interactive Classes"
          CourseFeelist2="Weekend and Weekday Batches"
          CourseFeelist3="Extra Doubt Clearing Sessions"
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
        <OfferPopup WebDev={true} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
