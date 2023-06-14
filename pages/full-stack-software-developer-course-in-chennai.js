import Head from "next/head";
import styles from "../styles/Home.module.css";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import GetHired from "../components/CoursePage/GetHired/GetHired";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import Popup from "../components/Popup/Popup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNew/FAQNewcerelig";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  FullStackFaqDataC,
  FullStackDomainFaqDataC,
  FullStackPaymentFaqDataC,
  FullStackCapstoneFaqDataC,
  FullStackjobFaqDataC,
  FullStackMentorshipFaqDataC,
  FullStackSupportFaqDataC,
  FullStackeligibleFaqDataC,
  FullStackgenericFaqDataC,
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
           Full Stack Developer Course In Chennai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Looking for Best Full Stack Training Program in Chennai? Become A Skilled Full Stack Developer with Learnbay's Advance Full Stack Curriculum Modules with Best Career Assistance."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course training in Chennai, Full-Stack Software Developer Course institute in Chennai, best Full-Stack Software Developer Course institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, Full-Stack Software Developer Course training institute in Chennai, advanced Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-chennai"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} fullStack={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} fullStack={true} />
          </div>
        </Popup>
        <FirstSection
          fullStack={true}
          deskTopPara=""
          mTopPara=""
          mTitle="Full Stack Software Developer Course in Chennai"
          // spanMTitleText="To Achieve Your Dream Job"
          title="Full Stack Software Developer Course in Chennai"
          // spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Chennai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Chennai"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Premium Job"
            p11="Placement Support"
            p2="Job Advancement"
            p22="Skills"
            p3="Practice with"
            p33="Real-Time Projects"
            p4="Financing as low as"
            p44="₹ 10,816/month"
          />
        </div>
        <ProgramFee Fee="₹ 1,10,000 + 18% GST" Emi="₹10,816" fullStack={true} />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="Full-Stack Software Developer Course In Chennai"
            title="Why Enroll In Full Stack Software Developer Course In Chennai?"
            Box1h5="Crack Interviews at MNC's"
            box1desc="Learn in-depth DSA and crack interviews in product-based MNCs"
            Box2h5="1:1 Mentorship"
            box2desc="Guided by mentors working in MNCs to support you for the tech interviews"
            Box3h5="Practical Project Experience"
            box3desc="Gain technical expertise by working on challenging real-world projects"
            Box4h5="Domain Specialization"
            box4desc="Choose Domain electives on your work experience and work on Live Projects"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft fullStackCity={true} />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              ProgramBot1="The full-stack developer course at Learnbay in Chennai is for tech aspirants who want to become expert full-stack software developers. Our Full-stack developer course includes different domains for students to get expertise in a specific domain."
              ProgramBot2="Learnbay's full-stack software developer course is designed by industrial experts in different domains. Learners can stand out from other candidates by learning the latest skills required in the present tech world through Learnbay."
              ProgramBot3="Our motto is to help students find their way out of the haystacks of outdated courses. Learnbay's full-stack developer course in Chennai will enable you to grow as an expert front-end and back-end software developer in Chennai."
              ProgramHead4="What do learners get from Learnbay's Full Stack Developer course in Chennai?"
              ProgramBot4="Industrial experts of Chennai are the instructors of Learnbay's 360° full stack software developer course concerning the organizational norms of Chennai. Students can clear all their doubts and queries in the Q&A forum. 1:1 discussion is also available until all their doubts are clarified. Get access and switch between batches to learn from the trainer that you like."
              ProgramHead5="Our full-stack software developer course in Chennai has special classes for week programming to drag them on track."
              ProgramBot5="Our career counseling experts analyze enrolled candidates' profiles. Our career experts analyze student profiles and other academic achievements suggesting to you the best domain for your full-stack developer courses."
              ProgramHead6="How has Learnbay become a superior option as a job-ready full-stack software development course in Chennai?"
              ProgramBot6="Learnbay full-stack developer courses have live online classes conducted by top full-stack experts of leading industries. Our full-stack developer courses include hybrid classes. So students can learn theoretical aspects of learning in online live classes, but for project work, they can choose the offline mode. They can choose the project innovation lab available in Chennai at their convenience."
              ProgramHead7="In fact, we arrange real-world business problem-solving hackathons and trending topic-based webinars."
              ProgramBot8="Students get the freedom to learn at their own pace and convenience. Our full stack developer online course in Chennai gives students three years of flexible subscription for completing a full stack software development course."
              ProgramHead8="Learnbay full stack software developer course features are :"
              ProgramHead9="> Live online courses"
              ProgramHead10="> Real-time capstone project"
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="Learnbay offers a 360° full-stack developer software course in Chennai with domain specialization. The present tech world gives a lot of value to domain-specific knowledge. We pre-equip students with domain-specific knowledge before their recruitment or course completion. We ensure our students turn into professional full-stack developers and achieve the best of their deserved scopes in and around Chennai, as well as around the world."
              DomainHead2="There are five domains in the full stack software developer course :"
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Our trainers are expert full-stack developers holding 8+ years of industrial experience in different top-notch MNCs. Learnbay full stack developer experts have curated the course as per Chennai's organizational requirements."
              ModuleHead2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Learnbay Full-stack software development course in Chennai covers String, Stack, array overview, binary research, Best, average, and worst case complexities hierarchy, Complexity classes (P vs. NP problem), AVL tree, backtracking algorithm, recursion and graph, and many more trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="Our Full-stack developer course in Chennai assists students in building and upgrading their resumes with all the tools and domain knowledge you honed after completing our full-stack software developer course in Chennai. Our student's dedicated team even refers to jobs of top organizations and MNCs."
              ProjectsBot1="A full stack developer course in Chennai from Learnbay includes a real-time capstone project. Students get to experience and work with real-world problems. This increases the demand for Learnbay alumni in the present job market."
              ProjectsBot2="A Capstone project is essential to your resume. Our full stack developer course in Chennai has a project innovation lab for students to work on projects under the direct guidance of industry leads."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Till now, we have reshaped 1000+careers via Learnbay's full-stack development course online. Most of our alumni got recruited within three months after completing the course, and others in the following cycling months."
              AlumniHead1="Our Alumni sharing their success and learning experiences:"
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/akanksha.jpg"
              AlumniH1="Neha Gour"
              Alumnip1="Have taken S/W Development course at this institute. Irrespective of implementation languages, one can join this. Cleared many tough concepts in an easy way. I was trying to switch to product based MNC and this course just made it possible."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/rahul.jpg"
              AlumniH2="Rahul Anand"
              Alumnip2="Excellent training and awesome environment! I took data structures and algorithm training in LearnBay . They teach concepts clearly and solved as many programs as possible. I was getting interview calls even before course completion."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/kamlesh.jpg"
              AlumniH3="Kamlesh Sahu"
              Alumnip3="This Course Helped me in getting 6 month SDE INTERNSHIP at AMAZON,India. The advance DSA topics are taught and explained in such a simplified manner that even a newbie can catch up very easily."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Ashutosh.jpg"
              AlumniH4="Ashutosh Chamoli"
              Alumnip4="I have done the DS & Algo course from Learnbay. I learned from the basics time complexity, arrays, linked list, stack to advance data structures – trees, graphs etc. Getting into product based MNC was always my dream and this course helped me achieve it ."
              alt1="Full-Stack Software Developer Course training in Chennai"
              alt2="Full-Stack Software Developer Course training in Chennai"
              alt3="Full-Stack Software Developer Course training in Chennai"
              alt4="Full-Stack Software Developer Course training in Chennai"
              alt5="Full-Stack Software Developer Course training in Chennai"
              alt6="Full-Stack Software Developer Course training in Chennai"
              alt7="Full-Stack Software Developer Course training in Chennai"
              alt8="Full-Stack Software Developer Course training in Chennai"
              alt9="Full-Stack Software Developer Course training in Chennai"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataC}
              DomainFaqDatas={FullStackDomainFaqDataC}
              PaymentFaqDatas={FullStackPaymentFaqDataC}
              CapstoneFaqDatas={FullStackCapstoneFaqDataC}
              jobFaqDatas={FullStackjobFaqDataC}
              CriteriaFaqDatas={FullStackeligibleFaqDataC}
              MentorshipFaqDatas={FullStackMentorshipFaqDataC}
              GenericFaqDatas={FullStackgenericFaqDataC}
              SupportFaqDatas={FullStackSupportFaqDataC}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Chennai "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Chennai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Chennai,Best Full-Stack Software Developer Course in Chennai"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
