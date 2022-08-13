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
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  ArtificialFaqDataCa,
  ArtificialDomainFaqDataCa,
  ArtificialPaymentFaqDataCa,
  ArtificialCapstoneFaqDataCa,
  ArtificialCertificationFaqDataCa,
  ArtificialjobFaqDataCa,
  ArtificialMentorshipFaqDataCa,
  ArtificialSupportFaqDataCa,
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
          Artificial Intelligence Course in Canada | Artificial Intelligence
          Training in Canada
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Canada. Learnbay is Advanced Artificial Intelligence Course Training Institute in Canada. Artificial Intelligence course in Canada will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Canada, Artificial Intelligence training in Canada, Artificial Intelligence institute in Canada, best Artificial Intelligence institute in Canada, Artificial Intelligence course in Canada, Artificial Intelligence certification in Canada, Artificial Intelligence training institute in Canada, advanced Artificial Intelligence course in Canada, Artificial Intelligence course with placement guarantee, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-canada"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Canada"
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
          deskTopPara="Job-Assured Artificial Intelligence Training  Program"
          mTopPara="Job-Assured Artificial Intelligence Training  Program"
          title="Artificial Intelligence(Ai) Course Training In Canada"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course4.png"
          width="900"
          height="762"
          alt="AiMl Header"
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
        <GetHired
          WeekdayBatchDate="Global Recognition : Earn 6 micro-skill certificates by IBM"
          WeekendBatchDate="Special Project Management module as per industrial requirement"
          Project="12+ domain electives to choose from "
          Classes="Specially devised for leadership-level professionals"
          OneLine="15 live industry projects & 2 fresh Capstones"
          Interview="Assured interview calls from 250+ recruiter network"
          Fee="95,000"
          Subscription="3 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
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
              ProgramHead1="What is the Domain- specialized Artificial Intelligence course in Canada?"
              ProgramBot1="Learnbay is a world-leading education provider offering industry-oriented artificial intelligence course training. The Artificial intelligence course in Canada is an extensively comprehensive course that's focused on delivering domain-based artificial intelligence modules. This AI course is intended for people who want to apply Artificial Intelligence in a specific domain as well as beginners interested in learning more about AI and ML."
              ProgramBot2="AI is quickly becoming the go-to machine learning tool for many industries and professionals in Canada. Our artificial intelligence and data science courses are designed by experienced AI practitioners to teach students the AI tools and resources needed to work on real-world problems. All course materials, including recorded videos, case studies, programming classes, and projects, can be accessed via Learnbay LMS  anytime and anywhere."
              ProgramHead3="Why should you choose Learnbay for your artificial intelligence career?"
              ProgramBot3="Learnbay’s mission is to provide a world-class education to AI and data science aspirants across Canada. The instructors train and share their experiences through live interactive classes. In addition, they are available to answer your queries during doubt clearing sessions. Interestingly, the modules of the IBM artificial intelligence course are affordable and flexible with the option of zero cost EMI, making it the best artificial Intelligence course in Canada. Our IBM Artificial intelligence Course provides an orientation to the theoretical and practical knowledge in using and implementing AI algorithms."
              ProgramBot31="With world-class education and cutting-edge research, we help you to become an AI expert in your chosen field."
              ProgramHead4="Available Artificial Intelligence Certification Courses by Learnbay in Canada:"
              Courselink1="/data-science-certification-courses"
              Courselink2="/advance-data-science-certification-courses"
              Courselink3="/artificial-intelligence-certification-course"
              Courselink4="/data-science-ai-for-Managers"
              Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
              Course1="Foundational Data Science and AI Program"
              Course2="Advanced-Data Science and AI Program with Domain Specialization"
              Course3="Artificial Intelligence and Machine Learning Program with Domain Specialization"
              Course4="Data Science and AI Program for Managers and Leaders"
              Course5="AI and Data Science Course with Job Guarantee or Money back"
              DomainHead1="Why Domain Specialization?"
              DomainBot1="The ability to specialize in a particular field is essential to succeed in the artificial intelligence job market. AI and ML practitioners have a wide range of responsibilities; hence they must have a thorough understanding of their Domain, as well as artificial intelligence applications and AI & ML tools used in the current workplace."
              DomainBot2="Moreover, applicants with domain expertise are more likely to be considered for the AI and ML positions. This is why you should opt for domain-specific AI certification courses."
              DomainBot3="You’ll have the following domain options in our AI courses:"
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
              CertificationBot1="Learnbay’s artificial intelligence courses include not one but multiple IBM certifications on completing distinct modules. You will receive 1 to 8 certificates depending on the course you select. (Refer to the respective course section for more information)."
              CertificationBot2="Additionally, you'll be issued an IBM project experience certificate upon completing your capstone projects. Our strong partnership with IBM and MNCs has helped countless students in propelling their careers in Artificial Intelligence and machine learning."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleHead1="Programming Classes:"
              ModuleBot1="We’ve added Module 0 of python programming classes specialized for non-technical learners. All of our AI courses are open to non-coders. You'll go from being a complete novice to an expert in Artificial Intelligence with this course."
              ModuleHead2="DS and AI module:"
              ModuleBot3="Our instructors have designed the modules in such a way that it's understandable to our learners. Each of our modules is entirely dedicated to the preferred domains. Topics covered in the data science and artificial intelligence course include machine learning, robotics, computer vision, and natural language understanding. You will also be familiar with popular AI and ML tools like Numpy, Pandas, Matplotlib, and MongoDB."
              ModuleBot4="In addition, you will develop a range of AI applications using real-world datasets and practical coding exercises. After the AI course, you will be able to implement exciting projects in artificial Intelligence."
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
              JobHead1="What is the Job Assist Program in the Learnbay AI courses?"
              JobBot1="Learnbay career coaches help students in developing impressive portfolios as well as refer their profiles to other renowned companies. They ensure you get guaranteed interviews in top Canadian firms. Besides this, you’ll also be provided with multiple mock interviews for AI and ML positions to help you in facing real-world interviews."
              JobBot2="In our job or money-back guarantee program, you will receive a full refund of your AI course fee in case you are unable to find a relevant job within 6 months after the course completion."
              JobHead2="Scope of  Artificial Intelligence in Canada:"
              JobBot3="An Artificial Intelligence (AI) field of computer science is concerned with creating machines that are capable of performing certain human-like tasks. It is replacing humans' grunt work, saving big businesses billions of dollars each year. Contrarily, many Canadian IT firms are built on AI and ML. Artificial Intelligence appears to have an endless capacity for improving and simplifying jobs performed by humans, such as speech recognition and business management processing. And it's only becoming smarter, faster, and better."
              JobBot4="As you can see, the world of AI and Machine Learning is growing exponentially every single year, creating a number of opportunities for you to learn and get work on the latest and most significant projects in many IT enterprises."
              JobBot6="There are numerous career opportunities available to you, including AI engineer, Data scientist,  Machine Learning Engineer, Robotics engineer, and more."
              ProjectsHead1="Live Artificial Intelligence and Data Science projects:"
              ProjectsBot1="Learnbay trainers make sure that our students gain valuable practical experience by working on a variety of real-time projects. Its unique cloud lab feature allows them to interact with a variety of live AI and ML projects from leading multinational corporations. In our artificial intelligence course, you will have the privilege of working on 15+ live projects related to your Domain. By the end of all modules, you will be able to work on fresh capstone AI and data science projects that will boost your portfolio. Several students have previously worked on data science and AI projects, which are shown below:"
              src1="/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a"
              src4="/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects. Take a look at some of the reviews of our alumni."
              AlumniBot1="Learnbay has trained several enthusiastic learners to secure their careers in artificial Intelligence. It has guaranteed job placement for students and has already placed over 1000+ learners in prestigious companies like IBM, MindTree, Accenture, and other Canadian companies."
              Asrc1="/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
            />
            <FAQNew
              FaqDatas={ArtificialFaqDataCa}
              DomainFaqDatas={ArtificialDomainFaqDataCa}
              PaymentFaqDatas={ArtificialPaymentFaqDataCa}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataCa}
              CertificationFaqDatas={ArtificialCertificationFaqDataCa}
              jobFaqDatas={ArtificialjobFaqDataCa}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataCa}
              SupportFaqDatas={ArtificialSupportFaqDataCa}
            />{" "}
          </div>
        </div>
        <LearnSupport />

      </main>
    </div>
  );
}
