import React from "react";
import styles from "./Course.module.css";
import { GoCheck } from "react-icons/go";
import { BsCheckCircle } from "react-icons/bs";
import { FaUserGraduate, FaFilePdf } from "react-icons/fa";

const Course = () => {
  return (
    <div className={styles.Course}>
      <h2>Industry Certified Program for Working Professionals</h2>
      <div className={styles.feature}>
        <p>
          <GoCheck className={styles.tick} />
          100% Live Interactive Sessions
        </p>
        <p>
          <GoCheck className={styles.tick} />
          1:1 Doubt Clearing
        </p>
        <p>
          <GoCheck className={styles.tick} />
          IBM’s Dual Certification
        </p>
        <p>
          <GoCheck className={styles.tick} />
          Alumni Portal Access
        </p>
      </div>
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span>view All</span>
          <span>For Programmers</span>
          <span>For Non-Programmers</span>
          <span>For Manager</span>
          <span>Job Guaranteed</span>
        </div>
        <div className={styles.gridPanel}>
          <div className={styles.leftSide}>
            <img
              src="/data_science-cover.webp"
              layout="intrinsic"
              className={styles.courseImg}
            />
            <h6>Data Science and AI Foundation Program</h6>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              225 hours of Interactive Learning
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />8 projects + 1
              capstone
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              <b>Course Fee :</b> ₹ 65,000 + GST
            </p>
            <div className={styles.btnWrapper}>
              <button>
                view Details
                <FaUserGraduate className="bIcons" />
              </button>
              <button className="outLineBtn">
                view Details
                <FaFilePdf className="bIcon" style={{ color: "#2d9cd7" }} />
              </button>
            </div>
          </div>
          <div className={styles.middleSide}>
            <img
              src="/data_science-cover.webp"
              layout="intrinsic"
              className={styles.courseImg}
            />
            <h6>Data Science and AI Foundation Program</h6>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              225 hours of Interactive Learning
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />8 projects + 1
              capstone
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              <b>Course Fee :</b> ₹ 65,000 + GST
            </p>
            <div className={styles.btnWrapper}>
              <button>
                view Details
                <FaUserGraduate className="bIcons" />
              </button>
              <button className="outLineBtn">
                view Details
                <FaFilePdf className="bIcon" style={{ color: "#2d9cd7" }} />
              </button>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img
              src="/data_science-cover.webp"
              layout="intrinsic"
              className={styles.courseImg}
            />
            <h6>Data Science and AI Foundation Program</h6>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              225 hours of Interactive Learning
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />8 projects + 1
              capstone
            </p>
            <p>
              <BsCheckCircle className={styles.checkCircle} />
              <b>Course Fee :</b> ₹ 65,000 + GST
            </p>
            <div className={styles.btnWrapper}>
              <button>
                view Details
                <FaUserGraduate className="bIcons" />
              </button>
              <button className="outLineBtn">
                view Details
                <FaFilePdf className="bIcon" style={{ color: "#2d9cd7" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
