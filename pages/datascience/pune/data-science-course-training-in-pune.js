import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import FirstSection from "../../../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../../../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../../../components/CoursePage/GetHired/GetHired";
import { ProgramFee } from "../../../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../../../components/CoursePage/Boxshape/BoxShape";
import Popup from "../../../components/Popup/Popup";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BottomBar from "../../../components/BottomBar/BottomBar";
import WhatsappFloat from "../../../components/WhatsappFloat/WhatsappFloat";
import Form from "../../../components/Form/Form";
import CityText from "../../../components/CityComponent/CityText/CityText";
import CitiesLeft from "../../../components/CityComponent/CitiesLeft/CitiesLeft";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import CitiesRight from "../../../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../../../components/FAQNewCity/FAQNew";
import LearnSupport from "../../../components/LearnSupport/LearnSupport";
import Script from "next/script";
import React, { useState } from "react";
import Maps from "../../../components/Maps/PuneMaps";

import {
  AdvanceFaqDataP,
  AdvanceDomainFaqDataP,
  AdvancePaymentFaqDataP,
  AdvanceCapstoneFaqDataP,
  AdvanceCertificationFaqDataP,
  AdvancejobFaqDataP,
  AdvanceMentorshipFaqDataP,
  AdvanceSupportFaqDataP,
} from "../../../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Data Science Courses Training in Pune- Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content=" Are you searching for the best data science courses online in Pune? Learnbay is providing the best online data science course training in Pune. Visit now."
        />
        <meta
          name="keywords"
          content="data science online course, data science certification in pune, data science course in india, data science course in pune, data science training in pune, data science courses, data science courses in pune, data science course, data science training, data science institute, data science certification,"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta name="copyright" content="Learnbay" />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:width" content="360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        ></meta>
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
 "name": "We provide Advanced data science course in Pune"
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
      "@type": "LocalBusiness",
      "name": "Learnbay- Data Science and Data Analytics Training in Pune",
      "image": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100",
      "@id": "",
      "url": "https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune",
      "telephone": "(+91) 77956 87988",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "office no. 408, 4th floor, Inorbit mall, City Space, opposite to Fiserv, Viman Nagar",
        "addressLocality": "Pune, Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.801159281162093,
        "longitude": 73.86267542806505
      },
      "openingHoursSpecification": [
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      },
       {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "15:00"
     }
         ],    
         "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
              ] 
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Learnbay",
              "alternateName": "Learnbay - Data Science course in Pune",
              "url": "https://www.learnbay.co/datascience/pune/data-science-course-training-in-pune",
              "logo": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FALight%2Flearnbay-logo.png&w=256&q=100",
              "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://instagram.com/learnbayofficial",
                "https://twitter.com/Learnbay",
                "https://bit.ly/Learnbay_YouTube",
                "https://www.linkedin.com/company/learnbay/"
              ]
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
 "headline": "Data Science Course Training in Pune",
 "description": "Data science course in Pune. Learnbay is Advanced Data Science Course Training Institute in Pune. Data science course in Pune will enhance your career",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp", 
 "author": {
 "@type": "Organization",
 "name": "Learnbay",
 "url": "https://www.learnbay.co/data-science-course-training-in-pune"
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
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [{
 "@type": "Question",
 "name": "What are Data Science Training courses available at Learnbay in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Placement Assistance."
 }
 },{
 "@type": "Question",
 "name": "What are the prerequisites for these Data Science training Courses in Pune?",
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
 "name": "What is a Flexi Subscription in these advanced data science courses in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Placement Assistance - 3-years."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of these advanced data science courses in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day, Foundational Data Science and AI Training course (220+ hours) :- Weekday batch - 6 months, Weekend batch - 8 months, Advance Data Science and AI Certification course (270+ hours) :- Weekday batch - 7 months, Weekend batch - 9 months, Data Science and AI Certification Course for Managers and Leaders (340+ hours) :- Weekday batch - 11 months, Weekend batch - 13 months, Data Science and AI Training with Placement Assistance (380+ hours) :- Weekday batch - 13 months, Weekend batch - 15 months"
 }
 },{
 "@type": "Question",
 "name": "What is the mode of data science training in Pune at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
 }
 },{
 "@type": "Question",
 "name": "What are the available elective domain options in the different data science training courses of Learnbay in Pune?",
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
 "name": "Can I change my domain electives later ?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
 }
 },{
 "@type": "Question",
 "name": "What is the total fee for Data Science Certifications courses in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and AI Training course is 93,220/- inclusive of GST. Advance Data Science and AI Certification course is 1,12,100/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,23,900/- inclusive of GST. Data Science and AI Training with Placement Assistance is 1,47,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for these Data Science Certification courses in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for these Data Science training courses available in Pune? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Group of 4+."
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
 "name": "How will the projects be executed in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
}
},{
 "@type": "Question",
 "name": "Is there any accredited data science certification after course completion?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and AI Training course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and AI Training with Placement Assistance- 1 Course Completion Certificate *All the certificates accredited by IBM. For more details, please refer to the respective course brochures."
}
},{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
}
},{
 "@type": "Question",
 "name": "How long will I get support for job assistance at Learnbay in Pune?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year. What is a job-readiness program? The Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
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
 "name": "What is an interview guarantee feature?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "As a special feature, we provide interview assurance. That means once you complete the course by fulfilling all the scoring and attendance-related criteria, we’ll provide assured interview calls and job referrals. You will get this facility until you get placed."
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
            __html: `
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Data Science Course in Pune | Data Science Training in Pune - Learnbay",
  "image": "",
  "brand": {
    "@type": "Brand",
    "name": "Learnbay"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "12693"
  }
}
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
"@context": "http://schema.org",
"@type": "EducationEvent","name": "Data Science Course Training in Pune",
"description": "Data science course in Pune. Learnbay is Advanced Data Science Course Training Institute in Pune. Data science course in Pune will enhance your career.",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
"performer":"Learnbay", 
"offers":{
"@type": "AggregateOffer",
"lowPrice": "39999",
"highPrice": "110000",
"url" : "https://www.learnbay.co/",
"availability" : "https://schema.org/InStock",
"price": "79000",
"priceCurrency": "INR",
"validFrom": "2023-05-01"},
"startDate":"2023-05-01",
"endDate": "2023-10-31",
"url" : "https://www.learnbay.co/","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Data Science, Data Analytics Course Training in Pune",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": " #1090 , 1st Floor, 18th Cross Road HSR Layout Sector 3,(Above Sangam Sweets)",
 "addressLocality": "HSR Sector 3",
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
          cityText={true}
          deskTopPara="Foundational and Advanced Job-ready"
          mTopPara="Foundational and Advanced Job-ready"
          title="Best Data Science Courses in Pune"
          mTitle="Best Data Science Courses in Pune"
          desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited training from the best Data Science courses in Pune. This course will help you to capitalize on your domain expertise by utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course2.png"
          width="900"
          height="762"
          alt="data science course in pune"
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
            p44="₹ 9,735/month"
          />
        </div>
        <ProgramFee
          Fee="₹99,000 + 18% GST"
          Emi="₹ 9,735/month"
          dataScienceCounselling={true}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {"@context": "http://schema.org",
            "@type": "EducationEvent",
            "name": "Data Science Course in Pune",
            "description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
            "image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
            "performer":"Learnbay",					 
            "offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/data-science-course-training-in-pune/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-15"},"startDate":"2022-12-18","endDate": "2023-09-20","url" : "https://www.learnbay.co/data-science-course-training-in-pune/","duration":"50",
                                    
            "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
            "eventStatus":"http://schema.org/EventScheduled",
             "location": {"@type": "VirtualLocation", 
             "url": "https://www.learnbay.co/data-science-course-training-in-pune/" 
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
            alt="data science course training in pune"
            title="Why Enroll In Data Science classes in Pune?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Data Scientist role. Learn innovative AI applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Data science and AI skills as per demanding industry standards. Choose from 8+ electives."
            Box3h5="Premium Mentoring"
            box3desc="Learn how to crack interviews by attending CV writing workshops & mock interviews with PRODUCT Based Companies expertise."
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
              cityTextDSPune={true}
              DomainHead1="Why Domain Specialization?"
              DomainBot1="Students learning data science at Learnbay get a list of specialized domains. Learnbay mentors analyze a student's profile and then suggest the right domain(s) as choosing the right domain is very important to get successfully employed as a data scientist. The domain helps students learn data science skills with a greater degree of expertise."
              DomainBot2="In addition to seeking a skilled data scientist, many businesses also seek experts in particular fields. Learnbay plays an important role in data science training across Pune from this perspective by allowing students to select their own domain. Also, the data science learning modules you get are completely customized as per your chosen domain’s industry-level data scientific needs."
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
              CertificationBot1="Students earn IBM Data Science Certification at the end of the course. Even the Advance program, Managers program consists of 6-8 separate IBM certificates on different sub-module completion. Even in these two courses, you get a data science project completion certificate issued by IBM."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/certificate.webp"
              ModuleBot1="Within Learnbay’s Data scientists courses in Pune, every module is customized as per the present data science job market direction. There are even special coding classes for students from non-technical backgrounds so students can get along with other technical mates."
              ModuleBot2="The modules cover plenty of hands-on assignments on demanding  Data science tools. Our industry FAANG experts teach you to apply statistics, probability, and mathematical analysis skills. Learnbay helps students master Data scientist tools like Advance excel, SQL, MONGO-DB, TABLEAU, POWER BI, BIG DATA, SPARK ANALYTICS, PYTHON, and TIME SERIES. Professional Data scientists widely use these programs, and our students learn the same at the trending industry level throughout the Data science training in Pune."
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
              JobHead1="Learnbay's data science course is best known for its high placement rate."
              JobBot1="It offers guaranteed data scientists interview calls in the specific domain opted by students. The students of Learnbay get recruited by globally recognized companies and startups as Data scientists, Data engineers, AI experts, etc. Learnbay has created a strong network with 250+ companies that recruit for highly paid data science job roles throughout the year."
              JobBot2="Learnbay faculties even focus on students' soft skills, resume building, and portfolios of their students so that they keep shining even in the large data science job seekers crowd. Most Learnbay students have got Data scientist roles in companies like Amazon, Mercedes, JP Morgan, E&Y, SG Analytics, Techart, Alteryx, etc."
              JobHead2="What is the scope of Data scientists in Pune?"
              JobBot3="Data Scientists play an important role in the industry and have a great future with high paycheques. In actuality, they are the key to every successful business decision. Along with the MNCs, the number of SMEs is rapidly growing in Pune. So, once you complete industrial data science training from Learnbay, you get exposed to endless career opportunities."
              ProjectsBot1="Learnbay’s unique Cloud Lab feature helps students work on live MNC projects from anywhere. Depending on the course you choose, you get the opportunity of working on 8 to 15 live industry projects and 2 to 3 capstone projects. Even you get a Project Experience Certificate from IBM for successful completion of unique data science capstone projects."
              ProjectsBot2="Below are a few projects from the Learnbay alumni profiles:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="We have emplaced numerous candidates in top global companies and startups. More than 1000+ Learnbay alumni have already started working as soon as they completed the course. Rest got recruited in a few months. Even 300+ candidates have directly joined data science project leadership or manager designation after completing the Data Science and AI program for Managers and leaders. Here are some of our alumni sharing their hard work and success:"
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
              alt1="data science course training in pune"
              alt2="data science course training in pune"
              alt3="data science course training in pune"
              alt4="data science course training in pune"
              alt5="data science course training in pune"
              alt6="data science course training in pune"
              alt7="data science course training in pune"
              alt8="data science course training in pune"
              alt9="data science course training in pune"
            />
            <FAQNew
              FaqDatas={AdvanceFaqDataP}
              DomainFaqDatas={AdvanceDomainFaqDataP}
              PaymentFaqDatas={AdvancePaymentFaqDataP}
              CapstoneFaqDatas={AdvanceCapstoneFaqDataP}
              CertificationFaqDatas={AdvanceCertificationFaqDataP}
              jobFaqDatas={AdvancejobFaqDataP}
              MentorshipFaqDatas={AdvanceMentorshipFaqDataP}
              SupportFaqDatas={AdvanceSupportFaqDataP}
            />
          </div>
        </div>
        <LearnSupport />
        <div className={styles.BangaloreMap}>
          <Maps />
        </div>
        <CityText
          CityTextB="Data Science Course Certification Training locations in Pune "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Data Science Course viman nagar, Data Science Training in kalyan nagar, Data Science Training in magarpetta, Data Science Training in pimpri chinchwad, Data Science Classes in yerwada, Data Science Classes in kharadi, Data Science Classes in vishrantwadi, Data Science Classes in deccan, Data Science Course in Katraj, Data Science Training in warje, Data Science Certification Training in bavdhan, Data Science Certification in boat club road, Data Science Certification in model colony, Best Data Science Training in pune, Best Data Science Course in pune"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
