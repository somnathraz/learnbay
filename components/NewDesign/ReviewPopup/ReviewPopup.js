import React, { useEffect, useState } from "react";
import styles from "./ReviewPopup.module.scss";
import { AiOutlineRise } from "react-icons/ai";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ReviewPopup = (props) => {
  let color = "transparent";
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

        <div className={styles.InnerGrid}>
          <div className={styles.mainSlider}>
            <div className={styles.imgP}>
              <div className={styles.name}>
                <h3>{props.title.name}</h3>
                <p>{props.title.position}</p>
              </div>
              <div className={styles.imgWrap}>
                <Image
                  src={props.imgSrc.pLogo}
                  layout="intrinsic"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="preksha-home"
                />
              </div>
            </div>
            <div className={styles.paraDiv}>
              <p className={styles.para}>{props.desc}</p>
            </div>

            <div className={styles.imgHike}>
              <div>
                <Image
                  src={props.imgSrc.cLogo}
                  layout="intrinsic"
                  loading="lazy"
                  width={mobile ? 130 : 140}
                  height={mobile ? 21 : 23}
                  alt="preksha-home"
                />
              </div>
              <div className={styles.nameHike}>
                <p>
                  <AiOutlineRise />
                  {props.title.hike}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReviewPopup;
