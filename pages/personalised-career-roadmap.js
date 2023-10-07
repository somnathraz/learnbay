import InteractiveComponent from '../components/InteractiveComponent';
import Head from "next/head";

const YourPage = () => {
  return (
    <div>
        <Head>
        <title>Personalised Career Roadmap</title>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Personalised Career Roadmap" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      </Head>
      {/* Other content */}
      <InteractiveComponent />
      {/* Other content */}
    </div>
  );
};

export default YourPage;
