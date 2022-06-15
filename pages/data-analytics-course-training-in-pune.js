import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CityText from "../Components/CityText/CityText";
import CitiesLeft from "../Components/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../Components/CitiesRight/CitiesRightdomain";
import FAQNew from "../Components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import { AnalyticsFaqDataP, AnalyticsDomainFaqDataP, AnalyticsPaymentFaqDataP, AnalyticsCapstoneFaqDataP, AnalyticsCertificationFaqDataP, AnalyticsjobFaqDataP, AnalyticsMentorshipFaqDataP, AnalyticsSupportFaqDataP } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Analytics Course in Pune | Data Analytics Training in Pune</title>
<meta name="description" content="Data Analytics Course in Pune. Learnbay is Advanced Data Analytics Course Training Institute in Pune. Data Analytics course in Pune will enhance your career" />
<meta name="Keywords" content="Data Analytics course in Pune, Data Analytics training in Pune, Data Analytics institute in Pune, best Data Analytics institute in Pune, Data Analytics course in Pune, Data Analytics certification in Pune, Data Analytics training institute in Pune, advanced Data Analytics course in Pune, Data Analytics course with placement guarantee, Data Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/data-analytics-course-training-in-Pune" />
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Industrial Training Program for Early-professionals"
        mTopPara="Industrial Training Program for Early-professionals"
        title="Data Analytics Training Course in Pune"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/data-analytics.png"
        alt="AiMl Header"
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
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Analytical whizzes."
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
          ProgramHead1="What is the Data analytics training Program in Pune by Learnbay?"
            ProgramBot1="Learnbay is one of the popular Data Science and AI training institutes in Pune. Here you can find a Fast-track Data analytics learning program to speed up your career growth along with the opportunities of strengthening job security.            "
            ProgramBot2="Learnbay's data analytics training in Pune helps every professional keep up with the continuously changing industry and analytical needs. Learnbay believes in learning with practical assignments than just theory."
            ProgramBot3="We have dedicated faculty working for students' career growth. Our faculties analyze students' profiles and offer projects as well as learning modules accordingly. By learning Data analytics at Learnbay, you just don't become a normal data analyst but also unlock your skills at being an expert in it. Learnbay gives students the freedom to clear their doubts in one-on-one sessions."
            ProgramHead4="Why is it essential to learn Data analytic skills?"
            ProgramBot4="Learning Data analytics skills will help you become a demanding Data analyst professional. Data analyst work is to predict future trends and results of a business. IBM Certified Data analyst training in Pune upskills students to improve business decision-making."

            CertificationHead1="Learnbay Data analytics program certified by IBM"
            CertificationBot1="The Learnbay Data analytics program is certified by IBM and is globally recognized. Our certificates and training help students to get top-class placement in the industry. The tag of  Data analytics IBM certificate in your online portfolio drags additional attention to renowned recruiters searching for a data analyst in Pune."
            src="/BA-DA.jpeg"

            ModuleHead1="What are the module features of Learnbay Data Analytics training in Pune?"
            ModuleBot1="Extra Programming and coding sessions"
            ModuleBot2="Non-programmers lack coding language knowledge, but Learnbay clears this drawback as it provides special basic coding classes for such students. In the basic coding classes, Learnbay faculties teach you Basic Python and R programming. So, professionals from the non-technical domain can join this Data Analytics training even if they are in Marketing, finance, or even HR."
            ModuleBot3="The Learnbay Data analytics course involves more than 180 hrs of smooth live-interactive learning classes. At the end of every session, students can request a one-on-one session with our faculties if they have any specific quirks to be cleared or need special attention on any topic."
            ModuleBot4="Learnbay modules are designed for learners who want to be expert Data Analysts in 4.5-6 months. In these few months, Learnbay converts you into a Data analyst with skills in using data analytics tools like Data mining, probability, PCA analysis, Tableau, SQL, Power BI Hadoop, etc."

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

    JobHead1="How does Learnbay help students by assisting them in placement procedures?"
    JobBot1="Learnbay always works hard to provide the best for its students in the data analytics program. We conduct mock interviews before students attend any real data analytics interviews. This feature is a part of our data analytics training program. Learnbay faculties even help students create a good resume and technical and soft skill training. Learnbay has tremendous goodwill with other companies that have led us to offer better placement experiences to our students. Over 700+ Learnbay alumni are working in and with industry leaders like TCS, EY, MERCEDES, DELOITTE, JP MORGAN, and many more."
    JobHead2="What kind of roles does one get as a Data analyst?"
    JobBot3="After completing IBM Certified Data Analytics Course at Learnbay, one can apply for roles such as"
    JobBot6="Financial Analyst,
    HR Analyst,
    Junior Data Analyst,
    Marketing Analyst,
    Data Analytics consultant,
    Quantitative Analyst,
    Operation Analyst, etc.
    
    "

    ProjectsBot1="Learnbay offers premium cloud lab access that is accessible to students from any device. This is one of Learnbay’s outstanding features available for students. Learnbay assigns students 5 real-time projects. These projects are concerned with the industry requirements in Pune."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="More than 700 students have been placed in leading companies like JP MORGAN, EY, MERCEDES, AMAZON, etc. Our students not only got placed in Pune, but they easily got into companies PAN India. Few of our students shared their experiences of becoming successful data analysts."
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
            <FAQNew FaqDatas={AnalyticsFaqDataP} DomainFaqDatas={AnalyticsDomainFaqDataP} PaymentFaqDatas={AnalyticsPaymentFaqDataP} CapstoneFaqDatas={AnalyticsCapstoneFaqDataP} CertificationFaqDatas={AnalyticsCertificationFaqDataP} jobFaqDatas={AnalyticsjobFaqDataP} MentorshipFaqDatas={AnalyticsMentorshipFaqDataP} SupportFaqDatas={AnalyticsSupportFaqDataP} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Pune "
      CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Analytics Course viman nagar,Data Analytics Training in kalyan nagar,Data Analytics Training in magarpetta,Data Analytics Training in pimpri chinchwad,Data Analytics Classes in yerwada,Data Analytics Classes in kharadi,Data Analytics Classes in vishrantwadi,Data Analytics Classes in deccan,Data Analytics Course in Katraj,Data Analytics Training in warje,,Data Analytics Certification Training in bavdhan,Data Analytics Certification in boat club road,Data Analytics Certification in model colony,Best Data Analytics Training in pune,Best Data Analytics Course in pune"
      />
      </main> 
    </div>
  )
}