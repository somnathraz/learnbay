import React from "react";
import { FaMapMarkedAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styles from "./ContactUs.module.css";
import Image from "next/image";

function ContactUs() {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.BackC}>
        <div>
          <h4>
            <b>Contact Us</b>
          </h4>
          {/* <p>
            Do you have a certain course in mind? We'd love to hear from you and
            assist you in making a decision.
          </p> */}
        </div>

        <div>
          <Image
            src="/contact-us.png"
            width="400"
            height="300"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className={styles.CInner}>
        <h4>We`re Here To Help You</h4>
        <p>
          Got A Course In Mind? We’d Love To Hear And Help You Decide On A
          Course.
        </p>
        <div className={styles.Inner}>
          <div className={styles.InnerBox}>
            <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank"><FaMapMarkedAlt className={styles.tick} /></a>
            <h3>HSR Layout</h3>
            <a href="https://goo.gl/maps/4tC9yN8VTkBf72cW9" target="_blank"><p>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102 (Above Sangam Sweets)
            </p></a>
          </div>
          <div className={styles.InnerBox}>
          <a href="mailto:contacts@learnbay.co" target="_blank"><FaEnvelope className={styles.tick} /></a>
            <h3>Contact Us</h3>
            <a href="mailto:contacts@learnbay.co" target="_blank"><p>Email :- contacts@learnbay.co</p></a>
            <a href="tel:+917795687988" target="_blank"><p>Phone :- (+91) 77956 87988</p></a>
          </div>
          <div className={styles.InnerBox}>
          <a href="https://wa.me/+917795687988" target="_blank"><FaWhatsapp className={styles.tick} /></a>
            <h3>Whatsapp</h3>
            <a href="https://wa.me/+917795687988" target="_blank">
              <button className={styles.btn1}>(+91) 77956 87988</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
