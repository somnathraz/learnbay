import Head from "next/head";
import FirstSection from "../components/NewDesign/HomePage/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Course from "../components/NewDesign/HomePage/Course/Course";
import KeyFeatures from "../components/NewDesign/HomePage/KeyFeatures/KeyFeatures";
import Switch from "../components/NewDesign/HomePage/switch/switch";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import HomeLine from "../components/NewDesign/HomePage/HomeLine/HomeLine";
import Testimonial from "../components/NewDesign/HomePage/Testimonial/Testimonial";
import SeventhSection from "../components/NewDesign/SeventhSection/SeventhSection";
import ContactUs from "../components/NewDesign/HomePage/ContactUs/ContactUs";
import CoreFeature from "../components/NewDesign/HomePage/CoreFeature/CoreFeature";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Science Courses with IBM Certification - Learnbay</title>
        <meta
          name="description"
          content="data science courses with IBM certification. Learnbay is advanced data science course training institute. Enrol in our data science course to enhance your career"
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
      <Navbar popup={true} dataScience={true} radio={true} />

      <FirstSection first="Tools"
second="Tips"
third="Technology" popup={true} dataScience={true} radio={true} />
      <HomeLine />

      <Course />
      <Switch />
      <KeyFeatures />
      {/* <CoreFeature /> */}
      <Testimonial />
      <ContactUs />
      <SeventhSection />
      <OfferPopup offer={false} />
      <Footer />
    </div>
  );
}