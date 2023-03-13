import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AdvanceFaqDataB,
  AdvanceDomainFaqDataB,
  AdvancePaymentFaqDataB,
  AdvanceCapstoneFaqDataB,
  AdvanceCertificationFaqDataB,
  AdvancejobFaqDataB,
  AdvanceMentorshipFaqDataB,
  AdvanceSupportFaqDataB,
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
        Data Science Course in Bangalore - Learnbay
        </title>
        <meta
          name="description"
          content="Learn Data Science Course in Bangalore from advanced certification oriented data science training institute with IBM Certified Trainers."
        />
        <meta
          name="keywords"
          content="Data Science course in Bangalore, Data Science training in Bangalore, Data Science institute in Bangalore, best Data Science institute in Bangalore, data scientist course in Bangalore, data scientist certification in Bangalore, Data Science training institute in Bangalore, advanced Data Science course in Bangalore, Data Science course with Placement Assistance, Data Science course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-course-training-in-bangalore"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
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
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-bangalore"
        />
        <meta
          property="og:title"
          content="Data Science Course Training In Bangalore with Placement Assistance"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Data Science Course in Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course Training In Bangalore with Placement Assistance"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Science Course Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
        />
        <meta
          name="twitter:description"
          content="Data Science Course Bangalore. We are Advanced Data Science Course Certification Training Institute in Bangalore. Data science course will enhance your career."
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Learnbay - Data Science, Data Analytics Course Training in Bangalore",
  "image": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100",
  "@id": "",
  "url": "https://www.learnbay.co/data-science-course-training-in-bangalore",
  "telephone": "08861279311",
  "priceRange": "70,999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1090 1st floor, 18th Cross Rd, above Sangam Sweets, Sector 3, HSR Layout ",
    "addressLocality": "Bangalore",
    "postalCode": "560102",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9117946,
    "longitude": 77.6411634
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/learnbay/",
    "https://twitter.com/Learnbay",
    "https://www.instagram.com/learnbayofficial/",
    "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
    "https://www.linkedin.com/company/learnbay/",
    "https://www.learnbay.co/data-science-course-training-in-bangalore"
  ]
}
} `,
          }}
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
 "headline": "Data Science Course Training in Bangalore",
 "description": "Data Science Course in Bangalore. Learnbay is Advanced Data Science Training Course Institute in Bangalore with 100% job assistance",
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
 "name": "What are Data Science Training courses available at Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance."
 }
 },{
 "@type": "Question",
 "name": "What are the prerequisites for these Data Science training Courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this Data Science Foundation course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-Programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in these advanced data science courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of these advanced data science courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day, Foundational Data Science and AI Training course (220+ hours) :- Weekday batch - 6 months, Weekend batch - 8 months, Advance Data Science and AI Certification course (270+ hours) :- Weekday batch - 7 months, Weekend batch - 9 months, Data Science and AI Certification Course for Managers and Leaders (340+ hours) :- Weekday batch - 11 months, Weekend batch - 13 months, Data Science and AI Training with Placement Assistance (380+ hours) :- Weekday batch - 13 months, Weekend batch - 15 months."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of Data Science Course In Bangalore at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Bangalore, At Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
 }
 },{
 "@type": "Question",
 "name": "What are the available elective domain options in the different data science training courses of Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy."
 }
 },{
 "@type": "Question",
 "name": "Which data science specialization domain elective is best suited for me?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
 }
 },{
 "@type": "Question",
 "name": "Why is domain specialization important in professional data science certification?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "After enrolling in the advanced data science courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
 }
 },{
 "@type": "Question",
 "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible data science courses?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and AI Training with Placement Assistance- All domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
 }
 },{
 "@type": "Question",
 "name": "What if I don't have any prior experience in any domain?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "If you don't have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects."
 }
 },{
 "@type": "Question",
 "name": "Can I change my domain electives later?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for Data Science Certifications courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and AI Training course is 88,500/- inclusive of GST. Advance Data Science and AI Certification course is 1,12,100/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,23,900/- inclusive of GST. Data Science and AI Training with Placement Assistance is 1,47,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for these Data Science Certification courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for these Data Science training courses available in Bangalore? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
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
 "name": "How many capstone projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Placement Assistance- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Pune? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Placement Assistance- 15 projects. Click here to download the list of the projects."
 }
 },{
 "@type": "Question",
 "name": "How will the projects be executed in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
 }
 },{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
 },{
 "@type": "Question",
 "name": "How long will I get support for job assistance at Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year. What is a job-readiness program? The Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
 }
 },{
 "@type": "Question",
 "name": "What is an interview guarantee feature?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In case you choose the Job or 100% job assistance then you can access this added facility. If you don’t get a job within 6 months of your course completion, we will initiate a full refund of your course fees. Note: Terms and conditions applied"
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
 "name": "Until when do the students get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our mentors will provide data science training to the students until the completion of the course."
 }
 },{
 "@type": "Question",
 "name": "Can a Learnbay student in Pune choose to study from their desired mentor?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
 }
 },{
 "@type": "Question",
 "name": "When is the job assistance provided at Learnbay and how long will I get it?",
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
"@type": "EducationEvent","name": "Data Science Course Training in Bangalore",
"description": "Learnbay offers a Data Science course in Bangalore, the most comprehensive Data Science course in the market, covering the complete Data Science lifecycle.",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
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
  "name": "Learnbay - Artificial Intelligence(Ai), Artificial Intelligence(Ai) Course Training in Bangalore",
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
        cityText={true}
          dataScience={true}
          deskTopPara="Foundational and Advance Job-ready Program"
          mTopPara="Foundational and Advance Job-ready Program"
          title="Data Science Course in Bangalore"
          mTitle="Data Science Course in Bangalore"
          desc="Enhance your Data Science career with our comprehensive Data Science course in Bangalore with IBM Certification. Our advanced Data Science training in Bangalore will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters to gain the most in-demand data science and AI skills."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course2.png"
          width="900"
          height="762"
          alt="data science course in bangalore"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Global Recognition"
            p11="From IBM"
            p2="Industry Standard"
            p22="Training"
            p3="Career Assistance"
            p33="For Professionals"
            p4="Financing as low as"
            p44="₹ 9,342/month"
          />
        </div>
        <ProgramFee
          Fee="₹95,000 + GST"
          Emi="₹ 9,342/month"
          dataScience={true}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{"@context": "http://schema.org",
"@type": "EducationEvent",
"name": "Data Science Course",
"description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
"image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
"performer":"Learnbay",					 
"offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-15"},"startDate":"2022-12-23","endDate": "2023-08-20","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","duration":"50",
											  
"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": {"@type": "VirtualLocation", 
 "url": "https://www.learnbay.co/data-science-course-training-in-bangalore/" 
 },
 
 
"organizer": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
}
 
 
 }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{"@context": "http://schema.org",
"@type": "EducationEvent",
"name": "Data Science Course",
"description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
"image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
"performer":"Learnbay",					 
"offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-25"},"startDate":"2023-01-06","endDate": "2023-08-20","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","duration":"50",
											  
"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": {"@type": "VirtualLocation", 
 "url": "https://www.learnbay.co/data-science-course-training-in-bangalore/" 
 },
 
 
"organizer": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
}
 
 
 }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{"@context": "http://schema.org",
"@type": "EducationEvent",
"name": "Data Science Course",
"description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
"image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
"performer":"Learnbay",					 
"offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-25"},"startDate":"2023-01-08","endDate": "2023-08-20","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","duration":"50",
											  
"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": {"@type": "VirtualLocation", 
 "url": "https://www.learnbay.co/data-science-course-training-in-bangalore/" 
 },
 
 
"organizer": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
}
 
 
 }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{"@context": "http://schema.org",
"@type": "EducationEvent",
"name": "Data Science Course",
"description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
"image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
"performer":"Learnbay",					 
"offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-25"},"startDate":"2023-01-13","endDate": "2023-08-20","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","duration":"50",
											  
"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": {"@type": "VirtualLocation", 
 "url": "https://www.learnbay.co/data-science-course-training-in-bangalore/" 
 },
 
 
"organizer": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
}
 
 
 }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{"@context": "http://schema.org",
"@type": "EducationEvent",
"name": "Data Science Course",
"description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
"image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
"performer":"Learnbay",					 
"offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-25"},"startDate":"2023-01-15","endDate": "2023-08-20","url" : "https://www.learnbay.co/data-science-course-training-in-bangalore/","duration":"50",
											  
"eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": {"@type": "VirtualLocation", 
 "url": "https://www.learnbay.co/data-science-course-training-in-bangalore/" 
 },
 
 
"organizer": {
        "@type": "Organization",
        "name": "Learnbay",
        "url": "https://www.learnbay.co/"
}
 
 
 }
            `,
          }}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="data science course in bangalore"
            title="Why Enroll In Data Science Course in Bangalore?"
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
            cityText={true}
              DomainHead1="Why Domain Specialization?"
              DomainBot1="Choosing the correct domain affects your course and career. Our mentors and experts at Learnbay will guide you to choose the right domain after analyzing your profile. Your domain will help you understand the course and project better, and you will excel in the same domain as an expert once you complete advanced data science training in Bangalore by Learnbay."
              DomainBot2="Moreover, in today's competitive data science job market companies are lacking data scientists having core domain expertise. Just for an example, if you have been appointed as a data scientist in a pharmaceutical company then without the pharma or chemical knowledge you can’t offer the best achievable analytical reports/ insights. What domains do Learnbay data science certification courses in Bangalore have?"
              DomainBot3="Learnbay Data science programs in Bangalore have a wide range of domains for students."
              DomainList1="Sales, Marketing, & HR"
              DomainList2="Oil, Gas, & Energy"
              DomainList3="Manufacturing, Mechanical, & Telecom"
              DomainList4="Healthcare, Pharma, & Clinical Research"
              DomainList5="Media, Hospitality, & Transportation"
              DomainList6="Development and testing of domain"
              DomainList7="Cloud and DevOps"
              DomainList8="Automotive, IoT, and Embedded"
              DomainList9="Retail, E-Commerce, & Supply Chain"
              DomainList10="Banking, Finance, and Insurance"
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
              CertificationHead1="Data Science Certificates by IBM"
              CertificationBot1="Learnbay Data science courses in Bangalore provide IBM project experience certification and multiple IBM Data science certificates on completion of different modules.  Based on the course you choose, you get the chance of achieving 6 to 8 certifications. And the best part is that all of them are from IBM. Each of these micro-skills certificates globally authorizes your different data science skills and tools expertise."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate.webp"
              ModuleHead1="What are the most important tools and modules you learn at the Learnbay Data science Certificate program in Bangalore?"
              ModuleBot1="Learnbay provides a space for non-techies to learn and improve coding skills in special basic coding classes. Clear any doubt at Learnbay in 1-1 sessions for a clear understanding. Bangalore's Learnbay Data science course consists of 8 MNC projects and 1 capstone project. You can even attend multiple classes and instructors as you like."
              ModuleBot2="Learnbay faculties help you to operate Data science tools. The tools can be Oracle, Database, MYSQL, SQL server, or tera data. Our experts teach you how to use your probability, statistics, and mathematical analysis skills. At Learnbay, you master R, Python, and SAS; these are the few tools for analyzing data. Learn Python, Statistics, Machine learning, Advance Excel, SQL, MONGO-DB, TABLEAU, POWER BI, BIG DATA, SPARK ANALYTICS, and TIME SERIES. These are the programs you will learn to work with while completing your data science course in Bangalore."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
              JobHead1="Data science job assistance and Data Science Interview preparation in Bangalore."
              JobBot1="Learnbay Data science training in Bangalore assures guaranteed job referrals as per the specified domain chosen by the student. They help students and learners to get placed in startups and top MNCs to build a career as Data scientists. We prepare students by conducting mock interviews as per the program. Learnbay even works on soft-skill, portfolio, and resume building. Many of our students had a breakthrough in their careers as they got recruited by leading global companies like TCS, Amazon, Mercedes, JP Morgan, and EY."
              JobHead2="What are the advantages of becoming a Data Scientist in Bangalore?"
              JobBot3="Data scientists are in great demand as many corporations want to recruit data scientists, but properly skilled data scientists are scarce. It is a highly paid career with a promising future. Data science is versatile, and Data scientists have a great role in businesses. Becoming a Data scientist is a fun task that makes products and services smart and adequately effective."
              JobHead3="What is Data Science?"
              JobBot7="Data Science is an interdisciplinary field focusing on how to extract knowledge and information from data sets which are usually called Big Data. Data Science is how we apply knowledge by actionable insights from Data to solve complex problems in large domains of applications. Data must be prepared and analyzed to cure business problems by analyzing and developing data-driven solutions for high-end decisions in broad domains."
              JobHead4="What does a Data Scientist do?"
              JobBot8="A Data Scientist analyzes and extracts system data for helpful insights. There are a few steps to be followed in the Data science process :"
              JobBot9="Before acquiring data for analysis, a Data scientist must be sure about a specific problem by asking the right question to understand it better. After this, the Data scientist creates the correct group of variables and data sets. Data scientists collect structured and unstructured data from different sources like enterprise data, public data, etc. Now that data is collected, the Data scientist processes raw data, converting it into a format for a specific analysis. It is the cleaning and validating of big data with guarantee, accuracy, and completeness. So after cleaning and validating, the data is in its usable form. This data is transferred to an analytical, ML, or statistical model. Through this, Data scientists can analyze to identify different trends and patterns. As the data is comprehended, Data scientist interrupts data looking for opportunities and solutions. The Data scientist completes the task by presenting results and insights to the proprietor or the stakeholders."
              JobHead6="Skills required to be a Data Scientist in Bangalore?"
              JobBot11="Data scientists require skills in statistics, information service, mathematics, data visualization, data sonification, data integration, graphic design, and communication."
              ProjectsBot1="Our IBM Data Science course comes with a premium cloud lab feature. You get the chance to experience 12+ live MNC projects by using this cloud lab feature. Such a project will undoubtedly enhance your real-world and hot & happening data science skills. These projects are as per the Data science skill demand spread across Bangalore City. Have a look at the series of data science projects that have already been completed by our students."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has emplaced thousands of Data science aspirants in top Startups and MNCs. Students have started working in their careers as Data scientists and have completed their course from Learnbay data science training in Bangalore."
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
              alt1="data science course in bangalore"
              alt2="data science course in bangalore"
              alt3="data science course in bangalore"
              alt4="data science course in bangalore"
              alt5="data science course in bangalore"
              alt6="data science course in bangalore"
              alt7="data science course in bangalore"
              alt8="data science course in bangalore"
              alt9="data science course in bangalore"
            />
            <FAQNew
              FaqDatas={AdvanceFaqDataB}
              DomainFaqDatas={AdvanceDomainFaqDataB}
              PaymentFaqDatas={AdvancePaymentFaqDataB}
              CapstoneFaqDatas={AdvanceCapstoneFaqDataB}
              CertificationFaqDatas={AdvanceCertificationFaqDataB}
              jobFaqDatas={AdvancejobFaqDataB}
              MentorshipFaqDatas={AdvanceMentorshipFaqDataB}
              SupportFaqDatas={AdvanceSupportFaqDataB}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
        cityText={true}/>
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
