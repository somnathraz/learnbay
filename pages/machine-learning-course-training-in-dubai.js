import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import LearnSupport from "../components/LearnSupport/LearnSupport";
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
          content="Machine learning course in Dubai, Machine learning training in Dubai, Machine learning institute in Dubai, best Machine learning institute in Dubai, Machine learning course in Dubai, Machine learning certification in Dubai, Machine learning training institute in Dubai, advanced Machine learning course in Dubai, Machine learning course with placement guarantee, Machine learning course"
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
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <p>Fill the below details to get started</p>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara="Product MNC Job-Ready Machine Learning Certification"
          mTopPara="Product MNC Job-Ready Machine Learning Certification"
          title="Machine learning course training in Dubai"
          desc="Be eligible to work as an AI/ML expert in MNC/MAANG. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          src="/course3.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/AIML.pdf"
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
        <GetHired
          WeekdayBatchDate="4 IBM Certified AI/ML micro-skill certificates"
          WeekendBatchDate="IT-specific domain-oriented full-stack learning with 8+ domains to choose from"
          Project="Learn the latest tools and technologies in AI and ML"
          Classes="Specially curated syllabus for technical professionals"
          OneLine="12 live industry projects & 2 fresh capstone projects"
          Interview="Assured interview calls from 250+ recruiter network"
          Fee="95,000"
          Subscription="3 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program"
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
              src="/Advanced-AI-ML.jpeg"
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/AIML.pdf"
              JobBot1="Learnbay does its best at training young enthusiasts as well as highly experienced professionals. It ensures that all students are placed in desirable positions at top MAANG/ MNC companies. This is why we have included a dedicated job assistance program for our IBM machine learning courses. We provide end-to-end machine learning interview sessions by ML experts. Such sessions include resume preparation, company-specific mock interviews, and project portfolio management. Our experts will continue to guide them until they are placed in relevant ML positions."
              JobBot5="We have a strong network of over 250 hiring partners like Accenture, Adobe, etc., in Dubai and other cities worldwide."
              JobHead2="What is the ML market trend in Dubai?"
              JobBot3="Machine Learning is one of the most popular and well-paid career fields in Dubai. Most importantly, it's the most future-proof job field. It requires a combination of technical skills and business knowledge, as well as curiosity and creativity. It helps to make data-driven decisions based on historical and live analysis of the data."
              JobBot4="The demand for machine learning is booming not only in Dubai but all over the globe. Machine learning's boundaries are continually being pushed in the tech industry. In the future, the jobs in Dubai will focus largely on machine learning and Artificial Intelligence."
              JobBot6="Our machine learning course with placement will help you develop job-ready ML skills and help you prepare for the real world in Dubai."
              ProjectsBot1="Considering the importance of having real-world experience in securing a profitable ML and AI career, we have featured 15 domain-focused real-world projects along with two fresh capstone projects in our machine learning course in Dubai. The projects are entirely guided by mentors who will help your learning easier. As a result, you can learn directly about industry-specific practices and ML techniques."
              ProjectsBot2="You’ll be provided with an IBM project certificate upon completing the capstone project. With our premium cloud lab feature, students will be able to observe the live machine learning projects from MNCs. At the same time, doing the hands-on assignment, you have to apply your observed knowledge to offer precise solutions as well as to qualify for micro-skills certificates."
              src1="/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.
    "
              src2="/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Machine Learning abilities."
              src3="/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.
    "
              src4="/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A Machine Learning-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has already satisfied the professions of many AI and ML enthusiasts. Over 70% of those who enrolled in our IBM machine learning course have got their offer letters within 2 to 3 months of course completion. Several Learnbay alumni are currently working as ML Engineers, Machine Learning developers, and data scientists in Dubai. The majority of the working professionals also got an average of 97% salary hike after enrolling in our ML course. Even a few got a 450% payrise. Read the success stories of Learnbay Alumni:"
              Asrc1="/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable Machine Learning institutes I've come across. Compared to other institutes in India, it offers a Machine Learning course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
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
            <LearnSupport />
          </div>
        </div>
        <CityText
          CityTextB="Machine Learning Course Certification Training locations in Dubai "
          CityText=" :Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Dubai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Machine Learning Course viman nagar,Machine Learning Training in kalyan nagar,Machine Learning Training in magarpetta,Machine Learning Training in pimpri chinchwad,Machine Learning Classes in yerwada,Machine Learning Classes in kharadi,Machine Learning Classes in vishrantwadi,Machine Learning Classes in deccan,Machine Learning Course in Katraj,Machine Learning Training in warje,,Machine Learning Certification Training in bavdhan,Machine Learning Certification in boat club road,Machine Learning Certification in model colony,Best Machine Learning Training in Dubai,Best Machine Learning Course in Dubai"
        />
      </main>
    </div>
  );
}
