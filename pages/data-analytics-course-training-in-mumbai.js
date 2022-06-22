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
import CitiesLeft from "../Components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../Components/CityComponent/CitiesRight/CitiesRightdomain";
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
        deskTopPara="In Collaboration with IBM"
        mTopPara="In Collaboration with IBM"
        title="Data Analytics Course Training in Mumbai"
        desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        src="/data-analytics.png"
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
            ProgramHead1="Professional Data Analytics Training Course in Mumbai"
            ProgramHead2="What is the Industrial Data Analytics Program by Learnbay?"
            ProgramBot1="Learnbay is one of the leading data analytics training institutes in Mumbai, with a diverse selection of professional programs. Learnbay's objective is to deliver individualized data analytics training so that everyone can easily deal with the complex real-world analytical requirements. In fact, this is why at Learnbay, you get most of the modules as practical assignments rather than boring theoretical sessions."
            ProgramBot2="We dedicatedly address personalized career needs. Accordingly, provides data analytics projects options. So, instead of holding just a data Analytics Certificate, you hold the ultimate abilities to be a successful data analyst in MNCs. It offers an immersive data analytics learning experience in Mumbai with one-on-one doubt clearing sessions conducted by renowned industry professionals. This distinguishes it as a one-stop-shop for everyone interested in becoming a truly professional data analyst.
            "
            ProgramHead3="How does it become a truly professional Data Analytics course in Mumbai?"
            ProgramBot3="This is a data analytics course with Placement Support (dedicated). The associated industrial data analytics training in Mumbai by Learnbay not only offers full-stack data analytics modules but also ensures you get a job after competing in the same. Its hands-on learning methodology incorporates interactive sessions with leading data analysts and industry projects to cover in-depth topics like exploratory data analysis, data visualization, and regression techniques."
            ProgramHead4="Why is Learnbay the top data analytics training Provider in Mumbai?"
            ProgramBot4="It’s mainly because of two reasons. One is their industrial recognition via IBM collaboration and the second one is their project exposure. At Learnbay, you get the ultimate industrial experience, even before joining your first data analyst job role. Due to an extremely personalized learning experience via 24 hours tech support, on-demand 1-on-1 discussion, and FANNG expert as an instructor,  the data analytics training program in Mumbai become the best option to enroll. In addition, within the data analytics course fees you pay, you get 1-years flexible subscription to this data analytics program. This helps you maintain your professional responsibilities and the learning progress at the same time with the greatest ease."
            ProgramBot5="Know more about the Industrial Data Analytics Program in Mumbai by Learnbay"

            CertificationHead1="IBM Certified Data Analytics Program"
            CertificationBot1="IBM has recognized our data analytics industrial program in Mumbai. We've also partnered with international IT companies to offer our students a better placement assistance experience. "
            CertificationBot2="Due to the presence of the IBM Data Analytics Certificate in your Linkedin and other online job profiles, your profile becomes tagged for top-tire data analytics job profiles in Mumbai."
            src="/BA-DA.jpeg"

            ModuleHead1="What do you get under the Learnbay Data Analytics program in Mumbai?"
            ModuleHead4="Special Programming Classes"
            ModuleBot1="Lack of programming knowledge is no more a barrier to data analytics courses for working professionals in Mumbai. A series of dedicated basic python and R programming classes are there. So, candidates with any professional background (Marketing, Finance, HR, etc.) can enroll."
            ModuleHead2="The Best Online Data Analytics Program in Mumbai"
            ModuleBot3="Learnbay data analytics course incorporates 180+ hours of live and interactive learning. It's just like the offline class experience. Apart from that, at the end of every module, a student can request for 1-on-1 discussion session with their respective instructors."
            ModuleBot4="The submodules are comprehensively planned to create an expert data analyst within 4.5 to 6 months. Within this time span, you will be the pro of data analytics tools and skills like Probability, Data Storytelling, data mining, dashboarding, PCA analysis, Tableau, SQL, Power BI Hadoop, Seaborn, etc."

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
    syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/6th+DA.pdf"


    JobHead1="How is the job orientation program associated with Learnbay business analytics training in Mumbai?"
    JobBot1="Learnbay is dedicated to providing the most comprehensive data analytics training in Mumbai."
    JobBot2="We provide specialized mock interviews for candidates looking for jobs in data analytics as part of our job aid program. We also assist students with résumé writing, technical skills training, and soft skill development. Our strong links with MNCs and IBM have aided numerous students in obtaining positions in the top leading organizations in the shortest period possible. After completing the course, approximately 700+ Learnbay students have already achieved lucrative roles in worldwide corporate giants such as Amazon, TCS, EY, JP Morgan, and Mercedes."
    JobHead2="Why Earning the Data Analytics Skills Is So Important?"
    JobBot3="The Simplest answer is to secure your career. Data analysis is used to forecast and understand precise business results. Learners of  IBM data analytics training course in Mumbai become eligible to make better business decisions. Descriptive, prescriptive, and automated data analytics are three types of data analytics. Significant differences exist between the three, which may be taught in-depth through our data analytics course. Until you have an adequate degree of analytical understanding, the job opportunities will start narrowing in the upcoming years."
    JobHead3="What Are the Data Analytics Roles in Mumbai You Can Target After This Course?"
    JobBot4="At the end of Learnbay provided  IBM data analytics Certification, you can apply for the following positions:"
    JobBot6="Junior Data Analyst,
    Marketing Analyst,
    Data Analytics consultant,
    Financial Analyst,
    HR Analyst,
    Quantitative Analyst,
    Operation Analyst, etc.
    "

    ProjectsBot1="The premium cloud lab element of the IBM data analytics course from Learnbay is one of its best features available in Mumbai. There are a total of 5 live MNC project opportunities, which you can access through this cloud lab. All of these projects are as per the data analytics skill demand spread across Mumbai City.  Below are a few of the data Analytics projects, already done by Learnbay students in Mumbai. "
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4=" BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="In 2020 we had 70+ hiring partners, but our students' business analytics interview success rate has helped us expand the network with 250+ company collaborations in Mumbai now. It's not only the junior business analyst positions that our students are enjoying- rather, but 300+Learnbay alumni are also successfully handling their mid to senior-level BA job roles in several startups and MNCs across the country.
    "
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