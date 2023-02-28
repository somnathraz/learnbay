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
      <div className={styles.Back}>
        <h4>
        Demo Session And Sample Class Recordings
        </h4>
        <div className={styles.right}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/demo-header.png"
            width="522"
            height="380"
            layout="intrinsic"
             alt="data science course"
          />
        </div>
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
              }}
              style={
                Python ? { background: "#E5F3FA" } : { background: "white" }
              }
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
              }}
              style={
                Statistics ? { background: "#E5F3FA" } : { background: "white" }
              }
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
              }}
              style={
                Machine ? { background: "#E5F3FA" } : { background: "white" }
              }
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
              }}
              style={Deep ? { background: "#E5F3FA" } : { background: "white" }}
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
              }}
              style={
                Project ? { background: "#E5F3FA" } : { background: "white" }
              }
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
                           alt="data science course"
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
                           alt="data science course"
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
                           alt="data science course"
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
                           alt="data science course"
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
                           alt="data science course"
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
