import React, { useState } from "react";
import styles from "./CertificateTab.module.css";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";

import {
  CertificateAdvance1,
  CertificateAdvance2,
  MicrosoftCertificateAdvance,
} from "./CertificateDetail";

function CertificateTab({ Ibm, twoCertificateIBM }) {
  const [MActive, setMActive] = useState(false);
  const [IActive, setIActive] = useState(true);
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
        {Ibm ? (
          ""
        ) : (
          <div className={styles.pWrap}>
            <p
              onClick={() => {
                setIActive(true);
                setMActive(false);
              }}
              className={IActive ? styles.activeP : styles.inactiveP}
            >
              IBM Certificate
            </p>
            <hr className={styles.line} />

            <p
              onClick={() => {
                setIActive(false);
                setMActive(true);
              }}
              className={MActive ? styles.activeP : styles.inactiveP}
            >
              Microsoft Certification
            </p>
          </div>
        )}
      </div>

      {twoCertificateIBM ? (
        <div className={MActive ? styles.certificateS : styles.certificate}>
          {MActive ? (
            <div className={styles.MicroCert}>
              {MicrosoftCertificateAdvance.map((microCertData) => {
                const { id, img, title, para } = microCertData;
                return (
                  <>
                    <div className={styles.leftSide}>
                      <Image
                        src={img}
                        alt="Certificate"
                        quality={100}
                        layout="intrinsic"
                        width={1150}
                        height={800}
                      />
                    </div>
                    <div className={styles.rightSide}>
                      <h6>{title}</h6>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                        width="130"
                        height="4"
                        layout="intrinsic"
                        alt="data science course"
                      />
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[0]}
                      </p>
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[1]}
                      </p>
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[2]}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {IActive ? (
            <>
              <div className={styles.gridPanel}>
                {CertificateAdvance1.map((CertificateAdvance2ata) => {
                  const { id, title, img, para } = CertificateAdvance2ata;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div className={styles.leftSideP} key={id}>
                        <Image
                          src={img}
                          alt="Certificate"
                          quality={100}
                          layout="intrinsic"
                          width="1150px"
                          height="800px"
                        />
                        <div className={styles.contentDiv}>
                          <h6>{title}</h6>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                            width="90"
                            height="4"
                            layout="intrinsic"
                            alt="data science course"
                          />
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[0]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[2]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.gridPanel}>
                {MicrosoftCertificateAdvance.map((microCertData) => {
                  const { id, title, img, para } = microCertData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div className={styles.leftSideP} key={id}>
                        <Image
                          src={img}
                          alt="Certificate"
                          quality={100}
                          layout="intrinsic"
                          width="1150px"
                          height="800px"
                        />
                        <div className={styles.contentDiv}>
                          <h6>{title}</h6>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                            width="90"
                            height="4"
                            layout="intrinsic"
                            alt="data science course"
                          />
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[0]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[2]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={MActive ? styles.certificateS : styles.certificate}>
          {MActive ? (
            <div className={styles.MicroCert}>
              {MicrosoftCertificateAdvance.map((microCertData) => {
                const { id, img, title, para } = microCertData;
                return (
                  <>
                    <div className={styles.leftSide}>
                      <Image
                        src={img}
                        alt="Certificate"
                        quality={100}
                        layout="intrinsic"
                        width={1150}
                        height={800}
                      />
                    </div>
                    <div className={styles.rightSide}>
                      <h6>{title}</h6>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                        width="130"
                        height="4"
                        layout="intrinsic"
                        alt="data science course"
                      />
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[0]}
                      </p>
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[1]}
                      </p>
                      <p>
                        <BsCheck2 className={styles.checkCircle} />
                        {para[2]}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {IActive ? (
            <>
              <div className={styles.gridPanel}>
                {CertificateAdvance1.map((CertificateAdvance2ata) => {
                  const { id, title, img, para } = CertificateAdvance2ata;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div className={styles.leftSideP} key={id}>
                        <Image
                          src={img}
                          alt="Certificate"
                          quality={100}
                          layout="intrinsic"
                          width="1150px"
                          height="800px"
                        />
                        <div className={styles.contentDiv}>
                          <h6>{title}</h6>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                            width="90"
                            height="4"
                            layout="intrinsic"
                            alt="data science course"
                          />
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[0]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[2]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.gridPanel}>
                {CertificateAdvance2.map((CertificateAdvance2ata) => {
                  const { id, title, img, para } = CertificateAdvance2ata;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div className={styles.leftSideP} key={id}>
                        <Image
                          src={img}
                          alt="Certificate"
                          quality={100}
                          layout="intrinsic"
                          width="1150px"
                          height="800px"
                        />
                        <div className={styles.contentDiv}>
                          <h6>{title}</h6>
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg"
                            width="90"
                            height="4"
                            layout="intrinsic"
                            alt="data science course"
                          />
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[0]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheck2 className={styles.checkCircle} />
                            {para[2]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </section>
  );
}

export default CertificateTab;
