import React, { useEffect, useState } from "react";
import Head from "next/head";
import { EventHeader } from "../../components/Event/EventHeader/EventHeader";
import styles from "../../styles/DataScienceEvent.module.css";
import Form from "../../components/Form/Form";
import { FiUserCheck } from "react-icons/fi";
import Image from "next/image";
import EventFeature from "../../components/Event/EventFeatures/EventFeature";
import { BsArrowRightCircleFill, BsDot } from "react-icons/bs";
import Reviews from "../../components/CareerImpactHome/CareerImpact";
import { TiTick } from "react-icons/ti";
import { getAllPostIds, getPostData } from "../../lib/event";
import Navbar from "../../components/Navbar/Navbar";

export default function DataScienceEvent({ eventData }) {
  const [mobile, setMobile] = useState(false);

  let today = new Date();
  let eventDateInfo = new Date(eventData.data.mainData.eventDate);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{eventData.data.metaInfo.title}</title>
        <meta name="description" content={eventData.data.metaInfo.desc} />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar event={true}/>
      <div>
          <EventHeader 
            title={eventData.data.header.title}
            titleSpan={eventData.data.header.titleSpan}
            desc={eventData.data.header.desc}
            eventDate={eventData.data.mainData.eventDate}
            eventTime={eventData.data.header.eventTime}
            imgSrc={eventData.data.header.imgSrc}
            alt={eventData.data.header.alt}
            width={eventData.data.header.width}
            height={eventData.data.header.height}
            instructor={eventData.data.header.instructor}
            href1={eventData.data.header.href1}
          />
      </div>
      
      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
        
        <div className={styles.left}>
          <div className={styles.prgrmFeature} id="Feature">
            <EventFeature
              title={eventData.data.feature.title}
              h1={eventData.data.feature.h1}
              h2={eventData.data.feature.h2}
              h3={eventData.data.feature.h3}
              p1={eventData.data.feature.p1}
              p2={eventData.data.feature.p2}
              p3={eventData.data.feature.p3}
              img1={eventData.data.feature.img1}
              img2={eventData.data.feature.img2}
              img3={eventData.data.feature.img3}
            />
          </div>
          <div className={styles.Profile} id="trainer">
            <div className={styles.prpWrap}>
              <div className={styles.profilePic}>
                <div className={styles.Pic}>
                  <Image
                    width="60"
                    height="60"
                    src={eventData.data.profile.pImg}
                    layout="intrinsic"
                  />
                </div>
                <div className={styles.PrpLeft}>
                  <p>{eventData.data.profile.desc}</p>
                  <h6>
                    {eventData.data.profile.pName}
                    <span>
                      <a href={eventData.data.profile.link} target="_blank">
                        (Linkedin)
                      </a>
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            <div className={styles.infoWrap}>
              <p>
                <BsDot className={styles.dots} />
                {eventData.data.profile.list1}
              </p>
              <p>
                <BsDot className={styles.dots} />
                {eventData.data.profile.list2}
              </p>
            </div>
          </div>
          <div className={styles.WhyWrap} id="About">
            <div className={styles.why}>
              <div className={styles.whyLeft}>
                <h6>{eventData.data.whyUs.title}</h6>
                <div className={styles.line}></div>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l1}
                </p>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l2}
                </p>
                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l3}
                </p>

                <p>
                  <TiTick className={styles.Tick} />
                  {eventData.data.whyUs.l4}
                </p>
              </div>
              <div className={styles.whyRight}>
                <Image
                  width="435"
                  height="350"
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/What-will-you-learn.png"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>

          <div className={styles.Who} >
            <div className={styles.whoLeft}>
              <h6>{eventData.data.whoCan.title}</h6>
              {mobile ? (
                ""
              ) : (
                <BsArrowRightCircleFill className={styles.gIcon} />
              )}
            </div>
            <div className={styles.whoRight}>
              <div className={styles.wrapper}>
                <div className={styles.number}>
                  <p className={styles.nIcon}>01.</p>
                </div>
                <div className={styles.nContent}>
                  <h6>{eventData.data.whoCan.heading1}</h6>
                  <p>{eventData.data.whoCan.para1}</p>
                </div>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.number}>
                  <p className={styles.nIcon}>02.</p>
                </div>
                <div className={styles.nContent}>
                  <h6>{eventData.data.whoCan.heading2}</h6>
                  <p>{eventData.data.whoCan.para2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {today >= eventDateInfo ? (
          ""
        ) : (
          <div className={styles.right}>
            <section className={styles.form}>
              <div className={styles.header}>
                <h3>Register NOW!</h3>
                <p>
                  <FiUserCheck className={styles.Icon} />
                  {eventData.data.header.register}
                </p>
              </div>

              <Form event={true} />
            </section>
          </div>
        )}
      </div>
      <div className={styles.eReview} id="review">
            <Reviews event={today >= eventDateInfo} redirectFs={true} />
          </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = getPostData(params.id);
  return {
    props: {
      eventData,
    },
  };
}
