import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  radio,
  event,
  dataScience,
  fullStack,
  google,
  workExperience,
  jobDescription,
  formThank,
  referrals,
  syllabus,
  learning,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
}) => {
  const router = useRouter();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference
  const [disable, setDisable] = useState(false);
  const [startDate, setStartDate] = useState();
  const [value, setValue] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    Brief: "",
    dateTime: "",
    WAdropdown: "",
    currentOrganization: "",
    currentDesignation: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value, dateTime: startDate });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  if (event) {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (router.pathname === "/organic") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (router.pathname === "/referrals") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (router.pathname === "/learning-learnbay" ||
router.pathname === "/learning-learnbay-select")
   {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }

  let btnText = "Apply For Counselling";
  if (event) {
    btnText = "Register Now";
  }

  if (learning) {
    btnText = "Download Resources";
  }

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(
      () => setAlertMSG(""),
      setQuery({
        name: "",
        email: "",
        phone: "",
        jobDescription: "",
        workExperience: "",
        dateTime: "",
        WAdropdown: "",
        currentOrganization: "",
        currentDesignation: "",
        url: router.asPath,
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }
    // if (dataScience) {
    //   router.push("/Thank-you");
    // }
    if (router.pathname === "/learning-learnbay")
     {
      router.push("/learning-learnbay-select");
    }
    if (router.pathname === "/learning-learnbay-select")
     {
      router.push("/Thank-you-counselling");
    }
    if (fullStack) {
      router.push("/Thank-you-fsd");
    }
    if (event) {
      router.push("/event/Thank-You-event");
    }
    if (dataScience) {
      router.push("/Thank-you", {
        pathname: "/Thank-you",
        query: {titleCourse:titleCourse, brochureLink:brochureLink },
      });
    }
    if (dataScienceCounselling) {
      router.push("/Thank-you-counselling");
    }
    if (
      router.pathname === "/organic" ||
    router.pathname === "/referrals"
    )
     {
      setToggle(false);
      setAlertMSG("Form Submitted successfully");
      setDisable(false);
      setValue("");
    }
    if (router.pathname === "/Thank-you") {
      setToggle(false);
      setAlertMSG("Form Submitted successfully");
      setDisable(false);
      setValue("");
    }
  };
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="name"
            className={popup ? styles.NameInputs : styles.NameInputs}
            required
            placeholder="Enter your Full Name"
            value={query.name}
            // style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            className={popup ? styles.EmailInputs : styles.EmailInputs}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <PhoneInput
            style={
              popup
                ? {
                  border: "0",
                  height: "50px",
                  borderRadius: "10px",
                  padding: "10px 10px",
                  border: "1px solid grey",
                  }
                : {
                    border: "0",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px 10px",
                    border: "1px solid grey",
                  }
            }
            name="phone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Phone Number"
            className={popup ? styles.Phones : styles.Phone}
            value={value}
            onChange={setValue}
            required
          />
        </div>
        { jobDescription ? (
          ""
        ) : (
          <div className={styles.formWrapper}>
          <input
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            className={popup ? styles.EmailInputs : styles.EmailInputs}
            value={query.jobDescription}
            onChange={handleParam()}
          />
        </div>
        )

        }

        {workExperience ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <select
              name="workExperience"
              required
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option value="Work Experience">Work Experience</option>
              <option value="Fresher or 0 year">Fresher or 0 year</option>
              <option value="1 to 3 year">1 to 3 year</option>
              <option value="3 to 7 year">3 to 7 year</option>
              <option value="7 to 12 year">7 to 12 year</option>
              <option value="12+ year">12+ year</option>
            </select>
          </div>
        )}

        {google ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="WAdropdown"
              required
              value={query.WAdropdown}
              onChange={handleParam()}
            >
              <option value="Select One">Select One</option>
              <option value="Calls">Calls</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Referral">Referral</option>
              <option value="Krishna Sir">Krishna Sir</option>
            </select>
          </div>
        ) : (
          ""
        )}

{referrals ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="WAdropdown"
              required
              value={query.WAdropdown}
              onChange={handleParam()}
            >
              <option value="Select One">Select One</option>
              <option value="Referral">Referral</option>
              <option value="Krishna Sir">Krishna Sir</option>
            </select>
          </div>
        ) : (
          ""
        )}

        {popup ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <input
              type="hidden"
              id="url"
              name="url"
              value={router.asPath}
            ></input>
          </div>
        ) : (
          ""
        )}

        {/* <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <div className={styles.inner}>
              <DatePicker
                selected={startDate}
                name="dateTime"
                id="dateTime"
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                includeDateIntervals={[
                  {
                    start: subDays(new Date(), 1),
                    end: addDays(new Date(), 5),
                  },
                ]}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                wrapperClassName={styles.date}
                className={styles.datePicker}
                placeholderText="Select Date and Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                required
                minTime={setHours(setMinutes(new Date(), 0), 10)}
                maxTime={setHours(setMinutes(new Date(), 0), 22)}
              />
            </div>
          </div> */}
        {radio ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <input
              id="Data Science Program"
              value="Data Science & Artificial Intelligence Courses "
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science & AI Courses &nbsp;
            <br />
            <input
              id="Full Stack Program"
              value="Software/Web Development (DSA & System Design)"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Software/Web Development <br />
            &nbsp;&nbsp;&nbsp;&nbsp;(DSA & System Design)
          </div>
        ) : (
          ""
        )}

        {/* Form Thank You */}
        {formThank ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option value="Work Experience">Work Experience</option>
            <option value="Less then 1 Year">Less Then 1 Year</option>
            <option value="1 to 3 year">1 to 3 Year</option>
            <option value="3 to 8 year">3 to 8 Year</option>
            <option value="7 to 12 year">8+ Years</option>
          </select>
        </div>
        ) : (
          ""
        )
        }

{formThank ? (
                  <div className={styles.formWrapper}>
                  <input
                    type="text"
                    name="currentOrganization"
                    className={popup ? styles.NameInputs : styles.NameInput}
                    required
                    placeholder="Your Current Organization"
                    value={query.currentOrganization}
                    style={{ borderBottom: "1px solid grey" }}
                    onChange={handleParam()}
                  />
                </div>
        ) : (
          ""
        )
        }

{formThank ? (
                  <div className={styles.formWrapper}>
                  <input
                    type="text"
                    name="currentDesignation"
                    className={popup ? styles.NameInputs : styles.NameInput}
                    required
                    placeholder="Your Current Designation"
                    value={query.currentDesignation}
                    style={{ borderBottom: "1px solid grey" }}
                    onChange={handleParam()}
                  />
                </div>
        ) : (
          ""
        )
        }

        
        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
        {syllabus ? (
          <div className={styles.bottomWrap}>
            <p className={styles.FormText} style={{ fontSize: "10px" }}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button type="submit" className={styles.button}>
              {downloadBrochure ? "Download Now" : btnText}{" "}
            </button>
          </div>
        ) : (
          <>
            <p className={styles.FormText} style={{ fontSize: "10px" }}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button type="submit" className={styles.button}>
              {downloadBrochure ? "Download Now" : btnText}{" "}
            </button>
          </>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default Form;
