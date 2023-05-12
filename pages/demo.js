import Head from "next/head";
import Demo from "../components/Demo/Demo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OfferPopup from "../components/OfferPopup/OfferPopup";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leading Certification Training Providers - Learnbay</title>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Learnbay is an online bootcamp and one of the leading certification training providers. We are providing training and coaching that helps working professionals to achieve their career goals." />
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