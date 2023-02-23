import React from "react";
import styles from "./CitiesRight.module.css";
import { BsClock } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const CitiesRight = ({
  ProgramHead1,
  ProgramHead15,
  ProgramHead16,
  ProgramHead17,
  ProgramHead18,
  ProgramHead19,
  ProgramHead20,
  ProgramHead2,
  ProgramBot14,
  ProgramBot15,
  ProgramBot16,
  ProgramBot17,
  ProgramBot18,
  ProgramHead3,
  ProgramHead4,
  ProgramHead5,
  ProgramHead6,
  ProgramHead8,
  ProgramHead9,
  ProgramHead10,
  ProgramHead11,
  ProgramHead12,
  ProgramHead13,
  ProgramHead14,
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
  ProgramBot51,
  DomainHead1,
  DomainHead2,
  DomainHead3,
  DomainHead4,
  DomainHead5,
  DomainHead6,
  DomainHead7,
  DomainBot1,
  DomainBot2,
  DomainBot3,
  DomainBot4,
  DomainBot5,
  DomainBot6,
  DomainBot7,
  DomainBot8,
  DomainBot9,
  DomainBot10,
  DomainBot11,
  DomainBot12,
  AlumniHead1,
  DomainList1,
  DomainList2,
  DomainList3,
  DomainList4,
  DomainList5,
  DomainList6,
  DomainList7,
  DomainList8,
  DomainList9,
  DomainList10,
  CertificationHead1,
  CertificationHead2,
  CertificationHead3,
  CertificationBot1,
  CertificationBot2,
  CertificationBot3,
  CertificationBot4,
  CertificationBot5,
  CertificationBot6,
  CertificationBot7,
  src,
  ModuleHead1,
  ModuleHead2,
  ModuleHead3,
  ModuleBot1,
  ModuleBot2,
  ModuleBotL21,
  ModuleBotL22,
  ModuleBotL23,
  ModuleBot21,
  ModuleBot3,
  ModuleBot4,
  ModuleBot41,
  ModuleBot42,
  ModuleBot43,
  ModuleBot44,
  ModuleBot45,
  syllabush1,
  syllabusb1,
  SyllabusBotlist11,
  SyllabusBotlist12,
  SyllabusBotlist13,
  SyllabusBotlist14,
  SyllabusBotlist15,
  SyllabusBotlist16,
  syllabush2,
  syllabusb2,
  SyllabusBotlist21,
  SyllabusBotlist22,
  SyllabusBotlist23,
  SyllabusBotlist24,
  SyllabusBotlist25,
  SyllabusBotlist26,
  syllabush3,
  syllabusb3,
  SyllabusBotlist31,
  SyllabusBotlist32,
  SyllabusBotlist33,
  SyllabusBotlist34,
  SyllabusBotlist35,
  SyllabusBotlist36,
  syllabush4,
  syllabusb4,
  SyllabusBotlist41,
  SyllabusBotlist42,
  SyllabusBotlist43,
  SyllabusBotlist44,
  SyllabusBotlist45,
  SyllabusBotlist46,
  syllabussrc,
  JobHead1,
  JobBot1,
  JobBot2,
  JobHead2,
  JobBot7,
  JobHead3,
  JobBot8,
  JobHead5,
  JobBot9,
  JobBot10,
  JobHead6,
  JobBot11,
  JobBot3,
  JobHead4,
  JobBot4,
  JobBot5,
  JobBot6,
  ProgramBotItaliic105,
  ProjectsBot1,
  ProjectsBot2,
  ProjectsBot31,
  ProjectsBot32,
  ProjectsHead1,
  ProjectsHead2,
  ProjectsHead3,
  AlumniBot1,
  src1,
  src2,
  src3,
  src4,
  ProjectsH1,
  ProjectsH2,
  ProjectsH3,
  ProjectsH4,
  Projectsp1,
  Projectsp2,
  Projectsp3,
  Projectsp4,
  Asrc1,
  AlumniH1,
  Alumnip1,
  Asrc2,
  AlumniH2,
  Alumnip2,
  Asrc3,
  AlumniH3,
  Alumnip3,
  Asrc4,
  AlumniH4,
  Alumnip4,
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
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  fullStackCity,
  ProgramBot61,
  ProgramBot62,
  ProgramBot101,
  ProgramBot102,
  ProgramBot103,
  ProgramBot104,
  ProgramBot105,
  ProgramBot106,
  ProgramBot161,
  ProgramBot162,
  ProgramBot163,
  ProgramBot164,
  ProgramBot165,
  ProgramHead21,
  ProgramBot19,
  ProgramBot20,
  ProgramBot21,
  jobOutlookText,
  jobOutlooklink,
  ProgramBotItaliic31,
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
          <p className={styles.pp}><i>{ProgramBotItaliic31}</i></p>
          <p className={styles.pp}>{ProgramBot32}</p>
          <h2 className={styles.pHead}>{ProgramHead4}</h2>
          <p className={styles.pp}>{ProgramBot4}</p>
          <h2 className={styles.pHead}>{ProgramHead5}</h2>
          <p className={styles.pp}>{ProgramBot5}</p>
          <p className={styles.pp}>{ProgramBot51}</p>
          <h2 className={styles.pHead}>{ProgramHead6}</h2>
          <p className={styles.pp}>{ProgramBot6}</p>
          <p className={styles.pp}>{ProgramBot61}</p>
          <p className={styles.pp}>{ProgramBot62}</p>
          <h2 className={styles.pHead}>{ProgramHead7}</h2>
          <p className={styles.pp}>{ProgramBot8}</p>
          <p className={styles.pp}>{ProgramBot9}</p>
          <h2 className={styles.pHead}>{ProgramHead14}</h2>
          <h2 className={styles.pHead}>{ProgramHead15}</h2>
          <p className={styles.pp}>{ProgramBot10}</p>
          <p className={styles.pp}>{ProgramBot101}</p>
          <p className={styles.pp}>{ProgramBot102}</p>
          <p className={styles.pp}>{ProgramBot103}</p>
          <p className={styles.pp}>{ProgramBot104}</p>
          <p className={styles.pp}>{ProgramBot105}</p>
          <p className={styles.pp}><i>{ProgramBotItaliic105}</i></p>
          <p className={styles.pp}>{ProgramBot106}</p>
          <h2 className={styles.pHead}>{ProgramHead16}</h2>
          <p className={styles.pp}>{ProgramBot14}</p>
          <h2 className={styles.pHead}>{ProgramHead17}</h2>
          <p className={styles.pp}>{ProgramBot15}</p>
          <h2 className={styles.pHead}>{ProgramHead18}</h2>
          <p className={styles.pp}>{ProgramBot16}</p>
          <p className={styles.pp}>{ProgramBot161}</p>
          <p className={styles.pp}>{ProgramBot162}</p>
          <p className={styles.pp}>{ProgramBot163}</p>
          <p className={styles.pp}>{ProgramBot164}</p>
          <p className={styles.pp}>{ProgramBot165}</p>
          <h2 className={styles.pHead}>{ProgramHead19}</h2>
          <p className={styles.pp}>{ProgramBot17}</p>
          <h2 className={styles.pHead}>{ProgramHead20}</h2>
          <p className={styles.pp}>{ProgramBot18}</p>
          <h2 className={styles.pHead}>{ProgramHead8}</h2>
          <h2 className={styles.pHead}>{ProgramHead9}</h2>
          <p className={styles.pp}>{ProgramBot11}</p>
          <h2 className={styles.pHead}>{ProgramHead10}</h2>
          <p className={styles.pp}>{ProgramBot12}</p>
          <h2 className={styles.pHead}>{ProgramHead11}</h2>
          <p className={styles.pp}>{ProgramBot13}</p>
          <h2 className={styles.pHead}>{ProgramHead12}</h2>
          <h2 className={styles.pHead}>{ProgramHead13}</h2>
          <a href={Courselink1} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course1}
            </h2>
          </a>
          <a href={Courselink2} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course2}
            </h2>
          </a>
          <a href={Courselink3} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course3}
            </h2>
          </a>
          <a href={Courselink4} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course4}
            </h2>
          </a>
          <a href={Courselink5} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course5}
            </h2>
          </a>
          <a href={Courselink6} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course6}
            </h2>
          </a>
          <a href={Courselink7} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course7}
            </h2>
          </a>
          <a href={Courselink8} target="_blank">
            <h2
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {Course8}
            </h2>
          </a>
          <h2 className={styles.pHead}>{ProgramHead21}</h2>
          <p className={styles.pp}>{ProgramBot19}</p>
          <span className={styles.pp}>{ProgramBot20}</span>
          <a href={jobOutlooklink} target="_blank" rel="nofollow">
            <span
              className={styles.pp}
              style={{ color: "#2D9CD7", fontWeight: "600" }}
            >
              {jobOutlookText}
            </span>
          </a>
          <span className={styles.pp}>{ProgramBot21}</span>
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
          <h2 className={styles.pHead}>{DomainHead2}</h2>
          <p className={styles.pp}>{DomainBot4}</p>
          <p className={styles.pp}>{DomainBot5}</p>
          <h2 className={styles.pHead}>{DomainHead3}</h2>
          <p className={styles.pp}>{DomainBot6}</p>
          <p className={styles.pp}>{DomainBot7}</p>
          <p className={styles.pp}>{DomainBot8}</p>
          <p className={styles.pp}>{DomainBot9}</p>
          <p className={styles.pp}>{DomainBot10}</p>
          <p className={styles.pp}>{DomainBot11}</p>
          <p className={styles.pp}>{DomainBot12}</p>
          <p className={styles.pp}>{DomainBot3}</p>
          {fullStackCity ? (
            <>
              <h2 className={styles.pHead}>{DomainHead2}</h2>
              <h2 className={styles.pHead}>{DomainHead3}</h2>
              <h2 className={styles.pHead}>{DomainHead4}</h2>
              <h2 className={styles.pHead}>{DomainHead5}</h2>
              <h2 className={styles.pHead}>{DomainHead6}</h2>
              <h2 className={styles.pHead}>{DomainHead7}</h2>
            </>
          ) : (
            <>
              {" "}
              <ul>
                <a href={Domainlink1} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList1}
                  </li>
                </a>
                <a href={Domainlink2} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList2}
                  </li>
                </a>
                <a href={Domainlink3} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList3}
                  </li>
                </a>
                <a href={Domainlink4} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList4}
                  </li>
                </a>
                <a href={Domainlink5} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList5}
                  </li>
                </a>
                <a href={Domainlink6} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList6}
                  </li>
                </a>
                <a href={Domainlink7} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList7}
                  </li>
                </a>
                <a href={Domainlink8} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList8}
                  </li>
                </a>
                <a href={Domainlink9} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList9}
                  </li>
                </a>
                <a href={Domainlink10} target="_blank">
                  <li style={{ color: "#2D9CD7", fontWeight: "600" }}>
                    {DomainList10}
                  </li>
                </a>
              </ul>
            </>
          )}
        </div>
      </div>
      {fullStackCity ? (
        <></>
      ) : (
        <>
          {" "}
          <div id="Certification">
            <div className={styles.CitiesRightSpan}>
              <span>Certification Details</span>
            </div>
            <div className={styles.CitiesRightInner}>
              <h2 className={styles.pHead}>{CertificationHead1}</h2>
              <p className={styles.pp}>{CertificationBot1}</p>
              <p className={styles.pp}>{CertificationBot2}</p>
              <p className={styles.pp}>{CertificationBot3}</p>
              <h2 className={styles.pHead}>{CertificationHead2}</h2>
              <p className={styles.pp}>{CertificationBot4}</p>
              <p className={styles.pp}>{CertificationBot5}</p>
              <p className={styles.pp}>{CertificationBot6}</p>
              <h2 className={styles.pHead}>{CertificationHead3}</h2>
              <p className={styles.pp}>{CertificationBot7}</p>
              <img src={src} alt={alt1}></img>
            </div>
          </div>
        </>
      )}
      <div id="Module">
        <div className={styles.CitiesRightSpan}>
          <span>Module-Details</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <h2 className={styles.pHead}>{ModuleHead1}</h2>
          <p className={styles.pp}>{ModuleBot1}</p>
          <p className={styles.pp}>{ModuleBot2}</p>
          <p className={styles.pp}><b>{ModuleBotL21}</b></p>
          <p className={styles.pp}><b>{ModuleBotL22}</b></p>
          <p className={styles.pp}><b>{ModuleBotL23}</b></p>
          <p className={styles.pp}>{ModuleBot21}</p>
          <h2 className={styles.pHead}>{ModuleHead2}</h2>
          <p className={styles.pp}>{ModuleBot3}</p>
          <h2 className={styles.pHead}>{ModuleHead3}</h2>
          <p className={styles.pp}>{ModuleBot4}</p>
          <p className={styles.pp}>{ModuleBot41}</p>
          <p className={styles.pp}>{ModuleBot42}</p>
          <p className={styles.pp}>{ModuleBot43}</p>
          <p className={styles.pp}>{ModuleBot44}</p>
          <p className={styles.pp}>{ModuleBot45}</p>
          {fullStackCity ? (
            <></>
          ) : (
            <>
              {" "}
              <p className={styles.pp}>Module Details:</p>
              <div className={styles.SyllabusBot}>
                <div className={styles.SyllabusBot1}>
                  <div className={styles.SyllabusBot11}>
                    <div>
                      <p className={styles.syllabush}>{syllabush1}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb1}
                      </p>
                    </div>
                    <div className={styles.number1}>1</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist11}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist12}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist13}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist14}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist15}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist16}
                    </p>
                  </div>
                </div>
                <div className={styles.SyllabusBot2}>
                  <div className={styles.SyllabusBot22}>
                    <div>
                      <p className={styles.syllabush}>{syllabush2}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb2}
                      </p>
                    </div>
                    <div className={styles.number2}>2</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist21}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist22}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist23}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist24}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist25}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist26}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.SyllabusBot}>
                <div className={styles.SyllabusBot3}>
                  <div className={styles.SyllabusBot33}>
                    <div>
                      <p className={styles.syllabush}>{syllabush3}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb3}
                      </p>
                    </div>
                    <div className={styles.number3}>3</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist31}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist32}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist33}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist34}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist35}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist36}
                    </p>
                  </div>
                </div>
                <div className={styles.SyllabusBot4}>
                  <div className={styles.SyllabusBot44}>
                    <div>
                      <p className={styles.syllabush}>{syllabush4}</p>
                      <p className={styles.syllabusb}>
                        <BsClock className={styles.bIcons} />
                        {syllabusb4}
                      </p>
                    </div>
                    <div className={styles.number4}>4</div>
                  </div>
                  <div className={styles.SyllabusBotlist}>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist41}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist42}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist43}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist44}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist45}
                    </p>
                    <p className={styles.SyllabusBotlistp}>
                      <FiCheck className={styles.bIcons} />
                      {SyllabusBotlist46}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.Button}>
          <a href={syllabussrc} target="_blank">
            <button style={{ margin: "auto" }}>View Detailed Brochure</button>
          </a>
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
          <h2 className={styles.pHead}>{ProjectsHead3}</h2>
          <p className={styles.pp}>{ProjectsBot31}</p>
          <p className={styles.pp}>{ProjectsBot32}</p>
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
                <img src={src2} alt={alt3}></img>
                <p className={styles.ppp}>{ProjectsH2}</p>
              </div>
              <p className={styles.pp}>{Projectsp2}</p>
            </div>
          </div>
        </div>
        <div className={styles.Projects} style={{ marginBottom: "20px" }}>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src3} alt={alt4}></img>
                <p className={styles.ppp}>{ProjectsH3}</p>
              </div>
              <p className={styles.pp}>{Projectsp3}</p>
            </div>
          </div>
          <div className={styles.ProjectsBot}>
            <div className={styles.ProjectsBotHead}>
              <div className={styles.ProjectsBotI}>
                <img src={src4} alt={alt5}></img>
                <p className={styles.ppp}>{ProjectsH4}</p>
              </div>
              <p className={styles.pp}>{Projectsp4}</p>
            </div>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Projects</button>
              </a>
            </>
          ) : (
            <>
              {" "}
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Projects</button>
              </a>
            </>
          )}
        </div>
      </div>
      <div id="Alumni">
        <div className={styles.CitiesRightSpan}>
          <span>Hear From Our Alumni</span>
        </div>
        <div className={styles.CitiesRightInner}>
          <p className={styles.pp}>{AlumniBot1}</p>
          <p className={styles.pHead}>{AlumniHead1}</p>
        </div>
        <div className={styles.Alumni}>
          <div className={styles.AlumniBot}>
            <img src={Asrc1} style={{ width: "100px" }} alt={alt6}></img>
            <p className={styles.ppa}>{AlumniH1}</p>
            <p className={styles.pp}>{Alumnip1}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc2} style={{ width: "100px" }} alt={alt7}></img>
            <p className={styles.ppa}>{AlumniH2}</p>
            <p className={styles.pp}>{Alumnip2}</p>
          </div>
        </div>
        <div className={styles.Alumni1}>
          <div className={styles.AlumniBot}>
            <img src={Asrc3} style={{ width: "100px" }} alt={alt8}></img>
            <p className={styles.ppa}>{AlumniH3}</p>
            <p className={styles.pp}>{Alumnip3}</p>
          </div>
          <div className={styles.AlumniBot}>
            <img src={Asrc4} style={{ width: "100px" }} alt={alt9}></img>
            <p className={styles.ppa}>{AlumniH4}</p>
            <p className={styles.pp}>{Alumnip4}</p>
          </div>
        </div>
        <div className={styles.Button}>
          {fullStackCity ? (
            <>
              <a
                href="https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=uUDyYunBIoObz7sPzvu7wAQ&oq=learnbay&gs_l=psy-ab.3...0.0.0.6647.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vlnVRtRM_mw#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145896,77.66070289999999],[12.8624165,77.6400574]]"
                target="_blank"
              >
                <button style={{ margin: "auto" }}>View All Reviews</button>
              </a>
            </>
          ) : (
            <>
              {" "}
              <a href="/reviews" target="_blank">
                <button style={{ margin: "auto" }}>View All Reviews</button>
              </a>
            </>
          )}
        </div>
      </div>
      <div id="FAQ">
        <div className={styles.CitiesRightSpan}>
          <span>Frequently Asked Questions</span>
        </div>
      </div>
    </section>
  );
};

export default CitiesRight;
