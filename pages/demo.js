import Head from "next/head";
import Demo from "../components/Demo/Demo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OfferPopup from "../components/OfferPopup/OfferPopup";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - Advance Data Science Course With IBM Certification</title>
        <meta name="description" content="Learnbay - Advance Data Science Course With IBM Certification" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/demo" />
      </Head>
      <main>  <Navbar popup={true} dataScience={true} />

        <Demo />
         
        <OfferPopup offer={false} />                      
        <Footer />
      </main>
    </div>
  ); 
}