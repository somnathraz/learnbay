import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Popup from "../components/Popup/Popup";
import FirstSection from "../components/NewDesign/FirstSection/FirstSection";
import SecondSection from "../components/NewDesign/SecondSection/SecondSection";
import ThirdSection from "../components/NewDesign/ThirdSection/ThirdSection";
import FourthSection from "../components/NewDesign/FourthSection/FourthSection";
import FifthSection from "../components/NewDesign/FifthSection/FifthSection";
import SixthSection from "../components/NewDesign/SixthSection/SixthSection";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import DomainSection from "../components/NewDesign/DomainSection/DomainSection";
import { DataScienceCourseData } from "../Data/DataScienceCourse";
import FAQNew from "../components/NewDesign/FAQNew/FAQNew";
import {
  FaqData2,
  DomainFaqData2,
  PaymentFaqData2,
  CapstoneFaqData2,
  CertificationFaqData2,
  jobFaqData2,
  MentorshipFaqData2,
  SupportFaqData2,
} from "../components/NewDesign/FAQNew/FaqData";
import BatchDetails from "../components/NewDesign/BatchDetails/BatchDetails";
import Project from "../components/CoursePage/Project/Project";

function blockchain() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Head>
        <title>Advanced Data Science and AI Program with Domain Specialization</title>
        <meta name="description" content="Advanced Data Science and AI Program with Domain Specialization" />
        <meta name="keywords" content="Advanced Data Science and AI Program with Domain Specialization" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/advance-data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScience={true} />
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
          dataScience={true}
          first="Tools"
          second="Tips"
          third="Technology"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Advance+Data+Science.png"
          firstToparaImg="with Domain Specialization"
          firstHeading="Advanced Data Science and AI Program"
          firstTopPara="Choose Specialization over Generalization"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <SecondSection
          fullStackReview={true}
          SecondHead="What makes us your first choice!"
          SecondPara="With new capstone projects, learn how to apply your previous domain expertise to make a successful transition."
          SecondPara1="1:1 video call with expert & live doubt resolution"
          SecondPara2="Work on 8 advanced & 2 capstone projects"
          SecondPara3="Live online classes boost interaction"
          SecondPara4="Career Services & alumni network access"
        />
        <ThirdSection
          secondLine="Get ahead in your career with our programs"
          thirdHeadSpan="Empower yourself to secure top-level promotions with our advanced program"
          point1="1:1 career & mentoring support"
          point2="Job Placement Assistance"
          point3="Lifetime LMS Access"
          point4="Career Counselling"
          BatchPara="The pie-chart representation here shows that the comprehensive Advanced Data Science and AI Foundation Program is suitable for people who want to take their tech and business reporting knowledge to an advanced level, coming from the following industries and designation:"
          BatchParaImg1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Data+Science+and+AI+Advance+Left.png"
          BatchParaImg2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Data+Science+and+AI+Advance+Right.png"
          dataScience={true}
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/adobe.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/airbnb.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/antuit+ai.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/bloom+ai.png"
          img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/cisco.png"
          img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/datazymes.png"
          img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/dell.png"
          img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/flipkart.png"
          img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/fractal+analytics.png"
          img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/gartner.png"
          img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/genpact.png"
          img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/HCL.png"
          img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/jp+morgan.png"
          img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/KPMG.png"
          img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/lenskart.png"
          img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/linkedin.png"
          img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/lti+mindtree.png"
          img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/mercedes+benz.png"
          img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/musigma.png"
          img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/paypal.png"
          img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/tiger+analytics.png"
          img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/company-placement/tiger+analytics.png"
        />
        <FourthSection
        serviceBasic={true}
          careerH1="Career Service"
          careerSpan=" Basic"
          dataScience={true}
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <FifthSection
        advanceCertificate={true}
          Fee="₹ 99,000 + 18% GST"
          FeeEmi="₹ 9,735/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No Cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          para="We are dedicated to making best course for Data Structures and Algorithms accessible. We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
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
        <DomainSection />
        <Project />
        <BatchDetails />
        <FAQNew
          FaqDatas={FaqData2}
          DomainFaqDatas={ DomainFaqData2}
          PaymentFaqDatas={PaymentFaqData2}
          CapstoneFaqDatas={CapstoneFaqData2}
          CertificationFaqDatas={CertificationFaqData2}
          jobFaqDatas={jobFaqData2}
          MentorshipFaqDatas={MentorshipFaqData2}
          SupportFaqDatas={SupportFaqData2}
        />
        <SeventhSection />

        <Footer />
      </main>
    </>
  );
}

export default blockchain;
