import { React, useState } from "react";
import styles from "./CitiesRight.module.css";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import YoutubeVideo from "../../YoutubeVideo/YoutubeVideo";


const CitiesRight = ({
  ProgramHead1,
  ProgramHead15,
  ProgramHead16,
  ProgramHead17,
  ProgramHead18,
  ProgramHead19,
  ProgramHead20,
  ProgramHead2,
  ProgramBot14,
  ProgramBot15,
  ProgramBot16,
  ProgramBot17,
  ProgramBot18,
  ProgramHead3,
  ProgramHead4,
  ProgramHead5,
  ProgramHead6,
  ProgramHead8,
  ProgramHead9,
  ProgramHead10,
  ProgramHead11,
  ProgramHead12,
  ProgramHead13,
  ProgramHead14,
  ProgramBot6,
  ProgramHead7,
  ProgramBot8,
  ProgramBot9,
  ProgramBot10,
  ProgramBot11,
  ProgramBot12,
  ProgramBot13,
  ProgramBot1,
  ProgramBot2,
  ProgramBot3,
  ProgramBot31,
  ProgramBot32,
  ProgramBot4,
  ProgramBot5,
  ProgramBot51,
  DomainHead1,
  DomainHead2,
  DomainHead3,
  DomainHead4,
  DomainHead5,
  DomainHead6,
  DomainHead7,
  DomainBot1,
  DomainBot2,
  DomainBot3,
  DomainBot4,
  DomainBot5,
  DomainBot6,
  DomainBot7,
  DomainBot8,
  DomainBot9,
  DomainBot10,
  DomainBot11,
  DomainBot12,
  AlumniHead1,
  DomainList1,
  DomainList2,
  DomainList3,
  DomainList4,
  DomainList5,
  DomainList6,
  DomainList7,
  DomainList8,
  DomainList9,
  DomainList10,
  CertificationHead1,
  CertificationHead2,
  CertificationHead3,
  CertificationBot1,
  CertificationBot2,
  CertificationBot3,
  CertificationBot4,
  CertificationBot5,
  CertificationBot6,
  CertificationBot7,
  src,
  ModuleHead1,
  ModuleHead2,
  ModuleHead3,
  ModuleBot1,
  ModuleBot2,
  ModuleBotL21,
  ModuleBotL22,
  ModuleBotL23,
  ModuleBot21,
  ModuleBot3,
  ModuleBot4,
  ModuleBot41,
  ModuleBot42,
  ModuleBot43,
  ModuleBot44,
  ModuleBot45,
  syllabush1,
  syllabusb1,
  SyllabusBotlist11,
  SyllabusBotlist12,
  SyllabusBotlist13,
  SyllabusBotlist14,
  SyllabusBotlist15,
  SyllabusBotlist16,
  syllabush2,
  syllabusb2,
  SyllabusBotlist21,
  SyllabusBotlist22,
  SyllabusBotlist23,
  SyllabusBotlist24,
  SyllabusBotlist25,
  SyllabusBotlist26,
  syllabush3,
  syllabusb3,
  SyllabusBotlist31,
  SyllabusBotlist32,
  SyllabusBotlist33,
  SyllabusBotlist34,
  SyllabusBotlist35,
  SyllabusBotlist36,
  syllabush4,
  syllabusb4,
  SyllabusBotlist41,
  SyllabusBotlist42,
  SyllabusBotlist43,
  SyllabusBotlist44,
  SyllabusBotlist45,
  SyllabusBotlist46,
  syllabussrc,
  JobHead1,
  JobBot1,
  JobBot2,
  JobHead2,
  JobBot7,
  JobHead3,
  JobBot8,
  JobHead5,
  JobBot9,
  JobBot10,
  JobHead6,
  JobBot11,
  JobBot3,
  JobHead4,
  JobBot4,
  JobBot5,
  JobBot6,
  ProgramBotItaliic105,
  ProjectsBot1,
  ProjectsBot2,
  ProjectsBot31,
  ProjectsBot32,
  ProjectsHead1,
  ProjectsHead2,
  ProjectsHead3,
  AlumniBot1,
  src1,
  src2,
  src3,
  src4,
  ProjectsH1,
  ProjectsH2,
  ProjectsH3,
  ProjectsH4,
  Projectsp1,
  Projectsp2,
  Projectsp3,
  Projectsp4,
  Asrc1,
  AlumniH1,
  Alumnip1,
  Asrc2,
  AlumniH2,
  Alumnip2,
  Asrc3,
  AlumniH3,
  Alumnip3,
  Asrc4,
  AlumniH4,
  Alumnip4,
  Courselink1,
  Courselink2,
  Courselink3,
  Courselink4,
  Courselink5,
  Courselink6,
  Courselink7,
  Courselink8,
  Course1,
  Course2,
  Course3,
  Course4,
  Course5,
  Course6,
  Course7,
  Course8,
  Domainlink1,
  Domainlink2,
  Domainlink3,
  Domainlink4,
  Domainlink5,
  Domainlink6,
  Domainlink7,
  Domainlink8,
  Domainlink9,
  Domainlink10,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  fullStackCity,
  ProgramBot61,
  ProgramBot62,
  ProgramBot101,
  ProgramBot102,
  ProgramBot103,
  ProgramBot104,
  ProgramBot105,
  ProgramBot106,
  ProgramBot161,
  ProgramBot162,
  ProgramBot163,
  ProgramBot164,
  ProgramBot165,
  ProgramHead21,
  ProgramBot19,
  ProgramBot20,
  ProgramBot21,
  jobOutlookText,
  jobOutlooklink,
  ProgramBotItaliic31,
  cityText,
  cityTextDSChennai,
  cityTextDSPune,
  cityTextDSHyderabad,
  cityTextDSDelhi,
 
  cityTextDSmumbai

  
}) => {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(!read);
  };
  return (
    <section className={styles.CitiesRightHead}>
      <div id="Program">
        <div className={styles.CitiesRightSpan}>
          <span>About The Program</span>
        </div>
        {/* {cityTextDAbangalore ? ("") : ("")} */}

        {cityTextDSmumbai ? (
            <div className={styles.CitiesRightInner}>
            <p>
            Learnbay provides an exceptional <b>data science course in Mumbai</b> taught by renowned 
            industry professionals. These trainers come from reputed MNCs, making Learnbay 
            a reliable choice for those looking to learn data science. Both tech and non-tech
             applicants who want to make a career switch can also choose this course. 
             Learnbay offers it online as well as in hybrid mode. </p>
 
              <p>Our courses are created by professionals having in-depth knowledge of Data Science.
                 They are designed to be simpler to understand for people unfamiliar with
                  coding and analytical methods. The focus is always on hiring the best data science 
                  subject matter experts to design course modules.</p>
 
               <p>Learnbay’s <b>data science course in Mumbai</b> is intended to help working individuals transition
                 smoothly into a new job. The program also offers industry-based practical training
                  in a well-supervised learning environment. It has been specially created to train 
                  professionals for the growing need for data scientists in the commercial sector.</p>
 
               <p>
               You will receive the greatest and most reliable <b>online data science training in Mumbai</b> at Learnbay,
                which is created to match the expectations of the current competitive job market. 
                Learnbay's <b>data science course in Mumbai</b> is a great option for people wishing
                 to succeed in this sector because of the dramatic rise in the production and use of data
                  in the twenty-first century. 
               </p>
 
               <p>
               There are many benefits to choosing <b>online data scientist training in Mumbai</b>. 
               With more data being produced daily, corporations largely depend on data science, 
               and Mumbai is quickly becoming one of India's top job hubs. As a result, Mumbai 
               offers a variety of opportunities for <b>online data science training</b>. However, when 
               securing guaranteed job placement, the list of reliable options becomes shorter. Moreover, 
               considering the cost-effectiveness of the course, the list of reliable options 
               shrinks even further. 
               </p>
 
               <p>In Mumbai, data science has become incredibly popular in recent years. 
                With a 31% share of job vacancies, Mumbai has emerged as India's second-largest 
                hotspot for analytics and data science jobs, according to recent research by 
                Analytics India Magazine. The survey also notes a 45% growth in demand for data scientists
                 in Mumbai over the course of the previous year. These figures emphasize the significance 
                 of obtaining top-notch <b>data science training in Mumbai</b> to satisfy the rising demand for 
                 qualified specialists.</p>

                 <p>We cover the data science course using various modules, some of which are 
                  mentioned below: </p>
 
               <ul>
                 <li>Cohort Orientation  </li>
                 <li>Special Programming Classes</li>
                 <li>Basic Python Programming</li>
                 <li>Special Python Programming</li>
                 <li>Statistics</li>
                 <li>Machine Learning </li>
                 <li>SQL</li>
                 <li>Tableau</li>
                 <li>Deep Learning</li>
               </ul>
 
               <p>The course duration of the online <b>Data Science training in Mumbai</b> is 250+ hours. 
                Our trained professionals will tutor you for almost 9 months. </p>
 
               <p>The structured course consists of <b>4 terms.</b></p>
 
               <b>Module 0: Preparatory Session </b>
 
               <p>This module helps you familiarize yourself with the basics of Data Science and Machine Learning. 
                 It is a preliminary phase to help individuals, particularly non-programmers, become comfortable
                 with the basics of maths, programming, and data science foundation. It covers basic Python And R, 
                 Basic Mathematics, Essential Statistics for Data Science, Introduction to Anaconda, Jupyter notebook, 
                 Git and GitHub for data science, and other practical materials. </p>
 
               <p>
               Module 0 will teach you the basics of programming, including the flavors of Python,
                introduction to Git, GitHub, and memory management in Python. Learners will also get 
                a brief knowledge of the fundamentals of statistics, including the mean, median, 
                and mode. This module is for those with a non-technical background or those working in 
                the non-IT Sector. Some tools covered in Module 0 are Anaconda, Jupyter, Git, and GitHub. 
               </p>
 
               <h2>Term 1 - Python for Data Science </h2>
               <b>Module (1) - Python Programming </b>
 
               <p>
               This module, which includes full-time, focused training sessions delivered through {" "}
               <b>live instructor-led online training</b>, is an important part of the course. 
               It digs into Python programming foundations, a crucial skill for anyone looking to start 
               a career as a modern data scientist. During this module, you will learn about fundamental 
               programming ideas, Python data types, functions, modules, and libraries like Numpy and Pandas.
                Additionally, you will participate in case studies using Python libraries and show how these 
                tools are applied in actual situations. You will have a strong foundation in Python programming 
                by the end of this module, giving you the knowledge and abilities needed to start working as 
                a data scientist.
 
               </p>
 
               <h2>Term 2 - Statistics and Machine Learning </h2>
               <b>Module (1) - Statistics  </b>
 
               <p>The next lesson, vital for data science, focuses on teaching fundamental and statistical ideas.
                 After this program, you will understand probability, inferential and descriptive statistics, exploratory
                  data analysis (EDA), and data processing. You will also have the chance to complete four practice
                   assignments relating to statistics to enrich your learning experience further. 
                   You can use your newly learned information in these practical exercises, promoting 
                   experiential learning. </p>
       
 
               <b>Module (2) - Machine Learning </b>
 
               <p>This module gives you access to the most current machine-learning methods and tools
                 necessary for building models and reaching wise conclusions. The advanced machine 
                 learning techniques covered in this subject include support vector machines, principal
                  component analysis (PCA), clustering, K-nearest neighbors (KNN) models, and regression 
                  and classification models. (SVM). Your instructor will walk you through 
                  each of these methods, giving you in-depth explanations and examples 
                  from the real world to help you understand. After finishing this subject, you'll be 
                  prepared to use cutting-edge machine-learning techniques to build solid models and 
                  analyze difficult data sets. </p>
  
 
                 <h2>
               <b>Term 3 - Data Science Tools</b>
             </h2>
             <p>
               <b>Module 1 - SQL</b>
             </p>
             <p>
               <b>Module 2 - Mongo DB </b>
             </p>
             <p>
               <b>Module 3 - Tableau</b>
             </p>
             <p>
               <b>Module 4 - PowerBI</b>
             </p>
             <p>
               <b>Module 5 - Big Data and Spark Analytics</b>
             </p>
             <p>
               <b>Module 6 - Time Series</b>
             </p>
             <h2>
               <b>Term 4: Artificial Intelligence Tools</b>
             </h2>
             <p>
               <b>Module 1 - Deep Learning using TensorFlow</b>
             </p>
             <p>
               <b>Module 2 - Natural Language Processing</b>
             </p>
             <p>
               <b>Module 3 - Model Training and Deployment using ( AWS GCP) </b>
             </p>
 
             <h2>Premium Features of Data Science Training in Mumbai </h2>
             <p>Some of the premium features of online data science training in Mumbai are</p>

             <ol type="1">
              <li><b>Live Interactive Classes:</b> Trained professionals take classes in the most interactive
                 and hassle-free way. </li>

              <li><b>One-on-one Mentorship:</b> You get a mentor who helps you throughout the process. You get assistance 
                till placements. </li>

              <li><b>Live Project Sessions:</b> These give you an idea of industry standards. An exclusive feature of 
              cloud lab is also available.</li>

              <li><b>Doubt Clearance Sessions:</b> After your live classes, you can take expert doubt clearance sessions 
              to clear any doubts. </li>

              <li><b>Resume Building Support:</b> Our experts teach you how to make a resume to get interviews in top MNCs and 
                product-based startups. </li>

              <li><b>Interview Preparation:</b> Learnbay trainers will equip you with the latest and in-demand interview Q&A to confidently
                 face the tricky MAANG interviews. Also, by participating in several mock interviews, our professionals
                  will assist you in improving your interview success rate and accelerating the hiring process.</li>
             </ol>
           
 
 
           <h2>Data Science Foundation Program in Mumbai with Placement Assistance  </h2>

           <ul>
            <li>This course enhances your learning potential with industry-specific training.</li>
            <li>It is good for learners who belong to a non-technical background. If you are a working professional looking 
              forward to switching your career, the foundation program will make it easy for you. </li>
            <li>This program’s fee is INR 75,000, excluding GST.</li>
            <h3>Highlights of the Data Science Foundation Program in Mumbai </h3>
            <li>This course offers an immersive and thorough learning experience, covering 
              a variety of important subjects and approaches in data science, with more 
              than 200 hours of live sessions.</li>
            <li>You get lifetime access to <b>recorded live classroom recordings</b>, allowing you to review and 
            solidify your understanding of key ideas at your own speed.</li>
            <li>Additionally, you will get to work on <b>offline live projects</b> in the project innovation lab as part 
              of the course,  giving you practical experience using data science techniques to solve real-world issues.</li>
            <li>The course involves 8+ hours of real-world industrial projects, heavy reading, and lab work.
               These projects will help you advance your knowledge and abilities while 
               giving you significant job experience.</li>
             </ul>
        
            <h2>Advance Data Science and AI Course in Mumbai with Placement Assistance </h2>
            <ul>
              <li>This program is ideal for students seeking in-depth instruction and a 
                deeper understanding of the field. It will help you advance your knowledge of data science.</li>

              <li>For anyone wishing to change careers or advance their skills, this extensive course 
                is meant to give a solid understanding of data science.</li>

              <li>This program is a cost-effective and accessible choice for anyone wishing to increase their
                 knowledge and proficiency in data science, costing only INR 95,000 + 18% GST.</li>

              <h3>Highlights of Advance Data Science and AI Course in Mumbai</h3>
              <li>250+ hours of rigorous training</li>
              <li>Assured Interview calls</li>
              <li>Premium mentoring by MAANG and MNC experts</li>
              <li>2 years flexible subscription of learning materials</li>
              <li>12+ real-time industrial projects</li>
            </ul>

         <h2>Data Science and AI program for Managers and Leaders in Mumbai with Placement Assistance </h2>

         <ul>
          <li>If you are a manager or a leader with over 8+ years of experience, this course is best suited for you. </li>
          <li>Managers in every organization must have a strong understanding of data science to make data-driven 
            decisions effectively and boost revenue growth.</li>
          <li>The course fee is INR 1,05,000, excluding GST.</li>

          <h3>Highlights of Data Science and AI Program for Managers and Leaders in Mumbai</h3>
          <li>Consists of 400+ hours of live sessions </li>
          <li>15+ real-time industrial projects</li>
          <li>Online sessions guided by professionals working in top MNCs</li>
          <li>A variety of financing options are available to make it more economical</li>
         </ul>

         <h2>Data Science and AI Master Program in Mumbai with Placement Assistance </h2>

         <ul>
          <li>Looking to become a specialized data scientist? Look no further than our comprehensive training, covering everything you need to succeed in this field.</li>
          <li>Our master's program in data science is designed to provide a thorough education in this rapidly-evolving field, with flexible scheduling options to suit your needs.</li>
          <li>Ready to take your data science skills to the next level? Our program will help you become an expert in this field with the knowledge and expertise you need to lead teams at top companies.</li>
          <li>Investing in your education is always a smart choice; our master's program in data science is no exception. With a course fee of INR 1,25,000 (excluding GST), it's an affordable option for anyone looking to advance their career in this exciting field.</li>

          <h3>Highlights of Data Science and AI Master Program in Mumbai with Placement Assistance</h3>
          <li>Consists of 500+ hours of live sessions </li>
          <li>35 LPA - 50 LPA salary package</li>
          <li>20+ real-time industrial projects. </li>
          <li>Practical covering of real-time industrial projects and case studies</li>

          </ul>
          <b>Note:</b> All data science courses at Learnbay come with the option of no-cost EMI.

          <h2>Data Science Trends in Mumbai </h2>
          <p>In Mumbai, the subject of data science is expanding quickly and has recently seen several trends. Artificial intelligence (AI) and machine learning (ML) across various businesses are among the most noticeable trends. Businesses are now using these technologies to analyze massive amounts of data to gain insights to help make better business choices.</p>

          <p>Another trend is the rising usage of cloud-based data processing and storage technology. Due to this development, businesses can process and store massive data efficiently and economically. A prominent trend in Mumbai has also been combining data science with other industries, such as healthcare and finance. </p>

          <p>The demand for talented data scientists is anticipated to grow as businesses rely on data-driven insights, making it a viable career choice for anyone wishing to enter the area.</p>

          <h2>Best Data Science Training Institute in Mumbai</h2>

          <p>The <b>best data science training institute in Mumbai</b> is <a href="https://www.learnbay.co/data-science-course-training-in-mumbai" target="_blank">Learnbay</a>. It offers <b>online data science 
            training</b> to give students a hands-on, business-based education. Some of the most knowledgeable 
            professionals in the field who work for premier MNCs teach the course. This guarantees that 
            it is current with the industry's most recent trends and innovations. It is additionally created 
            to satisfy the requirements of today's fiercely competitive job market, making it a solid option
             for anyone wishing to enter the field of data science.</p>

<p>Learnbay's course materials are created by experts and experienced professionals who have done a 
considerable study to simplify it for those new to coding and analytical approaches to learning. 
Additionally, Learnbay's data science course offers both theoretical and practical knowledge in a 
well-managed learning environment. The course has a high job placement rate and is specifically created 
to assist working professionals in making a successful career shift. It is also inexpensive, making it 
the perfect option for those who wish to master data science without going over budget. Learnbay has 
established itself as one of the best data science institutes in Mumbai with the help of all these qualities</p>

<p>Learnbay's course materials are created by experts and experienced professionals who have done a 
  considerable study to simplify it for those new to coding and analytical approaches to learning. 
  Additionally, <b>Learnbay's data science course</b> offers both theoretical and practical knowledge in a 
  well-managed learning environment. The course has a high job placement rate and is specifically 
  created to assist working professionals in making a successful career shift. It is also inexpensive,
   making it the perfect option for those who wish to master data science without going over budget. 
   Learnbay has established itself as one of the best <b>data science institutes in Mumbai</b> with the help 
   of all these qualities.</p>

     <h2>Why Choose Learnbay Data Science Training Institute in Mumbai?</h2>

     <ol type="1">
      <li><b>Affordability:</b> As one of India’s highly expensive cities, Mumbai’s professional
         training courses are higher. But the artificial intelligence and data science courses
          provided by Learnbay are comparatively much more affordable than the others. Sometimes,
           It might not seem cheaper to you if you compare only the price, but if you compare the 
           benefits, certainly it's the best option across Mumbai. 
        At Learnbay, we never compromise the quality of our data science certification course.</li> <br/>

      <li><b>Learning Flexibility:</b> With such an affordable and cost-effective course, you get flexible
         learning hours with our trainers and industry experts. And you can choose your instructor or
          change your instructor, depending on your personal preferences. Learnbay also offers 
          doubt-clearing sessions with industry-based MAANG experts and data 
          
          scientists. Keeping the preferences of learners in mind, Learnbay offers online as well
           as hybrid modes of teaching. Here you can opt and use Learnbay LMS on your mobile device,
            which will help you learn and get updated with the daily course on the go.</li> <br/>

        <li><b>Expertise:</b> Our instructors are working professionals with more than 8+ years of experience
           in the field, such as Senior Data Scientists, Machine Learning Engineers, AI Engineers,
            BI Developers, Big Data Architects, and Senior Data Analysts from top-class organizations.</li> <br/>

        <li><b>Promising Support:</b> Post-enrolment dedicated learning support is the most significant thing you should 
          look into while searching for the <b>best data science training institute in Mumbai</b>. We provide the 
          surety of 100% job assistance. We provide the maximum possible data science career support based on your 
          performance and ability. Apart from this, there are plenty of different courses to choose from on our website. 
          You can choose your custom-fit course based on your career stage and upcoming career goal. If someone lacks 
          coding knowledge, they can take additional basic coding classes.</li>
     </ol>

     <h2>Did You Know? </h2>

     <p>In Mumbai, data science is assuming greater importance. Companies now rely more on data science
       to help them make wise decisions due to the volume of data created daily. Worldwide data production 
       is predicted to reach a startling 463 exabytes by 2025. In comparison, just 5 exabytes of 
       data have been uttered by humans as a whole. As a result, Mumbai will see an increase in 
       demand for qualified data scientists. </p>

      <p>Additionally, data science is a profitable field; in Mumbai, the average <b>data scientist
         salary in Mumbai</b> is INR 10 lakhs. Learnbay offers the <b>best data science training in Mumbai</b>{" "} 
         if you're interested in a career in data science.</p>

      <p>The course is taught by some of the top professionals in the field and is meant to give students 
        practical, online, and industry-based training. Learnbay also provides offline project sessions for 
        <a href="https://www.learnbay.co/machine-learning-course-training-in-mumbai" target="_blank">machine learning</a> and <a href="https://www.learnbay.co/artificial-intelligence-ai-course-training-mumbai" target="_blank">artificial intelligence</a> courses in Mumbai.</p>

        
          </div>
        ) : ("")}


    

        


        {cityTextDSHyderabad ? (
           <div className={styles.CitiesRightInner}>
           <p>
            Learnbay provides the <b>Data Science Course in Hyderabad</b> to help you become an
            industry-competent data scientist. This IBM-certified course allows you to learn
            from scratch and according to the industrial requirements. The <b>Data Science Course</b>{" "}
            has been in high demand in recent years, and our course is designed to provide you 
            with current knowledge in the field. Our approach to practical and theoretical education
             provides a richer learning experience. Our <b>Data Science certification in Hyderabad</b>{" "}
             is cost-effective and even guarantees an interview at top MNCs and FinTech Startups. </p>

             <p>From programming to data visualization and statistics, the course curriculum helps 
              you to learn in-demand data science skills. The mentors help you every step of the 
              way to make sure you are learning the <b>Data Science course</b> according to industry standards.
               Even if you are a fresher, Leanbay has the best suited course for you.</p>

              <p>Learners enrolling in data science live classroom training are eligible for a Flexi Pass. 
                This means learners get 1.5 years of limitless independence to access learning materials.
                 You can make learning an exciting experience by setting up the calendar at your convenience.</p>

              <p>
              Once you complete our <b>Data Science course</b>, you will get an internationally recognized certificate 
              in collaboration with IBM. The certificate will validate your skills and acknowledge you in the IT Sector.
              Learnbay provides cost-effective and high-quality training to learners, making the process more compelling.
              In the 21st century, we are experiencing a technological outburst, and we inevitably need lots 
              of knowledge in this field to grow and develop our careers.   
              </p>

              <p>
              Our <b>Data Science learning modules</b> are customized according to your domain and industry requirements.
              A lot of learners take an active interest in learning from our modules because of our domain
              specialization feature. MNCs and top startups look for candidates updated with the latest knowledge 
              and market trends. This makes it important for learners to constantly upgrade their knowledge. 
              </p>

              <p>Learnbay’s Data Science course is covered using various modules, and all of 
                them are prepared according to the trending job market requirements. 
                Some of the modules that we offer are</p>

              <ul>
                <li>Cohort Orientation </li>
                <li>Special Programming Classes</li>
                <li>Basic Python Programming</li>
                <li>Special Python Programming</li>
                <li>Statistics</li>
                <li>Machine Learning </li>
                <li>SQL</li>
                <li>Tableau</li>
                <li>Deep Learning</li>
              </ul>

              <p>The <b>Data Science course in Hyderabad</b> has a duration of 250+ hours. 
                This means you will learn from our trained professionals for almost 9 months.</p>

              <p>The structured course consists of <b>4 terms.</b></p>

              <b>Module 0: Preparatory Session </b>

              <p>In the preparatory session of our <b>Data Science course</b>, 
                you will get a brief overview of data-related tools. The module will make it easy 
                for you to learn about particular real-time projects and capstone projects. 
                In the coming years, the data will have a lot more impact on job opportunities. 
                This module will give you the fundamental relevance of projects using data.
                 You will get a brief learning of data’s roles in business. </p>

              <p>
              Module 0 will teach you the basics of programming, including the flavors of Python,
               introduction to Git, GitHub, and memory management in Python. Learners will also get 
               a brief knowledge of the fundamentals of statistics, including the mean, median, 
               and mode. This module is for those with a non-technical background or those working in 
               the non-IT Sector. Some tools covered in Module 0 are Anaconda, Jupyter, Git, and GitHub. 
              </p>

              <h2>Term 1 - Python Programming </h2>
              <b>Module 1- Basics and Advanced Python</b>

              <p>
              It is a 50 hours term that covers the programming basics, environment setup, and Python
               Programming overview. Python is a vast programming language; learners can find all the
                important topics and subtopics covered in our module. It also introduces Jupyter notebook, 
                and basic Github commands for students to get a short introduction to the topic.
                 After the first few days, students will learn Strings, Decisions, Loop Control,
                  Python Data Types, Functions, and Modules. 

              </p>

              <p>
              Our module also covers File I/O Exceptional Handling and Regular Expression. 
              Data Analysis using NumPy and Pandas is another chapter that will teach you array creation, 
              basic operations, and data import into Python Pandas, among many others. After every module 
              is complete or a few chapters are over, learners take an assignment to access their knowledge and skills.
               The exercise consists of questions related to Python Programming and coding exercises on functions, Lambda, etc. 
              </p>

              <h2>Term 2 - Statistics and Machine Learning</h2>
              <b>Module 1 - Statistics </b>

              <p>This module covers the fundamentals of Math and probability. From learning about probability distribution
                 functions to learning about Baye’s theorem, you develop knowledge of how to solve problems involving probability.
                  It is a 30-hour term focusing on population vs sample, sample size, systematic sampling, convenience sampling,
                   and quotation sampling, among many other topics. </p>
              <p>
              Introduction to Statistics, Statistical Thinking, descriptive statistics, and inferential statistics
               are a few other topics that learners will be introduced to. Learnbay’s <b>data science course</b> teaches you matrices in Python,
                Element indexing, matrix multiplication, matrix transpose, data processing, and exploratory data analysis. 
                You will learn about data wrangling, pre-processing, and cleaning. We will cover the Problem-Solving Techniques 
                and Case Studies using Statistics in class from week 2. There will be a total of 4 practice sets and assignments from this module. 
              </p>

              <b>Module 2 - Machine Learning </b>

              <p>It is a 40-hour module covering the ins and outs of machine learning required to get a lucrative job offer. 
                From the definition, example, and importance of machine learning to gaining a deep knowledge of machine learning elements, 
                the module’s first chapter will introduce ML. You will learn how MAE, MSE, and RMSE are different from each other. 
                You will also learn how to use the Python library <b>Sklearn</b> to create the linear regression model and evaluate the model created. </p>
               
               <p>Data preprocessing and logistic regression models are important chapters when learning about Data Science. 
                This module covers these topics and helps learners learn the valuation metrics for classification models and K Nearest 
                neighbor models. The decision tree and random forest models are also part of this module. </p>

              <p>The term completes by giving students an in-depth understanding of all machine learning algorithms. 
                The real-time case studies for each algorithm help hone learners’ knowledge. </p>

                <h2>
              <b>Term 3: Data Science Tools</b>
            </h2>
            <p>
              <b>Module 1 - SQL</b>
            </p>
            <p>
              <b>Module 2 - Mongo DB </b>
            </p>
            <p>
              <b>Module 3 - Tableau</b>
            </p>
            <p>
              <b>Module 4 - PowerBI</b>
            </p>
            <p>
              <b>Module 5 - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module 6 - Time Series</b>
            </p>
            <h2>
              <b>Term 4: Artificial Intelligence Tools</b>
            </h2>
            <p>
              <b>Module 1 - Deep Learning using TensorFlow</b>
            </p>
            <p>
              <b>Module 2 - Natural Language Processing</b>
            </p>
            <p>
              <b>Module 3 - Model Training and Deployment using ( AWS GCP) </b>
            </p>

            <h2>Premium Features of Data Scientist Course in Hyderabad</h2>
            <p><b>100% Live Online Classes:</b> You can take live classes while sitting at the comforts of your home. 
            You can ask any doubts in the live sessions. Our experts help and assist you at every step of your learning curve. </p>

            <p><b>Dedicated Placement Cell:</b> The placement cell handles it all, from resume preparation to preparing 
              you for job interviews. It makes you confident enough to crack the interviews. You get assured job 
              referrals in product-based MNCs too. </p>

            <p><b>IBM Certified Capstone:</b> Learnbay allows you to work on domain-specialized capstone projects with IBM.
               After successfully completing your course, Learnbay will provide you with a globally recognized certificate
                in collaboration with IBM. The dual certification and global accreditation sets us apart from others. </p>

            <p>
            <b>1:1 Personal Mentorship:</b> Our experts are always available if you have any doubts. Even if you wish to clear your doubts
             just after the live classes, you can take 1:1 doubt sessions with them. We also have that option if you wish to take
              classes from multiple mentors. You can even change your batches. 
            </p>

            <p><b>Special Classes for Beginners:</b> Fresher or a working professional, you have come to the right place if you wish 
            to make a career in data science. We have curated special programming classes for you to learn from scratch.</p>

            <p><b>Project Innovation Lab:</b> Our <b>Data Science course in Hyderabad</b> has a project innovation lab where 
              you can work on industry-certified projects offline. You get a chance to collaborate with project 
              mentors and other learners. The hands-on experience across several domains is an added advantage. </p>

          <h2>Other Courses We Offer in Data Science</h2>
          <p><b>Data Science Foundation Program:</b> : The basic program is designed for beginners with 
          a non-IT background. The program introduces you to the basics of Python and how Anaconda and 
          Jupyter Notebook works. The course gives you rigorous training of 200+ hours at just ₹75,000 + 18% GST.</p>

          <p><b>Advanced Data Science and AI Program:</b> The advanced course offers in-depth knowledge about Data Science.
           Looking forward to switching your domain? Look no further. The advanced course 
           help you to gain a deeper understanding. You get 250+ hours of learning in 
           this course at just ₹95,000 + 18% GST.  </p>

          <p><b>Data Science and AI program for Managers and Leaders:</b> This course is best suited for you if you have an experience 
          of 8+ years. The experts at Learnbay help you in a smooth transition throughout the process. 
          The domain-specific projects give you an edge over the others. The program fee 
          is just  ₹1,05,000 + 18% GST.</p>

          <p><b>Data Science and AI Master Program:</b> This course is aimed at working professionals who wants
           to get premium mentoring and hands-on experience in real-world projects. 
           The custom-fit training will help you learn Data Science and AI effectively and efficiently.
            The course gives you rigorous training of 500+ hours at just ₹1,25,000 + 18% GST.</p>

             <h2>Available Domains at Learnbay Data Science Course in Hyderabad</h2>
             <p><b>Data Science in BFSI Domain:</b> It helps you understand the finance sector’s best practices. 
              Learners get to work on real-time projects using live data. The data is taken from companies
               like JP Morgan and HDFC. it provides a helping hand when building recommendation systems or predicting
                the upcoming stock market predictions.</p>

              <p><b>Data Science in Sales, Marketing, and HR domain:</b> Data Science in this domain help to understand data-driven
                 consumer and market insights. The hands-on Capstone projects help you get involved with business management’s 
                 functional aspects. </p>

                <p><b>Data Science in the Healthcare domain:</b> Data Science courses help learners incorporate future-proof practices.
                 If you are a working professional having experience in this field, you will be offered a maximum salary hike and job security. </p>
                
              <p>
              <b>Data Science in Retail and E-commerce domain:</b> The retail sector is one of the fastest-growing 
              businesses in the 21st century. The business requirements and functionalities can be better 
              understood by incorporating Data Science. 

              </p>

              <p><b>Data Science in Media and Hospitality Domain:</b> This course helps you work on projects implemented 
                for business growth. You get better insights into personalized marketing and revenue management. 
                Non-programmers can opt for special classes. </p>

                <p><b>Data Science in Manufacturing Domain:</b> The course gives you an insight into the applications of data science
                   in the manufacturing and automotive domain. You also learn 
                   about robotics, computer-aided design, and nanotechnology. </p>

                <p><b>Data Science in Energy, Oil, and Gas domain:</b> This course helps you better understand how industry expands 
                exponentially with the help of AI. You get a real-time recording of drilling data. </p>

                <p>Learnbay provides you with flexible learning options. You can opt for a <b>Data Science Course
                   in Hyderabad</b> on weekdays or weekends. You can choose your timings and sessions if you want to.</p>

                <p>
                The average <b>data scientist salary in Hyderabad</b> is ₹10,00,000 per annum.
                 Wondering which is the <b>best Data Training Institute in Hyderabad</b>? Well, look no further. 
                 Learnbay’s customized and domain-specialized courses give you an edge over the others. 
                 Choose <a href="https://www.learnbay.co/data-science-course-training-in-hyderabad" target="_blank"  style={{ color: "#2D9CD7", fontWeight: "600" }}>Learnbay Institute</a> to 
                 be a part of your learnings, and trust us, you’ll not regret it. 
                </p>

              <p></p>
         </div>
        ) : ("")} 


        {cityTextDSPune ? (
          <div className={styles.CitiesRightInner}>
            <p>
            The <b>Data Science Course in Pune</b> provided by Learnbay promotes live training by industrial experts in Data Science. 
            The online training is structured keeping in mind the local industry needs. With the skills and expertise gained, 
            you can get a lucrative and ever-growing career in this field. Data Science, Artificial Intelligence,
             and Machine Learning are continuously transforming the business landscape in the 21st century, and Learnbay’s{" "}
            <b>Data Science Training in Pune</b> is tailored to meet your needs. It’s good to deeply understand a subject to get 
            a rewarding career. 

            </p>
            <p>
            Industry experts design our Data Science course in the best way to promote both
             theoretical and practical knowledge cost-effectively. Data Science is one of 
             the most rewarding professions in the 21st Century. The course is customized according 
             to the current high demand for data scientist roles. 

            </p>
            <p>
            Whether a fresher or a software professional, you will get live high-quality training from our experts. 
             The technological outburst has made it necessary to have the required knowledge and skills to operate 
             in the technology sector. Because massive amounts of data are being produced daily in different sectors,
              it has become an essential part of almost every company. 
            </p>
            <p>
            A data scientist uses modern tools and techniques to drive meaningful information and make decisions.
             Learnbay’s <b>Data Science Course in Pune</b> is designed to help you learn about Data Science from scratch 
             according to your domain. Research shows that the top skills required to become a 
             data scientist are analysis, communication, statistics, deep learning, machine learning, 
             and artificial Intelligence, among many others. 

            </p>
            <p>
            Our <b>Data Science course in Pune</b> is a two to a three-year subscription program. 
            We have collaborated with IBM to provide a <b>data science certification course</b>. 
            They are globally recognized and guarantee 100% job assistance. One-on-one, personalized, 
            live doubt-clearing sessions with skilled MAANG data scientists make Learnbay different from the rest.
             Its unique cloud lab feature provides access to live Data science projects from MNCs
              and even offers guidance from industrial leads. This way, you can learn data science without leaving your job.
            </p>
            <p>
            Learners at Learnbay get a list of specialized domains. To work as a data scientist, you must choose the right domain. 
            The career experts at Learnbay analyze the profiles and suggest the best course according to your domain.
             It helps you to learn the necessary skills with a greater degree of expertise. 

            </p>
            <p>
            A Forbes study has found that 2.5 quintillion bytes of data are created each passing day. 
            It is where the role of a data scientist comes in. They are responsible for analyzing 
            and organizing such huge data for organizations. It, in turn, creates ample opportunities. 
            </p>
              <p>
              The <b>data science learning modules</b> you get at Learnbay are customized according to the domain 
              you have chosen while keeping in mind the industry requirements.  The course provided by us 
              will not only make you a skilled data scientist but will also make you an expert in particular fields.
               Learnbay plays an important role since you get to choose your specialized domain. 

            </p>
            <p>
            The <b>data science course</b> is a complete training course covered using multiple modules. 
            Learners from a non-technical background receive special coding classes to get along with 
            learners who know the technicalities. <br/>
            
            The modules include 

            </p>
            <ul>
              <li>Cohort Orientation</li>
              <li>Special Programming Classes</li>
              <li>Basic Python Programming</li>
              <li>Advanced Python Programming </li>
              <li>Statistics and Machine Learning </li>
              <li>SQL</li>
              <li>Big Data and Spark Analytics</li>
              <li>Deep Learning</li>
              <li>NLP </li>
              <li>Deployment (AWS + GCP)</li>
            </ul>
            <p>
              <b>
                The Data Scientist course in Pune has 9 months (300+ hours)
                duration.
              </b>
            </p>
            <p>
              The Structured <b>data science course</b> consists of 4 - Terms:
            </p>
            <p>
              <b>Module 0: Cohort Orientation + Special Programming Classes</b>
            </p>
            <p>
            In this module, learners get a brief introduction to data-related tools. 
            The module helps you easily learn about particular real-time projects and Capstone projects. 
            Learners also gain a thorough knowledge of the fundamental relevance of projects using data
             and the role of data in business. The cohort orientation also teaches the significance of data in decision-making.
              You learn data utilization to enhance industrial operations and management. 

            </p>
            <p>
            Special Programming classes are designed to teach learners the types of code editors in Python, 
            introduction to Anaconda and Jupyter notebook, Flavors of Python, Introduction to Git, Github, 
            and Python Fundamentals. You also learn the difference between Source Code vs. Byte Code vs. Machine Code. 
            The fundamentals of statistics help them to learn to mean, median, mode, standard deviation, average, probability, 
            and introduction to linear algebra. 

            </p>
            <h2>
              <b>Term 1 - Python Programming (Basic and Advanced)</b>
            </h2>
            <p>
              <b>Module 1</b>
            </p>
            <p>
              This module provides full-time dedicated sessions. Experts carry
              out the sessions through Live Instructor-Led Online Training. The
              module equips you with knowledge about program basics and
              environment setup, python programming overview, strings,
              decisions, and loop control Python data types, functions and
              modules, File I/O and Exceptional Handling and Regular Expression,
              Data Analysis using NumPy, Data Analysis using Pandas, Data
              Visualization using Matplotlib, and Data Visualization using
              Seaborn.
            </p>
            <h2>
              <b>Term 2: Statistics and Machine Learning</b>
            </h2>
            <p>
              <b>Module 1: Statistics</b>
            </p>
            <p>
            This is an essential module focusing on different statistics and data processing methods. 
            In this module, you learn about the fundamentals of Maths and probability, an introduction to statistics,
             and statistical learning. The modules also cover Linear Algebra, Data Processing,
              Exploratory Data Analysis, and EDA. It consists of 4 practice sets and assignments.
            </p>
            <p>
              <b>Module 2: Machine Learning</b>
            </p>
            <p>
            In this module of Learnbay’s data science course, you learn about regression and classification models, 
            linear regression models, data preprocessing, evaluation metrics for classification models, Decision Tree Models,
             Random Forest Models, Hyperparameter Tuning, and Naive Baye’s model. The module also provides in-depth 
             knowledge about K means and Hierarchical Clustering, Principal Component Analysis, and Support Vector Machine. 
            </p>
            <h2>
              <b>Term 3: Data Science Tools</b>
            </h2>
            <p>
              <b>Module 1 - SQL</b>
            </p>
            <p>
              <b>Module 2 - Mongo DB </b>
            </p>
            <p>
              <b>Module 3 - Tableau</b>
            </p>
            <p>
              <b>Module 4 - PowerBI</b>
            </p>
            <p>
              <b>Module 5 - Big Data and Spark Analytics</b>
            </p>
            <p>
              <b>Module 6 - Time Series</b>
            </p>
            <h2>
              <b>Term 4: Artificial Intelligence Tools</b>
            </h2>
            <p>
              <b>Module 1 - Deep Learning using TensorFlow</b>
            </p>
            <p>
              <b>Module 2 - Natural Language Processing</b>
            </p>
            <p>
              <b>Module 3 - Model Training and Deployment using ( AWS GCP) </b>
            </p>
            <h2>
              <b>Premium Features of Data Scientist Training in Pune</b>
            </h2>
            <ol type="1">
            <li>
              <b>Classroom Session </b>: What’s better than getting
              assistance both in online and offline mode? Experts from MAANG and
              MNCs help you throughout the process. You can also attend
              classroom sessions.{" "}
            </li>
            <li>
              <b>One-on-One Dedication </b>: Every learner gets a live
              interactive session with the experts. An industry expert guides
              every session. Technical support is provided to the learners
              around the clock.
            </li>
            <li>
              <b>Two-year Subscription </b>: You can get unlimited access to
              your learning materials and project sessions. If you are a
              professional, you can switch between weekends and workdays. You
              get the flexibility to create your learning calendar.
            </li>
            <li>
              <b>Guaranteed Interview Calls </b>: We partner with 250+ Top
              MNCs & FinTech Startups. Many of our learners have grabbed
              placements in their dream companies. The placement cell is
              dedicated to ensuring a smooth career transition for you.
            </li>
            <li>
              <b>Mock Interviews </b>: Learnbay allows you to participate in
              mock interviews to sharpen your skills. This ensures an
              improvement in your interview success rate. It also builds your
              confidence to ace the interviews in your dream company.
            </li>
            </ol>
            <h2>
              <b>Data Science Foundation Program in Pune with Placement Assistance</b>
            </h2>
            <ul>
              <li>This program is designed for beginners who want to kick-start their career in Data Science. </li>
              <li>This course introduces you to Data Science and Python Programming. </li>
              <li>The course also clearly explains Data Analytics vs. Business Analytics vs. Big Data. </li>
              <li>You also work on hands-on projects, which will help you get real-world experience.</li>
              <li> The course provides a rigorous learning experience at just ₹75,000 + 18% GST. </li>
            </ul>
   
    <h3>Highlights of the Data Science Foundation Program in Pune</h3>
      <ul>
        <li>Consists of 200+ hours of live sessions</li>
        <li>Lifetime accessibility of recorded live classroom videos</li>
        <li>Offline live project experience in the project innovation lab</li>
        <li>8+ real-time industrial projects</li>
      </ul>

      <h2>Advance Data Science and AI Program in Pune with Placement Assistance</h2>
      <ul>
        <li>If you wish to dive deep into the field of Data Science, this course is the right fit for you.</li>
        <li>The experts at Learnbay will help you develop solid knowledge.</li>
        <li>The course teaches you Deep Learning and Neural Networks. </li>
        <li>You can choose this if you want to switch your domain. </li>
        <li>You get rigorous hours of learning at just ₹95,000 + 18% GST.</li>
      </ul>

      <h3>Highlights of Advance Data Science Course and AI Program in Pune</h3>

      <ul>
        <li>Consists of 250+ hours of live sessions</li>
        <li>Global recognition from IBM </li>
        <li>Career assistance for professionals</li>
        <li>Capstone project completion certificate from IBM</li>
        <li>12+ real-time industrial projects. </li>
      </ul>

      <h2>Data Science and AI program for Managers and Leaders in Pune with Placement Assistance</h2>
      <ul>
        <li>This <b>data science course</b> is best suited if you are a professional with over 8 years of experience in any field.</li>
        <li>Our industrial experts help you make a switch as a professional and not a fresher. </li>
        <li>The domain-specific industrial projects help you to break through the crowd and stand out among the rest.</li>
        <li>You can also attend classroom sessions and get assistance in online and offline project sessions.</li>
        <li>The program fee is just ₹1,05,000 + 18% GST. </li>
        <li>Our experts make you interview-ready, and the placement cell ensures you get guaranteed 
          interview calls from FinTech Startups and Top MNCs. </li>
      </ul>

      <h3>Highlights of Data Science and AI Program for Managers and Leaders in Pune</h3>
      <ul>
        <li>Consists of 400+ hours of live sessions</li>
        <li>15+ real-time industrial projects</li>
        <li>Online sessions guided by professionals working in top MNCs</li>
        <li>Variety of financing options are available to make it more economical</li>
      </ul>

      <h2>Data Science and AI Master Program in Pune with Placement Assistance</h2>
      <ul>
        <li>This course covers all the skills a data scientist must possess. </li>
        <li>The MAANG and MNC experts guide the working professionals having experience in any domain.</li>
        <li>The trainers have 8+ years of experience.</li>
        <li>The course teaches you data structure algorithms, Business Analytics, and the basics. </li>
        <li>To make your experience relevant, Leanbay’s Data Science Course helps you work on domain-specific industrial projects.</li>
        <li>The 3-year subscription gives you limitless access to learning materials. </li>
        <li>The course comes at just ₹1,25,000 + 18% GST. </li>

        <h3>Highlights of Data Science and AI Master Program in Pune</h3>
        <li>You can opt for either a weekday or a weekend batch</li>
        <li>Consists of 500+ hours of live sessions</li>
        <li>Practical covering for real-time industrial projects</li>
        <li>20+ real-time industrial projects</li>
      </ul>

      <h2>Learnbay’s Domain-Specific Data Science Course in Pune</h2>
      <p>Some available domains are </p>

      <ol type="1">
        <li><b>Data Science for Sales and Marketing Professionals:</b> Without domain expertise,
           your data science abilities are useless. From inventory management to merchandising,
            data science applies in most areas of sales and marketing. Targeting valuable customers has become an easy task now. </li>
        <li><b>Data Science for HR:</b> Did you know you can reduce employee turnover rates by 
            having a data scientist on your team? Online data science training helps you 
            find opportunities to boost employee engagement, creating an effective workforce.</li>
        <li><b>Data Science for Healthcare Workers:</b> Data Science has paved its way in the healthcare domain as well.
           From predicting diseases early to collecting and sending real-time updates to doctors, it has helped 
           devise treatments efficiently. </li>
        <li><b>Data Science in BFSI Domain:</b> Data Science in the BFSI domain help in fraud detection,
           enhancing customer support, and improving operational efficiency. A Data Science course helps you 
           gain an advantage over others in the same field. </li>
        <li><b>Data Science in Manufacturing, Automotive, and Telecom Domain:</b> The <b>online data science training</b>{" "}
           in this domain helps you learn how data is collected in different manufacturing settings. 
           It also gives you a brief knowledge of the telecom sector’s network performance improvement. </li>
   
        <li><b>Data Science in Oil, Gas, and Energy Domain:</b> A <b>data science course</b> in this domain
         teaches you the role of analytics and data science in the energy sector and oil and gas industry. </li>

         <li><b>Data Science in Media, Hospitality, and Transport Domain:</b> This course teaches you everything
           from identifying hotel issues to satisfying customer needs by improving business strategies. </li>
      </ol>

      <h2>Data Science Trends in Pune </h2>

      <p>The experts have predicted that by 2026, the industry will have 1105 million data scientist jobs. 
        Both private and public sector firms need data scientists to function efficiently. 
Learnbay provides its learners with flexible training options. You can choose online or offline training 
sessions to avail the <b>data science course in Pune</b>. You can also access recorded lecture videos to learn anytime you want. 
</p>

<h2>Best Data Science Training Institute in Pune</h2>

<p>Ever found yourself wondering about the <b>Best Data Science Training Institute in Pune</b>? Well,
   this is the right place for you. Learnbay provides you with live training at affordable prices. 
   Want to stand out in your domain? Take the course by <a href="https://www.learnbay.co/data-science-course-training-in-pune" 
   target="_blank"
    style={{ color: "#2D9CD7", fontWeight: "600" }}>Learnbay Institute</a>, as this will be one of 
   the best career choices you will ever make. 
Learnbay institute has proudly assisted over 500+ aspirants in pursuing their dream careers. IBM, being 
our accreditation partner, has global recognition. <br/><br/>

Learnbay institute has proudly assisted over 500+ aspirants in pursuing their dream careers. <b>IBM</b>,
 being our accreditation partner, has global recognition.

</p>

<h2>Why Choose Learnbay Data Science Training Institute in Pune?</h2>
<ul>
  <li>IBM Certified Capstone</li>
  <li>Guaranteed Job Referrals</li>
  <li>100% Live Online Classes</li>
  <li>Hassle-free and tailored training for MAANG Company interviews</li>
  <li>A successful career transition even with 0 coding experience</li>
  <li>Industry-targeted syllabus</li>
</ul>

<h2>Did You Know? </h2>

<p>The average <b>data scientist salary in Pune</b> is ₹8,20,000 per year? Learnbay’s{" "} 
  <b>online data science training</b> allows you to break through your career in this field! <br/><br/>
<b>Learnbay</b> also provides classroom mode for <a href="https://www.learnbay.co/machine-learning-course-training-in-pune" 
target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>machine learning</a> and <a href="https://www.learnbay.co/artificial-intelligence-ai-course-training-pune" 
target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>artificial intelligence courses in Pune</a> and data science courses.</p>


          </div>
        ) : (
          ""
        )}


        {cityTextDSDelhi ? (
           <div className={styles.CitiesRightInner}>
           <p>
           The <b>Data Scientist course in Delhi</b> is in high demand.
            Learnbay has collaborated with IBM to provide the <b>data science course</b>.
             Once you complete the course, you get globally recognized dual certification. 
             It paves your way to becoming an industry-competent data scientist.
              Learnbay has a strong team of experts, instructors, and mentors to guide you throughout the process.
               The experts have an industrial experience of more than 8 years. The <b>online data science training</b> is 
               provided keeping in mind your domain and industry requirements. 
           </p>
           <p>
           Research in 2022 found that quintillions of data are produced yearly, 
           and Data Science comes to the rescue when managing huge amounts of data. 
           No matter which sector, every company produces vast amounts of data daily, 
           which is difficult to manage without proper methods and techniques. 
           </p>
           <p>
           Learnbay’s <b>Data Science training in Delhi</b> focuses on live learning, 
           which allows learners to grasp knowledge while sitting in the comfort of their homes. 
           A <b>Data Science course</b> can give you a new range of job opportunities and a lucrative salary hike. 
           Our data science learning modules are the best, providing the right knowledge to get into a good company. 

           </p>
           <p>
           To balance the learning process, we have curated the <b>data science training</b> so 
           that you get practical and theoretical learning in a 70:30 ratio. Learnbay Institute offers 
           the most cost-effective <b>Data Science course in Delhi</b>. Wondering what the best part is? You will 
           be offered a full-stack data science course and job placement assistance. 
           </p>
           <p>
           Choosing <b>online Data Scientist training in Delhi</b> comes with a lot of benefits.
            Delhi is becoming one of the most significant job hubs in India. 
            Since large quantities of data are being produced daily, companies are 
            becoming dependent on Data Science. You get a wide range of <b>Data Science 
            training</b> options in Delhi. However, the list becomes short if we discuss 
            getting assured job placement. When evaluating the cost-effectiveness of
             the course, the list becomes even shorter.

           </p>
               <p>
               Learnbay’s <b>Data Science course in Delhi</b> is one of the best choices you can
               make since we provide domain-specific training. Even if you have a non-technical background,
               our online <b>Data Science training</b> will help you get on the same level as learners
               with a technical background. We have a flexible lesson schedule for you to learn at your own pace. 
               

               </p>
               <p>
               We cover the <b>data science course</b> using various modules, some of which are mentioned below: 
               </p>
               <ul>
                 <li>Cohort Orientation </li>
                 <li>Special Programming Classes</li>
                 <li>Basic Python Programming</li>
                 <li>Special Python Programming </li>
                 <li>Statistics</li>
                 <li>Machine Learning </li>
                 <li>SQL </li>
                 <li>Tableau</li>
                 <li>Deep Learning </li>
                 
               </ul>
               <p>
                
                  The course duration of the online  <b>Data Science training in Delhi</b>{" "}
                  is 250+ hours. Our trained professionals will tutor you for almost 9 months. 
   
               </p>
               <p>
                The structured course consists of 4 terms. {" "}
               </p>
               <p>
                 <b>Module 0: Cohort Orientation + Special Programming Classes</b>
               </p>
               <p>
               In this module, you will learn the importance of data and how it is managed in everyday life. 
               This module is best suited for those belonging to a non-technical background. 
               The module is curated to help you get along with learners with technical backgrounds
                and professional experience. Our experts ensure you learn to cope with other terms 
                and modules efficiently. From the fundamentals of programming to the fundamentals of statistics, 
                the module covers the basic topics. Some tools covered in this are Anaconda, Jupyter, Git, and GitHub. 
               </p>
               <h3>Term 1 - Python Programming (Basic and Advanced)</h3>
               <p>
                 <b>Module 1: Basic Python Programming</b>
               </p>
               <p>
               Module 1 teaches you the programming basics and environment setup. 
               You will learn how to install Anaconda and operate basic GitHub commands. 
               With this module, you get familiar with Git, GitHub, and version control. 
               Learners will also find detailed knowledge about various operators and 
               their precedence. They will also learn how to get user input and multiline comments. <br />

               In the first few classes, students will learn about Strings, Decisions, Loop Control, Python Data Types,
                Functions, and Modules. Additionally, our application teaches regular 
                expressions and file I/O exceptional handling. Data analysis with NumPy
                 and Pandas is the subject of another chapter, which discusses ideas such as array generation, 
                 fundamental operations, and data import into Python Pandas. Each module or several chapters 
                 will end with a final assignment that allows students to assess their newfound
                  knowledge and abilities. This exercise consists of coding exercises on subjects
                   like functions and Lambda and questions on Python programming.


               </p>
               <h3>Term 2 - Statistics and Machine Learning</h3>
               <p>
                 <b>Module 1: Statistics </b>
               </p>
               <p>
               Learners will master the principles of probability and mathematics in this subject, 
               from comprehending probability distribution functions to using Baye's theorem 
               to resolve probability issues. The program is 30 hours long and covers a variety 
               of subjects, such as population vs. sample, sample size, systematic sampling, 
               convenience sampling, and quotation sampling. Learners will also be introduced to 
               descriptive statistics, inferential statistics, statistical thinking,
                and an introduction to statistics. <br />

                You will learn how to use matrices in Python,
                 including Element indexing, matrix multiplication, and matrix transpose, 
                 as well as data processing and exploratory data analysis, in Learnbay's <b>data science course</b>. 
                 Beginning in week 2, the curriculum will also cover case studies employing statistics 
                 and problem-solving techniques. Learners will complete a total of 4 practice 
                 sets and assignments to assess their understanding of the material. 

               </p>
               <p>
                 <b>Module 2: Machine Learning </b>
               </p>
               <p>
               This 40-hour course explores the complexities of machine learning, 
               which is necessary to land a well-paying job offer. Learners will be provided with a 
               thorough grasp of machine learning's components and an introduction to its concept,
                examples, and significance in the first chapter. The differences between MAE, MSE, 
                and RMSE will also be covered in this lesson, along with how to design a linear 
                regression model and assess its effectiveness using the Python tool Sklearn. <br/>
              This module will cover data preprocessing, logistic regression models, valuation metrics for 
             classification models, and K Nearest Neighbor models. These topics are important chapters in 
             the study of data science. This module will also cover the decision tree and random forest models.
             By the end of this term, students will have a thorough knowledge of all machine learning algorithms, 
             and to further their understanding, real-world case studies will be offered for each method.

               </p>
               <h3>Term 3 - Data Science Tools</h3>
               <p>
                 <b>Module (1) - SQL</b>
               </p>
               <p>
                 <b>Module (2) - MongoDB</b>
               </p>
               <p>
                 <b>Module (3) - Tableau</b>
               </p>
               <p>
                 <b>Module (4) - PowerBI </b>
               </p>
               <p>
                 <b>Module (5) - Big Data and Spark Analytics</b>
               </p>
               <p>
                 <b>Module (6) - Time Series</b>
               </p>
               <h3>Term 4 - Artificial Intelligence Tools</h3>
               <p>
                 <b>Module (1) - Deep learning using TensorFlow</b>
               </p>
               <p>
                 <b>Module (2) - Natural Language Processing (NLP)</b>
               </p>
               <p>
                 <b>
                   Module (3) - Model Training and Deployment (Using AWS GCP)
                 </b>
               </p>
               <p>
                 Lastly, it supports the students to practise their knowledge
                 at a cloud lab at their convenience.
               </p>
               <p>
                 Upon completing these structured 4-Terms{" "}
                 <b>Learnbay's Data Science Training</b>, you will be confident
                 in your ability to perform your "SuperHero duty" as a Data
                 Scientist in leading firms.
               </p>
               <h2>
                 Premium Features of Data Scientist Training in Delhi
               </h2>
               <p>
                 <b>100% Live Online Classes:</b>  You can attend Learnbay's 100% live
                  online classes from the convenience of your home. During the live sessions,
                   our knowledgeable instructors are accessible to help you at any stage
                    of your learning process and clear up any questions you may have.
               </p>
               <p>
                 <b>Dedicated Placement Assistance Cell:</b> To ensure you are completely
                  ready and confident when landing a job, our dedicated placement
                   assistance cell offers comprehensive support, from resume writing 
                   to interview training. Learnbay is the perfect choice for people wishing
                    to begin a career in data science because we also 
                    provide guaranteed employment recommendations in product-based MNCs.
               </p>
               <p>
                 <b>International Accreditation:</b> When you successfully complete your course,
                  Learnbay offers domain-specific capstone projects in partnership with IBM,
                   offering you the chance to get practical experience and a globally recognized certification.
                    We stand apart from other education providers because of our dual certification and international accreditation. 
               </p>
               <p>
                 <b>1:1 Mentorship:</b> With 1:1 personal mentorship,
                  our specialists are always accessible to help you with any doubts
                  you may have, even after the live lessons. We also offer those 
                  options if you like to take lessons from several mentors or alter your batches.
               </p>
               <p>
                 <b>Special Classes:</b> Our carefully designed programming workshops 
                 for beginners will help you learn from scratch whether you are a recent 
                 college graduate or a working professional wishing to launch a career in data science.
               </p>
               <p>
                 <b>Project Innovation Lab:</b> We provide a project innovation lab where you can work on offline, 
                 industry-recognized projects at our data science course in Delhi. 
                 Collaborate with project mentors and other learners to obtain 
                 hands-on experience across multiple areas and strengthen your abilities.
               </p>
              
               <h2>Data Science Foundation Program in Delhi with Placement Assistance </h2>
               <p>Do you want to pursue a successful career in data science? To meet your needs, Learnbay provides a variety of programs. </p>
              <ul>
                <li>The Data Science Foundation Program is appropriate for beginners with a non-IT background. </li>
                <li>The program will teach you the fundamentals of Python, Anaconda, and Jupyter Notebook for just 75,000 + 18% GST.</li>
                <h3>Highlights of the Data Science Foundation Program in Bangalore</h3>
                <li>200+ hours of rigorous training</li>
                <li>Industry-specific training </li>
                <li>Global recognition from IBM</li>
                <li>Hands-on experience with real-world projects</li>
                <li>8+ real-time industrial projects</li>

              </ul>
               <h2>
               Advance Data Science and AI Program in Delhi with Placement Assistance 
               </h2>

               <ul>
                <li>The Advance Data Science and AI Program is a wonderful option 
                  for students seeking more in-depth knowledge of data science. </li>
                <li>This course provides in-depth training and helps you deeply understand the subject.</li>
                <li>It's great for people wishing to swap domains, all at just ₹95,000 + 18% GST.</li>
                <h3>Highlights of the Advance Data Science and AI Program in Delhi</h3>
                <li>250+ hours of rigorous training</li>
                <li>Assured Interview calls</li>
                <li>Premium mentoring by MAANG and MNC experts</li>
                <li>2 years flexible subscription of learning materials</li>
                <li>12+ real-time industrial projects</li>
               </ul>

               <h2>Data Science and AI program for Managers and Leaders in Delhi with Placement Assistance </h2>
               <ul>
                <li>
                Learnbay's data science and artificial intelligence program 
                is the best choice for managers and leaders with 8+ years of experience. 
                </li>
                <li>The course helps you with a smooth transition, and domain-specific
                   projects offer you an edge over others. </li>
                <li>It only costs INR 1,05,000 plus 18% GST for the program.</li>
                <h3>Highlights of Data Science and AI Program for Managers and Leaders in Delhi</h3>
                <li>Earn capstone project certification</li>
                <li>400+ hours of rigorous training</li>
                <li>15+ real-time industrial projects</li>
                <li>A variety of financing options are available to make it more economical</li>
               </ul>

               <h2>Data Science and AI Master Program in Delhi with Placement Assistance </h2>

               <ul>
                <li>​​If you’re an employed professional seeking first-rate mentoring and
                   practical experience on real-world projects, this program is for you.</li>
                <li>This custom-fit course lets you master Data Science and AI effectively 
                  and efficiently, with intensive training of 500+ hours, all at just ₹1,25,000 + 18% GST. </li>
                <li>With Learnbay's professional programs, you may begin your Data Science path right away!</li>
                <h3>Highlights of Data Science and AI Master Program in Delhi</h3>
                <li>500+ hours of rigorous training</li>
                <li>IBM certification </li>
                <li>Project Innovation lab</li>
                <li>20+ real-time industrial projects</li>
               </ul>

               <h2>Learnbay’s Domain-Specific Data Science Course in Delhi</h2>

               <ol type="1">
                <li>
               <b>BFSI Domain:</b> Data science helps people understand best practices in the financial industry in the BFSI domain. 
               The course allows learners to work on real-time projects using current data from businesses like JP Morgan and HDFC.
                Building recommendation systems or forecasting the stock market's future trends require data science.
               </li>

               <li>
               <b>Sales, Marketing, and HR Domain:</b> Data Science provides data-driven consumer and market insights in the Sales,
                Marketing, and HR sectors. It is simpler to comprehend the needs and functionality of the retail sector
                thanks to the practical Capstone projects that get students involved with business management's functional components.
               </li>

               <li>
                <b>Healthcare Domain:</b> Data science courses help students incorporate future-proof techniques in the healthcare industry. 
               Professionals with experience may expect higher earnings and job security. 
               </li>

               <li>
                <b>Retail and E-Commerce Domain:</b> The use of data science can help business requirements and 
                functionality in the retail and e-commerce domains. It can assist in identifying consumer
                 preferences and industry trends that help organizations keep one step ahead of the competition.
               </li>

               <li>
                <b>Media and Hospitality Domain:</b> The course emphasizes customized 
                marketing and revenue management to support business growth in the media and hospitality sector. 
                Non-programmers can also take specialized classes.
               </li>

               <li>
                <b>Manufacturing Domain:</b> The course sheds light on the uses of data science in manufacturing and the
                automotive industries in the manufacturing sector. Nanotechnology, computer-aided design, 
                and robotics are some topics covered in the course.
               </li>

               <li>
                <b>Energy, Oil, and Gas Domain: </b> The course offers a real-time recording of
                 drilling data in the Energy, Oil, and Gas domain, giving learners a greater knowledge of how the 
                 sector grows exponentially with the help of AI.
               </li>

               </ol>

              <h2>Data Science Trends in Delhi</h2>
              <p>
              From banking, cyber security, and financial institutions to the education and healthcare sectors,
               there is a huge scope for the application of data science. By 2030, the data science market trends
                will reach a valuation of <b>USD 378.7 billion</b>. </p>
                
                <p>People interested in enrolling in a{" "}
                <b>Data Science Course in Delhi</b> can choose from various flexible learning alternatives at Learnbay. 
                To accommodate their schedules, students can attend classes on weekdays or weekends and alter 
                the scheduling and number of sessions.
              </p>

              <h2>Best Data Science Training Institute in Delhi</h2>
              <p>
              Learnbay is the <b>best data training institute in Delhi</b> thanks to its individualized and 
              industry-specific courses, which provide students with a competitive advantage.
               Learnbay delivers real-time, qualitative training at affordable pricing. </p>
               <p>
               <a href="https://www.learnbay.co/data-science-course-training-in-delhi" 
               target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>Learnbay institute</a> has proudly assisted over 500+ aspirants in pursuing their dream careers.{" "} 
               <b>IBM</b>, being our accreditation partner, has global recognition. 
               Looking forward to getting high-quality and cost-effective <b>online data science 
               training in Delhi</b>? Well, look no further. Learnbay training is one of the best choices you will make to 
               kickstart your career as a data scientist.
              </p>

              <h2>Did you know?</h2>

              <p>Data science is a lucrative area because the <b>average data scientist salary in Delhi</b> is close to INR 9.5 lakhs.{" "}
                 <b>Learnbay</b> also provides classroom mode for <a href="https://www.learnbay.co/machine-learning-course-training-in-delhi" 
                 target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>machine learning</a> and artificial intelligence courses in Delhi 
                 and <a href="https://www.learnbay.co/artificial-intelligence-ai-course-training-delhi" target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>data science</a>.
                 </p>
                 <p>
                Considering the current facts and statistics, every company needs a data scientist to
                organize their data. By 2025, the generation of everyday data is expected to reach 463 exabytes globally. 
                It’s a number that is very hard to envision. To add to the amazement, humans have collectively spoken 
                only 5 exabytes of data. </p>



               {/* <YoutubeVideo/> */}
         </div>
        ) : ("")}

        {cityTextDSChennai ? (
          <div className={styles.CitiesRightInner}>
            <h2>
              <b>Data Science Certification from Learnbay</b>
            </h2>
            <p>
              Step up your career with the best{" "}
              <b>Data Science certification</b> from Learnbay, one of the
              leading training centres in Chennai. This training program
              perfectly blends theory, case studies, hackathons, capstone, and
              real-world projects. The course syllabus has been comprehensively
              designed by industry professionals and is regarded as the best in
              the market. With the global certification, it stands out to
              recruiters all around the world. Post completion of the course,
              one will be awarded the IBM certification and a proud Learnbay
              Alumni.{" "}
            </p>
            <h2>
              <b>What is the certification process?</b>
            </h2>
            <p>
              After completing the data science training in Chennai, one should
              attend an online examination facilitated by Learnbay and pass with
              70% or more to be eligible for the IBM exam. After passing the
              exam and capstone project completion, the candidate will be
              awarded IBM certifications based on the selected course. In
              addition, once the Capstone project is completed, you will be
              given an IBM Project experience certificate.
            </p>
            <h2>
              <b>Data Science Course Training In Chennai</b>
            </h2>
            <p>
              Learnbay offers a domain-specialised{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-chennai"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Data Science course in Chennai
              </a>
              , the most comprehensive Data Science training in the market,
              covering the basic to advanced concepts of Data Science process
              from Data Collection, Data Extraction, Data Cleaning, Data
              Exploration, Feature Engineering, model building, Data
              Visualization and implementing the solution. Further, statistical
              Analysis, Tableau, Hadoop, Regression Modelling, Predictive
              Analytics,{" "}
              <a
                href="https://www.learnbay.co/machine-learning-course-training-in-chennai"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Machine Learning
              </a>
              , NLP, Neural Networks, and programming languages like Python and
              R are just a few of the tools and skills covered in-depth during
              this data science training.
            </p>
            <p>
              Learnbay is said to be the best{" "}
              <b>Data Science training institute in Chennai</b> which provides
              exclusive services from hands-on practical sessions to placement
              as part of the Data science training with around 1000+ students
              placed in MNCs such as Accenture, TCS, Infosys, EY, IBM, and
              others. Learnbay delivers rigorous{" "}
              <b>Data Science online training in Chennai</b> and is considered
              the best in the industry. The <b>data science course fee</b> at
              Learnbay institute ranges from INR 75,000 to INR 125,000,
              depending on the preferred course.
            </p>
            {read ? (
              <>
                <h2>
                  Why Choose Learnbay For A Data Science Course In{" "}
                  <b>Chennai</b>?
                </h2>
                <p>
                  If you are curious about how to learn data science, then you
                  are in the perfect place! Learnbay is recognized as one of the
                  top <b>Data Science training institutes in Chennai</b>. We
                  have helped over 10,000 Data Science enthusiasts transform
                  their careers in various MNCs in India and abroad. We aim to
                  provide dedicated practical training and placement to our
                  learners. We also provide personal mentorship to each student
                  until they are placed in a reputed position. In addition, our
                  mentors will assist you with theoretical and practical
                  concepts, assignment completion, and live data science
                  projects. With over 250 hiring partners and a dedicated
                  placement cell, Learnbay helps the participants secure jobs by
                  facilitating multiple MNC interviews. The best part about
                </p>
                <p>
                  Most of our instructors are IIT and IIM graduates, some of
                  whom are Ph.D. professionals and experienced Data Scientists
                  with 15+ years of industry expertise. Because of our dedicated
                  faculty, Learnbay's certification is regarded as the best{" "}
                  <b>Data Science certification course</b> available in the
                  market. Learnbay provides a hybrid learning approach where
                  students can take advantage of the classrooms, instructor-led
                  online classes, and recorded sessions/videos through Learnbay
                  LMS.
                </p>
                <p>
                  This combination of learning modes will have a positive impact
                  on learning. During a period of 2 years, one can attend as
                  many instructor-led online sessions from multiple trainers
                  with no additional cost. No wonder Learnbay is recognized as
                  the best <b>Data Science training institute in Chennai</b> for
                  aspirants wanting to upgrade their Data Science concepts and
                  secure a lucrative position.
                </p>
                <h2>Overview of Data Science and Data scientist</h2>
                <p>
                  Data science is all about uncovering hidden patterns in data
                  that relate to trends, patterns, behaviour, and interpretation
                  to enhance company decisions. Data Professionals who carry out
                  these tasks are called data scientists and are generally
                  termed "superheroes." As reported by Harvard, a data scientist
                  is the most in-demand career worldwide.
                </p>
                <h2>Why Enrol in the Data Science Course?</h2>
                <h3>
                  <b>Is Data Science certification worth it?</b>
                </h3>
                <p>
                  The answer is definitely <b>YES</b> for plenty of reasons.
                  Billions of jobs are being created in the field of data
                  science and AI as a result of the massive amount of data being
                  generated by digitalization across all industries. Thus,
                  professionals skilled in data analysis and insight extraction
                  are in high demand. There is an extensive gap between supply
                  and demand, which generates a lot of job opportunities with
                  high salaries. Undoubtedly, data scientists are thought to be
                  the most well-paid in the job market today. Since data
                  generation is rising exponentially and there will always be a
                  need for Data Science professionals, a career as a Data
                  Scientist is both lucrative and long-lasting.
                </p>
                <ul>
                  <li>
                    A NASSCOM survey estimates that there are almost 1.4 lakh
                    open positions in the fields of data science, AI and big
                    data.
                  </li>
                  <li>
                    According to the US Bureau of Labor Statistics, the number
                    of data scientists' jobs is expected to increase by 36%
                    between 2021 and 2031.
                  </li>
                  <li>
                    Further, according to glassdoor ranking, Data Science is the
                    best job to pursue in the coming years.
                  </li>
                </ul>
                <h2>
                  You May Wonder If Data Science Certification Is Worth It?
                </h2>
                <p>
                  Indeed YES. Today, Data Science and Analytics are creating a
                  huge number of jobs in all domains across the world. Business
                  firms have realised the value of using past data analysis to
                  help them make better decisions and grow their operations. All
                  business areas benefit from digitalization, which facilitates
                  data analysis and helps in data generation. As a result, many
                  data science and analytics job opportunities are being
                  created. Since there is a significant gap between the demand
                  and supply for Data Scientists, salaries in the Data Science
                  field are quite high and are among the highest in the
                  industry. Due to the ongoing and future growth of online data
                  collection, the career path for data scientists is extensive
                  and rewarding.
                </p>
                <h2>
                  Why Learnbay Is The Best Data Science Training Institute In
                  <b>Chennai</b>
                </h2>
                <p>
                  Learnbay provides the best{" "}
                  <b>Data Science certification online training in Chennai</b>,
                  along with 7+ domain electives. It also conducts live project
                  sessions at multiple project innovative centres across 7+
                  cities. The detailed description of the{" "}
                  <b>Data Science courses in Chennai</b> are available in the
                  course brochure.{" "}
                </p>
                <h2>Who Should Enrol in the Data Science Course?</h2>
                <p>
                  These professionals might consider taking a{" "}
                  <b>Data Science course in Chennai</b> as the next genuine move
                  to advance their career:{" "}
                </p>
                <ul>
                  <li>
                    Working Professional from any domain (including
                    non-technical) who has coding, mathematical and analytical
                    skills
                  </li>
                  <li>
                    Working Professionals working on Data Warehousing, Business
                    Intelligence (BI), and reporting tools
                  </li>
                  <li>Statisticians and Mathematicians</li>
                  <li>Business analysts</li>
                  <li>Software programmers</li>
                  <li>
                    Any Graduate with good Analytical skills and curiosity to
                    learn
                  </li>
                </ul>
                <h2>Interview Preparation Sessions</h2>
                <p>
                  Candidates will be kept under Learnbay's Placement Assistance
                  Program once they have successfully completed the Data Science
                  course training along with capstone+live projects. As part of
                  this program, candidates will be subjected to a complete
                  interview preparation process on Data Science and AI. The
                  participants will also have access to a vast repository of{" "}
                  <b>Data Science Interview questions and answers</b> to help
                  them become confident and job-ready. A dedicated Data Science
                  mentor will help with soft-skill training, resume/portfolio
                  building, mock interviews and evaluate the skills and
                  knowledge of each candidate, and provide feedback accordingly
                  for further improvement. Our mentors will provide guidance and
                  supervision during the interview preparation phase until the
                  candidate is placed in the desired position. In addition,
                  mentorship is provided on Linkedin profile building and
                  insider tips for enhancing the marketability of a resume.{" "}
                </p>
              </>
            ) : (
              ""
            )}
            <p
              style={{
                color: "#2D9CD7",
                fontWeight: "600",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handler}
              className={styles.readP}
            >
              {read ? "View Less..." : "View More..."}
            </p>
          </div>
        ) : (
          ""
        )}
      {cityText ? (
          <div className={styles.CitiesRightInner}>
            <p>
            Learnbay's <b>Data Science course in Bangalore</b> is structured online training
             that allows you to gain skills and expertise in core aspects of data science, AI, and ML, 
             which are responsible for transforming the business landscape. Data Science is undoubtedly 
             considered the most important phenomenon for business growth in the <b>21st century</b>. Indeed, a <b>career in 
             Data Science</b> is the most rewarding one. <b>Data Science courses</b> are specifically created to help aspiring
              data scientists secure their careers with the Data Science foundation.
            </p>
            <p>
            Learnbay's <b>Data Scientist course</b> is designed to deliver theoretical and practical knowledge 
            on all elements of Data Science, including Programming, Maths, Statistics, AI, Machine learning, 
            and the business side of Data science. It allows students to gain the in-demand spectrum of data science
             skills and provide appropriate Data Science solutions to Business problems.

            </p>
            <p>
            Data Science has found much importance in business applications in organizations. 
            The vast majority of modern industries work closely with data and base all of their crucial decisions
             on the insightful information derived from it. In today’s business world, a competent Data Scientist 
             is a major part of a company's workforce since they draw future plans based on data. 
             Further, <b>IBM</b> has reported that there will be over {" "} <b>7,00,000 new job opportunities in Data Science
              and AI</b> in the upcoming years.

            </p>
            <p>
            Bangalore is one of the world's major cities, with an impressive infrastructure and abundant business opportunities.
             It is also considered the IT hub of India, where many tech companies and startups are happening. 
             It puts <b>data scientists' jobs</b> in high demand across various domains. Data Scientist is also a lucrative career
              with a high package in Bengaluru. As mentioned in glassdoor, the average <b>salary
               of a Data Scientist in Bengaluru is INR 11,00,000 annually</b>.

            </p>
            <p>
              The{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-bangalore"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Data Scientist training
              </a>{" "}
              is a data science certification course offered by Learnbay in Bangalore.
               MNC experts design it as per the current industry requirements and to help the data science aspirants
                in the city transform their careers. The Data Science online course is 
                conducted via live interactive classes by industry trainers..
            </p>
                <p>
                  <b>Learnbay</b>, in Bangalore, offers certification programs
                  in collaboration with <b>IBM</b>, which are globally
                  recognized. The data science course comes with a duration of 6
                  months with 300+ Hrs of online training. Faculties with
                  extensive industry experience and dedicated subject matter
                  expertise. One-on-one mentorship, Placement assistance
                  including resume building sessions, soft skill training, mock
                  interviews, extensive networks for job opportunities,
                  practical hands-on learning sessions with{" "}
                  <b>capstone and 15+ real-world data science projects.</b>
                </p>
                <p>
                  It is a complete training course with detailed learning
                  covering multiple modules, including:
                </p>
                <ul>
                  <li>Data Science Foundation</li>
                  <li>Python for Data Science</li>
                  <li>Statistics for Data Science</li>
                  <li>Maths for Data Science</li>
                  <li>Machine Learning</li>
                  <li>Data Preparation with Pandas</li>
                  <li>Data Visualisation with Python</li>
                  <li>Tableau Foundations for Data analysis</li>
                  <li>Big Data Foundation</li>
                  <li>Model deployment (Flask-API)</li>
                  <li>R Language Essentials</li>
                  <li>Deep Learning</li>
                  <li>SQL for Data Science</li>
                </ul>
                <p>
                  <b>
                  The IBM Certified Data Scientist course in Bangalore has a 9-month (300+ hours) course duration.
                  </b>
                </p>
                <p>
                The Structured data science course consists of 4 - Terms:{" "}
                </p>
                <p>
                  <b>Module 0 - Preparatory Classes (Programming+Maths)</b>
                </p>
                <p>
                This Preparatory module helps you familiarize yourself with Data Science and Machine Learning basics. 
                It is a preliminary phase to help individuals, particularly non-programmers, 
                become comfortable with the basics of maths, programming, and data science foundation. 
                This module covers basic Python And R, Basic Mathematics, Essential Statistics for Data Science,
                 Introduction to Anaconda, Jupyter notebook, Git and Github for data science, and other practical materials.
                </p>
                <h3>Term 1 - Python For Data Science</h3>
                <p>
                  <b>Module (1) Python Programming</b>
                </p>
                <p>
                It is the essential part of the course, with full-time dedicated training sessions through Live <b>Instructor-Led Online Training</b>. 
                This module covers the fundamentals of Python Programming, which is an essential tool to get started as a modern data scientist. 
                Here, you will learn basic programming, Python data types, Functions and modules, libraries including Numpy and Pandas, and case studies
                 using Python libraries.

                </p>
                <h3>Term 2 - Statistics and Machine Learning</h3>
                <p>
                  <b>Module (1) - Statistics</b>
                </p>
                <p>
                This next essential module focuses on basic to advanced statistics concepts for Data science. 
                This module will equip you with the fundamentals of statistics and probability, {" "}
                inferential and descriptive statistics, EDA, and data processing. You will also receive 4 practice 
                assignments on statistics for experiential learning.
                </p>
                <p>
                  <b>Module (2) - Machine Learning</b>
                </p>
                <p>
                In this module of the data science course, the trainer will equip you with cutting-edge
                 machine learning techniques and tools, which are essential for model building and, thereby,{" "}
                  decision-making. This module covers advanced ML techniques, including regression and 
                  classification models, KNN-model, Clustering techniques, PCA, and Support Vector Machine (SVM).
                </p>
                <h3>Term 3 - Data Science Tools</h3>
                <p>
                  <b>Module (1) - SQL</b>
                </p>
                <p>
                  <b>Module (2) - MongoDB</b>
                </p>
                <p>
                  <b>Module (3) - Tableau</b>
                </p>
                <p>
                  <b>Module (4) - PowerBI </b>
                </p>
                <p>
                  <b>Module (5) - Big Data and Spark Analytics</b>
                </p>
                <p>
                  <b>Module (6) - Time Series</b>
                </p>
                <h3>Term 4 - Artificial Intelligence Tools</h3>
                <p>
                  <b>Module (1) - Deep learning using TensorFlow</b>
                </p>
                <p>
                  <b>Module (2) - Natural Language Processing (NLP)</b>
                </p>
                <p>
                  <b>
                    Module (3) - Model Training and Deployment (Using AWS GCP)
                  </b>
                </p>
                <p>
                  Lastly, it supports the students to practise their knowledge
                  at a cloud lab at their convenience.
                </p>
                <p>
                  Upon completing these structured 4-Terms{" "}
                  <b>Learnbay's Data Science Training</b>, you will be confident
                  in your ability to perform your "SuperHero duty" as a Data
                  Scientist in leading firms.
                </p>
                <h2>
                  Premium Features of Data Scientist Training in Bangalore
                </h2>
                <p>
                  <b>Live Interactive Classes:</b> The classes are hassle-free and completely online,
                   where you can interact with trainers and other students.

                </p>
                <p>
                  <b>One-on-one Mentorship:</b> You will be provided a mentor who can guide you throughout
                   the training from project inception to completion to placement.
                </p>
                <p>
                  <b>Live Project Sessions:</b>  You will gain hands-on experience by working on 15+ 
                  live projects from global MNCs under the supervision of project mentors. 
                  An exclusive feature of cloud lab is also available.

                </p>
                <p>
                  <b>Doubt Clearance Sessions:</b> Multiple Q&A sessions are conducted to clarify your doubts 
                  with our instructors, even after the course completion.
                </p>
                <p>
                  <b>Resume-building Support:</b>  You can create a job-ready resume and portfolio with 
                  experts and mentors to help you get shortlisted by potential employers.

                </p>
                <p>
                  <b>Interview Preparation:</b> Learnbay trainers will equip you with the latest and in-demand
                   interview Q&A to confidently face the tricky MAANG interviews.
                </p>
                <p>
                  <b>Mock Interviews:</b> By participating in several mock interviews, our professionals will assist you in
                   improving your interview success rate and accelerating the hiring process.
                </p>
                <h2>Data Science Foundation Program in Bangalore with Placement Assistance </h2>
                <ol type="1">
                  <li>
                  The data science foundation course is a 
                  beginner-friendly course explicitly crafted to allow non-technical
                   aspirants to reshape their careers in this lucrative field. <br></br>
                  </li> 
                  <li>
                  The data science course in Bangalore covers everything from basic data science techniques to advanced AIML,
                   Data Science Project Workflow, Cutting-edge data science and AI tools, 
                   Various Roles in Data Science, and real-world applications of Data Science. <br></br>
                  </li>
                  <li>
                  This program’s data science course fee is INR 75,000, excluding GST.<br></br>
                  </li>
                  {/* <p>
                    The course fee for this manager course is INR 105,000,
                    exclusive of GST.
                  </p> */}
                  {/* <li>
                    <b>Data Science and AI Master Program - </b>This
                    domain-specialised data science course is a complete boot
                    camp covering everything a data scientist must possess. The
                    duration of this master's program is 15 to 17 months,
                    depending on your preferred batch (week and weekend). After
                    completing this course, you will become an expert data
                    scientist and be able to manage teams in leading firms.
                  </li> */}
                  {/* <p>
                    The course fee for this master's program is 125,000,
                    Exclusive of GST.
                  </p>
                  <p>
                    Note: All data science courses at Learnbay come with the
                    option of no-cost EMI.
                  </p> */}
                </ol>


                <h3>Highlights of the Data Science Foundation Program in Bangalore</h3>

                <ol type="1">
                  <li>Consists of 200+ hours of live sessions</li>
                  <li>Lifetime accessibility of recorded live classroom videos</li>
                  <li>Offline live project experience in the project innovation lab</li>
                  <li>8+ real-time industrial projects</li>
                </ol>

                <h2>Advance Data Science and AI Course in Bangalore with Placement Assistance</h2>
                <ol type="1">
                  <li>The Advance data science course is designed meticulously for professionals of all domains and levels of experience. </li>
                  <li>This course covers everything from advanced data science and AI tools and techniques, including visualisation, 
                    data processing, EDA, feature engineering, and model deployment. </li>
                  <li>The advanced data science course fees are INR 95,000, exclusive of GST.</li>
                </ol>

                <h3>Highlights of Advance Data Science and AI Course in Bangalore</h3>
                <ol type="1">
                  <li>Consists of 250+ hours of live sessions</li>
                  <li>Global recognition from IBM </li>
                  <li>Career assistance for professionals</li>
                  <li>Capstone project completion certificate from IBM</li>
                  <li>12+ real-time industrial projects. </li>
                </ol>

                <h2>Data Science and AI for Managers & Leaders in Bangalore with Placement Assistance</h2>
                <ol type="1">
                  <li>This training course is a comprehensive program offered by Learnbay specifically 
                    crafted for those in senior and managerial positions about the top-notch tools and techniques used to draw valuable insights.</li>
                  <li>Managers in every organization must have a strong understanding of data science to 
                    make data-driven decisions effectively and boost revenue growth.</li>
                  <li>The course fee for this manager course is INR 105,000, exclusive of GST. </li>
                </ol>

                <h3>Highlights of Data Science and AI program for Managers and Leaders in Bangalore</h3>
                <ol type="1">
                <li>Consists of 400+ hours of live sessions </li>
                <li>15+ real-time industrial projects</li>
                <li>Online sessions guided by professionals working in top MNCs</li>
                <li>A variety of financing options are available to make it more economical</li>
                </ol>

                <h2>Data Science and AI Master Program in Bangalore with Placement Assistance </h2>
                <ol type="1">
                  <li>This domain-specialized data science course is a complete boot camp covering everything a data scientist must possess. </li>
                  <li>The duration of this master's program is 15 to 17 months, depending on your preferred batch (week and weekend). </li>
                  <li>After completing this course, you will become an expert data scientist and be able to manage teams in leading firms.</li>
                  <li>The course fee for this master's program is 125,000, exclusive of GST.</li>
                </ol>

                <h3>Highlights of Data Science and AI Master Program in Bangalore</h3>
                <ol type="1">
                  <li>Consists of 500+ hours of live sessions </li>
                  <li>35 LPA - 50 LPA salary package</li>
                  <li>20+ real-time industrial projects. </li>
                  <li>Practical covering of real-time industrial projects and case studies</li>
                </ol>
                <p><b>Note:</b> All data science courses at Learnbay come with the option of no-cost EMI.</p>

                <h2>Learnbay’s Domain-Specific Data Science Course in Bangalore</h2>
                <ol type="1">
                  <li><b>Finance Domain</b> - Finance-related investments in data science offer a wide range of career options.
                     Cybersecurity, data science, machine learning, and AI are just a few topics focused on technology. 
                     Blockchain development and quantitative investing are two jobs that require financial expertise.</li>

                  <li><b>Operations Domain</b> - Data science and analytics allow us to gather relevant data, unearth insights,
                     and make data-driven decisions by helping us to comprehend an organization’s operations.</li>
                  <li>
                  <b>Marketing Domain</b> - Data science is heavily used in marketing-related fields like consumer engagement, 
                  SEO, and profiling. New data science and analytics applications in marketing are also being developed daily.
                  </li>

                  <li>
                     <b>HR Domain</b> - A data science expert on the HR team can provide the company information for effectively
                      managing personnel, enabling it to move towards its objectives steadily. Data science is
                     a ground-breaking technique that enables businesses to track costs and the outcomes of 
                     candidate engagement programs statistically and to evaluate the cost-effectiveness of various HR activities.
                  </li>

                  <li>
                      <b>Healthcare Domain</b> - According to a survey, healthcare fields store 30% of all global data. The information in 
                      these fields can assist the government in various ways. Medical imaging is one of the most effective healthcare data 
                      science applications. Data Science, combined with Machine Learning, teaches computers to interpret MRIs, X-rays,
                      mammograms, and other medical reports.
                  </li>

                  <li>
                    <b>E-Commerce, Retail, and Supply Chain Domain</b> - Students who take this elective learn how to analyze data 
                    and find significant insights to provide businesses with a competitive edge.
                     Sentiment analysis, Google Analytics, NLP, recommendation systems, deep learning,
                      text analysis, and customer behavioral analytics are examples of the RSCA process. 
                      This domain program aims to acquaint participants with the fundamentals, components, business models,
                       and other facets of managing an e-commerce organization.</li>

                  <li>
                     <b>Manufacturing Domain</b> - Manufacturing creates products by applying human labor, equipment, tools, 
                     and chemical or biological processing or formulation. The most commonly used term in the context 
                     of industrial design, the secondary sector of the economy, refers to human activity ranging from handicrafts to high tech.

                  </li>
                </ol>


                <h2>Data Science Trends in Bangalore</h2>
                  <p>Bangalore is home to a youthful generation of technological natives with the 
                    business acumen and creativity to fuel the global tech industry. Moreover, AI,
                     machine learning, and IoT are saturating the market and improving the ecosystem amid this 
                     storm of the entrepreneurial revolution. The city has enormous potential for growth in
                      the coming decades and expanding revenue.</p>

                   <p><b>Learnbay</b> offers flexible learning options, from dedicated Data Science Online Training in Bangalore
                     to offline Data Science classroom training for project sessions, to exceptional recorded videos via Learnbay LMS. 
                    </p>   

                    <p>A recent LinkedIn survey indicates that data science has significantly 
                      increased in demand over the past three years, with a 37% surge.</p>

                    <p>Learnbay <b>Data Science course fee in Bangalore</b> ranges from <b>INR 75,000</b> to <b>INR 1,25,000</b> according
                       to your preferred domain and learning choice. Refer to the site’s 
                       desired course page for other <b>data science course fees</b>.</p>

              
            <h2>Best Data Science Training Institute in Bangalore</h2>

            <p>Are you looking for the <b>Best Data Science Training Institute in Bangalore?</b></p>

            <p>You are certainly in the right place! <b>Learnbay</b> is paving the way to becoming 
              India's most reputable training institute. Learnbay delivers real-time,
               qualitative training at affordable pricing. Learnbay institute has proudly 
               assisted over 500+ aspirants in pursuing their dream careers. <b>IBM</b>, being our 
               accreditation partner, has global recognition.</p>

            <p><a href="https://www.learnbay.co/" target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>Learnbay Institute</a>{" "}
            provides all-inclusive training from industry professionals
               to help you become a hero to rule the world. Thus, acquiring Learnbay Training
                is undoubtedly your best career choice.</p>
            
            <p>Almost every business needs data since it helps them make decisions based on current facts, statistics, 
              and trends. The demand for data is only going up. Therefore data science has become a multifaceted field.</p>

              <h2>Why Choose Learnbay Data Science Training Institute in Bangalore?</h2>

              <p>Learnbay offers affordable, high-quality, real-time training courses to
                 graduates and IT professionals wanting to upgrade their skills. In today's age of 
                 technological explosion, it is inevitable to have diverse knowledge and skills to 
                 operate cutting-edge technology. Technology is paving the way for a better future, 
                 and we can master the field by being acquainted with it.</p>

              <p>Data science is necessary for this fourth industrial revolution era,
                 and data scientists are now the carrier of big data. It is also reported that 
                 <b>the market size of data science platforms is expected to be worth USD 178 billion by 2025</b>.
              </p>

              <p>In the last few years, the volume of data generated, collected,
                 and reproduced globally escalated from 1.2 trillion GB to 59 trillion GB, 
                 almost a 5,000% growth. What will data do in the coming years?
              </p>

              <p><b>Data Science courses in Bangalore</b> are the entry point to the best IT systems 
                in the city; becoming a data scientist has never been so easy. Sign up for <b>Data Science 
                Online Training in Bangalore</b> to upgrade your skills to secure a lucrative career!</p>


              <h2>Did You Know?</h2>

              <p><b>The Average Data Scientist's Salary in India is INR 10 lakhs per year</b>.
                 Further, the average <b>Data Scientist Salary in Bangalore</b>, as mentioned in{" "}
                 <b>Payscale.com</b> - is <b>INR 989,454</b> per annum. Ultimately, Learnbay's
                  <b>Data Science Certification in Bangalore</b> can help you break through in the data science field!</p>

              <p><b>Learnbay</b> also provides classroom mode for {" "}
              <a href="https://www.learnbay.co/machine-learning-course-training-in-bangalore" target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>machine learning</a>{" "} and {" "}
               <a href="https://www.learnbay.co/artificial-intelligence-ai-course-training-bangalore" target="_blank" style={{ color: "#2D9CD7", fontWeight: "600" }}>artificial 
               intelligence courses in Bangalore</a> and data science courses.</p>
                
               
                <YoutubeVideo/>                
          </div>
        ) : (
          <div className={styles.CitiesRightInner}>
            <h2 className={styles.pHead}>{ProgramHead1}</h2>
            <h2 className={styles.pHead}>{ProgramHead2}</h2>
            <p className={styles.pp}>{ProgramBot1}</p>
            <p className={styles.pp}>{ProgramBot2}</p>
            <h2 className={styles.pHead}>{ProgramHead3}</h2>
            <p className={styles.pp}>{ProgramBot3}</p>
            <p className={styles.pp}>{ProgramBot31}</p>
            <p className={styles.pp}>
              <i>{ProgramBotItaliic31}</i>
            </p>
            <p className={styles.pp}>{ProgramBot32}</p>
            <h2 className={styles.pHead}>{ProgramHead4}</h2>
            <p className={styles.pp}>{ProgramBot4}</p>
            <h2 className={styles.pHead}>{ProgramHead5}</h2>
            <p className={styles.pp}>{ProgramBot5}</p>
            <p className={styles.pp}>{ProgramBot51}</p>
            <h2 className={styles.pHead}>{ProgramHead6}</h2>
            <p className={styles.pp}>{ProgramBot6}</p>
            <p className={styles.pp}>{ProgramBot61}</p>
            <p className={styles.pp}>{ProgramBot62}</p>
            <h2 className={styles.pHead}>{ProgramHead7}</h2>
            <p className={styles.pp}>{ProgramBot8}</p>
            <p className={styles.pp}>{ProgramBot9}</p>
            <h2 className={styles.pHead}>{ProgramHead14}</h2>
            <h2 className={styles.pHead}>{ProgramHead15}</h2>
            <p className={styles.pp}>{ProgramBot10}</p>
            <p className={styles.pp}>{ProgramBot101}</p>
            <p className={styles.pp}>{ProgramBot102}</p>
            <p className={styles.pp}>{ProgramBot103}</p>
            <p className={styles.pp}>{ProgramBot104}</p>
            <p className={styles.pp}>{ProgramBot105}</p>
            <p className={styles.pp}>
              <i>{ProgramBotItaliic105}</i>
            </p>
            <p className={styles.pp}>{ProgramBot106}</p>
            <h2 className={styles.pHead}>{ProgramHead16}</h2>
            <p className={styles.pp}>{ProgramBot14}</p>
            <h2 className={styles.pHead}>{ProgramHead17}</h2>
            <p className={styles.pp}>{ProgramBot15}</p>
            <h2 className={styles.pHead}>{ProgramHead18}</h2>
            <p className={styles.pp}>{ProgramBot16}</p>
            <p className={styles.pp}>{ProgramBot161}</p>
            <p className={styles.pp}>{ProgramBot162}</p>
            <p className={styles.pp}>{ProgramBot163}</p>
            <p className={styles.pp}>{ProgramBot164}</p>
            <p className={styles.pp}>{ProgramBot165}</p>
            <h2 className={styles.pHead}>{ProgramHead19}</h2>
            <p className={styles.pp}>{ProgramBot17}</p>
            <h2 className={styles.pHead}>{ProgramHead20}</h2>
            <p className={styles.pp}>{ProgramBot18}</p>
            <h2 className={styles.pHead}>{ProgramHead8}</h2>
            <h2 className={styles.pHead}>{ProgramHead9}</h2>
            <p className={styles.pp}>{ProgramBot11}</p>
            <h2 className={styles.pHead}>{ProgramHead10}</h2>
            <p className={styles.pp}>{ProgramBot12}</p>
            <h2 className={styles.pHead}>{ProgramHead11}</h2>
            <p className={styles.pp}>{ProgramBot13}</p>
            <h2 className={styles.pHead}>{ProgramHead12}</h2>
            <h2 className={styles.pHead}>{ProgramHead13}</h2>
            <a href={Courselink1} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course1}
              </h2>
            </a>
            <a href={Courselink2} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course2}
              </h2>
            </a>
            <a href={Courselink3} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course3}
              </h2>
            </a>
            <a href={Courselink4} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course4}
              </h2>
            </a>
            <a href={Courselink5} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course5}
              </h2>
            </a>
            <a href={Courselink6} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course6}
              </h2>
            </a>
            <a href={Courselink7} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course7}
              </h2>
            </a>
            <a href={Courselink8} target="_blank">
              <h2
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {Course8}
              </h2>
            </a>
            <h2 className={styles.pHead}>{ProgramHead21}</h2>
            <p className={styles.pp}>{ProgramBot19}</p>
            <span className={styles.pp}>{ProgramBot20}</span>
            <a href={jobOutlooklink} target="_blank" rel="nofollow">
              <span
                className={styles.pp}
                style={{ color: "#2D9CD7", fontWeight: "600" }}
              >
                {jobOutlookText}
              </span>
            </a>
            <span className={styles.pp}>{ProgramBot21}</span>
          </div>
        )}
      </div>
      <div id="Domain">
        <div className={styles.CitiesRightSpan}>
          <span>Domain Specialization</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{DomainHead1}</h2>
          <p className={styles.pp}>{DomainBot1}</p>
          <p className={styles.pp}>{DomainBot2}</p>
          <h2 className={styles.pHead}>{DomainHead2}</h2>
          <p className={styles.pp}>{DomainBot4}</p>
          <p className={styles.pp}>{DomainBot5}</p>
          <h2 className={styles.pHead}>{DomainHead3}</h2>
          <p className={styles.pp}>{DomainBot6}</p>
          <p className={styles.pp}>{DomainBot7}</p>
          <p className={styles.pp}>{DomainBot8}</p>
          <p className={styles.pp}>{DomainBot9}</p>
          <p className={styles.pp}>{DomainBot10}</p>
          <p className={styles.pp}>{DomainBot11}</p>
          <p className={styles.pp}>{DomainBot12}</p>
          <p className={styles.pp}>{DomainBot3}</p>
          {fullStackCity ? (
            <>
              <h2 className={styles.pHead}>{DomainHead2}</h2>
              <h2 className={styles.pHead}>{DomainHead3}</h2>
              <h2 className={styles.pHead}>{DomainHead4}</h2>
              <h2 className={styles.pHead}>{DomainHead5}</h2>
              <h2 className={styles.pHead}>{DomainHead6}</h2>
              <h2 className={styles.pHead}>{DomainHead7}</h2>
            </>
          ) : (
            <>
              {" "}
              <ul>
                <a href={Domainlink1} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList1}
                  </li>
                </a>
                <a href={Domainlink2} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList2}
                  </li>
                </a>
                <a href={Domainlink3} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList3}
                  </li>
                </a>
                <a href={Domainlink4} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList4}
                  </li>
                </a>
                <a href={Domainlink5} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList5}
                  </li>
                </a>
                <a href={Domainlink6} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList6}
                  </li>
                </a>
                <a href={Domainlink7} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList7}
                  </li>
                </a>
                <a href={Domainlink8} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList8}
                  </li>
                </a>
                <a href={Domainlink9} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList9}
                  </li>
                </a>
                <a href={Domainlink10} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList10}
                  </li>
                </a>
              </ul>
            </>
          )}
        </div>
      </div>
      {fullStackCity ? (
        <></>
      ) : (
        <>
          {" "}
          <div id="Certification">
            <div className={styles.CitiesRightSpan}>
              <span>Certification Details</span>
            </div>
            <div className={styles.CitiesRightInner}>
              <h2 className={styles.pHead}>{CertificationHead1}</h2>
              <p className={styles.pp}>{CertificationBot1}</p>
              <p className={styles.pp}>{CertificationBot2}</p>
              <p className={styles.pp}>{CertificationBot3}</p>
              <h2 className={styles.pHead}>{CertificationHead2}</h2>
              <p className={styles.pp}>{CertificationBot4}</p>
              <p className={styles.pp}>{CertificationBot5}</p>
              <p className={styles.pp}>{CertificationBot6}</p>
              <h2 className={styles.pHead}>{CertificationHead3}</h2>
              <p className={styles.pp}>{CertificationBot7}</p>
              <img src={src} alt={alt1}></img>
            </div>
          </div>
        </>
      )}
      <div id="Module">
        <div className={styles.CitiesRightSpan}>
          <span>Module-Details</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{ModuleHead1}</h2>
          <p className={styles.pp}>{ModuleBot1}</p>
          <p className={styles.pp}>{ModuleBot2}</p>
          <p className={styles.pp}>
            <b>{ModuleBotL21}</b>
          </p>
          <p className={styles.pp}>
            <b>{ModuleBotL22}</b>
          </p>
          <p className={styles.pp}>
            <b>{ModuleBotL23}</b>
          </p>
          <p className={styles.pp}>{ModuleBot21}</p>
          <h2 className={styles.pHead}>{ModuleHead2}</h2>
          <p className={styles.pp}>{ModuleBot3}</p>
          <h2 className={styles.pHead}>{ModuleHead3}</h2>
          <p className={styles.pp}>{ModuleBot4}</p>
          <p className={styles.pp}>{ModuleBot41}</p>
          <p className={styles.pp}>{ModuleBot42}</p>
          <p className={styles.pp}>{ModuleBot43}</p>
          <p className={styles.pp}>{ModuleBot44}</p>
          <p className={styles.pp}>{ModuleBot45}</p>
          {fullStackCity ? (
            <></>
          ) : (
            <>
              {" "}
              <p className={styles.pp}>Module Details:</p>
              <div className={styles.SyllabusBot}>
                <div className={styles.SyllabusBot1}>
                  <div className={styles.SyllabusBot11}>
                    <div>
                      <p className={styles.syllabush}>{syllabush1}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb1}
                      </p>
                    </div>
                    <div className={styles.number1}>1</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist11}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist12}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist13}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist14}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist15}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist16}
                    </p>
                  </div>
                </div>
                <div className={styles.SyllabusBot2}>
                  <div className={styles.SyllabusBot22}>
                    <div>
                      <p className={styles.syllabush}>{syllabush2}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb2}
                      </p>
                    </div>
                    <div className={styles.number2}>2</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist21}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist22}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist23}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist24}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist25}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist26}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.SyllabusBot}>
                <div className={styles.SyllabusBot3}>
                  <div className={styles.SyllabusBot33}>
                    <div>
                      <p className={styles.syllabush}>{syllabush3}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb3}
                      </p>
                    </div>
                    <div className={styles.number3}>3</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist31}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist32}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist33}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist34}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist35}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist36}
                    </p>
                  </div>
                </div>
                <div className={styles.SyllabusBot4}>
                  <div className={styles.SyllabusBot44}>
                    <div>
                      <p className={styles.syllabush}>{syllabush4}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb4}
                      </p>
                    </div>
                    <div className={styles.number4}>4</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist41}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist42}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist43}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist44}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist45}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist46}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.Button}>
          <a href={syllabussrc} target="_blank">
            <button style={{ margin: "auto" }}>View Detailed Brochure</button>
          </a>
        </div>
      </div>
      <div id="Job">
        <div className={styles.CitiesRightSpan}>
          <span>Job Assist Program</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{JobHead1}</h2>
          <p className={styles.pp}>{JobBot1}</p>
          <p className={styles.pp}>{JobBot2}</p>
          <p className={styles.pp}>{JobBot5}</p>
          <h2 className={styles.pHead}>{JobHead2}</h2>
          <p className={styles.pp}>{JobBot3}</p>
          <p className={styles.pp}>{JobBot4}</p>
          <p className={styles.pp}>{JobBot6}</p>
          <h2 className={styles.pHead}>{JobHead3}</h2>
          <p className={styles.pp}>{JobBot7}</p>
          <h2 className={styles.pHead}>{JobHead4}</h2>
          <p className={styles.pp}>{JobBot8}</p>
          <h2 className={styles.pHead}>{JobHead5}</h2>
          <p className={styles.pp}>{JobBot9}</p>
          <p className={styles.pp}>{JobBot10}</p>
          <h2 className={styles.pHead}>{JobHead6}</h2>
          <p className={styles.pp}>{JobBot11}</p>
        </div>
      </div>
      <div id="Projects">
        <div className={styles.CitiesRightSpan}>
          <span>Know Our Projects</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{ProjectsHead1}</h2>
          <p className={styles.pp}>{ProjectsBot1}</p>
          <h2 className={styles.pHead}>{ProjectsHead2}</h2>
          <p className={styles.pp}>{ProjectsBot2}</p>
          <h2 className={styles.pHead}>{ProjectsHead3}</h2>
          <p className={styles.pp}>{ProjectsBot31}</p>
          <p className={styles.pp}>{ProjectsBot32}</p>
        </div>
        <div className={styles.Projects}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src1} alt={alt2}></img>
                <p className={styles.ppp}>{ProjectsH1}</p>
              </div>
              <p className={styles.pp}>{Projectsp1}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src2} alt={alt3}></img>
                <p className={styles.ppp}>{ProjectsH2}</p>
              </div>
              <p className={styles.pp}>{Projectsp2}</p>
            </div>
          </div>
        </div>
        <div className={styles.Projects} style={{ marginBottom: "20px" }}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src3} alt={alt4}></img>
                <p className={styles.ppp}>{ProjectsH3}</p>
              </div>
              <p className={styles.pp}>{Projectsp3}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src4} alt={alt5}></img>
                <p className={styles.ppp}>{ProjectsH4}</p>
              </div>
              <p className={styles.pp}>{Projectsp4}</p>
            </div>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Projects</button>
              </a>
            </>
          ) : (
            <>
              {" "}
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Projects</button>
              </a>
            </>
          )}
        </div>
      </div>
      <div id="Alumni">
        <div className={styles.CitiesRightSpan}>
          <span>Hear From Our Alumni</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{AlumniBot1}</p>
          <p className={styles.pHead}>{AlumniHead1}</p>
        </div>
        <div className={styles.Alumni}>
          <div className={styles.AlumniBot}>
            <img src={Asrc1} style={{ width: "100px" }} alt={alt6}></img>
            <p className={styles.ppa}>{AlumniH1}</p>
            <p className={styles.pp}>{Alumnip1}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc2} style={{ width: "100px" }} alt={alt7}></img>
            <p className={styles.ppa}>{AlumniH2}</p>
            <p className={styles.pp}>{Alumnip2}</p>
          </div>
        </div>
        <div className={styles.Alumni1}>
          <div className={styles.AlumniBot}>
            <img src={Asrc3} style={{ width: "100px" }} alt={alt8}></img>
            <p className={styles.ppa}>{AlumniH3}</p>
            <p className={styles.pp}>{Alumnip3}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc4} style={{ width: "100px" }} alt={alt9}></img>
            <p className={styles.ppa}>{AlumniH4}</p>
            <p className={styles.pp}>{Alumnip4}</p>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=uUDyYunBIoObz7sPzvu7wAQ&oq=learnbay&gs_l=psy-ab.3...0.0.0.6647.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vlnVRtRM_mw#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145896,77.66070289999999],[12.8624165,77.6400574]]"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Reviews</button>
              </a>
            </>
          ) : (
            <>
              {" "}
              <a href="/reviews" target="_blank">
                <button style={{ margin: "auto" }}>View All Reviews</button>
              </a>
            </>
          )}
        </div>
      </div>
      <div id="FAQ">
        <div className={styles.CitiesRightSpan}>
          <span>Frequently Asked Questions</span>
        </div>
      </div>
    </section>
  );
};

export default CitiesRight;
