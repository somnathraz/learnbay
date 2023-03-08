import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

const Footer = ({ FsdNumber }) => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logo-light.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="230px"
              height="60px"
            />
          </a>
          <p className={styles.FooterInnerli}>
            Enrol now for data science courses, System designing or full stack
            development courses. Master the most demanding skills of job market
            and experience and ever growing and lucrative career transformation.
          </p>
          <div className={styles.FooterSocial}>
            <a href="https://twitter.com/Learnbay" target="_blank">
              <FaTwitter className="bIcons" />
            </a>
            <a href="https://www.facebook.com/learnbay/" target="_blank">
              <FaFacebookF className="bIcons" />
            </a>
            <a
              href="https://www.linkedin.com/company/learnbay/"
              target="_blank"
            >
              <FaLinkedinIn className="bIcons" />
            </a>
            <a href="https://bit.ly/Learnbay_YouTube" target="_blank">
              <FaYoutube className="bIcons" />
            </a>
            <a href="https://instagram.com/learnbayofficial" target="_blank">
              <FaInstagram className="bIcons" />
            </a>
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co" target="_blank">
              contacts@learnbay.co
            </Link>
          </span>
          {FsdNumber ? (
            <>
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+919731135221" target="_blank">
                  (+91) 973 113 5221
                </Link>
              </span>
            </>
          ) : (
            <>
              {" "}
              <span style={{ display: "flex", marginTop: "10px" }}>
                <BsFillTelephoneFill className="bIcons" />
                <Link href="tel:+917795687988" target="_blank">
                  (+91) 77956 87988
                </Link>
              </span>
            </>
          )}
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Courses</p>
          <a href="/data-science-certification-courses">
            <p className={styles.FooterInnerli}>
              Data Science Foundation Program
            </p>
          </a>
          <a href="/advance-data-science-certification-courses">
            <p className={styles.FooterInnerli}>Advanced DS and AI Program</p>
          </a>
          <a href="/full-stack-web-development-program">
            <p className={styles.FooterInnerli}>
              Full Stack Web Development Program
            </p>
          </a>
          <a href="/full-stack-software-development-program">
            <p className={styles.FooterInnerli}>
              Full Stack Software Development Program
            </p>
          </a>
          <a href="/artificial-intelligence-certification-course">
            <p className={styles.FooterInnerli}>
              Advance AI & ML Program for Tech Professionals
            </p>
          </a>
          <a href="/data-science-ai-for-managers">
            <p className={styles.FooterInnerli}>
              Data Science & AI For Managers
            </p>
          </a>
          <a href="/data-science-ai-masters-program">
            <p className={styles.FooterInnerli}>
              Data Science & AI Master Program
            </p>
          </a>
          <a href="/business-analytics-certification-course">
            <p className={styles.FooterInnerli}>Business Analytics Program</p>
          </a>
          <a href="/data-analytics-certification-course">
            <p className={styles.FooterInnerli}>Data Analytics Program</p>
          </a>
          <a href="/dsa-system-design">
            <p className={styles.FooterInnerli}>
              Data Structures Algorithms And System Design
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Learnbay</p>
          <a href="/about-us">
            <p className={styles.FooterInnerli}>About Us</p>
          </a>
          <a href="/contact-us">
            <p className={styles.FooterInnerli}>Contact Us</p>
          </a>
          {/* <a href="/career-portal">
            <p className={styles.FooterInnerli}>Career</p>
          </a> */}
          <a href="/demo">
            <p className={styles.FooterInnerli}>Demo</p>
          </a>
          <a href="https://blog.learnbay.co/">
            <p className={styles.FooterInnerli}>Blogs</p>
          </a>
          <a href="/career-portal">
            <p className={styles.FooterInnerli}>Career</p>
          </a>
          <p className={styles.FooterInnerP}>Terms</p>
          <a href="/terms-conditions">
            <p className={styles.FooterInnerli}>Terms and Conditions</p>
          </a>
          <a href="/refund-cancellation-policy">
            <p className={styles.FooterInnerli}>Refund/Cancellation policy</p>
          </a>
          <a href="/privacy-policy">
            <p className={styles.FooterInnerli}>Privacy Policy</p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.learnbay"
            target="_blank"
          >
            <button className={styles.btnout}>
              <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
              Get Our Android App
            </button>
          </a>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank">
            <p className={styles.FooterInnerli}>
              #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore
              - 560102 (Above Sangam Sweets)
            </p>
          </a>
        </div>
      </div>
      <div
        className={styles.FooterDiv}
        style={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "#ffffff50",
          alignItems: "end",
        }}
      >
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Project Innovation Lab Address </p>
          <p className={styles.FooterInnerP}>Pune </p>
          <p className={styles.FooterInnerli}>
            Sky Loft, Creaticity Mall, Opposite Golf Course, Airport Rd,
            Shastrinagar, Yerawada, Pune, Maharashtra 411006
          </p>
        </div>

        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Mumbai</p>
          <p className={styles.FooterInnerli}>
            Business Centre, 2nd Floor, Apeejay House, Dinshaw Vacha Road,
            Churchgate, Mumbai, Maharashtra 400020
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
          <p className={styles.FooterInnerli}>
            Business Centre, Arunachal Building, 6th floor, Barakhamba Road, New
            Delhi 110001
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Kolkata</p>
          <p className={styles.FooterInnerli}>
            Ambuja Neotia EcoCentre 15th floor, EM-4,EM-block, Sector 5 Kolkata
            700091
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Hyderabad</p>
          <p className={styles.FooterInnerli}>
            Level 3, NSL Centrum, Road No 1, Lane, opp. Forum Mall, KPHB 5th
            Phase, Hyderabad, Telangana 500072
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
          <p className={styles.FooterInnerli}>
            #87, above sangeetha mobiles, 14th main road, opp-white house,
            sector 4, Hsr Layout, Bangalore 560102
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Chennai</p>
          <p className={styles.FooterInnerli}>
            Apeejay Business Centre, Phone Booth, 1st Floor, Apeejay House,
            39/12 Haddows Road, Nungambakkam, Chennai 600 006
          </p>
        </div>
      </div>
      <div
        className={styles.FooterDiv}
        style={{
          borderBottom: "1px solid",
          borderColor: "#ffffff50",
        }}
      >
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Pune</p>
          <a href="/data-science-course-training-in-pune">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Pune
            </p>
          </a>
          <a href="/machine-learning-course-training-in-pune">
            <p className={styles.FooterInnerli}>
              Machine learning course training in pune
            </p>
          </a>
          <a href="/data-analytics-course-training-in-pune">
            <p className={styles.FooterInnerli}>
              data analytics course training in pune
            </p>
          </a>
          <a href="/business-analytics-course-training-in-pune">
            <p className={styles.FooterInnerli}>
              business analytics course training in pune
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-pune">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training pune
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-pune">
            <p className={styles.FooterInnerli}>
              Full stack software developer course in Pune
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Mumbai</p>
          <a href="/data-science-course-training-in-mumbai">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Mumbai
            </p>
          </a>
          <a href="/machine-learning-course-training-in-mumbai">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Mumbai
            </p>
          </a>
          <a href="/data-analytics-course-training-in-mumbai">
            <p className={styles.FooterInnerli}>
              data analytics course training in Mumbai
            </p>
          </a>
          <a href="/business-analytics-course-training-in-mumbai">
            <p className={styles.FooterInnerli}>
              business analytics course training in Mumbai
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-mumbai">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Mumbai
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-mumbai">
            <p className={styles.FooterInnerli}>
              Full stack software developer course in mumbai
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Chennai</p>
          <a href="/data-science-course-training-in-chennai">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Chennai
            </p>
          </a>
          <a href="/machine-learning-course-training-in-chennai">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Chennai
            </p>
          </a>
          <a href="/data-analytics-course-training-in-chennai">
            <p className={styles.FooterInnerli}>
              data analytics course training in Chennai
            </p>
          </a>
          <a href="/business-analytics-course-training-in-chennai">
            <p className={styles.FooterInnerli}>
              business analytics course training in Chennai
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-chennai">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Chennai
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-chennai">
            <p className={styles.FooterInnerli}>
              Full-stack software developer course in Chennai
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Canada</p>
          <a href="/data-science-course-training-in-canada">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Canada
            </p>
          </a>
          <a href="/machine-learning-course-training-in-canada">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Canada
            </p>
          </a>
          <a href="/data-analytics-course-training-in-canada">
            <p className={styles.FooterInnerli}>
              data analytics course training in Canada
            </p>
          </a>
          <a href="/business-analytics-course-training-in-canada">
            <p className={styles.FooterInnerli}>
              business analytics course training in Canada
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-canada">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Canada
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-canada">
            <p className={styles.FooterInnerli}>
              full-stack software developer course in Canada
            </p>
          </a>
        </div>
      </div>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
          <a href="/data-science-course-training-in-bangalore">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Bangalore
            </p>
          </a>
          <a href="/machine-learning-course-training-in-bangalore">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Bangalore
            </p>
          </a>
          <a href="/data-analytics-course-training-in-bangalore">
            <p className={styles.FooterInnerli}>
              data analytics course training in Bangalore
            </p>
          </a>
          <a href="/business-analytics-course-training-in-bangalore">
            <p className={styles.FooterInnerli}>
              business analytics course training in Bangalore
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-bangalore">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Bangalore
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-bangalore">
            <p className={styles.FooterInnerli}>
              Full-stack software developer course in Bangalore
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Hyderabad</p>
          <a href="/data-science-course-training-in-hyderabad">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Hyderabad
            </p>
          </a>
          <a href="/machine-learning-course-training-in-hyderabad">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Hyderabad
            </p>
          </a>
          <a href="/data-analytics-course-training-in-hyderabad">
            <p className={styles.FooterInnerli}>
              data analytics course training in Hyderabad
            </p>
          </a>
          <a href="/business-analytics-course-training-in-hyderabad">
            <p className={styles.FooterInnerli}>
              business analytics course training in Hyderabad
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-hyderabad">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Hyderabad
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-hyderabad">
            <p className={styles.FooterInnerli}>
              Full-stack software developer course in hyderabad
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Dubai</p>
          <a href="/data-science-course-training-in-dubai">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Dubai
            </p>
          </a>
          <a href="/machine-learning-course-training-in-dubai">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Dubai
            </p>
          </a>
          <a href="/data-analytics-course-training-in-dubai">
            <p className={styles.FooterInnerli}>
              data analytics course training in Dubai
            </p>
          </a>
          <a href="/business-analytics-course-training-in-dubai">
            <p className={styles.FooterInnerli}>
              business analytics course training in Dubai
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-dubai">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Dubai
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-dubai">
            <p className={styles.FooterInnerli}>
              Full-stack software developer course in Dubai
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
          <a href="/data-science-course-training-in-delhi">
            <p className={styles.FooterInnerli}>
              Data Science Course Training in Delhi
            </p>
          </a>
          <a href="/machine-learning-course-training-in-delhi">
            <p className={styles.FooterInnerli}>
              Machine learning course training in Delhi
            </p>
          </a>
          <a href="/data-analytics-course-training-in-delhi">
            <p className={styles.FooterInnerli}>
              data analytics course training in Delhi
            </p>
          </a>
          <a href="/business-analytics-course-training-in-delhi">
            <p className={styles.FooterInnerli}>
              business analytics course training in Delhi
            </p>
          </a>
          <a href="/artificial-intelligence-ai-course-training-delhi">
            <p className={styles.FooterInnerli}>
              artificial intelligence AI course training Delhi
            </p>
          </a>
          <a href="/full-stack-software-developer-course-in-delhi">
            <p className={styles.FooterInnerli}>
              Full-stack software developer course in Delhi
            </p>
          </a>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
