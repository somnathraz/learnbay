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
              <p className={styles.FooterInnerli}>Enroll now for Data Science Classroom (Bangalore) or online training with us and Master Data Analytics Skills which will help you to transform your career and start your career as a Data Scientist.</p>
              <div className={styles.FooterSocial}>
              <a href="https://twitter.com/Learnbay1"><FaTwitter className="bIcons"  /></a>
              <a href="https://www.facebook.com/learnbay/"><FaFacebookF className="bIcons"  /></a>
              <a href="https://www.linkedin.com/company/learnbay/"><FaLinkedinIn className="bIcons"  /></a>
              <a href="https://www.youtube.com/c/LearnbayDataScienceandAI"><FaYoutube className="bIcons"  /></a>
              <a href="https://www.instagram.com/learnbay_datascience/"><FaInstagram className="bIcons"  /></a>
              </div>
              <span style={{display:"flex", marginTop:"20px"}}><IoMailSharp className="bIcons"  /><Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link></span>
              <span style={{display:"flex", marginTop:"10px"}}><BsFillTelephoneFill className="bIcons"  /><Link href="tel:+919606950936">(+91) 96069 50936</Link></span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Courses</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli}>Data Science Foundation Program</p></a>
          <a href="/advance-data-science-certification-courses"><p className={styles.FooterInnerli}>Advanced DS and AI Program with Domain Specialization</p></a>
          <a href="/full-stack-web-development-program"><p className={styles.FooterInnerli}>Full Stack Web Development Program</p></a>
          <a href="/full-stack-software-development-program"><p className={styles.FooterInnerli}>Full-Stack Software Development Program</p></a>
          <a href="/artificial-intelligence-certification-course"><p className={styles.FooterInnerli}>Artificial Intelligence and Machine Learning Program With Domain Specialization Training</p></a>
          <a href="/data-science-ai-for-managers"><p className={styles.FooterInnerli}>Data Science and Artificial Intelligence For Managers and Leaders</p></a>
          <a href="/job-guarantee-or-money-back-data-science-ai-certification-course"><p className={styles.FooterInnerli}>Data Science and AI Program with 100% Job Guarantee</p></a>
          <a href="/business-analytics-certification-course"><p className={styles.FooterInnerli}>Business Analytics Certification Program</p></a>
          <a href="/data-analytics-certification-course"><p className={styles.FooterInnerli}>Data Analytics Certification Program</p></a>

          </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Learnbay</p>
          <a href="/about-us"><p className={styles.FooterInnerli}>About Us</p></a>
          <a href="/contact-us"><p className={styles.FooterInnerli}>Contact Us</p></a>
          <a href="/demo"><p className={styles.FooterInnerli}>Demo</p></a>
          <a href="blog.learnbay.co"><p className={styles.FooterInnerli}>Blogs</p></a>
          <p className={styles.FooterInnerP}>Terms</p>
          <a href="/terms-conditions"><p className={styles.FooterInnerli}>Terms and Conditions</p></a>
          <a href="/refund-cancellation-policy"><p className={styles.FooterInnerli}>Refund/Cancellation policy</p></a>
          <a href="/privacy-policy"><p className={styles.FooterInnerli}>Privacy Policy</p></a>
          </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <a href="/"><button className={styles.btnout}><FaApple className="bIcons" style={{fontSize:"30px"}}  />Get Our IOS App</button></a>
          <a href="https://play.google.com/store/apps/details?id=com.app.learnbay"><button className={styles.btnout}><FaAndroid className="bIcons" style={{fontSize:"30px"}}  />Get Our Android App</button></a>
        </div>
        </div>
        <div className={styles.FooterDiv} style={{borderTop: "1px solid", borderBottom: "1px solid", borderColor:"#ffffff50"}}>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Pune</p>
            <a href="/data-science-course-training-in-pune"><p className={styles.FooterInnerli}>Data Science Course Training in Pune</p></a>
            <a href="/machine-learning-course-training-in-pune"><p className={styles.FooterInnerli}>Machine learning course training in pune</p></a>
            <a href="/data-analytics-course-training-in-pune"><p className={styles.FooterInnerli}>data analytics course training in pune</p></a>
            <a href="/business-analytics-course-training-in-pune"><p className={styles.FooterInnerli}>business analytics course training in pune</p></a>
            <a href="/artificial-intelligence-ai-course-training-pune"><p className={styles.FooterInnerli}>artificial intelligence AI course training pune</p></a>

          </div>
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Mumbai</p>
            <a href="/data-science-course-training-in-mumbai"><p className={styles.FooterInnerli}>Data Science Course Training in Mumbai</p></a>
            <a href="/machine-learning-course-training-in-mumbai"><p className={styles.FooterInnerli}>Machine learning course training in Mumbai</p></a>
            <a href="/data-analytics-course-training-in-mumbai"><p className={styles.FooterInnerli}>data analytics course training in Mumbai</p></a>
            <a href="/business-analytics-course-training-in-mumbai"><p className={styles.FooterInnerli}>business analytics course training in Mumbai</p></a>
            <a href="/artificial-intelligence-ai-course-training-mumbai"><p className={styles.FooterInnerli}>artificial intelligence AI course training Mumbai</p></a>

            </div>
            <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Chennai</p>
            <a href="/data-science-course-training-in-chennai"><p className={styles.FooterInnerli}>Data Science Course Training in Chennai</p></a>
            <a href="/machine-learning-course-training-in-chennai"><p className={styles.FooterInnerli}>Machine learning course training in Chennai</p></a>
            <a href="/data-analytics-course-training-in-chennai"><p className={styles.FooterInnerli}>data analytics course training in Chennai</p></a>
            <a href="/business-analytics-course-training-in-chennai"><p className={styles.FooterInnerli}>business analytics course training in Chennai</p></a>
            <a href="/artificial-intelligence-ai-course-training-chennai"><p className={styles.FooterInnerli}>artificial intelligence AI course training Chennai</p></a>
            </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Canada</p>
            <a href="/data-science-course-training-in-canada"><p className={styles.FooterInnerli}>Data Science Course Training in Canada</p></a>
            <a href="/machine-learning-course-training-in-canada"><p className={styles.FooterInnerli}>Machine learning course training in Canada</p></a>
            <a href="/data-analytics-course-training-in-canada"><p className={styles.FooterInnerli}>data analytics course training in Canada</p></a>
            <a href="/business-analytics-course-training-in-canada"><p className={styles.FooterInnerli}>business analytics course training in Canada</p></a>
            <a href="/artificial-intelligence-ai-course-training-canada"><p className={styles.FooterInnerli}>artificial intelligence AI course training Canada</p></a>
          </div>
        </div>
        <div className={styles.FooterDiv}>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
            <a href="/data-science-course-training-in-bangalore"><p className={styles.FooterInnerli}>Data Science Course Training in Bangalore</p></a>
            <a href="/machine-learning-course-training-in-bangalore"><p className={styles.FooterInnerli}>Machine learning course training in Bangalore</p></a>
            <a href="/data-analytics-course-training-in-bangalore"><p className={styles.FooterInnerli}>data analytics course training in Bangalore</p></a>
            <a href="/business-analytics-course-training-in-bangalore"><p className={styles.FooterInnerli}>business analytics course training in Bangalore</p></a>
            <a href="/artificial-intelligence-ai-course-training-bangalore"><p className={styles.FooterInnerli}>artificial intelligence AI course training Bangalore</p></a>
          </div>
          <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Hyderabad</p>
            <a href="/data-science-course-training-in-hyderabad"><p className={styles.FooterInnerli}>Data Science Course Training in Hyderabad</p></a>
            <a href="/machine-learning-course-training-in-hyderabad"><p className={styles.FooterInnerli}>Machine learning course training in Hyderabad</p></a>
            <a href="/data-analytics-course-training-in-hyderabad"><p className={styles.FooterInnerli}>data analytics course training in Hyderabad</p></a>
            <a href="/business-analytics-course-training-in-hyderabad"><p className={styles.FooterInnerli}>business analytics course training in Hyderabad</p></a>
            <a href="/artificial-intelligence-ai-course-training-hyderabad"><p className={styles.FooterInnerli}>artificial intelligence AI course training Hyderabad</p></a>

            </div>
            <div className={styles.FooterDivInner}>
            <p className={styles.FooterInnerP}>Dubai</p>
            <a href="/data-science-course-training-in-dubai"><p className={styles.FooterInnerli}>Data Science Course Training in Dubai</p></a>
            <a href="/machine-learning-course-training-in-dubai"><p className={styles.FooterInnerli}>Machine learning course training in Dubai</p></a>
            <a href="/data-analytics-course-training-in-dubai"><p className={styles.FooterInnerli}>data analytics course training in Dubai</p></a>
            <a href="/business-analytics-course-training-in-dubai"><p className={styles.FooterInnerli}>business analytics course training in Dubai</p></a>
            <a href="/artificial-intelligence-ai-course-training-dubai"><p className={styles.FooterInnerli}>artificial intelligence AI course training Dubai</p></a>
            </div>
          <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
            <a href="/data-science-course-training-in-delhi"><p className={styles.FooterInnerli}>Data Science Course Training in Delhi</p></a>
            <a href="/machine-learning-course-training-in-delhi"><p className={styles.FooterInnerli}>Machine learning course training in Delhi</p></a>
            <a href="/data-analytics-course-training-in-delhi"><p className={styles.FooterInnerli}>data analytics course training in Delhi</p></a>
            <a href="/business-analytics-course-training-in-delhi"><p className={styles.FooterInnerli}>business analytics course training in Delhi</p></a>
            <a href="/artificial-intelligence-ai-course-training-delhi"><p className={styles.FooterInnerli}>artificial intelligence AI course training Delhi</p></a>
          </div>
        </div>
        <div className={styles.FooterBottom}>
          <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>Copyright © 2020 Learnbay by <a href="/">www.learnbay.co.</a> All Rights Reserved.</p>
          </div>
          </div>
    </section>
  );
};

export default React.memo(Footer);
