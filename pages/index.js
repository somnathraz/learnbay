import Head from "next/head";
import FirstSection from "../components/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Course from "../components/Course/Course";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../components/WhyLearnbay/WhyLearnbay";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CareerImpactHome from "../components/CareerImpactHome/CareerImpact";
import Switch from "../components/switch/switch";
import BoxShape from "../components/BoxShape/BoxShape";
import MultiTabs from "../components/MultiTabs/MultiTabs";
import FormSection from "../components/FormSection/FormSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay - Advance Data Science Course With IBM Certification</title>
        <meta name="description" content="Learnbay - Advance Data Science Course With IBM Certification" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <Navbar popup={true} radio={true} />
      <FirstSection popup={true} />
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

