import Head from "next/head";
import React, { useState } from "react";
import BottomBar from "../components/BottomBar/BottomBar";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import CityText from "../components/CityComponent/CityText/CityText";
import BoxShape from "../components/CoursePage/Boxshape/BoxShape";
import FirstSection from "../components/CoursePage/HeroSection/HeroSection";
import { ProgramFee } from "../components/CoursePage/ProgramFee/ProgramFee";
import ProgramInfo from "../components/CoursePage/ProgramInfo/ProgramInfo";
import {
  FullStackCapstoneFaqDataB,
  FullStackDomainFaqDataB,
  FullStackFaqDataB,
  FullStackMentorshipFaqDataB,
  FullStackPaymentFaqDataB,
  FullStackSupportFaqDataB,
  FullStackeligibleFaqDataB,
  FullStackgenericFaqDataB,
  FullStackjobFaqDataB,
} from "../components/FAQ/FaqDataCity";
import FAQNew from "../components/FAQNew/FAQNewcerelig";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import Navbar from "../components/Navbar/Navbar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import Popup from "../components/Popup/Popup";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Developer Course in Bangalore - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Want to become a skilled Web Developer? Enroll Now - Learnbay's Most Extensive Full Stack Web Developer Course in Bangalore."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Bangalore, Full-Stack Software Developer Course training in Bangalore, Full-Stack Software Developer Course institute in Bangalore, best Full-Stack Software Developer Course institute in Bangalore, data scientist course in Bangalore,data scientist certification in Bangalore, Full-Stack Software Developer Course training institute in Bangalore, advanced Full-Stack Software Developer Course in Bangalore, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/bangalore/full-stack-software-developer-course-in-bangalore"
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
          deskTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          mTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          mTitle="Full-Stack Software Developer Course In Bangalore"
          spanMTitleText="To Achieve Your Dream Job"
          title="Full-Stack Software Developer Course In Bangalore"
          spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Bangalore. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Bangalore"
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
            p44="₹ 11,308/month"
          />
        </div>
        <ProgramFee Fee="₹ 1,15,000 + 18% GST" Emi="₹11,308" fullStack={true} />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="Full-Stack Software Developer Course In Bangalore"
            title="Why Enroll In Full Stack Software Developer Course In Bangalore?"
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
              ProgramBot1="Excel as a full-stack developer course at the Silicon Valley of India, Bangalore. Learnbay offers a full-fledged, full stack-software developer course for tech professionals and enthusiasts with domain specialization."
              ProgramBot2="Learnbay's full-stack software developer course in Bangalore consists of online live professional training designed and curated by 100+ industry experts in full-stack developers."
              ProgramBot3="Once you complete your full stack development course from Learnbay in Bangalore, you can claim yourself as an expert front-end and back-end software development expert."
              ProgramHead3="What do learners get from Learnbay's Full Stack Developer course in Bangalore?"
              ProgramHead4="Basic coding classes for non-tech professionals."
              ProgramBot4="Industrial experts of Bangalore are the architect of Learnbay's job-ready full stack software developer course according to the organizational norms of Bangalore. We have a Q&A forum for students to clear all their doubts. Above that, our instructor conducts one-to-one sessions for every student to solve all their queries."
              ProgramHead5="Expert Career counseling."
              ProgramBot5="Learnbay's career counseling experts analyze candidates' profiles on academic achievement and work experience. So they can guide students to the best domain that will be ideal for their profile. "
              ProgramHead6="Why Learnbay seems the best full-stack developer course provider in Bangalore?"
              ProgramBot6="Learnbay's full-stack developer course even has a hybrid learning option in Bangalore. Students can learn all the theoretical topics via live online classes. For real-time project work, they can available the project innovation lab facilities available across Bangalore."
              ProgramBot7="Students can learn with their freedom by choosing their batch, either a weekend or a weekday batch, learn, pause and continue to re-learn with three years of flexible LMS access for the full-stack developer course in Bangalore."
              ProgramHead8="Learnbay full stack software developer course features are :"
              ProgramHead9="> Live online courses"
              ProgramHead10="> Real-world capstone project"
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="Currently, top organizations look for candidates with domain knowledge. So, our full-stack software development course in Bangalore offers domain specialization for students to be experts in their specific domain. Based on prior experience, learners can choose their desired specialization."
              DomainHead2="There are five elite domains in the Full-stack developer course :"
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Learnbay trainers are professional full-stack developers who have designed full-stack course curricula as per Bangalore's needs and organizational requirements."
              ModuleHead2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Our Full-stack developer course in Bangalore covers topics like String, Stack, array overview, binary research, Best, average, and worst case complexities hierarchy, Complexity classes (P vs. NP problem), AVL tree, backtracking algorithm, recursion and graph, and many more trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'mock interview sessions, preparing Learnbay alumni 	for their dream interviews.'"
              JobBot1="Our full-stack developer course even includes the resume building of candidates."
              JobBot2="Our dedicated team helps you get hired through job referrals from a top organization and MNC. So, our alumni can get the career start or the break they dreamed of. We have 250+ hiring partners."
              ProjectsBot1="Full-stack software developer training in Bangalore involves a real-time capstone project. Students get to learn with real-world examples."
              ProjectsBot2="Capstone projects are the key factor of your resume. In our full stack developer course at Bangalore, we have our project innovation lab for our students to complete the capstone project. You can even bring your own project ideas. Our expert trainer will help you to complete the same."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Learnbay has a great line of alumni who have been placed in top organizations after completing a full-stack developer course in Bangalore. Our alumni were recruited three months after their course completion, and the other alumni got recruited in the next few months. Until now, we have guided more than thousands of aspirants to land their desired software developer careers."
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
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni+Images/Qudsia.png"
              AlumniH4="Qudsia Tahniyath"
              Alumnip4="Learnbay has helped me a lot to learn data science applications in the e-commerce industry. The live class concept was really helpful in receiving proper DS training. Thanks to all my mentors and the placement team."
              alt1="Full-Stack Software Developer Course training in Bangalore"
              alt2="Full-Stack Software Developer Course training in Bangalore"
              alt3="Full-Stack Software Developer Course training in Bangalore"
              alt4="Full-Stack Software Developer Course training in Bangalore"
              alt5="Full-Stack Software Developer Course training in Bangalore"
              alt6="Full-Stack Software Developer Course training in Bangalore"
              alt7="Full-Stack Software Developer Course training in Bangalore"
              alt8="Full-Stack Software Developer Course training in Bangalore"
              alt9="Full-Stack Software Developer Course training in Bangalore"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataB}
              DomainFaqDatas={FullStackDomainFaqDataB}
              PaymentFaqDatas={FullStackPaymentFaqDataB}
              CapstoneFaqDatas={FullStackCapstoneFaqDataB}
              jobFaqDatas={FullStackjobFaqDataB}
              CriteriaFaqDatas={FullStackeligibleFaqDataB}
              MentorshipFaqDatas={FullStackMentorshipFaqDataB}
              GenericFaqDatas={FullStackgenericFaqDataB}
              SupportFaqDatas={FullStackSupportFaqDataB}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Bangalore "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Bangalore City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Bangalore,Best Full-Stack Software Developer Course in Bangalore"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
