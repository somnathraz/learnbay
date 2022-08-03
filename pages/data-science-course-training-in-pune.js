import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import { AdvanceFaqDataP, AdvanceDomainFaqDataP, AdvancePaymentFaqDataP, AdvanceCapstoneFaqDataP, AdvanceCertificationFaqDataP, AdvancejobFaqDataP, AdvanceMentorshipFaqDataP, AdvanceSupportFaqDataP } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Pune | Data Science Training in Pune</title>
<meta name="description" content="Data science course in Pune. Learnbay is Advanced Data Science Course Training Institute in Pune. Data science course in Pune will enhance your career" />
<meta name="Keywords" content="data science course in Pune, data science training in Pune, data science institute in Pune, best data science institute in Pune, data scientist course in Pune,data scientist certification in Pune, data science training institute in Pune, advanced data science course in Pune, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-Pune" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Science Courses Certification Training India" />
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
        deskTopPara="Foundational and Advance Job-ready Data Science Programs"
        mTopPara="Foundational and Advance Job-ready Data Science Programs"
        title="Data Science Course Training in Pune"
        desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        src="/course2.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+DSAI+(1).pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="50 LPA to 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 10k/month (9 Months)"
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
          title="Why Enroll In This Program"
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
          ProgramHead1="Industrial Data science training in Pune-"
            ProgramBot1="Learnbay is a pioneer in current job market-oriented Data science training in Pune. Learnbay faculties are industrial experts in Data science from top companies. Our mentors and guides share their experience and knowledge with students who dream of a lucrative and ever-growing career in the Data Science field. Learnbay's data science learning programs in Pune are designed according to the industrial demand running in Pune. These Data science courses are the ultimate powerhouse for working professionals planning to shift into Data science jobs."
            ProgramBot2="Our course is well customized for making the candidates ready as per the current high demand for data scientist roles existing across the city. It consists of both practical and theoretical concepts for learning Data Science."
            ProgramHead3="What do students get at Learnbay Data Science training in Pune?"
            ProgramBot3="Learnbay provided data scientist courses in Pune offer 1 to 1 attention to every student. Also, by analyzing your career profiles and academic background, we provide you with the best possible custom-fit data science course syllabus."
            ProgramBot31="Learnbay Data science students learn through uninterrupted live and interactive classes from multiple instructors who are working as senior data scientists or data science project managers in companies like IBM, Amazon, etc. Learnbay even provides IBM data science certification with job assistance."
            ProgramHead4="Why is Learnbay a major Data Science training institute in Pune?"
            ProgramBot4="Here, you get hassle-free live classes and a choice of multiple expert instructors. You also get a Data science course with a job guarantee and IBM certification. Learnbay offers flexible subscriptions and access to any batches and instructors at your convenience. You can even attend multiple sessions with different instructors. All Data science course in Pune has 1 on 1 live doubt clearance sessions from experienced MAANG Data scientists. Learners can pause, continue and complete their course within one to three years (timeline varies from course to course) after enrollment. Learnbay's unique cloud lab feature provides access to live Data science projects from MNCs and even offers guidance from industrial leads. So, you can experience full-stack data science courses like offline college but without quitting your present job."
            ProgramHead5="Available Data Science and AI Certification Courses at Learnbay in Pune are:"
            Courselink1="/data-science-certification-courses"
            Courselink2="/advance-data-science-certification-courses"
            Courselink4="/data-science-ai-for-managers"
            Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
            Course1="Foundational Data Science and AI Program"
            Course2="Advanced-Data Science and AI Program with Domain Specialization"
            Course4="Data Science and AI Program for Managers and Leaders"
            Course5="AI and Data Science Course with Job Guarantee or Money back"

            DomainHead1="Why Domain Specialization?"
            DomainBot1="Students learning data science at Learnbay get a list of specialized domains. Learnbay mentors analyze a student's profile and then suggest the right domain(s) as choosing the right domain is very important to get successfully employed as a data scientist. The domain helps students learn data science skills with a greater degree of expertise."
            DomainBot2="Many companies are looking for a skilled Data scientist, but at the same time, they want someone who is an expert in a specific domain. Learnbay plays an important role in data science training across Pune from this perspective by allowing students to select their own domain. Also, the data science learning modules you get are completely customized as per your chosen domain’s industry-level data scientific needs."
            DomainBot3="What are the domain electives available in Learnbay Data science courses in Pune?"
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

            CertificationBot1="Learnbay Data science training in Pune is Certified by IBM. Students earn IBM Data Science Certification at the end of the course. Even the Advance program, Managers program consists of 6-8 separate IBM certificates on different sub-module completion. Even in these two courses, you get a data science project completion certificate issued by IBM."
            src="/certificate.webp"

            ModuleBot1="Within Learnbay’s Data scientists courses in Pune, every module is customized as per the present data science job market direction. There are even special coding classes for students from non-technical backgrounds so students can get along with other technical mates."
            ModuleBot2="The modules cover plenty of hands-on assignments on demanding  Data science tools. Our industry MAANG experts teach you to apply statistics, probability, and mathematical analysis skills. Learnbay helps students master Data scientist tools like Advance excel, SQL, MONGO-DB, TABLEAU, POWER BI, BIG DATA, SPARK ANALYTICS, PYTHON, and TIME SERIES. Professional Data scientists widely use these programs, and our students learn the same at the trending industry level throughout the Data science training in Pune."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+DSAI+(1).pdf"


    JobHead1="Learnbay's data science course is best known in Pune for its high placement rate."
    JobBot1="It offers guaranteed data scientists jobs in the specific domain opted by students. The students of Learnbay get recruited by globally recognized companies and startups as Data scientists, Data engineers, AI experts, etc. Learnbay has created a strong network with 250+ companies that recruit for highly paid data science job roles throughout the year."
    JobBot2="Learnbay faculties even focus on students' soft skills, resume building, and portfolios of their students so that they keep shining even in the large data science job seekers crowd. Most Learnbay students have got Data scientist roles in companies like Amazon, Mercedes, JP Morgan, E&Y, SG Analytics, Techart, Alteryx, etc."
    JobHead2="What is the scope of Data scientists in Pune?"
    JobBot3="Data Scientists play an important role in the industry and have a great future with high paycheques. In actuality, they are the key to every successful business decision. Along with the MNCs, the number of SMEs is rapidly growing in Pune. So, once you complete industrial data science training from Learnbay, you get exposed to endless career opportunities."

    ProjectsBot1="Learnbay’s unique Cloud Lab feature helps students work on live MNC projects from anywhere. Depending on the course you choose, you get the opportunity of working on 8 to 15 live industry projects and 2 to 3 capstone projects. Even you get a Project Experience Certificate from IBM for successful completion of unique data science capstone projects."
    ProjectsBot2="Below are a few projects from the Learnbay alumni profiles:"
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
    src3="/amazon1.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."

    AlumniBot1="We have emplaced numerous candidates in top global companies and startups. More than 1000+ Learnbay alumni have already started working as soon as they completed the course. Rest got recruited in a few months. Even 300+ candidates have directly joined data science project leadership or manager designation after completing the Data Science and AI Program for Managers and leaders. Here are some of our alumni sharing their hard work and success:"
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
            <FAQNew FaqDatas={AdvanceFaqDataP} DomainFaqDatas={AdvanceDomainFaqDataP} PaymentFaqDatas={AdvancePaymentFaqDataP} CapstoneFaqDatas={AdvanceCapstoneFaqDataP} CertificationFaqDatas={AdvanceCertificationFaqDataP} jobFaqDatas={AdvancejobFaqDataP} MentorshipFaqDatas={AdvanceMentorshipFaqDataP} SupportFaqDatas={AdvanceSupportFaqDataP} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Pune "
      CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science Course viman nagar,Data Science Training in kalyan nagar,Data Science Training in magarpetta,Data Science Training in pimpri chinchwad,Data Science Classes in yerwada,Data Science Classes in kharadi,Data Science Classes in vishrantwadi,Data Science Classes in deccan,Data Science Course in Katraj,Data Science Training in warje,,Data Science Certification Training in bavdhan,Data Science Certification in boat club road,Data Science Certification in model colony,Best Data Science Training in pune,Best Data Science Course in pune"
      />
      </main> 
    </div>
  )
}