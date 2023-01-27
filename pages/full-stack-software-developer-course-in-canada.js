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
  FullStackFaqDataCa,
  FullStackDomainFaqDataCa,
  FullStackPaymentFaqDataCa,
  FullStackCapstoneFaqDataCa,
  FullStackjobFaqDataCa,
  FullStackMentorshipFaqDataCa,
  FullStackSupportFaqDataCa,
  FullStackeligibleFaqDataCa,
  FullStackgenericFaqDataCa,
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
          Full-Stack Software Developer Course in Canada | Full-Stack Software
          Developer Course Training in Canada
        </title>
        <meta
          name="description"
          content="Full-Stack Software Developer Course in Canada. Learnbay is Advanced Full-Stack Software Developer Course Training Institute in Canada. Full-Stack Software Developer Course in Canada will enhance your career"
        />
        <meta
          name="Keywords"
          content="Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course training in Canada, Full-Stack Software Developer Course institute in Canada, best Full-Stack Software Developer Course institute in Canada, data scientist course in Canada,data scientist certification in Canada, Full-Stack Software Developer Course training institute in Canada, advanced Full-Stack Software Developer Course in Canada, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-canada"
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
          deskTopPara="Ace Your Coding Interview at MAANG"
          mTopPara="Ace Your Coding Interview at MAANG"
          mTitle="Full-Stack Software Developer Course In Canada"
          spanMTitleText="To Achieve Your Dream Job"
          title="Full-Stack Software Developer Course In Canada"
          spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Canada. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Canada"
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
            alt="Full-Stack Software Developer Course In Canada"
            title="Why Enroll In Full Stack Software Developer Course In Canada?"
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
            <CitiesLeft fullStackCity={true} />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              fullStackCity={true}
              ProgramBot1="Tech aspirants in Canada can enroll in the job-ready full-stack developer course from Learnbay. Our 360° full-stack stack developer course in Canada provides full-fledged, industry-paced training with domain specialization. Candidates who aspire to become expert full-stack software developers can choose the domain they want to be experts in."
              ProgramBot2="Learnbay's full stack developer course in Canada holds the amazing feature of live online classes. Full stack experts with 8+ years of MNC working experience are the architect of our full stack software developer course in Canada."
              ProgramBot3="When you finish the full stack developer course from Learnbay, you will become a professional front-end and back-end full stack software developer. Companies across Canada are looking for such full-stack software developer aspirants who hold adequate knowledge of a specific field. An example can be cloud computing in this regard. Our expert instructors have cracked this secret requirement of recruiters and designed every bit of the course modules accordingly."
              ProgramHead4="What do learners get from Learnbay's Full Stack Developer course in Canada?"
              ProgramBot4="Learnbay's 360° full stack software developer course is conducted by a flock of full stack software developer experts working around Canada for more than 8 years. Our course has a Q&A forum for students to clear all their doubts and queries. Apart from that, students can connect with their instructor for 1-on-1 discussion on request. Self-paced learning via recorded video is not available, but a student can alter their live batches at any time as per their convenience based on learning topics. "
              ProgramBot5="There are basic coding classes for professionals from non-tech backgrounds so that they can learn with the same speed as their techie classmates.There are basic coding classes for professionals from non-tech backgrounds so that they can learn with the same speed as their techie classmates."
              ProgramBot6="We even have career counseling experts for students; they analyze a student's profile on their academic achievements and prior work experience. They suggest to candidates the best domain that suits their profile."
              ProgramHead7="Why is Learnbay the best full-stack developer course in Canada?"
              ProgramBot8="Our full-stack developer courses are completely live and interactive sessions with domain specialization. Learnbay's full stack software developer course in Canada provides candidates with advanced skills and real-world learning concept that is essential to survive in the current competitive job market of Canada."
              ProgramBot9="Learnbay's full-stack developer course with domain specialization offers candidates 3 years of flexible LMS access to complete the course."
              ProgramHead8="Learnbay full stack software course features are :"
              ProgramHead9="> Live online courses."
              ProgramHead10="> Real-world capstone project."
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              DomainBot1="Our full-stack software developer course is a specialized domain course. Most of the top organizations search for candidates with domain-specific knowledge. Students can be an expert in a particular domain even before recruitment."
              DomainHead2="There are five elite domains in the Full-stack development course :"
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Our full-stack software developer course trainers are experts and IT professionals with years of experience."
              ModuleBot2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Learnbay's Full-stack software developer course in Canada includes topics like complexity classes (P vs. NP problem), AVL tree, Best-average-worst case complexities hierarchy, recursion and graph, string, stack, array overview, backtracking algorithm, and many other trending tools."
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'Mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="Our full-stack software developer course will even help students in resume building. So they can showcase the skills they have learned and excel in after completing a full stack software developer course from Learnbay in Canada."
              JobBot3="We have a specially dedicated team for students to offer them job referrals from top organizations and MNCs. So, our alumni are pre-trained for interviews and jobs they have always wanted to work for."
              ProjectsBot1="Our full-stack developer course with domain specialization offers a real-world capstone project. So our students can learn with real-world examples. This will enable students to learn and practice their skills and tools."
              ProjectsBot2="Capstone projects for complete full-stack software developer courses will let you stand out from the other candidates during recruitment."
              ProjectsHead2="Full-stack software development projects example:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Learnbay has reshaped and restarted many careers via this full stack developer course, emplacing the candidates in top organizations. Our alumni got recruited 3 months after completing the full stack software developer course in Canada, and others got recruited in the following few months."
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
              alt1="Full-Stack Software Developer Course training in Canada"
              alt2="Full-Stack Software Developer Course training in Canada"
              alt3="Full-Stack Software Developer Course training in Canada"
              alt4="Full-Stack Software Developer Course training in Canada"
              alt5="Full-Stack Software Developer Course training in Canada"
              alt6="Full-Stack Software Developer Course training in Canada"
              alt7="Full-Stack Software Developer Course training in Canada"
              alt8="Full-Stack Software Developer Course training in Canada"
              alt9="Full-Stack Software Developer Course training in Canada"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataCa}
              DomainFaqDatas={FullStackDomainFaqDataCa}
              PaymentFaqDatas={FullStackPaymentFaqDataCa}
              CapstoneFaqDatas={FullStackCapstoneFaqDataCa}
              jobFaqDatas={FullStackjobFaqDataCa}
              CriteriaFaqDatas={FullStackeligibleFaqDataCa}
              MentorshipFaqDatas={FullStackMentorshipFaqDataCa}
              GenericFaqDatas={FullStackgenericFaqDataCa}
              SupportFaqDatas={FullStackSupportFaqDataCa}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Canada "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Canada City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Canada,Best Full-Stack Software Developer Course in Canada"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
