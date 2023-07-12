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

  let endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";

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

    if (
      router.pathname === "/about-us" ||
      router.pathname === "/advance-data-science-certification-courses" ||
      router.pathname ===
        "/artificial-intelligence-ai-course-training-bangalore" ||
      router.pathname ===
        "/artificial-intelligence-ai-course-training-canada" ||
      router.pathname ===
        "/artificial-intelligence-ai-course-training-chennai" ||
      router.pathname === "/artificial-intelligence-ai-course-training-delhi" ||
      router.pathname === "/artificial-intelligence-ai-course-training-dubai" ||
      router.pathname ===
        "/artificial-intelligence-ai-course-training-hyderabad" ||
      router.pathname ===
        "/artificial-intelligence-ai-course-training-mumbai" ||
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
      router.pathname === "/dsa-system-design" ||
      router.pathname === "/full-stack-software-development-program" ||
      router.pathname === "/full-stack-web-development-program" ||
      router.pathname === "/" ||
      router.pathname === "/data-science-ai-masters-program" ||
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
      router.pathname === "/submit-info" ||
      router.pathname === "/terms-conditions" ||
      router.pathname === "/Thank-you" ||
      router.pathname === "/"
    ) {
      router.push("/Thank-you-counselling");
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
            placeholder="Enter your Email*"
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
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Refer Now"}
        </button>
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default Form;
