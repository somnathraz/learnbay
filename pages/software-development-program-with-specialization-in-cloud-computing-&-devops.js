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
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import DomainSection from "../components/NewDesign/DomainSection/DomainSection";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import { BlockchainCourse } from "../Data/BlockchainCourse";
import FAQNew from "../components/NewDesign/FAQNew/FAQNewcer";
import {
  FaqDataBlockchain,
  DomainFaqDataBlockchain,
  PaymentFaqDataBlockchain,
  CapstoneFaqDataBlockchain,
  jobFaqDataBlockchain,
  MentorshipFaqDataBlockchain,
  SupportFaqDataBlockchain,
} from "../components/NewDesign/FAQNew/FaqData";
import BatchDetails from "../components/NewDesign/BatchDetails/BatchDetails";
import Project from "../components/NewDesign/Project/Project";
import Switch from "../components/NewDesign/switch/switch";
import ProgramCustomer from "../components/NewDesign/ProgramCustomer/ProgramCustomer";
import GrowthStats from "../components/NewDesign/GrowthStat/GrowthStats";

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
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg="with specialization in Cloud and Devops"
          firstHeading="Software Development Program"
          firstTopPara="Revamp your devops game with/ Build the future cloud/ Transform your tech skills"
          idss="bfl64ANfSV0"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <SecondSection
          SecondHead="Why Choose Us?"
          SecondPara="India's top rated  bootcamp for working professionals "
          heading1="On-Demand Doubt Session"
          heading2="Guaranteed Interview Calls"
          heading3="Project Certificate from IBM"
          heading4="Designed For Professionals"
          SecondPara1="Clear your doubts & get real-time solutions from industry experts"
          SecondPara2="Boost career chances & gain referrals from 300+ high-level recruiters"
          SecondPara3="Master the domain of blockchain with certificate from IBM"
          SecondPara4="Use tech innovation to drive career growth & acquire in-demand skills"
        />
        <ProgramCustomer
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whoIsProgram.webp"
          para1="Bachelor's degree with consistent academic performance"
          para2="Minimum 1 year of IT work experience"
          para3="Early to mid-career professionals interested in blockchain development"
          para4="Professional seeking to upskill themselves in the digital economy"
          heading1="Education"
          heading2="Work experience"
          heading3="Career stage"
          heading4="Aspirations"
        />
        <Switch />
        <ThirdSection
          secondLine="Invest in yourself!"
          thirdHeadSpan=" Alumni Community"
          thirdHead="Stay Ahead Of The Curve With Support Of Our"
          point1="Enjoy 3 years of career service access"
          point2="Get 3 mock interviews with industry leaders"
          point3="Resume build up session"
          point4="Get 5-8 interview calls"
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
          syllabus={BlockchainCourse[0].syllabus}
          syllabusDesc={BlockchainCourse[0].syllabusDesc}
          popupHead={BlockchainCourse[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          heading="Looking for high-paying career opportunities? Enter the cloud industry"
          para1="Higher Growth: Compound annual growth rate of CAGR of 20% by 2028"
          para2="Big Earning Potential: Earn an average annual salary of INR 7 LPA"
          para3="Strong Demand: Growing need for tech wizards across various domains & industries"
        />
      
      <FifthSection
          advanceCertificate={true}
          Fee="₹ 95,000 + 18% GST"
          FeeEmi="₹ 9,342/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
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
        <DomainSection dataScience={true} />
        <Project
          project="10+ Projects"
          tools="16+"
          DsProject={true}
          dataScience={true}
        />
        <BatchDetails CourseFeeHead="Data Science and AI Foundation Program : Batch Details" />
        <FAQNew
          FaqDatas={FaqDataBlockchain}
          DomainFaqDatas={DomainFaqDataBlockchain}
          PaymentFaqDatas={PaymentFaqDataBlockchain}
          CapstoneFaqDatas={CapstoneFaqDataBlockchain}
          jobFaqDatas={jobFaqDataBlockchain}
          MentorshipFaqDatas={MentorshipFaqDataBlockchain}
          SupportFaqDatas={SupportFaqDataBlockchain}
        />
        <SeventhSection fullStackCont={true} />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
