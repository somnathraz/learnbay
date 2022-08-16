import Head from "next/head";
import Demo from "../components/Demo/Demo";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>  <Navbar popup={true} />

        <Demo />
      </main>
    </div>
  ); 
}