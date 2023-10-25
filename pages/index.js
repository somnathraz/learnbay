import Head from "next/head";
import FirstSection from "../components/NewDesign/HomePage/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import Course from "../components/NewDesign/HomePage/Course/Course";
import KeyFeatures from "../components/NewDesign/HomePage/KeyFeatures/KeyFeatures";
import Switch from "../components/NewDesign/HomePage/switch/switch";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import HomeLine from "../components/NewDesign/HomePage/HomeLine/HomeLine";
import Testimonial from "../components/NewDesign/HomePage/Testimonial/Testimonial";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import ContactUs from "../components/NewDesign/HomePage/ContactUs/ContactUs";
import BoxShape from "../components/NewDesign/HomePage/BoxShape/BoxShape";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar popup={true} dataScienceCounselling={true} radio={true} />

      <FirstSection
        first="Tools"
        second="Tips"
        third="Technology"
        popup={true}
        dataScienceCounselling={true}
        radio={true}
      />
      <HomeLine />
      <div className={styles.boxWrap}>
        <h2>Get Certified & Move Towards Your Dream Job</h2>
        <p className={styles.boxp}>
          Our Domain Specialisation and Industry Certified Capstone Projects
          helps you to make your past work experience relevant
        </p>
        <div className={styles.boxShape}>
          <BoxShape />
        </div>
      </div>
      <Course popup={true} dataScience={true} radio={true} />
      <Switch />
      <KeyFeatures
        titleCourse="Data Science Placement Report"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        popup={true}
        idss="wSB-phYhG10"
        dataScience={true}
        radio={true}
      />
      <Testimonial />
      <ContactUs popup={true} dataScienceCounselling={true} radio={true} />
      <SeventhSection whatsappShow={true} />
      <OfferPopup offer={false} />
      <BottomBar />
      <Footer />
      <WhatsappFloat chat360code1={true} />
    </div>
  );
}
