import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

import {
  CertificateFinanceD,
  CertificateFinanceDD,
  CertificateFinanceDDD,
} from "./CertificateDetail";

function CertificateTab() {
  const [CertificateFinance1, setCertificateFinance1] = useState(true);
  const [CertificateFinance2, setCertificateFinance2] = useState(false);
  const [CertificateFinance3, setCertificateFinance3] = useState(false);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.certificate}>
        <div className={styles.listPanel}>
        <span
            onClick={() => {
              setCertificateFinance1(false);
              setCertificateFinance2(false);
              setCertificateFinance3(true);
            }}
            style={
              CertificateFinance3
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM Capstone Project
          </span>
          <span
            onClick={() => {
              setCertificateFinance1(true);
              setCertificateFinance2(false);
              setCertificateFinance3(false);
            }}
            style={
              CertificateFinance1
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM
          </span>
          <span
            onClick={() => {
              setCertificateFinance1(false);
              setCertificateFinance2(true);
              setCertificateFinance3(false);
            }}
            style={
              CertificateFinance2
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            Microsoft
          </span>
        </div>
        {CertificateFinance1 ? (
          <div className={styles.gridPanel}>
            {CertificateFinanceD.map((CertificateDData) => {
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
        {CertificateFinance2 ? (
          <div className={styles.gridPanel}>
            {CertificateFinanceDD.map((CertificateDData) => {
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
        {CertificateFinance3 ? (
          <div className={styles.gridPanel}>
            {CertificateFinanceDDD.map((CertificateDData) => {
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
