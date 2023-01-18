import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AnalyticsFaqDataC,
  AnalyticsDomainFaqDataC,
  AnalyticsPaymentFaqDataC,
  AnalyticsCapstoneFaqDataC,
  AnalyticsCertificationFaqDataC,
  AnalyticsjobFaqDataC,
  AnalyticsMentorshipFaqDataC,
  AnalyticsSupportFaqDataC,
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
          Data Analytics Course in Chennai | Data Analytics Training in Chennai
        </title>
        <meta
          name="description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics course in Chennai will enhance your career"
        />
        <meta
          name="Keywords"
          content="Data Analytics course in Chennai, Data Analytics training in Chennai, Data Analytics institute in Chennai, best Data Analytics institute in Chennai, Data Analytics course in Chennai, Data Analytics certification in Chennai, Data Analytics training institute in Chennai, advanced Data Analytics course in Chennai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-Chennai"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org/", 
 "@type": "HowTo", 
 "name": "How to apply for data science course?",
 "description": "You just have to follow 3 easy steps to enroll in our advanced data science course",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "totalTime": "PT6M",
 "estimatedCost": {
 "@type": "MonetaryAmount",
 "currency": "INR",
 "value": "6"
 },
 "supply": {
 "@type": "HowToSupply",
 "name": "We provide Advanced data science course in Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
 },
 "tool": {
 "@type": "HowToTool",
 "name": "Data science, machine learning, artificial intelligence, data analytics"
 },
 "step": [{
 "@type": "HowToStep",
 "text": "Visit our website and fill the enquiry form",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "name": "Fill Enquiry Form",
 "url": "https://www.learnbay.co/data-science-course/"
 },{
 "@type": "HowToStep",
 "text": "Talk to our experts for career counseling",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-science-ai-for-managers.webp",
 "name": "Talk to Expert",
 "url": "https://www.learnbay.co/data-science-course/"
 },{
 "@type": "HowToStep",
 "text": "Get enrollment in our data science course",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "name": "Get enrollment",
 "url": "https://www.learnbay.co/"
}] 

}
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org",
 "@type": "NewsArticle",
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": "https://www.learnbay.co/"
 },
 "headline": "Data Analytics Course Training In Chennai",
 "description": "Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics course in Chennai will enhance your career.",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp", 
 "author": {
 "@type": "Organization",
 "name": "Learnbay",
 "url": "https://www.learnbay.co/"
 }, 
 "publisher": {
 "@type": "Organization",
 "name": "Learnbay",
 "logo": {
 "@type": "ImageObject",
 "url": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
 }
 },
 "datePublished": "2021-10-01",
 "dateModified": "2022-04-21"
}
} `,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [{
 "@type": "Question",
 "name": "What are the prerequisites for the Data Analytics Training Course in Chennai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Data Analytics certification course in Chennai as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
 }
 },{
 "@type": "Question",
 "name": "What if I miss a few classes due to an emergency?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Data Analytics Program in Chennai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this Data Science Course is about 6 months ( 180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 4.5 months Monday to Friday - 2 hours/day Weekend batch - 6 months Saturday & Sunday - 3.5 hours/day."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of data science training at Learnbay, Chennai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."

 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in Chennai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Data Analytics Program in Chennai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Data Analytics Program is INR 88,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 88,500/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 14,750/month up to 6 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Data Analytics Certification in Chennai? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Data Analytics Course at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects/case studies will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc. Click here to download the list of the projects."
 }
 },{
 "@type": "Question",
 "name": "How will the project be executed?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
 }
 },{
 "@type": "Question",
 "name": "Is there any accredited certification after course completion?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded IBM accredited Data Analytics Certificate on successful course completion."
 }
 },{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance program in Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
 },{
 "@type": "Question",
 "name": "How many interview calls will i get at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year."
 }
 },{
 "@type": "Question",
 "name": "What is a job-readiness program?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
 }
 },{
 "@type": "Question",
 "name": "Will I get job referrals at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
 }
 },{
 "@type": "Question",
 "name": "Until when will the students get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our mentors will provide data science training to the students until the completion of the course."
 }
 },{
 "@type": "Question",
 "name": "Can a Learnbay student choose to study from their desired mentor?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
 }
 },{
 "@type": "Question",
 "name": "When is the job assistance provided at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
 }
 },{
 "@type": "Question",
 "name": "How long will I get Job referrals?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
}
}]
                  }
                 } `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
