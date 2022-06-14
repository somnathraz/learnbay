import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CityText from "../Components/CityText/CityText";
import CitiesLeft from "../Components/CitiesLeft/CitiesLeft";
import CitiesRight from "../Components/CitiesRight/CitiesRight";
import FAQNew from "../Components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import { AdvanceFaqDataM, AdvanceDomainFaqDataM, AdvancePaymentFaqDataM, AdvanceCapstoneFaqDataM, AdvanceCertificationFaqDataM, AdvancejobFaqDataM, AdvanceMentorshipFaqDataM, AdvanceSupportFaqDataM } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Science Course in Mumbai | Data Science Training in Mumbai</title>
<meta name="description" content="Data science course in Mumbai. Learnbay is Advanced Data Science Course Training Institute in Mumbai. Data science course in Mumbai will enhance your career" />
<meta name="Keywords" content="data science course in Mumbai, data science training in Mumbai, data science institute in Mumbai, best data science institute in Mumbai, data scientist course in Mumbai,data scientist certification in Mumbai, data science training institute in Mumbai, advanced data science course in Mumbai, data science course with placement guarantee, data science course" />
<link rel="canonical" href="https://www.learnbay.co/data-science-course-training-in-mumbai" />
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
        src="/banner.png"
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
            ProgramBot5="Foundational Data Science and AI program,
            Advanced-Data Science and AI program with Domain Specialization,
            Data Science and AI Program for Managers and Leaders,
            AI and Data Science Course with Job Guarantee or Money back."

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
            <FAQNew FaqDatas={AdvanceFaqDataM} DomainFaqDatas={AdvanceDomainFaqDataM} PaymentFaqDatas={AdvancePaymentFaqDataM} CapstoneFaqDatas={AdvanceCapstoneFaqDataM} CertificationFaqDatas={AdvanceCertificationFaqDataM} jobFaqDatas={AdvancejobFaqDataM} MentorshipFaqDatas={AdvanceMentorshipFaqDataM} SupportFaqDatas={AdvanceSupportFaqDataM} />
        </div>
      </div>
      <CityText
      CityTextB="Data Science Course Certification Training locations in Mumbai "
      CityText=" : A I staff colony [400029], Aareymilk Colony [400065], Agripada [400011], Airport [400099], Ambewadi [400004], Andheri [400053], Andheri East [400069], Andheri Railway station [400058], Antop Hill [400037], Asvini [400005], Azad Nagar [400053], B P t colony [400003], B.N. bhavan [400051], B.P.lane [400003], Bandra West [400050], Bandra(east) [400051], Bangur Nagar [400090], Bazargate [400001], Best Staff colony [400012], Bharat Nagar [400007], Bhawani Shankar [400028], Borivali [400091], Borivali East [400066], Borvali West [400092], C G s colony [400013], Central Building [400020], Century Mill Chakala Midc [400093], Chamarbaug [400012], Charkop [400067], Chaupati [400004], Chinchbunder [400009], Chinchpokli [400011], Churchgate [400020], Colaba [400005], Cotton Exchange [400033], Cumballa Hill [400026], Dadar [400014], Dahisar [400068], Danda [400052], Daulat Nagar [400066], Delisle Road [400013], Dharavi [400017], Dockyard Road [400010], Dr Deshmukh marg [400026], Falkland Road [400008], Girgaon [400004], Gokhale Road [400028], Goregaon [400062], Goregaon East [400063], Government Colony [400051], Gowalia Tank [400026], Grant Road [400007], H.M.p. school [400058], Haffkin Institute [400012], Haines Road [400011], Hajiali [400034], Hanuman Road [400057], High Court bulding [400032], Holiday Camp [400005], Irla [400056], Ins Hamla [400095], International Airport [400099], J.B. nagar [400059], J.J.hospital [400008], Jacob Circle [400011], Jogeshwari East [400060], Jogeshwari West [400102], Juhu [400049], Kalachowki [400033], Kalbadevi [400002], Kamathipura [400008], Kandivali East [400101], Kandivali West [400067], Kapad Bazar [400016], Ketkipada [400068], Khar Colony [400052], Kharodi [400095], Kherwadi [400051], Kidwai Nagar [400031], L B s n e collage [400033], Lal Baug [400012], Liberty Garden [400064], M A marg [400008], M.P.t. [400001], Madh [400061], Madhavbaug [400004], Magthane [400066], Mahim [400016], Malabar Hill [400006], Malad [400064], Malad East [400097], Malad West dely [400064], Mandapeshwar [400103], Mandvi [400003], Mantralaya [400032], Marine Lines [400020], Marol Bazar [400059], Masjid [400003], Matunga Railway workshop [400019], Mazgaon [400010], Mori Road [400016], Motilal Nagar [400104], Mumbai Central [400008], Mumbai[400001], N . s.patkar [400007], Nagardas Road [400069], Nagari Niwara [400065], Naigaon [400014], Nariman Point [400021], New Prabhadevi road [400025], New Yogakshema [400021], Noor Baug [400003], Null Bazar [400003], Opera House [400004], Orlem [400064], Oshiwara [400102], Parel [400012], Parel Rly work shop [400003], Prabhadevi [400025], Princess Dock [400009], Rajbhavan [400035], Rajendra Nagar [400066], Ramwadi [400002], Ranade Road [400028], Rani Sati marg [400097], Reay Road [400033], S R p f camp [400060], S Savarkar marg [400028], S V marg [400007], S. c. court [400002], S. k.nagar [400066], Sahar P & t colony [400099], Santacruz Central [400054], Santacruz P&t colony [400029], Santacruz(east) [400055], Santacruz(west) [400054], Secretariate [400032], Seepz [400096], Sewri [400015], Sharma Estate [400063], Shivaji Park [400028], Shroff Mahajan [400002], Stock Exchange [400001], Tank Road [400033], Tardeo [400007], Thakurdwar [400002], Tulsiwadi [400034], V J b udyan [400027], V K bhavan [400010], V.P. road [400052], V.W.t.c. [400005], Vakola [400055], Vesava [400061], Vidyanagari [400098], Vileeparle (east) [400057], Vileparle(west) [400056], Wadala [400031], Worli [400018], Worli Colony [400030], 400701[Navi Mumbai], 400602[Thane]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Science course training in Mumbai, Data Science course training in Thane, Data Science course in Bhandup, Data Science Training in Chembur, Data Science course institute in powai, Data Science course in Tehsil, Data Science training in Ghatkopar, Data Science institute in Sion, Data Science certification in Shivaji nagar, Data Science course in Mulund, Data Science training in sewri, Data Science institute in Kannamwar nagar, Data Science course in Parel, Data Science certification in Anushakti Nagar, Data Science Training in Sakinaka, Data Science institute in kharodi, Data Science certification in Madh, Data Science course training in malad, Data Science course training in Andheri, Data Science training in Coal Bunder, Data Science institute in Dharavi, Data Science certification in Worli, Data Science course in Aswini, Data Science training in Goregaon, Data Science institute in Kandivali, Data Science course in Borivali, Data Science certification in juhu, Data science training in Marol Naka, Data Science institute in Jogheswari, Data science certification in vakola, data Science course in Bandra, Data Science training in Kurla, data Science course training in navi mumbai, data Science course training in Kalyan ."
      />
      </main> 
    </div>
  )
}