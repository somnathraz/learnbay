import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const Form = ({ popup, setTrigger, downloadBrochure, event }) => {
  const router = useRouter();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference

  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    scheduleTime: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value });
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

  let endPoint = "https://getform.io/f/3ffe7485-ceb4-49df-8e77-bdc5779146b2";
  if (router.pathname === "/Data-Science-course") {
    endPoint = "https://getform.io/f/54fd4b4c-1818-4835-9c4b-5b189a8b73a3";
  }
  if (router.pathname === "/Data-Science-and-Ai-course") {
    endPoint = "https://getform.io/f/54fd4b4c-1818-4835-9c4b-5b189a8b73a3";
  }
  if (router.pathname === "/Full-stack-event") {
    endPoint = "https://getform.io/f/e0b3b3f6-1515-4536-aa9c-36af5d4196cd";
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
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        scheduleTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    if (router.pathname === "/Data-Science-course") {
      router.push("/Thank-you-ds");
      return;
    }

    if (router.pathname === "/Data-Science-and-Ai-course") {
      router.push("/Thank-you-ds");
      return;
    }
    if (router.pathname === "/") {
      router.push("/Thank-you-fs");
    }
    if (router.pathname === "/Full-stack-developer-course") {
      router.push("/Thank-you-fs");
      return;
    }
    if (router.pathname === "/Full-stack-development-course") {
      router.push("/Thank-you-fs");
    }
    if (router.pathname === "/Full-stack-event") {
      router.push("/Thank-You-fs-event");
    }
  };
  const pastDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = (today.getDate() < 10 ? "0" : "") + today.getDate();
    mm = (today.getMonth() + 1).toString().padStart(2, "0");
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const maxDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = (today.getDate() < 10 ? "0" : "") + (today.getDate() + 4);
    mm = (today.getMonth() + 1).toString().padStart(2, "0");
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  let btnText = "Apply Now";
  if (event) {
    btnText = "Register Now";
  }
  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <input
            type="text"
            name="name"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Full Name*"
            value={query.name}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email*"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div
          className={styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
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
          />
        </div>
        <div
          className={popup ? styles.formWrappers : styles.formWrapper}
          style={event ? { width: "100%" } : { width: "80%" }}
        >
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option className={styles.option} value="">
              Select Your Work Experience
            </option>
            <option value="College Students">College Students</option>
            <option value="Fresher ( less than 1 year)">
              Fresher ( less than 1 year)
            </option>
            <option value="1 to 3 year">1 to 3 year</option>
            <option value="3 to 7 year">3 to 7 year</option>
            <option value="7 to 12 year">7 to 12 year</option>
            <option value="12+ year">12+ year</option>
          </select>
        </div>
        {popup ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="scheduleTime"
              required
              value={query.scheduleTime}
              onChange={handleParam()}
            >
              <option className={styles.option} value="">
                Scheduled Your Appointment
              </option>
              <option value="Morning(9-12)">
                Morning between (9 AM -12 Noon)
              </option>
              <option value="AfterNoon(12-03)">
                AfterNoon Between (12-03 PM)
              </option>
              <option value="Evening(03-07)">
                Evening between (03 PM -07 PM)
              </option>
            </select>
            <input
              type="hidden"
              id="url"
              name="url"
              value={router.asPath}
            ></input>
            {/* <div className={styles.inner}>
              <input
                id="date"
                className={styles.date}
                min={pastDates()}
                max={maxDates()}
                type="date"
                name="date"
                value={query.date}
                onChange={handleParam()}
              />
              <input
                id="time"
                className={styles.time}
                type="time"
                name="time"
                value={query.time}
                onChange={handleParam()}
              />
            </div> */}
          </div>
        ) : (
          ""
        )}

        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : btnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
