import React, { useEffect, useState } from "react";
import styles from "./VideoPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
const VideoPopup = (props) => {
  let src = `https://www.youtube.com/embed/${props.ids}`;
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return props.triggers ? (
    <div className={styles.FramePopup}>
      <div className={styles.iframeHolder}>
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTriggers(false);
          }}
        />
        <iframe
          width={mobile ? "380" : "830"}
          height={mobile ? "240" : "480"}
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            border: "4px solid white",
            borderRadius: "4px",
          }}
        ></iframe>
      </div>
    </div>
  ) : (
    ""
  );
};

export default VideoPopup;
