import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./BoxShape.module.css";
import { MdLiveTv } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import "swiper/css/pagination";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
  Box5h5,
  box5desc,
  Box6h5,
  box6desc,
}) => {
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <div className={styles.boxWrapper}>
      <p className={styles.pTop}>Program Features</p>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <MdLiveTv className={styles.boxIcon} />

            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div className={hover ? styles.box : styles.boxActive}>
            {hover ? (
              <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-alt.svg" loading="lazy" />
            ) : (
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/capstone-live-home.svg"
                alt="data-science"
                className={styles.icon}
                loading="lazy"
              />
            )}

            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FiUser className={styles.boxIcon} />
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <BsGraphUp className={styles.boxIcon} />

            <h5>{Box4h5}</h5>
            <p>{box4desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <FiUser className={styles.boxIcon} />
            <h5>{Box5h5}</h5>
            <p>{box5desc}</p>
          </div>
          <div
            className={styles.box}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <BsGraphUp className={styles.boxIcon} />

            <h5>{Box6h5}</h5>
            <p>{box6desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
