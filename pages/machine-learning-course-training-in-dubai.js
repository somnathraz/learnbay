import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import React, { useState } from "react";
import {
  MachineFaqDataDu,
  MachineDomainFaqDataDu,
  MachinePaymentFaqDataDu,
  MachineCapstoneFaqDataDu,
  MachineCertificationFaqDataDu,
  MachinejobFaqDataDu,
  MachineMentorshipFaqDataDu,
  MachineSupportFaqDataDu,
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
          Machine Learning Course in Dubai | Machine Learning Training in Dubai
        </title>
        <meta
          name="description"
          content="Machine learning course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning course in Dubai will enhance your career"
        />
        <meta
          name="Keywords"
          content="Machine learning course in Dubai, Machine learning training in Dubai, Machine learning institute in Dubai, best Machine learning institute in Dubai, Machine learning course in Dubai, Machine learning certification in Dubai, Machine learning training institute in Dubai, advanced Machine learning course in Dubai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-dubai"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training Dubai"
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
 "name": "How to apply for machine learning course?",
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
 "name": "We provide Advanced machine learning course in Bangalore, Delhi, Pune, Chennai, Hyderabad, Mumbai, Canada, Dubai"
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
 "text": "Get enrollment in our machine learning course",
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
 "headline": "Machine learning course training in Dubai",
 "description": "Machine learning course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning course in Dubai will enhance your career",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp", 
 "author": {
 "@type": "Organization",
 "name": "Learnbay",
 "url": "https://learnbay.co/"
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
 "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Basic programming & mathematics knowledge is enough. For strengthening your programming skills we provide special programming classes. We teach required statistics from a very basic level."
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
 "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for machine learning live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of this Machine Learning course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this course is about 11 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. You need to complete the modules within the specified duration to earn a certificate. Classes will be conducted on weekdays and weekend batches. Weekday batch - 9.5 months Monday to Friday - 2 hours/day Weekend batch -11 months Saturday & Sunday - 3.5 hours/day"
 }
 },{
 "@type": "Question",
 "name": "What is the mode of ML training at Learnbay, in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online machine learning training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "How can I opt for a Hybrid mode of learning?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization associated with the Learnbay machine learning certification course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack ML modules, via which you learn the respective industry’s best practices."
 }
 },{
 "@type": "Question",
 "name": "What are the available elective domain options?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc."
 }
 },{
 "@type": "Question",
 "name": "Which domain elective is best suited for me?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988"
 }
 },{
 "@type": "Question",
 "name": "Why is domain specialization important?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "After enrolling in the ML with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
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
 "name": "What is the total Fee for this machine learning course in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Artificial Intelligence and Machine Learning Program is INR 1,23,900/- Inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for 1,23,900/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,325/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship available for the Machine Learning certification? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Group of 4+."
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for this Machine Learning training course at Learnbay in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many capstone machine learning projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In this course, you’ll be required to work on 2 fresh capstone projects. This will help you get exposure to hands-on projects by implementing your theoretical knowledge gained throughout the training."
 }
 },{
 "@type": "Question",
 "name": "How many real-time projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We have a set of 15 Real-time projects from multiple domains such as HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, AdvancedData Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc. Based on your interest you can choose your project to work on. Click here to download the list of the projects."
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
 "name": "Is there any accredited certification after this machine learning course completion in Dubai?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded 6 separate IBM accredited Certificates on successful course completion of the Artificial Intelligence and AI Course."
 }
 },{
 "@type": "Question",
 "name": "What categories of certifications might I expect to receive?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Deep Learning Fundamentals Deep Learning with TensorFlow Machine Learning with Python Accelerating Deep Learning with GPUs Advance AI & ML Certificate (final) Capstone Project Certificate by IBM."
 }
 },{
 "@type": "Question",
 "name": "What's the eligibility for a job assistance program at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
 }
 },{
 "@type": "Question",
 "name": "How long will I get support for job assistance?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
 }
 },{
 "@type": "Question",
 "name": "What is a job-readiness program?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Job readiness programs help you prepare for interviews which include: Resume Preparation sessions Preparing projects for a strong portfolio Interview guidance and prep sessions 1:1 Mock interviews based on targeted companies and roles"
 }
 },{
 "@type": "Question",
 "name": "Will I get job referrals at Learnbay?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies."
 }
 },{
 "@type": "Question",
 "name": "Until when will the Learnbay students in Dubai get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
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
 "name": "When is the job assistance provided and for how long I will get the service?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Placement assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNCs/startups. This assistance is provided until one gets placed in a company."
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
"@type": "EducationEvent","name": "Machine learning Course Training in Dubai",
"description": "Machine learning course in Dubai. Learnbay is Advanced Machine Learning Course Training Institute in Dubai. Machine Learning course in Dubai will enhance your career",
"image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
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
"url" : "https://www.learnbay.co/","duration":"80", 
"eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
"eventStatus":"http://schema.org/EventScheduled",
 "location": [{
 "@type": "VirtualLocation",
 "url" : "https://www.learnbay.co/"
 },{
 "@type": "Place",
 "name": "Learnbay - Machine learning Course Training in Dubai",
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
          deskTopPara="Product MNC Job-Ready Machine Learning Certification"
          mTopPara="Product MNC Job-Ready Machine Learning Certification"
          title="Machine learning course training in Dubai"
          mTitle="Machine learning course training in Dubai"
          spanMTitleText="Advance Program"
          spanTitleText="Advance Program"
          desc="Be eligible to work as an AI/ML expert in MNC/MAANG. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          width="900"
          height="762"
          alt="machine learning course training in dubai"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
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
            alt="machine learning course training in dubai"
            title="Why Enroll In Machine Learning Course Training In Dubai?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy and learn from mock interviews and CV writing workshops with MAANG AI/ML industry experts."
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
              ProgramHead1="Industry-driven Machine Learning Training"
              ProgramBot1="Learnbay is a dedicated institute offering Dubai's best machine learning (ML) course. It provides the most convenient and reasonably priced machine learning training that helps students to gain proper knowledge and understanding of machine learning and AI applications."
              ProgramBot2="What makes this machine learning training so special is that it offers customizable modules with a variety of domain selections, including marketing, banking, DevOps, and other related fields. It is the best option for working professionals wanting a career switch to Machine learning and artificial intelligence in Dubai."
              ProgramBot3="This machine learning course with placement is designed to be an intensive program that provides a hands-on experience in the field of machine learning, starting with an understanding of pattern recognition and classical algorithms like k-nearest neighbors and support vector machines."
              ProgramHead4="What are the objectives of the Learnbay Machine Learning Course in Dubai?"
              ProgramBot4="Learnbay, being one of the leading ed-tech companies in Dubai, offers the best facilities to its students. The main objective of this program is to develop tons of professionals capable of compensating for Dubai’s severe shortage of domain-specific ML experts."
              ProgramBot5="This IBM Machine learning course focuses on practical aspects that are directly applicable to real-world problems. We have experienced faculties working in major tech companies. A total of 15+ projects are included in this course to help you leap ahead of the competition."
              ProgramBot6="This instructor-led machine learning course is a 9.5-months training program that is conducted completely live and interactive. With a Flexi subscription, students will be able to use the Learnbay LMS for three years for a seamless learning process. You will also have the flexibility to choose your preferred batches and instructors."
              ProgramBot7="Here, you learn the best machine-learning tools and the latest techniques and have access to the right experts, all under one roof!"
              ProgramBot10="Know more about Artificial Intelligence and Machine Learning Training Program by Learnbay in Dubai"
              DomainHead1="Why Domain Specialization?"
              DomainBot1="Learnbay strives to provide the greatest possible training for ML aspirants as per the current job market in Dubai. A machine learning certification is utterly pointless unless you know how to apply those ML techniques in a specific field like healthcare, supply chain, banking, etc. Moreover, it will be hard for you to get at the top of the shortlisted candidates. Hence, we’ve built our ML courses accordingly, where you will have to choose a domain(s) based on your interest or prior experience."
              DomainBot2="Learnbay’s machine learning course in Dubai comes with the following domain options:"
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
              DomainBot3="The ML modules you get will be extremely focused on your chosen elective(s). This increases the chances of your selection as an ML professional in a multinational firm by 120%."
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
              CertificationHead1="Multiple IBM Certifications"
              CertificationBot1="The machine learning course in Dubai has an end-to-end collaboration with IBM. This machine learning course provides a total of 6 certificates for completing multiple ML skills, issued directly by IBM. Along with the machine learning course completion certificate and project certificate, you will get four additional certificates for different ML skills."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Advanced-AI-ML.jpeg"
              ModuleBot1="The machine learning course in Dubai comprises 15+ modules that cover all the latest ML tools and techniques. The modules are planned progressively from basic to advanced so that even a newbie can start learning with more efficacy. "
              ModuleBot2="This 9.5-month training program is well balanced in theoretical and practical training that covers the essential topics of AI and ML algorithms, Statistics, TensorFlow Time Series analysis, regression tree, etc. Apart from these ML modules, Learnbay also provides an additional basic Python and R programming module. Consequently, learners' weeks in programming need not be concerned about a lack of coding experience."
              ModuleBot3="Moreover, 70% of the modules direct you to do practical coding where you have to tricky apply your learned theoretical concerts. To make you adequately alert for the real world, we focus more on hands-on training rather than traditional theoretical learning."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
              JobBot1="Learnbay does its best at training young enthusiasts as well as highly experienced professionals. It ensures that all students are placed in desirable positions at top MAANG/ MNC companies. This is why we have included a dedicated job assistance program for our IBM machine learning courses. We provide end-to-end machine learning interview sessions by ML experts. Such sessions include resume preparation, company-specific mock interviews, and project portfolio management. Our experts will continue to guide them until they are placed in relevant ML positions."
              JobBot5="We have a strong network of over 250 hiring partners like Accenture, Adobe, etc., in Dubai and other cities worldwide."
              JobHead2="What is the ML market trend in Dubai?"
              JobBot3="Machine Learning is one of the most popular and well-paid career fields in Dubai. Most importantly, it's the most future-proof job field. It requires a combination of technical skills and business knowledge, as well as curiosity and creativity. It helps to make data-driven decisions based on historical and live analysis of the data."
              JobBot4="The demand for machine learning is booming not only in Dubai but all over the globe. Machine learning's boundaries are continually being pushed in the tech industry. In the future, the jobs in Dubai will focus largely on machine learning and Artificial Intelligence."
              JobBot6="Our machine learning course with placement will help you develop job-ready ML skills and help you prepare for the real world in Dubai."
              ProjectsBot1="Considering the importance of having real-world experience in securing a profitable ML and AI career, we have featured 15 domain-focused real-world projects along with two fresh capstone projects in our machine learning course in Dubai. The projects are entirely guided by mentors who will help your learning easier. As a result, you can learn directly about industry-specific practices and ML techniques."
              ProjectsBot2="You’ll be provided with an IBM project certificate upon completing the capstone project. With our premium cloud lab feature, students will be able to observe the live machine learning projects from MNCs. At the same time, doing the hands-on assignment, you have to apply your observed knowledge to offer precise solutions as well as to qualify for micro-skills certificates."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.
    "
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Machine Learning abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.
    "
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4=" BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A Machine Learning-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has already satisfied the professions of many AI and ML enthusiasts. Over 70% of those who enrolled in our IBM machine learning course have got their offer letters within 2 to 3 months of course completion. Several Learnbay alumni are currently working as ML Engineers, Machine Learning developers, and data scientists in Dubai. The majority of the working professionals also got an average of 97% salary hike after enrolling in our ML course. Even a few got a 450% payrise. Read the success stories of Learnbay Alumni:"
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable Machine Learning institutes I've come across. Compared to other institutes in India, it offers a Machine Learning course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
              alt1="machine learning course training in dubai"
              alt2="machine learning course training in dubai"
              alt3="machine learning course training in dubai"
              alt4="machine learning course training in dubai"
              alt5="machine learning course training in dubai"
              alt6="machine learning course training in dubai"
              alt7="machine learning course training in dubai"
              alt8="machine learning course training in dubai"
              alt9="machine learning course training in dubai"
            />
            <FAQNew
              FaqDatas={MachineFaqDataDu}
              DomainFaqDatas={MachineDomainFaqDataDu}
              PaymentFaqDatas={MachinePaymentFaqDataDu}
              CapstoneFaqDatas={MachineCapstoneFaqDataDu}
              CertificationFaqDatas={MachineCertificationFaqDataDu}
              jobFaqDatas={MachinejobFaqDataDu}
              MentorshipFaqDatas={MachineMentorshipFaqDataDu}
              SupportFaqDatas={MachineSupportFaqDataDu}
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
