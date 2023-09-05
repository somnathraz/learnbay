import React, { useState, useEffect } from "react";
import styles from "../styles/verifyCertificate.module.css";
import { GoVerified } from "react-icons/go";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const verify = () => {
  const [loading, setLoading] = useState(false);
  const [storeCertificate, setStoreCertificate] = useState(null);
  const [errorStoreCertificate, setErrorStoreCertificate] = useState("");
  const [query, setQuery] = useState({
    id: "",
  });

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const getCertificate = await fetch("/api/verifyCertificate", {
        method: "POST",
        body: JSON.stringify({ id: query.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (getCertificate.status === 200) {
        setErrorStoreCertificate("");
        const { certificate, msg } = await getCertificate.json();

        setStoreCertificate(certificate);
        setErrorStoreCertificate(msg);
        setQuery({
          id: "",
        });
      }
      if (getCertificate.status === 404) {
        setStoreCertificate("");

        const { certificate, msg } = await getCertificate.json();

        setStoreCertificate(certificate);
        setErrorStoreCertificate(msg);

        setQuery({
          id: "",
        });
      }
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
    <Navbar />
    <div className={styles.wrapper}>
      <div className={styles.FormWrappers}>
        <h2>Verify Your Certificate</h2>
        <div className={styles.formContainer}>
          <form onSubmit={formSubmit}>
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="id"
                className={styles.NameInput}
                required
                placeholder="Enter Your Certificate Id*"
                value={query.id}
                onChange={handleParam()}
              />
            </div>

            {loading ? (
              <div className="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            ) : (
              <button type="submit" className={styles.button}>
                Verify
                <GoVerified />
              </button>
            )}
          </form>
        </div>
      </div>
      {errorStoreCertificate === "" ? (
        ""
      ) : errorStoreCertificate === "Certificate Found" ? (
        <div className={styles.pdfWrapper}>
          <embed
            src={`${storeCertificate.downloadFile}#toolbar=0`}
            frameBorder={0}
            allowFullScreen
            width={1122}
            height={793}
            className={styles.emb}
          />

          <iframe
            src={storeCertificate.downloadFile}
            className={styles.mobileFrame}
          ></iframe>

          <h2>Your certificate is verified!</h2>
          {storeCertificate === null ? (
            ""
          ) : (
            <button className={styles.button}>
              <a href={storeCertificate.downloadFile}>Download certificate</a>
            </button>
          )}
        </div>
      ) : (
        ""
      )}
      {errorStoreCertificate === "" ? (
        ""
      ) : errorStoreCertificate === "Certificate Not Found" ? (
        <div className={styles.pdfWrapperS}>
          <h2>Your Certificate Id is Invalid!</h2>
        </div>
      ) : (
        ""
      )}
    </div>
    <Footer />
    </>
  );
};

export default verify;
