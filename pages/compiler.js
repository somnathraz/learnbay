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
        <meta name="description" content="Learnbay is an online bootcamp and one of the leading certification training providers. We are providing training and coaching that helps working professionals to achieve their career goals." />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/demo" />
      </Head>
      <main>
      <script
          dangerouslySetInnerHTML={{
            __html: `
SEC_HTTPS = true;
SEC_BASE = "compilers.widgets.sphere-engine.com"; 
(function(d, s, id){ SEC = window.SEC || (window.SEC = []);
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; 
  js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);   
}(document, "script", "sphere-engine-compilers-jssdk"));
 `,
}}
/>
          <Navbar popup={true} dataScience={true} />
          <div style={{margin:"100px", height:"600px"}}>
      <div class="sec-widget" data-widget="016d55e1beccf5c2b7f1890df27eaabf"></div></div>
        {/* <Demo /> */}
         
        <OfferPopup offer={false} />                      
        <Footer />
      </main>
    </div>
  ); 
}