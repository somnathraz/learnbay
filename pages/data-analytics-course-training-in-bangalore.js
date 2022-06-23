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
import { AnalyticsFaqDataB, AnalyticsDomainFaqDataB, AnalyticsPaymentFaqDataB, AnalyticsCapstoneFaqDataB, AnalyticsCertificationFaqDataB, AnalyticsjobFaqDataB, AnalyticsMentorshipFaqDataB, AnalyticsSupportFaqDataB } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Analytics Course in Bangalore | Data Analytics Training in Bangalore</title>
<meta name="description" content="Data Analytics Course in Bangalore. Learnbay is Advanced Data Analytics Course Training Institute in Bangalore. Data Analytics course in Bangalore will enhance your career" />
<meta name="Keywords" content="Data Analytics course in Bangalore, Data Analytics training in Bangalore, Data Analytics institute in Bangalore, best Data Analytics institute in Bangalore, Data Analytics course in Bangalore, Data Analytics certification in Bangalore, Data Analytics training institute in Bangalore, advanced Data Analytics course in Bangalore, Data Analytics course with placement guarantee, Data Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/data-analytics-course-training-in-bangalore" />
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
        deskTopPara="IBM Certified Industry-paced Training"
        mTopPara="IBM Certified Industry-paced Training"
        title="Data Analytics Course Training in Bangalore"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/course6.png"
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
          ProgramHead1="Learnbay Data Analytics Program in Bangalore- Co-Developed With IBM"
            ProgramBot1="Learnbay has an exclusive program for Data Analytics training in Bangalore. This consists of 170+ live and interactive classes contacted by MNC data analytics experts."
            ProgramBot2="Learnbay Data analytics course in Bangalore helps non-programmers learn from interactive special basic coding classes with regular updates on coding assignments. Learnbay even conducts hackathons and webinars for efficient learning. This IBM data analytics course ensures the successful and secure technical career switch for non-technical early pros."
            ProgramBot3="Keeping the time management hardship of working professionals, Learnbay offers both weekend and weekdays batches. Even you get additional flexibility in choosing your learning schedules too. Via Learnbay LMS Students can attend any batch from an instructor or mentor as per their choice with 1 year of the flexible pass."
            ProgramHead4="Why is Learnbay a perfect institute for professional  Data analytics courses in Bangalore?"
            ProgramBot4="Learnbay ensures smooth live conversational classes with flexible hours and sessions conducted by experienced Data analysts. As already mentioned, we offer a one-year Flexi subscription for students to learn at their own pace. Learnbay data science course's best feature is that students can choose their batch and mentors. We even conduct additional classes for non-techies to stay upright with other techies. Such non-techies supports include dedicated basic programming classes and entry-level hackathons. Learnbay gives world-class training in Data Analytics in Bangalore to prepare students to grow as Data analysts."
            ProgramBot5="Apart from these, you have the options for choosing online/ offline/ hybrid mode. The entire training course offers a full-stack learning opportunity within 4.5 months. It’s a fast-track course but trickily designed in such a way that your mastery does not remain limited to the trending data analytics tools but also to the requisites concepts behind it. So, even if the popularity or direction of tool usage gets changed tomorrow, your demand as a data scientist is not going to drop. After completion of this job-oriented data analytics program, you will be strong enough in the concept- for which recruiter fall for"
            ProgramHead6="What is the basic Data Analytics process that you need to know while working as a Data Analyst in Bangalore?"
            ProgramBot6="1. You determine data requirements or how the data has to be grouped. Data can be classified by age, income, demographic, or gender. Data can be classified in numbers or categories."
            ProgramBot7="2.  Data analytics collects data through various resources such as computers, online databases, cameras, or personnel."
            ProgramBot8="3. Now data is collected, so it must be organized and categorized to be analyzed in statistical data."
            ProgramBot9="4. This data is clean for analysis without duplication errors or incomplete data. This step helps in checking any error before the data is analyzed."
            ProgramBot10="At Learnbay, through the premium cloud lab access, you can observe these processes conducted by MNCs for their different ongoing projects."

            CertificationHead1="IBM Data Analytics Certification in Bangalore"
            CertificationBot1="The Data analytics course of Learnbay in Bangalore is IBM certified. Learnbay IBM data analytics training gives students a course completion certificate (issued directly by IBM) at the end of the course. But yes, to be awarded IBM certification, a student needs to complete all the modules along with practical assignments and live project tasks."
            CertificationBot2="Because of the IBM tag in your job seeker profile, you attain additional attention from the recruiters."
            src="/BA-DA.jpeg"

            ModuleBot1="Learnbay's IBM data analytics course has 180 hrs of classes with industry experts. The course consists of 8+ modules. All the modules are well balanced in both practical and conceptual training. It covers data analytics tools like Python, Advance excel, Machine Learning, Mongo-DB, Tableau, Power BI, Big Data, Spark analytics, etc."
            ModuleBot2="Although this is a beginner course in data science and data analytics, the submodules are still planned very comprehensively, so that it helps you to target the mid-level data analytics job roles."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/6th+DA.pdf"


    JobHead1="What does the Data Analytics Job Assistance Program by Learnbay in Bangalore include?"
    JobBot1="Learnbay Data Analytics training in Bangalore helps learners get placed in startups and top MNCs to build a career as Data analysts across Bangalore as well as India. Our IBM data analytics course includes 4 plus job-oriented sessions. We prepare students by conducting mock interviews as per the current industry demand of Bangalore and abroad as well."
    JobBot2="Learnbay even works on soft-skill, portfolio, and resume-building guidance. Many of our students had a breakthrough in their careers as they got recruited by leading global companies like TCS, salesforce, Mercedes, HDFC, JP Morgan, EY, etc."
    JobHead2="What type of roles do you get in Bangalore as a Data analyst?"
    JobBot3="Bangalore is known as the silicon valley of India here, requirements for a Data analyst are very high. A Data analyst analyzes, collects, and stores data that helps organizations make decisions. Such a professional must be profound in both theoretical and practical knowledge. Data analysts must have the skills to collect important data and get great insights and conclusions."
    JobBot4=" Data analysts in Bangalore get roles like"
    JobBot6="Data analytics consultant,
    Junior Data analyst,
    Financial analyst,
    HR analyst,
    Quantitative analyst,
    Operation analyst."

    ProjectsBot1="The premium cloud lab element of the IBM Data Analytics course from Learnbay is one of its best features available in Bangalore. There are 5 live MNC project opportunities. You can access it through this cloud lab. These projects are as per the Data analytics skill demand spread across Bangalore City. Below are a few Data Analytics projects of Learnbay in Bangalore."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data analytics abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay has encouraged a lot of students to learn and grow as Data analysts. We have placed more than 700+ professionals to top MNCs and startups. Students get jobs just a few months after they complete their Data analyst course. Below are a few success stories of our students from Learnbay."
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
            <FAQNew FaqDatas={AnalyticsFaqDataB} DomainFaqDatas={AnalyticsDomainFaqDataB} PaymentFaqDatas={AnalyticsPaymentFaqDataB} CapstoneFaqDatas={AnalyticsCapstoneFaqDataB} CertificationFaqDatas={AnalyticsCertificationFaqDataB} jobFaqDatas={AnalyticsjobFaqDataB} MentorshipFaqDatas={AnalyticsMentorshipFaqDataB} SupportFaqDatas={AnalyticsSupportFaqDataB} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Bangalore "
      CityText=" :Ammrutha halli [560092], Maruthi Seva Nagar [560033], Kuvempu Layout [560077], Bellandur [560103], Jayanagar III Block [560011], Anandnagar [560024], Nandinilayout [560096], B SK II Stage [560070], Indiranagar [560038], Yelahanka [560063], Chickpet [560053], Domlur [560071], Bansashankari III Stage [560085], Vimanapura [560017], Nagarbhavi [560072], Basaveshwaranagar [560079], Bommanahalli [560068], Mico Layout [560076], Electronic City [560100], Taverekere [560029], Nehru Nagar [560020], Agram[560007], Halsuru Pete [560002], Basavanagudi [560004], R.M.V. Extension II [560094], Jayanagar [560041], Carmelaram [560035], New Thippasandra [560075], Kanakanagar [560032], Nayandahalli [560039], Fraser Town [560005], Jalahalli East [560014], Kacharakanahalli [560084], Malleswaram West [560055], Bannerghatta [560083], Srirampuram [560021], Rajarajeshwarinagar [560098], Sivan Chetty Gardens [560042], Dommasandra [562125], Whitefield [560066], Vidyaranyapura [560097], Bolare [560082], Mathikere [560054], Doddanekkundi [560037], Hampinnagar [560104], C.V.Raman Nagar [560093], Chikkabanavara [560090], Attur [560064], Kumbalagodu [560074], Bhattarahalli [560049], Chikkalasandra [560061], Sharada Nagar [560065], Jalahalli West [560015], H.K.P Road [560051], Jp Nagar III Phase [560078], Sadashiva nagar [560080], Krishnarajapuram R S [560016], Mahalakshipuram Layout [560086], Guddadahalli [560026], Chudenapura [560060], Vidhana Soudha [560001], Shanthinagar [560027], Rajaji Nagar [560010], Chandapura [560099], Ramakrishna Hegde Nagar [560045], Shalabh Bhatnagar [560012], Peenya [560058], Ashoknagar [560050], Jalahalli Nacen [560013], Banawadi [560043], Malleswaram [560003], Doddakallasandra [560062], K.G Road [560009], Muthusandra [560087], Marathahalli [560056], JC Nagar [560006], Chamrajpet [560018], HSR Layout [560102], Devanagundi [560067], Yeswanthpura [560022], Mahadevapura [560048],Hulsur Bazaar [560008],Magadi Road [560023], Adugodi [560030], Bagalgunte [560073], Devasandra [560036], Rv Niketan [560059], Narasimharaja Colony [560019], Koramangala VI Bk [560095], Agara [560034], Vijayanagar East [560040], Benson Town [560046], Viveknagar S.O [560047], Dasarahalli [560057], Bapagrama [560091], Richmond Town [560025]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Analytics Training in Bangalore, Data Analytics Course in Bangalore, Data Analytics Training in BTM, Data Analytics Training in Marathahalli, Data Analytics Institute in Bangalore, Data Analytics Training in Whitefield, Data Analytics Training in Kundalahalli, Data Analytics Training in ITPL, Data Analytics Training Institute in Marathahalli, Data Analytics Course in BTM, Data Analytics Course in Marathahalli, Data Analytics Course in Whitefield, Data Analytics Course Bommanahalli, Data Analytics Training in Bommanahalli, Data Analytics Training in Electronic city, Data Analytics Training in Koramangala, Data Analytics Classes in BTM, Data Analytics Classes in Bommanahalli, Data Analytics Classes in Whitefield, Data Analytics Classes in Marathahalli, Data Analytics Course in Koramangala, Data Analytics Training in Jayanagar, Data Analytics Certification in Bangalore, Data Analytics Certification Training in Bangalore, Data Analytics Certification in BTM, Data Analytics Certification in Whitefield, Best Data Analytics Training, Best Data Analytics Course"
      />
      </main> 
    </div>
  )
}