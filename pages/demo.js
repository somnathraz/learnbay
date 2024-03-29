import Head from "next/head";
import Demo from "../components/Demo/Demo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import WhatsappFloat from "../components/WhatsappFloat/WhatsappFloat";
import OfferPopup from "../components/OfferPopup/OfferPopup";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay - Demo Sessions and Class Recordings</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore Learnbay's demo sessions and class recordings. Experience interactive learning with expert instructors. Enroll today for a hands-on educational journey."
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/demo" />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Demo />
        <OfferPopup offer={false} />
        <BottomBar />
        <Footer />
        <WhatsappFloat />
      </main>
    </div>
  );
}
