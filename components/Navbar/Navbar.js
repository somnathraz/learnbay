import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdOutlineArrowForward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { useRouter } from "next/router";
import Tabs from "../Tabs/Tabs";

const Navbar = () => {
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu className={styles.ham} onClick={showMenu} />
          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="#Feature">Program Features</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="#review">Reviews</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="#project">Projects</Link>
              </span>

              <span style={{ marginBottom: "20px" }} onClick={showMenu}>
                <Link href="#faq">FAQ's</Link>
              </span>
            </div>
          </div>
          <a href="/">
            <Image
              src="/Learnbay-Logo.webp"
              alt="Skillslash"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              height="60px"
            />
          </a>
          {mobile ? (
            <button onClick={() => setIcon(!icon)} className="hoverBtn">
              Courses
              {icon ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          ) : (
            <button
              onMouseEnter={() => setIcon(true)}
              onMouseOver={() => setIcon(true)}
              onClick={() => setIcon(!icon)}
              className="hoverBtn"
            >
              Courses
              {icon ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          )}

          {icon ? (
            <div
              className="megaMenu"
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <Tabs />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.right}>
          <span>
            <Link href="#review">Home</Link>
          </span>

          <span>
            <Link href="#who">Demo</Link>
          </span>

          <span>
            <Link href="#project">Blog</Link>
          </span>

          <span>
            <Link href="#About">Contact</Link>
          </span>

          <button onClick={popupShow} className="outLineBtn">
            Apply For Counselling
            <MdOutlineArrowForward />
          </button>

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
