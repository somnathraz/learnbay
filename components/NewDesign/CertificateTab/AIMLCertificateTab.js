import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

import {
  CertificateAIMLD,
  CertificateAIMLDD,
  CertificateAIMLDDD,
} from "./CertificateDetail";

function CertificateTab() {
  const [CertificateAIML1, setCertificateAIML1] = useState(true);
  const [CertificateAIML2, setCertificateAIML2] = useState(false);
  const [CertificateAIML3, setCertificateAIML3] = useState(false);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.certificate}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setCertificateAIML1(false);
              setCertificateAIML2(false);
              setCertificateAIML3(true);
            }}
            style={
              CertificateAIML3
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM Capstone Project
          </span>
          <span
            onClick={() => {
              setCertificateAIML1(true);
              setCertificateAIML2(false);
              setCertificateAIML3(false);
            }}
            style={
              CertificateAIML1
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM
          </span>
          <span
            onClick={() => {
              setCertificateAIML1(false);
              setCertificateAIML2(true);
              setCertificateAIML3(false);
            }}
            style={
              CertificateAIML2
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            Microsoft
          </span>
        </div>
        {CertificateAIML1 ? (
          <div className={styles.gridPanel}>
            {CertificateAIMLD.map((CertificateDData) => {
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
        {CertificateAIML2 ? (
          <div className={styles.gridPanel}>
            {CertificateAIMLDD.map((CertificateDData) => {
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
        {CertificateAIML3 ? (
          <div className={styles.gridPanel}>
            {CertificateAIMLDDD.map((CertificateDData) => {
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
