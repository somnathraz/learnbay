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

const Form = ({ popup, setTrigger, downloadBrochure, radio }) => {
  const router = useRouter();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference
  const [startDate, setStartDate] = useState();
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    Brief: "",
    dateTime: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value,dateTime: startDate  });
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
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        jobDescription: "",
        workExperience: "",
        dateTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    if (
      router.pathname === "/about-us" ||
      router.pathname === "/advance-data-science-certification-courses" ||
      router.pathname === "/artificial-intelligence-ai-course-training-bangalore" ||
      router.pathname === "/artificial-intelligence-ai-course-training-canada" ||
      router.pathname === "/artificial-intelligence-ai-course-training-chennai" ||
      router.pathname === "/artificial-intelligence-ai-course-training-delhi" ||
      router.pathname === "/artificial-intelligence-ai-course-training-dubai" ||
      router.pathname === "/artificial-intelligence-ai-course-training-hyderabad" ||
      router.pathname === "/artificial-intelligence-ai-course-training-mumbai" ||
      router.pathname === "/artificial-intelligence-ai-course-training-pune" ||
      router.pathname === "/artificial-intelligence-certification-course" ||
      router.pathname === "/business-analytics-certification-course" ||
      router.pathname === "/business-analytics-course-training-in-bangalore" ||
      router.pathname === "/business-analytics-course-training-in-canada" ||
      router.pathname === "/business-analytics-course-training-in-chennai" ||
      router.pathname === "/business-analytics-course-training-in-delhi" ||
      router.pathname === "/business-analytics-course-training-in-dubai" ||
      router.pathname === "/business-analytics-course-training-in-hyderabad" ||
      router.pathname === "/business-analytics-course-training-in-mumbai" ||
      router.pathname === "/business-analytics-course-training-in-pune" ||
      router.pathname === "/contact-us" ||
      router.pathname === "/data-analytics-certification-course" ||
      router.pathname === "/data-analytics-course-training-in-bangalore" ||
      router.pathname === "/data-analytics-course-training-in-canada" ||
      router.pathname === "/data-analytics-course-training-in-chennai" ||
      router.pathname === "/data-analytics-course-training-in-delhi" ||
      router.pathname === "/data-analytics-course-training-in-dubai" ||
      router.pathname === "/data-analytics-course-training-in-hyderabad" ||
      router.pathname === "/data-analytics-course-training-in-mumbai" ||
      router.pathname === "/data-analytics-course-training-in-pune" ||
      router.pathname === "/data-science-ai-for-managers" ||
      router.pathname === "/data-science-certification-courses" ||
      router.pathname === "/data-science-course-training-in-bangalore" ||
      router.pathname === "/data-science-course-training-in-canada" ||
      router.pathname === "/data-science-course-training-in-chennai" ||
      router.pathname === "/data-science-course-training-in-delhi" ||
      router.pathname === "/data-science-course-training-in-dubai" ||
      router.pathname === "/data-science-course-training-in-hyderabad" ||
      router.pathname === "/data-science-course-training-in-mumbai" ||
      router.pathname === "/data-science-course-training-in-pune" ||
      router.pathname === "/data-science-course" ||
      router.pathname === "/demo" ||
      router.pathname === "/" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-certification-course" ||
      router.pathname === "/machine-learning-course-training-in-bangalore" ||
      router.pathname === "/machine-learning-course-training-in-canada" ||
      router.pathname === "/machine-learning-course-training-in-chennai" ||
      router.pathname === "/machine-learning-course-training-in-delhi" ||
      router.pathname === "/machine-learning-course-training-in-dubai" ||
      router.pathname === "/machine-learning-course-training-in-hyderabad" ||
      router.pathname === "/machine-learning-course-training-in-mumbai" ||
      router.pathname === "/machine-learning-course-training-in-pune" ||
      router.pathname === "/privacy-policy" ||
      router.pathname === "/refund-cancellation-policy" ||
      router.pathname === "/reviews" ||
      router.pathname === "/terms-conditions-job" ||
      router.pathname === "/submit-info" ||
      router.pathname === "/terms-conditions" ||
      router.pathname === "/Thank-you" ||
      router.pathname === "/"
    ) {
      router.push("/Thank-you");
      return;
    }

    if (
      router.pathname === "/dsa-system-design" ||
      router.pathname === "/full-stack-software-development-program" ||
      router.pathname === "/full-stack-web-development-program" 
    ) {
      router.push("/Thank-you-fsd");
      return;
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
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Full Name"
            value={query.name}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <PhoneInput
            style={
              popup
                ? {
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid grey",
                    padding: "10px",
                  }
                : {
                    border: "0",
                    height: "50px",
                    borderRadius: "3px",
                    borderBottom: "1px solid grey",
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
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="jobDescription"
            placeholder="Job Description"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value={query.jobDescription}
            onChange={handleParam()}
          />
        </div>
        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option value="Work Experience">Work Experience</option>
            <option value="1 to 3 year">Fresher or 0 year</option>
            <option value="1 to 3 year">1 to 3 years</option>
            <option value="3 to 7 year">3 to 7 years</option>
            <option value="7 to 12 year">7 to 12 years</option>
            <option value="12+ year">12+ years</option>
          </select>
        </div>
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
              value="Data Science Program"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science Program&nbsp;
            <input
              id="Full Stack Program"
              value="Full Stack Program"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Full Stack Program
          </div>
        ) : (
          ""
        )}
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Apply For Counselling"}
        </button>
      </form>
    </div>
  );
};

export default Form;
 