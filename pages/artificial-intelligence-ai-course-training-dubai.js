import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  ArtificialFaqDataDu,
  ArtificialDomainFaqDataDu,
  ArtificialPaymentFaqDataDu,
  ArtificialCapstoneFaqDataDu,
  ArtificialCertificationFaqDataDu,
  ArtificialjobFaqDataDu,
  ArtificialMentorshipFaqDataDu,
  ArtificialSupportFaqDataDu,
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
          Artificial Intelligence Course in Dubai | Artificial Intelligence
          Training in Dubai
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Dubai. Learnbay is Advanced Artificial Intelligence Course Training Institute in Dubai. Artificial Intelligence course in Dubai will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Dubai, Artificial Intelligence training in Dubai, Artificial Intelligence institute in Dubai, best Artificial Intelligence institute in Dubai, Artificial Intelligence course in Dubai, Artificial Intelligence certification in Dubai, Artificial Intelligence training institute in Dubai, advanced Artificial Intelligence course in Dubai, Artificial Intelligence course with placement guarantee, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-dubai"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Dubai"
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
            __html: ` {
 "@context": "https://schema.org/", 
 "@type": "HowTo", 
 "name": "How to apply for artificial intelligence course?",
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
 "name": "We provide Advanced artificial intelligence course in Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
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
 "text": "Get enrollment in our artificial intelligence course",
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
            __html: ` {
 "@context": "https://schema.org",
 "@type": "NewsArticle",
 "mainEntityOfPage": {
 "@type": "WebPage",
 "@id": "https://www.learnbay.co/"
 },
 "headline": "Artificial Intelligence (AI) course training in Dubai",
 "description": "Artificial Intelligence Course in Dubai. Learnbay is Advanced Artificial Intelligence Course Training Institute in Dubai. Artificial Intelligence course in Dubai will enhance your career",
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
/>        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [{
 "@type": "Question",
 "name": "What are Artificial Intelligence (AI) training courses available at Learnbay in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Foundational data science and Artificial Intelligence Training Course, Advanced data science and AI Certification Course, Machine learning and AI Certification, Data Science and AI Certification Course for Managers and Leaders Data Science and Artificial Intelligence Training with Job or Money-back Guarantee"
 }
 },{
 "@type": "Question",
 "name": "What are the prerequisites for these AI training Courses in Dubai?",
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
 "name": "What is a Flexi Subscription in these advanced artificial intelligence courses in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for AI live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 -3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends. Flexi Subscription Time-line: Foundational data science and Artificial Intelligence Training Course- 1 Year Advanced data science and AI Certification Course- 3 Years Machine learning and AI Certification- 3 Years Data Science and AI Certification Course for Managers and Leaders- 3 Years Data Science and Artificial Intelligence Training with Job or Money-back Guarantee - 3-years"
 }
 },{
 "@type": "Question",
 "name": "What is the duration of these advanced AI in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of these courses is about 6-15 months, which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Monday to Friday - 2 hours/day and Saturday & Sunday - 3.5 hours/day Foundational Data Science and Artificial Intelligence Training Course (220+ hours) Weekday batch - 6 months Weekend batch - 8 months Machine learning and AI Certification (280+ hours) Weekday batch - 9.5 months Weekend batch - 11 months Advanced Data Science and AI Certification Course (270+ hours) Weekday batch - 7 months Weekend batch - 9 months Data Science and AI Certification Course for Managers and Leaders (340+ hours) Weekday batch - 11 months Weekend batch - 13 months Data Science and Artificial Intelligence Training with Job or Money-back Guarantee (380+ hours) Weekday batch - 13 months Weekend batch - 15 months"
 }
 },{
 "@type": "Question",
 "name": "What is the learning mode of Artificial Intelligence Certification courses in Dubai at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online AI training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning in IBM artificial intelligence training courses in Dubai, At Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional AI certification courses provided by Learnbay in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack AI modules, via which you learn the respective industry’s best practices. But this added benefit is available in all the three mentioned courses, except the foundational AI course."
 }
 },{
 "@type": "Question",
 "name": "What are the available elective domain options in the different artificial intelligence training courses of Learnbay in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy"
 }
 },{
 "@type": "Question",
 "name": "Which domain elective within the Learnbay AI Certification courses is best suited for me?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
 }
 },{
 "@type": "Question",
 "name": "Why is domain specialization important in professional artificial intelligence certification?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "After enrolling in the advanced AI courses, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
 }
 },{
 "@type": "Question",
 "name": "Can I select multiple domain electives and do I need to pay extra charges in any of the eligible AI certification courses?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select a pre-set maximum number (based on course) of domain electives (both tech and non-tech) based on your interest and career goals. Advance Data Science and AI Certification course- Maximum 2 domains. Data Science and AI Certification Course for Managers and Leaders- All domains Data Science and Artificial Intelligence Training with Job or Money-back Guarantee- All domains Machine learning and AI Certification- maximum 4 domains No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
 "name": "What is the total fee for Learnbay AI Certifications courses in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and Artificial Intelligence Training Course is 76,700/- inclusive of GST. Advance Data Science and AI Certification course is 93,220/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,12,100/- inclusive of GST. Data Science and Artificial Intelligence Training with Job or Money-back Guarantee is 1,47,500/- inclusive of GST. Machine learning and AI Certification is 1,12,100/-inclusive of GST"
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for these AI Certification courses in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for up to 9 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship/discount available for these Artificial intelligence training courses available in Dubai? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for the Artificial Intelligence Certification courses at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many capstone projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depending on the course you choose the number of capstone projects will vary. Foundational Artificial Intelligence Training Course - 1 Capstone. Advance Data Science and AI Certification course -2 Capstones. Data Science and AI Certification Course for Managers and Leaders- 2 Capstones. Data Science and Artificial Intelligence Training with Job or Money-back Guarantee- 3 Capstones. Machine learning and AI Certification- 2 Capstones."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects/case studies will be covered in these artificial intelligence certification courses in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Depending on the course you choose the number of live projects will vary. Foundational Data Science and Artificial Intelligence Training Course- 8 projects. Advance Data Science and AI Certification course-12 projects. Data Science and AI Certification Course for Managers and Leaders- 15 projects. Data Science and Artificial Intelligence Training with Job or Money-back Guarantee- 15 projects. Machine learning and AI Certification- 15 projects. Click here to download the list of the projects."
 }
 },{
 "@type": "Question",
 "name": "How will the projects be executed in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
 }
 },{
 "@type": "Question",
 "name": "Is there any accredited AI certification after course completion?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded IBM accredited Data Scientist Certificate on successful course completion. But Based on the course you choose you can get Multiple certification options too. Foundational Data Science and Artificial Intelligence Training Course- 1 Course Completion Certificate. Advance Data Science and AI Certification course-1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. Data Science and AI Certification Course for Managers and Leaders- 1 Course Completion Certificate + 1-project experience certificate + 6 microdata science skills certificates= 8 Certificates. Data Science and Artificial Intelligence Training with Job or Money-back Guarantee- 1 Course Completion Certificates Machine learning and AI Certification- 1 Course Completion Certificate + 1-project experience certificate + 4 microdata science skills certificates = 6 Certificates. *All the certificates accredited by IBM. For more details, please refer to the respective course brochures."
 }
 },{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance Program in Learnbay artificial intelligence training courses in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
 },{
 "@type": "Question",
 "name": "How long will I get support for job assistance at Learnbay in Dubai?",
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
 "text": "Our Mentors will provide AI training to the students until the completion of the course."
 }
 },{
 "@type": "Question",
 "name": "Can a Learnbay student in Dubai choose to study from their desired mentor?",
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
                 } `
            }}
          />

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
  __html: ` {
"@context": "http://schema.org",
"@type": "EducationEvent","name": "Artificial intelligence Course Training in Dubai",
"description": "Artificial Intelligence Course in Dubai. Learnbay is Advanced Artificial Intelligence Course Training Institute in Dubai. Artificial Intelligence course in Dubai will enhance your career",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp",
"performer":"Learnbay", 
"offers":{
"@type": "AggregateOffer",
"lowPrice": "39999",
"highPrice": "110000",
"url" : "https://www.learnbay.co/",
"availability" : "https://schema.org/InStock",
"price": "95000",
"priceCurrency": "INR",
"validFrom": "2022-05-01"},
"startDate":"2022-05-01",
"endDate": "2022-10-31",
"url" : "https://www.excelr.com/data-science-course-training-in-bangalore","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Artificial intelligence Course Training in Dubai",
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
        <FirstSection dataScience={true}          deskTopPara="Job-oriented Data Science Training for working professionals"
          mTopPara="Job-oriented Data Science Training for working professionals"
          title="Artificial Intelligence (AI) Course Training in Dubai"
          mTitle="Artificial Intelligence (AI) Course Training in Dubai"
          spanTitleText=" For Managers and Leaders"
          spanMTitleText=" For Managers and Leaders"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course4.png"
          width="900"
          height="762"
          alt="artificial intelligence ai course training in dubai"
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
                <ProgramFee Emi="₹ 9,342/month" Fee="₹ 95,000 +GST" dataScience={true} />
        <div className="Feature" id="Feature">
          <BoxShape
          alt="artificial intelligence ai course training in dubai"
            title="Why Enroll In Artificial Intelligence Course Training in Dubai?"
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
              ProgramBot1="As a leading and progressive institution, Learnbay provides the most advanced and modernized Artificial intelligence course training in Dubai. Our instructors use the best teaching methods with a wide range of domain electives that students may find beneficial in the future in a variety of fields. They are committed to students’ growth and advancement of their careers. The artificial intelligence course in Dubai is a perfect option for working professionals and individuals interested in learning more about AI and how it functions in various businesses and industries. These courses offer an average salary hike of 97%. Even it sometimes reaches to 400%-450% range."
              ProgramHead3="How does Learnbay become the ideal place for you?"
              ProgramBot3="Learnbay provides custom-fit artificial intelligence training for Dubai Aspirants. Our artificial intelligence certification courses are affordable and have the option of flexibility in choosing mentors and batches. Here, the trainers explain each concept very clearly as well as share their professional experiences during live interactive classes. Additionally, they are also available to clear students' doubts."
              ProgramBot31="Our IBM artificial intelligence courses deliver the cutting-edge theoretical and practical aspects of AI implementation. Students are kept up-to-date with the current job market by using the latest AI technologies and modules."
              ProgramBot32="Learnbay even supports learners coming from non-IT backgrounds by arranging additional programming classes. They also host a variety of webinars and hackathons to help pupils learn efficiently."
              ProgramBot4="Additionally, you can even get a guarantee of job placement or money-back assurance in specific artificial intelligence certification programs."
              ProgramBot5="Available Artificial Intelligence Certification Courses by Learnbay in Dubai:"
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
              DomainBot1="Mastering artificial intelligence tools and techniques is not the only thing you need to be successful in this field. It is recommended that learners specialize in a certain area of expertise or Domain before applying for  AI or ML jobs. Besides, domain knowledge helps us achieve a high level of precision and accuracy. Domain specialization not only helps in salary boost but also enables you to handle job duties more efficiently. In one world, domain specialization makes your data science career more sustainable in the real sense."
              DomainBot2="That’s why we have offered different domain electives for our AI courses."
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
              CertificationHead1="Learnbay has achieved a remarkable breakthrough by partnering with IBM."
              CertificationBot1="The artificial intelligence course in Dubai provides students with a course completion IBM certificate. Apart from that, as you proceed through the modules, you will be issued extra IBM certificates for completing multiple Micro AI skills such as ML with Python, Deep Learning fundamentals, and so forth. Lastly, once you complete the capstone project, you will get an IBM project experience certification."
              CertificationBot2="As per your selected course, you will get around 1 to 8  certificates - all issued by IBM. This credential on your CV will make you a leap ahead of other applicants."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleBot1="Learnbay strives to provide the best Artificial Intelligence training possible for all AI enthusiasts in Dubai. Learnbay's artificial intelligence course comprises 400+ hours of interactive classes led by MAANG experts. On the other hand, The foundational and advanced data science and AI also consists of 200+ hours of sessions. Each of our modules is completely focused on the chosen fields. The IBM artificial intelligence course covers the most popular AI and ML tools and concepts as well as advanced probability and Numpy, Deep Learning, and MongoDB."
              ModuleBot2="With a Flexi pass, students can attend multiple classes in different batches with different instructors to learn at their convenience. "
              ModuleBot3="In addition to this, Learnbay has incorporated a dedicated programming module for All of its data science and AI courses which includes 6 to 8 hours of python and R programming training for non-technical folks."
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
              JobHead1="Job support program of artificial intelligence course:"
              JobBot1="Learnbay has a channel of 250+ hiring partners in Dubai and all over the world. It has helped countless AI and ML enthusiasts crack difficult interviews with our job assistance feature. This assistance includes portfolio building and soft skills training workshops. Our placement experts help them in finding the relevant AI job roles and prepare them accordingly. They also conduct personalized mock interviews as per the candidate's screening process of top MNCs and Dubai-based companies."
              JobBot2="If you are not placed within 6 months of course completion, you may request a refund of your AI course fee under Learnbay's job guarantee or money back program."
              JobHead2="Future of AI in Dubai"
              JobBot3="Dubai is known to be a smart city in every sense. It has increased its focus on the adoption of advanced technologies like AI and data science for the development of its society. In Dubai, AI has evolved vastly in the past few years with practical applications in real-world scenarios. With such a heavy emphasis on AI technologies, AI career opportunities in Dubai are also expanding rapidly. In the coming years, Artificial Intelligence, Robotics, and ML are projected to be the most in-demand specializations in the technology sector in Dubai."
              JobBot4="The most in-demand jobs over the next five years require some sort of AI knowledge."
              JobBot5="Learnbay’s artificial intelligence certification will make you learn job-ready skills to land a lucrative aI position in prominent firms in Dubai."
              ProjectsHead1="Real-world live artificial intelligence Projects"
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
              alt1="artificial intelligence ai course training in dubai"
              alt2="artificial intelligence ai course training in dubai"
              alt3="artificial intelligence ai course training in dubai"
              alt4="artificial intelligence ai course training in dubai"
              alt5="artificial intelligence ai course training in dubai"
              alt6="artificial intelligence ai course training in dubai"
              alt7="artificial intelligence ai course training in dubai"
              alt8="artificial intelligence ai course training in dubai"
              alt9="artificial intelligence ai course training in dubai"
            />
            <FAQNew
              FaqDatas={ArtificialFaqDataDu}
              DomainFaqDatas={ArtificialDomainFaqDataDu}
              PaymentFaqDatas={ArtificialPaymentFaqDataDu}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataDu}
              CertificationFaqDatas={ArtificialCertificationFaqDataDu}
              jobFaqDatas={ArtificialjobFaqDataDu}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataDu}
              SupportFaqDatas={ArtificialSupportFaqDataDu}
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
