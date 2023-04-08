import React, { useState } from "react";
import styles from "./CourseThankYou.module.css";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";


import {
    viewAllD,
    dataScience,
    placementProject,
    fullStackD,
} from "./courseDetailsThankYou";

function CourseThankYou() {

    const [viewAll, setViewAll] = useState(false);
    const [oneYear, setOneYear] = useState(false);
    const [nonTech, setNonTech] = useState(false);
    const [Guarantee, setGuarantee] = useState(false);
    const [Stack, setStack] = useState(true);
    const [mobile, setMobile] = useState(false);



    return (
        <div className={styles.Course} id="course">

            <div className={styles.courses}>
                <div className={styles.listPanel}>
                    {/* <span
                        onClick={() => {
                            setViewAll(false);
                            setOneYear(true);
                            setNonTech(false);
                            setStack(false);
                            setGuarantee(false);
                        }}
                        style={
                            oneYear ? { background: "white", color: "#2D9CD7" } : { background: "#E5F3FA" }
                        }
                    >
                        Data Science Brochure
                    </span> */}
                    <span
                        onClick={() => {
                            setViewAll(false);
                            setOneYear(false);
                            setNonTech(false);
                            setStack(true);
                            setGuarantee(false);
                        }}
                        style={
                            Stack ? { background: "white", color: "#2D9CD7" } : { background: "#E5F3FA" }
                        }
                    >
                        Full Stack Brochure
                    </span>
                    <span
                        onClick={() => {
                            setViewAll(false);
                            setOneYear(false);
                            setNonTech(false);
                            setStack(false);
                            setGuarantee(true);
                        }}
                        style={
                            Guarantee ? { background: "white", color: "#2D9CD7" } : { background: "#E5F3FA" }
                        }
                    >
                        Placement & Project Brochure
                    </span>
                    {/* <span
                        onClick={() => {
                            setViewAll(true);
                            setOneYear(false);
                            setNonTech(false);
                            setGuarantee(false);
                            setStack(false);
                        }}
                        style={
                            viewAll ? { background: "white", color: "#2D9CD7" } : { background: "#E5F3FA" }
                        } 
                    >
                        View All
                    </span> */}
                </div>
                {viewAll ? (
                    <div className={styles.gridPanel}>
                        {viewAllD.map((viewAllData) => {
                            const { id, title, img, link1 } = viewAllData;
                            return (
                                <div className={styles.leftSide} key={id}>
                                    <Image
                                        src={img}
                                        layout="intrinsic"
                                        className={styles.courseImg}
                                        alt="data-science-course"
                                        quality={100}
                                        width="306"
                                        height="150"
                                    />

                                    <p className={styles.Ptopp}>
                                        {title}
                                    </p>

                                    <div className={styles.btnWrapper}>
                                        <button className={styles.Button}>
                                            <AiOutlineDownload className="bIcons" />
                                            <a href={link1} target="_blank" >
                                                Download Brochure
                                            </a>
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
                        {dataScience.map((viewAllData) => {
                            const { id, title, img, link1 } = viewAllData;
                            return (
                                <div className={styles.leftSide} key={id}>
                                    <Image
                                        src={img}
                                        layout="intrinsic"
                                        className={styles.courseImg}
                                        alt="data-science-course"
                                        quality={100}
                                        width="306"
                                        height="150"
                                    />
                                    <p className={styles.Ptopp}>
                                        {title}
                                    </p>
                                    <div className={styles.btnWrapper}>
                                        <button className={styles.Button}>
                                            <AiOutlineDownload className="bIcons" />
                                            <a href={link1} target="_blank" >
                                                Download Brochure
                                            </a>
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
                        {placementProject.map((viewAllData) => {
                            const { id, title, title1, img, para, link1 } = viewAllData;
                            return (
                                <div className={styles.leftSide} key={id}>
                                    <Image
                                        src={img}
                                        layout="intrinsic"
                                        className={styles.courseImg}
                                        alt="data-science-course"
                                        quality={100}
                                        width="306"
                                        height="150"
                                    />
                                    <p className={styles.Ptopp}>
                                        {title}
                                    </p>
                                    <div className={styles.btnWrapper}>
                                        <button className={styles.Button}>
                                            <AiOutlineDownload className="bIcons" />
                                            <a href={link1} target="_blank" >
                                                Download Brochure
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
                {Stack ? (
                    <div className={styles.gridPanel}>
                        {fullStackD.map((viewAllData) => {
                            const { id, title, title1, img, para, link1 } = viewAllData;
                            return (
                                <div className={styles.leftSide} key={id}>
                                    <Image
                                        src={img}
                                        layout="intrinsic"
                                        className={styles.courseImg}
                                        alt="data-science-course"
                                        quality={100}
                                        width="306"
                                        height="150"
                                    />
                                    <p className={styles.Ptopp}>
                                        {title}
                                    </p>
                                    <div className={styles.btnWrapper}>
                                        <button className={styles.Button}>
                                            <AiOutlineDownload className="bIcons" />
                                            <a href={link1} target="_blank" >
                                                Download Brochure
                                            </a>
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

export default CourseThankYou