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
import { ArtificialFaqDataP, ArtificialDomainFaqDataP, ArtificialPaymentFaqDataP, ArtificialCapstoneFaqDataP, ArtificialCertificationFaqDataP, ArtificialjobFaqDataP, ArtificialMentorshipFaqDataP, ArtificialSupportFaqDataP } from "../components/FAQ/FaqDataCity";


 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Artificial Intelligence Course in Pune | Artificial Intelligence Training in Pune</title>
<meta name="description" content="Artificial Intelligence Course in Pune. Learnbay is Advanced Artificial Intelligence Course Training Institute in Pune. Artificial Intelligence course in Pune will enhance your career" />
<meta name="Keywords" content="Artificial Intelligence course in Pune, Artificial Intelligence training in Pune, Artificial Intelligence institute in Pune, best Artificial Intelligence institute in Pune, Artificial Intelligence course in Pune, Artificial Intelligence certification in Pune, Artificial Intelligence training institute in Pune, advanced Artificial Intelligence course in Pune, Artificial Intelligence course with placement guarantee, Artificial Intelligence course" />
<link rel="canonical" href="https://www.learnbay.co/artificial-intelligence-ai-course-training-Pune" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Artificial Intelligence Courses Certification Training India" />
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="IBM Certified AI training With Domain Specialization and Job Guarantee"
        mTopPara="IBM Certified AI training With Domain Specialization and Job Guarantee"
        title="Artificial Intelligence (ai) Course Training in Pune"
        desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
        src="/course4.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/4th+Managers.pdf"

      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Eligibility"
        p11="Executive-level experience"
        p2="35 LPA - 65 LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 12k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Global Recognition : Earn 8 micro-skill certificates by IBM"
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
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant Companies."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramBot1="Learnbay is a leading institute for Artificial intelligence (AI) training in Pune. Our faculties are industry experts with more than 8 years of  MAANG company work experience. Learnbay faculties always work hard for students' growth and career development. We even provide a wide range of Domain electives, assuring students a Full-stack AI expertise in any chosen domain. Learnbay Artificial intelligence courses in Pune teach students with real-time MNC and capstone projects, and all our courses are certified by IBM. Our guides are always ready to solve any queries of students with the most precise solutions so that students do not face any barriers during training."
            ProgramHead3="Why is Learnbay the best artificial intelligence (AI) training course provider in Pune?"
            ProgramBot3="Whether you are a techie or non-techie, you can still learn Artificial Intelligence at Learnbay. There has been a lot of improvement in Artificial Intelligence, but there are very few skilled Artificial intelligence experts who can work along with the changes that Artificial intelligence has brought to a particular domain. So becoming an Artificial intelligence expert is a big plus for a career for both techies and non-techies."
            ProgramBot31="Learnbay offers a variety of Artificial Intelligence courses to choose from, even if you just graduated or have been working professionally for 4+ years. Learnbay has a course for all and every Domain."
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

            DomainHead1="Why is domain specialization crucial while Learning Artificial intelligence courses training in Pune?"
            DomainBot1="Artificial intelligence is a very broad concept, and it has a lot of sub-sets under it. Domain specialization in Artificial intelligence makes students an expert using AI tools within a particular industry. This is why Learnbay provides a list of the Domain for students to choose from. Learnbay covers almost all domains from manufacturing to logistics, from banking to the oil and gas sector. We know that every industry needs different requirements and has different best practices for handling data or building AI software."
            DomainBot2="Learnbay mentors and guides analyze candidates' profiles and accordingly suggest respective domains to students. Presently, recruiters are not much interested in which University certificate you hold. Rather they are madly concerned about your domain expertise. A normally certified  AI expert with finance domain knowledge gets a better candidature score than a master's degree holder in AI without a finance background in Banking."
            DomainBot3="List of available Domain-Electivess"
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

            CertificationBot1="All of the Learnbay Artificial intelligence courses in Pune are IBM certified. So, there is no question about the course authentication. Students get certificates for completing Artificial intelligence course training along with micro-certificates for working with industry compliance tools like Python, Deep learning with Tensorflow, and many more. Learnbay IBM certificates for Artificial intelligence course training depend on the course you choose. You can avail 1 to 8 certificates by IBM. Learnbay even offers certificates for working on capstone projects. This kind of project experience certificate is also issued by IBM."
            src="/Managers-4.jpeg"

            ModuleBot1="Learnbay Artificial intelligence training in Pune consists of 400hrs of hassle-free classes led by MAANG experts. Our foundational and advanced program has around 200+ classes. Here you get 18+ AI modules and tools."
            ModuleBot2="Each of the AI courses offered by Learnbay are planned with different modules as per the consented career stage of the professionals. All of the courses are equipped with properly balanced theoretical and practical sub-modules. The most important modules that Learnbay artificial intelligence course covers are SQL, Pandas, Numpy, Data visualization, NP, artificial neural network, etc. Keeping the non-programmer huddle about programming in mind, Learnbay AI courses also offer basic programming sub-modules."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/New+Brochure/4th+Managers.pdf"


    JobBot1="Learnbay Artificial Intelligence certifications in Pune even come with a job or money-back guarantee. The artificial intelligence courses offered by Learnbay come with mock interview training sessions, resume help, and an unlimited number of MNC and start-up referrals, until you land on suitable AI job role."
    JobBot2="The roles and responsibilities you can target by competing Learbbay AI Course are:"
    JobBot3="Business intelligence developer.
    Data scientist.
    Big Data Engineer.
    Artificial intelligence Engineer.
    Machine learning engineer.
    Research scientist.
    Robotics Scientist."

    ProjectsBot1="Artificial intelligence projects are the key to a successful AI career. Based on the artificial intelligence course you choose, you get 5 to 15 live industrial projects along with 2 to 3 capstone projects. Students are given ownership of the project to work with creativity. A capstone project adds an extra skill to your certificates and resume."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
    src3="/amazon.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.
    "
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay Artificial intelligence course training in Pune has helped many students in the recruitment process. Most of our students have been recruited by top MNC companies. About 70% of our students get the offer letter, while the 85% of the course completion stage. Here are a few of our Alumni sharing the success that they achieved through Learnbay:"
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
            <FAQNew FaqDatas={ArtificialFaqDataP} DomainFaqDatas={ArtificialDomainFaqDataP} PaymentFaqDatas={ArtificialPaymentFaqDataP} CapstoneFaqDatas={ArtificialCapstoneFaqDataP} CertificationFaqDatas={ArtificialCertificationFaqDataP} jobFaqDatas={ArtificialjobFaqDataP} MentorshipFaqDatas={ArtificialMentorshipFaqDataP} SupportFaqDatas={ArtificialSupportFaqDataP} />
        </div>
      </div>
      <CityText
      CityTextB="Artificial Intelligence Course Certification Training locations in Pune "
      CityText=" : Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
      CityTextLB="Locations Offered"
      CityTextL=" :Artificial Intelligence Course viman nagar,Artificial Intelligence Training in kalyan nagar,Artificial Intelligence Training in magarpetta,Artificial Intelligence Training in pimpri chinchwad,Artificial Intelligence Classes in yerwada,Artificial Intelligence Classes in kharadi,Artificial Intelligence Classes in vishrantwadi,Artificial Intelligence Classes in deccan,Artificial Intelligence Course in Katraj,Artificial Intelligence Training in warje,,Artificial Intelligence Certification Training in bavdhan,Artificial Intelligence Certification in boat club road,Artificial Intelligence Certification in model colony,Best Artificial Intelligence Training in pune,Best Artificial Intelligence Course in pune"
      />
      </main> 
    </div>
  )
}