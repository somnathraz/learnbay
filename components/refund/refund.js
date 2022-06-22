import styles from "./refund.module.css";
import React from 'react'

function refund() {
  return (
    <section className={styles.refund}>
        <div className={styles.BackP}><h4><b>Refund-Cancellation</b></h4></div>
        <div className={styles.refundInner}>
        <p className={styles.top}>Refunds Cancellation Policy:</p>

        <p className={styles.bot}>Our Refunds Cancellation Policy lasts 2 weeks. If 2 weeks have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.

To complete your return, we require a receipt or proof of purchase.</p>

<p className={styles.top}>Refunds (if applicable).</p>

<p className={styles.bot}>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 5-7 amount of days.</p>

<p className={styles.top}>Late or missing refunds (if applicable)</p>

<p className={styles.bot}>If you haven’t received a refund yet, first check your bank account again.</p>

<p className={styles.bot}>Then contact your credit card company, it may take some time before your refund is officially posted.</p>

<p className={styles.bot}>Next contact your bank. There is often some processing time before a refund is posted.</p>

<p className={styles.bot}>If you’ve done all of this and you still have not received your refund yet, please contact us at
contacts@learnbay.co</p>
        </div>
    </section>
  )
}

export default refund
