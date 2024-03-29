import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { useRouter } from "next/router";
import Tabs from "../Tabs/Tabs";
import FormCareer from "../CareerPortal/Form/Form";

const Navbar = ({
  radio,
  event,
  dataScience,
  fullStack,
  eventO,
  careerForm,
  eventLink,
  dataScienceCounselling,
  brochureLink,
  dataScienceGeneric,
  organicADS,
}) => {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          {careerForm ? (
            <FormCareer />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={fullStack}
              dataScience={dataScience}
              upSkillingHide={true}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
            />
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        {eventLink ? (
          <div className={styles.leftImage}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              height="60px"
            />
          </div>
        ) : (
          <div className={styles.left}>
            <GiHamburgerMenu
              className={styles.ham}
              onClick={() => {
                showMenu();
                setIcon(false);
              }}
            />
            <div className={show ? styles.mobileWrapper : styles.hide}>
              <div className={styles.mobileMenu}>
                <>
                  {event ? (
                    <>
                      <span>
                        <Link href="#Feature">Program Features</Link>
                      </span>

                      <span>
                        <Link href="#trainer">Trainer Details</Link>
                      </span>
                      <span>
                        <Link href="#About">Learn About</Link>
                      </span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span onClick={showMenu}>
                        <Link href="/">Home</Link>
                      </span>
                      {/* <span onClick={showMenu}>
                        <Link href="/about-us">About Us</Link>
                      </span> */}
                      <span onClick={showMenu}>
                        <Link href="/demo">Demo</Link>
                      </span>
                      <span onClick={showMenu}>
                        <Link href="https://blog.learnbay.co/">Blog</Link>
                      </span>
                      <span onClick={showMenu}>
                        <Link href="/contact-us">Contact Us</Link>
                      </span>
                      {/* <span onClick={showMenu}>
                    <Link href="/career-portal">Career</Link>
                  </span> */}
                    </>
                  )}
                </>
              </div>
            </div>
            {event ? (
              <>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
                  objectFit="contain"
                  width={mobile ? "180" : "230"}
                  height="60px"
                />
              </>
            ) : (
              <>
                {" "}
                <a href="/">
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
                    alt="Learnbay"
                    quality={100}
                    objectFit="contain"
                    width={mobile ? "180" : "230"}
                    height="60px"
                  />
                </a>
              </>
            )}
            {event ? (
              <></>
            ) : (
              <>
                {" "}
                {mobile ? (
                  <button
                    onClick={() => {
                      setIcon(!icon);
                      setShow(false);
                    }}
                    className="hoverBtn"
                  >
                    Courses
                    {icon ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                ) : (
                  <button
                    onMouseEnter={() => setIcon(true)}
                    onMouseOver={() => setIcon(true)}
                    onClick={() => {
                      setIcon(!icon);
                      setShow(false);
                    }}
                    className="hoverBtn"
                  >
                    Courses
                    {icon ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                )}
              </>
            )}

            {icon ? (
              <div
                className={styles.megaMenu}
                onMouseOver={() => setIcon(true)}
                onMouseLeave={() => setIcon(false)}
              >
                <Tabs handleIcon={handleIcon} />
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        {eventLink ? (
          ""
        ) : (
          <div className={styles.right}>
            {organicADS ? (
             <>
             <button onClick={popupShow} className="outLineBtn">
                          Apply For Counselling
                          <FaArrowRight className={styles.icon} />
                        </button>
             </>
            ) : (
              <>
                {eventO ? (
                  ""
                ) : (
                  <>
                    {event ? (
                      <>
                        <span>
                          <Link href="#Feature">Program Features</Link>
                        </span>

                        <span>
                          <Link href="#trainer">Trainer Details</Link>
                        </span>
                        <span>
                          <Link href="#About">Learn About</Link>
                        </span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span>
                          <Link href="/">Home</Link>
                        </span>
                        {/* <span>
                      <Link href="/about-us">About Us</Link>
                    </span> */}
                        <span>
                          <Link href="/demo">Demo</Link>
                        </span>
                        <span>
                          <Link href="https://blog.learnbay.co/">Blog</Link>
                        </span>
                        <span>
                          <Link href="/contact-us">Contact Us</Link>
                        </span>
                        {/* <span>
                <Link href="/career-portal">Career</Link>
              </span> */}
                        <button onClick={popupShow} className="outLineBtn">
                          Apply For Counselling
                          <FaArrowRight className={styles.icon} />
                        </button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <Popup></Popup>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
