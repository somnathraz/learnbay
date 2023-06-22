import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
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
  BusinessAFaqDataDu,
  BusinessAPaymentFaqDataDu,
  BusinessACapstoneFaqDataDu,
  BusinessACertificationFaqDataDu,
  BusinessAjobFaqDataDu,
  BusinessAMentorshipFaqDataDu,
  BusinessASupportFaqDataDu,
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
          Business Analyst Course in Dubai with IBM Certification
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll now in Learnbay's Business Analytics Training in Dubai and Gain Essential Skills from Industry Experts. Don't miss out on this opportunity. Enroll Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Dubai, Business Analytics training in Dubai, Business Analytics institute in Dubai, best Business Analytics institute in Dubai, Business Analytics course in Dubai, Business Analytics certification in Dubai, Business Analytics training institute in Dubai, advanced Business Analytics course in Dubai, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-dubai"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training Dubai"
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
 "name": "How to apply for business analytics course?",
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
 "name": "We provide Advanced business analytics course in Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
 },
 "tool": {
 "@type": "HowToTool",
 "name": "Data science, machine learning, artificial intelligence, data analytics, business analytics"
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
 "text": "Get enrollment in our business analytics course",
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
 "headline": "Business Analytics Course training in Dubai",
 "description": "Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics course in Dubai will enhance your career",
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
 "name": "What are the prerequisites for the Business Analytics Training Course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Business Analytics certification course in Dubai as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in the Business Analytics Certification course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Business Analytics Program in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this Data Science Course is about 6.5 months ( 200 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 5 months Monday to Friday - 2 hours/day Weekend batch - 6.5 months Saturday & Sunday - 3.5 hours/day"
 }
 },{
 "@type": "Question",
 "name": "What is the mode of Data Science training at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Business Analytics Program in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Business Analytics Program is INR 88,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 88,500/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,816/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip.Please check with our sales team to know more +917795687988"
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Business Analytics Program? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Group of 4+"
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Business Analytics Program at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We have a set of 5 Real-time projects from multiple industries live Healthcare, Banking, Finance, Insurance, Retail, etc."
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
 "text": "Yes, you will be awarded IBM accredited Business Analytics Certificate on successful course completion."
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
 "text": "Yes, we offer dedicated placement assistance by referring your profile through our partnered consultancies and companies."
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
"@type": "EducationEvent","name": "Business Analytics Course training in Dubai",
"description": "Business Analytics Course in Dubai. Learnbay is Advanced Business Analytics Course Training Institute in Dubai. Business Analytics course in Dubai will enhance your career",
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
 "name": "Learnbay - Business Analytics Course Training in Dubai",
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
          deskTopPara="Industrial program for working professionals"
          mTopPara="Industrial program for working professionals"
          spanTitleText="For Non-tech Professionals"
          spanMTitleText="For Non-tech Professionals"
          title="Business Analytics Course Training in Dubai"
          mTitle="Business Analytics Course Training in Dubai"
          desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Businesss+Analytics.png"
          width="900"
          height="762"
          alt="business analytics course training in dubai"
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
          dataScienceCounselling={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="business analytics course training in dubai"
            title="Why Enroll In Business Analytics Course Training In Dubai?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with PRODUCT Based Companies experts."
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
              ProgramHead1="What is the Business Analytics training Program co-powered by IBM?"
              ProgramBot1="With the aim of providing real-world business-oriented training to aspirants, Learnbay institute has launched a business analytics course in Dubai. The course is designed to expose the students to a range of different business analytics concepts and develop hands-on skills related to various aspects of the business. This 5 months  IBM business analytics course is intended for professionals and individuals who want to gain a solid understanding of how to use information and statistics to make better business decisions."
              ProgramHead3="What are the benefits of the business analytics course in Dubai?"
              ProgramBot3="Learnbay’s Professional business analytics course will transform you from being an ordinary analyst to a strategic contributor with effective communication skills to all levels of organizations."
              ProgramBot31="Learnbay classes are highly flexible, allowing students to switch batches and mentors at any time. Students will be taught through live interactive classes, case studies, and projects related to the business world. Flexi subscription is an exceptional feature of Learnbay that allows students with unlimited access to Learnbay LMS. This lets them pause and resume their studies at their own pace."
              ProgramBot32="Know more about Learnbay’s Business Analytics Course in Dubai"
              CertificationBot1="On successful completion of our 5-months business analytics course training, along with assessments and projects, you will receive IBM Certificates. To pass the certification process, you must complete all the assignments, case studies, and projects within due dates."
              CertificationBot2="As a result of your IBM accreditation, Employers will notice your credentials and consider you for several opportunities in Dubai firms."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
              JobHead1="Job orientation program in Business analytics training by Learnbay"
              JobBot1="Learnbay offers job assistantships for those who complete the business analytics course in Dubai. This support involves sessions on soft skills training (including presentation), resume writing, and project portfolio management. Apart from this, we also offer 1:1 mock interviews with the leading organizations to practice your interview abilities. Our career experts ensure that you are eligible to ace any business analytics job interview at the earliest given a chance. Learnbay has a great network of over 200 hiring partners in Dubai and other countries."
              JobHead2="Scope and career opportunities of Business analytics in Dubai :"
              JobBot3="Dubai is a global business center and has a large pool of entrepreneurs who want to get their business online. As a result, several new businesses are opening up day by day. Business analysts and BI professionals are in high demand because of the crucial role they play in every business. It can be a fulfilling career path for those who enjoy sorting, viewing, and analyzing data to solve problems, give business intelligence, and make decisions."
              JobBot4="In Dubai, you can apply for a variety of positions, including senior business analyst, Quantitative analyst, Business translator, Marketing Analyst, Business Intelligence analyst,  Database administrator, and many more."
              JobBot5="By taking this professional business analytics course, you will learn how to use the power of analytics to build a strong career in BI and business analytics."
              ProjectsBot1="Learnbay’s Business Analytics Certification learning experience is integrated with real-world projects to assist students in gaining real-world experience and excelling in their Business analyst careers."
              ProjectsBot2="During our IBM business analytics training, you will work on 5 live projects from the MNCs. This hands-on practice will boost your BI tools and techniques to prepare for the real world. Learnbay Business Analytics course comes with free access to a premium cloud lab, which has unlocked the way to this incredible industrial experience. The following are the projects done by our students:"
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
              Projectsp4="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              AlumniBot1="Over 700+ students have benefitted from our IBM business analytics course in Dubai, which has aided them in transitioning their careers from various non-technical domains to business analytics. Many Learnbay alumni are proudly working in well-known startups and MNCs like Oracle, Infosys, and other Dubai-based companies. Some of our alumni graduates have shared their experiences below:"
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
              alt1="business analytics course training in dubai"
              alt2="business analytics course training in dubai"
              alt3="business analytics course training in dubai"
              alt4="business analytics course training in dubai"
              alt5="business analytics course training in dubai"
              alt6="business analytics course training in dubai"
              alt7="business analytics course training in dubai"
              alt8="business analytics course training in dubai"
              alt9="business analytics course training in dubai"
            />
            <FAQNew
              FaqDatas={BusinessAFaqDataDu}
              PaymentFaqDatas={BusinessAPaymentFaqDataDu}
              CapstoneFaqDatas={BusinessACapstoneFaqDataDu}
              CertificationFaqDatas={BusinessACertificationFaqDataDu}
              jobFaqDatas={BusinessAjobFaqDataDu}
              MentorshipFaqDatas={BusinessAMentorshipFaqDataDu}
              SupportFaqDatas={BusinessASupportFaqDataDu}
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
