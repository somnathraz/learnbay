import React from 'react'
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import styles from "./BatchDetails.module.css";
import Form from "../../Form/Form";

function BatchDetails({
    CourseFeeHead,
    WebDev,
    FullStack,
}) {
  return (
    <>
          <section className={styles.Syllabus}>
        <p className={styles.infop}>{CourseFeeHead}</p>
        <div className={styles.mobileView}>
          {FullStack ? (
            <div className={styles.NewBatch}>
              <div className={styles.NewOrange}>
                <div>
                  <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    7th April 2023
                  </p>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />8 AM to 10 AM
                  </p>
                </div>
              </div>
              <div className={styles.NewBlue}>
                <div>
                  <p className={styles.listDay}>Weekend Afternoon (Sat-Sun)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    9th April 2023
                  </p>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />
                    12:30 PM to 4 PM
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {WebDev ? (
                <div className={styles.NewBatch}>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        31st March 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.NewBatch}>
                  <div className={styles.NewOrange}>
                    <div>
                      <p className={styles.listDay}>
                        Weekend Morning (Sat-Sun)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        9th April 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                      </p>
                    </div>
                  </div>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Wed-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        14th April 2023
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.desktopView}>
          <div className={styles.heading}></div>
          {FullStack ? (
            <div className={styles.NewBatch}>
              <div className={styles.NewOrange}>
                <div>
                  <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    7th April 2023
                  </p>
                </div>
                <div>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />8 AM to 10 AM
                  </p>
                </div>
              </div>
              <div className={styles.NewBlue}>
                <div>
                  <p className={styles.listDay}>Weekend Afternoon (Sat-Sun)</p>
                </div>
                <div>
                  <p className={styles.list}>
                    <MdDateRange className={styles.iconOrange} />
                    9th April 2023
                  </p>
                </div>
                <div>
                  <p className={styles.list}>
                    <BiTimeFive className={styles.iconBlue} />
                    12:30 PM to 4 PM
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {WebDev ? (
                <div className={styles.NewBatch}>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Morning (Mon-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        31st March 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />7 AM to 9 AM
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.NewBatch}>
                  <div className={styles.NewOrange}>
                    <div>
                      <p className={styles.listDay}>
                        Weekend Morning (Sat-Sun)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        9th April 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                      </p>
                    </div>
                  </div>
                  <div className={styles.NewBlue}>
                    <div>
                      <p className={styles.listDay}>
                        Weekday Evening (Mon-Wed-Fri)
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        14th April 2023
                      </p>
                    </div>
                    <div>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <div className={styles.form}>
        <p className={styles.infop}>Request more information</p>
        <Form />
      </div>
    </>
  )
}

export default BatchDetails