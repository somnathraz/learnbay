import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import CountUp from 'react-countup';
import styles from "./SyllabusNew.module.css";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const SyllabusNew = ({ HoursSyllabus, HoursSyllabusText, Projects, ProjectsText, Sessions,
     SessionsText, JobSessionsText, JobSessions, Modules, ModulesText,
     syllabush1, syllabusb1, SyllabusBotlist11, SyllabusBotlist12, SyllabusBotlist13, SyllabusBotlist14, SyllabusBotlist15, SyllabusBotlist16,
     syllabush2, syllabusb2, SyllabusBotlist21, SyllabusBotlist22, SyllabusBotlist23, SyllabusBotlist24, SyllabusBotlist25, SyllabusBotlist26,
     syllabush3, syllabusb3, SyllabusBotlist31, SyllabusBotlist32, SyllabusBotlist33, SyllabusBotlist34, SyllabusBotlist35, SyllabusBotlist36,
     syllabush4, syllabusb4, SyllabusBotlist41, SyllabusBotlist42, SyllabusBotlist43, SyllabusBotlist44, SyllabusBotlist45, SyllabusBotlist46,
     syllabush5, syllabusb5, SyllabusBotlist51, SyllabusBotlist52, SyllabusBotlist53, SyllabusBotlist54, SyllabusBotlist55, SyllabusBotlist56,
     syllabush6, syllabusb6, SyllabusBotlist61, SyllabusBotlist62, SyllabusBotlist63, SyllabusBotlist64, SyllabusBotlist65, SyllabusBotlist66,
}) => {
  return (
    <section className={styles.SyllabusNew}>
        <h4 style={{ marginBottom: "30px", textAlign:"center" }}>Course Syllabus</h4>
        <div className={styles.SyllabusTop}>
            <div className={styles.TopInner}>
                <CountUp
                    end={HoursSyllabus}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>{HoursSyllabusText}</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={Projects}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>{ProjectsText}</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={Sessions}
                    delay={2}
                    duration={2}
                    suffix="%"
                    className={
                    [styles.textStyle]
                }
                />
                <p>{SessionsText}</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={JobSessions}
                    delay={4}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>{JobSessionsText}</p>
            </div>
            <div className={styles.TopInner}>
                <CountUp
                    end={Modules}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
                <p>{ModulesText}</p>
            </div>
        </div>
        <div className={styles.SyllabusBot}>
            <div className={styles.SyllabusBot1}>
                <div className={styles.SyllabusBot11}>
                    <div>
                    <p className={styles.syllabush}>{syllabush1}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb1}</p>
                    </div>
                    <div className={styles.number1}>1</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist11}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist12}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist13}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist14}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist15}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist16}</p>
                </div>
            </div>
            <div className={styles.SyllabusBot2}>
                <div className={styles.SyllabusBot22}>
                    <div>
                    <p className={styles.syllabush}>{syllabush2}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb2}</p>
                    </div>
                    <div className={styles.number2}>2</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist21}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist22}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist23}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist24}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist25}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist26}</p>
                </div>
            </div>
            <div className={styles.SyllabusBot3}>
                <div className={styles.SyllabusBot33}>
                    <div>
                    <p className={styles.syllabush}>{syllabush3}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb3}</p>
                    </div>
                    <div className={styles.number3}>3</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist31}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist32}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist33}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist34}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist35}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist36}</p>
                </div>
            </div>
        </div>
        <div className={styles.SyllabusBot}>
            <div className={styles.SyllabusBot4}>
                <div className={styles.SyllabusBot44}>
                    <div>
                    <p className={styles.syllabush}>{syllabush4}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb4}</p>
                    </div>
                    <div className={styles.number4}>4</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist41}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist42}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist43}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist44}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist45}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist46}</p>
                </div>
            </div>
            <div className={styles.SyllabusBot5}>
                <div className={styles.SyllabusBot55}>
                    <div>
                    <p className={styles.syllabush}>{syllabush5}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb5}</p>
                    </div>
                    <div className={styles.number5}>5</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist51}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist52}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist53}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist54}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist55}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist56}</p>
                </div>
            </div>
            <div className={styles.SyllabusBot6}>
                <div className={styles.SyllabusBot66}>
                    <div>
                    <p className={styles.syllabush}>{syllabush6}</p>
                    <p className={styles.syllabusb}><BsClock className={styles.bIcons} />{syllabusb6}</p>
                    </div>
                    <div className={styles.number6}>6</div>
                </div>
                <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist61}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist62}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist63}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist64}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist65}</p>
                    <p className={styles.SyllabusBotlistp}><FiCheck className={styles.bIcons} />{SyllabusBotlist66}</p>
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
