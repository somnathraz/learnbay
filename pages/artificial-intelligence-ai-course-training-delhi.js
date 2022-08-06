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
          deskTopPara="Becomes an AI Expertise In Product Based MNCs"
          mTopPara="Becomes an AI Expertise In Product Based MNCs"
          title="Artificial Intelligence (AI) Course Training in Delhi"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="/course4.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DSAI+MANAGERS.pdf"
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
            title="Why Enroll In This Program"
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
              src="/Managers-4.jpeg"
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DSAI+MANAGERS.pdf"
              JobHead1="What is the process of job assistance in Learnbay AI courses?"
              JobBot1="The career consultants at Learnbay will help you improve your CV and portfolio. Your CV and portfolio are also sent to other firms through Learnbay. Learnbay assures that you will get interviewed by top-tier organizations in Delhi. You'll also have the opportunity to participate in simulated interviews, which will help you prepare for difficult real-life interviews."
              JobBot2="The Job or Money-Back Guarantee program promises you will receive a total refund of your AI course expenses if you do not get hired within six months of completing the course."
              JobHead2="Why is Artificial Intelligence (AI) course Training a great start to the working professional seeking career switch in Delhi?"
              JobBot3="Artificial Intelligence (AI) is a general phrase that refers to the process of making machines and computers behave like humans without the need for human involvement. As the knowledge and experience of this profession continue to grow, it is becoming a popular career choice. Artificial intelligence and machine learning is the heart of many IT firms. This big global phenomenon is on the verge of taking over many industries. As a result, the demand for Artificial Intelligence specialists has risen effectively. The next few years will be rewarding for AI specialists in Delhi and India."
              JobBot4="In Artificial Intelligence, you can work as an AI engineer, a Machine Learning Engineer, a Robotics Engineer, and a range of other jobs. Due to the incredible industrial exposures and individualized career-oriented learning modules, the AI courses of Learnbay ensure a successful as well as sustainable data science career switch, even For Non-Programmers."
              ProjectsBot1="Throughout the course, Learnbay instructors guarantee that students apply their newly learned knowledge to various Artificial Intelligence situations. Students can interact with real-time Artificial Intelligence initiatives from big organizations through its unique cloud lab feature. During this course, you will have the opportunity to work on 15+ current real-time projects in your chosen domain (s). Artificial intelligence certification courses in Delhi include 70% hands-on training sessions where you will be exposed to real-world applications. This will assist you in studying more successfully. At the end of each learning module, you'll be working on new AI Capstone projects, which will add to your project portfolio and help you achieve a successful AI profession."
              src1="/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews."
              src4="/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay has already produced a number of admiringly talented AI experts. They all are capable of leading the highly profitable progress of the sector in which they operate. Approx 10K Learnbay alumni are already illuminating several senior AI roles in different MNCs and leading startups. Learnbay's Artificial Intelligence ensures job placement for students. The best part is that our students are available for all kinds of job support until they secure an AI role. Below are our alumni sharing their success stories:"
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
        <CityText
          CityTextB="Artificial Intelligence Course Certification Training locations in Delhi "
          CityText=" : Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
          CityTextLB="Locations Offered"
          CityTextL=" :Artificial Intelligence Training in delhi, Artificial Intelligence Course in delhi, Artificial Intelligence Training in Connaught Place, Artificial Intelligence Training in Karol Bagh , Artificial Intelligence Institute in Delhi, Artificial Intelligence Training in kamla nagar, Artificial Intelligence Training in kalu sarai, Artificial Intelligence Training in J N U, Artificial Intelligence Training Institute in Connaught Place, Artificial Intelligence Course in Connaught Place, Artificial Intelligence Course in Saket, Artificial Intelligence Course in old rajinder nagar, Artificial Intelligence Course Connaught Place , Artificial Intelligence Training in (N.S.P) Netaji Subhash Place, Artificial Intelligence Training in Pitampura, Artificial Intelligence Classes in Connaught Place, Artificial Intelligence Classes in J N U, Artificial Intelligence Classes in Connaught Place, Artificial Intelligence Classes in Delhi, Artificial Intelligence Course in vishwa vidyalaya, Artificial Intelligence Training in kalu sarai, Artificial Intelligence Certification in Delhi, Artificial Intelligence Certification Training in Delhi, Artificial Intelligence Certification in Connaught Place, Artificial Intelligence Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Artificial Intelligence Training, Best Artificial Intelligence Course, Best Data Scientist course, Best Data Scientist Training"
        />
      </main>
    </div>
  );
}
