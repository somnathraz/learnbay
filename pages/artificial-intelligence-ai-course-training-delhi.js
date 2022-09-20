import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  ArtificialFaqDataD,
  ArtificialDomainFaqDataD,
  ArtificialPaymentFaqDataD,
  ArtificialCapstoneFaqDataD,
  ArtificialCertificationFaqDataD,
  ArtificialjobFaqDataD,
  ArtificialMentorshipFaqDataD,
  ArtificialSupportFaqDataD,
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
          Artificial Intelligence Course in Delhi | Artificial Intelligence
          Training in Delhi
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Delhi. Learnbay is Advanced Artificial Intelligence Course Training Institute in Delhi. Artificial Intelligence course in Delhi will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Delhi, Artificial Intelligence training in Delhi, Artificial Intelligence institute in Delhi, best Artificial Intelligence institute in Delhi, Artificial Intelligence course in Delhi, Artificial Intelligence certification in Delhi, Artificial Intelligence training institute in Delhi, advanced Artificial Intelligence course in Delhi, Artificial Intelligence course with placement guarantee, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-delhi"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
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
 "headline": "Artificial Intelligence Course Training in Delhi",
 "description": "Artificial Intelligence Course in Delhi. Learnbay is Advanced Artificial Intelligence Course Training Institute in Delhi. Artificial Intelligence course in Delhi will enhance your career",
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
 "name": "What are Data Science Training courses available at Learnbay in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Job or Money-back Guarantee."
 }
 },{
 "@type": "Question",
 "name": "What are the prerequisites for these Data Science training Courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational Data Science Training Course, Advance Data Science Certification Course, Data Science Certification Course for Managers and Leaders, Data Science Training with Job or Money-back Guarantee."
 }
 },{
 "@type": "Question",
 "name": "What if I miss a few classes of Learnbay AI courses due to an emergency?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
 }
 },{
 "@type": "Question",
 "name": "What is a Flexi Subscription in these advanced data science courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for Data Science live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational Data Science and AI Training course- 1 Year, Advance Data Science and AI Certification course- 3 Years, Data Science and AI Certification Course for Managers and Leaders- 3 Years, Data Science and AI Training with Job or Money-back Guarantee - 3-years."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of these advanced data science courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day, Foundational Data Science and AI Training course (220+ hours) :- Weekday batch - 6 months, Weekend batch - 8 months, Advance Data Science and AI Certification course (270+ hours) :- Weekday batch - 7 months, Weekend batch - 9 months, Data Science and AI Certification Course for Managers and Leaders (340+ hours) :- Weekday batch - 11 months, Weekend batch - 13 months, Data Science and AI Training with Job or Money-back Guarantee (380+ hours) :- Weekday batch - 13 months, Weekend batch - 15 months."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of data science training in Delhi at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in IBM data science training courses in Delhi, At Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack data science modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational data science course."
}
},{
 "@type": "Question",
 "name": "What are the available elective domain options in the different data science training courses of Learnbay in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy."
 }
 },{
 "@type": "Question",
 "name": "Which data science specialization domain elective is best suited for me?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988."
 }
 },{
 "@type": "Question",
 "name": "Why is domain specialization important in professional data science certification?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and AI Training with Job or Money-back Guarantee- All domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
 }
 },{
 "@type": "Question",
 "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible data science courses?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and AI Training with Job or Money-back Guarantee- All domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
 "name": "What is the total fee for Data Science Certifications courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and AI Training course is 76,700/- inclusive of GST. Advance Data Science and AI Certification course is 93,220/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,12,100/- inclusive of GST. Data Science and AI Training with Job or Money-back Guarantee is 1,47,500/- inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for these Data Science Certification courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for these Data Science training courses available in Delhi? What is Group Discount?",
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
 "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Data Science and AI Training Course - 1 Capstone. Advance Data Science and AI Certification Course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and AI Training with Job or Money-back Guarantee- 3 Capstones. How many real-time projects/case studies will be covered in these Data Science certification courses in Delhi? Depending on the course you choose the number of live projects will vary. Foundational Data Science and AI Training course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and AI Training with Job or Money-back Guarantee- 15 projects. Click here to download the list of the projects."
 }
 },{
 "@type": "Question",
 "name": "How will the projects be executed in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
 }
 },{
  "@type": "Question",
 "name": "Is there any accredited data science certification after course completion?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and AI Training course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and AI Training with Job or Money-back Guarantee- 1 Course Completion Certificate *All the certificates accredited by IBM. For more details, please refer to the respective course brochures."
 }
 },{
  "@type": "Question",
 "name": "What's the eligibility for a job assistance Program in Learnbay Data science training courses in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
 },{
  "@type": "Question",
 "name": "How long will I get support for job assistance at Learnbay in Delhi?",
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
 "name": "What is a Job or 100% money back Guarantee?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In case you choose the Job or 100% money-back certification course then you can access this added facility. If you don’t get a job within 6 months of your course completion, we will initiate a full refund of your course fees. Note: Terms and conditions applied."
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
 "name": "Can a Learnbay student in Delhi choose to study from their desired mentor?",
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
"@type": "EducationEvent","name": "Artificial Intelligence Course in Delhi",
"description": "Artificial Intelligence Course in Delhi. Learnbay is Advanced Artificial Intelligence Course Training Institute in Delhi. Artificial Intelligence course in Delhi will enhance your career",
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
          deskTopPara="Becomes an AI Expertise In Product Based MNCs"
          mTopPara="Becomes an AI Expertise In Product Based MNCs"
          title="Artificial Intelligence (AI) Course Training in Delhi"
          mTitle="Artificial Intelligence (AI) Course Training in Delhi"
          spanTitleText=" For Managers and Leaders"
          spanMTitleText=" For Managers and Leaders"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course4.png"
          width="900"
          height="762"
          alt="artificial intelligence ai course training in delhi"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
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
          Emi="₹ 9,342/month"
          Fee="₹ 95,000 +GST"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="artificial intelligence ai course training in delhi"
            title="Why Enroll In Artificial Intelligence Course Training in Delhi?"
            Box1h5="Custom-fit Training"
            box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
            Box2h5="Domain Destined"
            box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 12+ electives."
            Box3h5="Premium Mentoring"
            box3desc="Utilize the advantage of mock interviews and project handling training with MAANG Data Science Leads."
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
              ProgramBot1="Learnbay is a top AI course training provider in Delhi. It offers industry-recognized Artificial Intelligence courses with various domain electives to pick from. Because it is a combination of advanced study packages with capstone projects, which helps these IBM Artificial Intelligence courses stand out from the crowd. "
              ProgramBot2="With live MNC and capstone projects, Learnbay mentors deliver the best Artificial Intelligence training to students. Learnbay's Artificial Intelligence courses in Delhi with placement are a fantastic effort that has assisted many students in obtaining excellent employment in and around Delhi."
              ProgramBot3="The Learnbay Artificial Intelligence course will teach you how to apply AI to real-world business difficulties using a balanced combination of existing Artificial Intelligence and Machine Learning approaches and upcoming industry-specific best practices."
              ProgramBot31="Learnbay's main purpose is to provide high-quality Artificial Intelligence and Machine Learning training to aspirants in Delhi. Domain-specific modules are carefully crafted by industry experts and will be sent to you as part of your Artificial Intelligence training. Learnbay also provides blended learning sessions as well as live question-and-answer sessions. Because the modules are reasonable and flexible, with the option of 0% interest EMI, it is the best  Artificial Intelligence (AI) course for working professionals in Delhi. This IBM Artificial Intelligence course covers everything that a student seeking the best AI course training in Delhi will need to know."
              ProgramHead4="Artificial Intelligence courses provided by Learnbay:"
              Courselink1="/data-science-certification-courses"
              Courselink2="/advance-data-science-certification-courses"
              Courselink3="/artificial-intelligence-certification-course"
              Courselink4="/data-science-ai-for-managers"
              Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
              Course1="Foundational Data Science and AI Program"
              Course2="Advanced-Data Science and AI Program with Domain Specialization"
              Course3="Artificial Intelligence and Machine Learning Program with Domain Specialization"
              Course4="Data Science and AI Program for Managers and Leaders"
              Course5="AI and Data Science Course with Job Guarantee or Money back"
              DomainHead1="What type of difficulties can you face if you opt for an Artificial intelligence certification without domain expertise?"
              DomainBot1="Domain specialization focuses on learners' efforts in a single area of expertise, allowing you to stand out in the competitive Artificial Intelligence job market. In addition, Domain experience is required to become a competent Artificial Intelligence professional. Artificial Intelligence experts and application developers are responsible for various tasks. As a result, to provide the most profitable Artificial Intelligence-powered solution, they must have extensive knowledge of specific business operations."
              DomainBot3="In fact, the lack of domain-oriented AI skills is the biggest cause of the scenario: huge numbers of certified data scientists are still jobless- while industries are still having tons of relevant vacancies. No matter which type of AI certificate you own, the absence of the ability to amalgamate domain knowledge and data science skill- leads to random rejection by recruiters. Especially in a mid to senior-level role is not at all possible in such a case. Students should choose domain-specific AI courses to live their dream job. Domain Electives for students at Learnbay:"
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
              CertificationHead1="How does the Learnbay AI certification process become unique?"
              CertificationBot1="Candidates will acquire IBM certifications after completing an Artificial Intelligence course training in Delhi from Learnbay. You will receive one to eight certificates, depending on your chosen course available in Delhi. Additionally, students will also obtain an IBM project experience accreditation from IBM after completing capstone projects."
              CertificationBot2="Learnbay has reached a key milestone by partnering with IBM and 250+ MNCs and startups. With Learnbay IBM certification on your resume, you'll be well on your way to land on a high-paying Artificial Intelligence job at one of the world's most prestigious companies. Over 10,000 students have completed our Artificial Intelligence course, allowing themselves to work in high-paying Artificial Intelligence and Machine Learning jobs all over Delhi."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleBot1="Learnbay is dedicated to offering potential students with the highest-quality AI training. As a result, we've developed a variety of IBM Artificial Intelligence courses to meet the market's ever-changing requirements. Our Artificial Intelligence training courses in Delhi include various learning modules tailored to the aspirant's present professional stage, educational background and future career ambitions."
              ModuleBot2="Our Foundation Artificial Intelligence and Machine Learning courses training have 200+ hours long modules, while the most advanced Artificial Intelligence and Machine Learning certification courses for tech professionals are 400 hours long. The entire sessions are live and interactive only. Students can attend multiple sessions with different lecturers during the training in all of our courses. Learnbay also provides a flexible membership allowing students to learn at their speed for one to three years."
              ModuleBot3="Learnbay Artificial Intelligence (AI) course training in Delhi’s every module is specific to the student's selected domain. It includes, among other things, the most popular AI tools, advanced probability, Numpy, Pandas, Matplotlib, Deep Learning, and MongoDB."
              ModuleBot4="Students with weak programming backgrounds will benefit from an additional 6-8 hours of basic programming sessions (at zero added cost) designed in the course module."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
              JobHead1="What is the process of job assistance in Learnbay AI courses?"
              JobBot1="The career consultants at Learnbay will help you improve your CV and portfolio. Your CV and portfolio are also sent to other firms through Learnbay. Learnbay assures that you will get interviewed by top-tier organizations in Delhi. You'll also have the opportunity to participate in simulated interviews, which will help you prepare for difficult real-life interviews."
              JobBot2="The Job or Money-Back Guarantee program promises you will receive a total refund of your AI course expenses if you do not get hired within six months of completing the course."
              JobHead2="Why is Artificial Intelligence (AI) course Training a great start to the working professional seeking career switch in Delhi?"
              JobBot3="Artificial Intelligence (AI) is a general phrase that refers to the process of making machines and computers behave like humans without the need for human involvement. As the knowledge and experience of this profession continue to grow, it is becoming a popular career choice. Artificial intelligence and machine learning is the heart of many IT firms. This big global phenomenon is on the verge of taking over many industries. As a result, the demand for Artificial Intelligence specialists has risen effectively. The next few years will be rewarding for AI specialists in Delhi and India."
              JobBot4="In Artificial Intelligence, you can work as an AI engineer, a Machine Learning Engineer, a Robotics Engineer, and a range of other jobs. Due to the incredible industrial exposures and individualized career-oriented learning modules, the AI courses of Learnbay ensure a successful as well as sustainable data science career switch, even For Non-Programmers."
              ProjectsBot1="Learnbay always encourages students to work with their creativity and understanding on projects and assignments. Completing projects and capstones would add a star to your profile as you have worked on live projects from the top reputed companies and the best startups. You can complete 1 to 3 capstone artificial intelligence projects (as per course). All of them are fresh and trending. This project helps you to solve business problems suffered by your domain."
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
              AlumniBot1="Learnbay’s Artificial Intelligence training in Bangalore guarantees jobs for students and has emplaced thousands of students in the top companies and MNCs all over Bangalore. We have a few stories who have worked hard and have gained success by Learning the Artificial intelligence course at Learnbay. "
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
              alt1="artificial intelligence ai course training in delhi"
              alt2="artificial intelligence ai course training in delhi"
              alt3="artificial intelligence ai course training in delhi"
              alt4="artificial intelligence ai course training in delhi"
              alt5="artificial intelligence ai course training in delhi"
              alt6="artificial intelligence ai course training in delhi"
              alt7="artificial intelligence ai course training in delhi"
              alt8="artificial intelligence ai course training in delhi"
              alt9="artificial intelligence ai course training in delhi"
            />
            <FAQNew
              FaqDatas={ArtificialFaqDataD}
              DomainFaqDatas={ArtificialDomainFaqDataD}
              PaymentFaqDatas={ArtificialPaymentFaqDataD}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataD}
              CertificationFaqDatas={ArtificialCertificationFaqDataD}
              jobFaqDatas={ArtificialjobFaqDataD}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataD}
              SupportFaqDatas={ArtificialSupportFaqDataD}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Artificial Intelligence Course Certification Training locations in Delhi "
          CityText=" : Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
          CityTextLB="Locations Offered"
          CityTextL=" :Artificial Intelligence Training in delhi, Artificial Intelligence Course in delhi, Artificial Intelligence Training in Connaught Place, Artificial Intelligence Training in Karol Bagh , Artificial Intelligence Institute in Delhi, Artificial Intelligence Training in kamla nagar, Artificial Intelligence Training in kalu sarai, Artificial Intelligence Training in J N U, Artificial Intelligence Training Institute in Connaught Place, Artificial Intelligence Course in Connaught Place, Artificial Intelligence Course in Saket, Artificial Intelligence Course in old rajinder nagar, Artificial Intelligence Course Connaught Place , Artificial Intelligence Training in (N.S.P) Netaji Subhash Place, Artificial Intelligence Training in Pitampura, Artificial Intelligence Classes in Connaught Place, Artificial Intelligence Classes in J N U, Artificial Intelligence Classes in Connaught Place, Artificial Intelligence Classes in Delhi, Artificial Intelligence Course in vishwa vidyalaya, Artificial Intelligence Training in kalu sarai, Artificial Intelligence Certification in Delhi, Artificial Intelligence Certification Training in Delhi, Artificial Intelligence Certification in Connaught Place, Artificial Intelligence Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Artificial Intelligence Training, Best Artificial Intelligence Course, Best Data Scientist course, Best Data Scientist Training"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
