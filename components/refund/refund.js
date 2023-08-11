import styles from "./refund.module.css";
import React from "react";

function refund() {
  return (
    <section className={styles.refund}>
      <div className={styles.BackP}>
        <h4>
          <b>Refund-Cancellation Policy</b>
        </h4>
      </div>
      <div className={styles.refundInner}>
        <p className={styles.top}>REFUND POLICY AND TERMS OF SERVICE</p>

        <p className={styles.bot}>
          <b>Refund Eligibility: </b>
          Post a period of fifteen (15) calendar days from the date of
          enrollment/payment, the user shall be deemed ineligible to make any
          claims for refund under any circumstance or grounds. This stipulation
          stands irrespective of the mode of payment availed by the user, be it
          credit card EMI, partnership loans, direct bank transfers, Unified
          Payments Interface (UPI), or any other means. The aforementioned
          fifteen-day period shall be calculated commencing from the date on
          which payment was effected.
        </p>
        <p className={styles.bot}>
          <b>Extension Due to Emergencies: </b>
          In events of personal exigencies precluding students from attending
          live sessions, a formal request may be tabled seeking an intermission
          not exceeding three (3) months. Subsequently, Learnbay shall extend
          the live class subscription for an equivalent tenure. Notwithstanding
          the above, if a student has opted for EMI payment mode, he/she remains
          contractually bound to honour EMI commitments to our partnered loan
          entities or credit card institutions.
        </p>
        <p className={styles.bot}>
          <b>Breach of Terms: </b>
          Any transgression or infringement of the stipulated Terms and
          Conditions set forth on the Learnbay platform, followed by course
          abandonment, shall result in Learnbay unilaterally revoking the user's
          access.
        </p>
        <p className={styles.bot}>
          <b>Unauthorized Sharing: </b>
          Dissemination or sharing of user credentials without the explicit
          authorization of Learnbay may attract incremental fines and/or result
          in immediate expulsion from the course.
        </p>
        <p className={styles.bot}>
          <b>Termination on Grounds of Misrepresentation: </b>
          Should Learnbay ascertain the provision of misleading, spurious, or
          unlawfully procured documentation, the organization reserves the
          absolute right to indefinitely terminate the user's course access.
        </p>
        <p className={styles.bot}>
          <b>Document Submission: </b>
          Should an enrollee fail to furnish mandatory documentation requisite
          for course application post three (3) consecutive intimations,
          Learnbay holds the right to discontinue the student's access to the
          Learning Management System (LMS).
        </p>
        <p className={styles.bot}>
          <b>Refund Procedure: </b>
          Upon sanctioning a refund, the amount shall be credited to the
          original source employed during the transaction. For elucidation,
          should a transaction be undertaken via credit card, the refund shall
          be channeled to the same, typically within a window of five (5) to
          seven (7) working days. It's imperative for the claimant to produce
          verifiable proof of transaction or a valid receipt to initiate the
          refund process.
        </p>
        <p className={styles.bot}>
          <b>In the event of complications encountered during the refund process: </b>
          Engage with the pertinent credit card institution, acknowledging potential delays in the reflection of the refund.
        </p>
        <p className={styles.bot}>
        Subsequently, liaise with your banking entity, accounting for possible processing delays.
        </p>
        <p className={styles.bot}>
        Should the refund remain unprocessed despite adherence to the aforementioned protocols, direct your communication to us at
          <a href="mailto:contacts@learnbay.co"> <b>contacts@learnbay.co</b></a>
        </p>
        <p className={styles.bot}>
          <b>Cancellation Protocol: </b>All solicitations for course cancellations are to be electronically communicated to
          <a href="mailto:contacts@learnbay.co"> <b>contacts@learnbay.co.</b></a>
        </p>
      </div>
    </section>
  );
}

export default refund;
