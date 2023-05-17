import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

import {
  AnalyticsCertificateD,
} from "./CertificateDetail";

function CertificateTab() {
  const [AnalyticsCertificate, setAnalyticsCertificate] = useState(true);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.certificate}>
        {/* <div className={styles.listPanel}>
          <span
            onClick={() => {
              setAnalyticsCertificate(true);
            }}
            style={
              AnalyticsCertificate
                ? { borderBottom: "1px solid #fff", fontWeight: "700" }
                : { borderBottom: "0" }
            }
          >
            IBM
          </span>
        </div> */}
        {AnalyticsCertificate ? (
          <div className={styles.gridPanel}>
            {AnalyticsCertificateD.map((CertificateDData) => {
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
