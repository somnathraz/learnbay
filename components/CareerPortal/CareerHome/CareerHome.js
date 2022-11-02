import React from "react";
import CountUp from "react-countup";
import styles from "./CareerHome.module.css";
import { FaArrowRight } from "react-icons/fa";
import {
  FaUserFriends,
  FaCompress,
  FaAddressCard,
  FaClone,
  FaHandsHelping,
  FaUserGraduate,
  FaAngleDoubleUp,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function CareerHome() {
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <div>
      <p className={styles.pTop}>Career portal</p>
        <h4 style={{ textAlign: "left" }}>
        redesigning your <br />work EXPERIENCE
          <Link href="/apply-now">
            <div>
              <button className={styles.btn} style={{ marginTop: "25px" }}>
                Apply Now <FaArrowRight className="bIcons" />
              </button>
            </div>
          </Link>
        </h4>
        </div>
        <div className={styles.right}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/about-us.png"
            width="522"
            height="380"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
          <h3>Opportunities at Learnbay</h3>
          <div className={styles.iconBoxP}>
            <div className={styles.iconBoxInner}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
                alt="Learnbay"
                quality={100}
                objectFit="contain"
                width="400px"
                height="280px"
              />
            </div>
            <div className={styles.iconBoxInner}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
                alt="Learnbay"
                quality={100}
                objectFit="contain"
                width="400px"
                height="280px"
              />
            </div>
            <div className={styles.iconBoxInner}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
                alt="Learnbay"
                quality={100}
                objectFit="contain"
                width="400px"
                height="280px"
              />
            </div>
            <div className={styles.iconBoxInner}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
                alt="Learnbay"
                quality={100}
                objectFit="contain"
                width="400px"
                height="280px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.culture}>
        <div>
          <h3 className={styles.head}>Our Work Culture</h3>
          <p className={styles.para}>
          Learnbay was incorporated in 2015 , headquartered in Bangalore. Our company's success is based on our people-oriented culture, which benefits customers, and employees alike. Since we firmly believe that excellence is a journey of continuous improvement, we actively encourage an open-culture workplace, welcome input, and put it to good use. Moreover, there is no distinction in the powers we grant to every employee in the company. Join us and be a part of Learnbay.
          </p>
        </div>
        <div className={styles.img}>
          <div className={styles.img1}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="400px"
              height="280px"
            />
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="400px"
              height="280px"
            />
          </div>
          <div className={styles.img2}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="Learnbay"
              quality={100}
              width="400px"
              height="550px"
            />
          </div>
          <div className={styles.img3}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="400px"
              height="280px"
            />
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/advance-data-science-ai-program.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="400px"
              height="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHome;
