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
  FullStackFaqDataP,
  FullStackDomainFaqDataP,
  FullStackPaymentFaqDataP,
  FullStackCapstoneFaqDataP,
  FullStackjobFaqDataP,
  FullStackMentorshipFaqDataP,
  FullStackSupportFaqDataP,
  FullStackeligibleFaqDataP,
  FullStackgenericFaqDataP,
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
            Best Full Stack Developer Course in Pune with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course training in Pune, Full-Stack Software Developer Course institute in Pune, best Full-Stack Software Developer Course institute in Pune, data scientist course in Pune,data scientist certification in Pune, Full-Stack Software Developer Course training institute in Pune, advanced Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-pune"
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
          mTitle="Full Stack Software Developer Course in Pune "
          // spanMTitleText="To Achieve Your Dream Job"
          title="Full Stack Software Developer Course in Pune "
          // spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Pune. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Pune"
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
            alt="Full-Stack Software Developer Course In Pune"
            title="Why Enroll In Full Stack Software Developer Course In Pune?"
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
              ProgramHead1="A 360° Full Stack Software Developer Course with domain specialization."
              ProgramBot1="Learnbay offers full-stack developer courses in Pune. It is a full-fledged full-stack development course with five different domains for students to gain expertise. Our live online Full stack developer Course with domain specialization is a complete stack of structured learning."
              ProgramBot2="Learnbay's online full stack developer training in Pune is designed by industrial full stack software development experts of different domains. Once enrolled, tech enthusiasts can excel in both front-end and back-end development of servers. At Learnbay, we train students to evolve as professional full-stack developers."
              ProgramBot3="We aim to get students out of the haystack and be updated with real-world required skills for complex industrial business problems. Learnbay's 360° full stack software developer course in Pune is designed for professionals to attain a lucrative career transition."
              ProgramHead4="What do learners get from Learnbay's Full Stack Software Developer course in Pune?"
              ProgramBot5="In Pune, Learnbay provides Full-fledged, full-stack software developer course. Here students get the freedom of 1:1 sessions with trainers via call and online meetings to clear all of their doubts—an effective Q&A forum for doubts and queries."
              ProgramHead6="We conduct basic coding classes for professionals from non-tech backgrounds so that they stay on track with tech pros."
              ProgramBot6="Our professionals analyze students' career profiles and academic achievements to guide them in choosing the best learning modules as per their career needs. Hence, instead of getting lost in the unwanted stacks of modules, you learn the right thing that drives your career towards the peak of your success."
              ProgramHead7="How Learnbay becomes an exceptional full-stack developer course in Pune for working professionals?"
              ProgramBot8="Learnbay's Full Stack developer course in Pune via live interactive classes is conducted by full-stack experts of leading organizations. We have specialized hybrid courses for students."
              ProgramBot9="Students can learn from live classes at home (for theoretical learning) and complete all capstone projects in Learnbay offline innovative learning centers of Pune. Other than this, there are a lot of webinars with trending topics for students to participate in and learn, even hackathons to find the loopholes of hackers."
              ProgramBot10="Students can learn, pause, continue and complete the course within the subscription period of 3 years after enrolling. Learnbay has its Project Innovation lab feature in Pune, especially for our students to work on new industrial projects."
              ProgramHead8="At Learnbay, you get a unique feature like :"
              ProgramHead9="> Live online courses."
              ProgramHead10="> Real-world capstone project."
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="Learnbay is the first organization in Pune to offer best full-stack developer course with domain specializations. Because Learnbay knows domain specialization is essential in today's world, we want to empower all our students with domain-specific knowledge."
              DomainHead2="The five elite domains available in full-stack software developer course in Pune are as follows :"
              DomainHead3="a. Full stack"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Industrial full-stack developer experts curate the Learnbay full-stack software developer course curriculum according to Pune's industrial standards and norms."
              ModuleBot3="Learnbay Full-stack developer course in Pune covers tools like Big-Omega, Best, Average, and worst-case complexities hierarchy, complexity classes (P vs. NP problem), asymptotic analysis, String, Stack, array overview, binary search, and AVL tree, backtracking algorithm, graph, and recursion and many more exciting tools for students to learn."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobBot1="Learnbay's full-stack developer course with placement assists students in Pune with resume building, so your profile shows the right skills during the interview. Learnbay dedicatedly helps our students even after course completion because we know that resume building and job referrals are as important as completing the course."
              JobHead2="'mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot3="Already mentioned, Learnbay full-stack developer course in Pune is a specialized domain course. Hence, learners from Learnbay always remain ten steps ahead of the generic crowd of job seekers. Our dedicated student support team helps candidates with job referrals, so alumni are recruited to top organizations. In fact, here, you get amazing assured career assistance."
              ProjectsBot1="Learnbay full-stack developer in Pune includes real-time capstone projects for learning real-world scenarios and finding a solution. We even have special hybrid classes for project completion. Learnbay project innovation labs are Full-stack software development projects."
              ProjectsHead2="Full-stack software development projects example:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="We have transformed more than 1000+ careers of Learnbay alumni to climb the success ladder in top organizations and start-ups. 80% of our alumni got jobs within three months after completing the course, and the rest in the following few months."
              AlumniHead1="Here are some of our alumni inspiring aspirants in Pune to learn Full-stack software developer courses from Learnbay."
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
              alt1="Full-Stack Software Developer Course training in Pune"
              alt2="Full-Stack Software Developer Course training in Pune"
              alt3="Full-Stack Software Developer Course training in Pune"
              alt4="Full-Stack Software Developer Course training in Pune"
              alt5="Full-Stack Software Developer Course training in Pune"
              alt6="Full-Stack Software Developer Course training in Pune"
              alt7="Full-Stack Software Developer Course training in Pune"
              alt8="Full-Stack Software Developer Course training in Pune"
              alt9="Full-Stack Software Developer Course training in Pune"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataP}
              DomainFaqDatas={FullStackDomainFaqDataP}
              PaymentFaqDatas={FullStackPaymentFaqDataP}
              CapstoneFaqDatas={FullStackCapstoneFaqDataP}
              jobFaqDatas={FullStackjobFaqDataP}
              CriteriaFaqDatas={FullStackeligibleFaqDataP}
              MentorshipFaqDatas={FullStackMentorshipFaqDataP}
              GenericFaqDatas={FullStackgenericFaqDataP}
              SupportFaqDatas={FullStackSupportFaqDataP}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Pune "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Pune City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Pune,Best Full-Stack Software Developer Course in Pune"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
