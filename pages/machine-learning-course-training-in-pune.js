import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
import { MachineFaqDataP, MachineDomainFaqDataP, MachinePaymentFaqDataP, MachineCapstoneFaqDataP, MachineCertificationFaqDataP, MachinejobFaqDataP, MachineMentorshipFaqDataP, MachineSupportFaqDataP } from "../components/FAQ/FaqDataCity";


 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Machine Learning Course in Pune | Machine Learning Training in Pune</title>
<meta name="description" content="Machine learning course in Pune. Learnbay is Advanced Machine Learning Course Training Institute in Pune. Machine Learning course in Pune will enhance your career" />
<meta name="Keywords" content="Machine learning course in Pune, Machine learning training in Pune, Machine learning institute in Pune, best Machine learning institute in Pune, Machine learning course in Pune, Machine learning certification in Pune, Machine learning training institute in Pune, advanced Machine learning course in Pune, Machine learning course with placement guarantee, Machine learning course" />
<link rel="canonical" href="https://www.learnbay.co/machine-learning-course-training-in-Pune" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Machine Learning Courses Certification Training India" />
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
        deskTopPara="Industry-Curated & IBM Certified Professionals ML Training"
        mTopPara="Industry-Curated & IBM Certified Professionals ML Training"
        title="Machine Learning Course Training In Pune"
        desc="Be eligible to work as an AI/ML expert in MNC/MAANG. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        src="/course3.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/AIML.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Eligibility"
        p11="Tech Professionals"
        p2="50 LPA - 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12k/month (9 Months)"
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
          ProgramHead1="Machine Learning and Artificial intelligence with tech-domain specialization."
            ProgramBot1="Start a secured Machine Learning career with Learnbay's machine learning training course in Pune. Learnbay is a leading job-oriented training institute for Machine Learning. Learnbay's Machine Learning and Artificial intelligence course training is the best institute for career breakthroughs for professionals from both technical and non-technical domains in Pune."
            ProgramBot2="Learnbay conducts interactive classes live by MNC Machine Learning experts. We give real-time industrial exposure through live MNC case studies and capstone projects. This helps students learn practically from real-world experience."
            ProgramHead3="What do students get at Learnbay Machine Learning program training in Pune?"
            ProgramBot31="The Learnbay Machine Learning program is certified by IBM. This Machine Learning course has a range of options for domain specialization for students as they can choose their favorite domain of expertise. Learnbay classes are hassle-free, and students can access multiple batches/instructors according to students learning pace and get a 3-year Flexi pass to complete Machine Learning course training in Pune. We even have an Easy EMI payment option so that the burden of machine learning course fees on our students is also reduced."
            ProgramHead4="Why is machine learning a good career choice in Pune?"
            ProgramHead5=" Opportunities with growth"
            ProgramBot5="Machine learning is growing fast, and in the next five years, it will create tons of new job opportunities and roles in industries and companies. After completing the Learnbay Machine learning certification course in Pune, you can get recognized as a Machine Learning expert and apply for different ML job roles in variable industries like marketing, supply chain, finance, E-commerce, Banking, Hospitality, Pharmaceutical, etc."
            ProgramHead6=" High Pay-cheque"
            ProgramBot6="Machine learning engineers get paid the highest among their teammates in the IT domain. Not only the engineer and mid-level machine learning professional’s salary is around 8 LPA, and as you gain experience, your salary can be 12-22 Lakhs per annum. The Learnbay Machine Learning Program offers free career counseling with industry experts so that you can hit the best ever available career opportunities."
                       
            DomainHead1="Which types of domains can a student opt for in Machine Learning training in Pune?"
            DomainBot1="Learnbay offers a wide range of specialization options to choose from and become an arduous ML expert in a particular domain."
            DomainBot2="The Domains present in the Learnbay Machine learning training program in Pune:"
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

            CertificationBot1="At Learnbay, Students get 6 globally recognized certifications by IBM in a single Machine learning course program."
            CertificationBot2="The students who completed the course and the projects get separate certificates for gaining different Machine Learning skills like Deep Learning, Machine Learning with Python, Tensorflow, capstone project certificates, and many more. The most important is IBM Machine Learning project completion certificates for two new capstone projects."
            src="/Advanced-AI-ML.jpeg"

            ModuleBot1="The Learnbay Machine Learning program in Pune consists of 300 hrs of uninterrupted live classes from MAANG experts. More than 18 specially planned Machine Learning modules are there, so students can be thoroughly trained for super industrial skills. Every module at Learnbay has its sub-module, from basic to advanced."
            ModuleBot2="Leanbay understands the difficulty of non-programmers learning ML, so we conduct special coding classes for such students. The Learnbay Faculty team constantly updates all assignments and projects. We even conduct Webinars and hackathons for students to hone their coding skills. Learnbay teaches students to work with advanced ML skills that world-class business giants are presently operating, like Big Data Analytics, NLP, Time-Analysis, Data structure, algorithms, etc."

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


    JobHead1="How does Learnbay train students to crack the interviews for Machine Learning MNC jobs in Pune?"
    JobBot1="The Learnbay Machine Learning course in Pune consists of an end-to-end job assistance program. It helps students create their resumes and project portfolios, so recruiters highlight their profiles."
    JobBot2="The Learnbay teaching faculty guides students on how to face product MNC Machine Learning Interviews. Industry curated mock interviews by Learnbay with Job referrals."
    JobBot5="Learnbay assures guaranteed interview calls from 250+ recruiters channels across Pune as well as all over India. Learnbay teaching faculty conducts Mock-interviews with Artificial Intelligence and Machine Learning experts of specified domains and product MNC'S job roles. Our job Assistance team program also teaches industry-specific tips and tricks that are handy during the interview process."

    ProjectsBot1="Learnbay knows the importance of projects and their value if added to a resume or Portfolio. Learnbay machine Learning training in Pune has 15 real-time projects and 2 capstone projects. All our projects and courses are certified by IBM and are recognized globally."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.
    "
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
    src3="/amazon1.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."

    AlumniBot1="We have an excellent rate of almost 100% on placement success. Our whole team at Learnbay works until you get recruited by a company. This is why the Learnbay Machine training program is widely known in companies in Pune. Many MNCs and startups have recruited more than 1000+ Learnbay students across Pune. You can read some of our student's true success stories below here:"
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
            <FAQNew FaqDatas={MachineFaqDataP} DomainFaqDatas={MachineDomainFaqDataP} PaymentFaqDatas={MachinePaymentFaqDataP} CapstoneFaqDatas={MachineCapstoneFaqDataP} CertificationFaqDatas={MachineCertificationFaqDataP} jobFaqDatas={MachinejobFaqDataP} MentorshipFaqDatas={MachineMentorshipFaqDataP} SupportFaqDatas={MachineSupportFaqDataP} />
        </div>
      </div>
      <CityText
      CityTextB="Machine Learning Course Certification Training locations in Pune "
      CityText=" :Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Machine Learning Course viman nagar,Machine Learning Training in kalyan nagar,Machine Learning Training in magarpetta,Machine Learning Training in pimpri chinchwad,Machine Learning Classes in yerwada,Machine Learning Classes in kharadi,Machine Learning Classes in vishrantwadi,Machine Learning Classes in deccan,Machine Learning Course in Katraj,Machine Learning Training in warje,,Machine Learning Certification Training in bavdhan,Machine Learning Certification in boat club road,Machine Learning Certification in model colony,Best Machine Learning Training in pune,Best Machine Learning Course in pune"
      />
      </main> 
    </div>
  )
}