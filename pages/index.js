import Head from "next/head";
import Image from "next/image";
import FirstSection from "../components/FirstSection/FirstSection";
import styles from "../styles/Home.module.css";

import Slider from "../components/FirstSection/Slider";
import Course from "../components/Course/Course";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <FirstSection />
      <Slider />
      <Course />
    </div>
  );
}
