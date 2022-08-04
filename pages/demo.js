import Head from "next/head";
import Demo from "../components/Demo/Demo";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <Demo />
      </main>
    </div>
  ); 
}