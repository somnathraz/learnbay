import React, { useState, useEffect } from "react";
import styles from "./FormInline.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";

const FormInline = ({ popup, setTrigger, downloadBrochure }) => {
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
    setQuery({ ...query, phone: value, dateTime: startDate  });
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
    if (
      router.pathname === "/data-science-certification-courses" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-data-science-certification-courses") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/advance-data-science-certification-courses" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/artificial-intelligence-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/artificial-intelligence-certification-course" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-for-managers") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/data-science-ai-for-managers" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (
      router.pathname ===
      "/job-guarantee-or-money-back-data-science-ai-certification-course"
    ) {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-certification-course" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/business-analytics-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/business-analytics-certification-course" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-analytics-certification-course") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/data-analytics-certification-course" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/full-stack-software-development-program") {
      router.push("/Thank-you");
    }
    if (
      router.pathname === "/full-stack-software-development-program" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/full-stack-web-development-program") {
      router.push("/Thank-you");
    }
    if (
      router.pathname === "/full-stack-web-development-program" &&
      downloadBrochure
    ) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/blog") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/blog" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/about-us") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/about-us" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/contact-us") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/contact-us" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/demo") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/demo" && downloadBrochure) {
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
        <div className={styles.formGrid}>
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
                      padding: "10px",
                      borderRadius: "8px",
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
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="workExperience"
              required
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option value="Work Experience">Work Experience</option>
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
        </div>
        {/* <div className={styles.formWrappers}>
          <input
            type="textarea"
            name="Brief"
            className={popup ? styles.NameInputs : styles.NameInput}
            placeholder="Job Description"
            value={query.Brief}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div> */}
        <div className={styles.formWrappers}>
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
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          Request A Callback
        </button>
      </form>
    </div>
  );
};

export default FormInline;
