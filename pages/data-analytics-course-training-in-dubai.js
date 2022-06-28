import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import { AnalyticsFaqDataDu, AnalyticsDomainFaqDataDu, AnalyticsPaymentFaqDataDu, AnalyticsCapstoneFaqDataDu, AnalyticsCertificationFaqDataDu, AnalyticsjobFaqDataDu, AnalyticsMentorshipFaqDataDu, AnalyticsSupportFaqDataDu } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Analytics Course in Dubai | Data Analytics Training in Dubai</title>
<meta name="description" content="Data Analytics Course in Dubai. Learnbay is Advanced Data Analytics Course Training Institute in Dubai. Data Analytics course in Dubai will enhance your career" />
<meta name="Keywords" content="Data Analytics course in Dubai, Data Analytics training in Dubai, Data Analytics institute in Dubai, best Data Analytics institute in Dubai, Data Analytics course in Dubai, Data Analytics certification in Dubai, Data Analytics training institute in Dubai, advanced Data Analytics course in Dubai, Data Analytics course with placement guarantee, Data Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/data-analytics-course-training-in-dubai" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Analytics Courses Certification Training Dubai" />
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
        deskTopPara="Industry-ready Data analytics program"
        mTopPara="Industry-ready Data analytics program"
        title="Data Analytics Course Training in Dubai"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/course6.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/6th+DA.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Professional Beginners"
        p2="14LPA - 22LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 11.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Best in class industrial training with live projects"
        WeekendBatchDate="250+ employer allowance & 100% interview guarantee"
        Project="Career Guidance from industrial experts"
        Classes="Basic coding classes for non-technical pros"
        OneLine="Live & interactive Training by industry experts"
        Interview="Course completion certificate from IBM"
        Fee="60,000"
        Subscription="1.5 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with MAANG Data Analytical whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
          ProgramHead1="Industry-ready Data analytics program"
            ProgramBot1="Learnbay offers a full-stack Data analytics course in Dubai, co-developed by IBM. The data analytics courses are prepared by professional faculties that have immense knowledge and experience in the real-world data analytics field. Our Data Analytics course is aimed at anyone wanting to learn about data analytics, with an emphasis on practical skills and job-ready techniques. In other words, It is the perfect choice for anyone interested in working as a data analyst, marketing analyst, financial analyst, analytical consultant, or any other analytical role. Simply, we can say this is a course that helps aspirants boost their knowledge of how data can be used in today's business market."
            ProgramBot2="The IBM data analytics course curriculum optimizes students with the requisite set of skills to ace interviews and builds a strong platform for their job prospects in Dubai."
            ProgramHead3="How can Learnbay be the right start for your data analytics career in Dubai?"
            ProgramBot3="Learnbay offers weekend and weekday batches to accommodate working professionals' busy schedules. You can also choose your own learning schedule. With a 1-year flexi pass, students can attend any batch of any instructor via Learnbay LMS. Learnbay also conducts additional coding classes for non-techies to keep them on track with other techies."
            ProgramBot31="The IBM data analytics course includes 180+ hours of live lectures, exercises, hands-on labs, real-world examples, case studies, and discussion sessions, giving you an idea of how data analytics works in practice. In addition, Learnbay also hosts monthly hackathons and webinars to ensure engaged learning."
            ProgramBot32="In a nutshell,  Learnbay is the ideal place for you to head-start your career in data analytics training in Dubai."

            CertificationHead1="IBM Data Analytics Certification by Learnbay"
            CertificationBot1="At the end of the data analytics course, students will be issued a course completion certificate directly by IBM. And of course, they must complete all of the modules along with practical assignments, assessments, and projects to be awarded this IBM certificate. Following this, they will be furnished with a job assistance program. We have also partnered with global IT companies in Dubai to promote our data analytics students' skills."
            src="/BA-DA.jpeg"

            ModuleBot1="The modules of the data analytics course in Dubai consist of 180+ hours of live classes led by experts. Our instructors cover all the steps, from understanding the problem statement to the final solution. The course covers a variety of data analytics tools, including PowerBI, advanced Excel, MongoDB, Tableau, and Spark analytics."
            ModuleBot2="In this training, you'll also learn the core concepts of predictive analytics and see how modern Hadoop-based technologies and tools can give you a head-start in Data Analytics."
            ModuleBot3="Additionally, Learnbay also offers specialized Python programming classes for non-coders to enhance their programming skills."

    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
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
    syllabush3="Statistics"
    syllabusb3="50 Hours"
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
    SyllabusBotlist41="Visualize Daily Wikipedia Trends"
    SyllabusBotlist42="Color Detection Project"
    SyllabusBotlist43="
    Real-time Auto Tracking"
    SyllabusBotlist44="Web Scrapping"
    SyllabusBotlist45="Fake News Detection"
    SyllabusBotlist46="Movie Recommendation"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/6th+DA.pdf"


    JobBot1="Learnbay Data analytics course will train you such that you learn the job-ready skills in Dubai. Learners who successfully complete our IBM data analytics course will get access to our job placement service. Our career experts conduct mock interviews with various firms. They also guide them with portfolio and project management along with interpersonal skills training. After completion of data analytics certification, around 700+ students have got placed in high-paying positions in Dubai firms."
    JobHead2="What is data analytics in Dubai?"
    JobBot3="Data Analytics is the process of obtaining useful information from data. It helps in achieving efficiency and providing insights into a business operation."
    JobBot4="As a data analyst, you will be supporting the business in its decision-making process by analyzing large volumes of customers and other data. You will be responsible for identifying patterns and trends within your data set, interpreting that information to identify opportunities, and delivering strong solutions accordingly."
    JobHead3="Will data analytics be a secured career in Dubai?"
    JobBot7="Data analytics is one of the fastest-growing career fields in Dubai. Given the current market scenario, there is always an increasing demand for Data Analysts in the workplace, and it may be an ideal career choice for people with a strong foundation in mathematics, statistics, or business backgrounds. In Dubai, a typical data analyst earns around 10,000 AED per month, which is decent pay in an expensive city."
    JobBot8="Overall, Data analytics is a great profession to be in, offering opportunities with high compensation and expert status with the right experience. Our data analytics course with placement will help you get started on this journey to becoming a professional data analyst in Dubai."

    ProjectsBot1="As part of our IBM data analytics certification, students will be given hands-on practical training under the guidance of mentors. Here, they will be required to work on 5 popular data analytics projects. Learnbay's cloud lab option provides learners with access to ongoing MNC projects, allowing them to stay up to date on the newest data analytics trends. Some of the projects of previous Learnbay students:"
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/amazon.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay data analytics course includes both theory and hands-on techniques, which makes our students eligible for real-world data analytics jobs in Dubai. We have trained almost 1000+ students so far from all over the world. They currently are working in supervisory and managerial positions in large tech companies like SAP, Adobe, Salesforce, and other Dubai companies. Learnbay Students Reviews:"
    Asrc1="/devraj.jpg" 
    AlumniH1="Deveraj" 
    Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
    Asrc2="/shezan.png" 
    AlumniH2="Shezan Baig" 
    Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
    Asrc3="/viraj.png" 
    AlumniH3="Viraj Ghodke" 
    Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
    Asrc4="/shubhangi.png" 
    AlumniH4="Shubhangi J. Waghmare " 
    Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."

          />
            <FAQNew FaqDatas={AnalyticsFaqDataDu} DomainFaqDatas={AnalyticsDomainFaqDataDu} PaymentFaqDatas={AnalyticsPaymentFaqDataDu} CapstoneFaqDatas={AnalyticsCapstoneFaqDataDu} CertificationFaqDatas={AnalyticsCertificationFaqDataDu} jobFaqDatas={AnalyticsjobFaqDataDu} MentorshipFaqDatas={AnalyticsMentorshipFaqDataDu} SupportFaqDatas={AnalyticsSupportFaqDataDu} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Dubai "
      CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Dubai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Analytics Course viman nagar,Data Analytics Training in kalyan nagar,Data Analytics Training in magarpetta,Data Analytics Training in pimpri chinchwad,Data Analytics Classes in yerwada,Data Analytics Classes in kharadi,Data Analytics Classes in vishrantwadi,Data Analytics Classes in deccan,Data Analytics Course in Katraj,Data Analytics Training in warje,,Data Analytics Certification Training in bavdhan,Data Analytics Certification in boat club road,Data Analytics Certification in model colony,Best Data Analytics Training in Dubai,Best Data Analytics Course in Dubai"
      />
      </main> 
    </div>
  )
}