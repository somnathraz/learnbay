import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../Components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../Components/CoursePage/GetHired/GetHired";
import BoxShape from "../Components/CoursePage/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../Components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../Components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../Components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import { AdvanceFaqDataH, AdvanceDomainFaqDataH, AdvancePaymentFaqDataH, AdvanceCapstoneFaqDataH, AdvanceCertificationFaqDataH, AdvancejobFaqDataH, AdvanceMentorshipFaqDataH, AdvanceSupportFaqDataH } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Hyderabad | Data Science Training in Hyderabad</title>
<meta name="description" content="Data science course in Hyderabad. Learnbay is Advanced Data Science Course Training Institute in Hyderabad. Data science course in Hyderabad will enhance your career" />
<meta name="Keywords" content="data science course in Hyderabad, data science training in Hyderabad, data science institute in Hyderabad, best data science institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, data science training institute in Hyderabad, advanced data science course in Hyderabad, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-Hyderabad" />
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
        deskTopPara="Foundational and Advanced Data Science Courses with job Guarantee"
        mTopPara="Foundational and Advanced Data Science Courses with job Guarantee"
        title="Data Science Course Training in Hyderabad"
        desc="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited Training on utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        src="/Advance-ds.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="50LPA-60LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 10k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="6 IBM data science micro-skills certificates"
        WeekendBatchDate="10+ domain-elective associated full-stack modules"
        Project="Project Experience Certification by IBM"
        Classes="Completely live and interactive learning"
        OneLine="12 live industry projects & 2 fresh Capstones"
        Interview="250+ hiring partner backed up interview guarantee"
        Fee="79,000"
        Subscription="3 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream DS role. Learn innovative AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and DS skills as per demanding industry standards. Choose from 7+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Learn how to crack interviews by attending CV writing workshops & mock interviews with FAANG expertise."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramBot1="Learnbay Is a premier Data science training institute in Hyderabad for anyone interested in becoming an industry competent data scientist. Learnbay’s IBM certified advanced Data science course was created with great care by industry specialists. Our professors are Industry-leaders with a decade of experience. Learnbay mentors make sure you learn everything from scratch and according to the complex industrial requirements."
            ProgramBot2="Learnbay’s advanced Data science certification in the Hyderabad curriculum helps students learn in-demand Data science skills such as programming, data visualization, statistics, and other topics."
            ProgramHead3="What do candidates get in the  Advanced data science courses in Hyderabad?"
            ProgramBot3="For a richer learning experience, Learnbay focuses on providing both practical and theoretical learning modules. Moreover, Our advanced Data science certification in Hyderabad is cost-effective and even offers an MNC interview guarantee. Besides, you can choose a data science course with a job or 100% money-back assurance at Learnbay. In case you find yourself too weak in statistics, and you are not able to cope with the complexity of the advanced data science modules, you can opt for the Foundational data science learning module."
            ProgramBot31="So Learnbay is able to fulfill every aspirant's data science learning needs in Hyderabad."
            ProgramBot32="Here, Students get one-on-one counseling sessions with a Data science career expert and a one to three-year Flexi pass ( based on course selection), allowing them to attend any live classes whenever they want. You may also use your mobile device to access Learnbay LMS for more convenient learning. Learnbay's advanced data science course in Hyderabad offers you the flexibility of attending various sessions with different professors."
            ProgramBot4="Another factor of our data science IBM certification In Hyderabad is that you can choose from a range of Foundational or Advanced Data science courses depending on your present professional level. Each of these courses is organized into modules based on your previous job."
            ProgramHead5="Data Science Courses by Learnbay in Hyderabad :"
            Courselink1="/data-science-certification-courses"
            Courselink2="/advance-data-science-certification-courses"
            Courselink4="/data-science-ai-for-managers"
            Courselink5="/job-guarantee-or-money-back-data-science-ai-certification-course"
            Course1="Foundational Data Science and AI program"
            Course2="Advanced-Data Science and AI program with Domain Specialization"
            Course4="Data Science and AI Program for Managers and Leaders"
            Course5="AI and Data Science Course with Job Guarantee or Money back"

            DomainHead1="Why Domain Specialization?"
            DomainBot1="Our domain-specific courses are intended to assist students in approaching the complexities of business problems from a certain industry or domain with the most profitable data scientific solutions."
            DomainBot2="A domain-specific Data scientist will have a much better grasp of the domain and its nuances and the essential business concerns that must be addressed. Recruiters are looking for domain-specific Data scientists at present. One cannot deliver precise analytical insights without subject understanding. As a result, it's critical to select courses that include domain electives."
            DomainBot3="Learnbay Advanced data science course training covers domains in almost all sectors like"
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

            CertificationBot1="You get hassle-free classes from many professional educators when pursuing the Learnbay IBM data scientist course. You'll also receive multiple IBM certifications in Data Science and Artificial intelligence micro-skills. Aside from that, upon completion of the capstone project featured in the Data Science courses in Hyderabad, you will obtain an IBM Project Experience Certificate. Depending on your course, you will receive 1 to 8 certifications."
            CertificationBot2="For more details about the certification, you can read our brochures"
            src="/certificate.webp"

            ModuleBot1="Expert Data scientists have meticulously crafted the Data science training modules. You'll master various data science tools and strategies to understand business problems in the Data Science certification course. Enrolling in Learnbay’s IBM Data science course in Hyderabad might help students realize their full potential as Data scientists. Our courses are meant to be simple to follow and comprehend while providing the finest possible Data science foundation. We teach you how your Data science abilities will be used in the future by using real-time capstone projects."
            ModuleBot2="A few of the most important data science submodules covered in our courses are Python, Statistics, MongoDB, Tensorflow, Deep Learning, Time series, Deployment GCP, and other data science tools."

    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
    syllabusb1="6 Hours"
    SyllabusBotlist11="Anaconda Installation"
    SyllabusBotlist12="Basics of programming"
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
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etcs"
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


    JobBot1="The Data science curriculum at Learnbay includes a job placement program. Students will receive CV preparation and soft skills training sessions by the end of the IBM Data science course. Our students gain confidence before the interviews by participating in various company-specific mock interviews. Furthermore, our representatives verify that your portfolio meets industry standards and appeals to hiring managers. In Hyderabad, you can also take a Data science course with a money-back guarantee. You can claim a Data science course fee refund if you cannot find a Data science career role within six months of completing the course."
    JobBot2="We have collaborated with lead organizations like IBM, TCS, EY, Accenture, and others. Over 1000 Learnbay alumni have already started working in data science roles all over Hyderabad."

    ProjectsHead1="Industry curated live data science projects."
    ProjectsBot1="Learners can comprehend Data science Projects and methodologies using Learnbay's premium cloud lab feature. You can choose from 8 to 15 real-time projects in your chosen domains in Learnbay’s Advanced Data science courses in Hyderabad. This cloud lab also allows you to see and practice various data mining, data wrangling, and real MNC data projects. Students will have the opportunity to work on two to three Data science capstone projects, after which an IBM Project experience credential will be issued."
    ProjectsBot2="Here are a few of our projects that Learnbay alumni have succeeded at:"
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="The IBM data science course offered by Learnbay is dedicated to generating amazingly skilled Data scientists in Hyderabad. Many of our students have joined Data scientist roles and other Data science positions, with pay increases of up to 200 percent. More than 300 Learnbay Data science course alumni have secured leadership and management in the data science field in some of the world's most prestigious companies. Read what our alumni have to say about their success from Learnbay."
    Asrc1="/devraj.jpg" 
    AlumniH1="Deveraj" 
    Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
    Asrc2="/Shezan.png" 
    AlumniH2="Shezan Baig" 
    Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
    Asrc3="/viraj.png" 
    AlumniH3="Viraj Ghodke" 
    Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
    Asrc4="/Shubhangi.png" 
    AlumniH4="Shubhangi J. Waghmare " 
    Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."

          />
            <FAQNew FaqDatas={AdvanceFaqDataH} DomainFaqDatas={AdvanceDomainFaqDataH} PaymentFaqDatas={AdvancePaymentFaqDataH} CapstoneFaqDatas={AdvanceCapstoneFaqDataH} CertificationFaqDatas={AdvanceCertificationFaqDataH} jobFaqDatas={AdvancejobFaqDataH} MentorshipFaqDatas={AdvanceMentorshipFaqDataH} SupportFaqDatas={AdvanceSupportFaqDataH} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Hyderabad "
      CityText=" : Medipalli[500098], A.G.College [500030], HMT Township [500054], Hal Hyderabad [500042], Kondapur [500084], Fatehdarwaza [500065], Begumpet [500016], Lingampalli [500019], Kattedan Ie [500077], Falaknuma [500053], Peerzadiguda [500039], Jillellaguda [500079], I.M.Colony [500082], Gajularamaram [500055], Banjara Hills [500034], Gachibowli [500032], Badangpet [500058], Film Nagar [500096], A.Gs. Staff Quarters [500045], Malakpet Colony [500036], Balanagar Township [500037], Amberpet [500013], Bharat Nagar Colony [500018], Chitkul [502307], Don Bosco Nagar [500086], Gsisr Bandlaguda [500068], Yakutpura [500023], Chaithanyapuri Colony [500060], Chandanagar [500050], Appa Himayathsagar [500008], Hyderabad Jubilee [500002], Meerpet [500097], Humayunnagar [500028], Aie Bollaram [502325], Chetlapotharam [502319], Srinagar Colony [500073], Gandhi Bhawan Hyderabad [500001], Darushifa [500024], Gandhinagar Hyderabad [500080], Sarada Nagar [500070], Barkatpura [500027], Gagan Mahal [500029], Elmela [502300], Sanjeev Reddy Nagar [500038], Manikonda [500089], Cyberabad [500081], Boduppal [500092], Dr.B R Ambedkar O.U [500033], Kphb Colony [500072], Huda Residential Complex [500035], Miyapur [500049], L B Nagar [500074], Ashoknagar Hyderabad [500020], Saidabad Colony [500059], Jntu Kukat Pally [500085], Bowenpally [500011], Icrisat [502324], Administrative Buildings [500007], Aziz Nagar [500075], Afzalgunj [500012], Karwan Sahu [500006],Gaganpahad [500052], Ibrahim Bagh Lines [500031], Putlibowli [500095], Bahadurpura [500064], A.Gs Office [500004], Bachupally [500090], A.I.E. R.C.Puram [502032], Ambernagar [500044]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science Training in Hyderabad, Data Science Course in Hyderabad, Data Science Course in Gachibowli, Data Science Training in Gachibowli,Data Science Course in Madhapur, Data Science Training in Madhapur, Data Science Training Institute in Hyderabad, Data Science Course in Kondapur, Data Science Training in Kondapur, Data Science Course in Begumpet, Data Science Course in Lingampalli, Data Science Course in Banjara hills, Data Science Course in L B Nagar, Data Science Course in Boduppal, Data Science Course in Kphb Colony, Data Science Training in Begumpet, Data Science Training in Lingampalli, Data Science Training in Banjara hills, Data Science Training in L B Nagar, Data Science Training in Boduppal, Data Science Training in KPhb Colony, Data Science Classroom Training in Hyderabad, Data Science Training near me, Data Science Course near me, Data Science Institute near me, Data Scientist Course, Data Science Certification, Data Science Certification in Hyderabad, Best Data Science Course, Best Data Science Training"
      />
      </main> 
    </div>
  )
}