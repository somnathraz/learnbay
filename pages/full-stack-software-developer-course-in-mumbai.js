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
  FullStackFaqDataM,
  FullStackDomainFaqDataM,
  FullStackPaymentFaqDataM,
  FullStackCapstoneFaqDataM,
  FullStackjobFaqDataM,
  FullStackMentorshipFaqDataM,
  FullStackSupportFaqDataM,
  FullStackeligibleFaqDataM,
  FullStackgenericFaqDataM,
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
          Full-Stack Software Developer Course in Mumbai | Full-Stack Software Developer Course Training in Mumbai
        </title>
        <meta
          name="description"
          content="Full-Stack Software Developer Course in Mumbai. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Mumbai. Full-Stack Software Developer Course in Mumbai will enhance your career"
        />
        <meta
          name="Keywords"
          content="Full-Stack Software Developer Course in Mumbai, Full-Stack Software Developer Course training in Mumbai, Full-Stack Software Developer Course institute in Mumbai, best Full-Stack Software Developer Course institute in Mumbai, data scientist course in Mumbai,data scientist certification in Mumbai, Full-Stack Software Developer Course training institute in Mumbai, advanced Full-Stack Software Developer Course in Mumbai, Full-Stack Software Developer Course with placement guarantee, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
        />

        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} fullStack={true} />

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
        <FirstSection fullStack={true}
          deskTopPara="Ace Your Coding Interview at MAANG"
          mTopPara="Ace Your Coding Interview at MAANG"
          mTitle="Full-Stack Software Developer Course In Mumbai"
          spanMTitleText="& Achieve Your Dream Job"
          title="Full-Stack Software Developer Course In Mumbai"
          spanTitleText="& Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Mumbai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course9.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Mumbai"
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
        <ProgramFee Fee="₹ 1,10,000 + GST" Emi="₹10,816" fullStack={true} />
        <div className="Feature" id="Feature">
          <BoxShape
          alt="Full-Stack Software Developer Course In Mumbai"
          title="Why Enroll In Full Stack Software Developer Course In Mumbai?"
            Box1h5="Crack MAANG Interview"
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
            <CitiesLeft fullStackCity={true}/>
          </div>
          <div className="CitiesRight">
            <CitiesRight fullStackCity={true}
              ProgramBot1="Become a successful full-stack developer by enrolling in Learnbay's full-stack developer course in Mumbai. Learnbay’s online full stack software developer course has a different domain for students to excel in a specified niche."
              ProgramBot2="Learnbay’s full stack developer training in Mumbai is crafted by industrial full stack software developer experts of different domains. Students can transform into professional front-end and back-end full-stack software developer course in Mumbai from Learnbay."
              ProgramBot3="Our main motive is to help students not to get stuck in a haystack of outdated modules of complete stack software courses. Learnbay’s full stack software developer course will help you evolve as an expert full stack developer."
              ProgramHead4="What do learners get from Learnbay's Full Stack Developer course in Mumbai?"
              ProgramBot4="Learnbay’s 360° full stack developer course is created according to Pune's industrial and organizational norms. Students can clear all their doubts and queries in 1:1"
              ProgramBot5="Q&A forum via call or online meeting. Our dedicated full-stack software developer experts (trainers) will attend until all your queries and doubts are completely cleared."
              ProgramHead6="We conduct basic coding classes for professionals having non-tech professional experience, so they easily catch their coding expert classmates."
              ProgramBot6="Our career counseling experts analyze candidates' profiles and academic achievements and suggest to students what to focus on within our full-stack software developer course in Mumbai."
              ProgramHead7="Why is Learnbay the best full-stack software developer course in Mumbai?"
              ProgramBot8="In Mumbai, Learnbay’s software development training comprises live online classes conducted by top full-stack experts of leading industries. Our full-stack developer courses include hybrid classes so students can learn theoretical aspects of learning in online live sessions and work on their capstone projects in a collaborative manner at offline project innovation labs available in Mumbai."
              ProgramHead14="Not just this, Learnbay even conducts hackathons and webinars on today's tech world trending topics."
              ProgramBot10="Students can learn at their convenience and pace. Learnbay's full stack software training in Mumbai allows students to pause and continue learning within three years after enrolling."
              ProgramHead8="Learnbay full stack software developer course features are :"
              ProgramHead9="> Live online courses."
              ProgramHead10="> Real-world capstone project."
              ProgramHead11="> Domain specialization."
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions."
              ProgramHead13="> Offline project innovation labs for better learning."

              DomainBot1="Learnbay is one of the very few organizations providing full-stack software developer courses with domain specialization in Mumbai. We know that today's tech-world organizations demand domain-specific knowledge. So, we equip all our students with domain-specific training. We guide our students to achieve their dream of transforming into a lucrative full-stack software developer career."
              DomainHead2="There are five domains in the full stack software developer course :"
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"

              ModuleBot1="Our trainers are industrial full-stack software developer experts who design and develop the courses as per the current industrial needs and norms."
              ModuleHead2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Learnbay Full-stack developer course covers String, Stack, array overview, binary research, Best, average, and worst case complexities hierarchy, Complexity classes (P vs NP problem), AVL tree, backtracking algorithm, recursion and graph, and many more trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"

              JobHead1="'mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="A full-stack software developer course in Mumbai by Learnbay helps students with resume building, describing all the skills and tools you have expertise from availing our courses. We not only work with students until the course completion, but our experts even help our alumni after the course completion with resume building and job referrals to top organizations and MNCs."
              
              ProjectsBot1="Our Full-stack software developer projects in Mumbai are real-world capstone projects for learning about real-world tech problems and finding a solution for them. We have special hybrid classes for project completion powered by an offline project innovation lab.Our Full-stack software developer projects in Mumbai are real-world capstone projects for learning about real-world tech problems and finding a solution for them. We have special hybrid classes for project completion powered by an offline project innovation lab."
              ProjectsHead2="Learnbay project innovation labs for Full-stack software development projects. Examples are:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="We have transited more than 1000+ careers of our alumni to land top-notch lucrative jobs. Around 80% of our alumni who have completed our full stack developer course got emplaced within three months and others in the following months."
              AlumniHead1="Our Alumni sharing their success and learning experiences:"
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/akanksha.jpg"
              AlumniH1="Akanksha Achanti"
              Alumnip1="Before joining the DSA course I wasn’t confident on any of the topics. I can see the change in my coding abilities after the completion of the course! I even got referrals to product-based companies."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/rahul.jpg"
              AlumniH2="Rahul Anand"
              Alumnip2="Excellent training and awesome environment! I took data structures and algorithm training in LearnBay . They teach concepts clearly and solved as many programs as possible. I was getting interview calls even before course completion."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/kamlesh.jpg"
              AlumniH3="Kamlesh Sahu"
              Alumnip3="This Course Helped me in getting 6 month SDE INTERNSHIP at AMAZON,India. The advance DSA topics are taught and explained in such a simplified manner that even a newbie can catch up very easily."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Ashutosh.jpg"
              AlumniH4="Ashutosh Chamoli"
              Alumnip4="I have done the DS & Algo course from Learnbay. I learned from the basics time complexity, arrays, linked list, stack to advance data structures – trees, graphs etc. Getting into product based MNC was always my dream and this course helped me achieve it ."
              alt1="Full-Stack Software Developer Course training in Mumbai"
              alt2="Full-Stack Software Developer Course training in Mumbai"
              alt3="Full-Stack Software Developer Course training in Mumbai"
              alt4="Full-Stack Software Developer Course training in Mumbai"
              alt5="Full-Stack Software Developer Course training in Mumbai"
              alt6="Full-Stack Software Developer Course training in Mumbai"
              alt7="Full-Stack Software Developer Course training in Mumbai"
              alt8="Full-Stack Software Developer Course training in Mumbai"
              alt9="Full-Stack Software Developer Course training in Mumbai"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataM}
              DomainFaqDatas={FullStackDomainFaqDataM}
              PaymentFaqDatas={FullStackPaymentFaqDataM}
              CapstoneFaqDatas={FullStackCapstoneFaqDataM}
              jobFaqDatas={FullStackjobFaqDataM}
              CriteriaFaqDatas={FullStackeligibleFaqDataM}
              MentorshipFaqDatas={FullStackMentorshipFaqDataM}
              GenericFaqDatas={FullStackgenericFaqDataM}
              SupportFaqDatas={FullStackSupportFaqDataM}
            />
          </div>
        </div>
                <LearnSupport />

        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Mumbai "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Mumbai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Mumbai,Best Full-Stack Software Developer Course in Mumbai"
        />
               
        <OfferPopup offer={false} />                      
        <Footer />
      </main>
    </div>
  );
}
