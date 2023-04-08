import React from "react";
import styles from "./switch.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

function Switch() {
  return (
    <section className={styles.head}>
      <div className={styles.switch}>
        <a href="https://www.coursereport.com/schools/learnbay" target="_blank">
          <div className={styles.switchInner}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course-report.webp"
              width="180"
              height="94"
              layout="intrinsic"
              alt="Course Report"
            />
            <div className={styles.rating}>
              4.79 <AiFillStar className={styles.star} />
            </div>
          </div>
        </a>

        <a href="https://www.switchup.org/bootcamps/learnbay" target="_blank">
          <div className={styles.switchInner}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/switch-UP.webp"
              width="256"
              height="125"
              layout="intrinsic"
              alt="Switch Up"
            />
            <div className={styles.rating}>
              4.66 <AiFillStar className={styles.star} />
            </div>
          </div>
        </a>

        <a
          href="https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=hgryYtaHNa3Sz7sP3N6moA4&oq=learnbay&gs_l=psy-ab.3...0.0.0.9493.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.6ObhuVFzJhI#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145905,77.66061049999999],[12.8624004,77.6400626]]"
          target="_blank"
        >
          <div className={styles.switchInner}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Google-review.webp"
              width="206"
              height="121"
              layout="intrinsic"
              alt="Google Review"
            />
            <div className={styles.rating}>
              4.88 <AiFillStar className={styles.star} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Switch;
