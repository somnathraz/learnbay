import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function Home() {
    return (
      <div>
        <Head>
          <title>Learnbay - Advance Data Science Course With IBM Certification</title>
          <link rel="canonical" href="https://www.learnbay.co/about-us" />
          <meta name="description" content="Learnbay - Advance Data Science Course With IBM Certification" />
          <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        </Head>
        <main>
      <Navbar popup={true} />
            <AboutUs />
        <Footer />
        </main>
      </div>
    );
  }