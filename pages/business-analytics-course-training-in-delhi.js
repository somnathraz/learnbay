import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../Components/CoursePage/GetHired/GetHired";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../Components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../Components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../Components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import { BusinessAFaqDataD, BusinessAPaymentFaqDataD, BusinessACapstoneFaqDataD, BusinessACertificationFaqDataD, BusinessAjobFaqDataD, BusinessAMentorshipFaqDataD, BusinessASupportFaqDataD } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Business Analytics Course in Delhi | Business Analytics Training in Delhi</title>
<meta name="description" content="Business Analytics Course in Delhi. Learnbay is Advanced Business Analytics Course Training Institute in Delhi. Business Analytics course in Delhi will enhance your career" />
<meta name="Keywords" content="Business Analytics course in Delhi, Business Analytics training in Delhi, Business Analytics institute in Delhi, best Business Analytics institute in Delhi, Business Analytics course in Delhi, Business Analytics certification in Delhi, Business Analytics training institute in Delhi, advanced Business Analytics course in Delhi, Business Analytics course with placement guarantee, Business Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/business-analytics-course-training-in-delhi" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Business Analytics Courses Certification Training India" />
<meta name="language" content="English" />
<meta name="rating" content="general" />
<meta name="revisit-after" content="Daily" />
<meta name="author" content="Learnbay" />
<meta name="googlebot" content="index,follow" />
<meta name="bingbot" content="index,follow" />
<meta name="expires" content="never" />
<meta name="coverage" content="Worldwide" />
<meta name="robots" content="ALL" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Industry-oriented business analytics program co-developed by IBM"
        mTopPara="Industry-oriented business analytics program co-developed by IBM"
        title="Business Analytics Course Training In Delhi"
        desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
        src="/course7.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early professionals"
        p2="12LPA - 20LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Industry-curated Training via real-world analytics"
        WeekendBatchDate="Elementary programming classes for non-technical pros"
        Project="Especially devices for early pros or aspirants with career gap"
        Classes="Learn the most trending analytical trick from MNC experts"
        OneLine="Industrial Business analytics certifications for IBM"
        Interview="5 live industry projects and 100% interview call assurance"
        Fee="65,000"
        Subscription="1.5 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Business Analytics Experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramHead1="Learnbay is a prominent institute providing the best business analytics courses in Delhi."
            ProgramBot1="It offers comprehensive, practical, and real-world business-oriented training. This  IBM business analytics course is designed to impart the necessary knowledge and skills required to analyze data successfully and extract meaningful insights. Our professional business analytics courses are designed to suit the needs of both students and working professionals who wish to upgrade their skills or just want to add this expertise to their existing skillset. Training sessions are delivered by highly qualified industry experts, and it includes both theories as well as hands-on experience."
            ProgramBot2="This is a 5-months training course that provides students with a framework, strategies, and techniques for using business analytics as a key part of their solution to everyday business problems."
            ProgramHead3="Why is Learnbay a one-stop place for your business analytics (BA) career in Delhi?"
            ProgramBot3="Learnbay is committed to providing high-quality training to BA and BI aspirants in Delhi. The curriculum of the IBM business analytics course has been designed in such a way that after the course, you will be able to find jobs without any difficulty in organizations ranging from small startups to multinational corporations. The class schedules are flexible to fit the needs of working professionals, and it's even easy to switch between batches and instructors. The professional Business Analytics course is beginner-friendly, covering business analytics topics starting with basic concepts and progressing through more in-depth techniques. Additional sessions are arranged for discussion purposes with experts and batchmates. They also conduct programming classes for non-IT students. With an exclusive feature of Flexi Pass, students will also get access to Learnbay LMS for a period of 1 year, during which they can take a break and resume their studies at their own convenience. Learnbay also hosts a variety of webinars and hackathons to support all levels of learners."
            ProgramHead4="Know more about Learnbay’s Business Analytics Course in Delhi."

            CertificationHead1="Certification process at Learnbay"
            CertificationBot2="After the completion of the Business analytics course with placement, students will be awarded an IBM Certification. To be eligible for this certification, students must successfully complete all business analytics course modules, assessments, assignments, real-time projects as well as the final IBM Exams. Possessing this certificate will undoubtedly boost your portfolio and make you stand out in the business analytics job market."
            src="/BA-DA.jpeg"

            ModuleBot1="The business analytics course in Delhi comprises 200+ hours of live classes taught by FAANG experts. The course modules are designed in such a way that they not only make you aware of various analytical techniques but also help you understand their application scenarios and how they can be effectively woven into daily work practices."
            ModuleBot2="The IBM business analytics course is an introduction to the principles, techniques, and tools of business analytics such as SQL, Advanced Excel, PowerBI, etc. It also covers the concepts of data description and data visualization, as well as statistical inference techniques."
            ModuleHead2="Special programming classes:"
            ModuleBot3="Learnbay offers an exclusive series of programming classes in Python and R to support learners coming from non-technical backgrounds. Hence, non-programmers don't need to think twice before enrolling in Learnbay’s business analytics course."

    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
    syllabusb1="6 Hours"
    SyllabusBotlist11="Anaconda Installation"
    SyllabusBotlist12="Basics of programming"
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
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etcs"
    syllabush3="Statistics"
    syllabusb3="30 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive"
    SyllabusBotlist34="Hypothesis Testing"
    SyllabusBotlist35="Time Series Analysis"
    SyllabusBotlist36="Inferential Stats"
    syllabush4="Industrial Projects &
    Capstone Projects"
    syllabusb4="
    6+ Classes"
    SyllabusBotlist41="Market Basket Analysis"
    SyllabusBotlist42="Analyzing Customer Feedback"
    SyllabusBotlist43="Loan Eligibility Prediction"
    SyllabusBotlist44="Customer Churn Prediction"
    SyllabusBotlist45="Inventory Demand Forecasting"
    SyllabusBotlist46="Retain Analytics"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/7th+BA.pdf"


    JobHead1="Interview preparation sessions:"
    JobBot1="Learnbay mentors constantly support students and ensure that they get placed in highly lucrative positions. Once students finish their modules, our coaches start training them with soft skills, resume preparation, project management, and presentation abilities. They also conduct various mock interviews with hiring managers so that students learn from their mistakes and enhance their overall interview skills."
    JobBot5="With our business analytics course training, students will easily get interviews with MNCs and top-tier companies across Delhi."
    JobHead2="The role of a Business Analyst in Delhi"
    JobBot3="Analytics is about the understanding, interpretation, and communication of data. A business analyst focuses on the applications of analytics to derive valuable insights from data. It is the primary responsibility of a business analyst to interpret business requirements in written form as well as visual formats such as charts and diagrams - to enable everyone in the organization/project to have clear visibility of progress and future goals."
    JobHead3="Career opportunities:"
    JobBot4="After the completion of our Business analytics course in Delhi, students and professionals will be qualified to apply for positions like Business analytics consultant, Senior Business Analyst, and Database administrator, among others."
    

    ProjectsBot1="Projects play an important role in showcasing your acquired skills, particularly professions involving business analytics and business intelligence. As a part of our IBM business analytics course, you will get the opportunity to work on 5 industry-oriented business analytics projects with the help of project supervisors."
    ProjectsBot2="Additionally, Learnbay offers a premium cloud lab feature that enables learners to access and collaborate on ongoing business analytics projects at different startups and multinational companies. Learnbay students have previously worked on various projects:"
    src1="/AMAZON.png"
    ProjectsH1="Amazon Customer Review Analysis"
    Projectsp1="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/BMW.png"
    ProjectsH3="BMW Used Car Price Optimization"
    Projectsp3="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
    src4="/SAMSUNG.png"
    ProjectsH4="Samsung Health Monitor App"
    Projectsp4="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."

    AlumniBot1="Learnbay’s  IBM business analytics training course has helped several professionals and job seekers develop the skills necessary to succeed as Business analysts in Delhi. It has aided more than 700 business analytics aspirants across Delhi in achieving their desired jobs with minimal possible timelines. Some of the feedback from our successful alumni:"
    Asrc1="/devraj.jpg" 
    AlumniH1="Deveraj" 
    Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
    Asrc2="/Shezan.png" 
    AlumniH2="Shezan Baig" 
    Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
    Asrc3="/viraj.png" 
    AlumniH3="Viraj Ghodke" 
    Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
    Asrc4="/Shubhangi.png" 
    AlumniH4="Shubhangi J. Waghmare " 
    Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."

          />
            <FAQNew FaqDatas={BusinessAFaqDataD} PaymentFaqDatas={BusinessAPaymentFaqDataD} CapstoneFaqDatas={BusinessACapstoneFaqDataD} CertificationFaqDatas={BusinessACertificationFaqDataD} jobFaqDatas={BusinessAjobFaqDataD} MentorshipFaqDatas={BusinessAMentorshipFaqDataD} SupportFaqDatas={BusinessASupportFaqDataD} />
        </div>
      </div>
      <CityText
      CityTextB="Business Analytics Course Certification Training locations in Delhi "
      CityText=" : Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
      CityTextLB="Locations Offered"
      CityTextL=" :Business Analytics Training in delhi, Business Analytics Course in delhi, Business Analytics Training in Connaught Place, Business Analytics Training in Karol Bagh , Business Analytics Institute in Delhi, Business Analytics Training in kamla nagar, Business Analytics Training in kalu sarai, Business Analytics Training in J N U, Business Analytics Training Institute in Connaught Place, Business Analytics Course in Connaught Place, Business Analytics Course in Saket, Business Analytics Course in old rajinder nagar, Business Analytics Course Connaught Place , Business Analytics Training in (N.S.P) Netaji Subhash Place, Business Analytics Training in Pitampura, Business Analytics Classes in Connaught Place, Business Analytics Classes in J N U, Business Analytics Classes in Connaught Place, Business Analytics Classes in Delhi, Business Analytics Course in vishwa vidyalaya, Business Analytics Training in kalu sarai, Business Analytics Certification in Delhi, Business Analytics Certification Training in Delhi, Business Analytics Certification in Connaught Place, Business Analytics Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Business Analytics Training, Best Business Analytics Course, Best Data Scientist course, Best Data Scientist Training"
      />
      </main> 
    </div>
  )
}