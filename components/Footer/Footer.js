import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaCheck } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/">
                <Image
                  src="/logo-light.png"
                  alt="Learnbay"
                  quality={100}
                  objectFit="contain"
                  width="230px"
                  height="60px"
                />
              </a>
              <p className={styles.FooterInnerli}>Enroll Now For Data Science Classroom (Bangalore) And Online Training With us And Master Data Analytics Skills Which Will help you to transform your career and start your career as data scientist.</p>
              <span style={{display:"flex", marginTop:"20px"}}><IoMailSharp className="bIcons"  /><Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link></span>
              <span style={{display:"flex", marginTop:"10px"}}><BsFillTelephoneFill className="bIcons"  /><Link href="tel:+919606950936">(+91) 96069 50936</Link></span>
              {/* <div className={styles.FooterSocial}>
                <FaTwitter className="bIcons"  />
                <FaFacebookF className="bIcons"  />
                <FaLinkedinIn className="bIcons"  />
                <FaYoutube className="bIcons"  />
                <FaInstagram className="bIcons"  />
              </div> */}
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />Advance Data Science & AI Certification</p></a>
          <a href="/advance-ai-ml-certification"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />Advance AI & ML Certification</p></a>
          <a href="/data-science-ai-cert-for-managers-leaders"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />Data Science & AI Cert. For Managers & Leaders</p></a>
          <a href="/"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />Job Guarantee or Money Back – Data Science & AI</p></a>
          </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>HSR Layout</p>
          <p className={styles.FooterInnerli}>147, 5th Main Rd, Rajiv Gandhi Nagar HSR Sector 7 , Near Salarpuria Serenity, Bengaluru, Karnataka 560102</p>
          {/* <Grid item xs={12} md={12} sx={{ height: "200px", width: "100px" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyB5eZjplt5xQnMe2e95aIB9NkTnpyZ-cB0" }}
                  defaultCenter={{
                    lat: 12.924735788872667,
                    lng: 77.631741
                  }}
                  defaultZoom={10}
                  
                >
                  <RoomIcon
                    lat={12.944812455402625}
                    lng={77.63998074606795}
                    style={{ color: "red", fontSize: "35px" }}
                  />
                </GoogleMapReact>
              </Grid> */}
        </div>
        </div>
        <div className={styles.FooterBottom}>
          <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>Copyright © 2020 Learnbay by www.learnbay.co. All Rights Reserved.</p>
          </div>
          </div>
    </section>
  );
};

export default React.memo(Footer);
