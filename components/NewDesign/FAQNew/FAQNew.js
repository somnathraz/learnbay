import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";

function FAQNew({
  FaqDatas,
  DomainFaqDatas,
  SupportFaqDatas,
  CertificationFaqDatas,
  jobFaqDatas,
  MentorshipFaqDatas,
  CapstoneFaqDatas,
  PaymentFaqDatas,
}) {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Assistance, setJobAssistance] = useState(false);
  const [Mentorship, setMentorship] = useState(false);
  const [Support, setSupport] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.Course}>
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              viewAll ? { background: "white" } : { background: "#E1F1FA6666" }
            }
          >
            COURSE RELATED
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              oneYear ? { background: "white" } : { background: "#E1F1FA6666" }
            }
          >
            DOMAIN ELECTIVES
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              nonTech ? { background: "white" } : { background: "#E1F1FA6666" }
            }
          >
            PAYMENTS AND SCHOLARSHIPS
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(true);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              manager ? { background: "white" } : { background: "#E1F1FA6666" }
            }
          >
            CAPSTONE AND REAL-TIME PROJECTS
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(true);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              Guarantee
                ? { background: "white" }
                : { background: "#E1F1FA6666" }
            }
          >
            CERTIFICATION
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(true);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              Assistance
                ? { background: "white" }
                : { background: "#E1F1FA6666" }
            }
          >
            JOB ASSISTANCE
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(true);
              setSupport(false);
            }}
            style={
              Mentorship
                ? { background: "white" }
                : { background: "#E1F1FA6666" }
            }
          >
            MENTORSHIPS
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(true);
            }}
            style={
              Support ? { background: "white" } : { background: "#E1F1FA6666" }
            }
          >
            SUPPORT
          </span>
        </div>
        {viewAll ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={FaqDatas} />
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={DomainFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={PaymentFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={CertificationFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Assistance ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={jobFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {manager ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={CapstoneFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Mentorship ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={MentorshipFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Support ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={SupportFaqDatas} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FAQNew;
