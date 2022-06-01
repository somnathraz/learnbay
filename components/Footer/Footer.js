import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaApple,FaAndroid } from "react-icons/fa";

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
              <div className={styles.FooterSocial}>
                <FaTwitter className="bIcons"  />
                <FaFacebookF className="bIcons"  />
                <FaLinkedinIn className="bIcons"  />
                <FaYoutube className="bIcons"  />
                <FaInstagram className="bIcons"  />
              </div>
              <span style={{display:"flex", marginTop:"20px"}}><IoMailSharp className="bIcons"  /><Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link></span>
              <span style={{display:"flex", marginTop:"10px"}}><BsFillTelephoneFill className="bIcons"  /><Link href="tel:+919606950936">(+91) 96069 50936</Link></span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Courses</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli}>Data Science and AI Foundation Program</p></a>
          <a href="/advance-ai-ml-certification"><p className={styles.FooterInnerli}>Advanced DS and AI Program with Domain Specialization</p></a>
          <a href="/data-science-ai-cert-for-managers-leaders"><p className={styles.FooterInnerli}>Artificial Intelligence and ML Program With Domain Specialization Training</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Data Science and Artificial Intelligence For Managers and Leaders</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Data science and AI Program with 100% Job Guarantee</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Business Analytics Certification Program</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Data Analytics Certification Program</p></a>

          </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Learnbay</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli}>About Us</p></a>
          <a href="/advance-ai-ml-certification"><p className={styles.FooterInnerli}>Contact Us</p></a>
          <a href="/data-science-ai-cert-for-managers-leaders"><p className={styles.FooterInnerli}>Blogs</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Demo</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Webinars</p></a>
          <p className={styles.FooterInnerP}>Terms</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli}>Terms and Conditions</p></a>
          <a href="/advance-ai-ml-certification"><p className={styles.FooterInnerli}>Refunds/Cancellations policy</p></a>
          <a href="/data-science-ai-cert-for-managers-leaders"><p className={styles.FooterInnerli}>Contact Us</p></a>
          <a href="/"><p className={styles.FooterInnerli}>Privacy Policy</p></a>
          </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <FaApple className="bIcons" style={{fontSize:"30px"}}  />
          <FaAndroid className="bIcons" style={{fontSize:"30px"}}  />
          
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
        <div className={styles.FooterDiv} style={{borderTop: "1px solid", borderBottom: "1px solid", borderColor:"#ffffff50"}}>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Pune</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Pune</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in pune</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in pune</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in pune</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training pune</p></a>

          </div>
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Mumbai</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Mumbai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Mumbai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Mumbai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Mumbai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Mumbai</p></a>

            </div>
            <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Chennai</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Chennai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Chennai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Chennai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Chennai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Chennai</p></a>
            </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Canada</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Canada</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Canada</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Canada</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Canada</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Canada</p></a>
          </div>
        </div>
        <div className={styles.FooterDiv}>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Bangalore</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Bangalore</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Bangalore</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Bangalore</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Bangalore</p></a>
          </div>
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Hyderabad</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Hyderabad</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Hyderabad</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Hyderabad</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Hyderabad</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Hyderabad</p></a>

            </div>
            <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Dubai</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Dubai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Dubai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Dubai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Dubai</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Dubai</p></a>
            </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
            <a href="/"><p className={styles.FooterInnerli}>Data Science Course Training in Delhi</p></a>
            <a href="/"><p className={styles.FooterInnerli}>Machine learning course training in Delhi</p></a>
            <a href="/"><p className={styles.FooterInnerli}>data analytics course training in Delhi</p></a>
            <a href="/"><p className={styles.FooterInnerli}>business analytics course training in Delhi</p></a>
            <a href="/"><p className={styles.FooterInnerli}>artificial intelligence ai course training Delhi</p></a>
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
