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
import OfferPopup from "../components/OfferPopup/OfferPopup";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import { DSBankingFinanceData } from "../Data/DSBankingFinance";
import FAQNew from "../components/NewDesign/FAQNew/FAQNewDomain";
import ProgramCustomer from "../components/NewDesign/ProgramCustomer/ProgramCustomer";
import GrowthStats from "../components/NewDesign/GrowthStat/GrowthStats";
import Project from "../components/NewDesign/Project/Project";
import BatchDetails from "../components/NewDesign/BatchDetails/BatchDetails";
import Counselling from "../components/NewDesign/Counselling/Counselling";
import {
  FaqDataBFSI,
  PaymentFaqDataBFSI,
  CapstoneFaqDataBFSI,
  CertificationFaqDataBFSI,
  jobFaqDataBFSI,
  MentorshipFaqDataBFSI,
  SupportFaqDataBFSI,
} from "../components/NewDesign/FAQNew/FaqData";
import Switch from "../components/NewDesign/switch/switch";

function blockchain() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Head>
        <title>Data Analytics in Finance and Banking (BFSI) Course - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="This Financial Analyst Course for BFSI Professionals will help you advance your career in finance analytics. Acquire BFSI-specific knowledge. Enroll Now"
        />
        <meta name="keywords" content="Banking & Finance Analytics Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-for-bfsi-professional"
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
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Banking & Finance Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+for+BFSI+Professionals.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BFSI-header-image.webp"
          // firstToparaImg="for BFSI Professionals"
          firstHeading="Data Science Program For Banking and Finance"
          // firstTopPara="Ready to master the finance domain?"
          idss="4j80WXLTvGE"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+for+BFSI+Professionals.pdf"
        />
        <SecondSection
          fullStackReview={true}
          SecondHead="Why Choose Us?"
          SecondPara="India's top rated  bootcamp for working professionals "
          heading1="1:1 Doubt Session"
          heading2="Guaranteed Interview Calls"
          heading3="IBM Project Certificate"
          heading4="Designed For Professionals"
          SecondPara1="Talk to an expert & receive real-time solutions to your queries"
          SecondPara2="Boost your job prospects with referrals from 300+ hiring partners"
          SecondPara3="Master the domain of finance analytics with certificate from IBM"
          SecondPara4="Boost your growth & earnings with in-demand analytics skills"
        />
        <ProgramCustomer
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BFSI+_+Who+is+this+program+for+_+image.webp"
          para1="Bachelor's degree with consistent good academics"
          para2="Minimum 1 year of IT/Non-IT work experience"
          para3="Early to mid-career professionals interested in finance analytics"
          para4="Utilise data-driven insights for business growth"
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
          BatchPara="The banking & finance analytics program is designed for professionals across various sectors and designations who want to acquire necessary skills and knowledge to analyze financial data and make informed business decisions."
          point1="Get 1 year of job & placement support"
          point2="Get 3 mock interviews with industry leaders"
          point3="Resume build up session"
          point4="Get 5-8 interview calls"
          BatchParaImg1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FINANCE+Left.png"
          BatchParaImg2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FINANCE+Right.png"
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
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
          careerH1="Career Service"
          careerSpan=" Basic"
          serviceBasic={true}
          dataScience={true}
          titleCourse="Banking & Finance Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+for+BFSI+Professionals.pdf"
          syllabus={DSBankingFinanceData[0].syllabus}
          syllabusDesc={DSBankingFinanceData[0].syllabusDesc}
          popupHead={DSBankingFinanceData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+for+BFSI+Professionals.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BFSI+Scope.webp"
          heading="How is analytics changing finance?"
          para1="Higher Growth: Annual growth rate of 10.4% in 2023 "
          para2="Big Earning Potential: Earn an average salary of INR 10 LPA"
          para3="Enormous demand for individuals in the banking and finance sector"
        />
        <FifthSection
          dataScienceCounselling={true}
          IBMMicrosoft={true}
          Fee="₹ 89,000 + 18% GST"
          FeeEmi="₹ 8,752/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          para="We are dedicated to making best course for Data Structures and Algorithms accessible. We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
          titleCourse="Banking & Finance Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+for+BFSI+Professionals.pdf"
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
          project="12+ Projects"
          tools="16+"
          BFSI={true}
          dataScience={true}
          titleCourse="BFSI Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Projects.pdf"
        />
        <BatchDetails CourseFeeHead="Banking and Finance: Batch Details" />
        <FAQNew
          FaqDatas={FaqDataBFSI}
          PaymentFaqDatas={PaymentFaqDataBFSI}
          CapstoneFaqDatas={CapstoneFaqDataBFSI}
          CertificationFaqDatas={CertificationFaqDataBFSI}
          jobFaqDatas={jobFaqDataBFSI}
          MentorshipFaqDatas={MentorshipFaqDataBFSI}
          SupportFaqDatas={SupportFaqDataBFSI}
        />
        <SeventhSection />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
