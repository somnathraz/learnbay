import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AdvanceFaqDataC,
  AdvanceDomainFaqDataC,
  AdvancePaymentFaqDataC,
  AdvanceCapstoneFaqDataC,
  AdvanceCertificationFaqDataC,
  AdvancejobFaqDataC,
  AdvanceMentorshipFaqDataC,
  AdvanceSupportFaqDataC,
} from "../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Data Science Course in Chennai | Data Science Training in Chennai
        </title>
        <meta
          name="description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
        />
        <meta
          name="Keywords"
          content="data science course in Chennai, data science training in Chennai, data science institute in Chennai, best data science institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, data science training institute in Chennai, advanced data science course in Chennai, data science course with placement guarantee, data science course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-course-training-in-Chennai"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
        />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="Daily" />
        <meta name="author" content="Learnbay" />
        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="Worldwide" />
        <meta name="robots" content="ALL" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara="Foundational and Advanced Data Science Courses with job Guarantee"
          mTopPara="Foundational and Advanced Data Science Courses with job Guarantee"
          title="Data Science Course Training in Chennai"
          mTitle="Data Science Course Training in Chennai"
          spanTitleText="with Domain Specialization"
          spanMTitleText="Domain Specialization"
          desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course2.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Global Recognition"
            p11="From IBM"
            p2="Industry Standard"
            p22="Training"
            p3="Career Assistance"
            p33="For Professionals"
            p4="Financing as low as"
            p44="₹ 7,768/month"
          />
        </div>
        <GetHired
          WeekdayBatchDate="4 micro-skills certificates from IBM"
          WeekendBatchDate="8+ Domain-electives associated with full-stack modules"
          Project="Project experience certification by IBM"
          Classes="Completely live and interactive learning"
          OneLine="12 live industry projects & 2 fresh capstone projects"
          Interview="Interview guarantee backed up by 250+ hiring partners"
          Fee="79,000"
          Subscription="3 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream DS role. Learn innovative AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and DS skills as per demanding industry standards. Choose from 8+ electives."
            Box3h5="Premium Mentoring"
            box3desc="Learn how to crack interviews by attending CV writing workshops & mock interviews with MAANG expertise."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramHead1="What is a Data science training program in Chennai?"
              ProgramBot1="The data science course in Chennai offered by Learnbay is an exclusive data scientist training Bootcamp for anyone interested in becoming an industry competent data scientist. This IBM data science course is meticulously designed by industrial experts. Our industry-leading instructors have years of experience and will ensure that you get all of the key materials required to become a successful data scientist. You gain access to their experience and skills through both offline and online data science courses."
              ProgramBot2="This data science curriculum assists students in developing in-demand data science skills like programming, mathematics, data visualization, statistics, and other key subjects."
              ProgramBot3="Without a doubt, it is the premier destination for working professionals in Chennai seeking the best data science and artificial intelligence training."
              ProgramHead4="What will you get out of this data science course in Chennai?"
              ProgramBot4="Learnbay focuses on providing both practical and theoretical learning modules for a better experience for its students. Comparatively, this artificial intelligence and data science course seem to be pocket-friendly with an assured job guarantee."
              ProgramBot5="Here, you will receive one-on-one discussion sessions with mentors and a three-year Flexi pass that allow you to attend any live classes at your convenience. You can also access Learnbay LMS via your mobile device for convenient learning. The class timings in our data science course are flexible, and you can attend multiple sessions with different instructors."
              ProgramBot6="Another reason is that you can choose from various data science courses depending on your current professional level. Each of these courses is composed of modules that are tailored to your prior work experience."
              ProgramHead7="Available Data Science and AI Certification Courses by Learnbay in Chennai:"
              Courselink1="/data-science-certification-courses"
              Courselink2="/advance-data-science-certification-courses"
              Courselink3="/artificial-intelligence-certification-course"
              Courselink4="/data-science-ai-for-managers"
              Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
              Course1="Foundational Data Science and AI Program"
              Course2="Advanced-Data Science and AI Program with Domain Specialization"
              Course3="Artificial Intelligence & Machine Learning Program with Domain Specialization"
              Course4="Data Science and AI Program for Managers and Leaders"
              Course5="AI and Data Science Course with Job Guarantee or Money back"
              DomainHead1="Why Domain Specialization?"
              DomainBot1="Our domain-specific courses are designed to help students approach data science from a particular angle or industry."
              DomainBot2="A domain-specific data scientist will have a far deeper understanding of the domain and its nuances, as well as the critical business problems that must be handled. Today, recruiters are on the lookout for domain-specific data scientists. Without domain knowledge, one can’t provide the exact analytical insights. Hence, it’s important to choose courses that offer domain electives options."
              DomainBot3="Learnbay offers full-stack domain-specialized Data Science Training. Based on your experience, you can select the following domains:"
              DomainList1="HR, Sales, and Marketing"
              DomainList2="Energy, oil, and Gas"
              DomainList3="Mechanical, manufacturing, and telecom"
              DomainList4="Pharmaceutical and clinical research"
              DomainList5="Media, hospitality, and transportation"
              DomainList6="Testing and Development Domain"
              DomainList7="DeOps and Cloud"
              DomainList8="IoT, automotive, and embedded systems"
              DomainList9="Supply chain and e-commerce"
              DomainList10="Banking, Finance, and Marketing Domain"
              Domainlink1="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
              Domainlink2="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf"
              Domainlink3="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
              Domainlink4="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
              Domainlink5="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf"
              Domainlink6="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Development+and+Testing+Domain.pdf"
              Domainlink7="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Cloud+and+Devops+Domain.pdf"
              Domainlink8="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Automotive%2C+IOT+and+Embedded+Domain.pdf"
              Domainlink9="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
              Domainlink10="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
              CertificationHead1="IBM Data Science Certification in Chennai"
              CertificationBot1="Using the Learnbay IBM data scientist course, you get hassle-free classes from multiple expert trainers. Additionally, you will get multiple IBM certifications for various data science and artificial intelligence micro-skills. Apart from this, you will receive an IBM Project Experience Certificate upon completion of the capstone project included in the Data Science and AI course in Chennai. You will obtain 1 to 8 certificates depending on the course you choose."
              CertificationBot2="To learn more about micro-skill certificates, please refer to the respective course brochures."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate.webp"
              ModuleHead1="Learn the most in-demand skills used by data scientists in Chennai"
              ModuleBot1="The modules of data science training are comprehensively designed by expert data scientists. In the data science certification course, you’ll learn different data science tools and techniques to understand business problems. Chennai learners can maximize their potential as data scientists by enrolling in this IBM data science course. Our courses are designed to be easy to follow and understand while giving you the best possible foundation in data science. We use real-life examples to show how your data science skills will be applied in the future."
              ModuleBot2="In addition to Python and R programming, our data science course will help you master job-ready data science skills like Statistics, MongoDB, TensorFlow, Deep Learning, Deployment GCP, Time Series, and other data science tools."
              syllabush1="Preparatory Classes (Programming + Maths)"
              syllabusb1="6 Hours"
              SyllabusBotlist11="Anaconda Installation"
              SyllabusBotlist12="Basics of Programming"
              SyllabusBotlist13="Memory Management"
              SyllabusBotlist14="Compiler and Interpreter"
              SyllabusBotlist15="Syntax of Python"
              SyllabusBotlist16="Basics of Statistics"
              syllabush2="Python Programming (Basic + Advance)"
              syllabusb2="40 Hours"
              SyllabusBotlist21="Git and GitHub"
              SyllabusBotlist22="Operators + Data Types + Loops"
              SyllabusBotlist23="Functions + Regular Expression"
              SyllabusBotlist24="Conditional Statement"
              SyllabusBotlist25="File & Exceptional Handling"
              SyllabusBotlist26="Numpy, Pandas, Matplotlib, etc."
              syllabush3="Statistics and Machine Learning"
              syllabusb3="70 Hours"
              SyllabusBotlist31="Linear Algebra, Probability"
              SyllabusBotlist32="Permutation & Combination"
              SyllabusBotlist33="Descriptive & Inferential Stats"
              SyllabusBotlist34="Hypothesis Testing"
              SyllabusBotlist35="Time Series Analysis"
              SyllabusBotlist36="ML Algorithms"
              syllabush4="Industrial Projects &
    Capstone Projects"
              syllabusb4="
    12+ Classes"
              SyllabusBotlist41="Text Classification"
              SyllabusBotlist42="Human Activity Recognition"
              SyllabusBotlist43="Forecasting Business KPI's"
              SyllabusBotlist44="Credit Risk Analysis"
              SyllabusBotlist45="Customer Churn Prediction"
              SyllabusBotlist46="Sentiment Analysis"
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
              JobHead1="Interview preparation in Learnbay’s IBM data science courses, Chennai"
              JobBot1=" Learnbay’s data science curriculum includes a job assistance program for its students."
              JobBot2="By the end of the IBM data science course, students will be provided with CV preparation and soft skills training sessions. Various company-specific mock interviews instill confidence in our students prior to the interviews. In addition, our officials ensure that your portfolio is up to industry standard and appealing to hiring Managers. Even you get an option of a data science course with a money-back guarantee in Chennai. If you remain unable to land a data science job role within six months (post-course completion), you can apply for the data science course fee refund."
              JobBot5="We have partnered with top leading organizations like IBM, EY, TCS, Accenture, and others. Over 1000 Learnbay alumni are successfully working in a variety of data science roles in Chennai city."
              JobHead2="Data science and its demand in Chennai "
              JobBot3="Data science is a fascinating field that combines data and science to discover beneficial information for mankind. Today, many corporations and businesses rely on data for their sustainability and profitability. Data science is a key driver of innovation and competitiveness in many industries, including retail, finance, and health care."
              JobBot4="However, there is a shortage of qualified talent that can meet the demand for data scientists in Chennai. This creates an opportunity for those who have the right skills to step up and fill this gap in the market."
              JobBot6="Our IBM-certified data science course is the perfect place to get started with a data science career in Chennai."
              ProjectsHead1="Live industrial data science projects at Learnbay "
              ProjectsBot1="Learnbay’s premium cloud lab feature allows learners to grasp data science projects and approaches. In our data science and AI course, you can choose from 15+ real-time projects in your selected domains. Additionally, this cloud lab lets you observe and practice different data mining, data wrangling procedure and live MNC data projects."
              ProjectsBot2="Plus, you will have the privilege of working on 2 to 3 data science capstone projects, followed by issuing an IBM Project experience certificate. Below are some of the live data science projects undertaken by our students:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay’s IBM data science course aims to provide quality data scientists across Chennai. Many of our students have achieved data scientist jobs and other data science roles along with a 200% salary hike. Even More than 300 Learnbay data science and AI course alumni are in lead and management positions in top leading firms. Some of our alumni have shared their experiences:"
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
            />
            <FAQNew
              FaqDatas={AdvanceFaqDataC}
              DomainFaqDatas={AdvanceDomainFaqDataC}
              PaymentFaqDatas={AdvancePaymentFaqDataC}
              CapstoneFaqDatas={AdvanceCapstoneFaqDataC}
              CertificationFaqDatas={AdvanceCertificationFaqDataC}
              jobFaqDatas={AdvancejobFaqDataC}
              MentorshipFaqDatas={AdvanceMentorshipFaqDataC}
              SupportFaqDatas={AdvanceSupportFaqDataC}
            />
          </div>
        </div>
        <LearnSupport />

        <CityText
          CityTextB="Data Science Course Certification Training locations in Chennai "
          CityText=" :  Anna Nagar [600040],Thousand Lights [600006], Adyar [600020],Nungambakkam [600034], Perambur [600011], OMR [600119], Guindy [600032], Thiruvanmiyur [600041],Perungudi [600096], Thoraipakkam [600097],Sholinganallur [600119], Siruseri [603103], Tambaram [600045], Velachery [600042], Meenambakkam [600027], Chrompet [600044], T nagar [600017],Chennai central [600020],Erukkancheri [600118],World University Centre [600031],Madras University [600005],Indian Institute Of Technology [600036]."
          CityTextLB="Locations Offered"
          CityTextL=" :  Data Science Training in Chennai, Data Science Course in Chennai, Data Science Training in Anna Nagar, Data Science Training in Guindy, Data Science Institute in Chennai, Data Science Training in Siruseri, Data Science Training in Perungudi, Data Science Training in OMR, Data Science Training Institute in Adyar, Data Science Course in Anna Nagar, Data Science Course in chrompet, Data Science Course in Velchery, Data Science Course Nungambakkam, Data Science Training in Thoraipakkam, Data Science Course in OMR, Data Science Training in Madras university, Data Science Training in Tambaram, Data Science Online Classes in Anna Nagar, Data Science Course in Indian Institute Of Technology , Data Science Training in Chennai, Data Science Certification in Chennai, Data Science Certification Training in Chennai, Data Science Certification in Anna Nagar, Data Science Certification in Adyar, Best Data Science Training, Best Data Science Course."
        />
      </main>
    </div>
  );
}
