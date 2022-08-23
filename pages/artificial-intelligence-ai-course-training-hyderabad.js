import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Navbar from "../components/Navbar/Navbar";
import Popup from "../components/Popup/Popup";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import {
  ArtificialFaqDataH,
  ArtificialDomainFaqDataH,
  ArtificialPaymentFaqDataH,
  ArtificialCapstoneFaqDataH,
  ArtificialCertificationFaqDataH,
  ArtificialjobFaqDataH,
  ArtificialMentorshipFaqDataH,
  ArtificialSupportFaqDataH,
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
          Artificial Intelligence Course in Hyderabad | Artificial Intelligence
          Training in Hyderabad
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Hyderabad. Learnbay is Advanced Artificial Intelligence Course Training Institute in Hyderabad. Artificial Intelligence course in Hyderabad will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Hyderabad, Artificial Intelligence training in Hyderabad, Artificial Intelligence institute in Hyderabad, best Artificial Intelligence institute in Hyderabad, Artificial Intelligence course in Hyderabad, Artificial Intelligence certification in Hyderabad, Artificial Intelligence training institute in Hyderabad, advanced Artificial Intelligence course in Hyderabad, Artificial Intelligence course with placement guarantee, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-Hyderabad"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
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
            <p>Fill the below details to get started</p>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection
          deskTopPara="Become an AI Expert in Product-based MNC"
          mTopPara="Become an AI Expert in Product-based MNC"
          mTitle="Artificial Intelligence(Ai) Course "
          spanMTitleText="Training In Hyderabad"
          title="Artificial Intelligence(Ai) Course"
          spanTitleText="Training In Hyderabad"
          desc="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course4.png"
          width="900"
          height="762"
          alt="AiMl Header"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Global Recognition"
            p11="From IBM"
            p2="Industry Standard"
            p22="Training"
            p3="Career Assistance"
            p33="For Professionals"
            p4="Financing as low as"
            p44="₹ 9,342/month"
          />
        </div>
        <GetHired
          WeekdayBatchDate="Global Recognition : Earn 6 micro-skill certificates by IBM"
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
            title="Why Enroll In This Program?"
            Box1h5="Custom-fit Training"
            box1desc="Learn with modules created just for your dream job. Become an extraordinarily demanding Leader and Manager."
            Box2h5="Domain Destined"
            box2desc="Obtain cutting-edge industrial leadership training in Data Science and AI fields. Choose from 12+ electives."
            Box3h5="Premium Mentoring"
            box3desc="Utilize the advantage of mock interviews and project handling training with MAANG Data Science Leads."
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
              ProgramHead1="What is Learnbay Artificial Intelligence(AI) Course Training in Hyderabad?"
              ProgramBot1="Learnbay is a very professional AI training center in Hyderabad. It provides industry-recognized artificial intelligence courses with the option to choose from a myriad of domain electives. This IBM artificial intelligence course stands out from the crowd because it combines advanced study packages with capstone projects. As a result, the curriculum in the modules is current and relevant to industry needs."
              ProgramBot2="Our mentors provide the greatest artificial intelligence training to students with the help of live MNC and capstone projects. Learnbay artificial intelligence courses with placement is a fantastic initiative that has helped many students get great jobs all over Hyderabad."
              ProgramBot3="Using a balanced combination of existing data science and artificial intelligence methodologies and industry-specific best practices, you'll learn how to apply AI to real-world business challenges through the Learnbay artificial intelligence course."
              ProgramBot31="Learnbay's major goal is to equip candidates in Hyderabad with high-quality data science and AI training. Artificial intelligence training will be delivered to you with domain-specific modules precisely crafted by industry specialists. They also offer blended learning sessions and live doubt clearing sessions. It is the greatest AI course for working professionals since the modules are affordable and flexible, with the option of 0% interest EMI. Overall, this IBM artificial intelligence course covers everything that a student looking for the best AI course training in Hyderabad would want to learn."
              ProgramHead4="The present Artificial Intelligence Courses available at Learnbay:"
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
              DomainBot1="Domain specialization concentrates your efforts on a single area of expertise to stand out from the crowded artificial intelligence job market. Furthermore, domain experience is essential to being a competent artificial intelligence professional. Artificial intelligence experts or application developers have a wide range of responsibilities. Thus they must have extensive knowledge of particular business operations in order to provide the most profitable artificial intelligence-powered solution. To land your dream career, you should take domain-specific AI courses."
              DomainBot3="The domain electives for students at Learnbay:"
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
              CertificationBot1="Upon completing a course in artificial intelligence with placement from Learnbay, you will receive IBM certifications. Depending on your course, you will obtain one to eight certificates. Furthermore, upon completing capstone projects, you will receive an IBM project experience certificate."
              CertificationBot2="By partnering with IBM and a series of MNCs as well as startups, Learnbay has attained a significant milestone. Having this IBM certification on your resume will surely help you land a high-paying artificial intelligence job at one of the world's renowned corporations. Over 10,000 students have finished our Artificial Intelligence course, allowing them to pursue rewarding AI and machine learning professions across Hyderabad."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleBot1="At Learnbay, we're committed to providing the highest-quality modules to prospective students. As a result, we've created different IBM artificial intelligence courses to keep up with the market's ever-changing needs. Our artificial intelligence training courses in Hyderabad come with variable learning modules based on the aspirant’s current career stages, earlier educational ground, and future career goals. The most advanced ML and AI certification courses for tech professionals consist of 400 hours long modules, whereas our Foundation and Advanced Data Science and AI courses are 200+ hours long. All include live interactive sessions. Students can attend many sessions with different teachers during the training in all of our courses. Learnbay also offers a 1 to 3-year Flexi membership that allows students to learn at their own pace."
              ModuleBot2="Each of our modules is dedicated to the domains you have chosen. It includes the most popular AI tools, advanced probability, Numpy, Pandas, Matploitlip, Deep Learning, and MongoDB, among other tools and techniques."
              ModuleBot3="The course module also designed an additional 6-8 hours of basic programming sessions for non-technical students."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
              JobBot1="Learnbay's career consultants will assist you in developing your CV and portfolio. Learnbay also refers your resume and portfolio to other companies. Learbay guarantees top-tier companies in Hyderabad will interview you. You'll also get exposure to mock interviews that make you prepare for difficult real-life interviews."
              JobBot2="If you do not get hired within six months of finishing the course, the Job or Money-Back Guarantee program ensures that you will receive a complete return of your AI course fees."
              JobHead2="Why Is  Artificial Intelligence a promising career in Hyderabad?"
              JobBot3="Artificial Intelligence is a broad term that refers to the process of having machines and computers act like humans without requiring human interaction. As a result of the ongoing expansion of this field's knowledge base, it is becoming a popular career choice. Many IT organizations are built on the foundation of Artificial intelligence and machine learning. A massive global phenomenon is poised to take over a variety of industries. As a result, the need for artificial intelligence expertise has skyrocketed. In Hyderabad and across India, the next several years will be fruitful for AI experts."
              JobBot4="AI engineer, Machine Learning Engineer, Robotics Engineer, and a variety of additional roles are all available in the field of Artificial Intelligence."
              ProjectsBot1="Learnbay always encourages students to work with their creativity and understanding on projects and assignments. Completing projects and capstones would add a star to your profile as you have worked on live projects from the top reputed companies and the best startups. You can complete 1 to 3 capstone artificial intelligence projects (as per course). All of them are fresh and trending. This project helps you to solve business problems suffered by your domain."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/mainhttps://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay’s Artificial Intelligence training in Bangalore guarantees jobs for students and has emplaced thousands of students in the top companies and MNCs all over Bangalore. We have a few stories who have worked hard and have gained success by Learning the Artificial intelligence course at Learnbay. "
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/mainhttps://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
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
              FaqDatas={ArtificialFaqDataH}
              DomainFaqDatas={ArtificialDomainFaqDataH}
              PaymentFaqDatas={ArtificialPaymentFaqDataH}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataH}
              CertificationFaqDatas={ArtificialCertificationFaqDataH}
              jobFaqDatas={ArtificialjobFaqDataH}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataH}
              SupportFaqDatas={ArtificialSupportFaqDataH}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Artificial Intelligence Course Certification Training locations in Hyderabad"
          CityText=" : Medipalli[500098], A.G.College [500030], HMT Township [500054], Hal Hyderabad [500042], Kondapur [500084], Fatehdarwaza [500065], Begumpet [500016], Lingampalli [500019], Kattedan Ie [500077], Falaknuma [500053], Peerzadiguda [500039], Jillellaguda [500079], I.M.Colony [500082], Gajularamaram [500055], Banjara Hills [500034], Gachibowli [500032], Badangpet [500058], Film Nagar [500096], A.Gs. Staff Quarters [500045], Malakpet Colony [500036], Balanagar Township [500037], Amberpet [500013], Bharat Nagar Colony [500018], Chitkul [502307], Don Bosco Nagar [500086], Gsisr Bandlaguda [500068], Yakutpura [500023], Chaithanyapuri Colony [500060], Chandanagar [500050], Appa Himayathsagar [500008], Hyderabad Jubilee [500002], Meerpet [500097], Humayunnagar [500028], Aie Bollaram [502325], Chetlapotharam [502319], Srinagar Colony [500073], Gandhi Bhawan Hyderabad [500001], Darushifa [500024], Gandhinagar Hyderabad [500080], Sarada Nagar [500070], Barkatpura [500027], Gagan Mahal [500029], Elmela [502300], Sanjeev Reddy Nagar [500038], Manikonda [500089], Cyberabad [500081], Boduppal [500092], Dr.B R Ambedkar O.U [500033], Kphb Colony [500072], Huda Residential Complex [500035], Miyapur [500049], L B Nagar [500074], Ashoknagar Hyderabad [500020], Saidabad Colony [500059], Jntu Kukat Pally [500085], Bowenpally [500011], Icrisat [502324], Administrative Buildings [500007], Aziz Nagar [500075], Afzalgunj [500012], Karwan Sahu [500006],Gaganpahad [500052], Ibrahim Bagh Lines [500031], Putlibowli [500095], Bahadurpura [500064], A.Gs Office [500004], Bachupally [500090], A.I.E. R.C.Puram [502032], Ambernagar [500044]."
          CityTextLB="Locations Offered"
          CityTextL=" :Artificial Intelligence Course Certification Training locations in Hyderabad , Artificial Intelligence Course in Hyderabad, Artificial Intelligence Course in Gachibowli, Business Analytics Training in Gachibowli,Artificial Intelligence Course in Madhapur, Business Analytics Training in Madhapur, Business Analytics Training Institute in Hyderabad, Artificial Intelligence Course in Kondapur, Business Analytics Training in Kondapur, Artificial Intelligence Course in Begumpet, Artificial Intelligence Course in Lingampalli, Artificial Intelligence Course in Banjara hills, Artificial Intelligence Course in L B Nagar, Artificial Intelligence Course in Boduppal, Artificial Intelligence Course in Kphb Colony, Business Analytics Training in Begumpet, Business Analytics Training in Lingampalli, Business Analytics Training in Banjara hills, Business Analytics Training in L B Nagar, Business Analytics Training in Boduppal, Business Analytics Training in KPhb Colony, Business Analytics Classroom Training in Hyderabad, Business Analytics Training near me, Artificial Intelligence Course near me, Business Analytics Institute near me, Business Scientist Course, Artificial Intelligence Course Certification Training, Artificial Intelligence Course Certification Training in Hyderabad, Best Artificial Intelligence Course, Best Business Analytics Training"
        />
      </main>
    </div>
  );
}
