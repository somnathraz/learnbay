import Head from "next/head";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import OfferPopup from "../components/OfferPopup/OfferPopup";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - About Us</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.learnbay.co/about-us" />
        <meta
          name="description"
          content="Learn about the members of Learnbay's core team, their vision and mission. Learn how it is assisting graduates and working professionals in achieving their career goals."
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true}/>
        <AboutUs />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}
