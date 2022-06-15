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
import { BusinessAFaqDataP, BusinessADomainFaqDataP, BusinessAPaymentFaqDataP, BusinessACapstoneFaqDataP, BusinessACertificationFaqDataP, BusinessAjobFaqDataP, BusinessAMentorshipFaqDataP, BusinessASupportFaqDataP } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Business Analytics Course in Pune | Business Analytics Training in Pune</title>
<meta name="description" content="Business Analytics Course in Pune. Learnbay is Advanced Business Analytics Course Training Institute in Pune. Business Analytics course in Pune will enhance your career" />
<meta name="Keywords" content="Business Analytics course in Pune, Business Analytics training in Pune, Business Analytics institute in Pune, best Business Analytics institute in Pune, Business Analytics course in Pune, Business Analytics certification in Pune, Business Analytics training institute in Pune, advanced Business Analytics course in Pune, Business Analytics course with placement guarantee, Business Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/business-analytics-course-training-in-Pune" />
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
        deskTopPara="IBM-Certified Business Analytics training Program with Live Industrial Projects"
        mTopPara="IBM-Certified Business Analytics training Program with Live Industrial Projects"
        title="Business Analytics Course Training In Pune"
        desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
        src="/business-analytics.png"
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
            ProgramBot1="Learnbay offers industry-oriented Business analytics programs. It is a top-notch Business analytics training program in Pune basically for early professionals. This business analytics course training program by Learnbay is custom-made for students who aspire to be Business Analysts, even after starting their career in any other field. Learnbay teaches students to work on Business analytics tools operated by IT giants. Learnbay Business analytics program in Pune offers learners a real-time experience of working as a Business analyst with IBM certified capstone projects."
            ProgramHead3="Why do students and professionals need to take the Learnbay Business Analytics course in Pune?"
            ProgramBot3="Our business analytics course training program in Pune is designed by Industry experts who own more than 8 years of experience in top multinational companies. Our faculty has designed this course as per the industry standards and requirements in Pune. Learnbay always keeps its course modules updated so that students remain updated with the latest trends and development in the industry. Our mentors are highly experienced and skilled Business analysts. All Learnbay modules are rich in practical training sessions by top FAANG experts. Aso, the course contains real-time Business Analytics projects."

            CertificationBot1="Learnbay Business Analytics program in Pune is Certified by IBM."
            CertificationBot2="Learnbay is a one-stop solution for professional training in  Business analytics skills and tools. Our students in Pune receive IBM certificates for course completion. IBM certificates for Business analytics in a resume or portfolio add an extra mark and high skill to their profile. Learnbay Business analytics course training in Pune would make recruiters mark your profile with extra importance."
            src="/BA-DA.jpeg"

            ModuleBot1="Learnbay has online and offline classes for Business analytics course training in Pune. Our Business Analytics course includes 200 hrs of live hassle-free classes conducted by Business analysts experts. Learnbay Provides students and working professionals with batches, even on weekends. Enrolled candidates get a one-year subscription to complete their course and master their skills as Business analysts at their own pace but through live and interactive training only. Learnbay even conducts webinars and hackathons for students, so learning becomes fun, and everyone can again enjoy these events just like their past days in universities."
            ModuleBot2="Students and professionals enrolled in Learnbay's Business analytics course training in Pune learn a series of Basic Python. Non-techies need not worry about coding; our faculties conduct special coding modules for non-programmers. Our business analytics program is IBM certified and also covers every subject and tool for one to become a professional Business analyst. Students Learn Business analysts tools like Advance excel to analyze data, make models, Data visualization with Tableau, SQL databases, and many more."

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

    JobBot1="Learnbay's guides and mentors always work hard and ensure that top Multinational companies and leading startups recruit our students. Once students complete their Business Analytics course along with the project work, faculties start to train them for interviews and help them prepare resumes and portfolios. Learnbay experts even concentrate on developing our students' soft skills, which is essential with other technical abilities. Through Learnbay Business analytics training associated job assistance program, students can quickly get through interviews to work as successful Business analysts."
    JobHead2="What type of responsibility should you expert as a business analyst in Pune?"
    JobBot3="Business analysts make crucial Business decisions that are critical for future business processes. These decisions taken by Business analysts improve the company's performance and productivity. However, every business proposing new strategies in systems must even analyze their business performance and process. After a student or a professional completes a Business analytics course in Pune, they get job roles such as Business analytics consultant, Junior Business Analyst, Database administrator, etc."
    

    ProjectsBot1="Learnbay helps students to work hard and, at the same time, tells students to work smart on their projects with creativity, so students get ownership to complete projects and assignments. Capstone projects are critical, and Learnbay faculties help you with your projects, as it would be mentioned in your resume. These projects would make your resume look better than other candidates. The course offers 5 live data analytics projects. All of these projects are blogs to different MNCs as well as different industries. Via premium cloud lab access, students can observe, learn, and practice industrial applications of BI tools with the maximum possible level of industrial efficacy. "
    src1="/AMAZON.png"
    ProjectsH1="Amazon Customer Review Analysis"
    Projectsp1="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
    src3="/BMW.png"
    ProjectsH3="BMW Used Car Price Optimization"
    Projectsp3="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
    src4="/SAMSUNG.png"
    ProjectsH4="Samsung Health Monitor App"
    Projectsp4="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."

    AlumniBot1="Learnbay has converted a lot of early-stage non-analytical working professionals into successful and expert  Business analysts. After completing the concerned business analytics certification course, approx 800+ candidates were recruited by top global companies and leading startups across Pune. Many got recruited within a month. Even candidates with 5 to 6 years of work experience were hired as junior managers and leaders. Below are a few Learnbay alumni sharing their hard work and success as business analysts. "
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
            <FAQNew FaqDatas={BusinessAFaqDataP} DomainFaqDatas={BusinessADomainFaqDataP} PaymentFaqDatas={BusinessAPaymentFaqDataP} CapstoneFaqDatas={BusinessACapstoneFaqDataP} CertificationFaqDatas={BusinessACertificationFaqDataP} jobFaqDatas={BusinessAjobFaqDataP} MentorshipFaqDatas={BusinessAMentorshipFaqDataP} SupportFaqDatas={BusinessASupportFaqDataP} />
        </div>
      </div>
      <CityText
      CityTextB="Business Analytics Course Certification Training locations in Pune "
      CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Business Analytics Course viman nagar,Business Analytics Training in kalyan nagar,Business Analytics Training in magarpetta,Business Analytics Training in pimpri chinchwad,Business Analytics Classes in yerwada,Business Analytics Classes in kharadi,Business Analytics Classes in vishrantwadi,Business Analytics Classes in deccan,Business Analytics Course in Katraj,Business Analytics Training in warje,,Business Analytics Certification Training in bavdhan,Business Analytics Certification in boat club road,Business Analytics Certification in model colony,Best Business Analytics Training in pune,Best Business Analytics Course in pune"
      />
      </main> 
    </div>
  )
}