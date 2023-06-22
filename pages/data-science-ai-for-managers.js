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
import DomainSection from "../components/NewDesign/DomainSection/DomainSection";
import { DsaiManagersCourseData } from "../Data/DataScienceManagers";
import FAQNew from "../components/NewDesign/FAQNew/FAQNew";
import Project from "../components/NewDesign/Project/Project";
import BatchDetails from "../components/NewDesign/BatchDetails/BatchDetails";
import Counselling from "../components/NewDesign/Counselling/Counselling";
import {
  FaqData4,
  DomainFaqData4,
  PaymentFaqData4,
  CapstoneFaqData4,
  CertificationFaqData4,
  jobFaqData4,
  MentorshipFaqData4,
  SupportFaqData4,
} from "../components/NewDesign/FAQNew/FaqData";
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
        Data Science and AI Program For Managers and Leaders - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in the most comprehensive Data Science for Managers and AI for Leaders course to propel your career forward."
        />
        <meta
          name="keywords"
          content="Data Science and Artificial Intelligence Program For Managers and
          Leaders"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-ai-for-managers"
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
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          idss="osYNvuuI1_8"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Business-Analytics-Masters-Header.png"
          // firstToparaImg=" For Manager & Leaders"

          firstToparaImg=" For Manager & Leaders"
          firstHeading="Be ready with Data Science and AI Program"
          // firstHeading="Data Science and AI Program For Managers and Leaders"
          firstTopPara="Empower your leadership journey"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        />
        <SecondSection
          fullStackReview={true}
          heading1="1:1 Doubt Session"
          heading2="Guaranteed Interview Calls"
          heading3="IBM Project Certificate"
          heading4="Designed For Professionals"
          SecondHead="Why Choose Us?"
          SecondPara="India's top rated bootcamp for working professionals"
          SecondPara1="Talk to an expert & receive real-time solutions to your queries"
          SecondPara2="Boost your job prospects with referrals from 300+ hiring partners"
          SecondPara3="Grab opportunities with a portfolio & make a smooth career transition"
          SecondPara4="Prioritize growth & salary increases with in-demand skills"
        />
        <ProgramCustomer
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+_Who+is+this+program+for_+image.webp"
          para1="Bachelor's degree with consistent good academics"
          para2="Minimum 6 year of IT/Non-IT work experience "
          para3="Mid-Senior professionals interested in Data Science & AI
          "
          para4="Data Science & AI expertise for future opportunities "
          heading1="Education"
          heading2="Work experience"
          heading3="Career stage"
          heading4="Aspirations"
        />
        <Switch />
        <ThirdSection
          point1="Get 1 year of job & placement support"
          point2="Get 3 mock interviews with industry leaders"
          point3="Resume build up session"
          point4="Get 5-8 interview calls"
          secondLine="Invest in yourself!"
          thirdHeadSpan=" Alumni Community"
          thirdHead="Stay Ahead Of The Curve With Support Of Our"
          BatchPara="Data Science and AI Program for Managers targets professionals with 8+ years of experience from specific industries and designations to equip them with skills for driving business value and getting promoted with high salaries."
          BatchParaImg1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/MANAGERS+Left.png"
          BatchParaImg2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/MANAGERS+Right.png"
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
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          syllabus={DsaiManagersCourseData[0].syllabus}
          syllabusDesc={DsaiManagersCourseData[0].syllabusDesc}
          popupHead={DsaiManagersCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Managers+Scope.webp"
          heading="Be the future pillar of technology"
          para1="The AI market to be worth $1,598 billion by 2030"
          para2="The estimated salary for Sr. job roles is Rs.19 Lakhs per year"
          para3="Influences on almost every industry in today's world"
        />
        <FifthSection
          dataScienceCounselling={true}
          advanceCertificate={true}
          Fee="₹ 1,10,000 + 18% GST"
          FeeEmi="₹ 10,817/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          para="We are dedicated to making best course for Data Structures and Algorithms accessible. We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
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
          dataScience={true}
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        />
        <Project
          project="13+ Projects"
          tools="16+"
          DsProject={true}
          dataScience={true}
          titleCourse="Data Science Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
        />
        <BatchDetails CourseFeeHead="Data science course for Mangers: Batch Details" />
        <FAQNew
          FaqDatas={FaqData4}
          DomainFaqDatas={DomainFaqData4}
          PaymentFaqDatas={PaymentFaqData4}
          CapstoneFaqDatas={CapstoneFaqData4}
          CertificationFaqDatas={CertificationFaqData4}
          jobFaqDatas={jobFaqData4}
          MentorshipFaqDatas={MentorshipFaqData4}
          SupportFaqDatas={SupportFaqData4}
        />
        <SeventhSection />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
