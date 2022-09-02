import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AnalyticsFaqDataD,
  AnalyticsDomainFaqDataD,
  AnalyticsPaymentFaqDataD,
  AnalyticsCapstoneFaqDataD,
  AnalyticsCertificationFaqDataD,
  AnalyticsjobFaqDataD,
  AnalyticsMentorshipFaqDataD,
  AnalyticsSupportFaqDataD,
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
          Data Analytics Course in Delhi | Data Analytics Training in Delhi
        </title>
        <meta
          name="description"
          content="Data Analytics Course in Delhi. Learnbay is Advanced Data Analytics Course Training Institute in Delhi. Data Analytics course in Delhi will enhance your career"
        />
        <meta
          name="Keywords"
          content="Data Analytics course in Delhi, Data Analytics training in Delhi, Data Analytics institute in Delhi, best Data Analytics institute in Delhi, Data Analytics course in Delhi, Data Analytics certification in Delhi, Data Analytics training institute in Delhi, advanced Data Analytics course in Delhi, Data Analytics course with placement guarantee, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-delhi"
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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />

<script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                ` {
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
 "name": "We provide Advanced data science course in Delhi, Bangalore, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
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
} `
}}
/> 

<script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                ` {
 "@context": "https://schema.org",
 "@type": "NewsArticle",
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": "https://www.learnbay.co/"
 },
 "headline": "Data Analytics Course Training in Delhi",
 "description": "Data Analytics Course in Delhi. Learnbay is Advanced Data Analytics Course Training Institute in Delhi. Data Analytics course in Delhi will enhance your career",
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
 "url": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp"
 }
 },
 "datePublished": "2021-10-01",
 "dateModified": "2022-04-21"
}
} `
}}
/>  <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                ` {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [{
 "@type": "Question",
 "name": "What are the prerequisites for the Data Analytics Training Course in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Data Analytics certification course in Delhi as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in the Data Analytics Certification Program in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Data Analytics Program in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this Data Science Course is about 6 months ( 180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 4.5 months Monday to Friday - 2 hours/day Weekend batch - 6 months Saturday & Sunday - 3.5 hours/day."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of data science training at Learnbay, Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Data Analytics Program in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Data Analytics Program is INR 70,800/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 70,800/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 11.8k/month up to 6 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
}
},{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Data Analytics Certification in Delhi? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Data Analytics Course at Learnbay?.",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects/case studies will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc. "
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
 "text": "Yes, you will be awarded IBM accredited Data Analytics Certificate on successful course completion.
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
 "name": "How long will I get support for job assistance at Learnbay?,
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
 "name": "What is the refund policy for the Data Science Certification courses at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "Will I get job referrals at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
 }
 },{
 "@type": "Until when will the students get the facility of mentorship?"
 "name": ",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our mentors will provide data science training to the students until the completion of the course."
 }
 },{
 "@type": "Can a Learnbay student choose to study from their desired mentor?",
 "name": ",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
 }
 },{
 "@type": "When is the job assistance provided at Learnbay?"
 "name": ",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
 }
 },{
 "@type": "How long will I get Job referrals?"
 "name": ",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
}
}]
                  }
                 } `
            }}
          />

