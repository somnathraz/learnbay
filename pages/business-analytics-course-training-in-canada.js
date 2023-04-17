import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  BusinessAFaqDataCa,
  BusinessAPaymentFaqDataCa,
  BusinessACapstoneFaqDataCa,
  BusinessACertificationFaqDataCa,
  BusinessAjobFaqDataCa,
  BusinessAMentorshipFaqDataCa,
  BusinessASupportFaqDataCa,
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
          Business Analytics Course in Canada | Business Analytics Training in
          Canada
        </title>
        <meta
          name="description"
          content="Business Analytics Course in Canada. Learnbay is Advanced Business Analytics Course Training Institute in Canada. Business Analytics course in Canada will enhance your career"
        />
        <meta
          name="keywords"
          content="Business Analytics course in Canada, Business Analytics training in Canada, Business Analytics institute in Canada, best Business Analytics institute in Canada, Business Analytics course in Canada, Business Analytics certification in Canada, Business Analytics training institute in Canada, advanced Business Analytics course in Canada, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-canada"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training Canada"
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
 "name": "We provide Advanced data science course in Canada,Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai,  Dubai"
 },
 "tool": {
 "@type": "HowToTool",
 "name": "Data science, machine learning, artificial intelligence, data analytics,business analytics"
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
 "headline": "business analytics course training in canada",
 "description": "Business Analytics Course in Canada. Learnbay is Advanced Business Analytics Course Training Institute in Canada. Business Analytics course in Canada will enhance your career",
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
 "name": "What are the prerequisites for the Business Analytics Training Course in Canada?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Business Analytics certification course in Canada as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in the Business Analytics Certification course in Canada?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Business Analytics Course in Canada?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": " The duration of this Business Analytics Course is about 6.5 months ( 200 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 5 months Monday to Friday - 2 hours/day Weekend batch - 6.5 months Saturday & Sunday - 3.5 hours/day."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of Business Analytics training at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online Business Analytics training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions. Note: This 100% job assistance policy is only specific to “100% job assistance | Data Science & AI Certification Course”"
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Business Analytics Program in Canada?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Business Analytics Program is INR 88,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 88,500/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": " Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,816/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more +917795687988."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Business Analytics Program? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Business Analytics Program at Learnbay?.",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": " Candidates are advised to read Click here to download the list of the projects."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": " We have a set of 5 Real-time projects from multiple industries live Healthcare, Banking, Finance, Insurance, Retail, etc. Click here to download the list of the projects."
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
"@type": "EducationEvent","name": "Data Science Course Training in canada",
"description": "Learnbay offers a Data Science course in canada, the most comprehensive Data Science course in the market, covering the complete Data Science lifecycle.",
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
"endDate": "2022-12-31",
"url" : "https://www.learnbay.co/","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Data Science, business analytics course training in canada",
 "address": {
  "@type": "PostalAddress",
  "streetAddress": "#1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102 (Above Sangam Sweets)",

  "addressLocality": "HSR Sector 3",
  "postalCode": "560102",
  "addressCountry": "Bengaluru, Karnataka,INDIA"
},
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "12.914745887585838",
  "longitude": "77.64087553886982"
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
          deskTopPara="Industrial Business Analytics Program for working professionals"
          mTopPara="Industrial Business Analytics Program for working professionals"
          title="Business Analytics Course"
          mTitle="Business Analytics Course"
          spanMTitleText="Training In Canada"
          spanTitleText="Training In Canada"
          desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Businesss+Analytics.png"
          width="900"
          height="762"
          alt="business analytics course training in canada"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Early professionals"
            p2="12 LPA - 20 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹  10,817/month"
          />
        </div>
        <ProgramFee
          Fee="₹  1,10,000 + 18% GST"
          Emi="₹  10,817/month"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="business analytics course training in canada"
            title="Why Enroll In Business Analytics Course Training In Canada?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
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
              ProgramHead1="What is the  Professional Business Analytics Certification program offered by Learnbay in Canada?"
              ProgramBot1="Learnbay is one of the most prestigious institutes offering Business Analytics (BA) certification courses in Canada. This BA course is geared toward students who have a background in mathematics, strong analytical and interpretive skills, and are keen on solving business problems. The Business analytics course modules have been thoughtfully designed by experienced professionals to adhere to the latest industry trends and standards. Learnbay trainers are experts in developing business analyst enthusiasts and assisting them in getting placed in top-tier organizations around Canada. They also conduct 1-on-1 doubt clearing sessions for effective learning."
              ProgramBot2="Indeed, our IBM Business Analytics course will prepare future BA professionals on data-driven methods to make better business decisions in the areas of marketing and Sales, Finance, and others."
              ProgramBot3="Course deliverables involve 200 hours of live sessions, presentations, case study discussions, and multiple real-world projects that will help you stay ahead in the game and keep growing. Overall, Learnbay serves as a one-stop place for business analyst aspirants seeking solid knowledge and hands-on experience with various business analytics concepts."
              ProgramHead4="What will you get out of this Business Analytics course by Learnbay?"
              ProgramBot4="Through Learnbay’s business analytics course, you'll master the essential quantitative and statistical skills needed to compete in today's data-driven business world."
              ProgramBot5="The outcome of the business analytics course in Canada is a business problem analysis and solution prototype. A self-study approach has been adopted in this course to become a pro-business analyst."
              ProgramBot6="The best part about Learnbay is that class schedules are both affordable and flexible, making it simple to switch between batches and trainers at any time."
              ProgramBot8="Flexi subscriptions are yet another feature that provides you with limitless access to Learnbay's LMS. This enables learners to halt and continue studies in their own comfort."
              ProgramBot9="Here, trainers make use of project-based learning to develop students' skills in problem-solving and professional communication. The business analytics course training provides a balanced education between business principles and IT methods so that students can effectively communicate with both management and technical teams within their organizations."
              ProgramBot10="Know more about Learnbay’s Business Analytics Course in Canada."
              CertificationHead1="Certification Process at Learnbay:"
              CertificationBot1="Learnbay has established partnerships for all its data science and business analytics courses. Students will be issued an IBM certificate on successful completion of the business analytics course with placement. To pass the certification process, it is important to pay close attention and complete all assignments and case studies on time."
              CertificationBot2="As a result, employers in Canada will notice your IBM accreditation and consider you for open positions in business analytics jobs. We also have partnered with major tech giants in order to promote the talents of our business analytics students."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleHead1="What is the syllabus for this business analytics training course?"
              ModuleHead2="Support for non-programmers:"
              ModuleBot3="As a part of our business analytics curriculum, a series of fundamental programming in python and R are held for non-technical aspirants. Thus, applicants from all backgrounds are encouraged to apply for this course."
              ModuleHead3="BA Module:"
              ModuleBot4="Our cutting-edge business analytics course training is well suited to the needs of today's business executives. A course that meets the demands of the marketplace by introducing students to concepts in business analysis, database design, data warehousing, business intelligence, data visualization tools, and methods."
              ModuleBot41="In this course, you will also learn how to use powerful analytics and Business Intelligence tools such as SAS, R, and Tableau to gain a competitive advantage in the business technology industry."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
              JobHead1="Interview Preparation program at Learnbay:"
              JobBot1="Learnbay offers a dedicated feature of a job assistance program for its students. This support includes strong portfolio building and soft skills training. In addition, we also offer 1:1 mock interviews with various hiring Managers to assist you in gaining the confidence to crack difficult interviews. Apart from this, we also prepare our students with presentation and communication skills which are very crucial for business analyst roles."
              JobHead2="Scope of business analytics in Canada:"
              JobBot3="Business analytics is the term for the use of data analysis and statistical methods to help make business decisions. A typical business analyst needs to analyze and manage data for business decision-making. The main objective of a business analyst is to detect areas of opportunity and risk, as well as identify and quantify the sources of these areas, to improve overall business performance. They must be familiar with the company’s workflow."
              JobBot4="Business analytics is a vibrant and fast-growing business sector in Canada. Today, Canadian firms face increasing competitive pressure to understand and exploit their data with greater speed and agility. The next wave of business excellence is being fueled by 'business analytics,' which is changing the competitive landscape."
              JobBot6="In our business analytics course, students will be trained to convert data into actionable insights to provide a competitive edge to organizations across Canada."
              ProjectsBot1="Learnbay has a great initiative of cloud lab features that enables students to access and learn via live business analytics projects of MNCs."
              ProjectsBot2="As a part of this IBM business analytics course, you will get a chance to work on 5 industry projects. The talent and experience of our dedicated experts help students in completing successful case studies and projects. They equip you with the tools, capabilities, and expertise necessary to successfully tackle business analytics projects. The following are the projects undertaken by our students:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH1="Amazon Customer Review Analysis"
              Projectsp1="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH3="BMW Used Car Price Optimization"
              Projectsp3="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH4="Samsung Health Monitor App"
              Projectsp4="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              AlumniBot1="Thousands of Learnbay alumni have been placed in prominent start-ups and Fortune 500 companies like Infrasoft Technologies, IBM, and Accenture. Many students have benefitted from our business analytics course, which has helped them in developing their latest business analytics tools as well as a hike in compensation. Even 700+ students have successfully switched into business analytics careers from different non-technical domains. Some of our alumni graduates have shared their experiences:"
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
              alt1="business analytics course training in canada"
              alt2="business analytics course training in canada"
              alt3="business analytics course training in canada"
              alt4="business analytics course training in canada"
              alt5="business analytics course training in canada"
              alt6="business analytics course training in canada"
              alt7="business analytics course training in canada"
              alt8="business analytics course training in canada"
              alt9="business analytics course training in canada"
            />
            <FAQNew
              FaqDatas={BusinessAFaqDataCa}
              PaymentFaqDatas={BusinessAPaymentFaqDataCa}
              CapstoneFaqDatas={BusinessACapstoneFaqDataCa}
              CertificationFaqDatas={BusinessACertificationFaqDataCa}
              jobFaqDatas={BusinessAjobFaqDataCa}
              MentorshipFaqDatas={BusinessAMentorshipFaqDataCa}
              SupportFaqDatas={BusinessASupportFaqDataCa}
            />
          </div>
        </div>
        <LearnSupport />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
