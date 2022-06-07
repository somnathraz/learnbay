import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { FaUserGraduate, FaFilePdf } from "react-icons/fa";
import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  ForManagerD,
  JobGuaranteeD,
  AssistanceD,
  MentorshipD,
  SupportD,
} from "./FAQNewDetail";
import FAQ from "../FAQ/FAQ";
import CountUp from "react-countup";
import { FaqData, DomainFaqData, PaymentFaqData, CapstoneFaqData, CertificationFaqData, MentorshipFaqData, SupportFaqData } from "../FAQ/FaqData";

function FAQNew() {
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
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
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
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
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
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
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
              setGuarantee(true);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(false);
            }}
            style={
              Guarantee ? { background: "white" } : { background: "#E5F3FA" }
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
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(true);
              setSupport(false);
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
              setGuarantee(false);
              setJobAssistance(false);
              setMentorship(false);
              setSupport(true);
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
            <FAQ FaqData={FaqData} />
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={DomainFaqData} />
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={PaymentFaqData} />
        </div>
        ) : (
          ""
        )}
        {manager ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={DomainFaqData} />
        </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={CapstoneFaqData} />
        </div>
        ) : (
          ""
        )}
        {Assistance ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={CertificationFaqData} />
        </div>
        ) : (
          ""
        )}
        {Mentorship ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={MentorshipFaqData} />
        </div>
        ) : (
          ""
        )}
        {Support ? (
          <div className={styles.gridPanel}>
          <FAQ FaqData={SupportFaqData} />
        </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FAQNew;
