import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/DataScienceEvent.module.css";
import EventTab from "../../components/Event/EventTab/EventTab";
import { getSortedPostsData } from "../../lib/event";
import { sortByDateEvent } from "../../utils";
import WhatsappFloat from "../../components/WhatsappFloat/WhatsappFloat";

export default function index({ eventData }) {
  return (
    <>
    <div>
      <Head>
        <title>
          Register for Free webinars, workshop, Masterclass -learnbay
        </title>
        <meta
          name="description"
          content="Enroll in Full stack and and data science masterclass for free and learn from industry experts."
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar event={true} />
      <div className={styles.Back}>
        <h4 style={{ textAlign: "left" }}>
        <b>Enhance your practical knowledge<br/>
And move ahead in your career
</b>
        </h4>
        <div>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Events+Page.png"
            width="522"
            height="380"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className={styles.event}>
        <div className={styles.eventTab}>
          <EventTab data={eventData} />
        </div>
      </div>
    </div>
    <WhatsappFloat />
    </>
  );
}

export async function getStaticProps() {
  const eventData = getSortedPostsData();
  return {
    props: {
      eventData: eventData.sort(sortByDateEvent),
    },
  };
}
