import React, { useState } from "react";
import styles from "./ThankYouNew.module.css";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Link from "next/link";

import {
  viewAllD,
  dataScience,
  placementProject,
  fullStackD,
  nonTechD,
} from "./courseDetailsThankYouNew";

function CourseThankYou() {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [oneYearD, setOneYearD] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <div className={styles.Course} id="course">
      <div className={styles.coursesM}>
        <div className={styles.listPanel}>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYearD
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#2D9CD7",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Data Science Brochure</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {oneYearD ? (
              <div className={styles.gridPanel}>
                {dataScience.map((viewAllData) => {
                  const { id, title, link1 } = viewAllData;
                  return (
                    <>
                      <Link href={link1}>
                        <div className={styles.leftSide} key={id}>
                          <p className={styles.Ptopp}>{title}</p>
                          <div className={styles.btnWrapper}>
                            <button className={styles.Button}>
                              <FaDownload className="Icons" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#2D9CD7",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Full Stack Brochure</p>
            <p>
              <FaChevronDown className="Icons" style={{ fontWeight: "600" }} />
            </p>
          </div>
          {Stack ? (
              <div className={styles.gridPanel}>
                {fullStackD.map((viewAllData) => {
                  const { id, title, link1 } = viewAllData;
                  return (
                    <>
                      <Link href={link1}>
                        <div className={styles.leftSide} key={id}>
                          <p className={styles.Ptopp}>{title}</p>
                          <div className={styles.btnWrapper}>
                            <button className={styles.Button}>
                              <FaDownload className="Icons" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#2D9CD7",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Placement & Project Brochure</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {Guarantee ? (
            <div className={styles.gridPanel}>
              {placementProject.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#2D9CD7",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>Domain Brochure</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {nonTech ? (
              <div className={styles.gridPanel}>
                {nonTechD.map((viewAllData) => {
                  const { id, title, link1 } = viewAllData;
                  return (
                    <>
                      <Link href={link1}>
                        <div className={styles.leftSide} key={id}>
                          <p className={styles.Ptopp}>{title}</p>
                          <div className={styles.btnWrapper}>
                            <button className={styles.Button}>
                              <FaDownload className="Icons" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={styles.spanDiv}
            onClick={() => {
              setViewAll(true);
              setOneYearD(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? {
                    background: "#009CE7",
                    color: "#fff",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 20px",
                    fontWeight: "600",
                  }
                : {
                    background: "#f4fcfe",
                    color: "#2D9CD7",
                    borderBottom: "1px solid #2D9CD7",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "600",
                    padding: "15px 20px",
                  }
            }
          >
            <p>View All</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {viewAll ? (
              <div className={styles.gridPanel}>
                {viewAllD.map((viewAllData) => {
                  const { id, title, link1 } = viewAllData;
                  return (
                    <>
                      <Link href={link1}>
                        <div className={styles.leftSide} key={id}>
                          <p className={styles.Ptopp}>{title}</p>
                          <div className={styles.btnWrapper}>
                            <button className={styles.Button}>
                              <FaDownload className="Icons" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.coursesD}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? { background: "white", color: "#2D9CD7" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Data Science Brochure
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? { background: "white", color: "#2D9CD7" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Full Stack Brochure
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? { background: "white", color: "#2D9CD7" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Placement & Project Brochure
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#2D9CD7" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            Domain Brochure
          </span>
          <div className={styles.line}></div>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? { background: "white", color: "#2D9CD7" }
                : { background: "#009CE7", color: "#fff" }
            }
          >
            View All
          </span>
        </div>
        {viewAll ? (
            <div className={styles.gridPanel}>
              {viewAllD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
        ) : (
          ""
        )}
        {oneYear ? (
            <div className={styles.gridPanel}>
              {dataScience.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
        ) : (
          ""
        )}

        {Guarantee ? (
            <div className={styles.gridPanel}>
              {placementProject.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
        ) : (
          ""
        )}
        {Stack ? (
            <div className={styles.gridPanel}>
              {fullStackD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
        ) : (
          ""
        )}
        {nonTech ? (
            <div className={styles.gridPanel}>
              {nonTechD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CourseThankYou;
