import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

import {
  CertificateMasterD,
  CertificateMasterDD,
  CertificateMasterDDD,
} from "./CertificateDetail";

function CertificateTab() {
  const [CertificateMaster1, setCertificateMaster1] = useState(true);
  const [CertificateMaster2, setCertificateMaster2] = useState(false);
  const [CertificateMaster3, setCertificateMaster3] = useState(false);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.certificate}>
        <div className={styles.listPanel}>
        <span
            onClick={() => {
              setCertificateMaster1(false);
              setCertificateMaster2(false);
              setCertificateMaster3(true);
            }}
            style={
              CertificateMaster3
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM (Capstone)
          </span>
          <span
            onClick={() => {
              setCertificateMaster1(true);
              setCertificateMaster2(false);
              setCertificateMaster3(false);
            }}
            style={
              CertificateMaster1
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM
          </span>
          <span
            onClick={() => {
              setCertificateMaster1(false);
              setCertificateMaster2(true);
              setCertificateMaster3(false);
            }}
            style={
              CertificateMaster2
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            Microsoft
          </span>
          
        </div>
        {CertificateMaster1 ? (
          <div className={styles.gridPanel}>
            {CertificateMasterD.map((CertificateDData) => {
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
        {CertificateMaster2 ? (
          <div className={styles.gridPanel}>
            {CertificateMasterDD.map((CertificateDData) => {
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
        {CertificateMaster3 ? (
          <div className={styles.gridPanel}>
            {CertificateMasterDDD.map((CertificateDData) => {
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
