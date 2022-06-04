import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import CountUp from 'react-countup';
import styles from "./SyllabusNew.module.css";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";



function SyllabusNew() {
  return (
    <section className={styles.SyllabusNew}>
        <h4 style={{ marginBottom: "30px", textAlign:"center" }}>Course Syllabus</h4>
        <div className={styles.SyllabusTop}>
            <div className={styles.TopInner}>
                <CountUp
                    end={300}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Hours Syllabus</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={15}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>AI & ML Projects</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={10}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Live Learning Sessions</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={97}
                    delay={2}
                    duration={2}
                    suffix="%"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Job Oriented Sessions</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={18}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>Tools & Modules</p>
            </div>
        </div>
        <div className={styles.SyllabusBot}>
            <div className={styles.SyllabusBot1}>
                <div className={styles.SyllabusBot11}>
                    <div>
                    <p className={styles.syllabush}>Pre-Preparatory Classes <br /> (Programming + Maths)</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />6 Hours</p>
                    </div>
                    <div className={styles.number1}>1</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Anaconda Installation</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Basics of programming</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Memory Management</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Compiler and Interpreter</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Syntax of Python</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Basics of Statistics</p>
                </div>
            </div>
            <div className={styles.SyllabusBot2}>
                <div className={styles.SyllabusBot22}>
                    <div>
                    <p className={styles.syllabush}>Python Programming <br /> (Basic + Advance)</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />40 Hours</p>
                    </div>
                    <div className={styles.number2}>2</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Git and GitHub</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Operators + Data Types + Loops</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Functions + Regular Expression</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Conditional Statement</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />File & Exceptional Handling</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Numpy, Pandas, Matplotlib, etc</p>
                </div>
            </div>
            <div className={styles.SyllabusBot3}>
                <div className={styles.SyllabusBot33}>
                    <div>
                    <p className={styles.syllabush}>Statistics and <br /> Machine Learning</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />70 Hours</p>
                    </div>
                    <div className={styles.number3}>3</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Linear Algebra, Probability</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Permutation & Combination</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Descriptive & Inferential Stats</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Hypothesis Testing</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Time Series Analysis</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />ML Algorithms</p>
                </div>
            </div>
        </div>
        <div className={styles.SyllabusBot}>
            <div className={styles.SyllabusBot4}>
                <div className={styles.SyllabusBot44}>
                    <div>
                    <p className={styles.syllabush}>Industrial Projects & <br />Capstone Projects</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />15+ Classes</p>
                    </div>
                    <div className={styles.number4}>4</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Text Classification</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Human Activity Recognition</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Forecasting Business KPI's</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Credit Risk Analysis</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Customer Churn Prediction</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Sentiment Analysis</p>
                </div>
            </div>
            <div className={styles.SyllabusBot5}>
                <div className={styles.SyllabusBot55}>
                    <div>
                    <p className={styles.syllabush}>AI &<br />ML Tools</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />204 Hours</p>
                    </div>
                    <div className={styles.number5}>5</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />SQL + MongoDB</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Tableau + PowerBI</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />DL + NLP + CV + RL</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Big Data Analytics</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Deployment (AWS + GCP)</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Data Structure & Algorithm</p>
                </div>
            </div>
            <div className={styles.SyllabusBot6}>
                <div className={styles.SyllabusBot66}>
                    <div>
                    <p className={styles.syllabush}>Job Orientation<br />(Interview Prep)</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />10+ Classes</p>
                    </div>
                    <div className={styles.number6}>6</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Resume Built-Up Session</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />1 -1 Mock Interviews</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Job Referrals</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />LinkedIn Profile Building</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Alumni Portal Access</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />Target Top MNCs & Startups</p>
                </div>
            </div>
        </div>
        <div>
            <a href='https://drive.google.com/file/d/1fPHs326U2hB7Gba4cT4a3jwN14Vj-pnl/view' target={"_blank"}><button style={{margin:"auto", marginTop:"20px"}}>
                <AiOutlineDownload />
                Download Brochure
            </button></a>
        </div>
    </section>
  )
}

export default SyllabusNew
