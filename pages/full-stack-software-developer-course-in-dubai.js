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
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNew/FAQNewcerelig";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import React, { useState } from "react";
import {
  FullStackFaqDataDu,
  FullStackDomainFaqDataDu,
  FullStackPaymentFaqDataDu,
  FullStackCapstoneFaqDataDu,
  FullStackjobFaqDataDu,
  FullStackMentorshipFaqDataDu,
  FullStackSupportFaqDataDu,
  FullStackeligibleFaqDataDu,
  FullStackgenericFaqDataDu,
} from "../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Developer Course in Dubai with Job Assistance</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Become A Certified in Full Stack Software Developer with Best Full Stack Training Course in Dubai by Learnbay with Interactive Sessions. Enroll Now."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Dubai, Full-Stack Software Developer Course training in Dubai, Full-Stack Software Developer Course institute in Dubai, best Full-Stack Software Developer Course institute in Dubai, data scientist course in Dubai,data scientist certification in Dubai, Full-Stack Software Developer Course training institute in Dubai, advanced Full-Stack Software Developer Course in Dubai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-dubai"
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
          ffullStack={true}
          deskTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          mTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          mTitle="Full-Stack Software Developer Course In Dubai"
          spanMTitleText="To Achieve Your Dream Job"
          title="Full-Stack Software Developer Course In Dubai"
          spanTitleText="To Achieve Your Dream Job"
          desc="Enroll in the best Job-ready full-stack software development course in Dubai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve. "
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
          width="791"
          height="659"
          alt="Full-Stack Software Developer Course In Dubai"
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
            alt="Full-Stack Software Developer Course In Dubai"
            title="Why Enroll In Full Stack Software Developer Course In Dubai?"
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
              ProgramBot1="Enthusiasts from Dubai can easily become expert full-stack developers by learning from our live online classes. Learnbay’s full-stack software development course in Dubai is a full-fledged online course with all the latest skills and tools required to become a professional full-stack developer and have a lucrative job with the same in Dubai."
              ProgramBot2="Our full-stack developer course provides live online classes designed by experienced full-stack software developers. Our full-stack software developer course will transform candidates into expert full-stack developers."
              ProgramBot3="We want to help students in Dubai who want to pursue a career as a professional full stack software developer expert both in the front and back end. All our classes are live online and conducted by experienced full-stack software developer experts."
              ProgramHead4="What do learners get from Learnbay's Full Stack Developer course in Dubai?"
              ProgramBot4="Our 360° full stack software developer course is a domain-specialized course. We have a Q&A forum for students to clear all their queries and doubts. At the end of each module, we provide 1:1 discussions with our professional full-stack developer instructors. Students can avail such personalized sessions on demand also. Candidates can even request access to different batches so they can learn from different trainers of different batches."
              ProgramHead5="Basic coding classes are there for non-tech professionals"
              ProgramHead6="Why is Learnbay the best job-ready full-stack software developer course in Dubai?"
              ProgramBot6="Full stack developer courses are live online classes with domain specialization. Learnbay’s full stack software development course will enhance candidates' skills as full stack software developers and get experience by working on real-world capstone projects in Dubai."
              ProgramBot7="We give 3 years of flexible LMS access for students to complete the full stack software developer course in Dubai. So, our enrolled candidates can learn at their own pace and complete their course when they are ready."
              ProgramHead8="Learnbay full stack software course features are :"
              ProgramHead9="> Live online courses."
              ProgramHead10="> Real-world capstone project."
              ProgramHead11="> Domain specialization"
              ProgramHead12="> Learn at your pace with 3yrs of subscriptions"
              ProgramHead13="> Offline project innovation labs for better learning"
              ProgramBot13="Learnbay’s full-stack software developer course has specialized career counseling experts. They analyze candidates' profiles on their academic achievements and prior work experience. Candidates can discuss with them the domain that will be ideal for their profile and future career."
              DomainBot1="Nowadays, most organizations look for candidates with domain knowledge and experience, and this is why domain specialization is so important. Learnbay's full-stack developer course is a specialized domain course for students to excel in their particular domain. Actually, this is the success key of Learnbay’s full-stack development course in Dubai."
              DomainHead2="There are five elite domains in the Full-stack development course :"
              DomainHead3="a. Full stack web development (Front and back-end)"
              DomainHead4="b. Product engineer and manager"
              DomainHead5="c. Data science and AI"
              DomainHead6="d. Web 3.0 developer"
              DomainHead7="e. DevOps and clouds"
              ModuleBot1="Our full-stack developer course is conducted by experts and IT professionals who are experienced full-stack software developers and working in top-notch MNCs/ PRODUCT Based Companies for more than 8 years. They keep doing extensive research and accordingly design the respective full-stack course modules."
              ModuleBot2="Become a professional MEAN and MERN stack developer."
              ModuleBot3="Dubai’s full stack software developer course includes topics like complexity classes (P vs. NP problem), AVL tree, Best-average-worst case complexities hierarchy, recursion and graph, string, stack, array overview, backtracking algorithm, and many other trending tools. "
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
              JobHead1="'Mock interview sessions, preparing Learnbay alumni for their dream interviews.'"
              JobBot1="Learnbay’s 360° full stack software developer course even helps students in resume building. The resume will portray all the skills and knowledge that you have learned as a developer while completing the full-stack software developer course from Learnbay in Dubai."
              JobBot3="Our special dedicated team for students refers to jobs of top organizations and MNC. So, alumni get the job they always wanted to work for. The course comes with an interview guarantee."
              ProjectsBot1="A full-stack developer course with domain specialization includes real-world capstone projects for students to learn and get experience with real-world examples. It helps students in practicing the tools and skills they have gained after the completion of capstone projects, the full stack software developer course with domain specialization."
              ProjectsHead2="Full-stack software development projects example:"
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/2.png"
              Projectsp1="Create an online application that displays the contents of a database in list form, modify or delete each record and add new ones."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/4.png"
              Projectsp2="Learn advanced API integration to connect two or more applications, via their APIs, that lets those systems exchange data."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/5.png"
              Projectsp3="The connected website must offer signup, login/logout, and profile creation/editing. This must include a wishlist box, a order tracker, personalized suggestions, personalized and occasional discount features, a chatbot, etc."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/project/6.png"
              Projectsp4="This is a full-stack web development project at the advanced level that includes seamless audio-video call management services."
              AlumniBot1="Learnbay has made a lot of careers for their alumni and has eased the recruitment process of our candidates in top organizations, and led startups and MNCs. Most of our alumni were recruited just within 3 months of full stack software development course completion and others in the next few months."
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
              alt1="Full-Stack Software Developer Course training in Dubai"
              alt2="Full-Stack Software Developer Course training in Dubai"
              alt3="Full-Stack Software Developer Course training in Dubai"
              alt4="Full-Stack Software Developer Course training in Dubai"
              alt5="Full-Stack Software Developer Course training in Dubai"
              alt6="Full-Stack Software Developer Course training in Dubai"
              alt7="Full-Stack Software Developer Course training in Dubai"
              alt8="Full-Stack Software Developer Course training in Dubai"
              alt9="Full-Stack Software Developer Course training in Dubai"
            />
            <FAQNew
              FaqDatas={FullStackFaqDataDu}
              DomainFaqDatas={FullStackDomainFaqDataDu}
              PaymentFaqDatas={FullStackPaymentFaqDataDu}
              CapstoneFaqDatas={FullStackCapstoneFaqDataDu}
              jobFaqDatas={FullStackjobFaqDataDu}
              CriteriaFaqDatas={FullStackeligibleFaqDataDu}
              MentorshipFaqDatas={FullStackMentorshipFaqDataDu}
              GenericFaqDatas={FullStackgenericFaqDataDu}
              SupportFaqDatas={FullStackSupportFaqDataDu}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Full-Stack Software Developer Course Certification Training locations in Dubai "
          CityText=" :  Bajirao Road [411002], Yerwada [411006], Kasba Peth [411011], Dhanori [411015], Dubai City [411022], Hadapsar S.O [411028], Airport [411032], Afmc [411040], Karve Road [410038], Ammunition Factory Khadki [411003], Aundh [411007], Dapodi [411012], Gokhalenagar [411016], Kudje [411023], Kothrud [411029], Mundhva [411036], Tingre Nagar [411000], A.R. Shala [411004], Baner Road [411004], Magarpatta City [411013], Botanical Garden [411020], Khadakwasla [411024], Lokmanyanagar [411030], Bibvewadi [411037], Bhavani Peth [411042], Dhayari [411041], Dhankawadi [411043], C D A O [411001], Shivajinagar [411005], Parvati [411009], 9 Drd [411014], Armament [411021], Donje [411025], Bopkhel [411031], Bhusari Colony [411038], Haveli [411045], Jambhulwadi [411046], Lohogaon [411047], Khondhwa [411048], Anandnagar [411051], Navsahyadri [411052], Chatursringi [411053], Gokhalenagar [411055], Warje [411058], Mohamadwadi Kadvasti [411060], Janaki Nagar [411066], Aundh [411067], Pimpri Chinchwad [411078], Nanded [411230], Gondhale Nagar [412029], Sathe Nagar [412047], Alandi Devachi [412105], Ambarvet [412115], Ashtapur [412207], Manjari Farm [412307], Phursungi [412308], Viman Nagar 411014, Shaniwar Peth [413337]."
          CityTextLB="Locations Offered"
          CityTextL=" :Full-Stack Software Developer Course viman nagar,Full-Stack Software Developer Course Training in kalyan nagar,Full-Stack Software Developer Course Training in magarpetta,Full-Stack Software Developer Course Training in pimpri chinchwad,Full-Stack Software Developer Course Classes in yerwada,Full-Stack Software Developer Course Classes in kharadi,Full-Stack Software Developer Course Classes in vishrantwadi,Full-Stack Software Developer Course Classes in deccan,Full-Stack Software Developer Course in Katraj,Full-Stack Software Developer Course Training in warje,,Full-Stack Software Developer Course Certification Training in bavdhan,Full-Stack Software Developer Course Certification in boat club road,Full-Stack Software Developer Course Certification in model colony,Best Full-Stack Software Developer Course Training in Dubai,Best Full-Stack Software Developer Course in Dubai"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
