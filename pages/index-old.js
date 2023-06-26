import Head from "next/head";
import FirstSection from "../components/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import Course from "../components/Course/Course";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../components/WhyLearnbay/WhyLearnbay";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CareerImpactHome from "../components/CareerImpactHome/CareerImpact";
import Switch from "../components/switch/switch";
import BoxShape from "../components/BoxShape/BoxShape";
import MultiTabs from "../components/MultiTabs/MultiTabs";
import OfferPopup from "../components/OfferPopup/OfferPopup";
import FormSection from "../components/FormSection/FormSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Science Courses with IBM Certification - Learnbay</title>
        <meta name="robots" content="index, follow" />
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
      <Navbar popup={true} dataScienceCounselling={true} radio={true} />
      <FirstSection popup={true} dataScienceCounselling={true} radio={true} />
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

      <Course />
      <KeyFeatures />
      <WhyLearnbay />
      <MultiTabs />
      <FormSection dataScienceCounselling={true} />
      <Switch />
      <CareerImpactHome />
      <LearnSupport />
      <OfferPopup offer={false} />
      <BottomBar />
      <Footer />
    </div>
  );
}
