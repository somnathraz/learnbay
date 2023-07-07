import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import Form from "../components/Form/Form";
import Popup from "../components/Popup/Popup";
import FirstSection from "../components/NewDesign/FirstSection/FirstSection";
import SecondSection from "../components/NewDesign/SecondSection/SecondSection";
import ThirdSection from "../components/NewDesign/ThirdSection/ThirdSection";
import FourthSection from "../components/NewDesign/FourthSection/FourthSection";
import FifthSection from "../components/NewDesign/FifthSection/FifthSection";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import { FresherFullStackSoftwareCourseData } from "../Data/FresherFullStackSoftware";
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
        <title>Software Development Program For Freshers - Learnbay</title>
        <meta
          name="description"
          content="Learnbay's Full Stack Software Development Course will help you become a skilled software developer. Gain practical experience and master key coding skills."
        />
        <meta
          name="keywords"
          content="Software Development Program For Freshers"
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
        <Navbar popup={true} dataScienceCounselling={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} fullStack={true} />
          </div>
        </Popup>
        <FirstSection
          softwareBtnHide={true}
          FirstTyped="IBM Certificate"
          SecondTyped="Mock Interviews"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Software Development Program For Freshers"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+Program+for+Freshers.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          ibmOnly={true}
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SD-fresher-header.webp"
          firstToparaImg="For Freshers"
          firstHeading="Software Development Program"
          firstTopPara="Join the next generation of developers"
          idss="bfl64ANfSV0"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+Program+for+Freshers.pdf"
        />
        <SecondSection
          SecondHead="Why Choose Us?"
          SecondPara="Kickstart your success with India's top bootcamp program"
          heading1="On-Demand Doubt Session"
          heading2="IBM Certificate"
          heading3="Case Studies"
          heading4="Interactive Live Classes"
          SecondPara1="Expert-led Q&A sessions for immediate doubt resolution"
          SecondPara2="Boost skills with IBM course completion certificate"
          SecondPara3="Gain intensive practical experience through Case Studies"
          SecondPara4="Expert-led live classes with hands-on experience"
        />
        <ProgramCustomer
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          img4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logos/1.png"
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/who-is-fresher.webp"
          para1="Students pursuing or completed their bachelor's degree"
          para2="Any fresher from tech or non-tech domain"
          para3="Computer Science, B.Tech, B.Sc. pursuing students"
          para4="Designed for individuals seeking software development skills"
          heading1="Education"
          heading2="Domain"
          heading3="Career stage"
          heading4="Aspirations"
        />
        <Switch />
        <ThirdSection
          secondLine="Invest in yourself!"
          thirdHeadSpan=" Alumni Community"
          thirdHead="Stay Ahead Of The Curve With Support Of Our"
          point1="3+ years of career service access"
          point2="6 mock interviews with industry leaders"
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
          serviceBasic={true}
          careerH1="Career Service"
          careerSpan=" Basic"
          dataScience={true}
          titleCourse="Software Development Program For Freshers"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+Program+for+Freshers.pdf"
          syllabus={FresherFullStackSoftwareCourseData[0].syllabus}
          syllabusDesc={FresherFullStackSoftwareCourseData[0].syllabusDesc}
          popupHead={FresherFullStackSoftwareCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+Program+for+Freshers.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SW+Dev+Masters+Scope+Image-min.png"
          heading="Embrace the future of technology & unlock endless career opportunities"
          para1="Higher Growth: Compound annual growth rate of CAGR of 11.9% in 2023"
          para2="Maximize Cloud Opportunities: Unleash your potential & earn 8 LPA"
          para3="Strong Demand: Growing need for tech wizards across various industries"
        />

        <FifthSection
          softTools={true}
          BlockchainCertificate={true}
          Fee="₹ 60,000 + 18% GST"
          FeeEmi="₹ 5,900/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          para="We are dedicated to making best course for Data Structures and Algorithms accessible. We are committed to helping you find a way to budget for this Course and offer a variety of financing options to make it more economical."
          dataScience={true}
          titleCourse="Software Development Program For Freshers"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+Program+for+Freshers.pdf"
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
          project="8+ Case Studies"
          tools="16+"
          Freshers={true}
          dataScience={true}
          titleCourse="Full Stack Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
        />
        <BatchDetails
          FullStack={true}
          CourseFeeHead="Data Science and AI Foundation Program : Batch Details"
        />
        <SeventhSection fullStackCont={true} />
        <OfferPopup offer={true} />
        <BottomBar />
        <Footer />
      </main>
    </>
  );
}

export default blockchain;
