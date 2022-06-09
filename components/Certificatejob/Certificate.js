import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";


const Certificate = ({ title, desc, desc2, desc3, src }) => {

  return (
    <section className={styles.Certifcate}>
      <div className={styles.left}>
      <p className="pTop">Certification from IBM</p>
        <h4 style={{ marginBottom: "30px" }}>{title}</h4>
        <p className={styles.pBotC}><BiCheckCircle className="bIcons" style={{color:"#2D9CD7", fontSize:"26px"}} />{desc}</p>
        <p className={styles.pBotC}><BiCheckCircle className="bIcons" style={{color:"#2D9CD7", fontSize:"26px"}} />{desc2}</p>
        <p className={styles.pBotC}><BiCheckCircle className="bIcons" style={{color:"#2D9CD7", fontSize:"26px"}} />{desc3}</p>
      </div>
      <div className={styles.right}>
        <Image
          className="shadow"
          src={src}
          alt="Certificate"
          quality={100}
          layout="intrinsic"
          width="600px"
          height="470px"
        />
      </div>
    </section>
  );
};

export default Certificate;
