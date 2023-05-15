import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function FAQ({ FaqData }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.FAQ}>
      {state.map((data, index) => {
        const {
          id,
          ques,
          ans1,
          ans,
          open,
          link1,
          linkText1,
          ansAfter,
          link2,
          linkText2,
          link3,
          linkText3,
          link4,
          linkText4,
          link5,
          linkText5,
          link6,
          linkText6,
          link7,
          linkText7,
        } = data;

        return (
          <div
            key={id}
            className={styles.FaqWrapper}
            onClick={() => handleChange(index)}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {open ? (
              <div className={styles.queshO} itemProp="name">
                <h2>{ques}</h2>
                <span>
                  {open ? (
                    <FaMinusCircle className={styles.iconMinus} style={ {fontSize: "18px"} }/>
                  ) : (
                    <FaPlusCircle className={styles.iconPlus} style={ {fontSize: "18px"} }/>
                  )}
                </span>
              </div>
            ) : (
              <div className={styles.quesh} itemProp="name">
                <h2>{ques}</h2>
                <span>
                  {open ? (
                  <FaMinusCircle className={styles.iconMinus} style={ {fontSize: "18px"} }/>
                  ) : (
                    <FaPlusCircle className={styles.iconPlus} style={ {fontSize: "18px"} }/>
                  )}
                </span>
              </div>
            )}

            {open ? (
              <div
                className={styles.ans}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p>
                  {ans}
                  <a href={link1} target="_blank" className={styles.link}>
                    {linkText1}
                  </a>
                  <a href={link2} target="_blank" className={styles.link}>
                    {linkText2}
                  </a>
                  <a href={link3} target="_blank" className={styles.link}>
                    {linkText3}
                  </a>
                  <a href={link4} target="_blank" className={styles.link}>
                    {linkText4}
                  </a>
                  <a href={link5} target="_blank" className={styles.link}>
                    {linkText5}
                  </a>
                  <a href={link6} target="_blank" className={styles.link}>
                    {linkText6}
                  </a>
                  <a href={link7} target="_blank" className={styles.link}>
                    {linkText7}
                  </a>
                  {ansAfter}
                  {ans1}
                </p>
              </div>
            ) : (
              <div
                className={styles.ansV}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p>{ans}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default FAQ;
