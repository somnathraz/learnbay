import React, { useState } from "react";
import styles from "./Course.module.css";
import { GoCheck } from "react-icons/go";
import { BsCheckCircle } from "react-icons/bs";
import { FaUserGraduate, FaFilePdf } from "react-icons/fa";
import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  ForManagerD,
  JobGuaranteeD,
} from "./courseDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [mobile, setMobile] = useState(false);
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
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
            }}
            style={
              viewAll ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            view All
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setManager(false);
              setGuarantee(false);
            }}
            style={
              oneYear ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            For Programmers
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setManager(false);
              setGuarantee(false);
            }}
            style={
              nonTech ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            For Non-Programmers
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(true);
              setGuarantee(false);
            }}
            style={
              manager ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            For Manager
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setManager(false);
              setGuarantee(true);
            }}
            style={
              Guarantee ? { background: "white" } : { background: "#E5F3FA" }
            }
          >
            Job Guaranteed
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
      </div>
    </div>
  );
};

export default Course;
