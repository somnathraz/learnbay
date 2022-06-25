import styles from "./Demo.module.css";
import Image from "next/image";
import VideoPopup from "../VideoPopup/VideoPopup";
import React, { useState } from "react";
import { PythonD, StatisticsD, MachineD, DeepD, ProjectD } from "./video";

function demo() {
  const [Python, setPython] = useState(true);
  const [Statistics, setStatistics] = useState(false);
  const [Machine, setMachine] = useState(false);
  const [Deep, setDeep] = useState(false);
  const [Project, setProject] = useState(false);
  const [video, setVideo] = useState(false);
  const [value, setValue] = useState("");

  const videoSHow = () => {
    setVideo(true);
  };

  return (
    <section className={styles.Demo}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={value} />
      <div className={styles.BackD}>
        <h4>
          <b>Demo Session And Sample Class Recordings</b>
        </h4>
      </div>
      <div className={styles.DemoInner}>
        <div className={styles.certificate}>
          <div className={styles.listPanel}>
            <span
              onClick={() => {
                setPython(true);
                setStatistics(false);
                setMachine(false);
                setProject(false);
                setDeep(false);
<<<<<<< HEAD
              }}
              style={
                Python ? { background: "#E5F3FA" } : { background: "white" }
              }
=======
                }}
                style={
                Python ? { background: "#E5F3FA" } : { background: "white" }
                }
>>>>>>> af52c830b27b63f2a40e3a0b43ebf6a5dded4c40
            >
              Python
            </span>
            <span
              onClick={() => {
                setPython(false);
                setStatistics(true);
                setMachine(false);
                setProject(false);
                setDeep(false);
<<<<<<< HEAD
              }}
              style={
                Statistics ? { background: "#E5F3FA" } : { background: "white" }
              }
=======
                }}
                style={
                Statistics ? { background: "#E5F3FA" } : { background: "white" }
                }
>>>>>>> af52c830b27b63f2a40e3a0b43ebf6a5dded4c40
            >
              Statistics
            </span>
            <span
              onClick={() => {
                setPython(false);
                setStatistics(false);
                setDeep(false);
                setProject(false);
                setMachine(true);
<<<<<<< HEAD
              }}
              style={
                Machine ? { background: "#E5F3FA" } : { background: "white" }
              }
=======
                }}
                style={
                  Machine ? { background: "#E5F3FA" } : { background: "white" }
                }
>>>>>>> af52c830b27b63f2a40e3a0b43ebf6a5dded4c40
            >
              Machine Learning
            </span>
            <span
              onClick={() => {
                setPython(false);
                setStatistics(false);
                setDeep(true);
                setProject(false);
                setMachine(false);
<<<<<<< HEAD
              }}
              style={Deep ? { background: "#E5F3FA" } : { background: "white" }}
=======
                }}
                style={
                Deep ? { background: "#E5F3FA" } : { background: "white" }
                }
>>>>>>> af52c830b27b63f2a40e3a0b43ebf6a5dded4c40
            >
              Deep Learning
            </span>
            <span
              onClick={() => {
                setPython(false);
                setStatistics(false);
                setDeep(false);
                setMachine(false);
                setProject(true);
<<<<<<< HEAD
              }}
              style={
                Project ? { background: "#E5F3FA" } : { background: "white" }
              }
=======
                }}
                style={
                Project ? { background: "#E5F3FA" } : { background: "white" }
                }
>>>>>>> af52c830b27b63f2a40e3a0b43ebf6a5dded4c40
            >
              Projects
            </span>
          </div>
          {Python ? (
            <div className={styles.gridPanel}>
              {PythonD.map((PythonDData) => {
                const { id, img, value } = PythonDData;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                      <a href={value} target="_blank">
                        <Image
                          src={img}
                          width="432"
                          height="282"
                          layout="intrinsic"
                          cursor="pointer"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {Statistics ? (
            <div className={styles.gridPanel}>
              {StatisticsD.map((StatisticsDData) => {
                const { id, img, value } = StatisticsDData;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                      <a href={value} target="_blank">
                        <Image
                          src={img}
                          width="432"
                          height="282"
                          layout="intrinsic"
                          cursor="pointer"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {Machine ? (
            <div className={styles.gridPanel}>
              {MachineD.map((MachineDData) => {
                const { id, img, value } = MachineDData;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                      <a href={value} target="_blank">
                        <Image
                          src={img}
                          width="432"
                          height="282"
                          layout="intrinsic"
                          cursor="pointer"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {Deep ? (
            <div className={styles.gridPanel}>
              {DeepD.map((DeepDData) => {
                const { id, img, value } = DeepDData;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                      <a href={value} target="_blank">
                        <Image
                          src={img}
                          width="432"
                          height="282"
                          layout="intrinsic"
                          cursor="pointer"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {Project ? (
            <div className={styles.gridPanel}>
              {ProjectD.map((ProjectDData) => {
                const { id, img, value } = ProjectDData;
                return (
                  <div className={styles.leftSide} key={id}>
                    <div className={styles.leftSideP} key={id}>
                      <a href={value} target="_blank">
                        <Image
                          src={img}
                          width="432"
                          height="282"
                          layout="intrinsic"
                          cursor="pointer"
                        />
                      </a>
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
    </section>
  );
}

export default demo;
