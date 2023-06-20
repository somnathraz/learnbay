import React from "react";
import styles from "./FirstSection.module.css";
import Form from "../../../components/Form/Form";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { firstSectionData } from "./FirstSectionData";

function FirstSection() {
  return (
    <section className={styles.mains}>
      <div className={styles.backThank}>
        <div className={styles.boxes}>
          {firstSectionData.map((data, index) => {
            const { img, url } = data;
            return (
              <a href={url} target="_blank">
                <div className={styles.boxIinner} key={index}>
                  <div>
                    <Image
                      src={img}
                      width="170"
                      height="170"
                      layout="intrinsic"
                      alt="data science course"
                    />
                  </div>

                  <button>
                    Sample Resume
                    <FaDownload style={{ marginLeft: "10px" }} />
                  </button>
                </div>
              </a>
            );
          })}
        </div>
        <div className={styles.FormThank}>
          <h4>Apply For Counselling</h4>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
