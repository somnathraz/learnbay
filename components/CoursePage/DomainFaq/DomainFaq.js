import React from 'react'
import styles from "./DomainFaq.module.css";
import Image from 'next/image';
import DomainCourseFaq from './DomainCourseFaq';

const DomainFaq = ({FaqData}) => {
  return (
    <div className={styles.DomainWrapper}>
        <div className={styles.leftSide}>
            <h5><span>What Ma</span>kes Us Different?</h5>
            <p>You have several options when choosing any course from Learnbay as we have never failed our promises.</p>
<DomainCourseFaq FaqData={FaqData} />
        </div>
        <div className={styles.rightSide}>
            <Image src="/Domain-faq-right.png" width="519" height="312" layout="intrinsic"/> 
         
        </div>
    </div>
  )
}

export default DomainFaq