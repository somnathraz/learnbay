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
import OfferPopup from "../components/OfferPopup/OfferPopup";
import FifthSection from "../components/NewDesign/FifthSection/FifthSection";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import DomainSection from "../components/NewDesign/DomainSection/DomainSection";
import { JobGuaranteeCourseData } from "../Data/JobGuaranteeData";
import FAQNew from "../components/NewDesign/FAQNew/FAQNew";
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
          Data Science and AI Master Program
        </title>
        <meta
          name="description"
          content="Data Science and AI Master Program"
        />
        <meta
          name="keywords"
          content="Data Science and AI Master Program"
        />
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
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DSAI-Masters-Header.png"
          firstToparaImg="Data Science and AI Master Program"
          firstHeading="Discover new horizons with"
          firstTopPara="Become a master without master’s degree"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <SecondSection
          fullStackReview={true}
          SecondHead="Why Choose Us?"
          SecondPara="India's top rated  bootcamp for working professionals "
          heading1="On-Demand Doubt Sessions"
          heading2="Guaranteed Interview Calls"
          heading3="Project Certificate From IBM"
          heading4="Designed For Professionals"
          SecondPara1="Talk to an industry expert and receive real-time solutions to your queries."
          SecondPara2="Boost your job prospects with referrals from 300+ premier hiring partners."
          SecondPara3="Master the domain of data science with certificate from IBM"
          SecondPara4="Develop sought-after skills for better promotion & higher salary"
        />
        <ProgramCustomer
        leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DSAI-Masters-Who.png"
        img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
        img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
        img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
        img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
        heading1="Education"
        heading2="Work experience"
        heading3="Career stage"
        heading4="Aspirations"
        para1="Bachelor's degree with consistent academic performance."
        para2="Minimum 6 months of work experience."
        para3="Early to mid-career professionals interested in data science"
        para4="Preparing for future leadership opportunities in data science"
        />
        <Switch/>
        <ThirdSection
          secondLine="Invest In Yourself!"
          thirdHeadSpan=" Alumni Community."
          thirdHead="Stay Ahead Of The Curve With The Support Of Our"
          point1="Enjoy 3 Years Of Career Service Access"
          point2="Get 6 Mock Interviews with Industry Leaders"
          point3="Resume Build Up Session"
          point4="Get Unlimited Interview Calls"
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
          careerH1="Career Service"
          careerSpan=" Basic"
          dataScience={true}
          syllabus={JobGuaranteeCourseData[0].syllabus}
          syllabusDesc={JobGuaranteeCourseData[0].syllabusDesc}
          popupHead={JobGuaranteeCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
        img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
        heading="Power ahead in your career by joining the booming data science industry!"
        para1="Higher Growth : Demand for data scientists to grow by 30% by 2024"
        para2="Big Earning Potential : Earn an average salary of INR 10+ LPA"
        para3="Strong Demand : Booming requirement across various industries and domains"
        />
        <FifthSection
          advanceCertificate={true}
          Fee="₹ 1,29,000 + 18% GST"
          FeeEmi="₹ 12,685/month"
          FeeHeading="Program Fee & Financing"
          FeeContent2="No Cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
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
        <DomainSection 
        />
        <Project
         project="15+ Projects" tools="16+" />
        <BatchDetails CourseFeeHead="Data Science and AI Master Program : Batch Details" />
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
        <SeventhSection />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
