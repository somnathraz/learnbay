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
import Form from "../components/Form/Form";
import CityText from "../components/CityComponent/CityText/CityText";
import CitiesLeft from "../components/CityComponent/CitiesLeft/CitiesLeft";
import CitiesRight from "../components/CityComponent/CitiesRight/CitiesRight";
import FAQNew from "../components/FAQNewCity/FAQNew";
import React, { useState } from "react";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import {
  MachineFaqDataH,
  MachineDomainFaqDataH,
  MachinePaymentFaqDataH,
  MachineCapstoneFaqDataH,
  MachineCertificationFaqDataH,
  MachinejobFaqDataH,
  MachineMentorshipFaqDataH,
  MachineSupportFaqDataH,
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
          Machine Learning Certification Course in Hyderabad - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the Best Machine Learning Training program in Hyderabad with the highly-skilled industry experts and mentors. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Hyderabad, Machine learning training in Hyderabad, Machine learning institute in Hyderabad, best Machine learning institute in Hyderabad, Machine learning course in Hyderabad, Machine learning certification in Hyderabad, Machine learning training institute in Hyderabad, advanced Machine learning course in Hyderabad, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-hyderabad"
        />
        {/* <meta name="robots" content="NOODP,NOYDIR" /> */}
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        {/* <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
        /> */}
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org/", 
    "@type": "HowTo", 
    "name": "How to apply for Machine Learning course?",
    "description": "You just have to follow 3 easy steps to enroll in our advanced Machine Learning course",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
    "totalTime": "PT6M",
    "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "6"
    },
    "supply": {
    "@type": "HowToSupply",
    "name": "We provide Advanced Machine Learning course in Hyderabad, Delhi, Pune, Chennai, Bangalore, Mumbai, Canada, Dubai"
    },
    "tool": {
    "@type": "HowToTool",
    "name": "Data Science, machine learning, artificial intelligence, data analytics"
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
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-for-managers.png",
    "name": "Talk to Expert",
    "url": "https://www.learnbay.co/data-science-course/"
    },{
    "@type": "HowToStep",
    "text": "Get enrollment in our Machine Learning course",
    "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
    "name": "Get enrollment",
    "url": "https://www.learnbay.co/"
    }] 
   } `,
          }}
        /> */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.learnbay.co/"
    },
    "headline": "Advanced Machine Learning Course Training in Hyderabad",
    "description": "Machine Learning Course in Hyderabad. Learnbay is the Best Machine Learning Courses Training Institute in Hyderabad with guarantied Job Assistance. Machine Learning course Certification will improve skills",
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
    "url": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
    }
    },
    "datePublished": "2021-10-01",
    "dateModified": "2022-04-21"

   } `,
          }}
        />{" "} */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
    "@type": "Question",
    "name": "What are the prerequisites for the Machine Learning course with Domain Specialization in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "Basic programming & mathematics knowledge is enough. For strengthening your programming skills we provide special programming classes. We teach required statistics from a very basic level."
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
    "name": "What is a Flexi Subscription in the Machine learning certification course of Learnbay in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "Those who enroll for machine learning live classroom training are eligible for a Flexi Pass. With this option, we will share access to all the ongoing batch details for a period of 3 years, so that you can attend live sessions from any batch and learn at your own pace. This option is best for people working in shifts or on weekends."
    }
    },{
    "@type": "Question",
    "name": "What’s the duration of this Machine Learning course in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "The duration of this course is about 11 months (300 hours) which includes live lectures, hands-on practical training on live projects, and interview preparations. You need to complete the modules within the specified duration to earn a certificate. Classes will be conducted on weekdays and weekend batches. Weekday batch - 9.5 months Monday to Friday - 2 hours/day Weekend batch -11 months Saturday & Sunday - 3.5 hours/day."
    }
    },{
    "@type": "Question",
    "name": "What is the mode of ML training at Learnbay, in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "We provide both classroom and online machine learning training modes. Based on your requirement, you can choose your preferred mode."
    }
    },{
    "@type": "Question",
    "name": "How can I opt for a Hybrid mode of learning?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "Simply, you can choose an online mode of study for the theoretical classes and a classroom mode for all the capstone projects and interview preparation sessions."
    }
    },{
    "@type": "Question",
    "name": "What is domain specialization associated with the Learnbay machine learning certification course in Hyderabad?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "We offer industry-specific full-stack ML modules, via which you learn the respective industry’s best practices."
    }
    },{
    "@type": "Question",
    "name": "What are the available elective domain options?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, Advanced Data Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc."
    }
    },{
    "@type": "Question",
    "name": "Which domain elective is best suited for me?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "You can select your domain based on your prior work experience, academics, and career goals. Book a slot with our industry expert for free profile review and career guidance. +917795687988."
    }
    },{
    "@type": "Question",
    "name": "Why is domain specialization important?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "After enrolling in the ML with domain specialization course, one must opt for domain electives. It is essential to have business/industry knowledge that is useful in feature engineering and modeling. Prior knowledge of the industry and domain aids in the development of more precise and accurate predictive models based on the dataset's attributes. Furthermore, the model will be more observable in a real-world situation."
    }
    },{
    "@type": "Question",
    "name": "Can I select multiple domain electives and do I need to pay extra charges?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "You can select up to 4 domain electives based on your interest and career goals. No, you don’t need to pay any extra charges as domain electives and capstone projects are part of our curriculum."
    }
    },{
    "@type": "Question",
    "name": "What if I don't have any prior experience in any domain?",
    "acceptedAnswer": {
    "@type": "Answer",
    "text": "If you don't have any prior work experience, you can opt for any electives to gain domain expertise and work on real-time industrial projects."
    }
    },
    {
   "@type": "Question",
        "name": "Can I change my domain electives later?",
        "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can change your electives or repeat the training anytime but within the course accessibility duration."
        }
        },
        {
            "@type": "Question",
            "name": "What is the total Fee for this machine learning course in Hyderabad?",
            "acceptedAnswer": {
            "@type": "Answer",
            "text": "The total program fee for the Artificial Intelligence and Machine Learning Program is INR 1,23,900/- Inclusive of GST."
            }
            },
            {
                "@type": "Question",
                "name": "Can I pay in installments for 1,23,900/-?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can pay the installments using a credit card with a no-cost EMI option for INR 10,817/month up to 12 months. You can also choose an interest-free loan by submitting an Aadhar card, Pan Card, and 3-month salary slip."
                }
                },
                {
                    "@type": "Question",
                    "name": "Is there any scholarship available for the Machine Learning certification? What is Group Discount?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Learnbay offers a 15 - 20% scholarship for early birds occasionally. Please check our websites or contact our sales team to know more about the applicable discounts. Group Discount : Group Discount is applicable only if you’re joining with your friends. 5% extra discount: Group of 2 8% extra discount: Group of 3 Max 10% discount: Groupe of 4+."
                    }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the refund policy for this Machine Learning training course at Learnbay in Hyderabad?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Candidates are advised to read Learnbay’s Refund/Cancellation Policy before enrolling in the course."
                        }
                        },
                        {
                            "@type": "Question",
                            "name": "How many capstone machine learning projects will be there?",
                            "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In this course, you’ll be required to work on 2 fresh capstone projects. This will help you get exposure to hands-on projects by implementing your theoretical knowledge gained throughout the training."
                            }
                            },
                            {
                                "@type": "Question",
                                "name": "How many real-time projects will be there?",
                                "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We have a set of 15 Real-time projects from multiple domains such as HR, Marketing, & sales; Retail, e-commerce & supply chain; Healthcare, pharma & clinical research; Banking, finance & Insurance domain; Manufacturing, mechanical & telecom domain; Media, hospitality & transportation domain; Energy, oil & gas domain, AdvancedData Structure & algo; Automotive, IoT & Embedded; Cloud & DevOps, etc. Based on your interest you can choose your project to work on. Click here to download the list of the projects."
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
                                        "name": "Is there any accredited certification after this machine learning course completion in Hyderabad?",
                                        "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, you will be awarded 6 separate IBM accredited Certificates on successful course completion of the Artificial Intelligence and AI Course."
                                        }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "What categories of certifications might I expect to receive?",
                                            "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Deep Learning Fundamentals Deep Learning with TensorFlow Machine Learning with Python Accelerating Deep Learning with GPUs Advance AI & ML Certificate (final) Capstone Project Certificate by IBM."
                                            }
                                            },
                                            {
                                                "@type": "Question",
                                                "name": "What's the eligibility for a job assistance program at Learnbay?",
                                                "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "You should have completed the course with : A minimum score of 70% in assessments Should have completed the assignments and case studies Worked and successfully completed the minimum recommended number of real-time projects."
                                                }
                                                },
                                                {
                                                    "@type": "Question",
                                                    "name": "How long will I get support for job assistance?",
                                                    "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": "You’ll be provided with job assistance after the completion of the course for a period of 1 year."
                                                    }
                                                    },
                                                    {
                                                        "@type": "Question",
                                                        "name": "What is a job-readiness program?",
                                                        "acceptedAnswer": {
                                                        "@type": "Answer",
                                                        "text": "Job readiness programs help you prepare for interviews which include: Resume Preparation sessions Preparing projects for a strong portfolio Interview guidance and prep sessions 1:1 Mock interviews based on targeted companies and roles"
                                                        }
                                                        },
                                                        {
                                                            "@type": "Question",
                                                            "name": "Will I get job referrals at Learnbay?",
                                                            "acceptedAnswer": {
                                                            "@type": "Answer",
                                                            "text": "Yes, we provide placement assistance by referring your profile to our partnered consultancies and companies."
                                                            }
                                                            },
                                                            {
                                                                "@type": "Question",
                                                                "name": "Until when will the Learnbay students in Hyderabad get the facility of mentorship?",
                                                                "acceptedAnswer": {
                                                                "@type": "Answer",
                                                                "text": "Our Mentors will provide ML training to the students until the completion of the course depending on the specialization. Post completion, students can reach out to special mentors for project and placement purposes."
                                                                }
                                                                },
                                                                {
                                                                    "@type": "Question",
                                                                    "name": "Can a Learnbay student in Hyderabad choose to study from their desired mentor?",
                                                                    "acceptedAnswer": {
                                                                    "@type": "Answer",
                                                                    "text": "Every batch has its respective mentor, but if a student is not satisfied with its mentor’s teaching method, they can raise the issue to management and resolve the issues by replacing them with other mentors."
                                                                    }
                                                                    },
                                                                    {
                                                                        "@type": "Question",
                                                                        "name": "When is the job assistance provided and for how long I will get the service?",
                                                                        "acceptedAnswer": {
                                                                        "@type": "Answer",
                                                                        "text": "Placement assistance is provided after the completion of the course. It includes build-up sessions, mock interviews, and referrals from top MNCs/startups. This assistance is provided until one gets placed in a company."
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
        /> */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
   "@context": "http://schema.org",
   "@type": "EducationEvent","name": "Machine Learning Course Training in Hyderabad",
   "description": "Learnbay offers a Machine Learning course in Hyderabad, the most comprehensive Machine Learning course in the market, covering the complete Machine Learning lifecycle.",
   "image" : "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png",
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
        /> */}
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form
              popup={true}
              setTrigger={setPopups}
              dataScienceCounselling={true}
            />
          </div>
        </Popup>
        <FirstSection
          dataScienceCounselling={true}
          deskTopPara=""
          mTopPara=""
          title="Machine Learning Course in Hyderabad"
          mTitle="Machine Learning Course in Hyderabad"
          // spanMTitleText="Advance Program"
          // spanTitleText="Advance Program"
          desc="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          width="900"
          height="762"
          alt="machine learning course training in hyderabad"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
        />
        <div className={styles.program}>
          <ProgramInfo
            p1="Global Recognition"
            p11="From IBM"
            p2="Industry Standard"
            p22="Training"
            p3="Career Assistance"
            p33="For Professionals"
            p4="Financing as low as"
            p44="₹ 10,816/month"
          />
        </div>
        <ProgramFee
          Emi="₹ 10,816/month"
          Fee="₹ 1,10,000 + 18% GST"
          dataScienceCounselling={true}
        />
        <div className="Feature" id="Feature">
          <BoxShape
            alt="machine learning course training in hyderabad"
            title="Why Enroll In Machine Learning Course Training In Hyderabad?"
            Box1h5="Custom-fit Training"
            box1desc="Get specially designed modules as per your dream AI role. Learn latest ML applications."
            Box2h5="Domain Focused"
            box2desc="Obtain cutting-edge Al and ML skills as per demanding IT-industry standards. Choose any domain of your choice."
            Box3h5="Premium Mentoring"
            box3desc="Enjoy and learn from mock interviews and CV writing workshops with PRODUCT Based Companies AI/ML industry experts."
            Box4h5="Hands-on Experience"
            box4desc="Get the diligent experience of real-world projects, spanning from advanced level complexity, directly from relevant companies."
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1="Be a part of Learnbay's Hyderabad-based tech domain-specific machine learning course, which offers learners a wide selection of domain specialization options. For working professionals in Hyderabad, Learnbay Machine Learning and training course is one of the best institutes for students and professionals in Hyderabad."
              ProgramBot2="We conduct interactive classes led by professionals in Machine Learning from PRODUCT Based Companies firms."
              ProgramBot3="Learnbay provides industrial experience to students through real-time and capstone projects, allowing them to learn from the real world. Students receive six IBM credentials in Machine Learning."
              ProgramHead4="Why pursue Learnbay Machine learning course training in Hyderabad?"
              ProgramBot4="You get a wide range of domains to choose from and specialize in with this professional machine learning certification."
              ProgramBot5="It includes a 3-year Flexi pass, smooth live classes, and access to any batch/instructor at the learners' convenience."
              ProgramBot6="There is lifetime free access to Learnbay LMS for all study materials and recorded copies of attended lessons. It may be used to learn from anywhere, even on mobile devices."
              ProgramBot7="The Machine Learning course fees can be paid in simple EMI installments."
              ProgramHead8="Career opportunities:"
              ProgramBot10="By 2025, Machine Learning (ML) will have grown significantly, resulting in new career roles and possibilities. ML can help you advance your career and stand out from the crowd with these skills. The Learnbay Machine Learning course applies to practically all fields of business, including marketing. Finance, supply chain, e-commerce, hospitality, pharmaceuticals, banking, and other industries."
              ProgramHead9="High salaries:"
              ProgramBot11="Machine learning experts are among the best-paid professionals in Hyderabad and the IT industry. The average income for a Machine Learning Engineer is 8 LPA. It is the starting point for machine learning professionals' remuneration. As you gain experience as a Machine Learning engineer, you may be able to earn between 15 and 23 lakhs per year. Learnbay's machine learning certification program in Hyderabad course will also assist you in determining which ML job path is suitable for you."
              ProgramHead10="But how do you do it?"
              ProgramBot12="Learnbay provides customized ML career counseling and learning courses based on your work experience and academic background."
              ProgramHead11="A rise in demand for Machine Learning experts:"
              ProgramBot13="Artificial intelligence and machine learning are being integrated into every organization. Because there are fewer professionals in Machine Learning having particular domain expertise, the demand for Machine Learning specialists in Hyderabad and India is increasing as the technology advances. Everyone is becoming certified in machine learning, and only a handful of them have the industry's abilities. Learnbay's machine learning course goes beyond certification to give you real-world industry competency.
            "
              DomainHead1="Why Domain Specialization?"
              DomainBot1="Learnbay examines your profile and recommends a domain that is ideal for you. Students apply Machine learning technologies and work in their domains to gain proficiency in a certain industry's ML skills. Learnbay's Machine Learning training course in Hyderabad allows you to be the master of a specific industry’s ML best practices, enabling you to stand out in the domain and excel in it."
              DomainBot2="Learnbay in Hyderabad offers a diverse choice of domain electives for students to pick from:"
              DomainList1="HR, Sales, and Marketing"
              DomainList2="Energy, oil, and Gas"
              DomainList3="Mechanical, manufacturing, and telecom"
              DomainList4="Pharmaceutical and clinical research"
              DomainList5="Media, hospitality, and transportation"
              DomainList6="Testing and Development Domain"
              DomainList7="DeOps and Cloud"
              DomainList8="IoT, automotive, and embedded systems"
              DomainList9="Supply chain and e-commerce"
              DomainList10="Banking, Finance, and Marketing Domain"
              DomainBot3="The ML modules you get will be extremely focused on your chosen elective(s). This increases the chances of your selection as an ML professional in a multinational firm by 120%."
              Domainlink1="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
              Domainlink2="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf"
              Domainlink3="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
              Domainlink4="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
              Domainlink5="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Media%2C+Hospitality+and+Transportation+Domain.pdf"
              Domainlink6="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Development+and+Testing+Domain.pdf"
              Domainlink7="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Cloud+and+Devops+Domain.pdf"
              Domainlink8="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Automotive%2C+IOT+and+Embedded+Domain.pdf"
              Domainlink9="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
              Domainlink10="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
              CertificationBot1="Students receive 6 IBM certificates by completing Machine Learning course training in Hyderabad."
              CertificationBot2="You will receive different machine learning competence certificates from IBM upon completion of the course for technologies and skills such as Deep Learning, Tensorflow, machine learning with Python, capstone project certifications, etc. But completing two new capstone projects helps you to earn the IBM ML project experience certification, the most notable achievement to be looked for in your resume and portfolio."
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Advanced-AI-ML.jpeg"
              ModuleBot1="Learnbay's Machine Learning course in Hyderabad includes 300 hours of hassle-free live classes with PRODUCT Based Companies experts. Students can quickly gain advanced industry expertise with the help of 18+ well-planned machine learning modules. Not only that, but each of the modules has a succession of submodules ranging from basic to advanced, allowing everyone, even a total novice of ML, to benefit from the course."
              ModuleBot2="Learnbay assists students in learning the fundamentals of coding for novice programmers. Our professors update code assignments regularly, and we even host webinars and hackathons for students to study together. Learnbay's industrial ML course focuses on tools and abilities, including big data analytics, data structure and algorithm, NLP, time- analytics, and so on, based on current industry developments."
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
              syllabussrc="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
              JobBot1="Learnbay is the best machine learning training institute in Hyderabad with job assistance. Our specialist faculty can help you prepare for product MNC Machine learning interviews in the most effective way possible. Candidates are given mock interviews and job referrals that are the best fit. You will also receive assistance with creating a resume and portfolio so that they remain at the top of the recruiter's list. Please keep in mind that we guarantee interview calls."
              JobBot5="In addition, there are several industry-specific hackathons and webinars to attend. Referrals are also more likely as a result of this."
              ProjectsBot1="Learnbay encourages candidates to work on projects with creativity and skills. Machine learning projects and capstones are important in resumes and portfolios. Leanbay machine learning in Hyderabad consists of 15 real-time projects and 2 capstone projects. Each project is certified by IBM and is issued after the course and project completion. Students even get separate certificates for industrial project experience from IBM."
              src1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/SAMSUNG.png"
              ProjectsH1="Samsung Health Monitor App"
              Projectsp1="Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app.
    "
              src2="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM.png"
              ProjectsH2="IBM HR Analytics"
              Projectsp2="IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other Data science abilities."
              src3="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon1.png"
              ProjectsH3="Amazon Customer Review Analysis"
              Projectsp3="Amazon has made a goal to identify the most successful consumer electronic products. For these, they require live customer review analysis. You can participate in the assisting project of customer insight regeneration from the ongoing and existing reviews via a suitable data visualization approach.
    "
              src4="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/BMW.png"
              ProjectsH4="BMW Used Car Price Optimization"
              Projectsp4=" BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, etc. Develop your analytical skills through such projects."
              AlumniBot1="We have a success rate of almost 100% on placements after course completion. The Learnbay machine learning certification course is gaining a lot of traction every day. We have placed more than 1000+ employees in reputed MNCs and lead start-ups. In most of the cases, our students got their offer letter while at the 80-85% level of course completion. Hear what our alumni say about their success achieved through Learnbay :"
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
              alt1="machine learning course training in hyderabad"
              alt2="machine learning course training in hyderabad"
              alt3="machine learning course training in hyderabad"
              alt4="machine learning course training in hyderabad"
              alt5="machine learning course training in hyderabad"
              alt6="machine learning course training in hyderabad"
              alt7="machine learning course training in hyderabad"
              alt8="machine learning course training in hyderabad"
              alt9="machine learning course training in hyderabad"
            />
            <FAQNew
              FaqDatas={MachineFaqDataH}
              DomainFaqDatas={MachineDomainFaqDataH}
              PaymentFaqDatas={MachinePaymentFaqDataH}
              CapstoneFaqDatas={MachineCapstoneFaqDataH}
              CertificationFaqDatas={MachineCertificationFaqDataH}
              jobFaqDatas={MachinejobFaqDataH}
              MentorshipFaqDatas={MachineMentorshipFaqDataH}
              SupportFaqDatas={MachineSupportFaqDataH}
            />
          </div>
        </div>
        <LearnSupport />
        <CityText
          CityTextB="Machine Learning Course Certification Training locations in Hyderabad "
          CityText=" : Medipalli[500098], A.G.College [500030], HMT Township [500054], Hal Hyderabad [500042], Kondapur [500084], Fatehdarwaza [500065], Begumpet [500016], Lingampalli [500019], Kattedan Ie [500077], Falaknuma [500053], Peerzadiguda [500039], Jillellaguda [500079], I.M.Colony [500082], Gajularamaram [500055], Banjara Hills [500034], Gachibowli [500032], Badangpet [500058], Film Nagar [500096], A.Gs. Staff Quarters [500045], Malakpet Colony [500036], Balanagar Township [500037], Amberpet [500013], Bharat Nagar Colony [500018], Chitkul [502307], Don Bosco Nagar [500086], Gsisr Bandlaguda [500068], Yakutpura [500023], Chaithanyapuri Colony [500060], Chandanagar [500050], Appa Himayathsagar [500008], Hyderabad Jubilee [500002], Meerpet [500097], Humayunnagar [500028], Aie Bollaram [502325], Chetlapotharam [502319], Srinagar Colony [500073], Gandhi Bhawan Hyderabad [500001], Darushifa [500024], Gandhinagar Hyderabad [500080], Sarada Nagar [500070], Barkatpura [500027], Gagan Mahal [500029], Elmela [502300], Sanjeev Reddy Nagar [500038], Manikonda [500089], Cyberabad [500081], Boduppal [500092], Dr.B R Ambedkar O.U [500033], Kphb Colony [500072], Huda Residential Complex [500035], Miyapur [500049], L B Nagar [500074], Ashoknagar Hyderabad [500020], Saidabad Colony [500059], Jntu Kukat Pally [500085], Bowenpally [500011], Icrisat [502324], Administrative Buildings [500007], Aziz Nagar [500075], Afzalgunj [500012], Karwan Sahu [500006],Gaganpahad [500052], Ibrahim Bagh Lines [500031], Putlibowli [500095], Bahadurpura [500064], A.Gs Office [500004], Bachupally [500090], A.I.E. R.C.Puram [502032], Ambernagar [500044]."
          CityTextLB="Locations Offered"
          CityTextL=" :Machine Learning Training in Hyderabad, Machine Learning Course in Hyderabad, Machine Learning Course in Gachibowli, Machine Learning Training in Gachibowli,Machine Learning Course in Madhapur, Machine Learning Training in Madhapur, Machine Learning Training Institute in Hyderabad, Machine Learning Course in Kondapur, Machine Learning Training in Kondapur, Machine Learning Course in Begumpet, Machine Learning Course in Lingampalli, Machine Learning Course in Banjara hills, Machine Learning Course in L B Nagar, Machine Learning Course in Boduppal, Machine Learning Course in Kphb Colony, Machine Learning Training in Begumpet, Machine Learning Training in Lingampalli, Machine Learning Training in Banjara hills, Machine Learning Training in L B Nagar, Machine Learning Training in Boduppal, Machine Learning Training in KPhb Colony, Machine Learning Classroom Training in Hyderabad, Machine Learning Training near me, Machine Learning Course near me, Machine Learning Institute near me, Data Scientist Course, Machine Learning Certification, Machine Learning Certification in Hyderabad, Best Machine Learning Course, Best Machine Learning Training"
        />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}
