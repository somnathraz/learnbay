import React from 'react'
import styles from './CitiesRight.module.css'
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";


const CitiesRight = ({
    ProgramHead1,
    ProgramHead2,
    ProgramHead3,
    ProgramHead4,
    ProgramHead5,
    ProgramHead6,
    ProgramHead8,
    ProgramHead9,
    ProgramHead10,
    ProgramHead11,
    ProgramBot6,
    ProgramHead7,
    ProgramBot8,
    ProgramBot9,
    ProgramBot10,
    ProgramBot11,
    ProgramBot12,
    ProgramBot13,
    ProgramBot1,
    ProgramBot2,
    ProgramBot3,
    ProgramBot31,
    ProgramBot32,
    ProgramBot4,
    ProgramBot5,
    DomainHead1,
    DomainBot1,
    DomainBot2,
    DomainBot3,
    DomainList1, DomainList2, DomainList3, DomainList4, DomainList5, DomainList6, DomainList7, DomainList8, DomainList9, DomainList10, 
    CertificationHead1,
    CertificationBot1,
    CertificationBot2,
    src,
    ModuleHead1,
    ModuleHead2,
    ModuleHead3,
    ModuleBot1,
    ModuleBot2,
    ModuleBot3,
    ModuleBot4,
    ModuleBot41,
     syllabush1, syllabusb1, SyllabusBotlist11, SyllabusBotlist12, SyllabusBotlist13, SyllabusBotlist14, SyllabusBotlist15, SyllabusBotlist16,
     syllabush2, syllabusb2, SyllabusBotlist21, SyllabusBotlist22, SyllabusBotlist23, SyllabusBotlist24, SyllabusBotlist25, SyllabusBotlist26,
     syllabush3, syllabusb3, SyllabusBotlist31, SyllabusBotlist32, SyllabusBotlist33, SyllabusBotlist34, SyllabusBotlist35, SyllabusBotlist36,
     syllabush4, syllabusb4, SyllabusBotlist41, SyllabusBotlist42, SyllabusBotlist43, SyllabusBotlist44, SyllabusBotlist45, SyllabusBotlist46,
     syllabussrc,
     JobHead1, JobBot1, JobBot2, JobHead2, JobBot7, JobHead3, JobBot8, JobHead5, JobBot9, JobBot10, JobHead6, JobBot11, JobBot3, JobHead4, JobBot4, JobBot5, JobBot6, JobList1, JobList2, JobList3, JobList4, JobList5, JobList6, JobList7,
     ProjectsBot1, ProjectsBot2, ProjectsHead1, ProjectsHead2,  AlumniBot1,
     src1, src2, src3, src4, ProjectsH1, ProjectsH2, ProjectsH3, ProjectsH4, Projectsp1, Projectsp2, Projectsp3, Projectsp4,
     Asrc1, AlumniH1, Alumnip1, Asrc2, AlumniH2, Alumnip2, Asrc3, AlumniH3, Alumnip3, Asrc4, AlumniH4, Alumnip4, 
     Courselink1,
            Courselink2,
            Courselink3,
            Courselink4,
            Courselink5,
            Courselink6,
            Courselink7,
            Courselink8,
            Course1,
            Course2, 
            Course3,
            Course4,
            Course5,
            Course6,
            Course7,
            Course8,
            Domainlink1,
            Domainlink2,
            Domainlink3,
            Domainlink4,
            Domainlink5,
            Domainlink6,
            Domainlink7,
            Domainlink8,
            Domainlink9,
            Domainlink10,
            alt1, alt2, alt3, alt4, alt5, alt6, alt7, alt8, alt9,
  }) => {
  return (
    <section className={styles.CitiesRightHead}>
        <div id="Program">
            <div className={styles.CitiesRightSpan}>
                <span>About The Program</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{ProgramHead1}</h2>
                <h2 className={styles.pHead}>{ProgramHead2}</h2>
                <p className={styles.pp}>{ProgramBot1}</p>
                <p className={styles.pp}>{ProgramBot2}</p>
                <h2 className={styles.pHead}>{ProgramHead3}</h2>
                <p className={styles.pp}>{ProgramBot3}</p>
                <p className={styles.pp}>{ProgramBot31}</p>
                <p className={styles.pp}>{ProgramBot32}</p>
                <h2 className={styles.pHead}>{ProgramHead4}</h2>
                <p className={styles.pp}>{ProgramBot4}</p>
                <h2 className={styles.pHead}>{ProgramHead5}</h2>
                <p className={styles.pp}>{ProgramBot5}</p>
                <h2 className={styles.pHead}>{ProgramHead6}</h2>
                <p className={styles.pp}>{ProgramBot6}</p>
                <h2 className={styles.pHead}>{ProgramHead7}</h2>
                <p className={styles.pp}>{ProgramBot8}</p>
                <p className={styles.pp}>{ProgramBot9}</p>
                <h2 className={styles.pHead}>{ProgramHead8}</h2>
                <p className={styles.pp}>{ProgramBot10}</p>
                <h2 className={styles.pHead}>{ProgramHead9}</h2>
                <p className={styles.pp}>{ProgramBot11}</p>
                <h2 className={styles.pHead}>{ProgramHead10}</h2>
                <p className={styles.pp}>{ProgramBot12}</p>
                <h2 className={styles.pHead}>{ProgramHead11}</h2>
                <p className={styles.pp}>{ProgramBot13}</p>
                <a href={Courselink1}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course1}</h2></a>
                <a href={Courselink2}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course2}</h2></a>
                <a href={Courselink3}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course3}</h2></a>
                <a href={Courselink4}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course4}</h2></a>
                <a href={Courselink5}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course5}</h2></a>
                <a href={Courselink6}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course6}</h2></a>
                <a href={Courselink7}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course7}</h2></a>
                <a href={Courselink8}><h2 className={styles.pp} style={{color:"#2D9CD7", fontWeight:"600"}}>{Course8}</h2></a>
                
            </div>
        </div>
        <div id="Domain">
            <div className={styles.CitiesRightSpan}>
                <span>Domain Specialization</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{DomainHead1}</h2>
                <p className={styles.pp}>{DomainBot1}</p>
                <p className={styles.pp}>{DomainBot2}</p>
                <p className={styles.pp}>{DomainBot3}</p>
                <ul>
                <a href={Domainlink1}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList1}</li></a>
                <a href={Domainlink2}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList2}</li></a>
                <a href={Domainlink3}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList3}</li></a>
                <a href={Domainlink4}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList4}</li></a>
                <a href={Domainlink5}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList5}</li></a>
                <a href={Domainlink6}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList6}</li></a>
                <a href={Domainlink7}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList7}</li></a>
                <a href={Domainlink8}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList8}</li></a>
                <a href={Domainlink9}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList9}</li></a>
                <a href={Domainlink10}><li style={{color:"#2D9CD7", fontWeight:"600"}}>{DomainList10}</li></a>
                </ul>
            </div>
        </div>
        <div id="Certification">
            <div className={styles.CitiesRightSpan}>
                <span>Certification Details</span>
            </div>
            <div className={styles.CitiesRightInner} >
                <h2 className={styles.pHead}>{CertificationHead1}</h2>
                <p className={styles.pp}>{CertificationBot1}</p>
                <p className={styles.pp}>{CertificationBot2}</p>
                <img src={src} alt={alt1}></img>
            </div>
        </div>
        <div id="Module">
            <div className={styles.CitiesRightSpan}>
                <span>Module-Details</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{ModuleHead1}</h2>
                <p className={styles.pp}>{ModuleBot1}</p>
                <p className={styles.pp}>{ModuleBot2}</p>
                <h2 className={styles.pHead}>{ModuleHead2}</h2>
                <p className={styles.pp}>{ModuleBot3}</p>
                <h2 className={styles.pHead}>{ModuleHead3}</h2>
                <p className={styles.pp}>{ModuleBot4}</p>
                <p className={styles.pp}>{ModuleBot41}</p>
                <p className={styles.pp}>Module Details:</p>
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
                </div>
                <div className={styles.SyllabusBot}>
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
                </div>
            </div>
            <div className={styles.Button}>
            <a href={syllabussrc}><button style={{margin:"auto"}}>View Detailed Brochure</button></a>
            </div>
        </div>
        <div id="Job">
            <div className={styles.CitiesRightSpan}>
                <span>Job Assist Program</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{JobHead1}</h2>
                <p className={styles.pp}>{JobBot1}</p>
                <p className={styles.pp}>{JobBot2}</p>
                <p className={styles.pp}>{JobBot5}</p>
                <h2 className={styles.pHead}>{JobHead2}</h2>
                <p className={styles.pp}>{JobBot3}</p>
                <p className={styles.pp}>{JobBot4}</p>
                <p className={styles.pp}>{JobBot6}</p>
                <h2 className={styles.pHead}>{JobHead3}</h2>
                <p className={styles.pp}>{JobBot7}</p>
                <h2 className={styles.pHead}>{JobHead4}</h2>
                <p className={styles.pp}>{JobBot8}</p>
                <h2 className={styles.pHead}>{JobHead5}</h2>
                <p className={styles.pp}>{JobBot9}</p>
                <p className={styles.pp}>{JobBot10}</p>
                <h2 className={styles.pHead}>{JobHead6}</h2>
                <p className={styles.pp}>{JobBot11}</p>
            </div>
        </div>
        <div id="Projects">
            <div className={styles.CitiesRightSpan}>
                <span>Know Our Projects</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <h2 className={styles.pHead}>{ProjectsHead1}</h2>
                <p className={styles.pp}>{ProjectsBot1}</p>
                <h2 className={styles.pHead}>{ProjectsHead2}</h2>
                <p className={styles.pp}>{ProjectsBot2}</p>
            </div>
            <div className={styles.Projects}>
                <div className={styles.ProjectsBot}>
                    <div className={styles.ProjectsBotHead}>
                        <div className={styles.ProjectsBotI}>
                            <img src={src1} alt={alt2}></img>
                            <p className={styles.ppp}>{ProjectsH1}</p>
                        </div>
                        <p className={styles.pp}>{Projectsp1}</p>
                    </div>
                </div>
                <div className={styles.ProjectsBot}>
                    <div className={styles.ProjectsBotHead}>
                        <div className={styles.ProjectsBotI}>
                            <img src={src2}  alt={alt3}></img>
                            <p className={styles.ppp}>{ProjectsH2}</p>
                        </div>
                        <p className={styles.pp}>{Projectsp2}</p>
                    </div>
                </div>
            </div>
            <div className={styles.Projects} style={{marginBottom:"20px"}}>
                <div className={styles.ProjectsBot}>
                    <div className={styles.ProjectsBotHead}>
                        <div className={styles.ProjectsBotI}>
                            <img src={src3}  alt={alt4}></img>
                            <p className={styles.ppp}>{ProjectsH3}</p>
                        </div>
                        <p className={styles.pp}>{Projectsp3}</p>
                    </div>
                </div>
                <div className={styles.ProjectsBot}>
                    <div className={styles.ProjectsBotHead}>
                        <div className={styles.ProjectsBotI}>
                            <img src={src4}  alt={alt5}></img>
                            <p className={styles.ppp}>{ProjectsH4}</p>
                        </div>
                        <p className={styles.pp}>{Projectsp4}</p>
                    </div>
                </div>
            </div>
            <div className={styles.Button}>
            <a href='https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf' target="_blank"><button style={{margin:"auto"}}>View All Projects</button></a>
            </div>
        </div>
        <div id="Alumni">
            <div className={styles.CitiesRightSpan}>
                <span>Hear From Our Alumni</span>
            </div>
            <div className={styles.CitiesRightInner}>
                <p className={styles.pp}>{AlumniBot1}</p>
            </div>
            <div className={styles.Alumni}>
                <div className={styles.AlumniBot}>
                    <img src={Asrc1} style={{width:"100px"}} alt={alt6}></img>
                    <p className={styles.ppa}>{AlumniH1}</p>
                    <p className={styles.pp}>{Alumnip1}</p>
                </div>
                <div className={styles.AlumniBot}>
                    <img src={Asrc2} style={{width:"100px"}} alt={alt7}></img>
                    <p className={styles.ppa}>{AlumniH2}</p>
                    <p className={styles.pp}>{Alumnip2}</p>
                </div>
            </div>
            <div className={styles.Alumni1}>
                <div className={styles.AlumniBot}>
                    <img src={Asrc3} style={{width:"100px"}} alt={alt8}></img>
                    <p className={styles.ppa}>{AlumniH3}</p>
                    <p className={styles.pp}>{Alumnip3}</p>
                </div>
                <div className={styles.AlumniBot}>
                    <img src={Asrc4} style={{width:"100px"}} alt={alt9}></img>
                    <p className={styles.ppa}>{AlumniH4}</p>
                    <p className={styles.pp}>{Alumnip4}</p>
                </div>
            </div>
            <div className={styles.Button}>
            <a href="/reviews" target="_blank"><button style={{margin:"auto"}}>View All Reviews</button></a>
            </div>
        </div>
        <div id="FAQ">
            <div className={styles.CitiesRightSpan}>
                <span>Frequently Asked Questions</span>
            </div>
        </div>
    </section>
  )
}

export default CitiesRight
