import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    return (
      <div>
        <Head>
          <title>Learnbay - Advance Data Science Course With IBM Certification</title>
          <meta name="description" content="Learnbay - Advance Data Science Course With IBM Certification" />
          <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        </Head>
        <main>
      <Navbar popup={true} />
            <AboutUs />
        </main>
      </div>
    );
  }