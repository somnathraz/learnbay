import React from "react";
import { BsFillCreditCard2FrontFill, BsLaptopFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import styles from "./ProgramFee.module.css";
import Image from "next/image";

export const ProgramFee = () => {
  return (
    <>
    <div className={styles.header}>
    <h5 >Program Fee & Financing</h5>
        <p>We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical.</p>
        
    </div>
    <div className={styles.wrap}>
      <div className={styles.feeWrapper}>
       
        <div className={styles.left}>
          <h6>The EMI option</h6>
          <p>
            With a 0% interest rate, we provide you affordable financing
            solutions such as Financing as low as. Besides, the program fees structure
            is transparent and not attached with any hidden expenses.
          </p>
          <Image src="/programFeeIcon.png" width="225" height="111" layout="intrinsic"/>
          <div className={styles.bottom}>
            <p>Get professional training affordably</p>
            <h5>₹ 8,500*/month</h5>
            <button>Enroll Now</button>
          </div>
        </div>
        <div className={styles.right}>
          <h6>Alternative Options of Financing</h6>
          <p>
            If one-time payment is your thing other than EMI, you can rely on
            services such as Internet banking or credit/debit cards. We accept
            course fees payment in these specified modes, whichever you feel
            comfortable with.
          </p>
          <div className={styles.bottom}>
            <div className={styles.lefts}>
              <BsFillCreditCard2FrontFill className={styles.icon} />
              <p>Credit Card</p>
            </div>
            <div className={styles.center}>
              <BsLaptopFill className={styles.icon} />
              <p>Internet Banking</p>
            </div>
            <div className={styles.rights}>
              <GiWallet className={styles.icon} />
              <p>Financing as low as</p>
            </div>
          </div>
          <div className={styles.bottomS}>
            <p>Get professional training affordably</p>
            <h5>₹ 8,500*/month</h5>
            <button style={{margin:"auto"}}>Enroll Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};