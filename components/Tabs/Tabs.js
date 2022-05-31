import React from "react";
import { GiRobotAntennas, GiCyberEye } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLocalFireDepartment, MdOutlineGroup } from "react-icons/md";
import { FaLaptopCode, FaBitcoin } from "react-icons/fa";
import { BsCloudCheckFill } from "react-icons/bs";
import TabData from "./TabData";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const onClickHandler = (id) => {
    let spanId = id;
  };
  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <h4>Browse by Domain</h4>

          <>
            <span
              key={TabData[0].id}
              id="0"
              onClick={(id) => onClickHandler(id)}
            >
              <MdOutlineLocalFireDepartment />
              {TabData[0].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[1].id}
              id="1"
              onClick={(id) => onClickHandler(id)}
            >
              <GiRobotAntennas />
              {TabData[1].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[2].id}
              id="2"
              onClick={(id) => onClickHandler(id)}
            >
              <FaLaptopCode />
              {TabData[2].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[3].id}
              id="3"
              onClick={(id) => onClickHandler(id)}
            >
              <BsCloudCheckFill />
              {TabData[3].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[4].id}
              id="4"
              onClick={(id) => onClickHandler(id)}
            >
              <FaBitcoin />
              {TabData[4].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[5].id}
              id="5"
              onClick={(id) => onClickHandler(id)}
            >
              <MdOutlineGroup />
              {TabData[5].title}
              <IoIosArrowForward />
            </span>
            <span
              key={TabData[6].id}
              id="6"
              onClick={(id) => onClickHandler(id)}
            >
              <GiCyberEye />
              {TabData[6].title}
              <IoIosArrowForward />
            </span>
          </>
        </div>
        <div className={styles.middlePanel}></div>
        <h4>Learn From Top Experts</h4>

        <div className={styles.rightPanel}>
          <h4>Quick Links</h4>
          <span>Free Webinar</span>
          <span>Scholarship Program</span>
          <h4>Know More about</h4>
          <span>Data Science course (Job Guarantee)</span>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
