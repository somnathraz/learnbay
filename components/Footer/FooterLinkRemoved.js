import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import Image from "next/image";
import React from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import { FaSquareXTwitter, FaFacebookF } from "react-icons/fa6";

const Footer = ({ FsdNumber }) => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logo-light.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />
          <p className={styles.FooterInnerli}>
            Enrol now for data science courses, System designing or full stack
            development courses. Master the most demanding skills of job market
            and experience and ever growing and lucrative career transformation.
          </p>
          <div className={styles.FooterSocial}>
            <FaSquareXTwitter className="bIcons" />
            <FaFacebookF className="bIcons" />
            <FaLinkedinIn className="bIcons" />
            <FaYoutube className="bIcons" />
            <FaInstagram className="bIcons" />
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            contacts@learnbay.co
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Courses</p>
          <p className={styles.FooterInnerli}>
            Data Science Foundation Program
          </p>
          <p className={styles.FooterInnerli}>Advanced DS and AI Program</p>
          <p className={styles.FooterInnerli}>
            Software Development Master Program
          </p>
          <p className={styles.FooterInnerli}>
            Software Development Program in Blockchain
          </p>
          <p className={styles.FooterInnerli}>
            Software Development Program in Cloud and Devops
          </p>
          <p className={styles.FooterInnerli}>
            Advance AI & ML Program for Tech Professionals
          </p>
          <p className={styles.FooterInnerli}>Data Science & AI For Managers</p>
          <p className={styles.FooterInnerli}>
            Data Science & AI Master Program
          </p>
          <p className={styles.FooterInnerli}>Business Analytics Program</p>
          <p className={styles.FooterInnerli}>Data Analytics Program</p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Learnbay</p>
          <p className={styles.FooterInnerli}>About Us</p>
          <p className={styles.FooterInnerli}>Contact Us</p>
          <p className={styles.FooterInnerli}>Demo</p>
          <p className={styles.FooterInnerli}>Blogs</p>
          {/* <p className={styles.FooterInnerli}>Career</p> */}
          <p className={styles.FooterInnerP}>Terms</p>
          <p className={styles.FooterInnerli}>Terms and Conditions</p>
          <p className={styles.FooterInnerli}>Refund/Cancellation policy</p>
          <p className={styles.FooterInnerli}>Privacy Policy</p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <button className={styles.btnout}>
            <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
            Get Our Android App
          </button>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore -
            560102 (Above Sangam Sweets)
          </p>
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
          Ofc no. 408, 4th floor, Inorbit mall, City Space, opp to Fiserv, Viman Nagar, Pune, Maharashtra 411014
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
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Pune
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in pune
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in pune
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in pune
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training pune
          </p>
          <p className={styles.FooterInnerli}>
            Full stack software developer course in Pune
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Mumbai</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Mumbai
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Mumbai
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Mumbai
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Mumbai
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Mumbai
          </p>
          <p className={styles.FooterInnerli}>
            Full stack software developer course in mumbai
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Chennai</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Chennai
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Chennai
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Chennai
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Chennai
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Chennai
          </p>
          <p className={styles.FooterInnerli}>
            Full-stack software developer course in Chennai
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Canada</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Canada
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Canada
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Canada
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Canada
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Canada
          </p>
          <p className={styles.FooterInnerli}>
            full-stack software developer course in Canada
          </p>
        </div>
      </div>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Bangalore
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Bangalore
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Bangalore
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Bangalore
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Bangalore
          </p>
          <p className={styles.FooterInnerli}>
            Full-stack software developer course in Bangalore
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Hyderabad</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Hyderabad
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Hyderabad
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Hyderabad
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Hyderabad
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Hyderabad
          </p>
          <p className={styles.FooterInnerli}>
            Full-stack software developer course in hyderabad
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Dubai</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Dubai
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Dubai
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Dubai
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Dubai
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Dubai
          </p>
          <p className={styles.FooterInnerli}>
            Full-stack software developer course in Dubai
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
          <p className={styles.FooterInnerli}>
            Data Science Course Training in Delhi
          </p>
          <p className={styles.FooterInnerli}>
            Machine learning course training in Delhi
          </p>
          <p className={styles.FooterInnerli}>
            data analytics course training in Delhi
          </p>
          <p className={styles.FooterInnerli}>
            business analytics course training in Delhi
          </p>
          <p className={styles.FooterInnerli}>
            artificial intelligence AI course training Delhi
          </p>
          <p className={styles.FooterInnerli}>
            Full-stack software developer course in Delhi
          </p>
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
