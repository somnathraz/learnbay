import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import {
  MachineFaqDataB,
  MachineDomainFaqDataB,
  MachinePaymentFaqDataB,
  MachineCapstoneFaqDataB,
  MachineCertificationFaqDataB,
  MachinejobFaqDataB,
  MachineMentorshipFaqDataB,
  MachineSupportFaqDataB,
} from "../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Machine Learning Course in Bangalore with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the Most Advanced Machine Learning Training in Bangalore with Hands-on Projects, IBM Certification and Best Career Assistance. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Bangalore, Machine learning training in Bangalore, Machine learning institute in Bangalore, best Machine learning institute in Bangalore, Machine learning course in Bangalore, Machine learning certification in Bangalore, Machine learning training institute in Bangalore, advanced Machine learning course in Bangalore, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-bangalore"
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
 "name": "We provide machine learning course training in bangalore"
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
 "headline": "Machine Learning Course Training In Bangalore",
 "description": "Machine learning course in Bangalore. Learnbay is Advanced Machine Learning Course Training Institute in Bangalore. Machine Learning course in Bangalore will enhance your career",
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
 "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Bangalore?",
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
 "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Those who enroll for machine learning live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
 }
 },{
 "@type": "Question",
 "name": "What’s the duration of this Machine Learning course in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The duration of this course is about 11 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. You need to complete the modules within the specified duration to earn a certificate. Classes will be conducted on weekdays and weekend batches. Weekday batch - 9.5 months Monday to Friday - 2 hours/day Weekend batch -11 months Saturday & Sunday - 3.5 hours/day"
 }
 },{
 "@type": "Question",
 "name": "What is the mode of ML training at Learnbay, in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "We provide both classroom and online machine learning training modes. Based on your requirement, you can choose your preferred mode."
 }
 },{
 "@type": "Question",
 "name": "What is domain specialization associated with the Learnbay machine learning certification course in Bangalore?",
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
 "name": "Can I change my domain electives later?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
 }
 },{
 "@type": "Question",
 "name": "What is the total Fee for this machine learning course in Bangalore?",
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
 "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+"
 }
 },{
 "@type": "Question",
 "name": "What is the refund policy for this Machine Learning training course at Learnbay in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
 }
 },{
 "@type": "Question",
 "name": "How many capstone machine learning projects will be there?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "In this course, you’ll be required to work on 2 fresh capstone projects. This will help you get exposure to hands-on projects by implementing your theoretical knowledge gained throughout the training.."
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
 "name": "Is there any accredited certification after this machine learning course completion in Bangalore?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes, you will be awarded 6 separate IBM accredited Certificates on successful course completion of the Artificial Intelligence and AI Course."
 }
 },{
 "@type": "Question",
 "name": "What categories of certifications might I expect to receive?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Deep Learning Fundamentals Deep Learning with TensorFlow Machine Learning with Python Accelerating Deep Learning with GPUs Advance AI & ML Certificate (final) Capstone Project Certificate by IBM"
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
 "name": "Until when will the Learnbay students in Bangalore get the facility of mentorship?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
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
"@type": "EducationEvent","name": "Machine Learning Course Training In Bangalore",
"description": "Machine learning course in Bangalore. Learnbay is Advanced Machine Learning Course Training Institute in Bangalore. Machine Learning course in Bangalore will enhance your career",
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
          deskTopPara="Machine Learning Course For Experienced Tech Professionals"
          mTopPara="Machine Learning Course For Experienced Tech Professionals"
          mTitle="Machine Learning Course "
          spanMTitleText="Training In Bangalore"
          title="Machine Learning Course"
          spanTitleText="Training In Bangalore"
          desc="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          width="900"
          height="762"
          alt="machine learning course training in bangalore"
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
          dataScienceCounselling={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="machine learning course training in bangalore"
            title="Why Enroll In Machine Learning Course Training In Bangalore?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy and learn from mock interviews and CV writing workshops with PRODUCT Based Companies AI/ML industry experts."
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
              ProgramBot1="Enroll in Learnbay's tech domain-specific machine learning course in Bangalore as it provides learners a wide range of domain specialization. This Machine Learning and training program is one of the best options for working professionals living across Bangalore."
              ProgramBot2="We conduct interactive classes guided by ML experts from PRODUCT Based Companies companies. We give industrial exposure with Real-time and capstone projects so that students can learn from the real world. Students get 6 machine learning IBM certificates."
              ProgramHead3="Why Should You Choose This ML Training course in Bangalore?"
              ProgramBot3="With this professional machine learning certification, you get vivid options of domains to choose from and specialize in."
              ProgramBot31="It ensures smooth live classes and access to any batch/instructor at learners' convenience, along with a 3-year Flexi pass."
              ProgramBot32="Not only that. For all the study materials and recorded copies of attended classes, there remains Lifetime free access to Learnbay LMS. It can be accessible even on mobile devices to learn from anywhere."
              ProgramBot4="You can pay the machine learning course fees through easy EMI options."
              ProgramHead5="Why is Learnbay Machine learning Certification one of the best courses to learn in Bangalore?"
              ProgramHead6="Career opportunities and growth:"
              ProgramBot6="Machine learning (ML) will grow rapidly by 2025, creating new job roles and opportunities. ML can build your career so you can stand out in the crowd with these abilities. This machine learning program covers almost all work sectors like marketing. Finance, supply chain, e-commerce, hospitality, pharmaceutical, banking, etc."
              ProgramHead7="Best Salaries:"
              ProgramBot7="Machine learning engineers are among the highest-paid jobs in Bangalore and the IT domain. The average Machine learning engineer's salary is 8 LPA. It is the starting stage compensation range for machine learning professionals. As you get experience working as a Machine learning engineer, you might earn 15-23 lakhs per annum. The Learnbay ML and artificial intelligence course also help you choose the ML career path that fits best for you. But how?"
              ProgramBot8="They offer personalized ML career counseling and respective custom-fit learning modules as per your work experience and academic profile."
              ProgramHead9="Lack of Properly qualified machine learning experts"
              ProgramBot9="Every business is integrating Artificial intelligence and Machine learning. There is a smaller number of experts in Machine learning, so as it keeps advancing, there is an increase in demand for Machine learning experts in Bangalore. Everyone is getting certified machine learning professionals, and a few of them own the actual skills that the industry wants. Learnbay machine learning course goes beyond the certification and makes you industry competence in the real sense."
              DomainHead1="What type of specialization do you get in the Learnbay Machine learning Courses?"
              DomainBot1="Learnbay analyzes your profile and suggests the right domain for you. Students work within their respective domains and machine learning tools to expertise in a specific industry's ML skill. Learnbay's Machine learning training course in Bangalore offers tech-domain specialization so that you stand out in the domain students are best at."
              DomainBot2="In Bangalore, Learnbay has a wide range of domain electives for students to choose from and excel in Machine Learning skills"
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
              CertificationHead1="Six Machine learning IBM certificates by Paying a Single Machine Learning course fee"
              CertificationBot1="On the course completion, you get separate machine learning skill certificates from tech giant IBM for tools and skills like Deep Learning, Tensorflow, machine learning with python, capstone project certifications, etc. But the most significant achievement becomes the IBM ML project experience certification by completing two fresh capstone projects."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Advanced-AI-ML.jpeg"
              ModuleBot1="Learnbay Machine learning course in Bangalore contains 300 hrs of hassle-free live classes from PRODUCT Based Companies experts. With 18+ comprehensively planned machine learning modules, students can easily achieve advanced industrial knowledge. Not only that, each of the modules owns such a sequence of submodules from basic to expert level so that a complete novice can also utilize the course with 100% ROI."
              ModuleBot2="Learnbay supports students to learn the basics of coding for weak programmers. Our faculties regularly update coding assignments, and we even conduct webinars and hackathons for students to learn collaboratively. Based on the current industrial trends, the industrial ML course by Learnbay has kept its focus on tools and skills like big data analytics, data structure & algorithm, NLP, time- analytics, etc."
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
              JobHead1="How does Learnbay’s ML certification become the most promising training for cracking MNC machine learning interviews?"
              JobBot1="Learnbay is the best machine learning training institute in Bangalore from the perspective of job assistance. Our expert faculty offer you guidance on facing the product MNC Machine learning interviews with maximum possible efficacy. They prepare candidates with mock interviews and offer best-fit job referrals. Also, you get help with creating a resume and portfolio so that the same remains on top of the recruiter's list. Please note we provide guaranteed interview calls."
              JobHead2="Industrial Training with Ultimate Machine Learning Job Assistance"
              JobBot3="Moreover, there are various industry-paced exclusive hackathons and webinars to participate in. This also increases your chances of referrals."
              JobBot4="As already told, you get Multiple mock-interview sessions by Artificial intelligence and Machine learning experts of specific domains and product MNC's/job roles. The job assistance program consists of tips and tricks, suggestions for building a remarkable resume, and an online portfolio."
              ProjectsBot1="Learnbay is keen on students to work on live ML projects, and capstones as the existence of properly done projects would be a key factor in their resume or portfolio. The Learnbay Machine Learning course in Bangalore contains 15 real-time projects and 2 capstone projects. Get IBM certificates for completing the course and projects (separate certificate for industrial project experience by IBM)."
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
              Projectsp4=" BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="With the glory of 100% placement success, our Machine learning and AI course are becoming hugely popular day by day. Until now, 1000+ Learnbay candidates have already been placed in several MNCs and startups across Bangalore. All of them secured different highly paid machine learning job roles. Below is a small space where you can find a few such success stories."
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
              alt1="machine learning course training in bangalore"
              alt2="machine learning course training in bangalore"
              alt3="machine learning course training in bangalore"
              alt4="machine learning course training in bangalore"
              alt5="machine learning course training in bangalore"
              alt6="machine learning course training in bangalore"
              alt7="machine learning course training in bangalore"
              alt8="machine learning course training in bangalore"
              alt9="machine learning course training in bangalore"
            />
            <FAQNew
              FaqDatas={MachineFaqDataB}
              DomainFaqDatas={MachineDomainFaqDataB}
              PaymentFaqDatas={MachinePaymentFaqDataB}
              CapstoneFaqDatas={MachineCapstoneFaqDataB}
              CertificationFaqDatas={MachineCertificationFaqDataB}
              jobFaqDatas={MachinejobFaqDataB}
              MentorshipFaqDatas={MachineMentorshipFaqDataB}
              SupportFaqDatas={MachineSupportFaqDataB}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Machine Learning Course Certification Training locations in Bangalore "
          CityText=" :Ammrutha halli [560092], Maruthi Seva Nagar [560033], Kuvempu Layout [560077], Bellandur [560103], Jayanagar III Block [560011], Anandnagar [560024], Nandinilayout [560096], B SK II Stage [560070], Indiranagar [560038], Yelahanka [560063], Chickpet [560053], Domlur [560071], Bansashankari III Stage [560085], Vimanapura [560017], Nagarbhavi [560072], Basaveshwaranagar [560079], Bommanahalli [560068], Mico Layout [560076], Electronic City [560100], Taverekere [560029], Nehru Nagar [560020], Agram[560007], Halsuru Pete [560002], Basavanagudi [560004], R.M.V. Extension II [560094], Jayanagar [560041], Carmelaram [560035], New Thippasandra [560075], Kanakanagar [560032], Nayandahalli [560039], Fraser Town [560005], Jalahalli East [560014], Kacharakanahalli [560084], Malleswaram West [560055], Bannerghatta [560083], Srirampuram [560021], Rajarajeshwarinagar [560098], Sivan Chetty Gardens [560042], Dommasandra [562125], Whitefield [560066], Vidyaranyapura [560097], Bolare [560082], Mathikere [560054], Doddanekkundi [560037], Hampinnagar [560104], C.V.Raman Nagar [560093], Chikkabanavara [560090], Attur [560064], Kumbalagodu [560074], Bhattarahalli [560049], Chikkalasandra [560061], Sharada Nagar [560065], Jalahalli West [560015], H.K.P Road [560051], Jp Nagar III Phase [560078], Sadashiva nagar [560080], Krishnarajapuram R S [560016], Mahalakshipuram Layout [560086], Guddadahalli [560026], Chudenapura [560060], Vidhana Soudha [560001], Shanthinagar [560027], Rajaji Nagar [560010], Chandapura [560099], Ramakrishna Hegde Nagar [560045], Shalabh Bhatnagar [560012], Peenya [560058], Ashoknagar [560050], Jalahalli Nacen [560013], Banawadi [560043], Malleswaram [560003], Doddakallasandra [560062], K.G Road [560009], Muthusandra [560087], Marathahalli [560056], JC Nagar [560006], Chamrajpet [560018], HSR Layout [560102], Devanagundi [560067], Yeswanthpura [560022], Mahadevapura [560048],Hulsur Bazaar [560008],Magadi Road [560023], Adugodi [560030], Bagalgunte [560073], Devasandra [560036], Rv Niketan [560059], Narasimharaja Colony [560019], Koramangala VI Bk [560095], Agara [560034], Vijayanagar East [560040], Benson Town [560046], Viveknagar S.O [560047], Dasarahalli [560057], Bapagrama [560091], Richmond Town [560025]."
          CityTextLB="Locations Offered"
          CityTextL=" :Machine Learning Training in Bangalore, Machine Learning Course in Bangalore, Machine Learning Training in BTM, Machine Learning Training in Marathahalli, Machine Learning Institute in Bangalore, Machine Learning Training in Whitefield, Machine Learning Training in Kundalahalli, Machine Learning Training in ITPL, Machine Learning Training Institute in Marathahalli, Machine Learning Course in BTM, Machine Learning Course in Marathahalli, Machine Learning Course in Whitefield, Machine Learning Course Bommanahalli, Machine Learning Training in Bommanahalli, Machine Learning Training in Electronic city, Machine Learning Training in Koramangala, Machine Learning Classes in BTM, Machine Learning Classes in Bommanahalli, Machine Learning Classes in Whitefield, Machine Learning Classes in Marathahalli, Machine Learning Course in Koramangala, Machine Learning Training in Jayanagar, Machine Learning Certification in Bangalore, Machine Learning Certification Training in Bangalore, Machine Learning Certification in BTM, Machine Learning Certification in Whitefield, Best Machine Learning Training, Best Machine Learning Course"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
