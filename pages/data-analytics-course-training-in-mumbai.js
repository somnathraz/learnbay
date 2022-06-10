import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CitiesLeft from "../Components/CitiesLeft/CitiesLeft";
import CitiesRight from "../Components/CitiesRight/CitiesRight";
import FAQNew from "../Components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import { FaqData1, PaymentFaqData1, CapstoneFaqData1, CertificationFaqData1, jobFaqData1, MentorshipFaqData1, SupportFaqData1 } from "../components/FAQ/FaqData";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
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
        deskTopPara="Exclusive Industrial Project-based Training"
        mTopPara="Exclusive Industrial Project-based Training"
        title="Data Science and AI"
        spanTitleText="Foundation Course"
        desc="
        Learnbay offers Industry Accredited Data Science Certification Course.This foundation program is suitable for professionals having more than 1+ years of work experience in any programming or non programming domain."
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Early-stage professionals"
        p2="18LPA to 28LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 8.5k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Specially devised for early professionals"
        WeekendBatchDate="
        Specially devised for early professionals"
        Project="Basic coding class for Non-technical beginners"
        Classes="Industry curated training via real-world cases and capstones"
        OneLine="Career guidance from industrial experts"
        Interview="250+ employer-Alliance 100% Interview Guarantee"
        Fee="₹65,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream DS role. Learn trending AI applications."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG DS/AI whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from starters, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramHead1="Professional Data Analytics Training Course in Mumbai"
            ProgramHead2="What is the Industrial Data Analytics Program by Learnbay?"
            ProgramBot1="Learnbay is one of the leading data analytics training institutes in Mumbai, with a diverse selection of professional programs. Learnbay’s objective is to deliver individualized data analytics training so that everyone can easily deal with the complex real-world analytical requirements. In fact, this is why at Learnbay, you get most of the modules as practical assignments rather than boring theoretical sessions."
            ProgramBot2="We dedicatedly address personalized career needs. Accordingly, provides data analytics projects options. So, instead of holding just a data Analytics Certificate, you hold the ultimate abilities to be a successful data analyst in MNCs. It offers an immersive data analytics learning experience in Mumbai with one-on-one doubt clearing sessions conducted by renowned industry professionals. This distinguishes it as a one-stop-shop for everyone interested in becoming a truly professional data analyst."
            ProgramHead3="How does it become a truly professional Data Analytics course in Mumbai?"
            ProgramBot3="This is a data analytics course with Placement Support (dedicated). The associated industrial data analytics training in Mumbai by Learnbay not only offers full-stack data analytics modules but also ensures you get a job after competing in the same. Its hands-on learning methodology incorporates interactive sessions with leading data analysts and industry projects to cover in-depth topics like exploratory data analysis, data visualization, and regression techniques."
            ProgramHead4="Why is Learnbay the top data analytics training Provider in Mumbai?"
            ProgramBot4="It’s mainly because of two reasons. One is their industrial recognition via IBM collaboration and the second one is their project exposure. At Learnbay, you get the ultimate industrial experience, even before joining your first data analyst job role. Due to an extremely personalized learning experience via 24 hours tech support, on-demand 1-on-1 discussion, and FANNG expert as an instructor, the data analytics training program in Mumbai become the best option to enroll. In addition, within the data analytics course fees you pay, you get 1-years flexible subscription to this data analytics program. This helps you maintain your professional responsibilities and the learning progress at the same time with the greatest ease."

            CertificationHead1="IBM Certified Data Analytics Program"
            CertificationBot1="IBM has recognized our data analytics industrial program in Mumbai. We’ve also partnered with international IT companies to offer our students a better placement assistance experience."
            CertificationBot2="Due to the presence of IBM Data Analytics Certificate in your Linkedin and other online job profile, your profile become tagged for top-tire data analytics job profiles in Mumbai."
            src="/certificate.webp"

            ModuleHead1="What do you get under the Learnbay Data Analytics program in Mumbai?"
            ModuleHead2="Special Programming Classes"
            ModuleBot1="Lack of programming knowledge is no more a barrier to data analytics courses for working professionals in Mumbai. A series of dedicated basic python and R programming classes are there. So, candidates with any professional background (Marketing, Finance, HR, etc.) can enroll."
            ModuleHead3="The Best Online Data Analytics Program in Mumbai"
            ModuleBot3="Learnbay data analytics course incorporates 180+ hours of live and interactive learning. It’s just like the offline class experience. Apart from that, at the end of every module, a student can request for 1-on-1 discussion session with their respective instructors."
            ModuleBot4="The submodules are comprehensively planned to create an expert data analyst within 4.5 to 6 months. Within this time span, you will be the pro of data analytics tools and skills like Probability, Data Storytelling, data mining, dashboarding, PCA analysis, Tableau, SQL, Power BI Hadoop, Seaborn, etc."

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

    JobHead1="Data Analytics Interview Preparation for Variable Data Analytics Job Profiles in Mumbai"
    JobBot1="Learnbay is dedicated to providing the most comprehensive data analytics training in Mumbai."
    JobBot2="We provide specialized mock interviews for candidates looking for jobs in data analytics as part of our job aid program. We also assist students with résumé writing, technical skills training, and soft skill development. Our strong links with MNCs and IBM have aided numerous students in obtaining positions in the top leading organizations in the shortest period possible. After completing the course, approximately 700+ Learnbay students have already achieved lucrative roles in worldwide corporate giants such as Amazon, TCS, EY, JP Morgan, and Mercedes."
    JobHead2="Why Earning the Data Analytics Skills Is So Important?"
    JobBot3="The Simplest answer is to secure your career. Data analysis is used to forecast and understand precise business results. Learners of IBM data analytics training course in Mumbai become eligible to make better business decisions. Descriptive, prescriptive, and automated data analytics are three types of data analytics. Significant differences exist between the three, which may be taught in-depth through our data analytics course. Until you have an adequate degree of analytical understanding, the job opportunities will start narrowing in the upcoming years."
    JobHead4="What Are the Data Analytics Roles in Mumbai You Can Target After This Course?"
    JobBot4="At the end of Learnbay provided IBM data analytics Certification, you can apply for the following positions:"
    JobList1="Junior Data Analyst"
    JobList2="Marketing Analyst"
    JobList3="Data Analytics consultant"
    JobList4="Financial Analyst"
    JobList5="HR Analyst"
    JobList6="Quantitative Analyst"
    JobList7="Operation Analyst, etc."

    ProjectsBot1="The premium cloud lab element of the IBM data analytics course from Learnbay is one of its best features available in Mumbai. There are a total of 5 live MNC project opportunities, which you can access through this cloud lab. All of these projects are as per the data analytics skill demand spread across Mumbai City. Below are a few of the data Analytics projects, already done by Learnbay students in Mumbai."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung
    Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM
    HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees’ masked inconsistency. They need models to identify the graphical variations in their 14000+ employees’ performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon
    Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW
    Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Over 700 students from the Learnbay data analytics program in Mumbai have already landed their dream job roles in different renowned organizations like JP Morgan, TCS, EY, Amazon, and Mercedes. It’s not like our students are occupying the positions only in Mumbai. They are getting amazing opportunities from all over India. Below are a few words from our satisfied students."
    Asrc1="/keerthana.png" 
    AlumniH1="Keerthana Ps" 
    Alumnip1="This session is personally very good especially with good communication . I learned somethings new over here . Personally i am satisfied with this session."
    Asrc2="/chaitanya.png" 
    AlumniH2="Cns Chaitanya" 
    Alumnip2="They are teaching from basic to advance, so I am recall all the topic.it is very useful for me . thanks for provide me .I really proud to collaborate with thank you."
    Asrc3="/sudeep.png" 
    AlumniH3="Sudeep Debnath" 
    Alumnip3="Learnbay is an outstanding platform for beginners to professional to foray into a career in Data Science. All the trainers are thorogh professionals and very helpful. I am very happy that I started my journey with Learnbay."
    Asrc4="/montfort.png" 
    AlumniH4="Montfort Lawrence" 
    Alumnip4="Learnbay provides the best solution in terms of educating the needed tech with varied experienced hands.. The sessions on Machine Learning are cool and can be understood by anyone with simple teachings from trained brains… Thanks a lot for the opportunity Learnbay…"

          />
            <FAQNew FaqDatas={FaqData1} PaymentFaqDatas={PaymentFaqData1} CapstoneFaqDatas={CapstoneFaqData1} CertificationFaqDatas={CertificationFaqData1} jobFaqDatas={jobFaqData1} MentorshipFaqDatas={MentorshipFaqData1} SupportFaqDatas={SupportFaqData1} />
        </div>
      </div>
      </main> 
    </div>
  )
}