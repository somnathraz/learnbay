import { React, useState } from "react";
import styles from "./CareerHome.module.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function CareerHome() {
  const [selectedValue, setSelectedValue] = useState('default');
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <div>
          <p className={styles.pTop}>Career portal</p>
          <h4 style={{ textAlign: "left" }}>
            redesigning your <br />
            work EXPERIENCE
          </h4>
        </div>
        <div className={styles.right}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/about-us.png"
            width="522"
            height="380"
            layout="intrinsic"
            alt="data science course"
          />
        </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
          <h3>Opportunities at Learnbay</h3>
          <div className={styles.iconBoxP}>
            <div className={styles.iconBoxInner}>
              <div className={styles.iconBoxCont}>
                <div className={styles.innerContent}>
                  <h1>Software Developer</h1>
                  <p>
                    The ideal candidate will be responsible for developing
                    high-quality applications. They will also be responsible for
                    designing and implementing testable and scalable code.{" "}
                  </p>
                  <p>
                    <b>Responsibilities</b>
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Develop quality software and web applications
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Analyze and maintain existing software applications
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Design highly scalable, testable code
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Discover and fix programming bugs
                  </p>
                  <p>
                    <b>Qualifications</b>
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Bachelor's degree or equivalent experience in Computer
                    Science or related field
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Development experience with programming languages
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    SQL database or relational database skills
                  </p>
                </div>
                <Link href={`/career-apply-now?selectedValue=${"Software-Developer"}`}>
                  <div>
                    <button
                      className={styles.btn}
                      style={{ marginTop: "25px" }}
                    >
                      Apply Now
                      <FaArrowRight className="bIcons" />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <div className={styles.iconBoxCont}>
                <div className={styles.innerContent}>
                  <h1>HR Manager</h1>
                  <p>
                    The ideal candidate will support the full scope of Human
                    Resources responsibilities and partner with the organization
                    on strategic initiatives. They will maintain and enhance the
                    organization's human resources by planning, implementing,
                    and evaluating human resources policies, programs, and
                    practices.{" "}
                  </p>
                  <p>
                    <b>Responsibilities</b>
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Recruit and Onboard new hires Conduct performance management
                    and provide
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Feedback Manage Payroll and benefits for employees
                  </p>
                  <p>
                    <b>Qualifications</b>
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Bachelor's degree or relevant experience
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    5+ years' experience in Human Resources
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Strong recruiting and demonstrated ability to improve talent
                    acquisition strategies
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Demonstrated expertise training managers and employees
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Strong organizational, critical thinking and communications
                    skills
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Attention to detail and good judgement
                  </p>
                  <Link href={`/career-apply-now?selectedValue=${"HR-Manager"}`}>
                  <div>
                    <button
                      className={styles.btn}
                      style={{ marginTop: "25px" }}
                    >
                      Apply Now
                      <FaArrowRight className="bIcons" />
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <div className={styles.iconBoxCont}>
                <div className={styles.innerContent}>
                  <h1>Product Manager</h1>
                  <p>
                    The ideal candidate is an analytical team player who will be
                    responsible for leading a team of high performing
                    individuals who own the entire product lifecycle from
                    strategy to evaluation. You will also work
                    cross-functionally to complete product roadmaps and discover
                    new opportunities.{" "}
                  </p>
                  <p>
                    <b>Responsibilities</b>
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Create business models and analyze competitive landscape
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Develop and monitor data-driven analytics
                  </p>
                  <p className={styles.contP}>
                    <FaCheckCircle className={styles.icons} />
                    Mentor employees to help them achieve individual & team
                    objectives
                  </p>
                  <p>
                    <b>Qualifications</b>
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Bachelor's degree or equivalent 3+ years of experience in
                    Product Management
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Engineering, or Consulting
                  </p>
                  <p className={styles.contP}>
                    <FaUserGraduate className={styles.icons} />
                    Strong written, verbal and collaboration skills
                  </p>
                  <Link href={`/career-apply-now?selectedValue=${"Product-Manager"}`}>
                  <div>
                    <button
                      className={styles.btn}
                      style={{ marginTop: "25px" }}
                    >
                      Apply Now
                      <FaArrowRight className="bIcons" />
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <div className={styles.iconBoxCont}>
                <div className={styles.innerContent}>
                  <h1>Digital Marketing Manager</h1>
                  <p>
                    The ideal candidate will expand the company's brand presence
                    by finding the target audience to distribute marketing
                    content to. You will create and implement the marketing
                    strategy using both offline and online methods to gain new
                    customers. The ideal candidate is both a self-motivated
                    individual and a positive team player.{" "}
                  </p>
                  <div>
                    <p>
                      <b>Responsibilities</b>
                    </p>
                    <p className={styles.contP}>
                      <FaCheckCircle className={styles.icons} />
                      Plan and execute digital marketing campaigns
                    </p>
                    <p className={styles.contP}>
                      <FaCheckCircle className={styles.icons} />
                      Monitor and analyze effectiveness of marketing content
                    </p>
                    <p className={styles.contP}>
                      <FaCheckCircle className={styles.icons} />
                      Develop and manage website content
                    </p>
                    <p className={styles.contP}>
                      <FaCheckCircle className={styles.icons} />
                      Find and target audiences
                    </p>
                    <p>
                      <b>Qualifications</b>
                    </p>
                    <p className={styles.contP}>
                      <FaUserGraduate className={styles.icons} />
                      1+ year of marketing experience
                    </p>
                    <p className={styles.contP}>
                      <FaUserGraduate className={styles.icons} />
                      Content creation skills
                    </p>
                    <p className={styles.contP}>
                      <FaUserGraduate className={styles.icons} />
                      Excellent communication and organizational skills
                    </p>
                    <Link href={`/career-apply-now?selectedValue=${"Digital-Marketing-Manager"}`}>
                  <div>
                    <button
                      className={styles.btn}
                      style={{ marginTop: "25px" }}
                    >
                      Apply Now
                      <FaArrowRight className="bIcons" />
                    </button>
                  </div>
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHome;
