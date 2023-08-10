import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import FirstSection from "../../../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../../../components/CoursePage/ProgramInfo/ProgramInfo";
import { ProgramFee } from "../../../components/CoursePage/ProgramFee/ProgramFee";
import GetHired from "../../../components/CoursePage/GetHired/GetHired";
import BoxShape from "../../../components/CoursePage/Boxshape/BoxShape";
import Popup from "../../../components/Popup/Popup";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BottomBar from "../../../components/BottomBar/BottomBar";
import Form from "../../../components/Form/Form";
import CitiesLeft from "../../../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import CitiesRight from "../../../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../../../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../../../components/LearnSupport/LearnSupport";
import {
  AnalyticsFaqDataDu,
  AnalyticsDomainFaqDataDu,
  AnalyticsPaymentFaqDataDu,
  AnalyticsCapstoneFaqDataDu,
  AnalyticsCertificationFaqDataDu,
  AnalyticsjobFaqDataDu,
  AnalyticsMentorshipFaqDataDu,
  AnalyticsSupportFaqDataDu,
} from "../../../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best IBM Certified Data Analytics Course in Dubai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your Data Analytics skills with Learnbay's comprehensive course in Dubai. Gain practical knowledge from industry experts through live classes. Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Dubai, Data Analytics training in Dubai, Data Analytics institute in Dubai, best Data Analytics institute in Dubai, Data Analytics course in Dubai, Data Analytics certification in Dubai, Data Analytics training institute in Dubai, advanced Data Analytics course in Dubai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-dubai"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training Dubai"
        />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
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
 "name": "How to apply for data analytics course?",
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
 "name": "We provide Advanced data analytics course in Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
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
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-for-managers.png",
 "name": "Talk to Expert",
 "url": "https://www.learnbay.co/data-science-course/"
 },{
 "@type": "HowToStep",
 "text": "Get enrollment in our data analytics course",
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
 "headline": "Data Analytics Course Training in Dubai",
 "description": "Data Analytics Course in Dubai. Learnbay is Advanced Data Analytics Course Training Institute in Dubai. Data Analytics course in Dubai will enhance your career",
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
 "name": "What are the prerequisites for the Data Analytics Training Course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Data Analytics certification course in Dubai as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in the Data Analytics Certification Program in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Data Analytics Course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this Data Analytics Course is about 6 months ( 180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 4.5 months Monday to Friday - 2 hours/day Weekend batch - 6 months Saturday & Sunday - 3.5 hours/day"
 }
 },{
 "@type": "Question",
 "name": "What is the mode of Data Analytics training at Learnbay, Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online Data Analytics training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Data Analytics Program in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Data Analytics Program is INR 93,220/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 93,220/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 7,768/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Data Analytics Certification in Dubai? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Group of 4+"
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
 "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc."
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
"name": "How many interview calls will I get at Learnbay?",
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
 "text": "Our mentors will provide Data Analytics training to the students until the completion of the course."
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
"@type": "EducationEvent","name": "Data Analytics Course Training in Dubai",
"description": "Data Analytics Course in Dubai. Learnbay is Advanced Data Analytics Course Training Institute in Dubai. Data Analytics course in Dubai will enhance your career",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
"performer":"Learnbay", 
"offers":{
"@type": "AggregateOffer",
"lowPrice": "39999",
"highPrice": "110000",
"url" : "https://www.learnbay.co/",
"availability" : "https://schema.org/InStock",
"price": "1,10,000",
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
 "name": "Learnbay - Data Science, Data Analytics Course Training in Dubai",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": " 1090 , 1st Floor, 18th Cross Road HSR Layout Sector 3, Bangalore - 560102 (Above Sangam Sweets)",
 "addressLocality": "HSR Layout Sector 3",
 "postalCode": "560102",
 "addressCountry": "Bengaluru, Karnataka,INDIA"
 } 
 ,"geo": {
 "@type": "GeoCoordinates",
 "latitude": "12.911762714349765",
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
        <Navbar popup={true} dataScienceCounselling={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form
              popup={true}
              setTrigger={setPopups}
              dataScienceCounselling={true}
            />
          </div>
        </Popup>
        <FirstSection
          dataScienceCounselling={true}
          deskTopPara="Industry-ready Data analytics program"
          mTopPara="Industry-ready Data analytics program"
          title="Data Analytics Course Training in Dubai"
          mTitle="Data Analytics Course Training in Dubai"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Data+Analytics.png"
          width="900"
          height="762"
          alt="data analytics course training in dubai"
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
            p44="₹ 10,816/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 7,768/month"
          Fee="₹ 79,000 + 18% GST"
          dataScienceCounselling={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="data analytics course training in dubai"
            title="Why Enroll In Data Analytics Course Training in Dubai?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with PRODUCT Based Companies experts."
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
              ProgramHead1="Industry-ready Data analytics program"
              ProgramBot1="Learnbay offers a full-stack Data analytics course in Dubai, co-developed by IBM. The data analytics courses are prepared by professional faculties that have immense knowledge and experience in the real-world data analytics field. Our Data Analytics course is aimed at anyone wanting to learn about data analytics, with an emphasis on practical skills and job-ready techniques. In other words, It is the perfect choice for anyone interested in working as a data analyst, marketing analyst, financial analyst, analytical consultant, or any other analytical role. Simply, we can say this is a course that helps aspirants boost their knowledge of how data can be used in today's business market."
              ProgramBot2="The IBM data analytics course curriculum optimizes students with the requisite set of skills to ace interviews and builds a strong platform for their job prospects in Dubai."
              ProgramHead3="How can Learnbay be the right start for your data analytics career in Dubai?"
              ProgramBot3="Learnbay offers weekend and weekday batches to accommodate working professionals' busy schedules. You can also choose your own learning schedule. With a 1-year flexi pass, students can attend any batch of any instructor via Learnbay LMS. Learnbay also conducts additional coding classes For Non-Programmers to keep them on track with other techies."
              ProgramBot31="The IBM data analytics course includes 180+ hours of live lectures, exercises, hands-on labs, real-world examples, case studies, and discussion sessions, giving you an idea of how data analytics works in practice. In addition, Learnbay also hosts monthly hackathons and webinars to ensure engaged learning."
              ProgramBot32="In a nutshell,  Learnbay is the ideal place for you to head-start your career in data analytics training in Dubai."
              CertificationHead1="IBM Data Analytics Certification by Learnbay"
              CertificationBot1="At the end of the data analytics course, students will be issued a course completion certificate directly by IBM. And of course, they must complete all of the modules along with practical assignments, assessments, and projects to be awarded this IBM certificate. Following this, they will be furnished with a job assistance program. We have also partnered with global IT companies in Dubai to promote our data analytics students' skills."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleBot1="The modules of the data analytics course in Dubai consist of 180+ hours of live classes led by experts. Our instructors cover all the steps, from understanding the problem statement to the final solution. The course covers a variety of data analytics tools, including PowerBI, advanced Excel, MongoDB, Tableau, and Spark analytics."
              ModuleBot2="In this training, you'll also learn the core concepts of predictive analytics and see how modern Hadoop-based technologies and tools can give you a head-start in Data Analytics."
              ModuleBot3="Additionally, Learnbay also offers specialized Python programming classes for non-coders to enhance their programming skills."
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
              JobBot1="Learnbay Data analytics course will train you such that you learn the job-ready skills in Dubai. Learners who successfully complete our IBM data analytics course will get access to our Job Assistance service. Our career experts conduct mock interviews with various firms. They also guide them with portfolio and project management along with interpersonal skills training. After completion of data analytics certification, around 700+ students have got placed in high-paying positions in Dubai firms."
              JobHead2="What is data analytics in Dubai?"
              JobBot3="Data Analytics is the process of obtaining useful information from data. It helps in achieving efficiency and providing insights into a business operation."
              JobBot4="As a data analyst, you will be supporting the business in its decision-making process by analyzing large volumes of customers and other data. You will be responsible for identifying patterns and trends within your data set, interpreting that information to identify opportunities, and delivering strong solutions accordingly."
              JobHead3="Will data analytics be a secured career in Dubai?"
              JobBot7="Data analytics is one of the fastest-growing career fields in Dubai. Given the current market scenario, there is always an increasing demand for Data Analysts in the workplace, and it may be an ideal career choice for people with a strong foundation in mathematics, statistics, or business backgrounds. In Dubai, a typical data analyst earns around 10,000 AED per month, which is decent pay in an expensive city."
              JobBot8="Overall, Data analytics is a great profession to be in, offering opportunities with high compensation and expert status with the right experience. Our data analytics course with placement will help you get started on this journey to becoming a professional data analyst in Dubai."
              ProjectsBot1="As part of our IBM data analytics certification, students will be given hands-on practical training under the guidance of mentors. Here, they will be required to work on 5 popular data analytics projects. Learnbay's cloud lab option provides learners with access to ongoing MNC projects, allowing them to stay up to date on the newest data analytics trends. Some of the projects of previous Learnbay students:"
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
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay data analytics course includes both theory and hands-on techniques, which makes our students eligible for real-world data analytics jobs in Dubai. We have trained almost 1000+ students so far from all over the world. They currently are working in supervisory and managerial positions in large tech companies like SAP, Adobe, Salesforce, and other Dubai companies. Learnbay Students Reviews:"
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
              alt1="data analytics course training in dubai"
              alt2="data analytics course training in dubai"
              alt3="data analytics course training in dubai"
              alt4="data analytics course training in dubai"
              alt5="data analytics course training in dubai"
              alt6="data analytics course training in dubai"
              alt7="data analytics course training in dubai"
              alt8="data analytics course training in dubai"
              alt9="data analytics course training in dubai"
            />
            <FAQNew
              FaqDatas={AnalyticsFaqDataDu}
              DomainFaqDatas={AnalyticsDomainFaqDataDu}
              PaymentFaqDatas={AnalyticsPaymentFaqDataDu}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataDu}
              CertificationFaqDatas={AnalyticsCertificationFaqDataDu}
              jobFaqDatas={AnalyticsjobFaqDataDu}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataDu}
              SupportFaqDatas={AnalyticsSupportFaqDataDu}
            />
          </div>
        </div>
        <LearnSupport />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}
