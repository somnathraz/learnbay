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
import { BusinessAFaqDataDu, BusinessAPaymentFaqDataDu, BusinessACapstoneFaqDataDu, BusinessACertificationFaqDataDu, BusinessAjobFaqDataDu, BusinessAMentorshipFaqDataDu, BusinessASupportFaqDataDu } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Business Analytics Course in Dubai | Business Analytics Training in Dubai</title>
<meta name="description" content="Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics course in Dubai will enhance your career" />
<meta name="Keywords" content="Business Analytics course in Dubai, Business Analytics training in Dubai, Business Analytics institute in Dubai, best Business Analytics institute in Dubai, Business Analytics course in Dubai, Business Analytics certification in Dubai, Business Analytics training institute in Dubai, advanced Business Analytics course in Dubai, Business Analytics course with placement guarantee, Business Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/business-analytics-course-training-in-dubai" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Business Analytics Courses Certification Training Dubai" />
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
        deskTopPara="Industrial program for working professionals"
        mTopPara="Industrial program for working professionals"
        title="Business Analytics Course training in Dubai"
        desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
        src="/course7.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/7th+BA.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early professionals"
        p2="12 LPA - 20 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Industry-curated training via real-world analytics"
        WeekendBatchDate="Special programming classes for non-technical professions"
        Project="Especially designed for early pros or aspirants with career gap"
        Classes="Learn the most trending analytical trick from MNC experts"
        OneLine="Industrial Business Analytics certifications for IBM"
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
          box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant Companies."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramHead1="What is the Business Analytics training Program co-powered by IBM?"
            ProgramBot1="With the aim of providing real-world business-oriented training to aspirants, Learnbay institute has launched a business analytics course in Dubai. The course is designed to expose the students to a range of different business analytics concepts and develop hands-on skills related to various aspects of the business. This 5 months  IBM business analytics course is intended for professionals and individuals who want to gain a solid understanding of how to use information and statistics to make better business decisions."
            ProgramHead3="What are the benefits of the business analytics course in Dubai?"
            ProgramBot3="Learnbay’s Professional business analytics course will transform you from being an ordinary analyst to a strategic contributor with effective communication skills to all levels of organizations."
            ProgramBot31="Learnbay classes are highly flexible, allowing students to switch batches and mentors at any time. Students will be taught through live interactive classes, case studies, and projects related to the business world. Flexi subscription is an exceptional feature of Learnbay that allows students with unlimited access to Learnbay LMS. This lets them pause and resume their studies at their own pace."
            ProgramBot32="Know more about Learnbay’s Business Analytics Course in Dubai"
            
            CertificationBot1="On successful completion of our 5-months business analytics course training, along with assessments and projects, you will receive IBM Certificates. To pass the certification process, you must complete all the assignments, case studies, and projects within due dates."
            CertificationBot2="As a result of your IBM accreditation, Employers will notice your credentials and consider you for several opportunities in Dubai firms."
            src="/BA-DA.jpeg"

            ModuleBot1="The business Analytics course in Dubai provides a career-focused and practical approach to the subject that covers a wide range of industry topics, including data science, business intelligence, Data mining, Data warehouse, Python, and communications."
            ModuleBot2="Learnbay's business analytics course has been tailored as per the demand of the present Dubai marketplace. Each module of the BI course is built-up progressively by using a leading-edge teaching strategy. In this course, you will begin with the fundamentals of analytics before moving on to advanced industrial applications."
            ModuleBot3="Tableau, SQL, and SAS are among the powerful analytical and business intelligence (BI) tools you'll study in our professional business analytics course."
            ModuleHead3="Support for Non-coders:"
            ModuleBot4="Learning to code is no longer a risk for candidates with zero coding experience since our business analytics course comes with programming classes. These six to eight hours of Python and R programming sessions will turn any newbie into an expert coder and eventually a BI analyst."

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
    syllabusb3="30 Hours"
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
    SyllabusBotlist41="Market Basket Analysis"
    SyllabusBotlist42="Analyzing Customer Feedback"
    SyllabusBotlist43="Loan Eligibility Prediction"
    SyllabusBotlist44="Customer Churn Prediction"
    SyllabusBotlist45="Inventory Demand Forecasting"
    SyllabusBotlist46="Retain Analytics"
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/7th+BA.pdf"


    JobHead1="Job orientation program in Business analytics training by Learnbay"
    JobBot1="Learnbay offers job assistantships for those who complete the business analytics course in Dubai. This support involves sessions on soft skills training (including presentation), resume writing, and project portfolio management. Apart from this, we also offer 1:1 mock interviews with the leading organizations to practice your interview abilities. Our career experts ensure that you are eligible to ace any business analytics job interview at the earliest given a chance. Learnbay has a great network of over 200 hiring partners in Dubai and other countries."
    JobHead2="Scope and career opportunities of Business analytics in Dubai :"    
    JobBot3="Dubai is a global business center and has a large pool of entrepreneurs who want to get their business online. As a result, several new businesses are opening up day by day. Business analysts and BI professionals are in high demand because of the crucial role they play in every business. It can be a fulfilling career path for those who enjoy sorting, viewing, and analyzing data to solve problems, give business intelligence, and make decisions."
    JobBot4="In Dubai, you can apply for a variety of positions, including senior business analyst, Quantitative analyst, Business translator, Marketing Analyst, Business Intelligence analyst,  Database administrator, and many more."
    JobBot5="By taking this professional business analytics course, you will learn how to use the power of analytics to build a strong career in BI and business analytics."

    ProjectsBot1="Learnbay’s Business Analytics Certification learning experience is integrated with real-world projects to assist students in gaining real-world experience and excelling in their Business analyst careers."
    ProjectsBot2="During our IBM business analytics training, you will work on 5 live projects from the MNCs. This hands-on practice will boost your BI tools and techniques to prepare for the real world. Learnbay Business Analytics course comes with free access to a premium cloud lab, which has unlocked the way to this incredible industrial experience. The following are the projects done by our students:"
    src1="/amazon.png"
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

    AlumniBot1="Over 700+ students have benefitted from our IBM business analytics course in Dubai, which has aided them in transitioning their careers from various non-technical domains to business analytics. Many Learnbay alumni are proudly working in well-known startups and MNCs like Oracle, Infosys, and other Dubai-based companies. Some of our alumni graduates have shared their experiences below:"
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
            <FAQNew FaqDatas={BusinessAFaqDataDu} PaymentFaqDatas={BusinessAPaymentFaqDataDu} CapstoneFaqDatas={BusinessACapstoneFaqDataDu} CertificationFaqDatas={BusinessACertificationFaqDataDu} jobFaqDatas={BusinessAjobFaqDataDu} MentorshipFaqDatas={BusinessAMentorshipFaqDataDu} SupportFaqDatas={BusinessASupportFaqDataDu} />
        </div>
      </div>
      <CityText
      CityTextB="Business Analytics Course Certification Training locations in Dubai "
      CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Dubai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Business Analytics Course viman nagar,Business Analytics Training in kalyan nagar,Business Analytics Training in magarpetta,Business Analytics Training in pimpri chinchwad,Business Analytics Classes in yerwada,Business Analytics Classes in kharadi,Business Analytics Classes in vishrantwadi,Business Analytics Classes in deccan,Business Analytics Course in Katraj,Business Analytics Training in warje,,Business Analytics Certification Training in bavdhan,Business Analytics Certification in boat club road,Business Analytics Certification in model colony,Best Business Analytics Training in Dubai,Best Business Analytics Course in Dubai"
      />
      </main> 
    </div>
  )
}