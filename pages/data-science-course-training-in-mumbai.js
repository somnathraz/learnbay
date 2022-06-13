import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from "../Components/HeroSection/HeroSection";
import ProgramInfo from "../Components/ProgramInfo/ProgramInfo";
import GetHired from "../Components/GetHired/GetHired";
import BoxShape from "../Components/Boxshape/BoxShape";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import CityText from "../Components/CityText/CityText";
import CitiesLeft from "../Components/CitiesLeft/CitiesLeft";
import CitiesRight from "../Components/CitiesRight/CitiesRight";
import FAQNew from "../Components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import { AdvanceFaqDataM, AdvanceDomainFaqDataM, AdvancePaymentFaqDataM, AdvanceCapstoneFaqDataM, AdvanceCertificationFaqDataM, AdvancejobFaqDataM, AdvanceMentorshipFaqDataM, AdvanceSupportFaqDataM } from "../components/FAQ/FaqDataCity";

 
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <FirstSection
        deskTopPara="Industry- Specific Capstone Certified by IBM"
        mTopPara="Industry- Specific Capstone Certified by IBM"
        title="Data Science Course Training in Mumbai"
        desc="Learnbay offers Industry Accredited Data Science Certification Course with DOMAIN ELECTIVE Option.This foundation program is suitable for professionals having more than 1+ years of work experience in any programming or non programming domain."
        src="/banner.png"
        alt="AiMl Header"
      />
      <div className={styles.program}>
        <ProgramInfo
        p1="Aimed for"
        p11="Working Professionals"
        p2="50LPA-60LPA"
        p22="Salary Package"
        p3="1:1"
        p33="Career Support"
        p4="No Cost EMI"
        p44="₹ 10k/month (9 Months)"
        />
      </div>
      <GetHired 
        WeekdayBatchDate="6 Unique IBM certifications on course completion."
        WeekendBatchDate="Domain-Oriented Full Stack Learning."
        Project="250+ Employer-Alliance & 100% Interview Guarantee."
        Classes="Cutting edge Industry curated Training."
        OneLine="Specially devised for experienced working pros."
        Interview="250+ employer-Alliance 100% Interview Guarantee"
        Fee="79,000"
      />
      <div className="Feature" id="Feature">
        <BoxShape
          title="Why Enroll In This Program"
          Box1h5="Custom-fit Training"
          box1desc="Get specially designed modules as per your dream DS role. Learn innovative AI applications."
          Box2h5="Domain Focused"
          box2desc="Obtain cutting-edge Al and DS skills as per demanding industry standards. Choose from 7+ electives."
          Box3h5="Premium Mentoring"
          box3desc="Learn how to crack interviews by attending CV writing workshops & mock interviews with FAANG expertise."
          Box4h5="Hands-on Experience"
          box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant establishments."
        />
      </div>
      <div className="MainCities">
        <div className="CitiesLeft">
          <CitiesLeft />
        </div>
        <div className="CitiesRight">
          <CitiesRight
            ProgramHead1="Job-ready Data science training in Mumbai-"
            ProgramHead2="What is the Learnbay Job-ready Data Science Program in Mumbai?"
            ProgramBot1="The best data scientist training provider in Mumbai is Learnbay. Industrial expertise from top-tier MNCs is the specialization of our faculty. Throughout the offline as well as online data science courses, you get the advantage of their experience and knowledge. The courses are tailored to learners who wish to transition into a Data Science career or become a great Data scientist after years of experience in any field. In a nutshell, it's the top destination for working professionals looking for the greatest data science and AI training."
            ProgramBot2="The Learnbay data science course for working professionals in Mumbai includes both practical (core industrial) and theoretical topics for balanced learning. This institute provides the most cost-effective Data Science classes in Mumbai. The best part is that you get a full-stack data science program with placement."
            ProgramHead3="Why is Learnbay the best institute for Data scientist courses in Mumbai?"
            ProgramBot3="Being all of the well-known costly cities of India, it is expected that even for professional courses, this city will charge high. But the artificial intelligence and data science courses provided by Learnbay in Mumbai seem comparatively cheaper. Above all, even at a comparatively cheaper cost, you get the best of the data science learning experience along with an assured job guarantee."
            ProgramBot31="Besides, you can get different data science course options based on your present career stage. Each of these courses consists of custom-fit modules that take care of your existing career experience."
            ProgramBot32="Also, you get 1 to 1 discussion sessions and 3 years of flexi pass to attend any live and interactive classes at your convenience, experts mentors from top-tire MNCs. Options are available for choosing offline, online, or blended learning mode. However, due to the 100% live and interactive sessions, even in an online data science course, you get offline learning satisfaction at Learnbay. You may use Learnbay LMS on your mobile device to learn on the go."
            ProgramHead4="How much will the spending be on data science course fees?"
            ProgramBot4="Learnbay's subscription plans range from 65K to 1.2 lakh INR. The class timings are flexible, and you can access any batches or teachers at any time. You can even go to many sessions with various instructors. Our Data Science and Artificial intelligence courses include one-on-one live doubt clearing sessions with seasoned FAANG Data scientists. After enrolling, students can take a break followed by resumption and complete their course within one to three years (depending on the course)."
            ProgramHead5="Available Data Science and AI Certification Courses by Learnbay in Mumbai"
            ProgramBot5="Foundational Data Science and AI program,  Advanced-Data Science and AI program with Domain Specialization, Data Science and AI Program for Managers and Leaders, AI and Data Science Course with Job Guarantee or Money back."

            DomainHead1="Why Domain Specialization?"
            DomainBot1="In Mumbai, 7 out of 10 job seekers roaming around you hold a data science certification. However, 1 out of these 7 experience a successful data science career switch within one year of course completion."
            DomainBot2="Actually, the data analytics vacancy jobs roles in Mumbai only get filled with such data science professionals that own specific industry-oriented data science knowledge. Without domain expertise and work experience, you can’t offer precise insights or any kind of analytical solutions. Consequently, the recruiters mark your profiles as ‘not a good fit for data scientist positions in Mumbai."
            DomainBot3="At Learnbay, you get full-stack domain-specialized Data Science Training. Based on your experience, you can choose domains like"
            DomainList1="HR, Sales, and Meaning" 
            DomainList2="Energy, oil, and Gas" 
            DomainList3="Mechanical, manufacturing, and telecom" 
            DomainList4="Pharmaceutical and clinical research" 
            DomainList5="Media, hospitality, and transportation" 
            DomainList6="Testing and Development Domain" 
            DomainList7="DeOps and Cloud" 
            DomainList8="IoT, automotive, and embedded systems" 
            DomainList9="Supply chain and e-commerce" 
            DomainList10="Banking, Finance, and Marketing Domain"

            CertificationHead1="IBM Data  Science Certifications in Mumbai"
            CertificationBot1="Under the Learnbay provided IBM Data Scientist Course, you may take advantage of live lessons with multiple instructors without dealing with any hassles. Aside from that, you will receive several IBM certifications for different data science and AI micro-skills. So, it's basically a data science course with a career guarantee. Based on the course you choose, you get 1 to 8 certificates. The best part is that once you complete the capstone project associated with the Data Science and AI course available in Mumbai, you get an IBM Project Experience Certificate. Please refer to the respective course brochures to know more about micro-skill certificates."
            src="/certificate.webp"

            ModuleHead1="What are the most crucial tools and modules for securing a Data Science Job position in Mumbai?"
            ModuleBot1="PYTHON and R will be the two key programming languages throughout your Data scientist career in Mumbai. But the most crucial module will be the 'STATISTICS .' Other than that, in order to earn the industrial competency, you have to master the modules like 'MACHINE LEARNING,' 'TIME SERIES,' 'POWER-BI,' 'ADVANCE EXCEL,' 'TABLEAU,' 'BIG DATA,' 'MONGO DB,' 'SPARK ANALYTICS,' 'SQL.'"
            ModuleBot2="Each of the modules associated with the data science and AI course in Mumbai by Learnbay includes plenty of updated practical assignments."
            ModuleHead2="How do Learnbay Data Science learning modules become highly profitable for experienced working professionals? "
            ModuleBot3="All of our learning modules are solely focused on your domain expertise. So, all the skills and tools you learn here offer your chosen industry's best practices-based training."
            ModuleHead3="How do Learnbay data science modules become the best-fit learning options for non-tech aspirants?"
            ModuleBot4="We have added a modules 0 option for non-programmers. These modules also provide 6 to 8 hours of live and interactive training on the basics of R and python programming for data science. These additional classes are free of cost and ensure that you stay on track with your technical batchmates, even though you don’t have any programming experience."

    syllabush1="Pre-Preparatory Classes (Programming + Maths)"
    syllabusb1="6 Hours"
    SyllabusBotlist11="Anaconda Installation"
    SyllabusBotlist12="Basics of programming"
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
    SyllabusBotlist26="Numpy, Pandas, Matplotlib, etcs"
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

    JobHead1="Data Science Interview Preparation in Mumbai"
    JobBot1="Learnbay Data science classes help prepare for interviews. Several company-specific mock interviews ensure our students' confidence at the interview table. Learnbay instructors keep your CV and portfolio competent to attract recruiters. As stated previously, you will receive domain-specific full-stack data scientist training, so your interview preparation will also experience the reflection of the same."
    JobBot2="All of our data science courses offer an interview guarantee from top MNC and growing startups across Mumbai as well as India. But in the case of the Data Science program with a job guarantee, you can have a money-back option in case of unsuccessful placement (which is very rare in Learnbay). More than 1000 Learnbay Alumni are proudly working in different data science job roles across Mumbai and the entire of India."
    JobBot5="We have placement collaborations with different companies like IBM, TCS, Accenture, EY, JP Morgan, etc."
    JobHead2="What are the benefits of working as a Data Scientist?"
    JobBot3="IBM Certified Data scientists own global recognition. Whether it's a multinational one or a startup, everyone wants such a team of data scientists that is specialized in the concerned industrial domain. So, rather than fresh candidates, professionals switching to the data science field are in massive demand. Other than the data science field, you can't even imagine a 200-400% hike with ample job security. The range of data scientist salaries is growing so fast."

    ProjectsHead1="Live Industrial Data Science Projects:"
    ProjectsBot1="Learnbay's unique cloud lab feature gives users access to live data science projects from multinational corporations, as well as coaching from Data science experts. You get the option of choosing a live industrial project from 15+ options from your chosen domain(s). In the cloud lab, you can directly observe and practice the data filtering, data mining, data wrangling, and process of live MNC data science projects in Mumbai. "
    ProjectsBot2="In addition, you get a chance to work on two-three fresh data science capstone projects. For these capstone projects, you get project completion certificates from IBM. Below are some of the Learnbay Data science projects."
    src1="/SAMSUNG.png"
    ProjectsH1="Samsung Health Monitor App"
    Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is the accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
    src2="/IBM.png"
    ProjectsH2="IBM HR Analytics"
    Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
    src3="/AMAZON.png"
    ProjectsH3="Amazon Customer Review Analysis"
    Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
    src4="/BMW.png"
    ProjectsH4="BMW Used Car Price Optimization"
    Projectsp4="BMW allows existing customers to sell used cars, but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."

    AlumniBot1="60% of Learnbay students in Mumbai secured lucrative data scientist and other Data science job positions within 2 to 3 months of course completion. 30% of the rest also got placed within a year. Even 300+ alumni of the different data science and AI courses are working in leads and managerial positions."
    Asrc1="/keerthana.png" 
    AlumniH1=" Pooja Sharma" 
    Alumnip1="I have done Data Science and Al certification and got placed within 8 months. The journey was really tough for me because I was from the mechanical domain. But the mentors were really helpful, and they have good industrial knowledge. The facility of recording classes is very useful."
    Asrc2="/Shezan.png" 
    AlumniH2="Shezan Baig" 
    Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
    Asrc3="/viraj.png" 
    AlumniH3="Viraj Ghodke" 
    Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
    Asrc4="/Shubhangi.png" 
    AlumniH4="Shubhangi J. Waghmare " 
    Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."

          />
            <FAQNew FaqDatas={AdvanceFaqDataM} DomainFaqDatas={AdvanceDomainFaqDataM} PaymentFaqDatas={AdvancePaymentFaqDataM} CapstoneFaqDatas={AdvanceCapstoneFaqDataM} CertificationFaqDatas={AdvanceCertificationFaqDataM} jobFaqDatas={AdvancejobFaqDataM} MentorshipFaqDatas={AdvanceMentorshipFaqDataM} SupportFaqDatas={AdvanceSupportFaqDataM} />
        </div>
      </div>
      <CityText
      CityTextB="Data Analytics Course Certification Training locations in Mumbai "
      CityText=" : A I staff colony [400029], Aareymilk Colony [400065], Agripada [400011], Airport [400099], Ambewadi [400004], Andheri [400053], Andheri East [400069], Andheri Railway station [400058], Antop Hill [400037], Asvini [400005], Azad Nagar [400053], B P t colony [400003], B.N. bhavan [400051], B.P.lane [400003], Bandra West [400050], Bandra(east) [400051], Bangur Nagar [400090], Bazargate [400001], Best Staff colony [400012], Bharat Nagar [400007], Bhawani Shankar [400028], Borivali [400091], Borivali East [400066], Borvali West [400092], C G s colony [400013], Central Building [400020], Century Mill Chakala Midc [400093], Chamarbaug [400012], Charkop [400067], Chaupati [400004], Chinchbunder [400009], Chinchpokli [400011], Churchgate [400020], Colaba [400005], Cotton Exchange [400033], Cumballa Hill [400026], Dadar [400014], Dahisar [400068], Danda [400052], Daulat Nagar [400066], Delisle Road [400013], Dharavi [400017], Dockyard Road [400010], Dr Deshmukh marg [400026], Falkland Road [400008], Girgaon [400004], Gokhale Road [400028], Goregaon [400062], Goregaon East [400063], Government Colony [400051], Gowalia Tank [400026], Grant Road [400007], H.M.p. school [400058], Haffkin Institute [400012], Haines Road [400011], Hajiali [400034], Hanuman Road [400057], High Court bulding [400032], Holiday Camp [400005], Irla [400056], Ins Hamla [400095], International Airport [400099], J.B. nagar [400059], J.J.hospital [400008], Jacob Circle [400011], Jogeshwari East [400060], Jogeshwari West [400102], Juhu [400049], Kalachowki [400033], Kalbadevi [400002], Kamathipura [400008], Kandivali East [400101], Kandivali West [400067], Kapad Bazar [400016], Ketkipada [400068], Khar Colony [400052], Kharodi [400095], Kherwadi [400051], Kidwai Nagar [400031], L B s n e collage [400033], Lal Baug [400012], Liberty Garden [400064], M A marg [400008], M.P.t. [400001], Madh [400061], Madhavbaug [400004], Magthane [400066], Mahim [400016], Malabar Hill [400006], Malad [400064], Malad East [400097], Malad West dely [400064], Mandapeshwar [400103], Mandvi [400003], Mantralaya [400032], Marine Lines [400020], Marol Bazar [400059], Masjid [400003], Matunga Railway workshop [400019], Mazgaon [400010], Mori Road [400016], Motilal Nagar [400104], Mumbai Central [400008], Mumbai[400001], N . s.patkar [400007], Nagardas Road [400069], Nagari Niwara [400065], Naigaon [400014], Nariman Point [400021], New Prabhadevi road [400025], New Yogakshema [400021], Noor Baug [400003], Null Bazar [400003], Opera House [400004], Orlem [400064], Oshiwara [400102], Parel [400012], Parel Rly work shop [400003], Prabhadevi [400025], Princess Dock [400009], Rajbhavan [400035], Rajendra Nagar [400066], Ramwadi [400002], Ranade Road [400028], Rani Sati marg [400097], Reay Road [400033], S R p f camp [400060], S Savarkar marg [400028], S V marg [400007], S. c. court [400002], S. k.nagar [400066], Sahar P & t colony [400099], Santacruz Central [400054], Santacruz P&t colony [400029], Santacruz(east) [400055], Santacruz(west) [400054], Secretariate [400032], Seepz [400096], Sewri [400015], Sharma Estate [400063], Shivaji Park [400028], Shroff Mahajan [400002], Stock Exchange [400001], Tank Road [400033], Tardeo [400007], Thakurdwar [400002], Tulsiwadi [400034], V J b udyan [400027], V K bhavan [400010], V.P. road [400052], V.W.t.c. [400005], Vakola [400055], Vesava [400061], Vidyanagari [400098], Vileeparle (east) [400057], Vileparle(west) [400056], Wadala [400031], Worli [400018], Worli Colony [400030], 400701[Navi Mumbai], 400602[Thane]."
      CityTextLB="Locations Offered"
      CityTextL=" : Data Analytics course training in Mumbai, Data Analytics course training in Thane, Data Analytics course in Bhandup, Data Analytics Training in Chembur, Data Analytics course institute in Powai, Data Analytics course in Tehsil, Data Analytics training in Ghatkopar, Data Analytics institute in Sion, Data Analytics certification in Shivaji Nagar, Data Analytics Analytics in Mulund, Data Analytics training in Sewri, Data Analytics institute in Kannamwar nagar, Data Analytics course in Parel, Data Analytics certification in Anushakti Nagar, Data Analytics Training in Sakinaka, Data Analytics institute in kharodi, Data Analytics certification in Madh, Data Analytics course training in malad, Data Analytics course training in Andheri, Data Analytics training in Coal Bunder, Data Analytics institute in Dharavi, Data Analytics certification in Worli, Data Analytics course in Aswini, Data Analytics training in Goregaon, Data Analytics institute in Kandivali, Data Analytics course in Borivali, Data Analytics certification in juhu, Data Analytics training in Marol Naka, Data Analytics institute in Jogheswari, Data Analytics certification in vakola, data Analytics course in Bandra, Data Analytics training in Kurla, data Analytics course training in navi mumbai, data Analytics course training in Kalyan.
      "
      />
      </main> 
    </div>
  )
}