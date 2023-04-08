import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

import {
  CertificateD,
  CertificateDD,
  CertificateDDD,
} from "./CertificateDetail";

function CertificateTab() {
  const [Certificate1, setCertificate1] = useState(true);
  const [Certificate2, setCertificate2] = useState(false);
  const [Certificate3, setCertificate3] = useState(false);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.certificate}>
        <div className={styles.listPanel}>
        <span
            onClick={() => {
              setCertificate1(false);
              setCertificate2(false);
              setCertificate3(true);
            }}
            style={
              Certificate3
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM Capstone Project
          </span>
          <span
            onClick={() => {
              setCertificate1(true);
              setCertificate2(false);
              setCertificate3(false);
            }}
            style={
              Certificate1
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM
          </span>
          <span
            onClick={() => {
              setCertificate1(false);
              setCertificate2(true);
              setCertificate3(false);
            }}
            style={
              Certificate2
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            Microsoft
          </span>
        </div>
        {Certificate1 ? (
          <div className={styles.gridPanel}>
            {CertificateD.map((CertificateDData) => {
              const { id, title, img, para } = CertificateDData;
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
                      width="950px"
                      height="600px"
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
            {CertificateDD.map((CertificateDData) => {
              const { id, title, img, para } = CertificateDData;
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
                      width="950px"
                      height="600px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Certificate3 ? (
          <div className={styles.gridPanel}>
            {CertificateDDD.map((CertificateDData) => {
              const { id, title, img, para } = CertificateDData;
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
                      width="950px"
                      height="600px"
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
  );
}

export default CertificateTab;
