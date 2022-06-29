import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';
import styles from "./AboutUs.module.css";
import { FaUserFriends,FaCompress,FaAddressCard,FaClone,FaHandsHelping,FaUserGraduate,FaAngleDoubleUp } from "react-icons/fa";
import { BsGraphUp} from "react-icons/bs";
import {
    TeamD,
  } from "./TeamDetails";


function AboutUs() {
  return (
    <section className={styles.about}>
        <div className={styles.Back}><h4 style={{textAlign:"left"}}>"They say ‘knowledge is power,’ and<br /> we want to empower all our aspirants to success."</h4></div>
<div className={styles.MVDiv}>
<div className={styles.FirstDiv}>
        <div className={styles.FirstImg}></div>
        <div className={styles.FirstText}>
          <h3>Mission</h3>
          <p className={styles.list}>
          Safeguarding your career, even under the most unstable job market scenario, via the acquisition of emerging technology-based unique skills.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <FaUserFriends className={styles.BoxIconuser} />
              <p> Literate everyone with data science knowledge.</p>
            </div>
            <div className={styles.iconBox}>
              <FaCompress className={styles.BoxIconcompress} />
              <p>Bust the myth that only IT pros can have lucrative careers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.MiddleDiv}>
        <div className={styles.FirstText}>
          <h3>Vision</h3>
          <p className={styles.list}>
          To lead the industrial training sector by generating demanding professionals with future proof technical skills and knowledge.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <FaAddressCard className={styles.BoxIconcard} />
              <p>Provide scopes to techies & non-techies-all alike.</p>
            </div>
            <div className={styles.iconBox}>
              <FaClone className={styles.BoxIconclone} />
              <p>Ensure an extremely personalized learning experience.</p>
            </div>
          </div>
        </div>
        <div className={styles.MiddleImg}></div>

      </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
        <h3>Placement Highlights</h3>
        <div className={styles.iconBoxP}>
            <div className={styles.iconBoxInner}>
            <BsGraphUp className={styles.BoxIcon} />
            <div>
            <CountUp
                    end={450}
                    delay={2}
                    duration={2}
                    suffix="%"
                    className={
                    [styles.textStyle]
                }
                />
            <p className={styles.list}>Highest Salary Hike</p>
            </div>
            </div>
            <div className={styles.iconBoxInner}>
            <FaAngleDoubleUp className={styles.BoxIcon} />
            <div>
            <CountUp
                    end={97}
                    delay={2}
                    duration={2}
                    suffix="%"
                    className={
                    [styles.textStyle]
                }
                />
            <p className={styles.list}>Average Salary Hike</p>
            </div>
            </div>
            <div className={styles.iconBoxInner}>
            <FaHandsHelping className={styles.BoxIcon} />
            <div>
            <CountUp
                    end={250}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
            <p className={styles.list}>Hiring Partners</p>
            </div>
            </div>
            <div className={styles.iconBoxInner}>
            <FaUserGraduate className={styles.BoxIcon} />
            <div className={styles.CountBox}>
            <CountUp
                    end={10000}
                    delay={2}
                    duration={2}
                    suffix="+"
                    className={
                    [styles.textStyle]
                }
                />
            <p className={styles.list}>Careers Reshaped</p>
            </div>
            </div>
        </div>
        </div>
    </div>
      {/* <div className={styles.MVDiv}>
<div className={styles.CDDiv}>
        <div className={styles.CDImg}></div>
        <div className={styles.CDText}>
          <h3>Nisha Kumari</h3>
          <p className={styles.PBot}>Co-Founder</p>
          <p className={styles.list}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={styles.CDMDiv}>
        <div className={styles.CDText}>
          <h3>Abhishek Gupta</h3>
          <p className={styles.PBot}>Director</p>
          <p className={styles.list}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className={styles.CDMImg}></div>

      </div>
      </div> */}
      {/* <div className={styles.OurJourney}>
        <div className={styles.OurJourneyDiv}>
        <h3>Our Journey till date (WIP)</h3>
        <span className={styles.OurJourneyimg}>
          <Image
            src="/hiring-1.png"
            alt="Certificate"
            quality={100}
            layout="intrinsic"
            width="1350px"
            height="350px"
          />
        </span>
        </div>
    </div> */}
    {/* <div className={styles.Team}>
    <h3>Our Team</h3>
    <div className={styles.TeamM}>
            {TeamD.map((Team) => {
              const {id, title, img, para } = Team;
              return (
                <div className={styles.leftSide} key={id}>
                    <div className={styles.imgDiv}>
                  <img
                    src={img}
                    layout="intrinsic"
                    className={styles.TeamImg} 
                  />
                  </div>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.para}>
                    {para}
                  </p>
                </div>
              );
            })}
          </div>
    </div> */}
    </section>
  )
}

export default AboutUs
