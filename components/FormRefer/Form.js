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
  const [referValue, setReferValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    referName: "",
    referEmail: "",
    referPhone: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value });
  }, [value]);
  useEffect(() => {
    setQuery({ ...query, referPhone: referValue });
  }, [referValue]);
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/69076866-e1f7-4cf3-a7d2-12603819a5a4";
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
        referName: "",
        referEmail: "",
        referPhone: "",
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
    if (router.pathname === "/data-science-ai-for-Managers") {
      router.push("/Thank-you");
      return;
    }
    if (
      router.pathname === "/data-science-ai-for-Managers" &&
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
    if (router.pathname === "/full-stack-software-development-program" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/full-stack-web-development-program") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/full-stack-web-development-program" && downloadBrochure) {
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
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="referName"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter Referral Full Name*"
            value={query.referName}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="referEmail"
            required
            placeholder="Enter Referral Email*"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value={query.referEmail}
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
            name="referPhone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Referral Phone Number"
            className={popup ? styles.Phones : styles.Phone}
            value={referValue}
            onChange={setReferValue}
          />
        </div>
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Refer Now"}
        </button>
      </form>
    </div>
  );
};

export default Form;
