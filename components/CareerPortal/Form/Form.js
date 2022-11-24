import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  event,
  dataScience,
  fullStack,
}) => {
  const router = useRouter();

  //offset to maintain time zone difference
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
    endPoint = "https://getform.io/f/69076866-e1f7-4cf3-a7d2-12603819a5a4";
  }

  let btnText = "Apply for Counselling";
  if (event) {
    btnText = "Register Now";
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
    if (dataScience) {
      router.push("/Thank-you");
    }
    if (fullStack) {
      router.push("/Thank-you-fsd");
    }
    if (event) {
      router.push("/event/Thank-You-event");
    }
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
          <input
            type="text"
            name="birthday"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Date of Birth"
            value={query.birthday}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <label for="gender">Gender</label>
          <select name="gender" id="gender" required onChange={handleParam()}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
            name="qualification"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Qualification"
            value={query.qualification}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="experience"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Experience"
            value={query.experience}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <label for="role">Role Interested in</label>
          <select name="role" id="role" required onChange={handleParam()}>
            <option value="Sales">Sales</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
            <option value="SEO">SEO</option>
            <option value="Content Writing">Content Writing</option>
          </select>
        </div>
        <div className={styles.formWrapper}>
          <label for="resume">Upload your Resume</label>
          <input
            type="file"
            name="resume"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            value={query.resume}
            style={{ marginTop: "10px" }}
            onChange={handleParam()}
          />
        </div>
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : btnText}{" "}
        </button>
        <input type='hidden' id="zc_gad" name="zc_gad" value=""/>
      </form>
    </div>
  );
};

export default Form;
