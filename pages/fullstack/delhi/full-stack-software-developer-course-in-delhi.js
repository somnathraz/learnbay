import Head from "next/head";
import React, { useState } from "react";
import BottomBar from "../../../components/BottomBar/BottomBar";
import CitiesLeft from "../../../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../../../components/CityComponent/CitiesRight/CitiesRight";
import CityText from "../../../components/CityComponent/CityText/CityText";
import BoxShape from "../../../components/CoursePage/Boxshape/BoxShape";
import FirstSection from "../../../components/CoursePage/HeroSection/HeroSection";
import { ProgramFee } from "../../../components/CoursePage/ProgramFee/ProgramFee";
import ProgramInfo from "../../../components/CoursePage/ProgramInfo/ProgramInfo";
import {
  FullStackCapstoneFaqDataDe,
  FullStackDomainFaqDataDe,
  FullStackFaqDataDe,
  FullStackMentorshipFaqDataDe,
  FullStackPaymentFaqDataDe,
  FullStackSupportFaqDataDe,
  FullStackeligibleFaqDataDe,
  FullStackgenericFaqDataDe,
  FullStackjobFaqDataDe,
} from "../../../components/FAQ/FaqDataCity";
import FAQNew from "../../../components/FAQNew/FAQNewcerelig";
import Footer from "../../../components/Footer/Footer";
import Form from "../../../components/Form/Form";
import LearnSupport from "../../../components/LearnSupport/LearnSupport";
import Navbar from "../../../components/Navbar/Navbar";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import Popup from "../../../components/Popup/Popup";
import WhatsappFloat from "../../../components/WhatsappFloat/WhatsappFloat";
import styles from "../../../styles/Home.module.css";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Developer Course in Delhi with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Upskill yourself with Learnbay's Most Comprehensive Full Stack Developer Training program in Delhi. Become a Professional Full Stack Developer. Sign-up Today."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Delhi, Full-Stack Software Developer Course training in Delhi, Full-Stack Software Developer Course institute in Delhi, best Full-Stack Software Developer Course institute in Delhi, data scientist course in Delhi,data scientist certification in Delhi, Full-Stack Software Developer Course training institute in Delhi, advanced Full-Stack Software Developer Course in Delhi, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/delhi/full-stack-software-developer-course-in-delhi"
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
          mTitle="Full-Stack Software Developer Course In Delhi"
          spanMTitleText="To Achieve Your Dream Job"
          title="Full-Stack Software Developer Course In Delhi"
          spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Delhi. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Delhi"
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
            alt="Full-Stack Software Developer Course In Delhi"
            title="Why Enroll In Full Stack Software Developer Course In Delhi?"
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
              ProgramBot1="Learnbay provides the best full-stack software developer course in Delhi with domain specialization. Our full-stack developer course is a complete job-ready solution for those who are dreaming of a lucrative and ever-growing tech career. "
              ProgramBot2="Learnbays full stack developer course in Delhi enables students to learn all the latest skills of full stack software development that are in demand across the world."
              ProgramBot3="Our full-stack software developer course in Delhi is to help professionals through the right career track that leads to the ultimate peak of success. Transitioning to a career as a full-stack software developer in Delhi is not that hard anymore."
              ProgramHead4="What do learners get from Learnbay's Full Stack Developer course in Delhi?"
              ProgramBot4="Instead of following the generic online learning trends, Learnbay has developed a team of instructors consisting of 70+ expert full-stack developers from top-notch MNCs and PRODUCT Based Companies. Also, they are from different domains/industries like cloud computing, data science, AI, etc."
              ProgramBot5="And such experts are the designers of Learnbay’s full-stack development course."
              ProgramBot6="The full stack developer course in Delhi by Learnbay is created and curated according to the requirement of organizations in Delhi as well as the overseas job market.  Depending on your requirement learners get custom-fit job assistance and course content."
              ProgramBot7="In facEach of our classes is live and offers additional scopes of 1 to 1student-instructor query resolution."
              ProgramBot8="In fact, during the job assistance program, we help our students with customized strategies that fit them best. Flexibility and time boundness are other features that Learnbay provides with dedication. Keeping the hardship of time management for working professionals, we offer a flexible batch selection for live classes at their convenience. However, to retain the efficacy of our full-stack developer course in Delhi, we don’t provide a self-paced receded video-based learning option."
              ProgramHead14="Why Learnbay proves to be the best full-stack software developer course in Delhi? "
              ProgramHead15="Live & Interactive class experience "
              ProgramBot10="The first measure that makes our full-stack software developer course in Delhi is the 100% live and interactive learning mode. Although students attend the class online but get the same efficacy as offline university classes. "
              ProgramHead16="Hybrid Learning"
              ProgramBot14="Along with that, we have a hybrid learning option in Delhi.  Here learners can avail of offline sessions for collaborative real-world capstone projects at our project innovation lab (located in Delhi).  This project innovation lab offers interactive offline project sessions under the direct supervision of expert full-stack software developers."
              ProgramHead17="Flexible learning schedule and modules"
              ProgramBot15="Students can choose between weekend and weekday batches and the domain they want to become experts in."
              ProgramHead18="Domain Specialization"
              ProgramBot16="In order to retain the weight and advantages of experienced pros, you must acquire full-stack software development skills keeping your domain requirements in focus. Learnbay offers five elite domain options to choose from. "
              ProgramHead19="Basic coding classes for non-tech professionals"
              ProgramBot17="We also encourage the weak programmer to get into a full-stack software development career.  Our full-stack development course in Delhi offers dedicated add-on programming sessions with basic coding modules to weak programmers before they get into the core learning modules. We also encourage the weak programmer to get into a full-stack software development career.  Our full-stack development course in Delhi offers dedicated add-on programming sessions with basic coding modules to weak programmers before they get into the core learning modules. "
              ProgramHead20="Personalized Career Guidance"
              ProgramBot18="Our expert team of career counselors analyzes enrolled candidates' profiles based on their academic achievements and prior work experience. They guide our students to a domain that matches their profile and career. In fact, they also customized the learning modules as per learners' individualistic requirements. "
              ProgramHead8="Learnbay full stack software developer course features are :"
              ProgramHead9="> Live online courses"
              ProgramHead10="> Real-time capstone project"
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="At present, top organizations and MNC recruit candidates with domain expertise only. Otherwise even after doing a weighty full-stack software development course, working pros get considered as freshers only.  This is why Learnbay's full stack developer course in Delhi is made solely domain-specialized. Students can either choose the domain they want to specialize in or take help from our full-stack career guides to know which domain would be best for their profile."
              DomainHead2="There are five elite domains in the Full-stack developer course : "
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1=" Learnbay course trainers are full-stack developers and experienced full-stack software developers. "
              ModuleHead2="Become a professional MEAN and MERN stack developer. "
              ModuleBot3="Our Full-stack developer online course in Delhi covers topics like array overview, string, stack, best-average-worst case complexities hierarchy, complexity classes (P vs. NP problem), AVL tree, backtracking algorithm, graph and recursion, and many more exciting and trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="Our full-stack developer course in Delhi even has resume-building sessions for candidates. After completing a full-stack software developer course with domain specialization, you can add all the skills you have mastered but highly focus on how that helps in your targeted domain. It offers you an additional advantage at the interview table. "
              JobBot2="Learnbay has a dedicated team of recruitment assistants backed up by 250+ hiring partners. This team refers our alumni to top organizations, so they get to land a job that they wish for. "
              ProjectsBot1="The best Full stack developer course in Delhi by Learnbay has a series of fresh capstone projects. Students get to work and gain experience by working on projects using the latest tools and skills they learned from Learnbay. Other than that we encourage our students to come up with their own project ideas. Our industry expert project guides help them to reach the desired project outcomes."
              ProjectsBot2="A capstone project is a great way to show your skill on your resume. Our project innovation labs are solely dedicated to such capstone projects where students can work collaboratively with their batchmates from the same domain. "
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Almost all our alumni got emplaced within 3 months of full-stack development course completion and others in following few following months. We have to recond that 30% of our alumni got the job even before the final test associated."
              AlumniHead1="Few Our Alumni sharing their success and learning experiences:"
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
              alt1="Full-Stack Software Developer Course training in Delhi"
              alt2="Full-Stack Software Developer Course training in Delhi"
              alt3="Full-Stack Software Developer Course training in Delhi"
              alt4="Full-Stack Software Developer Course training in Delhi"
              alt5="Full-Stack Software Developer Course training in Delhi"
              alt6="Full-Stack Software Developer Course training in Delhi"
              alt7="Full-Stack Software Developer Course training in Delhi"
              alt8="Full-Stack Software Developer Course training in Delhi"
              alt9="Full-Stack Software Developer Course training in Delhi"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataDe}
              DomainFaqDatas={FullStackDomainFaqDataDe}
              PaymentFaqDatas={FullStackPaymentFaqDataDe}
              CapstoneFaqDatas={FullStackCapstoneFaqDataDe}
              jobFaqDatas={FullStackjobFaqDataDe}
              CriteriaFaqDatas={FullStackeligibleFaqDataDe}
              MentorshipFaqDatas={FullStackMentorshipFaqDataDe}
              GenericFaqDatas={FullStackgenericFaqDataDe}
              SupportFaqDatas={FullStackSupportFaqDataDe}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Delhi "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Delhi City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Delhi,Best Full-Stack Software Developer Course in Delhi"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
