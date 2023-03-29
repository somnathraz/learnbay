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
import { DataScienceCourseData } from "../Data/DataScienceCourse";
import FAQNew from "../Components/NewDesign/FAQNew/FAQNewcer";
import {
  FaqData2,
  DomainFaqData2,
  PaymentFaqData2,
  CapstoneFaqData2,
  jobFaqData2,
  MentorshipFaqData2,
  SupportFaqData2,
} from "../Components/NewDesign/FAQNew/FaqData";


function blockchain() {
    const [popups, setPopups] = useState(false);

    const popupShow = () => {
      setPopups(true);
    };
  return (
    <>
    <Head>
    <title>Software Development Program with Specialization in Blockchain</title>
        <meta
          name="description"
          content="Software Development Program with Specialization in Blockchain"
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
          href="https://www.learnbay.co/specialization-in-blockchain"
        />
    </Head>
    <main>
    <Navbar popup={true} />
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
<FirstSection />
<SecondSection />
<ThirdSection />
<FourthSection 
dataScience={true}
syllabus={DataScienceCourseData[0].syllabus}
syllabusDesc={DataScienceCourseData[0].syllabusDesc}
popupHead={DataScienceCourseData[0].popupHead}
srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
hours="250+ Hours"
project="12+ Real Time"
/>
<FifthSection 
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
<SixthSection />
<FAQNew
          FaqDatas={FaqData2}
          DomainFaqDatas={DomainFaqData2}
          PaymentFaqDatas={PaymentFaqData2}
          CapstoneFaqDatas={CapstoneFaqData2}
          jobFaqDatas={jobFaqData2}
          MentorshipFaqDatas={MentorshipFaqData2}
          SupportFaqDatas={SupportFaqData2}
        />
<SeventhSection />

        <Footer />
    </main>
    </>
  )
}

export default blockchain