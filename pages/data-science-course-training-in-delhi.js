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
import { AdvanceFaqDataD, AdvanceDomainFaqDataD, AdvancePaymentFaqDataD, AdvanceCapstoneFaqDataD, AdvanceCertificationFaqDataD, AdvancejobFaqDataD, AdvanceMentorshipFaqDataD, AdvanceSupportFaqDataD } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Delhi | Data Science Training in Delhi</title>
<meta name="description" content="Data science course in Delhi. Learnbay is Advanced Data Science Course Training Institute in Delhi. Data science course in Delhi will enhance your career" />
<meta name="Keywords" content="data science course in Delhi, data science training in Delhi, data science institute in Delhi, best data science institute in Delhi, data scientist course in Delhi,data scientist certification in Delhi, data science training institute in Delhi, advanced data science course in Delhi, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-delhi" />
<meta name="robots" content="NOODP,NOYDIR" />
<meta name="HandheldFriendly" content="true" />
<meta name="distribution" content="global" />
<meta name="copyright" content="Learnbay: Data Science Courses Certification Training India" />
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
        deskTopPara="Foundational Or Advanced Data Science Course"
        mTopPara="Foundational Or Advanced Data Science Course"
        title="Data Science Course Training In Delhi"
        desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        src="/course2.png"
        alt="AiMl Header"
        srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/2nd+DSAI+Advance.pdf"

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
        WeekdayBatchDate="6 micro-skills certificates from IBM"
        WeekendBatchDate="8+ Domain-Electives associated with full-stack modules"
        Project="Project Experience Certification by IBM"
        Classes="Completely live and interactive learning"
        OneLine="12 live industry projects & 2 fresh Capstone Projects"
        Interview="Interview Guarantee backed up by 250+ hiring partners"
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
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant Companies."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramBot1="Learnbay is the premier data scientist training institute in Delhi. We have a very strong team of instructors and mentors owning an industrial experience of more than 8 years. Most of them are from top-tier MNCs. You can benefit from their experience and knowledge throughout the offline and online data science courses. The courses are designed for learners who want to move into a Data Science job from any tech or non-tech domain along with a lucrative salary hike. Learnbay data science courses help you become a successful Data scientist even after having years of experience in other fields. In a nutshell, it's the best place to go for working people who want to learn the most about data science and artificial intelligence. Moreover, you get a series of custom-fit learning modules as per your personal career goal."
            ProgramBot2="For a balanced learning experience, the Learnbay data science courses for working professionals in Delhi combine practical (core industrial) and theoretical topics in a 70:30 ratio. In Delhi, this institute offers the most cost-effective Data Science classes. The best thing is that you will receive a full-stack data science course and job placement."
            ProgramHead3="Why choose Learnbay advanced Data science course training in Delhi?"
            ProgramBot3="Because this city is India's capital city, this city is becoming the most significant job hub in India, from the perspective of both government and private jobs. As data science and AI is the most future-proof field, every single business is getting dependent on them. A huge number of options for advanced data science certification courses are available in Delhi. However, when it comes to the question of getting an assured job after completion of the course, then the list becomes too short. Again from the perspective of cost-effectiveness, the list shrinks further. Learnbay's artificial intelligence and data science courses in Delhi are more affordable. Above all, even at a lower price, you get the best data science learning experience possible along with a job guarantee."
            ProgramBot31="Furthermore, depending on your current professional level, you can choose from various data science course options. Each of these courses is made up of modules tailored to your previous work experience."
            ProgramBot32="Data science course fees for the courses offered by Learnbay range from 65K to 1.2 lakh INR. The lesson schedule is flexible, and you can enroll in any batch or with any teacher. You can even attend multiple sessions with different instructors. One-on-one live doubt clearing sessions with seasoned MAANG Data scientists are included in our Data Science and Artificial Intelligence courses. Students can take a break after enrolling, then return to finish their studies in one to three years (depending on the course)."
            ProgramHead5="Data Science Courses Available at Learnbay:"
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

            DomainHead1="Why Domain Specialization?"
            DomainBot1="6 out of 10 job applicants hold a data science certificate in Delhi. One of these 2 makes a successful data science career transfer within a year of completing a course. Especially when it comes to mid-senior level data scientist roles, then having a generic certificate in data science does not help much. Here, recruiters search for domain-specific data science skills."
            DomainBot2="You can't provide precise insights or analytical solutions without domain understanding and job experience. As a result, recruiters will categorize your profiles as not a good fit for data scientist jobs in Delhi. Learnbay data science courses come with the domain elective options that why the job after the course becomes assured."
            DomainBot3="The Domain Electives At Learnbay Are:"
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

            CertificationBot1="You may take advantage of live lessons with different instructors through Learnbay's IBM Data Scientist Course without dealing with any difficulties. Aside from that, you'll get IBM certifications for several data sciences and AI micro-skills. As a result, it's essentially a data science course with a job guarantee. You will receive 1 to 8 certifications depending on the course you choose. The best thing is that you will receive an IBM Project Experience Certificate once you finish the capstone project related to Delhi's Data Science and AI course. For additional information about micro-skill certificates, please see the course brochures."
            CertificationBot2="For more details about the certification, you can read our brochures"
            src="/certificate.webp"

            ModuleBot1="Throughout your Data scientist career in Delhi, the two most important programming languages will be Python and R. The most important module, however, will be 'STATISTICS.' Aside from that, you must master modules such as 'MACHINE LEARNING,' 'TIME SERIES,' 'POWER-BI,' 'ADVANCE EXCEL,' 'TABLEAU,' 'BIG DATA,' 'MONGO DB,' 'SPARK ANALYTICS,' and 'SQL' to acquire the industrial competency.'"
            ModuleBot2="Learnbay's data science and AI courses in Delhi contain plenty of up-to-date practical tasks in each subject."
            ModuleBot3="Our learning courses are all based completely on your domain knowledge. As a result, all of the skills and technologies you learn here provide best practices-based training for your chosen business."
            ModuleBot4="For non-programmers, we've provided a module option. These modules also include 6 to 8 hours of live and interactive data science programming training in R and Python. Even if you don't have any programming knowledge, these extra classes are free and ensure that you stay on track with your data science classes."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/2nd+DSAI+Advance.pdf"


    JobBot1="Data science certifications at Learnbay will help you prepare for interviews. Several company-specific mock interviews bolster our students' confidence at the interview table. Learnbay instructors ensure that your resume and portfolio are up to date to attract recruiters. You will receive domain-specific full-stack data scientist training, which will be reflected in your interview preparation."
    JobBot2="All of our data science courses come with a guarantee of an interview with a prominent MNC or a rising startup in Delhi or India. However, if you enroll in a Data Science program with a job guarantee, you can get a refund if you don't get hired (which is very rare in Learnbay). More than 10000 Learnbay alumni are proudly employed in various data science positions throughout Delhi."
    JobBot5="We work on placements with various firms, including IBM, TCS, Accenture, EY, JP Morgan, and others."
    JobHead2="What are the advantages of working as a Data scientist? "
    JobBot3="IBM Certified Data Scientists have a worldwide reputation. Everyone needs a team of data scientists who are experts in the relevant industrial domain, whether they work for a global corporation or a startup. As a result, specialists transitioning to the field of data science are in high demand rather than fresh recruits. Aside from data science, you can't fathom a 200-400 percent increase with plenty of job stability. The salary range for data scientists has been rapidly expanding."

    ProjectsHead1="Live Industrial Data Science Projects:"
    ProjectsBot1="Learnbay's unique cloud lab feature allows users access to live data science projects from international businesses, as well as data science coaching from professionals. You can select a live industrial project from a list of 15+ alternatives from your chosen domain (s). You can immediately see and perform data filtering, data mining, data wrangling, and process in the cloud lab while working on live MNC data science projects in Delhi."
    ProjectsBot2=" Additionally, you will have the opportunity to work on two to three new data science capstone projects. IBM issues project completion certificates for these capstone projects. Some of Learnbay's data science initiatives are listed here."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/amazon.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Within 2 to 3 months of course completion, 60% of Learnbay students in Delhi got lucrative data scientist and other Data science job offers. Within a year, 30% of the remaining candidates were hired. Even more than 700+ graduates of the various data science and AI courses hold leadership and management roles."
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
            <FAQNew FaqDatas={AdvanceFaqDataD} DomainFaqDatas={AdvanceDomainFaqDataD} PaymentFaqDatas={AdvancePaymentFaqDataD} CapstoneFaqDatas={AdvanceCapstoneFaqDataD} CertificationFaqDatas={AdvanceCertificationFaqDataD} jobFaqDatas={AdvancejobFaqDataD} MentorshipFaqDatas={AdvanceMentorshipFaqDataD} SupportFaqDatas={AdvanceSupportFaqDataD} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Delhi "
      CityText=" :  Asaf Ali Road [110006] , Bhikaji Cama Place [110029] , Chandni Chowk Old Delhi [110006] ,Chattarpur [110074 ], Chirag Enclave [110048] , Civil Lines [110054] , Connaught Place [110001] , Defence Colony [110024] , Diplomatic Enclave [110021] , Dwarka [110075] , East of Kailash [110065] , Friends Colony [110025] , Golf Links [110003] , Greater Kailash [110048] , Green Park [110016] , Karol Bagh [110005] , Lajpat Nagar [110024], Mayur Vihar [110091] , Mehrauli Gurgaon Road [110037] , Naraina [110028] , Narela [110040] , Nehru Place [110019] , Nizammuddin [110013] , Paharganj [110055] , Panchshil Enclave [110017] , Paschim Vihar [110063] , Patel Nagar [110008] , Pushpanjali Farms [110037] , Qutabgarh Village [110039] , Rajendra Place [110008] , Rajokri [110038] , Saket [110017] , Samalkha [110037] , Shahdara [110032] , Shalimar Bagh [110088] , Shiv Murti [110037] , Sukhdev Vihar [110025] , Sundar Nagar [110013],Vasant Kunj [110070] , Vasant Vihar [110057] , Janakapuri [110058] , Noida [201301] , Ajmeri Gate [110002] , Aram Bagh [110055] , Sidipura [110005] , Azadpur [110052] , Karol Bagh 110005, Old rajinder nagar 110060, Rajouri garden 110027, Vishwa vidyalaya 110009, Kamla nagar 110007, Kalu sarai 110016, Nehru park 190001, (N.S.P) Netaji Subhash Place 110034, J N U 110067,Connaught Place 110001, Saket 110017, Pitampura 110034, East kidwai nagar 110023 , Shakur pur [110034]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science Training in delhi, Data Science Course in delhi, Data Science Training in Connaught Place, Data Science Training in Karol Bagh , Data Science Institute in Delhi, Data Science Training in kamla nagar, Data Science Training in kalu sarai, Data Science Training in J N U, Data Science Training Institute in Connaught Place, Data Science Course in Connaught Place, Data Science Course in Saket, Data Science Course in old rajinder nagar, Data Science Course Connaught Place , Data Science Training in (N.S.P) Netaji Subhash Place, Data Science Training in Pitampura, Data Science Classes in Connaught Place, Data Science Classes in J N U, Data Science Classes in Connaught Place, Data Science Classes in Delhi, Data Science Course in vishwa vidyalaya, Data Science Training in kalu sarai, Data Science Certification in Delhi, Data Science Certification Training in Delhi, Data Science Certification in Connaught Place, Data Science Certification in Karol Bagh, Data Scientist course in Delhi, Data Scientist Course in Connaught Place, Data Scientist training in Delhi, Data Scientist Certification Training in Delhi, Data Scientist Certification Training in Connaught Place, Data Scientist Certification in Connaught Place, Data Scientist Certification in Delhi, Data Scientist Institute in Delhi, Best Data Science Training, Best Data Science Course, Best Data Scientist course, Best Data Scientist Training"
      />
      </main> 
    </div>
  )
}