import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const Form = ({ popup, setTrigger, downloadBrochure }) => {
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
    Brief: "",
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

  let endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // if (router.pathname === "/data-science-certification-courses") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/advance-data-science-certification-courses") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/artificial-intelligence-certification-course") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/data-science-ai-for-managers") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-certification-course") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/business-analytics-certification-course") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }
  // if (router.pathname === "/data-analytics-certification-course") {
  //   endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  // }

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

    if (router.pathname === "/data-science-certification-courses") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-data-science-certification-courses") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-data-science-certification-courses" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/artificial-intelligence-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/artificial-intelligence-certification-course" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-for-managers") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-for-managers" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-certification-course" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/business-analytics-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/business-analytics-certification-course" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-analytics-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-analytics-certification-course" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
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

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper}>
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
        <div className={styles.formWrapper}>
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
          />
        </div>
        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option className={styles.option} value="">
              Select Your Work Experience
            </option>
            <option value="College Students">College Student</option>
            <option value="Fresher (less than 1 year)">
              Fresher (less than 1 year)
            </option>
            <option value="1 to 3 years">1 to 3 years</option>
            <option value="3 to 7 years">3 to 7 years</option>
            <option value="7 to 12 years">7 to 12 years</option>
            <option value="12+ years">12+ years</option>
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
              <option value="Morning between (10 AM - 11 AM)">
                Morning between (10 AM - 11 AM)
              </option>
              <option value="Afternoon between (11 AM - 12 PM)">
              Afternoon between (11 AM - 12 PM)
              </option>
              <option value="Afternoon between (12 PM - 01 PM)">
              Afternoon between (12 PM - 01 PM)
              </option>
              <option value="Evening between (02 PM - 03 PM)">
                Evening between (02 PM - 03 PM)
              </option>
              <option value="Evening between (03 PM - 04 PM)">
                Evening between (03 PM - 04 PM)
              </option>
              <option value="Evening between (04 PM - 05 PM)">
                Evening between (04 PM - 05 PM)
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
<div className={popup ? styles.formWrappers : styles.formWrapper}>
        <input
            type="textarea"
            name="Brief"
            className={popup ? styles.NameInputs : styles.NameInput}
            placeholder="Tell us something about yourself"
            value={query.Brief}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Apply Now"}
        </button>
      </form>
    </div>
  );
};

export default Form;
 