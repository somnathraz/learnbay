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
import Counselling from "../components/NewDesign/Counselling/Counselling";

function blockchain() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Head>
        <title>Blockchain Developer Course with Job Placement - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our extensive blockchain specialized software development program to become a skilled blockchain developer."
        />
        <meta
          name="keywords"
          content="Software Development Program with Specialization in Blockchain"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/software-development-program-with-specialization-in-blockchain"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
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
          softwareBtnHide={true}
          FirstTyped="IBM Certificate"
          SecondTyped="Expert-Led Advanced Program"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Software Development Program with Specialization in Blockchain"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain-Header.png"
          // firstToparaImg="with Specialization in Blockchain"
          firstHeading="Software Development Program with Blockchain Specialization"
          // firstTopPara="Ready to lead the blockchain revolution?"
          idss="bfl64ANfSV0"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
        />
        <SecondSection
          SecondHead="Why Choose Us?"
          SecondPara="India's top rated  bootcamp for working professionals "
          heading1="On-Demand Doubt Session"
          heading2="IBM Certificate"
          heading3="Peer Learning & Networking"
          heading4="Designed For Professionals"
          SecondPara1="Get personalised doubt clearing session with industry experts"
          SecondPara2="Enhance your technical skills & get IBM course completion certificate"
          SecondPara3="Learn & collaborate with peers for growth & opportunities"
          SecondPara4="Learn blockchain tools and techniques to excel in your career"
        />
        <ProgramCustomer
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain+-+Who+is+this+program+for.png"
          para1="Bachelor's degree with consistent good academics"
          para2="Minimum 6 months of experience in IT/Non-IT domain"
          para3="Computer Science, B.Tech, B.Sc. pursuing students"
          para4="Professionals looking to upskill for better career growth"
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
          point1="Enjoy 3+ years of career service access"
          point2="Get 6 mock interviews with industry leaders"
          point3="Resume build up session"
          point4="100% placement support"
          BatchPara="The pie-chart representation here shows that the comprehensive Advanced Data Science and AI Foundation Program is suitable for people who want to take their tech and business reporting knowledge to an advanced level, coming from the following industries and designation:"
          BatchParaImg1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Data+Science+and+AI+Advance+Left.png"
          BatchParaImg2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Data+Science+and+AI+Advance+Right.png"
          dataScience={true}
          titleCourse="Full Stack Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report+(1).pdf"
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
        <Counselling dataScienceCounselling={true} />
        <FourthSection
          dataScienceCounselling={true}
          serviceBasic={true}
          careerH1="Career Service"
          careerSpan=" Basic"
          dataScience={true}
          titleCourse="Software Development Program with Specialization in Blockchain"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
          syllabus={BlockchainCourse[0].syllabus}
          syllabusDesc={BlockchainCourse[0].syllabusDesc}
          popupHead={BlockchainCourse[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain+Scope+Image.png"
          heading="Accelerate blockchain career & secure your dream job confidently"
          para1="Higher Growth: Compound annual growth rate of CAGR of 87.7% by 2030"
          para2="Unlock earning potential: Be a blockchain developer, earn 8 LPA"
          para3="Strong Demand: Growing need for tech wizards across various industries"
        />

        <FifthSection
          blockChainTools={true}
          dataScienceCounselling={true}
          BlockchainCertificate={true}
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
          titleCourse="Software Development Program with Specialization in Blockchain"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
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
        <Project
          SoftwareText={true}
          project="12+ Projects"
          tools="16+"
          BlockChain={true}
          dataScience={true}
          titleCourse="Full Stack Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
        />
        <BatchDetails
          FullStack={true}
          CourseFeeHead="Data Science and AI Foundation Program : Batch Details"
        />
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
        <OfferPopup offer={true} />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
