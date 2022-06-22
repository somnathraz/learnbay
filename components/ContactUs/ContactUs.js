import React from 'react'
import { FaMapMarkedAlt,FaEnvelope,FaWhatsapp } from "react-icons/fa";
import styles from "./ContactUs.module.css";
import { RiWhatsappFill } from "react-icons/ri";


function ContactUs() {
  return (
    <section className={styles.ContactUs}>
        <div className={styles.BackC}><h4><b>Contact Us</b></h4></div>
        <div className={styles.CInner}>
        <h4>We`Re Here To Help You</h4>
        <p>Got A Course In Mind? We’d Love To Hear And Help You Decide On A Course. Take Five Minutes To Fill Out The Form So That We Can Get To Know You And Understand Your Requirements.</p>
        <div className={styles.Inner}>
          <div className={styles.InnerBox}>
          <FaMapMarkedAlt className={styles.tick} />
          <h3>HSR Layout</h3>
          <p>1090 1st floor, 18th Cross Rd, above Sangam Sweets, Sector 3, HSR Layout, Bengaluru, Karnataka 560102</p>
          </div>
          <div className={styles.InnerBox}>
          <FaEnvelope className={styles.tick} />
          <h3>Contact Us</h3>
          <p>Email :- contacts@learnbay.co</p>
          <p>Phone :- (+91) 77956 87988</p>
          </div>
          <div className={styles.InnerBox}>
          <FaWhatsapp className={styles.tick} />
          <h3>Whatsapp</h3>
          <a href="https://wa.me/+917795687988" target="_blank"><button className={styles.btn1}>
          (+91) 77956 87988
              </button></a>
          </div>
        </div>
        </div>
    </section>
  )
}

export default ContactUs
