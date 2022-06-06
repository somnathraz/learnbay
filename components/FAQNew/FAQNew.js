import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import { GoCheck } from "react-icons/go";
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

function FAQNew() {
    const [viewAll, setViewAll] = useState(true);
    const [oneYear, setOneYear] = useState(false);
    const [nonTech, setNonTech] = useState(false);
    const [manager, setManager] = useState(false);
    const [Guarantee, setGuarantee] = useState(false);
    const [Assistance , setJobAssistance] = useState(false);
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
          {viewAllD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {oneYear ? (
        <div className={styles.gridPanel}>
          {ForProgrammersD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {nonTech ? (
        <div className={styles.gridPanel}>
          {ForNonProgrammerD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {manager ? (
        <div className={styles.gridPanel}>
          {ForManagerD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {Guarantee ? (
        <div className={styles.gridPanel}>
          {JobGuaranteeD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {Assistance ? (
        <div className={styles.gridPanel}>
          {AssistanceD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {Mentorship ? (
        <div className={styles.gridPanel}>
          {MentorshipD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {Support ? (
        <div className={styles.gridPanel}>
          {SupportD.map((viewAllData) => {
            const { id, title, img, para } = viewAllData;
            return (
              <div className={styles.leftSide} key={id}>
                <img
                  src={img}
                  layout="intrinsic"
                  className={styles.courseImg}
                />
                <h6>{title}</h6>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[0]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[1]}
                </p>
                <p>
                  <BsCheckCircle className={styles.checkCircle} />
                  {para[2]}
                </p>
                <div className={styles.btnWrapper}>
                  <button>
                    view Details
                    <FaUserGraduate className="bIcons" />
                  </button>
                  <button className="outLineBtn">
                    Brochure
                    <FaFilePdf
                      className="bIcon"
                      style={{ color: "#2d9cd7" }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  </div>
  )
}

export default FAQNew
