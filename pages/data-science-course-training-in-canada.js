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
import { AdvanceFaqDataCa, AdvanceDomainFaqDataCa, AdvancePaymentFaqDataCa, AdvanceCapstoneFaqDataCa, AdvanceCertificationFaqDataCa, AdvancejobFaqDataCa, AdvanceMentorshipFaqDataCa, AdvanceSupportFaqDataCa } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Canada | Data Science Training in Canada</title>
<meta name="description" content="Data science course in Canada. Learnbay is Advanced Data Science Course Training Institute in Canada. Data science course in Canada will enhance your career" />
<meta name="Keywords" content="data science course in Canada, data science training in Canada, data science institute in Canada, best data science institute in Canada, data scientist course in Canada,data scientist certification in Canada, data science training institute in Canada, advanced data science course in Canada, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-canada" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Science Courses Certification Training Canada" />
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
        deskTopPara="Foundational or Advanced Job-oriented Program"
        mTopPara="Foundational or Advanced Job-oriented Program"
        title="Data Science Course Training In Canada"
        desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        src="/course2.png"
        width="900"
        height="762"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+DSAI+(1).pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="50 LPA to 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="Financing as low as"
        p44="₹ 7,768/month"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="4 micro-skills certificates from IBM"
        WeekendBatchDate="8+ Domain-electives associated with full-stack modules"
        Project="Project experience certification by IBM"
        Classes="Completely live and interactive learning"
        OneLine="12 live industry projects & 2 fresh capstone projects"
        Interview="Interview guarantee backed up by 250+ hiring partners"
        Fee="79,000"
        Subscription="3 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream DS role. Learn innovative AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and DS skills as per demanding industry standards. Choose from 8+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Learn how to crack interviews by attending CV writing workshops & mock interviews with MAANG expertise."
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
            ProgramHead1="What is the data science training program at Learnbay?"
            ProgramBot1="Learnbay is the premier institute offering data science and AI courses in Canada which are intended for working professionals. The data science course is built by experts with real-life experience and touchpoints to every aspect of data science."
            ProgramBot2="Our trainers ensure that you receive the complete theoretical and practical training to become an industry-competent data scientist in Canada. With our training, learning data science will be a piece of cake. The data science course with placement is the equivalent of a 9-months course taught through live interactive classes."
            ProgramBot3="In this course, you'll learn how to set up and manage a data science project. Learnbay’s instructor-led classes provide a hands-on approach and real-world examples of how to apply data science to big data analysis. You'll also learn how to generate insights from raw data and use powerful tools like Python, Pandas, NumPy, and SciPy."
            ProgramHead4="Why choose Learnbay for your Data Science Career?"
            ProgramBot4="This IBM data science course is offered entirely online, with extremely convenient scheduling options. That means you have the option of choosing your preferred batch as per timing and even mentors. In contrast, the artificial intelligence and data science courses seem to be affordable because of their reasonable data science course fees and come with an assured job guarantee."
            ProgramBot5="Here you get a 3-year Flexi subscription to Learnbay LMS, where you can learn in the comfort of your own home and as per your time convenience. However, all the learning sessions will be live and interactive only."
            ProgramBot6="There are four available Data Science and AI Certification Courses by Learnbay in Canada, which are listed below :"
            Courselink1="/data-science-certification-courses"
            Courselink2="/advance-data-science-certification-courses"
            Courselink4="/data-science-ai-for-managers"
            Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
            Course1="Foundational Data Science and AI Program"
            Course2="Advanced-Data Science and AI Program with Domain Specialization"
            Course4="Data Science and AI Program for Managers and Leaders"
            Course5="AI and Data Science Course with Job Guarantee or Money back"

            DomainHead1="Why Domain Specialization?"
            DomainBot1="Usually, Data scientists that specialize in a particular domain are mostly preferred by hiring managers since they have a deeper understanding of the industry and the essential business concerns that must be addressed. Moreover, It is impossible to provide accurate insights unless one has a thorough understanding of the domain at hand. Thus, it is important to pick data science and AI courses that have domain electives options. In fact, although the most entry-level data science position is a bit manageable without core domain knowledge, mid to senior-level data scientist roles are not at all secure if you lack specific business knowledge."
            DomainBot2="Learnbay delivers domain-specialized  Data Science Training. Based on your experience, you can select the following domains:"
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

            CertificationHead1="IBM certified data science and AI course"
            CertificationBot1="The interesting part of the data science and AI course is that students will receive not one but multiple IBM certificates for completing different sub-modules of the data science course. Besides this, you will obtain an IBM Project Experience Certificate after successfully completing the capstone project included in the Data Science and AI course."
            CertificationBot2="You can earn 1 to 8 certificates depending on your course. To learn more about micro-skills certificates, refer to the respective course brochures."
            src="/certificate.webp"

            ModuleHead1="What does the module of the Learnbay data science courses include?"
            ModuleBot1="Our data science courses are designed to be straightforward and simple to follow while providing the greatest possible foundation in data science. Our instructor-led online data science course teaches students the key principles of data science and how to use these skills in the workplace. Topics include data visualization, machine learning, statistical inference and time series analysis, and other data science tools. Our instructor explains each concept using real-world scenarios."
            ModuleBot2="Additionally, we've added Module 0 to the data science curriculum package, which focuses on Python and R programming. Non-technical individuals can take advantage of these specialized classes to accelerate their learning in each module."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+DSAI+(1).pdf"


    JobHead1="Job Assurance Program at Learnbay Data Science and AI"
    JobBot1="By the end of the IBM data science certification, students will get support for job placement which includes, Resume preparation, Soft skills training as well as mock interviews. These company-specific practice interviews will boost our trainee’s confidence ahead of their interviews."
    JobBot2="Placement drives are aided by our collaboration with major tech corporations. We have partnered with globally renowned companies such as Accenture, EY, Salesforce, etc. Over 1000+ alums have been placed in various data science roles within short timeframes."
    JobBot5="Learnbay also offers a data science and AI course that comes with a money-back guarantee. You may be entitled to a refund of your data science course fees if you are unable to secure a data science job within six months of completing your training."
    JobHead2="What is the scope of Data scientists in Canada?"
    JobBot3="The demand for data scientists is exploding – not just in Canada but worldwide."
    JobBot4="Data scientists play a crucial role in all businesses, regardless of the domain, along with a lucrative package. New businesses and startups are sprouting up in Canada, and demand for their services is expanding. As a result, once you complete Learnbay's data science training, you'll be exposed to an infinite number of opportunities in the data science field.
