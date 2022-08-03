import Head from 'next/head'
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
import { AnalyticsFaqDataC, AnalyticsDomainFaqDataC, AnalyticsPaymentFaqDataC, AnalyticsCapstoneFaqDataC, AnalyticsCertificationFaqDataC, AnalyticsjobFaqDataC, AnalyticsMentorshipFaqDataC, AnalyticsSupportFaqDataC } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Analytics Course in Chennai | Data Analytics Training in Chennai</title>
<meta name="description" content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics course in Chennai will enhance your career" />
<meta name="Keywords" content="Data Analytics course in Chennai, Data Analytics training in Chennai, Data Analytics institute in Chennai, best Data Analytics institute in Chennai, Data Analytics course in Chennai, Data Analytics certification in Chennai, Data Analytics training institute in Chennai, advanced Data Analytics course in Chennai, Data Analytics course with placement guarantee, Data Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/data-analytics-course-training-in-Chennai" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Analytics Courses Certification Training India" />
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
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Industrial Program For Early Pros"
        mTopPara="Industrial Program For Early Pros"
        title="Data Analytics Course Training in Chennai"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/course6.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Professional Beginners"
        p2="14 LPA - 22 LPA"
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
        Project="Career guidance from industrial experts"
        Classes="Basic coding classes for non-technical professions"
        OneLine="Live & interactive training by industry experts"
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
          box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant companies."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
          ProgramHead1="Job Ready Data Analytics Training in Chennai"
          ProgramHead2="What is the professional data analytics training in Learnbay?"
            ProgramBot1="Learnbay is one of the best institutes for data analytics Courses in Chennai, as it offers a wide range of programs. Learnbay's mission is to provide customized data analytics training and prepare learners for the real world. It takes care of everything, from hands-on training through data analytics projects to qualify for the interviews at top leading MNCs. It provides an immersive data analytics learning experience led by top industry experts along with one-on-one doubt clearing sessions. This unique feature makes it a one-stop place for anyone wanting to become a successful data analyst."
            ProgramBot2="The Learnbay Data analytics course in Chennai has been designed to meet the ever-changing demands of the industry. This data analytics course with placement assistance is easily accessible to both experienced working professionals and early pros from any industry. Its practical learning model includes interactive sessions by superior practitioners and industry projects to provide in-depth coverage of topics like data analysis, data visualization, and regression techniques."
            ProgramHead3="Why is Learnbay the best institute for data analytics training in Chennai?"
            ProgramBot3="Learnbay Provides 100%  live interactive classes with flexible hours and sessions led by experienced data analysts. Additionally, Our data analytics course in Chennai comes with a one-year Flexi subscription to the course allowing students to learn at their convenience. A unique feature is learners can choose their preferred batch and mentors. They provide additional classes for non-programmers to stay on track with other peers."
            ProgramBot31=" On the other hand, With our world-class data analytics training in Chennai, students can be well-prepared to succeed in today's data-driven world. The Learnbay data analytics course with placement includes both practical and theoretical topics for a well-balanced approach to learning."
            ProgramBot32="Know more about the Learnbay Data Analytics Couse in Chennai. "

            CertificationHead1="IBM Data Analytics Certification in Learnbay"
            CertificationBot1="We have already achieved the IBM collaboration for our data analytics industrial program in Chennai. The course offers IBM Data Analytics Course Completion certification at the end of the training. "
            CertificationBot2="This IBM data analytics course will certainly strengthen your resume to make you stand out from the crowd and get noticed by the recruiters.  Also, We have collaborated with global tech companies in order to showcase the talents of our data analytics students."
            src="/BA-DA.jpeg"

            ModuleHead1="What does the IBM data analytics course in Chennai include? "
            ModuleBot1="Learnbay is committed to providing the best data analytics course in Chennai.  This Data Analytics course with placement has been designed to meet the ever-changing demands of the industry. This customized data analytics course in Chennai delivers basic to advanced levels of training in data analytics. Additionally, they also offer special classes of coding for non-programmers to excel at programming skills."
            ModuleBot2="Our data analytics course training in Chennai has helped countless working professionals boost their technical skills and gain experience in multiple domains. The modules of the IBM data analytics course cover all the essential topics in data analytics tools and techniques, including data preprocessing, data exploration, statistical analysis, dashboarding, PowerBI and SQL, etc."

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
    syllabush3="Statistics"
    syllabusb3="50 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive Stats"
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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"


    JobBot1="Learnbay aims to produce high-quality data analysts across Chennai. Our job assistance program includes mock interviews for candidates seeking jobs in data analytics roles. We also guide students with resume preparation, technical skills, and soft skill grooming sessions. "
    JobBot2="Our strong ties with MNCs and IBM have helped many students get placed as data analysts in the top leading firms with a minimum possible timeline. After the course completion, approx 700+ Learnbay students have already landed high-paying positions in Amazon, TCS, EY, JP Morgan, and Oracle as Multinational corporations across Chennai. "
    JobHead2="Role of Data Analyst and its demand in Chennai:"
    JobBot3="Data Analysts are in great demand in various firms across Chennai. An expert data analyst collects, analyzes, and stores data and uses it to help organizations make strategic business decisions. A data analyst should be well-versed in both theoretical and practical knowledge. Moreover, they should have the ability to apply their expertise in the collection of meaningful data and its analysis for meaningful conclusions."
    JobBot4="Our IBM data analytics training helps learners make smarter business decisions. The distinction between predictive, descriptive, and Automated analytics can be learned in-depth via our data analytics training course. Learn the most in-demand data analytics skills and get placed in top companies in Chennai."
    JobHead3="What are career opportunities after enrolling in the IBM data analytics course in Chennai?"
    JobBot6="In Chennai, data analysts are high in demand and this course will definitely help you secure your career. Below are the data analytics job roles you can apply for after the completion of our data analytics course with placement:"
    JobBot7="Data Analyst,
    Marketing Data Analyst,
    Financial Analyst,
    Operation Analyst,
    Data Analytics Consultant and many more.
    "

    ProjectsHead1="What are the types of data analytics projects associated with this course?"
    ProjectsBot1="Learnbay aims to assist students in gaining practical hands-on experience through the completion of multiple projects under the guidance of our mentors. In the data analytics course curriculum in Chennai, you’ll have the opportunity to work on 5 popular data analytics projects. One of the best features of the IBM data analytics course is its premium cloud lab feature where learners can access this cloud lab to observe the data handling and mining process of MNC live projects. These hands-on training sessions in the data analytics course in Chennai make your learning easier and more efficient. Some of the data analytics projects done by our students are listed below:"
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/amazon1.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay has continuously worked towards fulfilling the professions of many aspiring data analysts in Chennai. Our strong ties with MNCs and IBM have helped many students get placed in the top leading firms with a minimum possible timeline. More than 700 learners have already secured lucrative positions in Amazon, TCS, EY, JP Morgan, and Mercedes like multinational business giants."
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
            <FAQNew FaqDatas={AnalyticsFaqDataC} DomainFaqDatas={AnalyticsDomainFaqDataC} PaymentFaqDatas={AnalyticsPaymentFaqDataC} CapstoneFaqDatas={AnalyticsCapstoneFaqDataC} CertificationFaqDatas={AnalyticsCertificationFaqDataC} jobFaqDatas={AnalyticsjobFaqDataC} MentorshipFaqDatas={AnalyticsMentorshipFaqDataC} SupportFaqDatas={AnalyticsSupportFaqDataC} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Chennai "
      CityText=" : Anna Nagar [600040],Thousand Lights [600006], Adyar [600020],Nungambakkam [600034], Perambur [600011], OMR [600119], Guindy [600032], Thiruvanmiyur [600041],Perungudi [600096], Thoraipakkam [600097],Sholinganallur [600119], Siruseri [603103], Tambaram [600045], Velachery [600042], Meenambakkam [600027], Chrompet [600044], T nagar [600017],Chennai central [600020],Erukkancheri [600118],World University Centre [600031],Madras University [600005],Indian Institute Of Technology [600036]"
      CityTextLB="Locations Offered"
      CityTextL=" :  Data Analytics Training in Chennai, Data Analytics Course in Chennai, Data Analytics Training in Anna Nagar, Data Analytics Training in Guindy, Data Analytics Institute in Chennai, Data Analytics Training in Siruseri, Data Analytics Training in Perungudi, Data Analytics Training in OMR, Data Analytics Training Institute in Adyar, Data Analytics Course in Anna Nagar, Data Analytics Course in chrompet, Data Analytics Course in Velchery, Data Analytics Course Nungambakkam, Data Analytics Training in Thoraipakkam, Data Analytics Course in OMR, Data Analytics Training in Madras university, Data Analytics Training in Tambaram, Data Analytics Online Classes in Anna Nagar, Data Analytics Course in Indian Institute Of Technology , Data Analytics Training in Chennai, Data Analytics Certification in Chennai, Data Analytics Certification Training in Chennai, Data Analytics Certification in Anna Nagar, Data Analytics Certification in Adyar, Best Data Analytics Training, Best Data Analytics Course."
      />
      </main> 
    </div>
  )
}