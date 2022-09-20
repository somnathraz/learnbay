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
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeftDomain";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRightdomain";
import FAQNew from "../components/FAQNewCity/FAQNewDomain";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import {
  AnalyticsFaqDataH,
  AnalyticsDomainFaqDataH,
  AnalyticsPaymentFaqDataH,
  AnalyticsCapstoneFaqDataH,
  AnalyticsCertificationFaqDataH,
  AnalyticsjobFaqDataH,
  AnalyticsMentorshipFaqDataH,
  AnalyticsSupportFaqDataH,
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
          Data Analytics Course in Hyderabad | Data Analytics Training in
          Hyderabad
        </title>
        <meta
          name="description"
          content="Data Analytics Course in Hyderabad. Learnbay is Advanced Data Analytics Course Training Institute in Hyderabad. Data Analytics course in Hyderabad will enhance your career"
        />
        <meta
          name="Keywords"
          content="Data Analytics course in Hyderabad, Data Analytics training in Hyderabad, Data Analytics institute in Hyderabad, best Data Analytics institute in Hyderabad, Data Analytics course in Hyderabad, Data Analytics certification in Hyderabad, Data Analytics training institute in Hyderabad, advanced Data Analytics course in Hyderabad, Data Analytics course with placement guarantee, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-Hyderabad"
        />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
        />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="Daily" />
        <meta name="author" content="Learnbay" />
        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="Worldwide" />
        <meta name="robots" content="ALL" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org/", 
    "@type": "HowTo", 
    "name": "How to apply for Data Analytics course?",
    "description": "You just have to follow 3 easy steps to enroll in our advanced Data Analytics course",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
    "totalTime": "PT6M",
    "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "6"
    },
    "supply": {
    "@type": "HowToSupply",
    "name": "We provide Advanced Data Analytics course in Hyderabad, Delhi, Pune, Chennai, Bangalore, Mumbai, Canada, Dubai"
    },
    "tool": {
    "@type": "HowToTool",
    "name": "Data Science, Machine Learning, artificial intelligence, data analytics"
    },
    "step": [{
    "@type": "HowToStep",
    "text": "Visit our website and fill the enquiry form",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
    "name": "Fill Enquiry Form",
    "url": "https://www.learnbay.co/data-science-course/"
    },{
    "@type": "HowToStep",
    "text": "Talk to our experts for career counseling",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/data-science-ai-for-managers.webp",
    "name": "Talk to Expert",
    "url": "https://www.learnbay.co/data-science-course/"
    },{
    "@type": "HowToStep",
    "text": "Get enrollment in our Data Analytics course",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
    "name": "Get enrollment",
    "url": "https://www.learnbay.co/"
    }] 
   } `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.learnbay.co/"
    },
    "headline": "Advanced Data Analytics Course Training in Hyderabad",
    "description": "Data Analytics Course in Hyderabad. Learnbay is the Best Data Analytics Courses Training Institute in Hyderabad with guarantied job placement. Data Analytics course Certification will improve skills",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp", 
    "author": {
    "@type": "Organization",
    "name": "Learnbay",
    "url": "https://www.learnbay.co/"
    }, 
    "publisher": {
    "@type": "Organization",
    "name": "Learnbay",
    "logo": {
    "@type": "ImageObject",
    "url": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp"
    }
    },
    "datePublished": "2021-10-01",
    "dateModified": "2022-04-21"

   } `,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
    "@type": "Question",
    "name": "What are the prerequisites for the Data Analytics Training Course in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "There are no prerequisites for this Data Analytics certification course in Hyderabad as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for Non-IT/Non-programmers. However, basic knowledge of applied Mathematics/Statistics is a must."
    }
    },
    {
    "@type": "Question",
    "name": "What if I miss a few classes due to an emergency?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "In case you miss a few classes, you will be provided with backup classes in other batches. But if you could not attend more classes, you can opt for batch change and join the next batch."
    }
    },{
    "@type": "Question",
    "name": "What is a Flexi Subscription in the Data Analytics Certification Program in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "Those who enroll for Data Analytics live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 1 year, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
    },{
    "@type": "Question",
    "name": "What’s the duration of the Data Analytics Program in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "The duration of this Data Science Course is about 6 months ( 180 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. Classes will be conducted on weekdays and weekend batches. Weekday batch - 4.5 months Monday to Friday - 2 hours/day Weekend batch - 6 months Saturday & Sunday - 3.5 hours/day."
    }
    },{
    "@type": "Question",
    "name": "What is the mode of data science training at Learnbay, Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "We provide both classroom and online data science training modes. Based on your requirement, you can choose your preferred mode."
    }
    },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the real-time projects and interview preparation sessions."
    }
    },
        {
            "@type": "Question",
            "name": "What is the total fee for the Data Analytics Program in Hyderabad?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "The total program fee for the Data Analytics Program is INR 70,800/- inclusive of GST."
            }
            },
            {
                "@type": "Question",
                "name": "Can I pay in installments for INR 70,800/-?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 11.8k/month up to 6 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip.Please check with our sales team to know more +917795687988"
                }
                },
                {
                    "@type": "Question",
                    "name": "Is there any scholarship/discount available for the Data Analytics Certification in Hyderabad? What is Group Discount?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
                    }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the refund policy for the Data Analytics Course at Learnbay?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
                        }
                        },
                        {
                            "@type": "Question",
                            "name": "How many real-time projects/case studies will be there?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc."
                            }
                            },
                            {
                                "@type": "Question",
                                "name": "How many real-time projects will be there?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We have a set of 5 Real-time projects from multiple industries like Healthcare, Banking, Finance, Insurance, Retail, etc."
                                }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How will the project be executed?",
                                    "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "At Learnbay, you will be required to work in a group where your project group will be assigned a specific project mentor with complete assistance and guidance."
                                    }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is there any accredited certification after course completion?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, you will be awarded IBM accredited Data Analytics Certificate on successful course completion."
                                        }
                                        },
                                        
                                            {
                                                "@type": "Question",
                                                "name": "What's the eligibility for a job assistance program in Learnbay?",
                                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
                                                }
                                                },
                                                {
                                                    "@type": "Question",
                                                    "name": "How many interview calls will i get at Learnbay?",
                                                    "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "At Learnbay, you’ll be provided with job assistance after the completion of the course for a period of 1 year."
                                                    }
                                                    },
                                                    {
                                                        "@type": "Question",
                                                        "name": "What is a job-readiness program?",
                                                        "acceptedAnswer": {
                                                        "@type": "Answer",
                                                        "text": "Job readiness program helps you prepare for interviews which include: Resume preparation sessions, Preparing projects for a strong portfolio, Interview guidance and prep sessions, 1:1 Mock interviews based on targeted companies and roles."
                                                        }
                                                        },
                                                        {
                                                            "@type": "Question",
                                                            "name": "Will I get job referrals at Learnbay?",
                                                            "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes, we offer dedicated placement assistance by referring to your profile through our partnered consultancies and companies."
                                                            }
                                                            },
                                                            {
                                                                "@type": "Question",
                                                                "name": "Until when will the students get the facility of mentorship?",
                                                                "acceptedAnswer": {
                                                                "@type": "Answer",
                                                                "text": "Our mentors will provide data science training to the students until the completion of the course."
                                                                }
                                                                },
                                                                {
                                                                    "@type": "Question",
                                                                    "name": "Can a Learnbay student choose to study from their desired mentor?",                             
                                                                    "acceptedAnswer": {
                                                                    "@type": "Answer",
                                                                    "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
                                                                    }
                                                                    },
                                                                    {
                                                                        "@type": "Question",
                                                                        "name": "When is the job assistance provided at Learnbay?",
                                                                        "acceptedAnswer": {
                                                                        "@type": "Answer",
                                                                        "text": "Job assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNC’s/startups. This assistance is provided unless one gets placed in a company."
                                                                        }
                                                                        },
                                                                        {
                                                                            "@type": "Question",
                                                                            "name": "How long will I get Job referrals?",
                                                                            "acceptedAnswer": {
                                                                            "@type": "Answer",
                                                                            "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
                                                                          }
                                                                        }]
                                                                                          }
                                                                                         } `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
   "@context": "http://schema.org",
   "@type": "EducationEvent","name": "Data Analytics Course Training in Hyderabad",
   "description": "Learnbay offers a Data Analytics course in Hyderabad, the most comprehensive Data Analytics course in the market, covering the complete Data Analytics lifecycle.",
   "image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp",
   "performer":"Learnbay", 
   "offers":{
   "@type": "AggregateOffer",
   "lowPrice": "39999",
   "highPrice": "110000",
   "url" : "https://www.learnbay.co/",
   "availability" : "https://schema.org/InStock",
   "price": "39999",
   "priceCurrency": "INR",
   "validFrom": "2022-05-01"},
   "startDate":"2022-05-01",
   "endDate": "2022-08-31",
   "url" : "https://www.learnbay.co/","duration":"80", 
   "eventAttendanceMode":"https://schema.org/MixedEventAttendanceMode",
   "eventStatus":"http://schema.org/EventScheduled",
    "location": [{
    "@type": "VirtualLocation",
    "url" : "https://www.learnbay.co/"
    },{
      "@type": "Place",
      "name": "Learnbay - Artificial Intelligence(Ai), Artificial Intelligence(Ai) Course Training in Hyderabad",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102 (Above Sangam Sweets)",

        "addressLocality": "HSR Sector 3",
        "postalCode": "560102",
        "addressCountry": "Bengaluru, Karnataka,INDIA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.914745887585838",
        "longitude": "77.64087553886982"
      } 
    }], 
   "organizer": {
    "@type": "Organization",
    "name": "Learnbay",
    "url": "https://www.learnbay.co"
  }
} `,
          }}
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          dataScience={true}
          deskTopPara="First-Track Industrial Training For Early Professionals"
          mTopPara="First-Track Industrial Training For Early Professionals"
          spanTitleText="For Professionals"
          spanMTitleText="For Professionals"
          title="Data Analytics Course Training in Hyderabad"
          mTitle="Data Analytics Course Training in Hyderabad"
          desc="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course6.png"
          width="900"
          height="762"
          alt="data analytics course training in hyderabad"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Aimed for"
            p11="Professional Beginners"
            p2="14 LPA - 22 LPA"
            p22="Salary Package"
            p3="1:1"
            p33="Career Support"
            p4="Financing as low as"
            p44="₹ 6,392/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 6,392/month"
          Fee="₹ 65,000 +GST"
          dataScience={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="data analytics course training in hyderabad"
            title="Why Enroll In Data Analytics Course Training in Hyderabad?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream Data Analytics role. Master the trending analytical tools."
            Box2h5="Exclusive Hackathons"
            box2desc="Hone newly earned coding skills through multiple coding competitions. Exclusively arranged by Learnbay experts."
            Box3h5="Premium Mentoring"
            box3desc="Experience the latest tips and tricks of mock interviews and CV writing sessions with MAANG experts."
            Box4h5="Hands-on Experience"
            box4desc="Get diligent real-world project experience, spanning from beginner’s level complexity, directly from relevant companies."
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1="Learnbay is one of the leading data analytics training institutes in Hyderabad, with a broad collection of IBM certification courses. Learnbay's goal is to deliver specialized data analytics training and prepare students for any kind of complex industrial, analytical problems. Everything in the Learnbay data analytics course is taken good care of, from hands-on training via live data analytics projects to qualifying for interviews with top-tier MNCs. Learnbay delivers an immersive data analytics learning experience with one-on-one doubt clearing sessions led by renowned industry professionals. This distinguishes it as a one-stop resource for everyone interested in becoming a professional job-ready Data analyst."
              ProgramBot2="Learnbay's Data analytics course in Hyderabad is tailored to match the industry's ever-changing needs. This Data Analytics course with job placement support is suitable for experienced working professionals and early career professionals in any field. Its hands-on learning methodology incorporates interactive sessions with leading practitioners and industry projects to cover topics like Data analysis, Data visualization, and regression techniques in depth."
              ProgramHead3="Why is Learnbay a great institute for the professional Data analytics course in Hyderabad?"
              ProgramBot3="Learnbay offers 100% live interactive training with flexible scheduling and sessions taught by knowledgeable data analysts. Furthermore, our data analytics course in Hyderabad includes a one-year flexi membership, allowing students to learn at their own pace. Learners can select their favorite batch and mentors, a unique feature. Non-programmers might take additional lessons to keep on track with their peers."
              ProgramBot31="Students, on the other hand, can be well-prepared to excel in the data-driven world with our world-class data analytics training in Hyderabad. For a well-balanced approach to learning, the Learnbay data analytics certification course with placement contains both practical and theoretical topics."
              CertificationBot1="In Hyderabad, we already have IBM on board with our data analytics industrial initiative. After the course, students will receive an IBM Data Analytics Course Completion certificate."
              CertificationBot2="Learnbay IBM Data analytics training will certainly boost your resume, allowing you to stand out from the pack and attract recruiters' attention."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BA-DA.jpeg"
              ModuleBot1="Learnbay is dedicated to providing the most comprehensive data analytics training in Hyderabad. This Data Analytics Program with placement is tailored to satisfy the industry's ever-changing objectives. Our customized data analytics course in Hyderabad provides basic to advanced data analytics training. We also provide special coding classes for non-programmers who want to strengthen their programming skills."
              ModuleBot2="Countless working professionals have benefited from our data analytics course training in Hyderabad by improving their technical abilities and gaining expertise in various fields."
              ModuleBot3="The IBM data analytics course's modules cover all of the important topics in data analytics tools and methodologies, such as data pretreatment, data exploration, statistical analysis, dashboarding, PowerBI, SQL, etc."
              syllabush1="Preparatory Classes (Programming + Maths)"
              syllabusb1="6 Hours"
              SyllabusBotlist11="Anaconda Installation"
              SyllabusBotlist12="Basics of Programming"
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
              SyllabusBotlist26="Numpy, Pandas, Matplotlib, etc."
              syllabush3="Statistics"
              syllabusb3="50 Hours"
              SyllabusBotlist31="Linear Algebra, Probability"
              SyllabusBotlist32="Permutation & Combination"
              SyllabusBotlist33="Descriptive Stats"
              SyllabusBotlist34="Hypothesis Testing"
              SyllabusBotlist35="Time Series Analysis"
              SyllabusBotlist36="Inferential Stats"
              syllabush4="Industrial Projects &
    Capstone Projects"
              syllabusb4="
    6+ Classes"
              SyllabusBotlist41="Visualize Daily Wikipedia Trends"
              SyllabusBotlist42="Color Detection Project"
              SyllabusBotlist43="
    Real-time Auto Tracking"
              SyllabusBotlist44="Web Scrapping"
              SyllabusBotlist45="Fake News Detection"
              SyllabusBotlist46="Movie Recommendation"
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
              JobBot1="Learnbay aims to introduce high-quality data analysts in Hyderabad. For candidates looking for positions in data analytics, we conduct mock interviews as part of our job support program. We also assist the students with resume writing, technical skills training, and soft skill development."
              JobBot2="Our good terms with MNCs and IBM have aided many students in obtaining positions as data analysts in the top leading businesses in the shortest period feasible. Approximately 700+ Learnbay students have already achieved high-paying jobs with Multinational firms such as Amazon, TCS, EY, JP Morgan, and Oracle after completing the course."
              JobHead2="Roles as Data Analyst"
              JobBot3="Data analysts are in high demand in a lot of industries in Hyderabad. A professional data analyst organizes, analyzes, and stores data to assist businesses in making strategic decisions. A data analyst should have a theoretical as well as a practical understanding of trending analytical tools. Furthermore, they should be able to utilize their knowledge of data collection and analysis to arrive at significant conclusions."
              JobBot4="Learners may use IBM data analytics training to make better business decisions. Our data analytics training course in Hyderabad shows you the real differences between predictive, descriptive, and automated analytics. By pursuing this course, you can learn the most in-demand data analytics skills and land a job with one of Hyderabad's top firms within 6 to 8 months. The different roles of data analytics are"
              JobBot6="Junior Data Analyst,
    Marketing Analyst,
    Data Analytics consultant,
    Financial Analyst,
    HR Analyst,
    Quantitative Analyst,
    Operation Analyst, etc.
    "
              ProjectsBot1="Learnbay's goal is to help students obtain practical hands-on experience by completing several projects with the help of our mentors. You will have the opportunity to work on five popular data analytics projects as part of the data analytics course curriculum in Hyderabad. One of the most appealing aspects of the IBM data analytics course is its premium cloud lab access, which allows students to examine the data handling and mining processes in real-world MNC projects. These live projects associated with the Learnbay data analytics course in Hyderabad Make learning more efficient and industry-paced."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is an accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can take part in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach."
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4="BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
              AlumniBot1="Learnbay works tirelessly to help many aspiring data analysts in Hyderabad achieve their career goals. Our strong links with MNCs and IBM have aided numerous students in obtaining positions around the top leading organizations in the shortest period feasible. More than 700 students have already landed lucrative data analytics job roles at international corporations such as Amazon, TCS, EY, JP Morgan, and Mercedes. Below are a few of the stories shared by our alumni."
              Asrc1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/devraj.jpg"
              AlumniH1="Deveraj"
              Alumnip1="The quality of the content is very nice. What I liked the most was mainly the instructor concentrating on the practical part, live project sessions make you feel confident to attend interviews. Multiple batch options, access for any instructor class videos or materials. The totally positive environment around."
              Asrc2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shezan.png"
              AlumniH2="Shezan Baig"
              Alumnip2="Learnbay is one of the most remarkable data science institutes I've come across. Compared to other institutes in India, it offers a data science course at a low cost. Excellent value for money. Finally, I achieved job satisfaction. I would strongly advise everyone to attend this institute."
              Asrc3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/viraj.png"
              AlumniH3="Viraj Ghodke"
              Alumnip3="For me, learning using the Learnbay platform has been a great experience. The teaching and management team are very helpful. They are constantly willing to clarify each individual's doubts and meet the needs of working professionals. The practice interview sessions were simply like a clone of MNC interviews."
              Asrc4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/shubhangi.png"
              AlumniH4="Shubhangi J. Waghmare "
              Alumnip4="The best in Industry offerings from both cost and curriculum wise. One advantage of joining here is you can access their resources for a lifetime, unlike others where you have accessibility only for a year or so. Most importantly, there is continuous assistance for recruitment."
              alt1="data analytics course training in hyderabad"
              alt2="data analytics course training in hyderabad"
              alt3="data analytics course training in hyderabad"
              alt4="data analytics course training in hyderabad"
              alt5="data analytics course training in hyderabad"
              alt6="data analytics course training in hyderabad"
              alt7="data analytics course training in hyderabad"
              alt8="data analytics course training in hyderabad"
              alt9="data analytics course training in hyderabad"
            />
            <FAQNew
              FaqDatas={AnalyticsFaqDataH}
              DomainFaqDatas={AnalyticsDomainFaqDataH}
              PaymentFaqDatas={AnalyticsPaymentFaqDataH}
              CapstoneFaqDatas={AnalyticsCapstoneFaqDataH}
              CertificationFaqDatas={AnalyticsCertificationFaqDataH}
              jobFaqDatas={AnalyticsjobFaqDataH}
              MentorshipFaqDatas={AnalyticsMentorshipFaqDataH}
              SupportFaqDatas={AnalyticsSupportFaqDataH}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Data Analytics Course Certification Training locations in Hyderabad "
          CityText=" :Medipalli[500098], A.G.College [500030], HMT Township [500054], Hal Hyderabad [500042], Kondapur [500084], Fatehdarwaza [500065], Begumpet [500016], Lingampalli [500019], Kattedan Ie [500077], Falaknuma [500053], Peerzadiguda [500039], Jillellaguda [500079], I.M.Colony [500082], Gajularamaram [500055], Banjara Hills [500034], Gachibowli [500032], Badangpet [500058], Film Nagar [500096], A.Gs. Staff Quarters [500045], Malakpet Colony [500036], Balanagar Township [500037], Amberpet [500013], Bharat Nagar Colony [500018], Chitkul [502307], Don Bosco Nagar [500086], Gsisr Bandlaguda [500068], Yakutpura [500023], Chaithanyapuri Colony [500060], Chandanagar [500050], Appa Himayathsagar [500008], Hyderabad Jubilee [500002], Meerpet [500097], Humayunnagar [500028], Aie Bollaram [502325], Chetlapotharam [502319], Srinagar Colony [500073], Gandhi Bhawan Hyderabad [500001], Darushifa [500024], Gandhinagar Hyderabad [500080], Sarada Nagar [500070], Barkatpura [500027], Gagan Mahal [500029], Elmela [502300], Sanjeev Reddy Nagar [500038], Manikonda [500089], Cyberabad [500081], Boduppal [500092], Dr.B R Ambedkar O.U [500033], Kphb Colony [500072], Huda Residential Complex [500035], Miyapur [500049], L B Nagar [500074], Ashoknagar Hyderabad [500020], Saidabad Colony [500059], Jntu Kukat Pally [500085], Bowenpally [500011], Icrisat [502324], Administrative Buildings [500007], Aziz Nagar [500075], Afzalgunj [500012], Karwan Sahu [500006],Gaganpahad [500052], Ibrahim Bagh Lines [500031], Putlibowli [500095], Bahadurpura [500064], A.Gs Office [500004], Bachupally [500090], A.I.E. R.C.Puram [502032], Ambernagar [500044]."
          CityTextLB="Locations Offered"
          CityTextL=" :Data Analytics Training in Hyderabad, Data Analytics Course in Hyderabad, Data Analytics Course in Gachibowli, Data Analytics Training in Gachibowli,Data Analytics Course in Madhapur, Data Analytics Training in Madhapur, Data Analytics Training Institute in Hyderabad, Data Analytics Course in Kondapur, Data Analytics Training in Kondapur, Data Analytics Course in Begumpet, Data Analytics Course in Lingampalli, Data Analytics Course in Banjara hills, Data Analytics Course in L B Nagar, Data Analytics Course in Boduppal, Data Analytics Course in Kphb Colony, Data Analytics Training in Begumpet, Data Analytics Training in Lingampalli, Data Analytics Training in Banjara hills, Data Analytics Training in L B Nagar, Data Analytics Training in Boduppal, Data Analytics Training in KPhb Colony, Data Analytics Classroom Training in Hyderabad, Data Analytics Training near me, Data Analytics Course near me, Data Analytics Institute near me, Data Scientist Course, Data Analytics Certification, Data Analytics Certification in Hyderabad, Best Data Analytics Course, Best Data Analytics Training"
        />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
