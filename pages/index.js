import Head from "next/head";
import FirstSection from "../components/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";
import Course from "../components/Course/Course";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures";
import WhyLearnbay from "../components/WhyLearnbay/WhyLearnbay";
import Benefits from "../components/Benefits/Benefits";
import SpotMedia from "../components/SpotMedia/SpotMedia";
import LearnSupport from "../components/LearnSupport/LearnSupport";
import CareerImpactHome from "../components/CareerImpactHome/CareerImpact";
import TestimonialVideo from "../components/TestimonialVideo/TestimonialVideo";
import Switch from "../components/switch/switch";
import BoxSeo from "../components/BoxSeo/BoxSeo";
import DomainSliderHome from "../components/DomainSliderHome/DomainSliderHome";
import generateRssFeed from "../lib/generateRss";
import generateCategoryRssFeed from "../lib/geneRateCategoryRss";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <FirstSection />
      <Course />
      <KeyFeatures />
      <WhyLearnbay />
      <DomainSliderHome />
      <BoxSeo />
      <Benefits />
      <SpotMedia />
      <TestimonialVideo />
      <Switch />
      <CareerImpactHome />
      <LearnSupport />
    </div>
  );
}

export const getStaticProps = async (_context) => {
  await generateRssFeed();
  await generateCategoryRssFeed();

  const h = "hello";
  return {
    props: {
      h,
    },
  };
};

