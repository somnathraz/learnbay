import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  ArtificialFaqDataDu,
  ArtificialDomainFaqDataDu,
  ArtificialPaymentFaqDataDu,
  ArtificialCapstoneFaqDataDu,
  ArtificialCertificationFaqDataDu,
  ArtificialjobFaqDataDu,
  ArtificialMentorshipFaqDataDu,
  ArtificialSupportFaqDataDu,
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
          Artificial Intelligence Course in Dubai | Artificial Intelligence
          Training in Dubai
        </title>
        <meta
          name="description"
          content="Artificial Intelligence Course in Dubai. Learnbay is Advanced Artificial Intelligence Course Training Institute in Dubai. Artificial Intelligence course in Dubai will enhance your career"
        />
        <meta
          name="Keywords"
          content="Artificial Intelligence course in Dubai, Artificial Intelligence training in Dubai, Artificial Intelligence institute in Dubai, best Artificial Intelligence institute in Dubai, Artificial Intelligence course in Dubai, Artificial Intelligence certification in Dubai, Artificial Intelligence training institute in Dubai, advanced Artificial Intelligence course in Dubai, Artificial Intelligence course with placement guarantee, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-dubai"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Dubai"
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
          deskTopPara="Job-oriented Data Science Training for working professionals"
          mTopPara="Job-oriented Data Science Training for working professionals"
          title="Artificial Intelligence (AI) course training in Dubai"
          mTitle="Artificial Intelligence (AI) course training in Dubai"
          spanTitleText=" For Managers and Leaders"
          spanMTitleText=" For Managers and Leaders"
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
              ProgramBot1="As a leading and progressive institution, Learnbay provides the most advanced and modernized Artificial intelligence course training in Dubai. Our instructors use the best teaching methods with a wide range of domain electives that students may find beneficial in the future in a variety of fields. They are committed to students’ growth and advancement of their careers. The artificial intelligence course in Dubai is a perfect option for working professionals and individuals interested in learning more about AI and how it functions in various businesses and industries. These courses offer an average salary hike of 97%. Even it sometimes reaches to 400%-450% range."
              ProgramHead3="How does Learnbay become the ideal place for you?"
              ProgramBot3="Learnbay provides custom-fit artificial intelligence training for Dubai Aspirants. Our artificial intelligence certification courses are affordable and have the option of flexibility in choosing mentors and batches. Here, the trainers explain each concept very clearly as well as share their professional experiences during live interactive classes. Additionally, they are also available to clear students' doubts."
              ProgramBot31="Our IBM artificial intelligence courses deliver the cutting-edge theoretical and practical aspects of AI implementation. Students are kept up-to-date with the current job market by using the latest AI technologies and modules."
              ProgramBot32="Learnbay even supports learners coming from non-IT backgrounds by arranging additional programming classes. They also host a variety of webinars and hackathons to help pupils learn efficiently."
              ProgramBot4="Additionally, you can even get a guarantee of job placement or money-back assurance in specific artificial intelligence certification programs."
              ProgramBot5="Available Artificial Intelligence Certification Courses by Learnbay in Dubai:"
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
              DomainBot1="Mastering artificial intelligence tools and techniques is not the only thing you need to be successful in this field. It is recommended that learners specialize in a certain area of expertise or Domain before applying for  AI or ML jobs. Besides, domain knowledge helps us achieve a high level of precision and accuracy. Domain specialization not only helps in salary boost but also enables you to handle job duties more efficiently. In one world, domain specialization makes your data science career more sustainable in the real sense."
              DomainBot2="That’s why we have offered different domain electives for our AI courses."
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
              CertificationHead1="Learnbay has achieved a remarkable breakthrough by partnering with IBM."
              CertificationBot1="The artificial intelligence course in Dubai provides students with a course completion IBM certificate. Apart from that, as you proceed through the modules, you will be issued extra IBM certificates for completing multiple Micro AI skills such as ML with Python, Deep Learning fundamentals, and so forth. Lastly, once you complete the capstone project, you will get an IBM project experience certification."
              CertificationBot2="As per your selected course, you will get around 1 to 8  certificates - all issued by IBM. This credential on your CV will make you a leap ahead of other applicants."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Managers-4.jpeg"
              ModuleBot1="Learnbay strives to provide the best Artificial Intelligence training possible for all AI enthusiasts in Dubai. Learnbay's artificial intelligence course comprises 400+ hours of interactive classes led by MAANG experts. On the other hand, The foundational and advanced data science and AI also consists of 200+ hours of sessions. Each of our modules is completely focused on the chosen fields. The IBM artificial intelligence course covers the most popular AI and ML tools and concepts as well as advanced probability and Numpy, Deep Learning, and MongoDB."
              ModuleBot2="With a Flexi pass, students can attend multiple classes in different batches with different instructors to learn at their convenience. "
              ModuleBot3="In addition to this, Learnbay has incorporated a dedicated programming module for All of its data science and AI courses which includes 6 to 8 hours of python and R programming training for non-technical folks."
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
              JobHead1="Job support program of artificial intelligence course:"
              JobBot1="Learnbay has a channel of 250+ hiring partners in Dubai and all over the world. It has helped countless AI and ML enthusiasts crack difficult interviews with our job assistance feature. This assistance includes portfolio building and soft skills training workshops. Our placement experts help them in finding the relevant AI job roles and prepare them accordingly. They also conduct personalized mock interviews as per the candidate's screening process of top MNCs and Dubai-based companies."
              JobBot2="If you are not placed within 6 months of course completion, you may request a refund of your AI course fee under Learnbay's job guarantee or money back program."
              JobHead2="Future of AI in Dubai"
              JobBot3="Dubai is known to be a smart city in every sense. It has increased its focus on the adoption of advanced technologies like AI and data science for the development of its society. In Dubai, AI has evolved vastly in the past few years with practical applications in real-world scenarios. With such a heavy emphasis on AI technologies, AI career opportunities in Dubai are also expanding rapidly. In the coming years, Artificial Intelligence, Robotics, and ML are projected to be the most in-demand specializations in the technology sector in Dubai."
              JobBot4="The most in-demand jobs over the next five years require some sort of AI knowledge."
              JobBot5="Learnbay’s artificial intelligence certification will make you learn job-ready skills to land a lucrative aI position in prominent firms in Dubai."
              ProjectsHead1="Real-world live artificial intelligence Projects"
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
              FaqDatas={ArtificialFaqDataDu}
              DomainFaqDatas={ArtificialDomainFaqDataDu}
              PaymentFaqDatas={ArtificialPaymentFaqDataDu}
              CapstoneFaqDatas={ArtificialCapstoneFaqDataDu}
              CertificationFaqDatas={ArtificialCertificationFaqDataDu}
              jobFaqDatas={ArtificialjobFaqDataDu}
              MentorshipFaqDatas={ArtificialMentorshipFaqDataDu}
              SupportFaqDatas={ArtificialSupportFaqDataDu}
            />
          </div>
        </div>
        <LearnSupport />
      </main>
    </div>
  );
}
