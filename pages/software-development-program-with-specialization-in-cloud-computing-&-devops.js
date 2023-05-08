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
import { SpecDSAICourse } from "../Data/SpecDSAICourse";
import FAQNew from "../components/NewDesign/FAQNew/FAQNewcer";
import {
  FaqData2,
  DomainFaqData2,
  PaymentFaqData2,
  CapstoneFaqData2,
  jobFaqData2,
  MentorshipFaqData2,
  SupportFaqData2,
} from "../components/NewDesign/FAQNew/FaqData";

function blockchain() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Head>
        <title>
          Software Development Program with Specialization in Cloud Computing & DevOps
        </title>
        <meta name="robots" content="index, follow"/>
        <meta
          name="description"
          content="Software Development Program with Specialization in cloud computing & devops"
        />
        <meta
          name="keywords"
          content="Software Development Program with Specialization in cloud computing & devops"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/software-development-program-with-specialization-data-science-and-ai"
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
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSectionPlay.png"
          firstToparaImg="Specialization in Cloud Computing & DevOps"
          firstHeading="Software Development Program with"
          firstTopPara="Take the first step on your cloud computing & devops journey with our expert-led"
        />
        <SecondSection
          fullStackReview={true}
          SecondHead="What makes us your first choice!"
          SecondPara="Boost your career with cloud computing & devops & confidently bag your dream job"
          SecondPara1="IBM & Microsoft Certified Capstone Project"
          SecondPara2="1:1 video call with expert & live doubt resolution"
          SecondPara3="Career Services & alumni network access"
          SecondPara4="Elevate your career with strong project portfolio"
        />
        <ThirdSection
                firstLine="Get Ahead in your Career with our Programs"
                secondLine="Learn from leading industry experts and get certified by IBM & Microsoft"
                thirdHead="Assisted working professionals to make a"
                thirdHeadSpan="successful career transition"
                point1="1:1 career & mentoring support"
                point2="Job Placement Assistance"
                point3="Lifetime LMS Access"
                point4="Career Counselling"
          BatchPara="The pie-chart representation here shows that the Software Development Program with Specialization in cloud computing & devops is suitable for people coming from the following industries and designation:"
          BatchParaImg1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Cloud+_+DevOps+Left.png"
          BatchParaImg2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Cloud+_+DevOps+Right.png"
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
          careerH1="Career Service"
          careerSpan=" PRO"
          dataScience={true}
          syllabus={SpecDSAICourse[0].syllabus}
          syllabusDesc={SpecDSAICourse[0].syllabusDesc}
          popupHead={SpecDSAICourse[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <FifthSection
          hidetools={true}
          Fee="89,000 + 18% GST"
          FeeEmi="₹ 8,712/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No Cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          para="We are dedicated to making best course for Data Structures and Algorithms accessible. We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
          // img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          // img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/2.png"
          // img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/3.png"
          // img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/4.png"
          // img5="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/5.png"
          // img6="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/6.png"
          // img7="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
          // img8="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
          // img9="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
          // img10="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/10.png"
          // img11="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/11.png"
          // img12="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/12.png"
          // img13="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/13.png"
          // img14="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/14.png"
          // img15="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/15.png"
          // img16="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/16.png"
          // img17="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/17.png"
          // img18="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/18.png"
          // img19="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/19.png"
          // img21="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/7.png"
          // img22="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/8.png"
          // img23="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/9.png"
          // img20="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/24.jpeg"
        />
        <SixthSection
          SpecDevOpsProject={true}
          CourseFeeHead=" Cloud Computing & DevOps : Batch Details"
          FullStack={true}
        />
        <FAQNew
          FaqDatas={FaqData2}
          DomainFaqDatas={DomainFaqData2}
          PaymentFaqDatas={PaymentFaqData2}
          CapstoneFaqDatas={CapstoneFaqData2}
          jobFaqDatas={jobFaqData2}
          MentorshipFaqDatas={MentorshipFaqData2}
          SupportFaqDatas={SupportFaqData2}
        />
        <SeventhSection fullStackCont={true} />

        <Footer />
      </main>
    </>
  );
}

export default blockchain;
