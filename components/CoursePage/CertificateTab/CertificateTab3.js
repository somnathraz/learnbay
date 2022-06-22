import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from 'next/image'
import { BsCheckCircle } from "react-icons/bs";

import {
  Certificate3,
  Certificate4,
} from "./CertificateDetail";

function CertificateTab() {
      const [Certificate1, setCertificate1] = useState(true);
  const [Certificate2, setCertificate2] = useState(false);
  return (
    <section className={styles.CertificateTab}>
        <div className={styles.certificate}>
            <div className={styles.listPanel}>
            <span
                onClick={() => {
                setCertificate1(true);
                setCertificate2(false);
                }}
                style={
                Certificate1 ? { background: "#E5F3FA" } : { background: "white" }
                }
            >
                Certificate 1
            </span>
            <span
                onClick={() => {
                setCertificate1(false);
                setCertificate2(true);
                }}
                style={
                Certificate2 ? { background: "#E5F3FA" } : { background: "white" }
                }
            >
                Certificate 2
            </span>
            </div>
            {Certificate1 ? (
          <div className={styles.gridPanel}>
            {Certificate3.map((Certificate4ata) => {
              const { id, title, img, para } = Certificate4ata;
              return (
                <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                    <h6>{title}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  </div>
                  <div className={styles.leftSideI} key={id}>
                  <Image
            src={img}
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="800px"
          />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Certificate2 ? (
          <div className={styles.gridPanel}>
            {Certificate4.map((Certificate4ata) => {
              const { id, title, img, para } = Certificate4ata;
              return (
                <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                    <h6>{title}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  </div>
                   <div className={styles.leftSideI} key={id}>
                     <Image
            src={img}
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1150px"
            height="800px"
          />
              
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        </div>
    </section>
  )
}

export default CertificateTab;