import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AnalyticsFaqDataH,
  AnalyticsDomainFaqDataH,
  AnalyticsPaymentFaqDataH,
  AnalyticsCapstoneFaqDataH,
  AnalyticsCertificationFaqDataH,
  AnalyticsjobFaqDataH,
  AnalyticsMentorshipFaqDataH,
  AnalyticsSupportFaqDataH,
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
          Data Analytics Course in Hyderabad | Data Analytics Training in
          Hyderabad
        </title>
        <meta
          name="description"
          content="Data Analytics Course in Hyderabad. Learnbay is Advanced Data Analytics Course Training Institute in Hyderabad. Data Analytics course in Hyderabad will enhance your career"
        />
        <meta
          name="Keywords"
          content="Data Analytics course in Hyderabad, Data Analytics training in Hyderabad, Data Analytics institute in Hyderabad, best Data Analytics institute in Hyderabad, Data Analytics course in Hyderabad, Data Analytics certification in Hyderabad, Data Analytics training institute in Hyderabad, advanced Data Analytics course in Hyderabad, Data Analytics course with placement guarantee, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-Hyderabad"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
          deskTopPara="First-Track Industrial Training For Early Professionals"
          mTopPara="First-Track Industrial Training For Early Professionals"
          title="Data Analytics Course Training in Hyderabad"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="/course6.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Professional Beginners"
            p2="14 LPA - 22 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹ 6,392/month"
          />
        </div>
        <GetHired
          WeekdayBatchDate="Best in class industrial training with live projects"
          WeekendBatchDate="250+ employer allowance & 100% interview guarantee"
          Project="Career guidance from industrial experts"
          Classes="Basic coding classes for non-technical professions"
          OneLine="Live & interactive training by industry experts"
          Interview="Course completion certificate from IBM"
          Fee="65,000"
          Subscription="1.5 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant companies."
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
              syllabush3="Statistics"
              syllabusb3="50 Hours"
              SyllabusBotlist31="Linear Algebra, Probability"
              SyllabusBotlist32="Permutation & Combination"
              SyllabusBotlist33="Descriptive Stats"
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/DATA+ANALYTICS.pdf"
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
              src3="/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay works tirelessly to help many aspiring data analysts in Hyderabad achieve their career goals. Our strong links with MNCs and IBM have aided numerous students in obtaining positions around the top leading organizations in the shortest period feasible. More than 700 students have already landed lucrative data analytics job roles at international corporations such as Amazon, TCS, EY, JP Morgan, and Mercedes. Below are a few of the stories shared by our alumni."
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
              FaqDatas={AnalyticsFaqDataH}
              DomainFaqDatas={AnalyticsDomainFaqDataH}
              PaymentFaqDatas={AnalyticsPaymentFaqDataH}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataH}
              CertificationFaqDatas={AnalyticsCertificationFaqDataH}
              jobFaqDatas={AnalyticsjobFaqDataH}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataH}
              SupportFaqDatas={AnalyticsSupportFaqDataH}
            />
          </div>
        </div>
        <LearnSupport />

        <CityText
          CityTextB="Data Analytics Course Certification Training locations in Hyderabad "
          CityText=" :Medipalli[500098], A.G.College [500030], HMT Township [500054], Hal Hyderabad [500042], Kondapur [500084], Fatehdarwaza [500065], Begumpet [500016], Lingampalli [500019], Kattedan Ie [500077], Falaknuma [500053], Peerzadiguda [500039], Jillellaguda [500079], I.M.Colony [500082], Gajularamaram [500055], Banjara Hills [500034], Gachibowli [500032], Badangpet [500058], Film Nagar [500096], A.Gs. Staff Quarters [500045], Malakpet Colony [500036], Balanagar Township [500037], Amberpet [500013], Bharat Nagar Colony [500018], Chitkul [502307], Don Bosco Nagar [500086], Gsisr Bandlaguda [500068], Yakutpura [500023], Chaithanyapuri Colony [500060], Chandanagar [500050], Appa Himayathsagar [500008], Hyderabad Jubilee [500002], Meerpet [500097], Humayunnagar [500028], Aie Bollaram [502325], Chetlapotharam [502319], Srinagar Colony [500073], Gandhi Bhawan Hyderabad [500001], Darushifa [500024], Gandhinagar Hyderabad [500080], Sarada Nagar [500070], Barkatpura [500027], Gagan Mahal [500029], Elmela [502300], Sanjeev Reddy Nagar [500038], Manikonda [500089], Cyberabad [500081], Boduppal [500092], Dr.B R Ambedkar O.U [500033], Kphb Colony [500072], Huda Residential Complex [500035], Miyapur [500049], L B Nagar [500074], Ashoknagar Hyderabad [500020], Saidabad Colony [500059], Jntu Kukat Pally [500085], Bowenpally [500011], Icrisat [502324], Administrative Buildings [500007], Aziz Nagar [500075], Afzalgunj [500012], Karwan Sahu [500006],Gaganpahad [500052], Ibrahim Bagh Lines [500031], Putlibowli [500095], Bahadurpura [500064], A.Gs Office [500004], Bachupally [500090], A.I.E. R.C.Puram [502032], Ambernagar [500044]."
          CityTextLB="Locations Offered"
          CityTextL=" :Data Analytics Training in Hyderabad, Data Analytics Course in Hyderabad, Data Analytics Course in Gachibowli, Data Analytics Training in Gachibowli,Data Analytics Course in Madhapur, Data Analytics Training in Madhapur, Data Analytics Training Institute in Hyderabad, Data Analytics Course in Kondapur, Data Analytics Training in Kondapur, Data Analytics Course in Begumpet, Data Analytics Course in Lingampalli, Data Analytics Course in Banjara hills, Data Analytics Course in L B Nagar, Data Analytics Course in Boduppal, Data Analytics Course in Kphb Colony, Data Analytics Training in Begumpet, Data Analytics Training in Lingampalli, Data Analytics Training in Banjara hills, Data Analytics Training in L B Nagar, Data Analytics Training in Boduppal, Data Analytics Training in KPhb Colony, Data Analytics Classroom Training in Hyderabad, Data Analytics Training near me, Data Analytics Course near me, Data Analytics Institute near me, Data Scientist Course, Data Analytics Certification, Data Analytics Certification in Hyderabad, Best Data Analytics Course, Best Data Analytics Training"
        />
      </main>
    </div>
  );
}