"

    ProjectsHead1="Live real-world data science projects by Learnbay"
    ProjectsBot1="Using the cloud lab feature in Learnbay's data science courses, students can experiment with various data science techniques and approach via live data science projects. In all of our data science and AI courses, students can select 8 to 15 real-time projects based on their preferred domain(s). Apart from this, you will be expected to work on 2 to 3 capstone projects for which you’ll earn an IBM certification on your project experience."
    ProjectsBot2="Our students have already worked on different domain-based projects:"
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/amazon1.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay has fulfilled the professions of many data science aspirants across Canada and other countries. Several students got dream data science jobs right after completing 70% of our IBM data science course. More than 300 Learnbay alumni currently hold senior and managerial positions in top-tier corporations. Read some of the testimonies of our alumni:"
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
            <FAQNew FaqDatas={AdvanceFaqDataCa} DomainFaqDatas={AdvanceDomainFaqDataCa} PaymentFaqDatas={AdvancePaymentFaqDataCa} CapstoneFaqDatas={AdvanceCapstoneFaqDataCa} CertificationFaqDatas={AdvanceCertificationFaqDataCa} jobFaqDatas={AdvancejobFaqDataCa} MentorshipFaqDatas={AdvanceMentorshipFaqDataCa} SupportFaqDatas={AdvanceSupportFaqDataCa} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Canada "
      CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Canada City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science Course viman nagar,Data Science Training in kalyan nagar,Data Science Training in magarpetta,Data Science Training in pimpri chinchwad,Data Science Classes in yerwada,Data Science Classes in kharadi,Data Science Classes in vishrantwadi,Data Science Classes in deccan,Data Science Course in Katraj,Data Science Training in warje,,Data Science Certification Training in bavdhan,Data Science Certification in boat club road,Data Science Certification in model colony,Best Data Science Training in Canada,Best Data Science Course in Canada"
      />
      </main> 
    </div>
  )
}