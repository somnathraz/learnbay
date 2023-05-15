import React from "react";
import styles from "./TyPageCta.module.css";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
const TyPageCta = ({ heading, para, brochureLink }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <h4>{heading}</h4>
        </div>
        <a href={brochureLink}>
          <button>
            Download Brochure <AiOutlineDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default TyPageCta;
