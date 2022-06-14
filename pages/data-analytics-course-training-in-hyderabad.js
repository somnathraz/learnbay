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
import CitiesLeft from "../Components/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../Components/CitiesRight/CitiesRightdomain";
import FAQNew from "../Components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import { AnalyticsFaqDataM, AnalyticsDomainFaqDataM, AnalyticsPaymentFaqDataM, AnalyticsCapstoneFaqDataM, AnalyticsCertificationFaqDataM, AnalyticsjobFaqDataM, AnalyticsMentorshipFaqDataM, AnalyticsSupportFaqDataM } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
      <title>Data Analytics Course in Mumbai | Data Analytics Training in Mumbai</title>
<meta name="description" content="Data Analytics Course in Mumbai. Learnbay is Advanced Data Analytics Course Training Institute in Mumbai. Data Analytics course in Mumbai will enhance your career" />
<meta name="Keywords" content="Data Analytics course in Mumbai, Data Analytics training in Mumbai, Data Analytics institute in Mumbai, best Data Analytics institute in Mumbai, Data Analytics course in Mumbai, Data Analytics certification in Mumbai, Data Analytics training institute in Mumbai, advanced Data Analytics course in Mumbai, Data Analytics course with placement guarantee, Data Analytics course" />
<link rel="canonical" href="https://www.learnbay.co/data-analytics-course-training-in-mumbai" />
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
        deskTopPara="First-Track Industrial Training For Early Professionals"
        mTopPara="First-Track Industrial Training For Early Professionals"
        title="Data Analytics Course Training in Hyderabad"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Professional Beginners"
        p2="14LPA - 22LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 11.8k/month (6 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="Best in class industrial training with live projects"
        WeekendBatchDate="250+ employer allowance & 100% interview guarantee"
        Project="Career Guidance from industrial experts"
        Classes="Basic coding classes for non-technical pros"
        OneLine="Live & interactive Training by industry experts"
        Interview="Course completion certificate from IBM"
        Fee="60,000"
        Subscription="1.5 Year Subscription"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
          Box2h5="Exclusive Hackathons"
          box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
          Box3h5="Premium Mentoring"
          box3desc="Enjoy the edge of mock interviews and CV writing workshops with FAANG Data Analytical whizzes."
          Box4h5="Hands-on Experience"
          box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramBot1="Learnbay is one of the leading data analytics training institutes in Hyderabad, with a broad collection of IBM certification courses. Learnbay's goal is to deliver specialized data analytics training and prepare students for any kind of complex industrial, analytical problems. Everything in the Learnbay data analytics course is taken good care of, from hands-on training via live data analytics projects to qualifying for interviews with top-tier MNCs. Learnbay delivers an immersive data analytics learning experience with one-on-one doubt clearing sessions led by renowned industry professionals. This distinguishes it as a one-stop resource for everyone interested in becoming a professional job-ready Data analyst."
            ProgramBot2="Learnbay's Data analytics course in Hyderabad is tailored to match the industry's ever-changing needs. This Data Analytics course with job placement support is suitable for experienced working professionals and early career professionals in any field. Its hands-on learning methodology incorporates interactive sessions with leading practitioners and industry projects to cover topics like Data analysis, Data visualization, and regression techniques in depth."
            ProgramHead3="Why is Learnbay a great institute for the professional Data analytics course in Hyderabad?"
            ProgramBot3="Learnbay offers 100% live interactive training with flexible scheduling and sessions taught by knowledgeable data analysts. Furthermore, our data analytics course in Hyderabad includes a one-year flexi membership, allowing students to learn at their own pace. Learners can select their favorite batch and mentors, a unique feature. Non-programmers might take additional lessons to keep on track with their peers."
            ProgramBot31="Students, on the other hand, can be well-prepared to excel in the data-driven world with our world-class data analytics training in Hyderabad. For a well-balanced approach to learning, the Learnbay data analytics certification course with placement contains both practical and theoretical topics."

            CertificationBot1="In Hyderabad, we already have IBM on board with our data analytics industrial initiative. After the course, students will receive an IBM Data Analytics Course Completion certificate."
            CertificationBot2="Learnbay IBM Data analytics training will certainly boost your resume, allowing you to stand out from the pack and attract recruiters' attention."
            src="/BA-DA.jpeg"

            ModuleBot1="Learnbay is dedicated to providing the most comprehensive data analytics training in Hyderabad. This Data Analytics Program with placement is tailored to satisfy the industry's ever-changing objectives. Our customized data analytics course in Hyderabad provides basic to advanced data analytics training. We also provide special coding classes for non-programmers who want to strengthen their programming skills."
            ModuleBot2="Countless working professionals have benefited from our data analytics course training in Hyderabad by improving their technical abilities and gaining expertise in various fields."
            ModuleBot3="The IBM data analytics course's modules cover all of the important topics in data analytics tools and methodologies, such as data pretreatment, data exploration, statistical analysis, dashboarding, PowerBI, SQL, etc."

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
    syllabush3="Statistics"
    syllabusb3="50 Hours"
    SyllabusBotlist31="Linear Algebra, Probability"
    SyllabusBotlist32="Permutation & Combination"
    SyllabusBotlist33="Descriptive"
    SyllabusBotlist34="Hypothesis Testing"
    SyllabusBotlist35="Time Series Analysis"
    SyllabusBotlist36="Inferential Stats"
    syllabush4="Industrial Projects &
    Capstone Projects"
    syllabusb4="
    6+ Classes"
    SyllabusBotlist41="Visualize Daily Wikipedia Trends"
    SyllabusBotlist42="Color Detection Project"
    SyllabusBotlist43="
    Real-time Auto Tracking"
    SyllabusBotlist44="Web Scrapping"
    SyllabusBotlist45="Fake News Detection"
    SyllabusBotlist46="Movie Recommendation"

    JobBot1="Learnbay aims to introduce high-quality data analysts in Hyderabad. For candidates looking for positions in data analytics, we conduct mock interviews as part of our job support program. We also assist the students with resume writing, technical skills training, and soft skill development."
    JobBot2="Our good terms with MNCs and IBM have aided many students in obtaining positions as data analysts in the top leading businesses in the shortest period feasible. Approximately 700+ Learnbay students have already achieved high-paying jobs with Multinational firms such as Amazon, TCS, EY, JP Morgan, and Oracle after completing the course."
    JobHead2="Roles as Data Analyst"
    JobBot3="Data analysts are in high demand in a lot of industries in Hyderabad. A professional data analyst organizes, analyzes, and stores data to assist businesses in making strategic decisions. A data analyst should have a theoretical as well as a practical understanding of trending analytical tools. Furthermore, they should be able to utilize their knowledge of data collection and analysis to arrive at significant conclusions."
    JobBot4="Learners may use IBM data analytics training to make better business decisions. Our data analytics training course in Hyderabad shows you the real differences between predictive, descriptive, and automated analytics. By pursuing this course, you can learn the most in-demand data analytics skills and land a job with one of Hyderabad's top firms within 6 to 8 months. The different roles of data analytics are"
    JobBot6="Junior Data Analyst,
    Marketing Analyst,
    Data Analytics consultant,
    Financial Analyst,
    HR Analyst,
    Quantitative Analyst,
    Operation Analyst, etc.
    "

    ProjectsBot1="Learnbay's goal is to help students obtain practical hands-on experience by completing several projects with the help of our mentors. You will have the opportunity to work on five popular data analytics projects as part of the data analytics course curriculum in Hyderabad. One of the most appealing aspects of the IBM data analytics course is its premium cloud lab access, which allows students to examine the data handling and mining processes in real-world MNC projects. These live projects associated with the Learnbay data analytics course in Hyderabad Make learning more efficient and industry-paced."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="Learnbay works tirelessly to help many aspiring data analysts in Hyderabad achieve their career goals. Our strong links with MNCs and IBM have aided numerous students in obtaining positions around the top leading organizations in the shortest period feasible. More than 700 students have already landed lucrative data analytics job roles at international corporations such as Amazon, TCS, EY, JP Morgan, and Mercedes. Below are a few of the stories shared by our alumni."
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
            <FAQNew FaqDatas={AnalyticsFaqDataM} DomainFaqDatas={AnalyticsDomainFaqDataM} PaymentFaqDatas={AnalyticsPaymentFaqDataM} CapstoneFaqDatas={AnalyticsCapstoneFaqDataM} CertificationFaqDatas={AnalyticsCertificationFaqDataM} jobFaqDatas={AnalyticsjobFaqDataM} MentorshipFaqDatas={AnalyticsMentorshipFaqDataM} SupportFaqDatas={AnalyticsSupportFaqDataM} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Mumbai "
      CityText=" : A I staff colony [400029], Aareymilk Colony [400065], Agripada [400011], Airport [400099], Ambewadi [400004], Andheri [400053], Andheri East [400069], Andheri Railway station [400058], Antop Hill [400037], Asvini [400005], Azad Nagar [400053], B P t colony [400003], B.N. bhavan [400051], B.P.lane [400003], Bandra West [400050], Bandra(east) [400051], Bangur Nagar [400090], Bazargate [400001], Best Staff colony [400012], Bharat Nagar [400007], Bhawani Shankar [400028], Borivali [400091], Borivali East [400066], Borvali West [400092], C G s colony [400013], Central Building [400020], Century Mill Chakala Midc [400093], Chamarbaug [400012], Charkop [400067], Chaupati [400004], Chinchbunder [400009], Chinchpokli [400011], Churchgate [400020], Colaba [400005], Cotton Exchange [400033], Cumballa Hill [400026], Dadar [400014], Dahisar [400068], Danda [400052], Daulat Nagar [400066], Delisle Road [400013], Dharavi [400017], Dockyard Road [400010], Dr Deshmukh marg [400026], Falkland Road [400008], Girgaon [400004], Gokhale Road [400028], Goregaon [400062], Goregaon East [400063], Government Colony [400051], Gowalia Tank [400026], Grant Road [400007], H.M.p. school [400058], Haffkin Institute [400012], Haines Road [400011], Hajiali [400034], Hanuman Road [400057], High Court bulding [400032], Holiday Camp [400005], Irla [400056], Ins Hamla [400095], International Airport [400099], J.B. nagar [400059], J.J.hospital [400008], Jacob Circle [400011], Jogeshwari East [400060], Jogeshwari West [400102], Juhu [400049], Kalachowki [400033], Kalbadevi [400002], Kamathipura [400008], Kandivali East [400101], Kandivali West [400067], Kapad Bazar [400016], Ketkipada [400068], Khar Colony [400052], Kharodi [400095], Kherwadi [400051], Kidwai Nagar [400031], L B s n e collage [400033], Lal Baug [400012], Liberty Garden [400064], M A marg [400008], M.P.t. [400001], Madh [400061], Madhavbaug [400004], Magthane [400066], Mahim [400016], Malabar Hill [400006], Malad [400064], Malad East [400097], Malad West dely [400064], Mandapeshwar [400103], Mandvi [400003], Mantralaya [400032], Marine Lines [400020], Marol Bazar [400059], Masjid [400003], Matunga Railway workshop [400019], Mazgaon [400010], Mori Road [400016], Motilal Nagar [400104], Mumbai Central [400008], Mumbai[400001], N . s.patkar [400007], Nagardas Road [400069], Nagari Niwara [400065], Naigaon [400014], Nariman Point [400021], New Prabhadevi road [400025], New Yogakshema [400021], Noor Baug [400003], Null Bazar [400003], Opera House [400004], Orlem [400064], Oshiwara [400102], Parel [400012], Parel Rly work shop [400003], Prabhadevi [400025], Princess Dock [400009], Rajbhavan [400035], Rajendra Nagar [400066], Ramwadi [400002], Ranade Road [400028], Rani Sati marg [400097], Reay Road [400033], S R p f camp [400060], S Savarkar marg [400028], S V marg [400007], S. c. court [400002], S. k.nagar [400066], Sahar P & t colony [400099], Santacruz Central [400054], Santacruz P&t colony [400029], Santacruz(east) [400055], Santacruz(west) [400054], Secretariate [400032], Seepz [400096], Sewri [400015], Sharma Estate [400063], Shivaji Park [400028], Shroff Mahajan [400002], Stock Exchange [400001], Tank Road [400033], Tardeo [400007], Thakurdwar [400002], Tulsiwadi [400034], V J b udyan [400027], V K bhavan [400010], V.P. road [400052], V.W.t.c. [400005], Vakola [400055], Vesava [400061], Vidyanagari [400098], Vileeparle (east) [400057], Vileparle(west) [400056], Wadala [400031], Worli [400018], Worli Colony [400030], 400701[Navi Mumbai], 400602[Thane]."
      CityTextLB="Locations Offered"
      CityTextL=" :Data Analytics course training in Mumbai, Data Analytics course training in Thane, Data Analytics course in Bhandup, Data Analytics Training in Chembur, Data Analytics course institute in powai, Data Analytics course in Tehsil, Data Analytics training in Ghatkopar, Data Analytics institute in Sion, Data Analytics certification in Shivaji nagar, Data Analytics course in Mulund, Data Analytics training in sewri, Data Analytics institute in Kannamwar nagar, Data Analytics course in Parel, Data Analytics certification in Anushakti Nagar, Data Analytics Training in Sakinaka, Data Analytics institute in kharodi, Data Analytics certification in Madh, Data Analytics course training in malad, Data Analytics course training in Andheri, Data Analytics training in Coal Bunder, Data Analytics institute in Dharavi, Data Analytics certification in Worli, Data Analytics course in Aswini, Data Analytics training in Goregaon, Data Analytics institute in Kandivali, Data Analytics course in Borivali, Data Analytics certification in juhu, Data Analytics training in Marol Naka, Data Analytics institute in Jogheswari, Data Analytics certification in vakola, Data Analytics course in Bandra, Data Analytics training in Kurla, Data Analytics course training in navi mumbai, Data Analytics course training in Kalyan ."
      />
      </main> 
    </div>
  )
}