import Head from "next/head";
import FirstSection from "../components/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Course from "../components/Course/Course";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../components/WhyLearnbay/WhyLearnbay";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CareerImpactHome from "../components/CareerImpactHome/CareerImpact";
import Navbar from "../components/Navbar/Navbar";
import Switch from "../components/switch/switch";
import BoxShape from "../components/BoxShape/BoxShape";
import MultiTabs from "../components/MultiTabs/MultiTabs";
import FormSection from "../components/FormSection/FormSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay - Advance Data Science Course With IBM Certification</title>
        <meta
          name="description"
          content="Data Science Course in Bangalore. Learnbay is Advanced Data Science Training Course Institute in Bangalore with 100% job placement Guarantee"
        />
        <meta
          name="Keywords"
          content="Data Science course in Bangalore, Data Science training in Bangalore, Data Science institute in Bangalore, best Data Science institute in Bangalore, data scientist course in Bangalore, data scientist certification in Bangalore, Data Science training institute in Bangalore, advanced Data Science course in Bangalore, Data Science course with placement guarantee, Data Science course"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta name="robots" content="NOODP,NOYDIR" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="distribution" content="global" />
        <meta
          name="copyright"
          content="Learnbay: Data Science Courses Certification Training India"
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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      <Navbar popup={true} radio={true} />
      <FirstSection />
      <div className={styles.boxWrap}>
        <h2>Get Certified & Move Towards Your Dream Job</h2>
        <p className={styles.boxp}>
          Our Domain Specialisation and Industry Certified Capstone Projects helps you to
          make your past work experience relevant
        </p>
        <div className={styles.boxShape}>
          <BoxShape />
        </div>
      </div>

      <Course />
      <KeyFeatures />
      <WhyLearnbay />
      <MultiTabs />
      <FormSection />
      <Switch />
      <CareerImpactHome />
      <LearnSupport />
    </div>
  );
}
