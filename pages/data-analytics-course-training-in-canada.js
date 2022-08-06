import Head from "next/head";
import styles from "../styles/Home.module.css";
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
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  AnalyticsFaqDataCa,
  AnalyticsDomainFaqDataCa,
  AnalyticsPaymentFaqDataCa,
  AnalyticsCapstoneFaqDataCa,
  AnalyticsCertificationFaqDataCa,
  AnalyticsjobFaqDataCa,
  AnalyticsMentorshipFaqDataCa,
  AnalyticsSupportFaqDataCa,
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
          Data Analytics Course in Canada | Data Analytics Training in Canada
        </title>
        <meta
          name="description"
          content="Data Analytics Course in Canada. Learnbay is Advanced Data Analytics Course Training Institute in Canada. Data Analytics course in Canada will enhance your career"
        />
        <meta
          name="Keywords"
          content="Data Analytics course in Canada, Data Analytics training in Canada, Data Analytics institute in Canada, best Data Analytics institute in Canada, Data Analytics course in Canada, Data Analytics certification in Canada, Data Analytics training institute in Canada, advanced Data Analytics course in Canada, Data Analytics course with placement guarantee, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-canada"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training Canada"
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
          deskTopPara="A Fast Track Career Upgradation Training Program For Early Professionals"
          mTopPara="A Fast Track Career Upgradation Training Program For Early Professionals"
          title="Data Analytics Course Training in Canada"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="/course6.png"
          width="900"
          height="762"
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
            p4="Financing as low as"
            p44="₹ 6,392/month"
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
              ProgramHead1="Industrial Data Analytics Program for Working Professionals Of Any Domain"
              ProgramBot1=" Canada, being the global center for technical education, offers a variety of data science career opportunities. Learnbay is proud to present the Job-ready data analytics course in Canada, the first of its kind to cover programming, algorithm, and data analytics all in one complete course."
              ProgramBot2="Our specialized faculty team has vast expertise in teaching basic to advanced data analytics in both academic and professional settings. Our IBM data analytics course curriculum is constantly being updated with the latest orientation in data analysis tools. So that you remain prepared for new changes in the technology industry- Designed for early pros and working professionals, this data analytics course at Learnbay will prepare you for a variety of careers in the field of data analytics jobs. The Online data analytics course in Canada is a 4.5-month program, with classes held weekly and weekend batches- facilitated by industry experts; students will learn through hands-on projects and group challenges."
              ProgramHead3="What is the purpose of this data analytics course in Canada?"
              ProgramBot3=" Data Analytics is a rapidly developing field and one of the most profitable and future-proof careers in Canada. The purpose of this data analytics course with placement is to provide students with theoretical and practical knowledge and skills in database management systems, analytical reporting applications, and data warehousing."
              ProgramBot31="This Data Science training course will take you from zero to hero, where you'll also learn how to harness the power of data and turn it into actionable solutions. You'll be able to analyze data from a variety of sources, create meaningful visualizations and dashboards, and interpret the information within existing and newly implemented business models."
              ProgramBot32="Know more about the Learnbay’s Data Analytics Certification Program in Canada"
              CertificationHead1=" What is the certification process for the Data Analytics course at Learnbay?"
              CertificationBot1="Learnbay has achieved collaboration for all of its training courses. After the completion of the data analytics course in Canada, you’ll be awarded an IBM certification. To successfully pass the certification process, you must be attentive throughout the training and complete all case studies and assignments within the due dates."
              CertificationBot2="This IBM certification will help you keep one step ahead of the others and grab the attention of hiring managers. We also have partnered with global tech giants to promote the abilities of our data analytics students."
              src="/BA-DA.jpeg"
              ModuleHead1="What skills will you learn from this course? "
              ModuleBot1="The Data Analytics Course with placement is a comprehensive, data-driven analytics curriculum covering the most important topics of data analytics, including predictive and prescriptive analytics. The modules are designed to challenge, engage and push you above and beyond your stated goals. Throughout the data analytics training, you will learn how to uncover patterns in data to make decisions with confidence. In addition, you will know how to develop databases from scratch, customize tables, queries, and reports, and analyze data using reporting applications."
              ModuleBot2="Additionally, you will have access to special classes of Python and R programming intended for non-technical learners. We have created this data analytics course with the idea that we will take you from a coding newbie to an expert data analyst in just a few months!"
              ModuleHead2="The fundamental training in data analytics course training includes:"
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
              JobBot1="Learnbay’s Job assistance program is what makes it the best data analytics institute in Canada, where students will receive support with resume preparation and soft skill training workshops."
              JobBot2="Most specifically, students will be trained through mock interviews with multiple hiring managers, allowing them to improve themselves and be ready to face the real interviews with a maximum level of confidence. Our solid partnerships with MNCs and IBM have helped many students get placed in leading multinational companies in Canada."
              JobHead2="How fulfilling is a career in data analytics in Canada?"
              JobBot3=" A Data analyst is a trained analytical thinker who is skilled in working with large data sets to bring insight and solutions. A  typical data analyst is expected to have a diverse knowledge of various tools and methods. They must be well-versed in the practical applications of algorithms. They must also be able to apply their knowledge in real-world situations."
              JobBot4="In Canada, there are several Data Analyst positions available in industries such as banking, healthcare, finance, and many others. Canadian firms are looking for candidates who can analyze complex data and discover new insights for their products."
              JobBot6="After completing the data analytics course with placement, students will be hired as data analysts by the top Canadian companies with an attractive salary package."
              ProjectsHead1="Projects for better experiential learning"
              ProjectsBot1="Learnbay trainers ensure that our students have learned the in-demand data analytics tools and techniques. They lead them through a series of capstones and industrial projects to provide them with hands-on experience. Furthermore, students can also access the cloud lab facility to observe and learn from the live data analytics projects from MNCs."
              ProjectsBot2="During this IBM data analytics course, you'll work on 5 famous data analytics projects, including Fake news detection and web scraping. Take a peek at some of the popular projects completed by our students:"
              src1="/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects. BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has collaborated with 250+ hiring partners. It has successfully placed many students in well-paying positions within 3 months of the IBM data analytics course completion, on average. Over 700 aspirants have secured their careers as data analysts in leading companies, including  IBM, Accenture, Oracle, and Mindtree. Some of our satisfied learners have shared their experiences with us."
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
            <FAQNew
              FaqDatas={AnalyticsFaqDataCa}
              DomainFaqDatas={AnalyticsDomainFaqDataCa}
              PaymentFaqDatas={AnalyticsPaymentFaqDataCa}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataCa}
              CertificationFaqDatas={AnalyticsCertificationFaqDataCa}
              jobFaqDatas={AnalyticsjobFaqDataCa}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataCa}
              SupportFaqDatas={AnalyticsSupportFaqDataCa}
            />
            <LearnSupport />
          </div>
        </div>
        <CityText
          CityTextB="Data Analytics Course Certification Training locations in Canada "
          CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Canada City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Data Analytics Course viman nagar,Data Analytics Training in kalyan nagar,Data Analytics Training in magarpetta,Data Analytics Training in pimpri chinchwad,Data Analytics Classes in yerwada,Data Analytics Classes in kharadi,Data Analytics Classes in vishrantwadi,Data Analytics Classes in deccan,Data Analytics Course in Katraj,Data Analytics Training in warje,,Data Analytics Certification Training in bavdhan,Data Analytics Certification in boat club road,Data Analytics Certification in model colony,Best Data Analytics Training in Canada,Best Data Analytics Course in Canada"
        />
      </main>
    </div>
  );
}
