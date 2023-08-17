import Head from "next/head";
import FirstSection from "../../components/NewDesign/HomePage/FirstSection/FirstSection";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomBar from "../../components/BottomBar/BottomBar";
import WhatsappFloat from "../../components/WhatsappFloat/WhatsappFloat";
import Course from "../../components/NewDesign/HomePage/Course/Course";
import Switch from "../../components/NewDesign/HomePage/switch/switch";
import HomeLine from "../../components/NewDesign/HomePage/HomeLine/HomeLine";
import Testimonial from "../../components/NewDesign/HomePage/Testimonial/Testimonial";
import SeventhSection from "../../components/NewDesign/SeventhSection/SeventhSection";
import ContactUs from "../../components/NewDesign/HomePage/ContactUs/ContactUs";
import BoxShape from "../../components/NewDesign/HomePage/BoxShape/BoxShape";

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
      <Navbar
        popup={true}
        dataScience={true}
        radio={true}
        event={true}
        organicADS={true}
      />

      <FirstSection
        first="Tools"
        second="Tips"
        third="Technology"
        popup={true}
        dataScience={true}
        radio={true}
        organicADS={true}
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
      <Course popup={true} dataScience={true} radio={true} organicADS={true} />
      <Switch organicADS={true} />
      <Testimonial />
      <ContactUs popup={true} dataScience={true} radio={true} />
      <SeventhSection />
      <BottomBar />
      <Footer organicADSS={true} />
      <WhatsappFloat chat360code1={true}/>
    </div>
  );
}
