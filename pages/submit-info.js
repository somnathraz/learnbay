import React from "react";
import Form from "../components/Form/Form";
import styles from "../styles/Submit.module.css";

const sumbit = () => {
  return (
    <div className="styles.Wrapper">
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Form />
      </div>
    </div>
  );
};

export default sumbit;
