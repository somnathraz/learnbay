import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";

export default function Home() {
    return (
      <div>
        <Head>
          <title>Learnbay Courses</title>
          <meta name="description" content="Learnbay Courses" />
          <link rel="icon" href="/Learnbay-Favicon-L.png" />
        </Head>
        <main>
            <AboutUs />
        </main>
      </div>
    );
  }