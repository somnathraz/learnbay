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
import { AdvanceFaqDataDu, AdvanceDomainFaqDataDu, AdvancePaymentFaqDataDu, AdvanceCapstoneFaqDataDu, AdvanceCertificationFaqDataDu, AdvancejobFaqDataDu, AdvanceMentorshipFaqDataDu, AdvanceSupportFaqDataDu } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Dubai | Data Science Training in Dubai</title>
<meta name="description" content="Data science course in Dubai. Learnbay is Advanced Data Science Course Training Institute in Dubai. Data science course in Dubai will enhance your career" />
<meta name="Keywords" content="data science course in Dubai, data science training in Dubai, data science institute in Dubai, best data science institute in Dubai, data scientist course in Dubai,data scientist certification in Dubai, data science training institute in Dubai, advanced data science course in Dubai, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-dubai" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Science Courses Certification Training Dubai" />
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
        deskTopPara="Foundational and Advanced Data Science Certifications"
        mTopPara="Foundational and Advanced Data Science Certifications"
        title="Data Science Course Training in Dubai"
        desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        src="/course2.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advance+Data+Science+and+AI+Program.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="50 LPA to 60 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 10k/month (9 Months)"
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
          ProgramHead1="What Data science course in Dubai - In association with IBM?"
            ProgramBot1="Learnbay offers interactive instructed-led data science course training in Dubai. Industry experts design these comprehensive domain-specific data science courses for professionals wanting to become successful data scientists. In these courses, participants will be provided with various data science projects to work on. A joint partnership with Learnbay and IBM provides students with integrated applied training, making them become expert Data scientists. Even the advanced data science courses offer multiple certifications and domain electives too."
            ProgramHead3="What can I expect from Learnbay’s data science certification courses?"
            ProgramBot3="Learnbay is considered a global pioneer in the online data science course training.
            As a part of this data science course in Dubai, you will receive the following benefits:"
            ProgramBot31="Lifetime access to Learnbay LMS for seamless learning progress.
            1 to 8 number of globally recognized IBM certifications in advanced data science training courses.
            Premium Cloud Lab Feature, via which you can leverage hands-on exposure to industrial problems.
            Live interactive classes plus Extra Doubt Clearance Sessions.
            Special Programming classes for non-technical learners.
            Learnbay Faculties possess extensive industry knowledge and experience.
            Participants will be provided with end-to-end placement support.
            Modules are tailored according to the industry's needs and are understandable to learners.
            Flexi pass, you can attend unlimited batches for the duration of 1-3 years. You will also be able to attend limitless classes of your choice."
            ProgramBot32="There are four available Data Science and AI Certification Courses by Learnbay in Dubai:"
            Courselink1="/data-science-certification-courses"
            Courselink2="/advance-data-science-certification-courses"
            Courselink4="/data-science-ai-for-managers"
            Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
            Course1="Foundational Data Science and AI Program"
            Course2="Advanced-Data Science and AI Program with Domain Specialization"
            Course4="Data Science and AI Program for Managers and Leaders"
            Course5="AI and Data Science Course with Job Guarantee or Money back"
            

            DomainHead1="Why Domain Specialization?"
            DomainBot1="While the majority of entry-level data science professionals can manage their jobs without domain expertise, mid-level and senior-level data scientists who lack industry understanding face job insecurity in Dubai."
            DomainBot2="Generally, Data scientists are expected to possess industry knowledge to provide an accurate solution to the problems at hand. This is why we have created our data science course modules based on industry to equip our learners with domain-focused knowledge."
            DomainBot3="At Learnbay, you are free to choose multiple domain electives associated with your selected advanced Data science course. You can take the help of a Learnbay data science career counselor if you are unsure which domain is right for you. Based on your experience, you can choose from the following domain(s):"
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

            CertificationHead1="Data Science Certification process at Learnbay"
            CertificationBot1="Once you complete your data science course from Learnbay, you will be awarded multiple certificates from IBM for completing distinct micro-data science modules. These certifications will demonstrate your data science expertise and help you stay ahead in the data science job market."
            CertificationBot2="In addition, you will receive an IBM project certificate upon completion of capstone projects which you can add to your portfolio. It assists in grabbing genuine and interesting job roles. To learn more about micro-skills certificates, refer to the respective course brochures."
            src="/certificate.webp"

            ModuleHead1="Coding classes:"
            ModuleBot1="Learnbay supports learners from all backgrounds. For this reason, we have integrated module 0 of programming classes in all of our data science courses in Dubai."
            ModuleHead2="Data science modules:"
            ModuleBot3="Learnbay’s instructor-led online data science course teaches students fundamental data science principles and how to apply them in real industry. Our trainers illustrate each concept with real-life examples. The modules of the data science certification cover topics such as data visualization, machine learning, SQL, and time series analysis."
            ModuleBot4="Moreover, Our LMS is continually updated to incorporate the most up-to-date versions of courses and to ensure compliance with industry standards."
            ModuleBot41="Our IBM data science course will prepare students industry-ready for data science job roles."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/Advance+Data+Science+and+AI+Program.pdf"


    JobHead1="Interview preparation sessions at Learnbay"
    JobBot1="As part of our data science training in Dubai, students will undergo several practice interviews for a thorough interview preparation process on data science. Our dedicated career coaches will guide you with resume building, conducting mock interviews, and evaluate their competencies, and providing feedback. They ensure that every learner is professionally trained to crack a potential data science job in Dubai."
    JobBot2="Learnbay also provides a Job Guaranteed data science course that offers a complete refund of course fees in case of an unsuccessful placement."
    JobHead2="Is data science a good career option in Dubai?"
    JobBot3="Data science has developed into a booming career in Dubai, with enormous potential for progression in the future. Data Science is the process of uncovering hidden insights in data pertaining to patterns, behavior, interpretation, and inferences in order to make informed business decisions."
    JobBot4="Since Dubai has great plans to transform itself into a smart hub, specialized skill sets such as coding and analytics will be in high demand. In Dubai, a typical data scientist earns around AED 20,000 per month. Hence this is the right time to begin your data science career with Learnbay’s data science training. In addition, Learnbay offers the domain elective of energy, oil, and Gas in their advanced data science courses. Being the remarkable hub of crude oil extraction and petrochemical industry, Dubai is experiencing growing demand for data scientists specializing in energy, oil & gas domain knowledge. From that perspective, Laeabay data science is becoming the one-stop choice here."

    ProjectsBot1="As part of the Learnbay data science curriculum, students will be mentored to develop high-quality data science projects solving real-time problems. The IBM data science course in Dubai offers 8 to 15 real industry projects in a variety of domains. You may also work on 2-3 capstone projects for which an IBM project experience certificate will be awarded."
    ProjectsBot2="Students can also explore various data science tools via live projects in our Cloud lab feature. This hands-on training will help you practice the skills and data science techniques learned throughout the training. Additionally, You can also select the domain or industry dataset you wish to work on. Our students have completed the following domain-based  data science projects:"
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
    Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay believes in building and nurturing future data scientists through its data science training. We make sure our quality education reaches all corners of the world, including Dubai. Numerous students immediately landed desired data science jobs in Dubai firms while completing 70% of our IBM data science course. Read some of the testimonies of our alumni:"
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
            <FAQNew FaqDatas={AdvanceFaqDataDu} DomainFaqDatas={AdvanceDomainFaqDataDu} PaymentFaqDatas={AdvancePaymentFaqDataDu} CapstoneFaqDatas={AdvanceCapstoneFaqDataDu} CertificationFaqDatas={AdvanceCertificationFaqDataDu} jobFaqDatas={AdvancejobFaqDataDu} MentorshipFaqDatas={AdvanceMentorshipFaqDataDu} SupportFaqDatas={AdvanceSupportFaqDataDu} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Dubai "
      CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Dubai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science Course viman nagar,Data Science Training in kalyan nagar,Data Science Training in magarpetta,Data Science Training in pimpri chinchwad,Data Science Classes in yerwada,Data Science Classes in kharadi,Data Science Classes in vishrantwadi,Data Science Classes in deccan,Data Science Course in Katraj,Data Science Training in warje,,Data Science Certification Training in bavdhan,Data Science Certification in boat club road,Data Science Certification in model colony,Best Data Science Training in Dubai,Best Data Science Course in Dubai"
      />
      </main> 
    </div>
  )
}