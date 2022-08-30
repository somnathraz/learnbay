import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  BusinessAFaqDataB,
  BusinessAPaymentFaqDataB,
  BusinessACapstoneFaqDataB,
  BusinessACertificationFaqDataB,
  BusinessAjobFaqDataB,
  BusinessAMentorshipFaqDataB,
  BusinessASupportFaqDataB,
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
          Business Analytics Course in Bangalore | Business Analytics Training
          in Bangalore
        </title>
        <meta
          name="description"
          content="Business Analytics Course in Bangalore. Learnbay is Advanced Business Analytics Course Training Institute in Bangalore. Business Analytics course in Bangalore will enhance your career"
        />
        <meta
          name="Keywords"
          content="Business Analytics course in Bangalore, Business Analytics training in Bangalore, Business Analytics institute in Bangalore, best Business Analytics institute in Bangalore, Business Analytics course in Bangalore, Business Analytics certification in Bangalore, Business Analytics training institute in Bangalore, advanced Business Analytics course in Bangalore, Business Analytics course with placement guarantee, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-bangalore"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara="Job-ready Business Analytics Program with Live Industrial Projects"
          mTopPara="Job-ready Business Analytics Program with Live Industrial Projects"
          title="Business Analytics Course "
          mTitle="Business Analytics Course"
          spanMTitleText="Training In Bangalore "
          spanTitleText="Training In Bangalore "
          desc="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course7.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Early professionals"
            p2="12 LPA - 20 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹  6,392/month"
          />
        </div>
        <GetHired
          WeekdayBatchDate="Industry-curated training via real-world analytics"
          WeekendBatchDate="Special programming classes for non-technical professionals"
          Project="Especially designed for early pros or aspirants with career gap"
          Classes="Learn the most trending analytical trick from MNC experts"
          OneLine="Industrial Business Analytics certifications for IBM"
          Interview="5 live industry projects and 100% interview call assurance"
          Fee="65,000"
          Subscription="1.5 Year Subscription"
        />
        <div className="Feature" id="Feature">
          <BoxShape
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Business Analytics role. Learn innovative BI applications."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
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
              ProgramBot1="Learnbay provides an industrial  Business analytics program and it is recognized as the top Business Analytics training program across Bangalore, mainly for working professionals. Business Analytics course in Bangalore by Learnbay is designed for aspirants who want to make a career as Business Analysts, learn to work on analytics tools, and improve their experience. This Business Analytics course is mostly for professionals who want to update themselves to master the new-age Business Analytics skills. There are a lot of live case studies in this Business Analytics course that would give learners a real-world experience."
              ProgramHead3="Why join the Learnbay Business analytics training program in Bangalore?"
              ProgramBot3="Business analyst experts from top tire multinational companies design this Business Analytics course training according to the industry needs and requirements. Learnbay keeps updating its Business Analytics program with the current working scenarios of the IT industry. Our mentors are well experienced and highly skilled at training young professionals ready for Business Analytics technology. We have a practical training model conducted and explained by top experts and even get experience with live Business analytics projects."
              CertificationHead1="Learnbay Business Analytics course training is powered by IBM certificates"
              CertificationBot1="Learnbay is a pioneer in training Business analytics at the current industry standard and gives out an IBM certificate on course completion. IBM certificates in your resume would make recruiters shortlist your profile with greater interest. Learnbay has created a milestone by partnering with IBM for Business Analytics training in Bangalore."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleBot1="Learnbay conducts online and offline classes for Business Analytics course training in Bangalore. The Business Analytics course consists of 200 hrs live and uninterrupted classes from Business Analyst experts. Learnbay has batches even on weekends for professionals to learn Business Analytics. Students learning Business analytics get a one-year subscription for completing training at their own comfort and pace of learning. Our faculties encourage students to take initiative in webinars. Learnbay even conducts webinars so that students have fun while they learn."
              ModuleBot2="Students have flexible options to choose a batch and mentors according to their liking. Learnbay mentors respond quickly to any queries raised by students and can even talk to them on our Q&A platform. MAANG experts guide every solution for students. Our LMS is created according to industrial requirements and can be accessed by any device and from any location."
              ModuleBot3="A series of basic Python programming sessions to help our non-techies to learn basic coding. So any techie or non-techie can enroll in our Business analytics program. Learnbay's Business Analytics program is IBM certified and covers all the concepts and tools required to be a successful Business Analyst. Students will learn to use Advance excel to analyze data, make models and SQL databases and create insightful data visualization with Tableau."
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
              syllabusb3="30 Hours"
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
              SyllabusBotlist41="Market Basket Analysis"
              SyllabusBotlist42="Analyzing Customer Feedback"
              SyllabusBotlist43="Loan Eligibility Prediction"
              SyllabusBotlist44="Customer Churn Prediction"
              SyllabusBotlist45="Inventory Demand Forecasting"
              SyllabusBotlist46="Retain Analytics"
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
              JobBot1="Learnbay's mentors are dedicated to providing job assistance to its learners until they get placed. Once the Business Analytics program is completed, Learnbay faculties provide you with a resume prep session, one on one mock interviews, and soft skill enhancement training. We even help students improve their presentational and communication skills to a professional level, which is one of the main skills required to be a Business Analyst. Students can easily crack business analytics interviews and even start working as Business Analysts in top MNCs."
              JobHead2="Job Role Associated with Business Analytics Field In Bangalore"
              JobBot3="The role of a Business Analyst is to lead a team in taking critical business decisions about the company's operations, processes, and other future decisions of products or solutions. Usually, Business Analyst decisions are based on the company's performance and increased productivity. As businesses move to different locations, they must analyze logistics and propose new techniques. Once you complete the Learnbay business analytics course you target the following job roles like database administrator, Business analytics consultant,  Junior Business analyst, etc. "
              ProjectsBot1="Learnbay always encourages students to work with their creativity and understanding on projects and assignments. Completing capstone business analytics projects would add a star to your profile as you have worked on trending live projects from renowned companies and the best startups as a Business analyst in Bangalore. "
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH1="Amazon Customer Review Analysis"
              Projectsp1="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH3="BMW Used Car Price Optimization"
              Projectsp3="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH4="Samsung Health Monitor App"
              Projectsp4="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              AlumniBot1="Students who graduated from Learnbay were recruited from top MNC’s and startups in the role of business analysts, BI consultants, database administrators, data analysts, and so on. Few were recruited in months after completing their business analytics training from Learnbay. Here are a few Learnbay alumni sharing their happiness and success as business analysts."
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
            />
            <FAQNew
              FaqDatas={BusinessAFaqDataB}
              PaymentFaqDatas={BusinessAPaymentFaqDataB}
              CapstoneFaqDatas={BusinessACapstoneFaqDataB}
              CertificationFaqDatas={BusinessACertificationFaqDataB}
              jobFaqDatas={BusinessAjobFaqDataB}
              MentorshipFaqDatas={BusinessAMentorshipFaqDataB}
              SupportFaqDatas={BusinessASupportFaqDataB}
            />
          </div>
        </div>
                <LearnSupport />

        <CityText
          CityTextB="Business Analytics Course Certification Training locations in Bangalore "
          CityText=" :Ammrutha halli [560092], Maruthi Seva Nagar [560033], Kuvempu Layout [560077], Bellandur [560103], Jayanagar III Block [560011], Anandnagar [560024], Nandinilayout [560096], B SK II Stage [560070], Indiranagar [560038], Yelahanka [560063], Chickpet [560053], Domlur [560071], Bansashankari III Stage [560085], Vimanapura [560017], Nagarbhavi [560072], Basaveshwaranagar [560079], Bommanahalli [560068], Mico Layout [560076], Electronic City [560100], Taverekere [560029], Nehru Nagar [560020], Agram[560007], Halsuru Pete [560002], Basavanagudi [560004], R.M.V. Extension II [560094], Jayanagar [560041], Carmelaram [560035], New Thippasandra [560075], Kanakanagar [560032], Nayandahalli [560039], Fraser Town [560005], Jalahalli East [560014], Kacharakanahalli [560084], Malleswaram West [560055], Bannerghatta [560083], Srirampuram [560021], Rajarajeshwarinagar [560098], Sivan Chetty Gardens [560042], Dommasandra [562125], Whitefield [560066], Vidyaranyapura [560097], Bolare [560082], Mathikere [560054], Doddanekkundi [560037], Hampinnagar [560104], C.V.Raman Nagar [560093], Chikkabanavara [560090], Attur [560064], Kumbalagodu [560074], Bhattarahalli [560049], Chikkalasandra [560061], Sharada Nagar [560065], Jalahalli West [560015], H.K.P Road [560051], Jp Nagar III Phase [560078], Sadashiva nagar [560080], Krishnarajapuram R S [560016], Mahalakshipuram Layout [560086], Guddadahalli [560026], Chudenapura [560060], Vidhana Soudha [560001], Shanthinagar [560027], Rajaji Nagar [560010], Chandapura [560099], Ramakrishna Hegde Nagar [560045], Shalabh Bhatnagar [560012], Peenya [560058], Ashoknagar [560050], Jalahalli Nacen [560013], Banawadi [560043], Malleswaram [560003], Doddakallasandra [560062], K.G Road [560009], Muthusandra [560087], Marathahalli [560056], JC Nagar [560006], Chamrajpet [560018], HSR Layout [560102], Devanagundi [560067], Yeswanthpura [560022], Mahadevapura [560048],Hulsur Bazaar [560008],Magadi Road [560023], Adugodi [560030], Bagalgunte [560073], Devasandra [560036], Rv Niketan [560059], Narasimharaja Colony [560019], Koramangala VI Bk [560095], Agara [560034], Vijayanagar East [560040], Benson Town [560046], Viveknagar S.O [560047], Dasarahalli [560057], Bapagrama [560091], Richmond Town [560025]."
          CityTextLB="Locations Offered"
          CityTextL=" :Business Analytics Training in Bangalore, Business Analytics Course in Bangalore, Business Analytics Training in BTM, Business Analytics Training in Marathahalli, Business Analytics Institute in Bangalore, Business Analytics Training in Whitefield, Business Analytics Training in Kundalahalli, Business Analytics Training in ITPL, Business Analytics Training Institute in Marathahalli, Business Analytics Course in BTM, Business Analytics Course in Marathahalli, Business Analytics Course in Whitefield, Business Analytics Course Bommanahalli, Business Analytics Training in Bommanahalli, Business Analytics Training in Electronic city, Business Analytics Training in Koramangala, Business Analytics Classes in BTM, Business Analytics Classes in Bommanahalli, Business Analytics Classes in Whitefield, Business Analytics Classes in Marathahalli, Business Analytics Course in Koramangala, Business Analytics Training in Jayanagar, Business Analytics Certification in Bangalore, Business Analytics Certification Training in Bangalore, Business Analytics Certification in BTM, Business Analytics Certification in Whitefield, Best Business Analytics Training, Best Business Analytics Course"
        />
        <Footer />
      </main>
    </div>
  );
}
