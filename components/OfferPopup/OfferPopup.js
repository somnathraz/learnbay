import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Script from "next/script";

const OfferPopup = ({
  title,
  p1,
  p2,
  p3,
  batch1,
  batch11,
  batch2,
  batch22,
  offer,
  batch3,
  batch33,
}) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10000);
    return;
  }, []);
  return (
    <>
<Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          {"@context": "http://schema.org",
          "@type": "EducationEvent",
          "name": "Data Science Course",
          "description" : "Data Science course training online with IBM certification helps you master skills in Python, Machine Learning, etc. Become a certified Data Scientist.",
          "image" : "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2Fcourse2.png&w=1080&q=75",
          "performer":"Learnbay",					 
          "offers":{"@type": "AggregateOffer","lowPrice": "49000","highPrice": "110000","url" : "https://www.learnbay.co/","availability" : "https://schema.org/InStock","price": "80000","priceCurrency": "INR","validFrom": "2022-12-15"},"startDate":"2022-12-18","endDate": "2023-09-20","url" : "https://www.learnbay.co/","duration":"50",
                                  
          "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
          "eventStatus":"http://schema.org/EventScheduled",
           "location": {"@type": "VirtualLocation", 
           "url": "https://www.learnbay.co/" 
           },
           
           
          "organizer": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "url": "https://www.learnbay.co/"
          }
           
           
           }
            `,
        }}
      />
    <div className={open ? styles.OfferPopup : styles.hide} >
      <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
      {offer ? (
            <>
      <div className={styles.Offer}>
        <h6>Ace Your Interview at MAANG with DSA & Software Development Program</h6>
        {/* <p><b>{p1}</b></p> */}
        <p>Available Batch Details :</p>
        {/* <p>{p3}</p> */}
        <li>
          <b>Weekday Evening</b>
          : 16th December, 8 PM to 10:30 PM
        </li>
        <li>
          <b>Weekend Evening</b>
          : 18th December, 12:30 PM to 4 PM
        </li>

        
        {/* <li><b>{batch3}</b>{batch33}</li> */}
        <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
        <a href="/submit-info" target="_blank">
          <button onClick={handelOpen} style={{ width: "100%" }}>
            Apply For Scholarship Now!
          </button>
        </a>
      </div>
      </>
          ) : ( 
            <>
              {" "} 
      <div className={styles.Offer}>
        <h6>Special programming session starts from 14th to 16th December from 8PM to 10PM</h6>
        {/* <h6>[ Month End Offer- 15% OFF ] Book Your Seat Now</h6> */}
        {/* <p><b>{p1}</b></p> */}
        <p>Available Batch Details :</p>
        {/* <p>{p3}</p> */}
        {/* <li>
          <b>Weekend Morning</b>
          : 9th October, 08:30 AM to 12 PM
        </li> */}
        <li>
          <b>Weekend Afternoon</b>
          : 18th December, 12.30 PM to 4 PM
        </li>
        <li>
          <b>Weekday Evening</b>
          : 23rd December, 8 PM to 10 PM
        </li>
        {/* <li><b>{batch3}</b>{batch33}</li> */}
        <p style={{ fontSize: "12px" }}>*Terms & Conditions applied.</p>
        <a href="/submit-info" target="_blank">
          <button onClick={handelOpen} style={{ width: "100%" }}>
            Apply For Scholarship Now!
          </button>
        </a>
      </div>
      </>
          )}
    </div>
    </>
  );
};

export default OfferPopup;
