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
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  BusinessAFaqDataM,
  BusinessAPaymentFaqDataM,
  BusinessACapstoneFaqDataM,
  BusinessACertificationFaqDataM,
  BusinessAjobFaqDataM,
  BusinessAMentorshipFaqDataM,
  BusinessASupportFaqDataM,
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
        Best Business Analyst Certification Course in Mumbai
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll now in Learnbay's Business Analyst Program in Mumbai For Top-notch Training, Live Projects, IBM Certification and Best Career Placement Assistance."
        />
        <meta
          name="keywords"
          content="Enroll now in Learnbay's Business Analyst Program in Mumbai For Top-notch Training, Live Projects, IBM Certification and Best Career Placement Assistance."
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-mumbai"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        {/* <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
        /> */}
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
 "name": "How to apply for Business Analytics Course ?",
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
 "name": "We provide business analytics course training in mumbai"
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
 "headline": "Business Analytics Course Training In Mumbai",
 "description": "Business Analytics Course in Mumbai. Learnbay is Advanced Business Analytics Course Training Institute in Mumbai. Business Analytics course in Mumbai will enhance your career",
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
 "name": "What are the prerequisites for the Business Analytics Training Course in Mumbai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Business Analytics certification course in Mumbai as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in the Business Analytics Certification course in Mumbai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Business Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1.5 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of the Business Analytics Program in Mumbai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this Business Analytics Course is about 6.5 months ( 200 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 5 months Monday to Friday - 2 hours/day Weekend batch - 6.5 months Saturday & Sunday - 3.5 hours/day"
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
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for the Business Analytics Program in Mumbai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Business Analytics Program is INR 88,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for INR 88,500/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,816/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip. Please check with our sales team to know more +917795687988"
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for the Business Analytics Program? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Business Analytics Program at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Refund/Cancellation policy before enrolling in the program."
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
 "text": "Our mentors will provide Business Analytics training to the students until the completion of the course."
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
"@type": "EducationEvent","name": "Business Analytics Course Training In Mumbai",
"description": "Business Analytics Course in Mumbai. Learnbay is Advanced Business Analytics Course Training Institute in Mumbai. Business Analytics course in Mumbai will enhance your career",
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
 "name": "Learnbay - Data Science, Data Analytics Course Training in Bangalore",
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
          deskTopPara="Industry-paced Project-based Training"
          mTopPara="Industry-paced Project-based Training"
          title="Business Analytics Course "
          mTitle="Business Analytics Course"
          spanMTitleText="Training in Mumbai"
          spanTitleText="Training in Mumbai"
          desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Businesss+Analytics.png"
          width="900"
          height="762"
          alt="business analytics course training in mumbai"
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
            alt="business analytics course training in mumbai"
            title="Why Enroll In Business Analytics Course Training In Mumbai?"
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
              ProgramHead1="Learnbay Business Analytics Training Program in Mumbai- What does it offer?"
              ProgramBot1="The business analytics certification of Learnbay available in Mumbai is widely considered one of the best BI courses in this metro city. These 5 months, the Business Analytics program of Learnbay has already earned huge popularity amongst the early stage working professionals of Mumbai- mainly professionals with non-technical domain experience. Even the course design of this BA training course has helped a number of business analytics aspirants have 6 months or more career gaps."
              ProgramBot2="Keeping the current and fast-changing trends in analytical tools and software uses, we have designed our course in such a way so that learners can learn the basic concept behind the Business Intelligence tools or applications they learn. The tools might get changed tomorrow, but having the concept behind the tool helps our learners adapt to any newer BI tool quickly. "
              ProgramHead3="How has the Learnbay Business Analytics Program becomes the best industrial training option for BI career seekers in Mumbai?"
              ProgramBot3="At Learnbay, the entire business analyst training has been created based on the current industry expectations of Mumbai city. We provide our learners with a personalized learning experience. Learnbay mentors have extensive experience and assist the learners in becoming future-ready business analysts. It uses a hands-on learning approach that incorporates interactive sessions with renowned experts and real-world business analytics projects from various industries."
              ProgramBot31="We keep our batch size small so that every student gets personalized attention from their instructors. Apart from that, the concerned online business analytics certification comes with a 1-year flexi subscription to Learnbay LMS. This subscription makes the course a perfect fit for working professionals because, without any headache, you can easily switch your batches and instructors at your convenience."
              ProgramBot32="A second reason for choosing this Learnbay BA certification in Mumbai is cost-effectiveness. Although the course offers you an offline dedicated college training program, instead of paying 2 to 3 lakh, you have to spend only 65K INR.  
            Know more about Business Analytics Certification Program in Mumbai by Learnbay."
              CertificationHead1="IBM Business Analytics Course in Mumbai"
              CertificationBot1="The industrial collaboration of IBM backs up the industrial business analytics training that we provide at Learnbay in Mumbai. So on the successful completion of the 5 -month data analytics learning session along with all of the live projects and assignments, you get IBM Business analytics certification. Due to the IBM certification batches to your portfolio, the chances of getting noticed by top recruiters get geared up by 110%. This also makes Learnbay best for the data analytics courses in Mumbai."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleHead1="How do Learnbay business analytics modules ensure a lucrative BI analyst career in Mumbai?"
              ModuleBot1="Learnbay's business analytics course structure includes more than eight tools and modules. Each module has five-plus sub-modules- all are sequentially designed using an appropriate bottom-up teaching approach. That means you first learn the basics of analytics and gradually approach the advanced industrial application."
              ModuleBot2="The course becomes a profitable fit for non-programmer candidates too. The reason for the same includes easy to adapt and dedicated additional python for business analytics sessions for candidates with zero coding experience. Other than that, it also covers big data analytics tools like apache spark, dashboarding tools like Power BI, basics to moderate stage of statistics, etc."
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
              JobHead1="How is the job orientation program associated with Learnbay business analytics training in Mumbai?"
              JobBot1="The concerned business analytics course equips more than four devoted sessions on job orientation. Such sessions include scope discussion available for industry competent business analytics professionals in Mumbai as well as abroad. Apart from that, you will find sessions on the mock interview, resume help, and online project portfolio management guidance. The Learnbay business analytics job orientation sessions aim to make you eligible for cracking any business analytics job interview at the first chance."
              JobBot5="We own a very strong network of 200+ hiring partners across Mumbai. About 700+ Learnbay alumni are already working in the companies like Adobe, Manthan, Salesforce, JP Morgan, and Accenture."
              JobHead2="You can target business analytics job roles in Mumbai after getting the IBM Business Analytics Course Completion certificate?"
              JobBot3="The most demanding and well-known job role available in Mumbai for a business analytics professional is Junior/Senior business analyst. However, Mumbai is adapting the BA technology so rapidly- no matter whether it's a startup or a multinational organization. So few of the least know, but highly available and fairly paid business analytics job roles in Mumbai are"
              JobBot4="Modeler (aka Quantitative Analyst),
    Consultant BA,
    Database Administrator,
    Business Translator,
    Market research analyst,
    Principal Data Analyst (advanced level),
    Chief Data Officer (advanced level)."
              ProjectsHead1="How do business analytics projects in the Learnbay BA training program make you properly industry competent?"
              ProjectsBot1="In our business analytics training program, you learn from live projects. Via 5 live MNC BA projects trending in Mumbai, you achieve knowledge of real-world BI practices. The premium cloud lab access you get for free with your Learnbay Business Analytics course subscription opened up the door to such an amazing industrial experience. The 5 projects cover different industries keeping the main focus on finance and marketing."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-co.png"
              ProjectsH1="Dataco Smart Supply chain"
              Projectsp1="An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/uber.png"
              ProjectsH3="Uber’s Rider Demand forecasting"
              Projectsp3="Make a demand forecasting model based on specific time period rider demands. Such a model will help both riders and cab drivers to ensure the least possible waiting time. You can include measures like latitude and longitude identification."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/morgam.png"
              ProjectsH4="JP Morgan’s Smart Investment"
              Projectsp4="JP Morgan offers tax-friendly alternatives to traditional insurance policies. You can help them with projects like precise insurance premiums forecasting. Such projects can help achieve overall higher premium values by proper target marketing with the help of your random forest algorithm abilities."
              AlumniBot1="In 2020 we had 70+ hiring partners, but our students' business analytics interview success rate has helped us expand the network with 250+ company collaborations in Mumbai now. It's not only the junior business analyst positions that our students are enjoying- rather, but 300+Learnbay alumni are also successfully handling their mid to senior-level BA job roles in several startups and MNCs across the country.
    "
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
              alt1="business analytics course training in mumbai"
              alt2="business analytics course training in mumbai"
              alt3="business analytics course training in mumbai"
              alt4="business analytics course training in mumbai"
              alt5="business analytics course training in mumbai"
              alt6="business analytics course training in mumbai"
              alt7="business analytics course training in mumbai"
              alt8="business analytics course training in mumbai"
              alt9="business analytics course training in mumbai"
            />
            <FAQNew
              FaqDatas={BusinessAFaqDataM}
              PaymentFaqDatas={BusinessAPaymentFaqDataM}
              CapstoneFaqDatas={BusinessACapstoneFaqDataM}
              CertificationFaqDatas={BusinessACertificationFaqDataM}
              jobFaqDatas={BusinessAjobFaqDataM}
              MentorshipFaqDatas={BusinessAMentorshipFaqDataM}
              SupportFaqDatas={BusinessASupportFaqDataM}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Business Analytics Course Certification Training locations in Mumbai "
          CityText=" : A I staff colony [400029], Aareymilk Colony [400065], Agripada [400011], Airport [400099], Ambewadi [400004], Andheri [400053], Andheri East [400069], Andheri Railway station [400058], Antop Hill [400037], Asvini [400005], Azad Nagar [400053], B P t colony [400003], B.N. bhavan [400051], B.P.lane [400003], Bandra West [400050], Bandra(east) [400051], Bangur Nagar [400090], Bazargate [400001], Best Staff colony [400012], Bharat Nagar [400007], Bhawani Shankar [400028], Borivali [400091], Borivali East [400066], Borvali West [400092], C G s colony [400013], Central Building [400020], Century Mill Chakala Midc [400093], Chamarbaug [400012], Charkop [400067], Chaupati [400004], Chinchbunder [400009], Chinchpokli [400011], Churchgate [400020], Colaba [400005], Cotton Exchange [400033], Cumballa Hill [400026], Dadar [400014], Dahisar [400068], Danda [400052], Daulat Nagar [400066], Delisle Road [400013], Dharavi [400017], Dockyard Road [400010], Dr Deshmukh marg [400026], Falkland Road [400008], Girgaon [400004], Gokhale Road [400028], Goregaon [400062], Goregaon East [400063], Government Colony [400051], Gowalia Tank [400026], Grant Road [400007], H.M.p. school [400058], Haffkin Institute [400012], Haines Road [400011], Hajiali [400034], Hanuman Road [400057], High Court bulding [400032], Holiday Camp [400005], Irla [400056], Ins Hamla [400095], International Airport [400099], J.B. nagar [400059], J.J.hospital [400008], Jacob Circle [400011], Jogeshwari East [400060], Jogeshwari West [400102], Juhu [400049], Kalachowki [400033], Kalbadevi [400002], Kamathipura [400008], Kandivali East [400101], Kandivali West [400067], Kapad Bazar [400016], Ketkipada [400068], Khar Colony [400052], Kharodi [400095], Kherwadi [400051], Kidwai Nagar [400031], L B s n e collage [400033], Lal Baug [400012], Liberty Garden [400064], M A marg [400008], M.P.t. [400001], Madh [400061], Madhavbaug [400004], Magthane [400066], Mahim [400016], Malabar Hill [400006], Malad [400064], Malad East [400097], Malad West dely [400064], Mandapeshwar [400103], Mandvi [400003], Mantralaya [400032], Marine Lines [400020], Marol Bazar [400059], Masjid [400003], Matunga Railway workshop [400019], Mazgaon [400010], Mori Road [400016], Motilal Nagar [400104], Mumbai Central [400008], Mumbai[400001], N . s.patkar [400007], Nagardas Road [400069], Nagari Niwara [400065], Naigaon [400014], Nariman Point [400021], New Prabhadevi road [400025], New Yogakshema [400021], Noor Baug [400003], Null Bazar [400003], Opera House [400004], Orlem [400064], Oshiwara [400102], Parel [400012], Parel Rly work shop [400003], Prabhadevi [400025], Princess Dock [400009], Rajbhavan [400035], Rajendra Nagar [400066], Ramwadi [400002], Ranade Road [400028], Rani Sati marg [400097], Reay Road [400033], S R p f camp [400060], S Savarkar marg [400028], S V marg [400007], S. c. court [400002], S. k.nagar [400066], Sahar P & t colony [400099], Santacruz Central [400054], Santacruz P&t colony [400029], Santacruz(east) [400055], Santacruz(west) [400054], Secretariate [400032], Seepz [400096], Sewri [400015], Sharma Estate [400063], Shivaji Park [400028], Shroff Mahajan [400002], Stock Exchange [400001], Tank Road [400033], Tardeo [400007], Thakurdwar [400002], Tulsiwadi [400034], V J b udyan [400027], V K bhavan [400010], V.P. road [400052], V.W.t.c. [400005], Vakola [400055], Vesava [400061], Vidyanagari [400098], Vileeparle (east) [400057], Vileparle(west) [400056], Wadala [400031], Worli [400018], Worli Colony [400030], 400701[Navi Mumbai], 400602[Thane]."
          CityTextLB="Locations Offered"
          CityTextL=" :Business Analytics course training in Mumbai, Business Analytics course training in Thane, Business Analytics course in Bhandup, Business Analytics Training in Chembur, Business Analytics course institute in powai, Business Analytics course in Tehsil, Business Analytics training in Ghatkopar, Business Analytics institute in Sion, Business Analytics certification in Shivaji nagar, Business Analytics course in Mulund, Business Analytics training in sewri, Business Analytics institute in Kannamwar nagar, Business Analytics course in Parel, Business Analytics certification in Anushakti Nagar, Business Analytics Training in Sakinaka, Business Analytics institute in kharodi, Business Analytics certification in Madh, Business Analytics course training in malad, Business Analytics course training in Andheri, Business Analytics training in Coal Bunder, Business Analytics institute in Dharavi, Business Analytics certification in Worli, Business Analytics course in Aswini, Business Analytics training in Goregaon, Business Analytics institute in Kandivali, Business Analytics course in Borivali, Business Analytics certification in juhu, Business Analytics training in Marol Naka, Business Analytics institute in Jogheswari, Business Analytics certification in vakola, Business Analytics course in Bandra, Business Analytics training in Kurla, Business Analytics course training in navi mumbai, Business Analytics course training in Kalyan ."
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