<script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:
                ` {
"@context": "http://schema.org",
"@type": "EducationEvent","name": "Data Analytics Course Training in Delhi",
"description": "Data Analytics Course in Delhi. Learnbay is Advanced Data Analytics Course Training Institute in Delhi. Data Analytics course in Delhi will enhance your career",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp",
"performer":"Learnbay", 
"offers":{
"@type": "AggregateOffer",
"lowPrice": "39999",
"highPrice": "110000",
"url" : "https://www.learnbay.co/",
"availability" : "https://schema.org/InStock",
"price": "39999",
"priceCurrency": "INR",
"validFrom": "2022-05-01"},
"startDate":"2022-05-01",
"endDate": "2022-08-31",
"url" : "https://www.learnbay.co/","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Data Science, Data Analytics Course Training in Delhi",
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
} `
}}
/>
      </Head>
      <main>  <Navbar popup={true} dataScience={true} />

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
        <FirstSection dataScience={true}          deskTopPara="Fast track IBM Certified Data Analytics Course for early pros."
          mTopPara="Fast track IBM Certified Data Analytics Course for early pros."
          title="Data Analytics Course Training In Delhi"
          mTitle="Data Analytics Course Training In Delhi"
          spanTitleText="For Professionals"
          spanMTitleText="For Professionals"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course6.png"
          width="900"
          height="762"
          alt="AiMl Header"
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
            p44="₹ 6,392/month"
          />
        </div>
        <GetHired dataScience={true}          WeekdayBatchDate="Best in class industrial training with live projects"
          WeekendBatchDate="250+ employer allowance & 100% interview guarantee"
          Project="Career guidance from industrial experts"
          Classes="Basic coding classes for non-technical professions"
          OneLine="Live & interactive training by industry experts"
          Interview="Course completion certificate from IBM"
          Fee="65,000"
          Subscription="1.5 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
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
              ProgramBot1="Learnbay provides industry-endorsed online data analytics training in Delhi. It has trained over 10,000 professionals all over India, including Delhi. The data analytics training is industry-demanding curriculum-based and draws applications from everyday business problems faced by organizations. The data analytics course with placement is the ideal solution for all of those who want to learn data analytics from scratch or want to enhance their knowledge in this field."
              ProgramBot2="The online Data analytics course in Delhi is a 4.5-months program with a weekly and 6- months program with a weekend batch facilitated by industry experts. We have developed the curriculum content keeping in mind industry expectations so that by taking this course, you can gain all-around knowledge on the subject of data analytics."
              ProgramBot3="In addition to getting a thorough grounding in the field of Data Analytics, this data analytics certification course will familiarize students with real-time technologies, techniques, and best practices used extensively by data analysts working in Delhi."
              ProgramHead4="Why should you choose the Learnbay data analytics course for your data analytics career?"
              ProgramHead5="Learnbay’s Data Analytics course in Delhi is closely coupled with the needs of the industry and training by experts in the field. They also conduct query resolution sessions. The purpose of this data analytics course with placement is to provide students with theoretical and practical knowledge to get ready for the real world. Classes are highly interactive with flexible hours and sessions. Students will have access to recorded videos and a discussion forum via an automated LMS. A Flexi pass gives them access to Learnbay's LMS for one year so that they can revise data analytics concepts and work on projects. This feature also allows them to switch their mentors and batches."
              ProgramHead6="Learnbay also offers coding classes to support non-technical learners in mastering the Basics of Programming."
              ProgramHead7="Know more about the Learnbay Data Analytics Course in Delhi."
              CertificationHead1="Data Analytics certification co-powered by IBM."
              CertificationBot1="Learnbay has developed a data analytics course in partnership with a renowned organization, IBM. Students will receive an IBM certificate upon completion of the data analytics course in Delhi. To earn this certification, students must successfully complete all modules, assessments, assignments, and projects. Following successful completion of the IBM exam, you will be eligible for IBM certification."
              CertificationBot2="This credential will make you a qualified candidate for data analyst jobs in Delhi."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleBot1="The modules of the IBM data analytics course are meticulously crafted to cater to the needs of various data analytics job roles in Delhi. The course is further divided into 8 modules which are supplemented with assignments, and real-time project works to facilitate experiential learning. This 4.5-months data analytics course covers important data analytics tools and techniques such as Advanced Excel, PowerBI, Time series analysis, as well as statistics and probability. Apart from this, you will also learn to create a database from scratch, design tables and queries, and analyze data using reporting apps."
              ModuleBot2="In order to support our non-technical learners, we have added an extra module of programming classes in Python and R."
              ModuleBot3="The fundamental training in data analytics course training includes:"
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
              JobHead1="Interview preparation process at Learnbay:"
              JobBot1="Learnbay Provides a dedicated job assistance program for its learners. Resume built-up sessions, interview preparations, access to the alumni network, and LinkedIn profile building are all part of this assistance feature. Additionally, our data analyst students will be trained through personalized mock interviews with various hiring Managers allowing them to develop confidence at the actual interview table."
              JobBot2="Many of our students have been placed in prestigious organizations in Delhi and all over India as a consequence of our close ties with MNCs and IBM."
              JobHead2="The demand for data analysts in Delhi:"
              JobBot3="Data Analytics is the study of extracting meaning from large data sets in order to gain useful insights. The skills and tools provided by this course will give you the knowledge, confidence, and hands-on experience to be able to go out into your organization and start making a difference."
              JobBot4="New Delhi is the leading IT city in India and the business hub of the Asia-Pacific region. Therefore, it is a major center for many offices, and thus there’s a dearth of data analysts in Delhi."
              JobBot6="Consequently, Data analytics course training in Delhi comes with lots of opportunities that offer students to develop their careers."
              ProjectsBot1="Learnbay instructors make sure that students have learned the in-demand concepts of data analytics with hands-on experience through a series of real-time projects. As part of the professional data analytics course, you will work on 5 industrial data analytics projects, including Fake news detection and color detection."
              ProjectsBot2="Aside from this, students can take advantage of our cloud lab feature to witness and learn from real-world projects from multinational corporations. Take a peek at some of the popular projects done by our students:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has over 250+ corporate partners across the globe, such as Adobe, IBM, Salesforce, Oracle, and many more. Numerous students have been successfully placed in profitable positions within 2 to 3  months of completing our data analytics course in Delhi."
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
            />
            <FAQNew
              FaqDatas={AnalyticsFaqDataD}
              DomainFaqDatas={AnalyticsDomainFaqDataD}
              PaymentFaqDatas={AnalyticsPaymentFaqDataD}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataD}
              CertificationFaqDatas={AnalyticsCertificationFaqDataD}
              jobFaqDatas={AnalyticsjobFaqDataD}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataD}
              SupportFaqDatas={AnalyticsSupportFaqDataD}
            />
          </div>
        </div>
                <LearnSupport />

        <CityText
          CityTextB="Data Analytics Course Certification Training locations in Delhi "
          CityText=" : Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
          CityTextLB="Locations Offered"
          CityTextL=" :Data Analytics Training in delhi, Data Analytics Course in delhi, Data Analytics Training in Connaught Place, Data Analytics Training in Karol Bagh , Data Analytics Institute in Delhi, Data Analytics Training in kamla nagar, Data Analytics Training in kalu sarai, Data Analytics Training in J N U, Data Analytics Training Institute in Connaught Place, Data Analytics Course in Connaught Place, Data Analytics Course in Saket, Data Analytics Course in old rajinder nagar, Data Analytics Course Connaught Place , Data Analytics Training in (N.S.P) Netaji Subhash Place, Data Analytics Training in Pitampura, Data Analytics Classes in Connaught Place, Data Analytics Classes in J N U, Data Analytics Classes in Connaught Place, Data Analytics Classes in Delhi, Data Analytics Course in vishwa vidyalaya, Data Analytics Training in kalu sarai, Data Analytics Certification in Delhi, Data Analytics Certification Training in Delhi, Data Analytics Certification in Connaught Place, Data Analytics Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Data Analytics Training, Best Data Analytics Course, Best Data Scientist course, Best Data Scientist Training"
        />
        <Footer />
      </main>
    </div>
  );
}
