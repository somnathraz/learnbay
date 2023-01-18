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
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import React, { useState } from "react";
import {
  ArtificialFaqDataB,
  ArtificialDomainFaqDataB,
  ArtificialPaymentFaqDataB,
  ArtificialCapstoneFaqDataB,
  ArtificialCertificationFaqDataB,
  ArtificialjobFaqDataB,
  ArtificialMentorshipFaqDataB,
  ArtificialSupportFaqDataB,
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
          Artificial Intelligence Course in Bangalore | Artificial Intelligence
          Training in Bangalore
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Bangalore. Learnbay is Advanced Artificial Intelligence Course Training Institute in Bangalore. Artificial Intelligence course in Bangalore will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Bangalore, Artificial Intelligence training in Bangalore, Artificial Intelligence institute in Bangalore, best Artificial Intelligence institute in Bangalore, Artificial Intelligence course in Bangalore, Artificial Intelligence certification in Bangalore, Artificial Intelligence training institute in Bangalore, advanced Artificial Intelligence course in Bangalore, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-bangalore"
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
 "headline": "Artificial Intelligence (AI) training in Bangalore",
 "description": "Artificial Intelligence Course in Bangalore. Learnbay is Advanced Artificial Intelligence Course Training Institute in Bangalore. Artificial Intelligence course in Bangalore will enhance your career",
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
 "name": "What are Artificial Intelligence (AI) training courses available at Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational data science and Artificial Intelligence Training Course Advanced data science and AI Certification Course Machine learning and AI Certification Data Science and AI Certification Course for Managers and Leaders Data Science and Artificial Intelligence Training with Placement Assistance"
 }
 },{
 "@type": "Question",
 "name": "What are the prerequisites for these AI training Courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "There are no prerequisites for this artificial certification course as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
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
 "name": "What is a Flexi Subscription in these advanced artificial intelligence courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for AI live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational data science and Artificial Intelligence Training Course- 1 Year Advanced data science and AI Certification Course- 3 Years Machine learning and AI Certification- 3 Years Data Science and AI Certification Course for Managers and Leaders- 3 Years Data Science and Artificial Intelligence Training with Placement Assistance - 3-years"
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of these advanced AI in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day Foundational Data Science and Artificial Intelligence Training Course (220+ hours) Weekday batch - 6 months Weekend batch - 8 months Machine learning and AI Certification (280+ hours) Weekday batch - 9.5 months Weekend batch - 11 months Advanced Data Science and AI Certification Course (270+ hours) Weekday batch - 7 months Weekend batch - 9 months Data Science and AI Certification Course for Managers and Leaders (340+ hours) Weekday batch - 11 months Weekend batch - 13 months Data Science and Artificial Intelligence Training with Placement Assistance (380+ hours) Weekday batch - 13 months Weekend batch - 15 months"
 }
 },{
 "@type": "Question",
 "name": "What is the learning mode of Artificial Intelligence Certification courses in Bangalore at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online AI training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in IBM artificial intelligence training courses in Bangalore, At Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional AI certification courses provided by Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack AI modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational AI course."
 }
 },{
 "@type": "Question",
 "name": "What are the available elective domain options in the different artificial intelligence training courses of Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy"
 }
 },{
 "@type": "Question",
 "name": "Which domain elective within the Learnbay AI Certification courses is best suited for me?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "After enrolling in the advanced AI courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation"
 }
 },{
 "@type": "Question",
 "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible AI certification courses?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and Artificial Intelligence Training with Placement Assistance- All domains Machine learning and AI Certification- maximum 4 domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
},
{
 "@type": "Question",
 "name": "What is the total fee for Learnbay AI Certifications courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and Artificial Intelligence Training Course is 88,500/- inclusive of GST. Advance Data Science and AI Certification course is 1,12,100/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,23,900/- inclusive of GST. Data Science and Artificial Intelligence Training with Placement Assistance is 1,47,500/- inclusive of GST. Machine learning and AI Certification is 1,23,900/-inclusive of GST"
 }
},
{
 "@type": "Question",
 "name": "Can I pay in installments for these AI Certification courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
},
{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for these Artificial intelligence training courses available in Bangalore? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
 }
},
{
 "@type": "Question",
 "name": "What is the refund policy for the Artificial Intelligence Certification courses at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
},
{
 "@type": "Question",
 "name": "How many capstone projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Artificial Intelligence Training Course - 1 Capstone. Advance Data Science and AI Certification course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and Artificial Intelligence Training with Placement Assistance- 3 Capstones. Machine learning and AI Certification- 2 Capstones."
 }
},
{
 "@type": "Question",
 "name": "How many real-time projects/case studies will be covered in these artificial intelligence certification courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depending on the course you choose the number of live projects will vary. Foundational Data Science and Artificial Intelligence Training Course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and Artificial Intelligence Training with Placement Assistance- 15 projects. Machine learning and AI Certification- 15 projects. Click here to download the list of the projects."
 }
},
{ 
 "@type": "Question",
 "name": "How will the projects be executed in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
 }
},
{
 "@type": "Question",
 "name": "Is there any accredited AI certification after course completion?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and Artificial Intelligence Training Course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and Artificial Intelligence Training with Placement Assistance- 1 Course Completion Certificates Machine learning and AI Certification- 1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. *All the certificates accredited by IBM. For more details, please refer to the respective course brochures."
 }
},
{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance Program in Learnbay artificial intelligence training courses in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
},
{
 "@type": "Question",
 "name": "How long will I get support for job assistance at Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year. What is a job-readiness program? The Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
 }
},
{
 "@type": "Question",
 "name": "Will I get job referrals at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
 }
},
{
 "@type": "Question",
 "name": "What is an interview guarantee feature?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "As a special feature, we provide interview assurance. That means once you complete the course by fulfilling all the scoring and attendance-related criteria, we’ll provide assured interview calls and job referrals. You will get this facility until you get placed."
 }
},
{
 "@type": "Question",
 "name": "Until when do the students get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our Mentors will provide AI training to the students until the completion of the course."
 }
},
{
 "@type": "Question",
 "name": "Can a Learnbay student in Bangalore choose to study from their desired mentor?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
 }
},
{
 "@type": "Question",
 "name": "When is the job assistance provided at Learnbay and how long will I get it?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
 }
},
{
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
"@type": "EducationEvent","name": "Artificial Intelligence (AI) training in Bangalore",
"description": "Artificial Intelligence Course in Bangalore. Learnbay is Advanced Artificial Intelligence Course Training Institute in Bangalore. Artificial Intelligence course in Bangalore will enhance your career",
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
          dataScience={true}
          deskTopPara="Industry Curated Artificial Intelligence Program"
          mTopPara="Industry Curated Artificial Intelligence Program"
          title="Artificial Intelligence (AI) "
          spanTitleText="Training in Bangalore"
          mTitle="Artificial Intelligence (AI)"
          spanMTitleText="Training in Bangalore"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course4.png"
          width="900"
          height="762"
          alt="artificial intelligence ai course training in bangalore"
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
            p44="₹ 10,325/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 10,325/month"
          Fee="₹ 1,05,000 + 18% GST"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="artificial intelligence ai course training in bangalore"
            title="Why Enroll In Artificial Intelligence Course Training in Bangalore?"
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
              ProgramBot1="Learnbay has enriched Artificial Intelligence (AI) training in Bangalore, guided and mentored by industry experts from MAANG companies. Learnbay's experts are dedicated to students' growth and career support. Domain electives are available to assure your full-stack Data science and AI expertise in your chosen industries. Learnbay AI training in Bangalore gives students real-time MNC and capstone project experience certified by IBM. Also, you get quick answers from the Learnbay Q&A forum and updated solutions for any queries with the least possible waiting time."
              ProgramHead3="How does Learnbay artificial intelligence training become the most promising institute for experienced professionals in Bangalore?"
              ProgramBot3="Learnbay is such an institute that offers end-to-end professional, better to say, job-ready artificial intelligence training across Bangalore."
              ProgramBot31="There are a number of Artificial Intelligence engineers or AI expert training providers in Bangalore, but Learnbay provides custom-fit training for successful AI career switch to experienced working professionals from any domain. The latest tools and updated modules are used to keep students on track with the present-day industry work scenario. This Artificial intelligence certification program also ensures guaranteed placement assurance. "
              ProgramHead4="Is Artificial intelligence a Good career in Bangalore?"
              ProgramBot4="Bangalore is a huge tech hub and works with the latest technologies to the best of its abilities. Irrespective of tech or non-tech industries, everyone is now getting extremely dependent on AI innovations. Hence the work culture, as well as the job market, demands in getting changes. But the number of candidates properly adaptable to such changes is very few."
              ProgramBot5="Companies are facing different kinds of challenges as the advancement in technology by Artificial intelligence is big, but there are a few Artificial intelligence engineers/ experts. Learnbay wants to provide a solution for this by teaching the best Artificial Intelligence skills to learners who are eager to learn and own the ability for the same."
              ProgramBot6="The best part at Learnbay is that you get the variable options of artificial intelligence courses to choose from- according to your career stage and professional background. Available course options are:"
              Courselink1="/data-science-certification-courses"
              Courselink2="/advance-data-science-certification-courses"
              Courselink3="/artificial-intelligence-certification-course"
              Courselink4="/data-science-ai-for-managers"
              Courselink5="/data-science-ai-masters-program"
              Course1="Foundational Data Science and AI Program"
              Course2="Advanced-Data Science and AI Program with Domain Specialization"
              Course3="Artificial Intelligence and Machine Learning Program with Domain Specialization"
              Course4="Data Science and AI Program for Managers and Leaders"
              Course5="Data Science and AI master program"
              DomainHead1=" Why is domain specialization important in job-ready  Artificial intelligence training in Bangalore?"
              DomainBot1="Artificial intelligence has a lot of subsets and components. Expertising Artificial intelligence in specific domains gives an edge to your earned AI skills. If you pursue Learnbay Artificial intelligence course training in Bangalore, there are many domains to select from. The options include banking, oil, gas, etc. Every sector or industry has different requirements and work processes. Domain specialization helps you have an extra mark by completing this AI certification course. If you have already earned 4 years of experience in any domain, then in the present scenario, it's almost impossible to successfully switch into an AI career without domain-focused AI skills."
              DomainBot2="Learnbay's mentors and guides suggest the best domain for students after analyzing profiles and students' learning desires."
              DomainBot3="List of available Domain-Electivess"
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
              CertificationBot1="Learnbay Provides students with an IBM AI course completion certificate. This IBM-certified program helps you to be at the top of other profiles. The artificial intelligence course completion certificate by IBM ensures you are recognized as a skilled Artificial intelligence professional. Not only that, as you process with the modules, you get micro AI certifications by IBM like machine learning with python, Deep Learning with TensorFlow, and so on. As per your chosen course, you achieve 1 to 8 number micro certificates from IBM. Even once you complete the project, IBM issues a project experience certificate in AI too."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleBot1="Learnbay artificial intelligence and ML training in Bangalore include 400 hrs of uninterrupted live classes conducted by MAANG experts. The foundational and advanced program also consists of  200+ sessions. The most impressive information is that all of these classes are completely live and interactive only. Students can attend multiple sessions of classes and instructors. Learnbay Provides 1- 3 years of flexi membership on artificial intelligence training so that students can learn at ease and in comfort from their devices. Students get to talk to mentors and guides with 1-1 live sessions to clear all their doubts. Our LMS is always updated with the latest version of courses and is altered according to the industry demands and standards. Here you get crisp industry-curated training on R, NLP, artificial neural networks, and so on."
              ModuleBot2="Learnbay provides special basic coding classes and regular updates of coding assignments. Students can participate in Learnbay's exclusive hackathons and webinars."
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
              JobBot1="Learnbay Artificial intelligence program in Bangalore ensures guaranteed placement assistance. Learnbay’s guides and mentors build your resume and portfolio and also refer your profiles so that you get a interview calls. Other than the placement assistance AI course, even in other courses, you get at least the promise of assured AI job interviews in Bangalore."
              JobHead2="What are the job roles you find in Bangalore as an Artificial engineer?"
              JobBot3="Artificial Intelligence has created a lot of new job roles like:"
              JobBot4="Artificial intelligence Engineer.
    Machine learning engineer.
    Research scientist.
    Business intelligence developer.
    Data scientist.
    Big Data Engineer.
    Robotics Scientist."
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
              AlumniBot1="Learnbay’s Artificial Intelligence training in Bangalore placement assurance for students and has emplaced thousands of students in the top companies and MNCs all over Bangalore. We have a few stories who have worked hard and have gained success by Learning the Artificial intelligence course at Learnbay. "
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
              alt1="artificial intelligence ai course training in bangalore"
              alt2="artificial intelligence ai course training in bangalore"
              alt3="artificial intelligence ai course training in bangalore"
              alt4="artificial intelligence ai course training in bangalore"
              alt5="artificial intelligence ai course training in bangalore"
              alt6="artificial intelligence ai course training in bangalore"
              alt7="artificial intelligence ai course training in bangalore"
              alt8="artificial intelligence ai course training in bangalore"
              alt9="artificial intelligence ai course training in bangalore"
            />
            <FAQNew
              FaqDatas={ArtificialFaqDataB}
              DomainFaqDatas={ArtificialDomainFaqDataB}
              PaymentFaqDatas={ArtificialPaymentFaqDataB}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataB}
              CertificationFaqDatas={ArtificialCertificationFaqDataB}
              jobFaqDatas={ArtificialjobFaqDataB}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataB}
              SupportFaqDatas={ArtificialSupportFaqDataB}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Artificial Intelligence Course Certification Training locations in Bangalore "
          CityText=" :Ammrutha halli [560092], Maruthi Seva Nagar [560033], Kuvempu Layout [560077], Bellandur [560103], Jayanagar III Block [560011], Anandnagar [560024], Nandinilayout [560096], B SK II Stage [560070], Indiranagar [560038], Yelahanka [560063], Chickpet [560053], Domlur [560071], Bansashankari III Stage [560085], Vimanapura [560017], Nagarbhavi [560072], Basaveshwaranagar [560079], Bommanahalli [560068], Mico Layout [560076], Electronic City [560100], Taverekere [560029], Nehru Nagar [560020], Agram[560007], Halsuru Pete [560002], Basavanagudi [560004], R.M.V. Extension II [560094], Jayanagar [560041], Carmelaram [560035], New Thippasandra [560075], Kanakanagar [560032], Nayandahalli [560039], Fraser Town [560005], Jalahalli East [560014], Kacharakanahalli [560084], Malleswaram West [560055], Bannerghatta [560083], Srirampuram [560021], Rajarajeshwarinagar [560098], Sivan Chetty Gardens [560042], Dommasandra [562125], Whitefield [560066], Vidyaranyapura [560097], Bolare [560082], Mathikere [560054], Doddanekkundi [560037], Hampinnagar [560104], C.V.Raman Nagar [560093], Chikkabanavara [560090], Attur [560064], Kumbalagodu [560074], Bhattarahalli [560049], Chikkalasandra [560061], Sharada Nagar [560065], Jalahalli West [560015], H.K.P Road [560051], Jp Nagar III Phase [560078], Sadashiva nagar [560080], Krishnarajapuram R S [560016], Mahalakshipuram Layout [560086], Guddadahalli [560026], Chudenapura [560060], Vidhana Soudha [560001], Shanthinagar [560027], Rajaji Nagar [560010], Chandapura [560099], Ramakrishna Hegde Nagar [560045], Shalabh Bhatnagar [560012], Peenya [560058], Ashoknagar [560050], Jalahalli Nacen [560013], Banawadi [560043], Malleswaram [560003], Doddakallasandra [560062], K.G Road [560009], Muthusandra [560087], Marathahalli [560056], JC Nagar [560006], Chamrajpet [560018], HSR Layout [560102], Devanagundi [560067], Yeswanthpura [560022], Mahadevapura [560048],Hulsur Bazaar [560008],Magadi Road [560023], Adugodi [560030], Bagalgunte [560073], Devasandra [560036], Rv Niketan [560059], Narasimharaja Colony [560019], Koramangala VI Bk [560095], Agara [560034], Vijayanagar East [560040], Benson Town [560046], Viveknagar S.O [560047], Dasarahalli [560057], Bapagrama [560091], Richmond Town [560025]."
          CityTextLB="Locations Offered"
          CityTextL=" :Artificial Intelligence Training in Bangalore, Artificial Intelligence Course in Bangalore, Artificial Intelligence Training in BTM, Artificial Intelligence Training in Marathahalli, Artificial Intelligence Institute in Bangalore, Artificial Intelligence Training in Whitefield, Artificial Intelligence Training in Kundalahalli, Artificial Intelligence Training in ITPL, Artificial Intelligence Training Institute in Marathahalli, Artificial Intelligence Course in BTM, Artificial Intelligence Course in Marathahalli, Artificial Intelligence Course in Whitefield, Artificial Intelligence Course Bommanahalli, Artificial Intelligence Training in Bommanahalli, Artificial Intelligence Training in Electronic city, Artificial Intelligence Training in Koramangala, Artificial Intelligence Classes in BTM, Artificial Intelligence Classes in Bommanahalli, Artificial Intelligence Classes in Whitefield, Artificial Intelligence Classes in Marathahalli, Artificial Intelligence Course in Koramangala, Artificial Intelligence Training in Jayanagar, Artificial Intelligence Certification in Bangalore, Artificial Intelligence Certification Training in Bangalore, Artificial Intelligence Certification in BTM, Artificial Intelligence Certification in Whitefield, Best Artificial Intelligence Training, Best Artificial Intelligence Course"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
