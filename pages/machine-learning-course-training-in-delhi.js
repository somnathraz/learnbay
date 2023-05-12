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
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  MachineFaqDataD,
  MachineDomainFaqDataD,
  MachinePaymentFaqDataD,
  MachineCapstoneFaqDataD,
  MachineCertificationFaqDataD,
  MachinejobFaqDataD,
  MachineMentorshipFaqDataD,
  MachineSupportFaqDataD,
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
          Machine Learning Course in Delhi | Machine Learning Training in Delhi
        </title>
        <meta name="robots" content="index, follow"/>
        <meta
          name="description"
          content="Machine learning course in Delhi. Learnbay is Advanced Machine Learning Course Training Institute in Delhi. Machine Learning course in Delhi will enhance your career"
        />
        <meta
          name="keywords"
          content="Machine learning course in Delhi, Machine learning training in Delhi, Machine learning institute in Delhi, best Machine learning institute in Delhi, Machine learning course in Delhi, Machine learning certification in Delhi, Machine learning training institute in Delhi, advanced Machine learning course in Delhi, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-delhi"
        />
        {/* <meta name="robots" content="NOODP,NOYDIR" /> */}
         {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
 "headline": "Machine Learning Course Training in Delhi",
 "description": "Machine Learning Course in Delhi. Learnbay is Advanced Machine Learning Course Training Institute in Delhi. Machine Learning course in Delhi will enhance your career",
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
 "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
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
 "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for machine learning live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of this Machine Learning course in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this course is about 11 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. You need to complete the modules within the specified duration to earn a certificate. Classes will be conducted on weekdays and weekend batches. Weekday batch - 9.5 months Monday to Friday - 2 hours/day Weekend batch -11 months Saturday & Sunday - 3.5 hours/day."
 }
 },{
 "@type": "Question",
 "name": "What is the mode of ML training at Learnbay, in Delhi?",
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
 "name": "What is domain specialization associated with the Learnbay machine learning certification course in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We offer industry-specific full-stack ML modules, via which you learn the respective industry’s best practices."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization in the professional data science certification courses provided by Learnbay in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps; Sales, Marketing, & HR; Retail, E-Commerce, & Supply Chain; Healthcare, Pharma, & Clinical Research; BFSI; Manufacturing, Mechanical, & Telecom; Media, Hospitality, & Transportation; Oil, Gas, & Energy."
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
 "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988."
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
 "name": "Can I select multiple domain electives and do I need to pay extra charges?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You can select up to 4 domain electives based on your interest and career goals. No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
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
 "name": "What is the total fee for Data Science Certifications courses in Delhi? ?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total course fee for the Foundational Data Science and AI Training course is 88,500/- inclusive of GST. Advance Data Science and AI Certification course is 1,12,100/- inclusive of GST. Data Science and AI Certification Course for Managers and Leaders is 1,23,900/- inclusive of GST. Data Science and AI Training with Placement Assistance is 1,47,500/- inclusive of GST."
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
 "name": "What is the total Fee for this machine learning course in Delhi?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The total program fee for the Artificial Intelligence and Machine Learning Program is INR 1,23,900/- Inclusive of GST."
 }
 },{
 "@type": "Question",
 "name": "Can I pay in installments for 1,23,900/-?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,817/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
 }
 },{
 "@type": "Question",
 "name": "Is there any scholarship available for the Machine Learning certification? What is Group Discount?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for this Machine Learning training course at Learnbay in Delhi?",
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
 "text": "We have a set of 15 Real-time projects from multiple domains such as HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, AdvancedData Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc. Based on your interest you can choose your project to work on."
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
 "name": "Is there any accredited certification after this machine learning course completion in Delhi?",
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
 "name": "Until when will the Learnbay students in Delhi get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
 }
 },{
  "@type": "Question",
 "name": "Can a Learnbay student in Delhi choose to study from their desired mentor?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
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
"@type": "EducationEvent","name": "Machine Learning Course Training in Delhi",
"description": "Machine Learning Course in Delhi. Learnbay is Advanced Machine Learning Course Training Institute in Delhi. Machine Learning course in Delhi will enhance your career",
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
          deskTopPara="Job-Ready Machine Learning Training with Domain Specialization"
          mTopPara="Job-Ready Machine Learning Training with Domain Specialization"
          title="Machine Learning Course Training In Delhi"
          mTitle="Machine Learning Course Training In Delhi"
          spanMTitleText="Advance Program"
          spanTitleText="Advance Program"
          desc="Be eligible to work as an AI/ML expert in MNC/MAANG. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          width="900"
          height="762"
          alt="machine learning course training in delhi"
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
            p44="₹ 10,816/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 10,816/month"
          Fee="₹ 1,10,000 + 18% GST"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="machine learning course training in delhi"
            title="Why Enroll In Machine Learning Course Training In Delhi?"
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
              ProgramBot1="Learnbay in Delhi offers industry-accredited Machine Learning (ML) courses training with various domain electives. The primary goal of the IBM Machine Learning course is to provide learners with a practical learning experience. Due to this reason, the course specially focuses on capstone projects using cutting-edge industrial Machine Learning applications. The ultimate purpose of our Machine Learning training program is to develop a group of specialists capable of compensating for Delhi's shortage of domain-specific Machine Learning expertise."
              ProgramBot2="Our 300-hour Artificial Intelligence and Machine Learning course include two capstone projects and 15 real-world assignments. The most intriguing aspect of the Learnbay IBM Machine Learning course is the ability to create bespoke modules with multiple domain electives, such as marketing, sales, healthcare, and transportation. As it includes in-depth training from basic to advanced Machine Learning techniques, the lessons are accessible to both new graduates and working professionals from any domain."
              ProgramBot3="Even in the online method, our professors ensure that our students receive a high-quality education. They are also accessible to answer questions via interactive sessions at any time."
              ProgramHead4="Why is Learnbay the best Machine Learning Course Training In Delhi?"
              ProgramHead5="Customized Domain Specialization"
              ProgramBot5="Learnbay's Machine Learning course Training modules are quite unique. The parameters of the learners' background are considered, and custom-fit learning modules get drafted by an expert. These courses will teach you how to apply your domain knowledge to the challenging field of Machine Learning and Artificial Intelligence. This domain-specific Machine Learning training will surely improve students' ML applicability."
              ProgramHead6="Feasible and Flexible"
              ProgramBot6="Everyone can attend Learnbay's Machine Learning course training with placement. Aside from that,  Machine Learning course training in Delhi is adaptable to the needs of every learner. Students get three years of access to Learnbay LMS for a seamless learning experience with a Flexi membership. Candidates get options of selecting their favorite mentor or classes and attending the same. They can also switch classes and attend live lectures conducted by different mentors."
              DomainHead1="Why Domain Specialization?"
              DomainBot1="The major goal of Learnbay in Delhi is to deliver domain-specific Machine Learning course training. Individuals lacking domain expertise sometimes suffer during the Machine Learning job search process. On the other hand, recruiters are always on the lookout for candidates with domain-specific Artificial Intelligence and Machine Learning expertise."
              DomainBot2="Our experts tailored Learnbay IBM certified Machine Learning Course Training in Delhi to the candidates' preferred domain. The domain available at Learnbay are:"
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
              CertificationBot1="In collaboration with IBM, we provide a course completion certificate upon completing Learnbay's professional Machine Learning training course in Delhi. Interestingly, after finishing several modules of Artificial Intelligence and Machine Learning courses, students will receive six additional IBM credentials. The IBM Machine Learning Project Experience Certificate is the most important of all six certificates. These are undeniably valuable additions to your resume."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Advanced-AI-ML.jpeg"
              ModuleBot1="Learnbay is a great place for students to pursue Machine Learning course training in Delhi. Programming and Machine Learning technologies and advanced statistical applications are the core topics of this training in Delhi. Each of these modules contains a variety of domain-based case studies and advanced Machine Learning-related assignments."
              ModuleBot2="In addition, Learnbay provides basic programming training so that you can quickly catch up if you lack coding skills. All of our modules are solely focused on the chosen field of study. All the trending Machine Learning algorithms, advanced-level probability, Numpy, Pandas, Matploitlip, big data analytics, and other tools and approaches are covered in our modules."
              ModuleBot3="The Learnbay Machine Learning course in Delhi provides advanced training in Machine Learning and Artificial Intelligence with end-to-end placement support. Our IBM Machine Learning course Training has aided many enthusiasts in developing the top Machine Learning abilities needed to work in a variety of ML sub-fields like  "
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
              JobBot1="Learnbay's Machine Learning course job placement program is a service offered to job seekers from all walks of life by various sources. Career counseling, talent assessment, and communication assessment are part of the Machine Learning certification job aid. It also includes help with resume writing, portfolio building, and 1:1 mock interviews, all of which align with the candidate screening standards of major MNCs in Delhi."
              JobBot5="Learnbay's top feature has helped numerous Machine Learning enthusiasts master interviews and land jobs at startups and big corporations like Oracle, SAP, and Salesforce. Following that, our job placement specialists assist job seekers in locating and preparing for applicable job opportunities and interviews. Your IBM certificates will be unlocked after you complete the IBM Machine Learning course, and you'll be ready to ace Machine Learning interviews. We have a network of more than 250 hiring partners."
              JobHead2="Demand For Machine Learning Engineers"
              JobBot3="Machine Learning is a subset of Artificial Intelligence allowing software programs to improve the accuracy of their predictions. It is the study of computer algorithms improving independently due to experience and previous data."
              JobBot4="Machine Learning algorithms are now being used in various fields, including health, email filtering, and speech recognition. The frontiers of Machine Learning techniques are continually being stretched in today's tech world. Since Machine Learning is advancing rapidly. As a result, demand for Machine-Learning engineers/ experts is increasing, and it is expected to continue to rise as Artificial Intelligence, and Machine Learning become more advanced."
              JobBot6="A Machine Learning engineer's primary responsibility is to create and develop Artificial Intelligence algorithms capable of learning and making predictions. Surprisingly, the average salary for a Machine Learning engineer is around 10 LPA per year."
              JobBot7="Our professional Machine Learning training team will assist you in acquiring these industry-ready abilities so students can easily get employed in a high-paying Machine Learning job. Learnbay's credibility and knowledge are unquestionable."
              ProjectsBot1="Learnbay's cloud lab function is a great resource for handling current Machine Learning projects from multinational corporations. Any student, no matter where they are, can use the cloud lab at any moment for expert Machine Learning techniques instructions."
              ProjectsBot2="You can choose from over 15 real-world projects in your chosen domain here. You'll also have the chance to work on two Artificial Intelligence and Machine Learning capstone projects, for which you'll receive IBM project completion certificates. Several domain-based Machine Learning projects have previously been completed by our students:"
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
              Projectsp4=" BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Within three months of completing our Machine Learning course, numerous Learnbay students were able to find their ideal job. Even 70% of our students receive the offer letter while reaching the 80% of course completion. More than 700+ students in Delhi and other cities have landed high-paying jobs in Artificial Intelligence and Machine Learning. Our Students Sharing Success With Learnbay"
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
              alt1="machine learning course training in delhi"
              alt2="machine learning course training in delhi"
              alt3="machine learning course training in delhi"
              alt4="machine learning course training in delhi"
              alt5="machine learning course training in delhi"
              alt6="machine learning course training in delhi"
              alt7="machine learning course training in delhi"
              alt8="machine learning course training in delhi"
              alt9="machine learning course training in delhi"
            />
            <FAQNew
              FaqDatas={MachineFaqDataD}
              DomainFaqDatas={MachineDomainFaqDataD}
              PaymentFaqDatas={MachinePaymentFaqDataD}
              CapstoneFaqDatas={MachineCapstoneFaqDataD}
              CertificationFaqDatas={MachineCertificationFaqDataD}
              jobFaqDatas={MachinejobFaqDataD}
              MentorshipFaqDatas={MachineMentorshipFaqDataD}
              SupportFaqDatas={MachineSupportFaqDataD}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Machine Learning Course Certification Training locations in Delhi "
          CityText=" :Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
          CityTextLB="Locations Offered"
          CityTextL=" :Machine Learning Training in delhi, Machine Learning Course in delhi, Machine Learning Training in Connaught Place, Machine Learning Training in Karol Bagh , Machine Learning Institute in Delhi, Machine Learning Training in kamla nagar, Machine Learning Training in kalu sarai, Machine Learning Training in J N U, Machine Learning Training Institute in Connaught Place, Machine Learning Course in Connaught Place, Machine Learning Course in Saket, Machine Learning Course in old rajinder nagar, Machine Learning Course Connaught Place , Machine Learning Training in (N.S.P) Netaji Subhash Place, Machine Learning Training in Pitampura, Machine Learning Classes in Connaught Place, Machine Learning Classes in J N U, Machine Learning Classes in Connaught Place, Machine Learning Classes in Delhi, Machine Learning Course in vishwa vidyalaya, Machine Learning Training in kalu sarai, Machine Learning Certification in Delhi, Machine Learning Certification Training in Delhi, Machine Learning Certification in Connaught Place, Machine Learning Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Machine Learning Training, Best Machine Learning Course, Best Data Scientist course, Best Data Scientist Training"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
