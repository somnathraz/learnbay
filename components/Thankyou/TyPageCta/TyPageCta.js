import React from "react";
import styles from "./TyPageCta.module.css";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
const TyPageCta = ({ heading, para, urls }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <h4>Data Science and AI for Managers and Leaders</h4>
          {/* <p>Text place holder enter text here place some text here text </p> */}
        </div>
        <Link href="#">
          <button>
            Download Brochure <AiOutlineDownload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TyPageCta;