"@context": "http://schema.org",
"@type": "EducationEvent","name": "Artificial Intelligence Course Training in Chennai",
"description": "Artificial Intelligence Course in Chennai. Learnbay is Advanced Artificial Intelligence Course Training Institute in Chennai. Artificial Intelligence course in Chennai will enhance your career.",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
"performer":"Learnbay", 
"offers":{
"@type": "AggregateOffer",
"lowPrice": "39999",
"highPrice": "110000",
"url" : "https://www.learnbay.co/",
"availability" : "https://schema.org/InStock",
"price": "75,000",
"priceCurrency": "INR",
"validFrom": "2022-05-01"},
"startDate":"2022-05-01",
"endDate": "2022-10-31",
"url" : "https://www.learnbay.co/","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Data Science, Machine Learning Course Training In Chennai",
 "address": {
  "@type": "PostalAddress",
  "streetAddress": " #1090 , 1st Floor, 18th Cross Road HSR Layout Sector 3, Bangalore - 560102 (Above Sangam Sweets)",
  "addressLocality": "HSR Sector 3",
  "postalCode": "560102",
  "addressCountry": "Bengaluru, Karnataka,INDIA"
  } 
  ,"geo": {
  "@type": "GeoCoordinates",
  "latitude": "12.911762714349765,",
  "longitude": "77.64127379352328"
  } 
  }], 
 "organizer": {
  "@type": "Organization",
  "name": "Learnbay",
  "url": "https://www.learnbay.co"
}
} `,
          }}
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          dataScience={true}
          deskTopPara="Industrial Program For Early Pros"
          mTopPara="Industrial Program For Early Pros"
          title="Data Analytics Course Training in Chennai"
          mTitle="Data Analytics Course Training in Chennai"
          spanTitleText="For Professionals"
          spanMTitleText="For Professionals"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course6.png"
          width="900"
          height="762"
          alt="data analytics course training in chennai"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
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
            p44="₹ 14,750/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 14,750/month"
          Fee="₹ 75,000 + 18% GST"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="data analytics course training in chennai"
            title="Why Enroll In Data Analytics Course Training in Chennai?"
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
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
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
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4=" BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has continuously worked towards fulfilling the professions of many aspiring data analysts in Chennai. Our strong ties with MNCs and IBM have helped many students get placed in the top leading firms with a minimum possible timeline. More than 700 learners have already secured lucrative positions in Amazon, TCS, EY, JP Morgan, and Mercedes like multinational business giants."
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
              alt1="data analytics course training in chennai"
              alt2="data analytics course training in chennai"
              alt3="data analytics course training in chennai"
              alt4="data analytics course training in chennai"
              alt5="data analytics course training in chennai"
              alt6="data analytics course training in chennai"
              alt7="data analytics course training in chennai"
              alt8="data analytics course training in chennai"
              alt9="data analytics course training in chennai"
            />
            <FAQNew
              FaqDatas={AnalyticsFaqDataC}
              DomainFaqDatas={AnalyticsDomainFaqDataC}
              PaymentFaqDatas={AnalyticsPaymentFaqDataC}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataC}
              CertificationFaqDatas={AnalyticsCertificationFaqDataC}
              jobFaqDatas={AnalyticsjobFaqDataC}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataC}
              SupportFaqDatas={AnalyticsSupportFaqDataC}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Data Analytics Course Certification Training locations in Chennai "
          CityText=" : Anna Nagar [600040],Thousand Lights [600006], Adyar [600020],Nungambakkam [600034], Perambur [600011], OMR [600119], Guindy [600032], Thiruvanmiyur [600041],Perungudi [600096], Thoraipakkam [600097],Sholinganallur [600119], Siruseri [603103], Tambaram [600045], Velachery [600042], Meenambakkam [600027], Chrompet [600044], T nagar [600017],Chennai central [600020],Erukkancheri [600118],World University Centre [600031],Madras University [600005],Indian Institute Of Technology [600036]"
          CityTextLB="Locations Offered"
          CityTextL=" :  Data Analytics Training in Chennai, Data Analytics Course in Chennai, Data Analytics Training in Anna Nagar, Data Analytics Training in Guindy, Data Analytics Institute in Chennai, Data Analytics Training in Siruseri, Data Analytics Training in Perungudi, Data Analytics Training in OMR, Data Analytics Training Institute in Adyar, Data Analytics Course in Anna Nagar, Data Analytics Course in chrompet, Data Analytics Course in Velchery, Data Analytics Course Nungambakkam, Data Analytics Training in Thoraipakkam, Data Analytics Course in OMR, Data Analytics Training in Madras university, Data Analytics Training in Tambaram, Data Analytics Online Classes in Anna Nagar, Data Analytics Course in Indian Institute Of Technology , Data Analytics Training in Chennai, Data Analytics Certification in Chennai, Data Analytics Certification Training in Chennai, Data Analytics Certification in Anna Nagar, Data Analytics Certification in Adyar, Best Data Analytics Training, Best Data Analytics Course."
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
