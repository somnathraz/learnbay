import { React, useState } from "react";
import styles from "./CitiesRight.module.css";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

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
        {cityTextDSPune ? (
          <div className={styles.CitiesRightInner}>
            <p>
              The <b>Data Science Course in Pune</b> provided by Learnbay
              promotes live training by industrial experts in Data Science. The
              online training is structured keeping in mind the local industry
              needs. You can get a lucrative and ever-growing career in this
              field with the skills and expertise gained. Data Science,
              Artificial Intelligence, and Machine Learning are continuously
              transforming the business landscape in the 21st century, and
              Learnbay’s <b>Data Science Training in Pune</b> is tailored to
              meet your needs. It’s good to deeply understand a subject to get a
              rewarding career.
            </p>
            <p>
              Industry experts design our <b>Data Science course</b> in the best
              way to promote both theoretical and practical knowledge
              cost-effectively. Data Science is one of the most rewarding
              professions in the 21st Century. The course is customized
              according to the current high demand for data scientist roles.{" "}
            </p>
            <p>
              Whether a fresher or a software professional, you will get live
              high-quality training from our experts. The technological outburst
              has made it necessary to have the required knowledge and skills to
              operate in the technology sector. Because massive amounts of data
              are being produced daily in different sectors, it has become an
              essential part of almost every company.
            </p>
            <p>
              A data scientist uses modern tools and techniques to drive
              meaningful information and make decisions. Learnbay’s{" "}
              <b>Data Science Course in Pune</b> is designed to help you learn
              about Data Science from scratch according to your domain. Research
              shows that the top skills required to become a data scientist are
              analysis, communication, statistics, deep learning, machine
              learning, and artificial Intelligence, among many others.
            </p>
            <p>
              Our <b>Data Science course in Pune</b> is a two to three year
              subscription program. We have collaborated with IBM to provide a{" "}
              <b>data science certification course</b>. They are globally
              recognized and guarantee 100% job assistance. One-on-one,
              personalized, live doubt-clearing sessions with skilled MAANG data
              scientists make Learnbay different from the rest. Its unique cloud
              lab feature provides access to live Data science projects from
              MNCs and even offers guidance from industrial leads. This way, you
              can learn data science without leaving your job.
            </p>
            <p>
              Learners at Learnbay get a list of specialized domains. To work as
              a data scientist, you must choose the right domain. The career
              experts at Learnbay analyze the profiles and suggest the best
              course according to your domain. It helps you to learn the
              necessary skills with a greater degree of expertise.{" "}
            </p>
            <p>
              A Forbes study has found that 2.5 quintillion bytes of data are
              created each passing day. It is where the role of a data scientist
              comes in. They are responsible for analyzing and organizing such
              huge data for organizations. It, in turn, creates ample
              opportunities.{" "}
            </p>
            {read ? (
              <>
              <p>The <b>data science learning modules</b> you get at Learnbay are
              customized according to the domain you have chosen while keeping
              in mind the industry requirements. The course provided by us will
              not only make you a skilled data scientist but will also make you
              an expert in particular fields. Learnbay plays an important role
              since you get to choose your specialized domain.{" "}
            </p>
            <p>
              The <b>data science course</b> is a complete training course
              covered using multiple modules. Learners from a non-technical
              background receive special coding classes to get along with
              learners who know the technicalities. The modules include{" "}
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
              In this module, learners get a brief introduction to data-related
              tools. The module helps you easily learn about particular
              real-time projects and Capstone projects. Learners also gain a
              thorough knowledge of the fundamental relevance of projects using
              data and the role of data in business. The cohort orientation also
              teaches the significance of data in decision-making. You learn
              data utilization to enhance industrial operations and management.
            </p>
            <p>
              Special Programming classes are designed to teach learners the
              types of code editors in Python, introduction to Anaconda and
              Jupyter notebook, Flavors of Python, Introduction to Git, Github,
              and Python Fundamentals. You also learn the difference between
              Source Code vs. Byte Code vs. Machine Code. The fundamentals of
              statistics help them to learn to mean, median, mode, standard
              deviation, average, probability, and introduction to linear
              algebra.{" "}
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
              This is an essential module focusing on different statistics and
              data processing methods. In this module, you learn about the
              fundamentals of Maths and probability, an introduction to
              statistics, and statistical learning. The modules also cover
              Linear Algebra, Data Processing, Exploratory Data Analysis, and
              EDA. It consists of 4 practice sets and assignments.{" "}
            </p>
            <p>
              <b>Module 2: Machine Learning</b>
            </p>
            <p>
              In this module of Learnbay’s data science course, you learn about
              regression and classification models, linear regression models,
              data preprocessing, evaluation metrics for classification models,
              Decision Tree Models, Random Forest Models, Hyperparameter Tuning,
              and Naive Baye’s model. The module also provides in-depth
              knowledge about K means and Hierarchical Clustering, Principal
              Component Analysis, and Support Vector Machine.{" "}
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
              <b>Other Courses We Offer in Data Science</b>
            </h2>
            <p>
              <b>Data Science Foundation Program</b> : This program is designed
              for beginners who want to kick-start their career in Data Science.
              In this course, you are introduced to Data Science along with
              Python Programming. The course also clearly explains Data
              Analytics vs. Business Analytics vs. Big Data. You also work on
              hands-on projects, which will help you get real-world experience.
              The course gives you a rigorous 200+ hours of learning at just
              ₹75,000 + 18% GST.{" "}
            </p>
            <p>
              <b>Advanced-Data Science and AI Program</b> : If you wish to dive
              deep into the field of Data Science, this course is the right fit
              for you. The experts at Learnbay will help you develop solid
              knowledge. The course teaches you Deep Learning and Neural
              Networks. You can choose this if you want to switch your domain.
              You get 250+ hours of learning at just ₹95,000 + 18% GST.
            </p>
            <p>
              <b>Data Science and AI for Managers and Leaders</b> : This data
              science course is best suited if you are a professional with over
              8 years of experience in any field. Our industrial experts help
              you make a switch as a professional and not a fresher. The
              domain-specific industrial projects help you to break through the
              crowd and stand out among the rest. You can also attend classroom
              sessions and get assistance in online and offline project
              sessions. The program fee is just ₹1,05,000 + 18% GST. Our experts
              make you interview-ready, and the placement cell ensures you get
              guaranteed interview calls from FinTech Startups and Top MNCs.
            </p>
            <p>
              <b>Data Science and AI Master Program</b> : This course covers all
              the skills a data scientist must possess. The MAANG and MNC
              experts guide the working professionals having experience in any
              domain. The trainers have 8+ years of experience and provide 500+
              hours of training. You can opt for either a weekday or a weekend
              batch. The course teaches you data structure algorithms, Business
              Analytics, and the basics. To make your experience relevant,
              Leanbay’s Data Science Course helps you work on domain-specific
              industrial projects. The 3-year subscription gives you limitless
              access to learning materials. The course comes at just ₹1,25,000 +
              18% GST.
            </p>
            <h2>
              <b>Available Domains at Learnbay Data Science Course in Pune</b>
            </h2>
            <p>Some available domains are </p>
            <ol type="1">
              <li>
                <b>Data Science for Sales and Marketing Professionals</b> : Your
                data science abilities are useless without domain expertise.
                From inventory management to merchandising, data science applies
                in most areas of sales and marketing. Targeting valuable
                customers has become an easy task now.
              </li>
              <li>
                <b>Data Science for HR</b> : Did you know you can reduce
                employee turnover rates by having a data scientist on your team?
                Online data science training helps you find opportunities to
                boost employee engagement, creating an effective workforce.
              </li>
              <li>
                <b>Data Science for Healthcare Workers</b> : Data Science has
                paved its way in the healthcare domain as well. From predicting
                diseases early to collecting and sending real-time updates to
                doctors, it has helped devise treatments efficiently.{" "}
              </li>
              <li>
                <b>Data Science in BFSI Domain</b> : Data Science in the BFSI
                domain help in fraud detection, enhancing customer support, and
                improving operational efficiency. A Data Science course helps
                you gain an advantage over others in the same field.{" "}
              </li>
              <li>
                <b>
                  Data Science in Manufacturing, Automotive, and Telecom Domain
                </b>{" "}
                : The online data science training in this domain helps you
                learn how data is collected in different manufacturing settings.
                It also gives you a brief knowledge of the telecom sector’s
                network performance improvement.{" "}
              </li>
              <li>
                <b>Data Science in Oil, Gas, and Energy Domain</b> : A data
                science course in this domain teaches you the role of analytics
                and data science in the energy sector and oil and gas industry.
              </li>
              <li>
                <b>Data Science in Media, Hospitality, and Transport Domain</b>{" "}
                : This course teaches you everything from identifying hotel
                issues to satisfying customer needs by improving business
                strategies.{" "}
              </li>
            </ol>
            <p>
              Learnbay provides its learners with flexible training options. You
              can choose online or offline training sessions to avail the{" "}
              <b>data science course in Pune</b>. You can also access recorded
              lecture videos to learn anytime you want.{" "}
            </p>
            <p>
              The experts have predicted that by 2026, the industry will have
              1105 million data scientist jobs. Both private and public sector
              firms need data scientists to function efficiently.{" "}
            </p>
            <p>
              Ever found yourself wondering about the{" "}
              <b>Best Data Science Training Institute in Pune</b>? Well, this is
              the right place for you. Learnbay provides you with live training
              at affordable prices. Want to stand out in your domain? Take the
              course by{" "}
              <a
                href="https://www.learnbay.co/data-science-course-training-in-pune"
                style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"
              >
                Learnbay Institute
              </a>
              , as this will be one of the best career choices you will ever
              make.{" "}
            </p>
            <p>
              Also, did you know that the average{" "}
              <b>data scientist salary in Pune</b> is ₹8,20,000 per year?
              Learnbay’s <b>online data science training </b>allows you to break
              through your career in this field!
            </p>
            </> 
            ) : ("")}
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
              Learnbay's <b>Data Science course in Bangalore</b> is structured
              online training that allows you to gain skills and expertise in
              core aspects of data science, AI and ML, which are responsible for
              transforming the business landscape. Data Science is undoubtedly
              considered the most important phenomenon for business growth in
              the <b>21st century</b>. Indeed, a <b>career in Data Science</b>{" "}
              is the most rewarding one. <b>Data Science courses</b> are
              specifically created to help aspiring data scientists secure their
              careers with the Data Science foundation.
            </p>
            <p>
              Learnbay's <b>Data Scientist course</b> is designed to deliver
              theoretical and practical knowledge on all elements of Data
              Science, including Programming, Maths, Statistics, AI, Machine
              learning, and the business side of Data science. This allows
              students to gain the in-demand spectrum of data science skills and
              provide appropriate Data Science solutions to Business problems.
            </p>
            <p>
              Data Science has found many importance in business applications in
              organisations. The vast majority of modern industries work in
              close coordination with data, and they base all of their crucial
              decisions on the insightful information derived from it. In
              today’s business world, a competent Data Scientist happens to be a
              major part of a company's workforce since they draw future plans
              based on data. Further, <b>IBM</b> has reported that there will be
              over
              <b>7,00,000 new job opportunities in Data Science and AI</b> in
              the upcoming years.
            </p>
            <p>
              Bangalore is one of the world's major cities, with an impressive
              infrastructure and abundant business opportunities. It is also
              considered the IT hub of India, where many tech companies and
              startups are happening. This puts <b>data scientists' jobs</b> in
              high demand across various domains. Data Scientist is also a
              lucrative career with a high package in Bengaluru. As mentioned in
              glassdoor,{" "}
              <b>
                the average salary of a Data Scientist in Bengaluru is INR
                11,00,000 annually.
              </b>
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
              is a data science certification course offered by Learnbay in
              Bangalore. It is designed by MNC experts as per the current
              industry requirements and in an effort to help the data science
              aspirants in the city transform their careers. The Data Science
              online course is conducted via live interactive classes by
              industry trainers.
            </p>
            {read ? (
              <>
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
                    The IBM Certified Data Scientist course in Bangalore comes
                    with a 9 months (300+ hours) course duration.
                  </b>
                </p>
                <p>
                  The Structured data science course consists of 4 - Terms:{" "}
                </p>
                <p>
                  <b>Module 0 - Preparatory Classes (Programming+Maths)</b>
                </p>
                <p>
                  This Preparatory module helps you become familiar with the
                  basics of Data Science and Machine Learning. It is a
                  preliminary phase to help individuals, particularly
                  non-programmers, become comfortable with the basics of maths,
                  programming, and data science foundation. This module covers
                  basic Python And R, Basic Mathematics, Essential Statistics
                  for Data Science, Introduction to Anaconda, Jupyter notebook,
                  Git and Github for data science and other practical materials.
                </p>
                <h3>Term 1 - Python For Data Science</h3>
                <p>
                  <b>Module (1) Python Programming</b>
                </p>
                <p>
                  This is the essential part of the course, which comes with
                  full-time dedicated training sessions through{" "}
                  <b>Live Instructor-Led Online Training</b>. This module covers
                  the fundamentals of Python Programming, which is an essential
                  tool to get started as a modern data scientist. Here, you will
                  learn basic programming, Python data types, Functions and
                  modules, libraries including Numpy and Pandas, and case
                  studies using Python libraries.
                </p>
                <h3>Term 2 - Statistics and Machine Learning</h3>
                <p>
                  <b>Module (1) - Statistics</b>
                </p>
                <p>
                  This is the next essential module that focuses on basic to
                  advanced statistics concepts for Data science. In this module,
                  you will be equipped with the fundamentals of statistics and
                  probability, inferential and descriptive statistics, EDA, and
                  data processing. You will also receive 4 practice assignments
                  on statistics for experiential learning.
                </p>
                <p>
                  <b>Module (2) - Machine Learning</b>
                </p>
                <p>
                  In this module of the data science course, the trainer will
                  equip you with cutting-edge machine learning techniques and
                  tools, which are essential for model building and, thereby,
                  decision-making. This module covers advanced ML techniques,
                  including regression and classification models, KNN-model,
                  Clustering techniques, PCA, and Support Vector Machine (SVM).
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
                  <b>Live Interactive Classes:</b> The classes are hassle-free
                  and completely online, where you can interact with trainers
                  and other students.
                </p>
                <p>
                  <b>One-on-one Mentorship:</b> You will be provided with a
                  mentor who can guide you throughout the training from project
                  inception to completion to placement.
                </p>
                <p>
                  <b>Live Project Sessions:</b> You will gain hands-on
                  experience by working on 15+ live projects from global MNCs
                  under the supervision of project mentors. An exclusive feature
                  of cloud lab is also available.
                </p>
                <p>
                  <b>Doubt Clearance Sessions:</b> Multiple Q&A sessions are
                  conducted to clarify your doubts with our instructors, even
                  after the course completion.
                </p>
                <p>
                  <b>Resume-building Support:</b> You can create a job-ready
                  resume and portfolio at the hands of experts and mentors to
                  help you get shortlisted by potential employers.
                </p>
                <p>
                  <b>Interview Preparation:</b> Learnbay trainers will equip you
                  with the latest and in-demand interview Q&A to face the tricky
                  MAANG interviews with confidence.
                </p>
                <p>
                  <b>Mock Interviews:</b> By participating in several mock
                  interviews, our professionals will assist you in improving
                  your interview success rate and accelerating the hiring
                  process.
                </p>
                <h2>Other Courses we offer in Data Science:</h2>
                <ol type="1">
                  <li>
                    <b>Data Science Foundation Program - </b>The data science
                    foundation course is a beginner-friendly course explicitly
                    crafted to allow non-technical aspirants to reshape their
                    careers in this lucrative field. The data science course in
                    Bangalore covers everything from basic data science
                    techniques to advanced AIML, Data Science Project Workflow,
                    Cutting-edge data science and AI tools, Various Roles in
                    Data Science and real-world applications of Data Science.
                    The data science course fee for this program is INR 75,000,
                    exclusive of GST.
                  </li>
                  <li>
                    <b>Advance Data science and AI Course - </b>The Advance data
                    science course is designed meticulously for working
                    professionals of all domains and levels of experience. This
                    course covers everything from advanced data science and AI
                    tools and techniques, including visualisation, data
                    processing, EDA, feature engineering, and model deployment.
                    The advanced data science course fees are INR 95,000,
                    exclusive of GST.
                  </li>
                  <li>
                    <b>Data Science and AI for Managers & Leaders - </b>This
                    training course is a comprehensive program offered by
                    Learnbay specifically crafted for those in senior and
                    managerial positions about the top-notch tools and
                    techniques used to draw valuable insights. Managers in every
                    organisation must have a strong understanding of data
                    science to make data-driven decisions effectively and boost
                    revenue growth.
                  </li>
                  <p>
                    The course fee for this manager course is INR 105,000,
                    exclusive of GST.
                  </p>
                  <li>
                    <b>Data Science and AI Master Program - </b>This
                    domain-specialised data science course is a complete boot
                    camp covering everything a data scientist must possess. The
                    duration of this master's program is 15 to 17 months,
                    depending on your preferred batch (week and weekend). After
                    completing this course, you will become an expert data
                    scientist and be able to manage teams in leading firms.
                  </li>
                  <p>
                    The course fee for this master's program is 125,000,
                    Exclusive of GST.
                  </p>
                  <p>
                    Note: All data science courses at Learnbay come with the
                    option of no-cost EMI.
                  </p>
                </ol>
                <h2>
                  Available Domains at Learnbay Data science Course in Bangalore
                </h2>
                <ol type="1">
                  <li>
                    <b>Finance Domain - </b>Finance-related investments in data
                    science offer a wide range of career options. Cybersecurity,
                    data science, machine learning, and AI are just a few topics
                    with a technology focus. Blockchain development and
                    quantitative investing are two jobs that require financial
                    expertise.
                  </li>
                  <li>
                    <b>Operations Domain - </b>Data science and analytics allows
                    us to gather relevant data, unearth insights, and make
                    data-driven decisions by helping us to comprehend an
                    organisation's operations.
                  </li>
                  <li>
                    <b>Marketing Domain- </b>Data science is heavily used in
                    marketing-related fields like consumer engagement, SEO, and
                    profiling. Additionally, new data science and analytics
                    applications in marketing are being developed daily.
                  </li>
                  <li>
                    <b>HR Domain - </b>A data science expert on the HR team can
                    provide the company information for effectively managing
                    personnel, enabling it to move towards its objectives
                    steadily. Data science is a ground-breaking technique that
                    enables businesses to track costs and the outcomes of
                    candidate engagement programmes statistically and to
                    evaluate the cost-effectiveness of various HR activities.
                  </li>
                  <li>
                    <b>Healthcare Domain - </b> According to a survey,
                    healthcare fields store 30% of all global data. The
                    information contained in these fields can assist the
                    government in a variety of ways. Medical imaging is one of
                    the most effective applications of data science in
                    healthcare. Data Science, combined with Machine Learning,
                    teaches computers to interpret MRIs, X-rays, mammograms, and
                    other types of medical reports.
                  </li>
                  <li>
                    <b>E-Commerce, Retail and Supply Chain Domain - </b>Students
                    who choose to take this elective learn how to analyse data
                    and find significant insights that can provide businesses a
                    competitive edge. Sentiment analysis, Google Analytics, NLP,
                    recommendation systems, deep learning, text analysis, and
                    customer behavioural analytics are some examples of the RSCA
                    process.
                  </li>
                  <p>
                    The purpose of this domain programme is to acquaint
                    participants with the fundamentals, components, business
                    models, and other facets of managing an e-commerce
                    organisation.
                  </p>
                  <li>
                    <b>Manufacturing Domain - </b>Manufacturing is the practice
                    of creating products by the application of human labour,
                    equipment, tools, and chemical or biological processing or
                    formulation. The most commonly used term in the context of
                    industrial design, the secondary sector of the economy,
                    refers to human activity ranging from handicraft to
                    hightech.
                  </li>
                </ol>
                <p>
                  <b>Learnbay</b> offers flexible learning options, from
                  Dedicated <b>Data Science online Training in Bangalore</b> to
                  offline Data Science classroom training in Bangalore for
                  project sessions, to exceptional recorded videos via Learnbay
                  LMS.
                  <br />A recent LinkedIn survey indicates that data science has
                  significantly increased in demand over the past three years,
                  with a 37% surge.
                </p>
                <p>
                  Learnbay <b>Data Science course fee in Bangalore</b> ranges
                  from <b>INR 75,000</b> to <b>INR 125,000</b> according to your
                  preferred domain and learning choice. To learn more about
                  other <b>data science course fees</b>, refer to the site's
                  desired course page.
                </p>
                <p>
                  Are you looking for the{" "}
                  <b>Best Data Science Training Institute in Bangalore?</b>
                </p>
                <p>
                  You are certainly in the right place! <b>Learnbay</b> is
                  paving the way to becoming India's most reputable training
                  institute. Learnbay delivers real-time, qualitative training
                  at affordable pricing. Learnbay institute has proudly assisted
                  over 500+ aspirants in pursuing their dream careers.{" "}
                  <b>IBM</b>, being our accreditation partner, has global
                  recognition.
                </p>
                <p>
                  <b>
                    <a
                      href="https://www.learnbay.co/"
                      style={{ color: "#2D9CD7", fontWeight: "600" }}
                      target="_blank"
                    >
                      Learnbay Institute
                    </a>
                  </b>{" "}
                  provides All-inclusive training delivered by industry
                  professionals to help you become a hero to rule the world.
                  Thus, acquiring Learnbay Training is undoubtedly the best
                  career choice you can make.
                </p>
                <p>
                  Almost every business needs data since it helps them make
                  decisions based on current facts, statistics, and trends. The
                  demand for data is only going up. Therefore data science has
                  become a multifaceted field.
                </p>
                <p>
                  Learnbay offers affordable, high-quality and real-time
                  training courses to graduates and IT professionals wanting to
                  upgrade their skills. In today's age of technological
                  explosion, it is inevitable to have diverse knowledge and
                  skills to operate cutting-edge technology. Technology is
                  paving the way for a better future, and we have the ability to
                  master the field by being acquainted with it.
                </p>
                <p>
                  Data science is necessary for this fourth industrial
                  revolution era, and data scientists are now the carrier of big
                  data. It is also reported that{" "}
                  <b>
                    the market size of data science platforms is expected to be
                    worth USD 178 billion by 2025.
                  </b>
                </p>
                <p>
                  Bangalore is home to a youthful generation of technological
                  natives who have the business acumen and creativity necessary
                  to fuel the global tech industry. Moreover, AI, machine
                  learning, and IoT are saturating the market and improving the
                  ecosystem amid this storm of the entrepreneurial revolution.
                  The city has enormous potential for growth in the coming
                  decades as well as expanding revenue.
                </p>
                <p>
                  In the last few years, the volume of data generated, collected
                  and reproduced globally escalated from 1.2 trillion GB to 59
                  trillion GB, which is almost a 5,000% growth. What will data
                  do in the coming years?
                </p>
                <p>
                  <b>Data Science courses in Bangalore</b> are the entry point
                  to the best IT systems in the city; becoming a data scientist
                  has never been so easy. Sign up for{" "}
                  <b>Data Science Online Training in Bangalore</b> to upgrade
                  your skills to secure a lucrative career!
                </p>
                <p>
                  <b>Did You Know?</b>
                </p>
                <p>
                  <b>
                    The Average Data Scientist's Salary in India is INR 10 lakhs
                    per year.
                  </b>{" "}
                  Further, the average <b>Data Scientist Salary in Bangalore</b>
                  , as mentioned in <b>Payscale</b>.com - <b>is INR 989,454</b>{" "}
                  per annum. Ultimately, Learnbay's{" "}
                  <b>Data Science Certification in Bangalore</b> can really help
                  you break through in the data science field!
                </p>
                <p>
                  <b>Learnbay</b> also provides classroom mode for{" "}
                  <a
                    style={{ color: "#2D9CD7", fontWeight: "600" }}
                    target="_blank"
                    href="https://www.learnbay.co/machine-learning-course-training-in-bangalore"
                  >
                    machine learning
                  </a>{" "}
                  and
                  <a
                    style={{ color: "#2D9CD7", fontWeight: "600" }}
                    target="_blank"
                    href="https://www.learnbay.co/artificial-intelligence-ai-course-training-bangalore"
                  >
                    {" "}
                    artificial intelligence courses in Bangalore
                  </a>
                  , along with data science courses.
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
