import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OfferPopup from "../components/OfferPopup/OfferPopup";
export default function Home() {
    return (
      <div>
        <Head>
          <title>Leading Certification Training Providers - Learnbay</title>
          <meta name="robots" content="index, follow"/>
          <link rel="canonical" href="https://www.learnbay.co/about-us" />
          <meta name="description" content="Learnbay is an online bootcamp and one of the leading certification training providers. We are providing training and coaching that helps working professionals to achieve their career goals." />
          <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        </Head>
        <main>
      <Navbar popup={true} />
            <AboutUs />
        <OfferPopup offer={false} />      
        <Footer />
        </main>
      </div>
    );
  }