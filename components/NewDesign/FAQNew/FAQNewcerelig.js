import React, { useState } from "react";
import styles from "../FAQNewCity/FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";

function FAQNew({ FaqDatas, DomainFaqDatas, SupportFaqDatas, jobFaqDatas, GenericFaqDatas, MentorshipFaqDatas, CriteriaFaqDatas, CapstoneFaqDatas, PaymentFaqDatas }) {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Assistance, setJobAssistance] = useState(false);
  const [Mentorship, setMentorship] = useState(false);
  const [Support, setSupport] = useState(false);
  const [Generic, setGeneric] = useState(false);
  const [Criteria, setCriteria] = useState(false);
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              viewAll ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              oneYear ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              nonTech ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              manager ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(true);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              Assistance ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(true);
              setGeneric(false);
            }}
            style={
              Criteria ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            ELIGIBILITY CRITERIA
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setJobAssistance(false);
              setMentorship(true);
              setSupport(false);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              Mentorship ? { background: "white" } : { background: "#E5F3FA" }
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
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
              setCriteria(false);
              setGeneric(true);
            }}
            style={
              Generic ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            GENERIC QUERIES
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(true);
              setCriteria(false);
              setGeneric(false);
            }}
            style={
              Support ? { background: "white" } : { background: "#E5F3FA" }
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
        {Criteria ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={CriteriaFaqDatas} />
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
        {Generic ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={GenericFaqDatas} />
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
