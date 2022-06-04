import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function FAQ({ changeFAQ }) {
  const [state, setState] = useState([
    {
      id: 0,
      ques: changeFAQ
        ? "What are the various learning options offered under the Advanced Data Science and AI course?"
        : "What are the various learning options offered under the Advanced Full Stack Software Development?",
      ans: changeFAQ
        ? "Most importantly, we offer both offline and online learning choices for our Advanced Data science and AI course with real-work experience. Aside from that, we provide a blended learning program designed specifically for working professionals. In addition, you can participate in live online sessions in hybrid learning mode under our Data science and AI course. Besides, you will also be performing some hands-on work on the industrial project site.That said, we can only offer fully online classes via live sessions due to the outbreak. This means you can talk to your instructor in real time, just like in a traditional face-to-face session. Additionally, at this time, all practical sessions of our artificial intelligence and machine learning course will be conducted using cloud-based services"
        : "Most importantly, we offer both offline and online learning choices for our Advanced Full Stack Software Development with real-work experience. Aside from that, we provide a blended learning program designed specifically for working professionals. In addition, you can participate in live online sessions in hybrid learning mode under our Full Stack Software Development. Besides, you will also be performing some hands-on work on the industrial project site.That said, we can only offer fully online classes via live sessions due to the outbreak. This means you can talk to your instructor in real time, just like in a traditional face-to-face session. Additionally, at this time, all practical sessions of our artificial intelligence and machine learning course will be conducted using cloud-based services",
      open: true,
    },
    {
      id: 1,
      ques: "Will there be a make-up class available if I have to miss a session due to an emergency?",
      ans: changeFAQ
        ? "Firstly, we offer live online classes for our Advance data science and AI program. Also, all of our students have access to recorded versions of those classes. In addition, we also give you unlimited access to these recorded sessions, so you can go back to them whenever you need theoretical help in your AI and ML career. As a result, you need not be disappointed if you miss any of the live classes under our artificial intelligence and machine learning training. However, we strongly advise you to participate in all live classes."
        : "Firstly, we offer live online classes for our Advanced Full Stack Software Development. Also, all of our students have access to recorded versions of those classes. In addition, we also give you unlimited access to these recorded sessions, so you can go back to them whenever you need theoretical help in your AI and ML career. As a result, you need not be disappointed if you miss any of the live classes under our Full stack development training. However, we strongly advise you to participate in all live classes.",
      open: false,
    },
    {
      id: 2,
      ques: "What if I did not understand an entire module? Will I be able to repeat the class?",
      ans: changeFAQ
        ? "Most importantly, if you do not understand an entire module under the Advanced data science and AI course, you can repeat the same class with another batch. Thus, leaving no chance for you to remain in confusion about the learning modules."
        : `Most importantly, if you do not understand an entire module under the Advanced Full Stack Software Development, you can repeat the same class with another batch. Thus, leaving no chance for you to remain in confusion about the learning modules.`,
      open: false,
    },
    {
      id: 3,
      ques: changeFAQ
        ? "What is Skillslash’s Advanced data science and AI course scholarship program?"
        : "What is Skillslash’s Advanced Full Stack Software Development scholarship program?",
      ans: "First of all, every candidate will be given the opportunity to take a 20-minute online aptitude exam. If a candidate passes the aptitude exam with a score of more than 65 percent, he or she will be eligible for a 10 percent discount on the course fees. Besides, candidates who lost their jobs as a result of the COVID situation, as well as mothers who want to begin their careers, can receive up to a 100% scholarship based on their exam score.",
      open: false,
    },
    {
      id: 4,
      ques: changeFAQ
        ? "Are there any course fee discounts available with Skillslash’s ai and ml course?"
        : "Are there any course fee discounts available with Skillslash’s Full stack development course?",
      ans: changeFAQ
        ? "If you are considered eligible for a scholarship, you may be able to save up to 10% on your fees for Advanced Data science and AI course. Moreover, we also offer scholarships to Covid-affected candidates, unemployed candidates, and mothers returning to the workforce after a vacation."
        : "If you are considered eligible for a scholarship, you may be able to save up to 10% on your fees for Advanced Full Stack Software Development. Moreover, we also offer scholarships to Covid-affected candidates, unemployed candidates, and mothers returning to the workforce after a vacation.",
      open: false,
    },
    {
      id: 5,
      ques: changeFAQ
        ? "What kind of certification does the Data science and AI course provide?"
        : "What kind of certification does the Full stack Software Development course provide?",
      ans: changeFAQ
        ? "The hitch is that if you take the artificial intelligence and machine learning course, you will not just obtain any ordinary type of certification or academic degree. Instead, we offer a globally recognized project management certificate. The firm with which you completed your industrial project can also give you direct certifications."
        : "The hitch is that if you take the Full stack development course, you will not just obtain any ordinary type of certification or academic degree. Instead, we offer a globally recognized project management certificate. The firm with which you completed your industrial project can also give you direct certifications.",
      open: false,
    },
  ]);
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
      <h4 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h4>
      {changeFAQ ? (
        <p className="pBot">
          Learn from experts in live-interactive classes under Advanced data
          science and AI course with 100% job guarantee.
        </p>
      ) : (
        <p className="pBot">
          Learn from experts in live-interactive classes under Advanced Full
          stack Software Development course with 100% job guarantee.
        </p>
      )}

      {state.map((data, index) => {
        const { id, ques, ans, open } = data;

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
