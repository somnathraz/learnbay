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
import BottomBar from "../components/BottomBar/BottomBar";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNew/FAQNewcerelig";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  FullStackFaqDataHy,
  FullStackDomainFaqDataHy,
  FullStackPaymentFaqDataHy,
  FullStackCapstoneFaqDataHy,
  FullStackjobFaqDataHy,
  FullStackMentorshipFaqDataHy,
  FullStackSupportFaqDataHy,
  FullStackeligibleFaqDataHy,
  FullStackgenericFaqDataHy,
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
          Full Stack Developer Course in Hyderabad with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Most comprehensive Full Stack Software Development Training in Hyderabad, Covers Front-end, Back-end and Advanced DSA. Sign-up Today."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course training in Hyderabad, Full-Stack Software Developer Course institute in Hyderabad, best Full-Stack Software Developer Course institute in Hyderabad, data scientist course in Hyderabad,data scientist certification in Hyderabad, Full-Stack Software Developer Course training institute in Hyderabad, advanced Full-Stack Software Developer Course in Hyderabad, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-hyderabad"
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
          mTitle="Full Stack Software Developer Course in Hyderabad"
          // spanMTitleText="To Achieve Your Dream Job"
          title="Full Stack Software Developer Course in Hyderabad"
          // spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Hyderabad. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Hyderabad"
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
            alt="Full-Stack Software Developer Course In Hyderabad"
            title="Why Enroll In Full Stack Software Developer Course In Hyderabad?"
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
              ProgramHead1="The full-stack developer course by Learnbay in Hyderabad is for every tech enthusiast"
              ProgramBot1="who wants to become an expert software developer. Our full-stack software development course i  Hyderabad is with domain specialization so students can be experts in the specific domain before they approach the tough job market competition."
              ProgramBot2="Learnbay's full-stack developer course is custom developed by a flock of industry experts from top organizations. We train students with all the latest tools and skills that are important and trending in today's tech world."
              ProgramBot3="Our priority is to pull students out of outdated full-stack courses. Learnbay's full-stack software developer course in Hyderabad will turn candidates into front-end and back-end software development experts."
              ProgramHead4="What do learners get from Learnbay's Full Stack Software Developer course in Hyderabad?"
              ProgramBot5="Learnbay's full stack developer course in Hyderabad is trained and designed by 100+ expert developers with 8+ years of working experience. Enrolled students can ask clear all their doubts and queries in the 1:1 discussion or Q&A forum. Students get access to different training mentors for better understanding and 3 yrs of flexible LMS subscription."
              ProgramHead6="Sometimes, candidates find it difficult to pursue a software development course because of weak coding skills. In order to keep such aspirants on track, Learnbay offers special programming classes to the concerned students."
              ProgramBot6="We have a group of career counseling experts who analyze enrolled candidates' profiles on their academic results and achievements. So they can guide students to the best domain in full-stack development courses as per their profile."
              ProgramHead7="Why is Learnbay the best full-stack developer course in Hyderabad?"
              ProgramBot8="Our full stack developer course is an online live class conducted by the top full stack experts of lead organizations. The full-stack software developer course even includes hybrid classes. So, students can learn theories at home at their convenience and work on capstone projects in Hyderabad center's project innovation labs."
              ProgramHead14="Students can take part in webinars and hackathons on trending topics and tools."
              ProgramBot10="Students can get three years of flexible subscriptions to the enrolled courses. During this period, they can alter their batches and trainers as per their convenience. So, no need to leave your current job even if you get a university-like live learning facility.Students can get three years of flexible subscriptions to the enrolled courses. During this period, they can alter their batches and trainers as per their convenience. So, no need to leave your current job even if you get a university-like live learning facility."
              ProgramHead8="Learnbay full stack software course features are :"
              ProgramHead9="> Live online courses."
              ProgramHead10="> Real-world capstone project."
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="Learnbay full-stack developer course in Hyderabad is powered by five domain specializations. Currently, MNCs are looking for full-stack software developer experts with core domain knowledge. So we equip our students with domain-specific knowledge even before facing the harsh job market."
              DomainHead2="There are five domains in the full stack software developer course :"
              DomainHead3="a.  Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Our trainers are full-stack software developers from PRODUCT Based Companies/MNCs. They have been working for more than eight years in this industry. Learnbay has designed the course per Hyderabad's industry standards and organizational requirements. Infact they also customized their training strategies in case any learner needs overseas job market assistance."
              ModuleHead2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Learnbay's full-stack courses in Hyderabad include tools like String, Stack, array overview, binary research, Best, average, and worst case complexities hierarchy, Complexity classes (P vs NP problem), AVL tree, backtracking algorithm, recursion and graph, and many more trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="The Full stack software developer course by Learnbay helps students prepare to resume with all the skills and tools they have learned and re-skilled by Learnbay. We even have an entire team of professionals dedicated only to job referrals for our alumni. Based on the targeted company requirements, you get custom-fit mock interview sessions. Infact, at the very beginning of the course, you undergo expert career counseling to identify your best-fit learning path for landing a lucrative software developer career."
              ProjectsBot1="Learnbay's full-stack developer course includes real-world capstone projects via an offline project innovation lab in Hyderabad. Candidates get to work on real-world problems and gain experience with tools even before recruitment."
              ProjectsBot2="Capstone projects are critical as MNC's talent acquisition teams look for candidates who have worked on relevant real-world problems."
              ProjectsHead2="Full-stack software development projects example:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Most of the Alumni got a job within 3 to 4 months of course completion. 30% of learners got their offer letter even before ending the full-stack software development course. "
              AlumniHead1="Here are Our Alumni sharing their success and learning experience:"
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
              alt1="Full-Stack Software Developer Course training in Hyderabad"
              alt2="Full-Stack Software Developer Course training in Hyderabad"
              alt3="Full-Stack Software Developer Course training in Hyderabad"
              alt4="Full-Stack Software Developer Course training in Hyderabad"
              alt5="Full-Stack Software Developer Course training in Hyderabad"
              alt6="Full-Stack Software Developer Course training in Hyderabad"
              alt7="Full-Stack Software Developer Course training in Hyderabad"
              alt8="Full-Stack Software Developer Course training in Hyderabad"
              alt9="Full-Stack Software Developer Course training in Hyderabad"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataHy}
              DomainFaqDatas={FullStackDomainFaqDataHy}
              PaymentFaqDatas={FullStackPaymentFaqDataHy}
              CapstoneFaqDatas={FullStackCapstoneFaqDataHy}
              jobFaqDatas={FullStackjobFaqDataHy}
              CriteriaFaqDatas={FullStackeligibleFaqDataHy}
              MentorshipFaqDatas={FullStackMentorshipFaqDataHy}
              GenericFaqDatas={FullStackgenericFaqDataHy}
              SupportFaqDatas={FullStackSupportFaqDataHy}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Hyderabad "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Hyderabad City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Hyderabad,Best Full-Stack Software Developer Course in Hyderabad"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}
