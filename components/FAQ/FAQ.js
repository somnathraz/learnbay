import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function FAQ({ FaqData }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    console.log(index);
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
        const { id, ques, ans, open } = data;
        ans.split(" ");

        return (
          <div
            key={id}
            className={styles.FaqWrapper}
            onClick={() => handleChange(index)}
          >
            {open ? (
              <div className={styles.quesO}>
                <h2>{ques}</h2>
                <span>
                  {open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            ) : (
              <div className={styles.ques}>
                <h2>{ques}</h2>
                <span>
                  {open ? (
                    <MdKeyboardArrowUp className="icon" />
                  ) : (
                    <MdKeyboardArrowDown className="icon" />
                  )}
                </span>
              </div>
            )}

            {open ? (
              <div className={styles.ans}>
                <p>{ans}</p>
              </div>
            ) : (
              <div className={styles.ansV}>
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
